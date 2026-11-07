const http = require('http');

const slugs = ['invisible-grills', 'safety-nets', 'pigeon-safety-nets', 'sports-nets', 'cloth-hangers', 'bird-spikes'];

function fetchPage(slug) {
  return new Promise(resolve => {
    http.get('http://localhost:4321/services/' + slug + '/', res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ slug, html: data }));
    });
  });
}

async function run() {
  for (const slug of slugs) {
    const { html } = await fetchPage(slug);
    console.log('=== Service: ' + slug + ' ===');
    console.log('  Contains Recent Installations?: ' + (html.includes('Recent ') && html.includes('Installations in Bengaluru')));
    
    // Extract all img srcs
    const regex = /<img[^>]+src=["']([^"']+)["']/g;
    const srcs = [];
    let m;
    while ((m = regex.exec(html)) !== null) {
      srcs.push(m[1]);
    }
    console.log('  Total images rendered:', srcs.length);
    
    // Check duplicates
    const counts = {};
    srcs.forEach(s => counts[s] = (counts[s] || 0) + 1);
    const dups = Object.entries(counts).filter(([s, c]) => c > 1 && !s.includes('logo') && !s.includes('favicon'));
    if (dups.length > 0) {
      console.log('  DUPLICATE IMAGES DETECTED ON THIS PAGE:');
      dups.forEach(([s, c]) => console.log('    ' + s + ' appears ' + c + ' times'));
    } else {
      console.log('  All images on this page are 100% UNIQUE!');
    }
  }
}
run();
