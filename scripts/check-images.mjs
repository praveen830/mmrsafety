import fs from 'fs';

const servicesDataContent = fs.readFileSync('src/data/servicesData.ts', 'utf-8');
const homeDataContent = fs.readFileSync('src/data/homeData.ts', 'utf-8');

// Find all image strings
const imgRegex = /["'](\/(?:images|logos)\/[^"']+\.(?:webp|jpg|jpeg|png))["']/g;

function analyze(content, name) {
  let match;
  const counts = {};
  while ((match = imgRegex.exec(content)) !== null) {
    const src = match[1];
    counts[src] = (counts[src] || 0) + 1;
  }
  console.log(`=== ${name} Image counts ===`);
  const duplicates = Object.entries(counts).filter(([_, c]) => c > 1);
  if (duplicates.length === 0) {
    console.log('No duplicates found.');
  } else {
    duplicates.forEach(([img, count]) => {
      console.log(`${count}x: ${img}`);
    });
  }
}

analyze(servicesDataContent, 'servicesData.ts');
analyze(homeDataContent, 'homeData.ts');
