const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = 'public/images/services/subservices/sports-nets';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// Sourced direct high-res sports photography
const downloads = [
  {
    name: 'sp-cricket-practice-nets.jpg',
    // cricket pitch with net enclosure / cricket turf
    id: 'photo-1540747913346-19e32dc3e97e'
  },
  {
    name: 'sp-football-nets.jpg',
    // football goal net with green grass
    id: 'photo-1575361204480-aadea25e6e68'
  },
  {
    name: 'sp-badminton-nets.jpg',
    // indoor court badminton net
    id: 'photo-1626224583764-f87db24ac4ea'
  },
  {
    name: 'sp-tennis-nets.jpg',
    // tennis net on court
    id: 'photo-1595435934249-5df7ed86e1c0'
  },
  {
    name: 'sp-school-sports-nets.jpg',
    // school playground sports netting fence
    id: 'photo-1587280501635-68a0e82cd5ff'
  },
  {
    name: 'sp-sports-ground-enclosure.jpg',
    // large enclosed outdoor sports turf / field
    id: 'photo-1529900748604-07564a03e7a6'
  }
];

function downloadOne(item) {
  return new Promise(resolve => {
    const full = path.join(dir, item.name);
    const fileStream = fs.createWriteStream(full);
    const url = `https://images.unsplash.com/${item.id}?auto=format&fit=crop&w=1000&q=85`;
    https.get(url, res => {
      if (res.statusCode === 200) {
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Saved: ${item.name} (${fs.statSync(full).size} bytes)`);
          resolve();
        });
      } else {
        console.log(`Failed ${item.name} with status ${res.statusCode}`);
        fileStream.close();
        if (fs.existsSync(full)) fs.unlinkSync(full);
        resolve();
      }
    }).on('error', err => {
      console.log(`Error ${item.name}: ${err.message}`);
      resolve();
    });
  });
}

async function run() {
  for (const item of downloads) {
    await downloadOne(item);
  }
  console.log('All sports nets downloads done.');
}

run();
