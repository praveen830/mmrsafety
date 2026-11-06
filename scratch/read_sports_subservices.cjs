const fs = require('fs');
const content = fs.readFileSync('src/data/servicesData.ts', 'utf8');

const sportsIndex = content.indexOf('"sports-nets":');
if (sportsIndex !== -1) {
  const subIndex = content.indexOf('subServices:', sportsIndex);
  console.log(content.slice(subIndex, subIndex + 2500));
}
