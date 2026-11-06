const https = require('https');

const testStairs = [
  'photo-1541123437800-1bb1317badc2', // modern staircase
  'photo-1600585154340-be6161a56a0c', // modern interior
  'photo-1576013551627-0cc20b96c2a7', // swimming pool
  'photo-1572331165267-854da2b10ccc', // luxury pool
  'photo-1507652313519-d4e9174996dd', // pool outdoor
];

testStairs.forEach(id => {
  const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;
  https.get(url, res => {
    console.log(`${id}: status ${res.statusCode}, size: ${res.headers['content-length']}`);
  });
});
