const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = 'public/images/services/subservices/safety-nets';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// Copy balcony net from projects
fs.copyFileSync('public/images/projects/project-safety-nets.jpg', path.join(dir, 'sn-balcony-safety-nets.jpg'));
console.log('Copied sn-balcony-safety-nets.jpg');

const downloads = [
  {
    name: 'sn-children-safety-nets.jpg',
    id: 'photo-1502672260266-1c1ef2d93688'
  },
  {
    name: 'sn-construction-safety-nets.jpg',
    id: 'photo-1503387762-592deb58ef4e'
  },
  {
    name: 'sn-window-safety-nets.jpg',
    id: 'photo-1600585154340-be6161a56a0c'
  },
  {
    name: 'sn-staircase-safety-nets.jpg',
    id: 'photo-1541123437800-1bb1317badc2'
  },
  {
    name: 'sn-terrace-safety-nets.jpg',
    id: 'photo-1533105079780-92b9be482077'
  },
  {
    name: 'sn-swimming-pool-safety-nets.jpg',
    id: 'photo-1576013551627-0cc20b96c2a7'
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
        console.error(`Failed ${item.name}: status ${res.statusCode}`);
        fileStream.close();
        resolve();
      }
    });
  });
}

async function run() {
  for (const d of downloads) {
    await downloadOne(d);
  }
  console.log('All safety-nets subservice images ready!');
}
run();
