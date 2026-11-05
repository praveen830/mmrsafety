const fs = require("fs");
const path = require("path");

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith(".ts") || file.endsWith(".astro")) {
      results.push(file);
    }
  });
  return results;
}

const files = walk("src");
const imageUsage = {};

files.forEach(file => {
  const content = fs.readFileSync(file, "utf8");
  const regex = /["'](\/(?:images|logos)\/[^"']+\.(?:webp|jpg|png))["']/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    const img = m[1];
    if (!imageUsage[img]) imageUsage[img] = [];
    imageUsage[img].push(path.relative(".", file));
  }
});

console.log("Images used in multiple files or occurrences:");
Object.entries(imageUsage).filter(([_, list]) => list.length > 2).sort((a,b) => b[1].length - a[1].length).forEach(([img, list]) => {
  console.log(`\n${list.length}x : ${img}`);
  console.log("   Files: " + [...new Set(list)].join(", "));
});
