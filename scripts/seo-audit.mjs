import fs from "fs";
import path from "path";

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else if (file.endsWith(".html")) {
      results.push(file);
    }
  });
  return results;
}

const files = getFiles("dist");
console.log(`Auditing ${files.length} HTML files in dist/...\n`);

const results = [];

files.forEach((filePath) => {
  const html = fs.readFileSync(filePath, "utf-8");
  const relPath = path.relative("dist", filePath).replace(/\\/g, "/");

  // Title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;

  // Description (supports apostrophes inside double quotes)
  const descMatch =
    html.match(/<meta\s+name=["']description["']\s+content="([^"]*)"/i) ||
    html.match(/<meta\s+content="([^"]*)"\s+name=["']description["']/i) ||
    html.match(/<meta\s+name=["']description["']\s+content='([^']*)'/i);
  const description = descMatch ? descMatch[1].trim() : null;

  // Canonical
  const canonicalMatch =
    html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
    html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : null;

  // Headings
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()
  );
  const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()
  );

  // Missing alt tags
  const imgTags = [...html.matchAll(/<img\b([^>]*)>/gi)];
  const missingAlt = [];
  imgTags.forEach((m) => {
    const attrs = m[1];
    if (!/alt\s*=/i.test(attrs)) {
      missingAlt.push(m[0]);
    } else {
      const altVal = attrs.match(/alt=["']([^"']*)["']/i);
      if (altVal && altVal[1].trim() === "") {
        missingAlt.push(m[0] + " (EMPTY ALT)");
      }
    }
  });

  // Schema tags
  const schemaMatches = [
    ...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi),
  ];
  const schemas = [];
  schemaMatches.forEach((m) => {
    try {
      const parsed = JSON.parse(m[1]);
      schemas.push({
        type: parsed["@type"] || "Unknown",
        name: parsed["name"] || parsed["serviceType"] || undefined,
      });
    } catch (e) {
      schemas.push({ error: e.message });
    }
  });

  // Open Graph & Twitter
  const ogTitle = html.match(/property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
  const ogDesc = html.match(/property=["']og:description["'][^>]*content=["']([^"']*)["']/i);
  const ogImage = html.match(/property=["']og:image["'][^>]*content=["']([^"']*)["']/i);
  const ogUrl = html.match(/property=["']og:url["'][^>]*content=["']([^"']*)["']/i);
  const twitterCard = html.match(/name=["']twitter:card["'][^>]*content=["']([^"']*)["']/i);

  // Geo Tags
  const geoRegion = html.match(/name=["']geo\.region["'][^>]*content=["']([^"']*)["']/i);
  const geoPlacename = html.match(/name=["']geo\.placename["'][^>]*content=["']([^"']*)["']/i);
  const geoPosition = html.match(/name=["']geo\.position["'][^>]*content=["']([^"']*)["']/i);
  const icbm = html.match(/name=["']ICBM["'][^>]*content=["']([^"']*)["']/i);

  results.push({
    file: relPath,
    title,
    titleLen: title ? title.length : 0,
    description,
    descLen: description ? description.length : 0,
    canonical,
    h1Count: h1Matches.length,
    h1: h1Matches,
    h2Count: h2Matches.length,
    missingAltCount: missingAlt.length,
    missingAltSamples: missingAlt.slice(0, 3),
    schemas,
    hasOg: !!(ogTitle && ogDesc && ogImage && ogUrl),
    hasTwitterCard: !!twitterCard,
    hasGeo: !!(geoRegion && geoPlacename && geoPosition && icbm),
  });
});

console.log(JSON.stringify(results, null, 2));
