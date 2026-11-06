const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = 'public/images/services/subservices/safety-nets';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// Sourcing high-quality matching candidates
const candidates = [
  // 1. Children Safety Nets: Child-safe residential balcony
  {
    name: 'sn-children-safety-nets.jpg',
    url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=85'
  },
  // 2. Construction Safety Nets: Multi-storey construction building scaffolding
  {
    name: 'sn-construction-safety-nets.jpg',
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85'
  },
  // 3. Window Safety Nets: Apartment window frame with view
  {
    name: 'sn-window-safety-nets.jpg',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85'
  },
  // 4. Staircase Safety Nets: Elegant modern residential staircase open railing
  {
    name: 'sn-staircase-safety-nets.jpg',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85' // we'll test unique IDs
  },
  // 5. Terrace Safety Nets: Spacious rooftop terrace with city skyline
  {
    name: 'sn-terrace-safety-nets.jpg',
    url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85'
  },
  // 6. Swimming Pool Safety Nets: Luxury residential swimming pool clear blue water
  {
    name: 'sn-swimming-pool-safety-nets.jpg',
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=85'
  }
];

candidates.forEach(c => {
  const full = path.join(dir, c.name);
  const fileStream = fs.createWriteStream(full);
  https.get(c.url, res => {
    if (res.statusCode === 200) {
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Saved: ${c.name} (${fs.statSync(full).size} bytes)`);
      });
    } else {
      console.error(`Failed ${c.name}: status ${res.statusCode}`);
      fileStream.close();
    }
  });
});
