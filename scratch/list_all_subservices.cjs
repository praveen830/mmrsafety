const fs = require('fs');

const content = fs.readFileSync('src/data/servicesData.ts', 'utf8');

// Match service keys and their subServices
const serviceKeys = [
  'invisible-grills',
  'safety-nets',
  'pigeon-safety-nets',
  'bird-spikes',
  'cloth-hangers',
  'sports-nets'
];

for (const key of serviceKeys) {
  const serviceRegex = new RegExp(`"${key}":\\s*\\{[\\s\\S]*?subServices:\\s*\\[([\\s\\S]*?)\\]\\s*,\\s*materials:`, 'm');
  const match = content.match(serviceRegex);
  if (match) {
    const subServicesBlock = match[1];
    const items = [...subServicesBlock.matchAll(/id:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g)];
    console.log(`\n=== ${key} (${items.length} subservices) ===`);
    for (const item of items) {
      console.log(`  - [${item[1]}] ${item[2]} -> ${item[3]}`);
    }
  } else {
    console.log(`\n=== ${key} (No subServices found) ===`);
  }
}
