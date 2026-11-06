const fs = require('fs');

const content = fs.readFileSync('src/data/servicesData.ts', 'utf8');

const oldBlock = `subServices: [
      {
        id: "cricket-practice-nets",
        title: "Cricket Practice Nets",
        tagline: "High-Velocity Batting & Bowling Enclosures",
        description:
          "Heavy-duty impact netting engineered for cricket pitches, batting cages, and academy practice lanes, containing hard leather balls safely.",
        image: "/images/projects/project-sports-nets.jpg",
        imageAlt: "Cricket practice turf net enclosure with steel frame",
        suitability: [
          "Rooftop Practice Turfs",
          "Cricket Academies",
          "Apartment Sports Zones"
        ],
        hardwareSpecs: [
          { label: "Twine Ply", value: "Heavy-Gauge UV-Treated High-Density Polyethylene" },
          { label: "Mesh Size", value: "Calibrated Cricket Leather Ball Mesh" },
          { label: "Impact Rating", value: "Withstands hard leather cricket ball strikes at 140+ km/h" },
          { label: "Rigging", value: "Steel Suspension Cables & Turnbuckles" }
        ],
        installationHighlight: "Rigid overhead suspension lines eliminate net sagging during intense batting practice.",
        badge: "High Impact",
      },
      {
        id: "sports-ground-netting",
        title: "Multi-Sport Ground & Turf Netting",
        tagline: "Rooftop & Perimeter Ball Containment",
        description:
          "Full terrace sports arena netting systems designed to prevent balls from falling off high-rise building rooftops into busy city streets below.",
        image: "/images/desktop/sports-nets.webp",
        imageAlt: "Sports ground perimeter ball containment net",
        suitability: [
          "Commercial Futsal Arenas",
          "Terrace Sports Grounds",
          "School Playgrounds"
        ],
        hardwareSpecs: [
          { label: "Perimeter Span", value: "Custom heights from 10ft to 40ft perimeter barriers" },
          { label: "Border Reinforcement", value: "Braided rope perimeter overlocked borders" },
          { label: "Wind Permeability", value: "Engineered mesh allows monsoon winds to pass safely" },
          { label: "Hardware", value: "Galvanized GI framework with stainless turnbuckles" }
        ],
        installationHighlight: "Engineered perimeter containment keeps sporting balls safely inside play boundaries.",
      },
    ],`;

