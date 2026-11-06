const sharp = require('sharp');
const path = require('path');

const userDir = 'C:/Users/surya/.gemini/antigravity/brain/ad73f47d-b217-4cca-ad8c-bd6c75c5aef8/.user_uploaded/';
const f1 = path.join(userDir, 'media_1793889502614_70fc9a10.png');
const f2 = path.join(userDir, 'media_1793889496961_2caf2871.png');

async function run() {
  const m1 = await sharp(f1).metadata();
  console.log('f1 (Cricket, Football, Badminton):', m1.width, m1.height);
  const m2 = await sharp(f2).metadata();
  console.log('f2 (Tennis, School, Ground Enclosure):', m2.width, m2.height);
}
run();
