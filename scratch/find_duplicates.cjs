const fs = require("fs");
const text = fs.readFileSync("src/data/servicesData.ts", "utf8");
const regex = /image:\s*["']([^"']+)["']/g;
let m;
const matches = [];
while ((m = regex.exec(text)) !== null) {
  matches.push(m[1]);
}
const counts = {};
matches.forEach(img => { counts[img] = (counts[img] || 0) + 1; });
console.log("Total image references in servicesData.ts:", matches.length);
console.log("Unique images:", Object.keys(counts).length);
console.log("\nDuplicated images in servicesData.ts:");
Object.entries(counts).filter(([_, c]) => c > 1).sort((a,b) => b[1] - a[1]).forEach(([img, c]) => console.log(`  ${c}x : ${img}`));
