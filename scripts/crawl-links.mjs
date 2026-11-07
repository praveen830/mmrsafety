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
const allLinks = new Set();
const internalHrefs = [];

files.forEach((filePath) => {
  const html = fs.readFileSync(filePath, "utf-8");
  const matches = [...html.matchAll(/href=["']([^"']+)["']/gi)];
  matches.forEach((m) => {
    const href = m[1];
    allLinks.add(href);
    if (
      href.startsWith("/") ||
      href.startsWith("https://mmrsafety.in") ||
      href.startsWith("http://localhost")
    ) {
      internalHrefs.push({ source: filePath, href });
    }
  });
});

console.log(`Found ${allLinks.size} unique links across site.`);
console.log(`Checking ${internalHrefs.length} internal links against dist files...`);

const broken = [];
internalHrefs.forEach(({ source, href }) => {
  // Strip origin
  let clean = href.replace(/^https?:\/\/[^\/]+/, "");
  // Strip query & hash
  clean = clean.split("?")[0].split("#")[0];
  if (!clean || clean === "") return;

  let testPath1 = path.join("dist", clean);
  let testPath2 = path.join("dist", clean, "index.html");
  let testPath3 = path.join("dist", clean + ".html");

  const exists =
    (fs.existsSync(testPath1) && fs.statSync(testPath1).isFile()) ||
    fs.existsSync(testPath2) ||
    fs.existsSync(testPath3);

  if (!exists) {
    broken.push({ source, href, resolved: clean });
  }
});

if (broken.length === 0) {
  console.log("SUCCESS: 0 broken internal links found! All internal links resolve to valid HTML files.");
} else {
  console.error(`Found ${broken.length} broken links:`, broken);
}
