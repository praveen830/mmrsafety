const https = require('https');
const fs = require('fs');
const sharp = require('sharp');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status ' + res.statusCode));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close(() => resolve());
      });
      stream.on('error', reject);
    }).on('error', reject);
  });
}

async function testDownload() {
  const cricketUrl = 'https://upload.wikimedia.org/wikipedia/commons/9/96/Bishop%27s_Stortford_Cricket_Club_practice_nets%2C_Hertfordshire_1.jpg';
  const footballUrl = 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Football_goal_net.jpg';
  const tennisUrl = 'https://upload.wikimedia.org/wikipedia/commons/5/51/2015_US_Open_Tennis_-_Qualies_-_The_Net_%2820961952168%29.jpg';
  const schoolUrl = 'https://upload.wikimedia.org/wikipedia/commons/d/db/Hudson_River_Park_td_%282021-11-24%29_082_-_Pier_26_Sports_Court.jpg';
  const enclosureUrl = 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Hudson_River_Park_td_%282021-11-24%29_089_-_Pier_26_Sports_Court.jpg';

  console.log('Downloading test images...');
  await download(cricketUrl, 'scratch/test_cricket.jpg');
  console.log('Cricket downloaded!');
  await download(footballUrl, 'scratch/test_football.jpg');
  console.log('Football downloaded!');
  await download(tennisUrl, 'scratch/test_tennis.jpg');
  console.log('Tennis downloaded!');
  await download(schoolUrl, 'scratch/test_school.jpg');
  console.log('School downloaded!');
  await download(enclosureUrl, 'scratch/test_enclosure.jpg');
  console.log('Enclosure downloaded!');
}

testDownload().catch(console.error);
