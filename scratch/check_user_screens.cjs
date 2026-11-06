const fs = require('fs');
const path = require('path');

const userDir = 'C:/Users/surya/.gemini/antigravity/brain/ad73f47d-b217-4cca-ad8c-bd6c75c5aef8/.user_uploaded/';
const files = [
  'media_1793891006434_6992d5f7.png',
  'media_1793890874204_4dca7005.png',
  'media_1793890868657_a38ec9f9.png',
  'media_1793890857642_f39c7f7d.png',
  'media_1793890854907_13b2c0c7.png',
  'media_1793889767127_f0ba381b.png',
  'media_1793889763224_2eff010d.png',
  'media_1793889669075_4a2e69c1.png',
  'media_1793889664669_b9147004.png',
  'media_1793889502614_70fc9a10.png',
  'media_1793889496961_2caf2871.png'
];

for (const f of files) {
  const p = path.join(userDir, f);
  if (fs.existsSync(p)) {
    const stat = fs.statSync(p);
    console.log(f, stat.size, 'bytes');
  }
}
