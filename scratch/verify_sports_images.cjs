const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = 'public/images/services/subservices/sports-nets';
const files = fs.readdirSync(dir);

async function check() {
  for (const f of files) {
    const p = path.join(dir, f);
    const m = await sharp(p).metadata();
    console.log(`${f}: ${m.width}x${m.height}, format=${m.format}`);
  }
}

check();
