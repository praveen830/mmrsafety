const fs = require('fs');
const content = fs.readFileSync('src/data/servicesData.ts', 'utf8');

const regex = /slug:\s*"([^"]+)"[\s\S]*?benefits:\s*\[([\s\S]*?)\]\s*,/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const slug = match[1];
  const block = match[2];
  const imgMatches = [...block.matchAll(/image:\s*"([^"]+)"/g)].map(m => m[1]);
  console.log(`Service: ${slug} (${imgMatches.length} images)`);
  imgMatches.forEach((img, idx) => {
    const fullPath = 'public' + img;
    const exists = fs.existsSync(fullPath);
    const size = exists ? fs.statSync(fullPath).size : 'MISSING';
    console.log(`  [${idx+1}] ${img} (size: ${size})`);
  });
}
