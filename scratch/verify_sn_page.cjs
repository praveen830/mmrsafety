const fs = require('fs');

const servicesContent = fs.readFileSync('src/data/servicesData.ts', 'utf8');
const pos = servicesContent.indexOf('slug: "safety-nets"');
const nextPos = servicesContent.indexOf('slug: "pigeon-safety-nets"');
const chunk = servicesContent.substring(pos, nextPos);

const imgMatches = [...chunk.matchAll(/image:\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log('safety-nets total images:', imgMatches.length);

const counts = {};
let missing = [];
for (const img of imgMatches) {
  counts[img] = (counts[img] || 0) + 1;
  if (!fs.existsSync('public' + img)) missing.push(img);
}

const dups = Object.entries(counts).filter(([_, c]) => c > 1);
console.log('Duplicates:', dups);
console.log('Missing files:', missing);

// Print subservices list
const subMatches = [...chunk.matchAll(/subServices:\s*\[([\s\S]*?)\]\s*,\s*specifications:/g)];
if (subMatches.length > 0) {
  const titles = [...subMatches[0][1].matchAll(/title:\s*"([^"]+)"/g)].map(m => m[1]);
  const imgs = [...subMatches[0][1].matchAll(/image:\s*"([^"]+)"/g)].map(m => m[1]);
  console.log('\nSubservices:');
  titles.forEach((t, i) => console.log(`  ${i+1}. ${t} -> ${imgs[i]}`));
}
