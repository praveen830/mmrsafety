const fs = require('fs');
const path = require('path');

function findImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(findImages(fullPath));
    } else if (file.toLowerCase().includes('sport') || file.toLowerCase().includes('cricket') || file.toLowerCase().includes('turf')) {
      results.push({ path: fullPath, size: stat.size });
    }
  }
  return results;
}

console.log(findImages('public/images'));
