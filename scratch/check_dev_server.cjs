const http = require('http');

http.get('http://localhost:4321/services/pigeon-safety-nets/', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Contains FAQ?', html.includes('Everything You Need to Know'));
    console.log('Contains 4-Step?', html.includes('4-Step'));
    console.log('Contains Common Applications?', html.includes('Common Applications'));
    console.log('Contains Materials & Quality?', html.includes('Materials & Quality'));
    console.log('Contains Fine Mesh & Hardware?', html.includes('Fine Mesh & Hardware'));
    console.log('Contains Call Now?', html.includes('Call Now'));
    console.log('Contains Free Site Visit?', html.includes('Free Site Visit'));
    console.log('Contains WhatsApp?', html.includes('WhatsApp'));
  });
}).on('error', err => {
  console.log('Error:', err.message);
});
