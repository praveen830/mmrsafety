const fs = require('fs');
const content = fs.readFileSync('src/data/servicesData.ts', 'utf8');

const sportsIndex = content.indexOf('"sports-nets":');
if (sportsIndex !== -1) {
  console.log(content.slice(sportsIndex, sportsIndex + 2500));
}
