const https = require('https');

function searchCommons(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(query)}&gsrlimit=5&prop=imageinfo&iiprop=url|mime|size&format=json`;
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'MMRSafetyBot/1.0 (info@mmrsafety.com)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query?.pages || {};
          const results = Object.values(pages).map(p => ({
            title: p.title,
            url: p.imageinfo?.[0]?.url,
            width: p.imageinfo?.[0]?.width,
            height: p.imageinfo?.[0]?.height,
            mime: p.imageinfo?.[0]?.mime
          }));
          resolve(results);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  const queries = [
    'cricket practice nets',
    'football goal net',
    'badminton net court',
    'tennis net court',
    'playground safety net fence',
    'sports ground netting enclosure'
  ];

  for (const q of queries) {
    console.log(`\n--- Query: "${q}" ---`);
    const results = await searchCommons(q);
    for (const r of results.slice(0, 3)) {
      console.log(`  ${r.title} (${r.width}x${r.height}) -> ${r.url}`);
    }
  }
}

run();
