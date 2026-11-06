const https = require('https');
const fs = require('fs');

async function searchUnsplash(query) {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=5`;
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.results.map(r => ({
            id: r.id,
            desc: r.alt_description || r.description,
            regular: r.urls.regular,
            full: r.urls.full
          })));
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  const queries = [
    'cricket practice net',
    'football goal net',
    'indoor badminton court net',
    'tennis court net',
    'sports net fence playground',
    'sports ground netting enclosure'
  ];

  for (const q of queries) {
    console.log(`\n--- Query: "${q}" ---`);
    const results = await searchUnsplash(q);
    for (const r of results.slice(0, 3)) {
      console.log(`  [${r.id}] ${r.desc}`);
      console.log(`    URL: ${r.regular}`);
    }
  }
}

run();