const newBlock = `subServices: [
      {
        id: "cricket-practice-nets",
        title: "Cricket Practice Nets",
        tagline: "High-Velocity Batting & Bowling Enclosures",
        description:
          "Professional cricket practice net enclosures with dedicated batting pitches, heavy-duty green mesh, and reinforced steel framework for high-impact leather ball practice.",
        image: "/images/services/subservices/sports-nets/sp-cricket-practice-nets.jpg",
        imageAlt: "Cricket Practice Nets Installation Bengaluru",
        suitability: [
          "Rooftop Practice Turfs",
          "Cricket Academies",
          "Apartment Sports Zones"
        ],
        hardwareSpecs: [
          { label: "Twine Ply", value: "Heavy-Gauge UV-Treated High-Density Polyethylene" },
          { label: "Mesh Size", value: "Calibrated Cricket Leather Ball Mesh" },
          { label: "Impact Rating", value: "Withstands hard leather cricket ball strikes at 140+ km/h" },
          { label: "Rigging", value: "Steel Suspension Cables & Turnbuckles" }
        ],
        installationHighlight: "Rigid overhead suspension lines eliminate net sagging during intense batting practice.",
        badge: "High Impact",
      },
      {
        id: "football-nets",
        title: "Football Nets",
        tagline: "Regulation Goal Post & Perimeter Netting",
        description:
          "High-quality football goal nets and perimeter containment netting for professional stadiums, turf grounds, and schools, featuring lush grass integration and heavy-duty mesh.",
        image: "/images/services/subservices/sports-nets/sp-football-nets.jpg",
        imageAlt: "Football Goal Nets Installation Bengaluru",
        suitability: [
          "Commercial Futsal Arenas",
          "School Football Grounds",
          "Sports Complexes"
        ],
        hardwareSpecs: [
          { label: "Material", value: "High-Tenacity Virgin Polypropylene Twine" },
          { label: "Mesh Size", value: "100mm to 120mm Square Aperture" },
          { label: "Weather Proofing", value: "100% Water-repellent and UV-stabilized coating" },
          { label: "Anchors", value: "Heavy-duty perimeter tie cords & clip hooks" }
        ],
        installationHighlight: "Drop-tested mesh absorbs powerful ball strikes with minimal bounce-back.",
        badge: "FIFA Spec",
      },
      {
        id: "badminton-nets",
        title: "Badminton Nets",
        tagline: "Indoor Court Regulation Netting",
        description:
          "Regulation badminton court nets designed for professional indoor sports complexes with polished wooden flooring, overhead sports lighting, and zero-sag tension cables.",
        image: "/images/services/subservices/sports-nets/sp-badminton-nets.jpg",
        imageAlt: "Indoor Badminton Court Net Installation Bengaluru",
        suitability: [
          "Indoor Badminton Courts",
          "Apartment Clubhouses",
          "School Sports Auditoriums"
        ],
        hardwareSpecs: [
          { label: "Headband", value: "Heavy-Duty Vinyl-Coated Double-Stitched Top Band" },
          { label: "Top Cable", value: "PVC-Sheathed High-Tensile Steel Wire Rope" },
          { label: "Mesh Weave", value: "Dark Brown/Black Braided Nylon 19mm Aperture" },
          { label: "Tension Rig", value: "Precision ratchet turnbuckle locking mechanism" }
        ],
        installationHighlight: "Maintains exact regulation height across the complete court width.",
        badge: "Tournament Grade",
      },
      {
        id: "tennis-nets",
        title: "Tennis Nets",
        tagline: "Championship Court Netting Systems",
        description:
          "Premium outdoor and indoor tennis nets engineered with quad-stitched headbands, heavy-gauge steel cables, and weather-resistant knotless mesh for tournament play.",
        image: "/images/services/subservices/sports-nets/sp-tennis-nets.jpg",
        imageAlt: "Tennis Court Net Installation Bengaluru",
        suitability: [
          "Tennis Clubs & Academies",
          "Residential Communities",
          "School Tennis Courts"
        ],
        hardwareSpecs: [
          { label: "Twine Diameter", value: "3.5mm Braided Polyethylene Cord" },
          { label: "Top Band", value: "Quad-Stitched Heavy-Duty Heavy-Gauge Vinyl" },
          { label: "Suspension Cable", value: "6mm Vinyl-Coated Aircraft-Grade Wire" },
          { label: "Center Strap", value: "Heavy-duty polyester center strap with brass buckle" }
        ],
        installationHighlight: "Engineered to withstand direct high-velocity racket impacts and outdoor solar exposure.",
        badge: "Pro Court",
      },
      {
        id: "school-sports-nets",
        title: "School Sports Nets",
        tagline: "Protective Campus Playground Enclosures",
        description:
          "Protective sports perimeter netting tailored for modern school grounds and play areas, safeguarding students, classroom windows, and nearby infrastructure.",
        image: "/images/services/subservices/sports-nets/sp-school-sports-nets.jpg",
        imageAlt: "School Sports Ground Netting Bengaluru",
        suitability: [
          "School Playgrounds",
          "College Athletic Grounds",
          "Multi-Sport Courts"
        ],
        hardwareSpecs: [
          { label: "Barrier Height", value: "Custom 15ft to 35ft vertical protective spans" },
          { label: "Mesh Type", value: "Weather-resistant UV-inhibited synthetic weave" },
          { label: "Support Posts", value: "Galvanized GI steel posts with concrete footing" },
          { label: "Border Reinforce", value: "Double-stitched high-density boundary rope" }
        ],
        installationHighlight: "Contains multi-sport activities safely within playground boundaries.",
        badge: "Campus Safe",
      },
      {
        id: "sports-ground-enclosure-nets",
        title: "Sports Ground Enclosure Nets",
        tagline: "Full-Perimeter Turf & Rooftop Box Enclosures",
        description:
          "Large outdoor sports ground and rooftop arenas completely enclosed with high-strength sports netting, tall support structures, and complete 360-degree ball containment.",
        image: "/images/services/subservices/sports-nets/sp-sports-ground-enclosure.jpg",
        imageAlt: "Sports Ground Enclosure Netting Bengaluru",
        suitability: [
          "Commercial Box Cricket Turfs",
          "Rooftop Sports Arenas",
          "Multi-Sport Athletic Grounds"
        ],
        hardwareSpecs: [
          { label: "Coverage Scope", value: "Complete 360-degree perimeter + top roof net" },
          { label: "Wind Permeability", value: "Aerodynamic mesh allows high monsoon winds to pass" },
          { label: "Framework", value: "Industrial GI tubular trusses and steel wire rigging" },
          { label: "UV Warranty", value: "100% Rot-proof and UV-resistant synthetic filaments" }
        ],
        installationHighlight: "Maximizes playable hours with safe, complete ball containment.",
        badge: "Full Enclosure",
      },
    ],`;

if (content.includes(oldBlock)) {
  const updated = content.replace(oldBlock, newBlock);
  fs.writeFileSync('src/data/servicesData.ts', updated, 'utf8');
  console.log('Successfully updated sports-nets subServices with all 6 cards!');
} else {
  console.log('Old block not found. Checking differences...');
}
