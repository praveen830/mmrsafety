const fs = require('fs');
let code = fs.readFileSync('src/data/servicesData.ts', 'utf8');
code = code.replace(/\r\n/g, '\n');

const snOldSubServices = code.substring(
  code.indexOf('slug: "safety-nets"'),
  code.indexOf('slug: "pigeon-safety-nets"')
);

const snSubStart = snOldSubServices.indexOf('subServices: [');
let snSubEnd = 0;
let depth = 0;
for (let i = snSubStart; i < snOldSubServices.length; i++) {
  if (snOldSubServices[i] === '[') depth++;
  else if (snOldSubServices[i] === ']') {
    depth--;
    if (depth === 0) {
      snSubEnd = i + 1;
      break;
    }
  }
}

const oldBlock = snOldSubServices.substring(snSubStart, snSubEnd);

const newBlock = `subServices: [
      {
        id: "balcony-safety-nets",
        title: "Balcony Safety Nets",
        tagline: "High-Rise Balcony Perimeter Fall Defense",
        description:
          "Custom-measured UV-treated knotted polymer netting secured from railing balustrades to ceiling slabs, protecting children and pets from catastrophic falls.",
        image: "/images/services/subservices/safety-nets/sn-balcony-safety-nets.jpg",
        imageAlt: "Balcony Safety Nets Installation Bengaluru",
        suitability: [
          "High-Rise Balconies",
          "Parapet Openings",
          "Toddler & Pet Balconies"
        ],
        hardwareSpecs: [
          { label: "Mesh Polymer", value: "High-Density UV-Stabilized Polyethylene (HDPE)" },
          { label: "Twine Geometry", value: "Heat-Set Square Knotted Mesh Structure" },
          { label: "Border Rigging", value: "Reinforced 6mm Multi-Strand Perimeter Rope" },
          { label: "Anchors", value: "Stainless Steel J-Hooks at 1-foot intervals" }
        ],
        installationHighlight: "Tightly tensioned perimeter anchors ensure infants, toddlers, and pets cannot slip through.",
        badge: "Most Requested",
      },
      {
        id: "children-safety-nets",
        title: "Children Safety Nets",
        tagline: "Child-Safe Residential Balcony Protection",
        description:
          "Heavy-duty micro-aperture protective safety mesh specifically engineered to contain high impact loads while maintaining 100% natural balcony daylight and fresh airflow.",
        image: "/images/services/subservices/safety-nets/sn-children-safety-nets.jpg",
        imageAlt: "Children Safety Nets Installation Bengaluru",
        suitability: [
          "Toddler Play Balconies",
          "Pet Balconies",
          "Open Railing Balustrades"
        ],
        hardwareSpecs: [
          { label: "Mesh Aperture", value: "25mm to 30mm Square Aperture" },
          { label: "Frame Fixing", value: "Concealed Stainless Perimeter Eyelets" },
          { label: "Sun Resistance", value: "UV Carbon-Black Stabilizer (No Sunlight Brittle Rot)" },
          { label: "Air Circulation", value: "Over 92% open free airflow area" }
        ],
        installationHighlight: "High-tenacity knotting provides peace of mind for families with curious toddlers and kids.",
        badge: "Child Safe",
      },
      {
        id: "construction-safety-nets",
        title: "Construction Safety Nets",
        tagline: "Multi-Storey Scaffolding & Worker Fall Arrest",
        description:
          "Heavy-duty industrial green protective safety mesh installed around building scaffolding and multi-storey structures, containing falling debris and ensuring worker safety.",
        image: "/images/services/subservices/safety-nets/sn-construction-safety-nets.jpg",
        imageAlt: "Construction Safety Nets Scaffolding Bengaluru",
        suitability: [
          "Building Scaffolding",
          "Multi-Storey Facades",
          "Industrial Construction Sites"
        ],
        hardwareSpecs: [
          { label: "Material", value: "High-Tenacity Virgin Polypropylene Mesh" },
          { label: "Impact Absorption", value: "Drop-tested for tool & personnel fall arrest" },
          { label: "Border Cord", value: "10mm Heavy-Duty Overlocked Border Rope" },
          { label: "Fire Resistance", value: "Flame-Retardant Industrial Coating" }
        ],
        installationHighlight: "Full scaffolding perimeter coverage meets industrial site safety compliance standards.",
        badge: "Heavy Duty",
      },
      {
        id: "window-safety-nets",
        title: "Window Safety Nets",
        tagline: "Discreet Mesh for Sliding & Casement Windows",
        description:
          "Fitted tightly along external window perimeters without interrupting ventilation or window shutter movement, providing essential fall protection for upper floors.",
        image: "/images/services/subservices/safety-nets/sn-window-safety-nets.jpg",
        imageAlt: "Window Safety Nets Installation Bengaluru",
        suitability: [
          "High-Floor Windows",
          "Open Sliding Windows",
          "Utility Ventilation Louvers"
        ],
        hardwareSpecs: [
          { label: "Mesh Aperture", value: "25mm to 30mm Square Aperture" },
          { label: "Frame Fixing", value: "Flush-Fit Concealed Stainless Eyelets" },
          { label: "Sun Resistance", value: "UV Carbon-Black Stabilizer (No Sunlight Brittle Rot)" },
          { label: "Air Circulation", value: "Over 92% open free airflow area" }
        ],
        installationHighlight: "Allows keeping windows open 24/7 for cool breeze without accidental fall risks.",
        badge: "Precision Fit",
      },
      {
        id: "staircase-safety-nets",
        title: "Staircase Safety Nets",
        tagline: "Open Railing & Duplex Spiral Void Protection",
        description:
          "Elegant protective safety net fitted along open railing spaces, central staircase voids, and spiral steps in duplex homes to eliminate accidental slip-and-fall hazards.",
        image: "/images/services/subservices/safety-nets/sn-staircase-safety-nets.jpg",
        imageAlt: "Staircase Safety Nets Installation Bengaluru",
        suitability: [
          "Duplex Stair Voids",
          "Spiral Staircases",
          "Open Mezzanine Railings"
        ],
        hardwareSpecs: [
          { label: "Aesthetic Design", value: "Blends seamlessly into modern interior architecture" },
          { label: "Tensioning", value: "Custom stainless steel wire rope support system" },
          { label: "Child Protection", value: "Prevents toddlers from slipping between balusters" },
          { label: "Finish", value: "Smooth splinter-free knotless or heat-set knotted weave" }
        ],
        installationHighlight: "Custom-rigged to protect large internal staircase voids without altering wooden or glass balustrades.",
        badge: "Duplex Safe",
      },
      {
        id: "terrace-safety-nets",
        title: "Terrace Safety Nets",
        tagline: "Spacious Rooftop Perimeter Enclosure",
        description:
          "Full perimeter boundary safety netting installed along rooftop parapet edges and terrace boundaries, keeping kids and family members completely safe against high-altitude drops.",
        image: "/images/services/subservices/safety-nets/sn-terrace-safety-nets.jpg",
        imageAlt: "Terrace Safety Nets Installation Bengaluru",
        suitability: [
          "Rooftop Terraces",
          "Penthouse Sit-Outs",
          "Community Terrace Gardens"
        ],
        hardwareSpecs: [
          { label: "Height Span", value: "Custom 6ft to 12ft vertical parapet extension" },
          { label: "Wind Resistance", value: "Permeable mesh engineered to withstand heavy monsoon gusts" },
          { label: "Frame Rigging", value: "Rigid galvanized steel support poles & turnbuckles" },
          { label: "Weather Endurance", value: "100% Water-repellent and rot-proof synthetic fibers" }
        ],
        installationHighlight: "Transforms open apartment terraces into safe family gathering and children play zones.",
        badge: "Rooftop Safe",
      },
      {
        id: "swimming-pool-safety-nets",
        title: "Swimming Pool Safety Nets",
        tagline: "Secure Pool Cover & Toddler Drowning Prevention",
        description:
          "High-tension water-safe pool net cover anchored securely along coping tiles, preventing accidental drownings while preserving pristine pool aesthetics and clear water views.",
        image: "/images/services/subservices/safety-nets/sn-swimming-pool-safety-nets.jpg",
        imageAlt: "Swimming Pool Safety Nets Bengaluru",
        suitability: [
          "Residential Swimming Pools",
          "Villa Plunge Pools",
          "Clubhouse Children Pools"
        ],
        hardwareSpecs: [
          { label: "Load Capacity", value: "Engineered to support the weight of a child or adult" },
          { label: "Anchor System", value: "Flush-mount brass anchors in pool coping stone" },
          { label: "Central Tensioner", value: "Central pulley system for easy single-person removal" },
          { label: "Water Resistance", value: "Chlorine and UV-resistant high-tenacity braided cord" }
        ],
        installationHighlight: "Simple one-person operation to install or remove in under 5 minutes while providing complete drowning defense.",
        badge: "Water Safe",
      },
    ]`;

code = code.replace(oldBlock, newBlock);
fs.writeFileSync('src/data/servicesData.ts', code, 'utf8');
console.log('Successfully updated safety-nets with 7 subservice cards!');
