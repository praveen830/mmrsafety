const http = require('http');

http.get('http://localhost:4321/services/pigeon-safety-nets/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const headings = [...html.matchAll(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    console.log('Headings on /services/pigeon-safety-nets/:');
    headings.forEach((h, i) => console.log(`  ${i+1}. ${h}`));
  });
}).on('error', err => {
  console.log('Error:', err.message);
});
