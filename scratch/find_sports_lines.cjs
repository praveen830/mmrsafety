const fs = require('fs');
const content = fs.readFileSync('src/data/servicesData.ts', 'utf8');

const sportsIndex = content.indexOf('"sports-nets":');
if (sportsIndex !== -1) {
  const subIndex = content.indexOf('subServices:', sportsIndex);
  const matIndex = content.indexOf('materials:', subIndex);
  console.log(content.slice(subIndex, matIndex));
}
