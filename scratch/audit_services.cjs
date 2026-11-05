const fs = require('fs');
const text = fs.readFileSync('src/data/servicesData.ts', 'utf8');

// Parse services by slug
const slugs = ['invisible-grills', 'safety-nets', 'pigeon-safety-nets', 'sports-nets', 'cloth-hangers', 'bird-spikes'];

slugs.forEach(slug => {
  console.log(`\n=================== ${slug.toUpperCase()} ===================`);
  const regex = new RegExp(`["']?${slug}["']?\\s*:\\s*\\{([\\s\\S]*?)(?:\\n\\s{2}\\},|\\n\\s*\\};)`, 'g');
  const match = regex.exec(text);
  if (!match) {
    console.log("Could not find section for", slug);
    return;
  }
  const block = match[1];

  // Hero
  const heroMatch = block.match(/heroImage:\s*["']([^"']+)["']/);
  console.log("Hero Image:", heroMatch ? heroMatch[1] : "N/A");

  // Subservices
  console.log("--- Subservices ---");
  const subRegex = /id:\s*["']([^"']+)["'][\s\S]*?title:\s*["']([^"']+)["'][\s\S]*?image:\s*["']([^"']+)["']/g;
  let s;
  while ((s = subRegex.exec(block)) !== null) {
    console.log(`  [${s[1]}] ${s[2]} -> ${s[3]}`);
  }

  // Benefits
  console.log("--- Benefits / Advantages ---");
  const benRegex = /title:\s*["']([^"']+)["'][\s\S]*?image:\s*["']([^"']+)["']/g;
  // Let's find benefits block
  const benBlockMatch = block.match(/benefits:\s*\[([\s\S]*?)\]\s*,/);
  if (benBlockMatch) {
    let b;
    while ((b = benRegex.exec(benBlockMatch[1])) !== null) {
      console.log(`  ${b[1]} -> ${b[2]}`);
    }
  }

  // Gallery
  console.log("--- Gallery ---");
  const galBlockMatch = block.match(/gallery:\s*\[([\s\S]*?)\]\s*,/);
  if (galBlockMatch) {
    let g;
    const galRegex = /title:\s*["']([^"']+)["'][\s\S]*?image:\s*["']([^"']+)["']/g;
    while ((g = galRegex.exec(galBlockMatch[1])) !== null) {
      console.log(`  ${g[1]} -> ${g[2]}`);
    }
  }
});
