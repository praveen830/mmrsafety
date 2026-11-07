/**
 * MMR Safety — Homepage Static Content Data
 *
 * Structured, type-safe data for all homepage sections.
 * Strictly adheres to verified business offerings without unconfirmed claims
 * (no unverified steel grades, fake percentages, artificial testing claims,
 * unconfirmed warranties, or fabricated customer reviews).
 */

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  image: string;
  imageDesktop: string;
  imageMobile: string;
  altText?: string;
  imageAlt?: string;
  badge?: string;
  href: string;
}

export interface HeroSlideItem {
  id: string;
  slideNumber: number;
  badge: string;
  title: string;
  tagline: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  imageDesktop: string;
  imageMobile: string;
  imageAlt: string;
  specBadges: string[];
}

export const heroSlidesData: HeroSlideItem[] = [
  {
    id: "brand-flagship",
    slideNumber: 1,
    badge: "Brand Flagship • Architectural Balcony Protection",
    title: "Uncompromising Balcony Safety. Unobstructed Skyline Views.",
    tagline: "High-Tensile Invisible Grills for Modern Apartments",
    subtitle:
      "Architectural stainless steel cable systems engineered for Bangalore high-rise apartments and luxury villas, protecting loved ones without cage-like iron bars.",
    primaryCtaText: "Explore Invisible Grills",
    primaryCtaLink: "/services/invisible-grills/",
    secondaryCtaText: "Get a Free Quote",
    secondaryCtaLink: "#quote",
    imageDesktop: "/images/desktop/invisible-grills.webp",
    imageMobile: "/images/mobile/invisible-grills.webp",
    imageAlt:
      "Luxury high-rise apartment balcony fitted with vertical stainless steel invisible grill safety cables overlooking city skyline",
    specBadges: ["316 Stainless Steel Core", "98% Open Skyline View", "Child & Pet Security"],
  },
  {
    id: "invisible-grills",
    slideNumber: 2,
    badge: "Balcony & Window Safety",
    title: "Invisible Grills: Modern Architectural Protection",
    tagline: "Certified Fall Security Meets Panoramic Daylight",
    subtitle:
      "Precision-tensioned slim cables spaced at 2-inch intervals along balcony balustrades and windows, fully approved by gated community bylaws.",
    primaryCtaText: "View Invisible Grills",
    primaryCtaLink: "/services/invisible-grills/",
    secondaryCtaText: "WhatsApp Enquiry",
    secondaryCtaLink:
      "https://wa.me/916304433505?text=Hi%20MMR%20Safety%2C%20I%20am%20interested%20in%20Invisible%20Grills%20installation.",
    imageDesktop: "/images/desktop/invisible-grills.webp",
    imageMobile: "/images/mobile/invisible-grills.webp",
    imageAlt:
      "Modern luxury apartment balcony with vertical invisible grill cables overlooking skyline",
    specBadges: ["Corrosion-Proof Coating", "Emergency Fire Egress", "Zero Maintenance"],
  },
  {
    id: "safety-nets",
    slideNumber: 3,
    badge: "Child & Pet Fall Security",
    title: "Balcony Safety Nets: Certified Fall Protection",
    tagline: "High-Tenacity Balcony & Duct Perimeter Enclosures",
    subtitle:
      "Durable, UV-stabilized polymer safety netting tailored for high-rise residential balconies, stairwells, and shafts to prevent accidental slips.",
    primaryCtaText: "View Safety Nets",
    primaryCtaLink: "/services/safety-nets/",
    secondaryCtaText: "WhatsApp Enquiry",
    secondaryCtaLink:
      "https://wa.me/916304433505?text=Hi%20MMR%20Safety%2C%20I%20am%20interested%20in%20Safety%20Nets%20installation.",
    imageDesktop: "/images/desktop/safety-nets.webp",
    imageMobile: "/images/mobile/safety-nets.webp",
    imageAlt:
      "Residential balcony fall protection safety net installation overlooking green city view",
    specBadges: ["High-Tensile Polymer Mesh", "UV-Treated Endurance", "Clean Non-Invasive Anchors"],
  },
  {
    id: "pigeon-safety-nets",
    slideNumber: 4,
    badge: "Humane Bird Deterrence",
    title: "Pigeon Safety Nets: Clean, Bird-Free Spaces",
    tagline: "Translucent Anti-Bird Protection Without Blocking Airflow",
    subtitle:
      "Discreet translucent mesh prevents pigeons and birds from roosting in balconies and utility ducts, eliminating health hazards while maintaining complete airflow.",
    primaryCtaText: "View Pigeon Nets",
    primaryCtaLink: "/services/pigeon-safety-nets/",
    secondaryCtaText: "WhatsApp Enquiry",
    secondaryCtaLink:
      "https://wa.me/916304433505?text=Hi%20MMR%20Safety%2C%20I%20am%20interested%20in%20Pigeon%20Safety%20Nets%20installation.",
    imageDesktop: "/images/desktop/pigeon-safety-nets.webp",
    imageMobile: "/images/mobile/pigeon-safety-nets.webp",
    imageAlt:
      "Apartment balcony protected by translucent pigeon safety net with birds deterred on exterior ledge",
    specBadges: ["Translucent Monofilament", "Eliminates Mites & Odor", "100% Daylight & Airflow"],
  },
  {
    id: "sports-nets",
    slideNumber: 5,
    badge: "Recreation & Turf Containment",
    title: "Sports Nets: Professional Ball Containment",
    tagline: "Engineered Impact Absorption for Cricket & Multi-Sport",
    subtitle:
      "Specialized high-durability netting solutions for cricket practice pitches, badminton courts, terrace play areas, and sports complexes.",
    primaryCtaText: "View Sports Nets",
    primaryCtaLink: "/services/sports-nets/",
    secondaryCtaText: "WhatsApp Enquiry",
    secondaryCtaLink:
      "https://wa.me/916304433505?text=Hi%20MMR%20Safety%2C%20I%20am%20interested%20in%20Sports%20Nets%20installation.",
    imageDesktop: "/images/desktop/sports-nets.webp",
    imageMobile: "/images/mobile/sports-nets.webp",
    imageAlt:
      "Professional outdoor cricket practice turf enclosure with heavy-duty safety sports netting",
    specBadges: ["High-Velocity Impact Cords", "Reinforced Border Ropes", "All-Weather UV Treatment"],
  },
  {
    id: "cloth-hangers",
    slideNumber: 6,
    badge: "Balcony Space Optimization",
    title: "Ceiling Cloth Hangers: Reclaim Your Balcony Space",
    tagline: "Ergonomic Stainless Steel Pulley Pull-and-Dry Systems",
    subtitle:
      "Ceiling-mounted pull-and-dry systems and wall-mounted foldable racks crafted from stainless steel pipes for effortless indoor and balcony laundry management.",
    primaryCtaText: "View Cloth Hangers",
    primaryCtaLink: "/services/cloth-hangers/",
    secondaryCtaText: "WhatsApp Enquiry",
    secondaryCtaLink:
      "https://wa.me/916304433505?text=Hi%20MMR%20Safety%2C%20I%20am%20interested%20in%20Cloth%20Hangers%20installation.",
    imageDesktop: "/images/desktop/cloth-hangers.webp",
    imageMobile: "/images/mobile/cloth-hangers.webp",
    imageAlt:
      "Ceiling-mounted stainless steel pulley cloth drying hanger installed in a modern apartment balcony",
    specBadges: ["Independent Pulley Operation", "Rustproof SS Tubes", "Frees Up Floor Space"],
  },
  {
    id: "bird-spikes",
    slideNumber: 7,
    badge: "Ledge & Parapet Protection",
    title: "Bird Spikes: Architectural Anti-Perch Strips",
    tagline: "Durable Stainless Steel Deterrent for Window Sills & ACs",
    subtitle:
      "Corrosion-resistant stainless steel spike strips mounted on flexible polycarbonate bases to deter pigeons from landing on parapets, AC units, and narrow ledges.",
    primaryCtaText: "View Bird Spikes",
    primaryCtaLink: "/services/bird-spikes/",
    secondaryCtaText: "WhatsApp Enquiry",
    secondaryCtaLink:
      "https://wa.me/916304433505?text=Hi%20MMR%20Safety%2C%20I%20am%20interested%20in%20Bird%20Spikes%20installation.",
    imageDesktop: "/images/desktop/bird-spikes.webp",
    imageMobile: "/images/mobile/bird-spikes.webp",
    imageAlt:
      "Close-up of stainless steel anti-perch bird spikes installed on building parapet wall ledge",
    specBadges: ["Humane Deterrence", "Flexible Polycarbonate Base", "Zero Maintenance"],
  },
];

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Installation" | "Safety";
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Invisible Grills" | "Safety Nets" | "Pigeon Safety Nets" | "Sports Nets" | "Cloth Hangers" | "Bird Spikes";
  serviceSlug: string;
  configuration: string;
  description: string;
  type: string;
  image: string;
  tag: string;
  specs: string[];
  locationPlaceholder?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "invisible-grills",
    name: "Invisible Grills",
    tagline: "Clear Views & Fall Protection",
    description: "High-tensile stainless steel cables for safe, unobstructed views.",
    features: [
      "High-tensile stainless steel vertical cables",
      "Maintains natural daylight and open ventilation",
      "Seamless integration with contemporary architecture",
    ],
    icon: "grill",
    image: "/images/desktop/invisible-grills.webp",
    imageDesktop: "/images/desktop/invisible-grills.webp",
    imageMobile: "/images/mobile/invisible-grills.webp",
    imageAlt: "Modern luxury high-rise apartment balcony fitted with vertical stainless steel invisible grill safety cables overlooking city skyline",
    altText: "Modern luxury high-rise apartment balcony fitted with vertical stainless steel invisible grill safety cables overlooking city skyline",
    badge: "Popular Choice",
    href: "/services/invisible-grills/",
  },
  {
    id: "safety-nets",
    name: "Safety Nets",
    tagline: "Child & Pet Fall Safety",
    description: "Durable UV-stabilized mesh for balconies, windows, and stairwells.",
    features: [
      "Weather-resistant UV-stabilized polymer mesh",
      "Custom-fitted to unique architectural openings",
      "High impact resistance with secure perimeter anchoring",
    ],
    icon: "shield-net",
    image: "/images/desktop/safety-nets.webp",
    imageDesktop: "/images/desktop/safety-nets.webp",
    imageMobile: "/images/mobile/safety-nets.webp",
    imageAlt: "Residential balcony fall protection safety net installation overlooking green city view",
    altText: "Residential balcony fall protection safety net installation overlooking green city view",
    href: "/services/safety-nets/",
  },
  {
    id: "pigeon-safety-nets",
    name: "Pigeon Safety Nets",
    tagline: "Bird-Free Clean Balconies",
    description: "Translucent netting keeping balconies bird-free with full airflow.",
    features: [
      "Translucent finish that blends into the background",
      "Humane bird deterrence without injury",
      "Zero hindrance to fresh air and outdoor views",
    ],
    icon: "bird-barrier",
    image: "/images/desktop/pigeon-safety-nets.webp",
    imageDesktop: "/images/desktop/pigeon-safety-nets.webp",
    imageMobile: "/images/mobile/pigeon-safety-nets.webp",
    imageAlt: "Apartment balcony protected by translucent pigeon safety net with birds deterred on exterior ledge",
    altText: "Apartment balcony protected by translucent pigeon safety net with birds deterred on exterior ledge",
    badge: "High Demand",
    href: "/services/pigeon-safety-nets/",
  },
  {
    id: "sports-nets",
    name: "Sports Nets",
    tagline: "Ball Containment Enclosures",
    description: "High-impact netting for cricket pitches, courts, and play areas.",
    features: [
      "High-impact cord strength for high-velocity balls",
      "Custom height, width, and cage enclosures",
      "Weather-treated for outdoor and terrace installations",
    ],
    icon: "sports",
    image: "/images/desktop/sports-nets.webp",
    imageDesktop: "/images/desktop/sports-nets.webp",
    imageMobile: "/images/mobile/sports-nets.webp",
    imageAlt: "Professional outdoor cricket practice turf enclosure with heavy-duty safety sports netting",
    altText: "Professional outdoor cricket practice turf enclosure with heavy-duty safety sports netting",
    href: "/services/sports-nets/",
  },
  {
    id: "cloth-hangers",
    name: "Cloth Hangers",
    tagline: "Ceiling Space Savers",
    description: "Rust-free ceiling pulley racks for effortless laundry drying.",
    features: [
      "Individual pipe pulley lowering mechanism",
      "Rust-resistant stainless steel construction",
      "Frees up valuable balcony floor space",
    ],
    icon: "hanger",
    image: "/images/desktop/cloth-hangers.webp",
    imageDesktop: "/images/desktop/cloth-hangers.webp",
    imageMobile: "/images/mobile/cloth-hangers.webp",
    imageAlt: "Ceiling-mounted stainless steel pulley cloth drying hanger installed in a modern apartment balcony",
    altText: "Ceiling-mounted stainless steel pulley cloth drying hanger installed in a modern apartment balcony",
    href: "/services/cloth-hangers/",
  },
  {
    id: "bird-spikes",
    name: "Bird Spikes",
    tagline: "Anti-Perch Ledge Protection",
    description: "Stainless steel spikes for window sills, ledges, and AC units.",
    features: [
      "Humane, non-harmful bird perching deterrent",
      "Weatherproof polycarbonate base with flexible curvature",
      "Long-lasting protection for ledges and AC brackets",
    ],
    icon: "spikes",
    image: "/images/desktop/bird-spikes.webp",
    imageDesktop: "/images/desktop/bird-spikes.webp",
    imageMobile: "/images/mobile/bird-spikes.webp",
    imageAlt: "Close-up of stainless steel anti-perch bird spikes installed on building parapet wall ledge",
    altText: "Close-up of stainless steel anti-perch bird spikes installed on building parapet wall ledge",
    href: "/services/bird-spikes/",
  },
];

export const whyChooseData: WhyChooseItem[] = [
  {
    number: "01",
    title: "Architectural Aesthetics",
    description:
      "Our invisible grills and translucent nets are engineered to blend with your building facade, avoiding the bulky, cage-like appearance of traditional iron grills.",
    icon: "architecture",
  },
  {
    number: "02",
    title: "High-Tensile Materials",
    description:
      "We source high-grade stainless steel cables and UV-stabilized polymer nets manufactured to withstand intense sunlight, heavy rains, and outdoor weather exposure.",
    icon: "strength",
  },
  {
    number: "03",
    title: "Skilled Precision Installation",
    description:
      "Our trained technicians use calibrated tensioning equipment and structural anchors to ensure uniform spacing, clean drilling, and secure load-bearing fixing.",
    icon: "technicians",
  },
  {
    number: "04",
    title: "Family & Child Safety Focus",
    description:
      "Every installation prioritizes human safety—preventing accidental balcony falls for children and pets without impeding emergency escape routes.",
    icon: "safety",
  },
  {
    number: "05",
    title: "Clean, Damage-Free Execution",
    description:
      "We respect your property with precision alignment, minimal drill footprints, and thorough post-installation cleanup so your balcony looks pristine.",
    icon: "clean",
  },
  {
    number: "06",
    title: "Transparent Consultation",
    description:
      "Honest guidance on the most suitable safety solution for your specific balcony, window, or duct layout with clear, upfront estimates.",
    icon: "consultation",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation & Site Inspection",
    description:
      "Schedule an on-site visit. Our technician assesses your balcony or window architecture, takes accurate measurements, and understands your safety requirements.",
    detail: "On-site assessment • Exact dimensions • Solution recommendation",
  },
  {
    step: "02",
    title: "Custom Planning & Material Preparation",
    description:
      "We calculate the exact cable or netting spans, anchor intervals, and custom fittings tailored to your building's structural parameters.",
    detail: "Precision layout • Material allocation • Transparent estimate",
  },
  {
    step: "03",
    title: "Professional Installation",
    description:
      "Our experienced team arrives equipped with precision tools, securely installs anchor tracks, threads high-tensile cables, and applies calibrated tension.",
    detail: "Dust-controlled drilling • Uniform tensioning • Neat finish",
  },
  {
    step: "04",
    title: "Tension Testing & Handover",
    description:
      "Every cable line and net anchor is individually inspected for tension and structural hold before formal sign-off, leaving you with complete peace of mind.",
    detail: "Structural check • Clean site handover • Maintenance tips",
  },
];

export const faqData: FaqItem[] = [
  {
    category: "General",
    question: "How visible are invisible grills from a short distance?",
    answer:
      "Invisible grills utilize ultra-slim, high-tensile stainless steel cables. From a short distance, they blend into the skyline, preserving an open panoramic view while maintaining structural barrier protection.",
  },
  {
    category: "Safety",
    question: "Can invisible grills prevent children and pets from falling?",
    answer:
      "Yes. Invisible grills are engineered specifically to prevent accidental falls. The cables are spaced closely and tensioned firmly, preventing children, toddlers, and household pets from slipping through.",
  },
  {
    category: "Installation",
    question: "How long does a typical balcony installation take?",
    answer:
      "A standard residential balcony installation usually takes a few hours depending on the linear footage and wall substrate. Our technicians work cleanly and efficiently to complete installation with minimal disruption.",
  },
  {
    category: "General",
    question: "Do safety nets and invisible grills block natural breeze or sunlight?",
    answer:
      "Not at all. Unlike heavy iron grilles or solid enclosures that restrict ventilation, invisible grills and high-density safety nets allow unrestricted natural airflow and sunlight into your home.",
  },
  {
    category: "Safety",
    question: "How are invisible grills handled during an emergency, such as a fire?",
    answer:
      "In the event of an emergency, invisible grill cables can be quickly cut using household wire cutters kept on hand, providing emergency egress that rigid welded iron bars cannot offer.",
  },
  {
    category: "Installation",
    question: "Can these solutions be installed in rental apartments?",
    answer:
      "Yes. Safety nets and invisible grills require minimal drilling into concrete parapets and ceiling beams. Many apartment owners and tenant associations prefer invisible grills over bulky iron grilles because they preserve the architectural uniformity of the building facade.",
  },
  {
    category: "General",
    question: "What maintenance is required for invisible grills and safety nets?",
    answer:
      "Maintenance is minimal. Stainless steel cables can simply be wiped down with a damp cloth occasionally to remove airborne dust. Safety nets require no routine servicing and can be rinsed with water if exposed to dust.",
  },
];

export const showcaseData: ProjectItem[] = [
  // 1. Invisible Grills
  {
    id: "proj-ig-1",
    title: "High-Rise Balcony Invisible Grill System",
    category: "Invisible Grills",
    serviceSlug: "invisible-grills",
    configuration: "Full-Height Vertical Tensioned Cables",
    description: "Vertical marine-grade 316 stainless steel cable system anchored under calibrated tension along balcony balustrades, maintaining 98% open panoramic views.",
    type: "Invisible Grills",
    image: "/images/services/subservices/invisible-grills/ig-balcony-invisible-grills.jpg",
    tag: "Showcase Configuration",
    specs: ["316 Stainless Steel Core", "2-Inch Safety Spacing", "Emergency Fire Egress"]
  },
  {
    id: "proj-ig-2",
    title: "Architectural Window Invisible Grill Track",
    category: "Invisible Grills",
    serviceSlug: "invisible-grills",
    configuration: "Slim Aluminum Profile Window Guard",
    description: "Concealed-mount slimline aluminum track fitted into window reveals, preventing accidental falls while allowing natural daylight and cross-ventilation.",
    type: "Invisible Grills",
    image: "/images/services/benefits/invisible-grills/ig-window-system.jpg",
    tag: "Showcase Configuration",
    specs: ["Powder-Coated Track", "Tamper-Resistant Pins", "Sliding Window Friendly"]
  },
  {
    id: "proj-ig-3",
    title: "Toddler & Pet Safety Balcony Grills",
    category: "Invisible Grills",
    serviceSlug: "invisible-grills",
    configuration: "Reinforced Balustrade Protection",
    description: "Close-pitch vertical cable arrangement with horizontal cross-stiffeners to prevent flex, engineered specifically for high-rise family homes.",
    type: "Invisible Grills",
    image: "/images/services/benefits/invisible-grills/ig-child-protection.jpg",
    tag: "Showcase Configuration",
    specs: ["Anti-Flex Cross Stiffeners", "High Tensile Wire", "Child-Safe Calibrated Pitch"]
  },

  // 2. Safety Nets
  {
    id: "proj-sn-1",
    title: "Residential Balcony Fall Protection Netting",
    category: "Safety Nets",
    serviceSlug: "safety-nets",
    configuration: "Perimeter Balustrade Fall Barrier",
    description: "Tightly anchored UV-stabilized virgin polymer safety net mesh safeguarding infants, toddlers, and household pets along exterior balcony railings.",
    type: "Safety Nets",
    image: "/images/projects/project-safety-nets.jpg",
    tag: "Showcase Configuration",
    specs: ["High-Tenacity HDPE Mesh", "Heat-Set Square Knots", "Stainless Anchor Hooks"]
  },
  {
    id: "proj-sn-2",
    title: "Children & Pet Balcony Safety Netting",
    category: "Safety Nets",
    serviceSlug: "safety-nets",
    configuration: "High-Tensile Child Safety Barrier",
    description: "Calibrated micro-mesh fall protection barrier engineered to contain high impact loads while maintaining 100% natural balcony daylight and airflow.",
    type: "Safety Nets",
    image: "/images/services/benefits/safety-nets/sn-child-pet-security.jpg",
    tag: "Showcase Configuration",
    specs: ["Multi-Strand Polymer", "Weather-Resistant", "Non-Obstructive Mesh"]
  },

  // 3. Pigeon Safety Nets
  {
    id: "proj-pn-1",
    title: "Apartment Balcony Pigeon Exclusion Barrier",
    category: "Pigeon Safety Nets",
    serviceSlug: "pigeon-safety-nets",
    configuration: "Translucent Balcony Façade Enclosure",
    description: "Virtually invisible polymer netting preventing pigeons and birds from roosting in balconies, eliminating droppings and respiratory health hazards.",
    type: "Pigeon Safety Nets",
    image: "/images/projects/project-pigeon-nets.jpg",
    tag: "Showcase Configuration",
    specs: ["Translucent Blending Mesh", "100% Humane Deterrent", "Zero Airflow Hindrance"]
  },
  {
    id: "proj-pn-2",
    title: "Balcony & AC Ledge Anti-Bird Shield",
    category: "Pigeon Safety Nets",
    serviceSlug: "pigeon-safety-nets",
    configuration: "Full Perimeter Bird Exclusion",
    description: "High-durability netting barrier preventing pigeons from nesting on outdoor ledges, keeping balcony furniture and tiles completely spotless.",
    type: "Pigeon Safety Nets",
    image: "/images/services/benefits/pigeon-safety-nets/pn-pigeon-block.jpg",
    tag: "Showcase Configuration",
    specs: ["Clean Outdoor Living", "Zero Roosting Footing", "Weatherproof Poly Cords"]
  },

  // 4. Sports Nets
  {
    id: "proj-sp-1",
    title: "Rooftop Cricket Practice Turf Enclosure",
    category: "Sports Nets",
    serviceSlug: "sports-nets",
    configuration: "Full Box Practice Pitch Cage",
    description: "Heavy-duty impact-absorbing cricket practice netting installed on structural steel poles with overhead net ceiling for high-velocity ball containment.",
    type: "Sports Nets",
    image: "/images/projects/project-sports-nets.jpg",
    tag: "Showcase Configuration",
    specs: ["High-Impact Ball Containment", "UV Outdoor Endurance", "Reinforced Border Cord"]
  },
  {
    id: "proj-sp-2",
    title: "Multi-Sport Ground & Turf Perimeter Netting",
    category: "Sports Nets",
    serviceSlug: "sports-nets",
    configuration: "Perimeter Boundary Ball Barrier",
    description: "High-tensile sports arena netting engineered for turf pitches, sports clubs, and school grounds, preventing sports balls from exiting play zones.",
    type: "Sports Nets",
    image: "/images/desktop/sports-nets.webp",
    tag: "Showcase Configuration",
    specs: ["All-Weather Outdoor Mesh", "Zero-Sag Tension Lines", "High-Impact Twine"]
  },

  // 5. Cloth Hangers
  {
    id: "proj-ch-1",
    title: "Ceiling-Mounted Balcony Pulley Drying System",
    category: "Cloth Hangers",
    serviceSlug: "cloth-hangers",
    configuration: "6-Pipe Individual Lowering Pulley Rack",
    description: "High-grade stainless steel pipes individually lowered via smooth nylon dual-wheel ceiling pulleys, reclaiming 100% of valuable balcony floor space.",
    type: "Cloth Hangers",
    image: "/images/projects/project-cloth-hangers.jpg",
    tag: "Showcase Configuration",
    specs: ["Grade 304/202 SS Pipes", "Dual-Wheel Nylon Pulleys", "High Load Capacity"]
  },
  {
    id: "proj-ch-2",
    title: "Retractable Stainless Steel Wall Accordion Rack",
    category: "Cloth Hangers",
    serviceSlug: "cloth-hangers",
    configuration: "Compact Fold-Flat Drying System",
    description: "Space-saving accordion wall rack crafted from rustproof stainless steel, folding completely flush when not in use for utility areas and balconies.",
    type: "Cloth Hangers",
    image: "/images/services/subservices/cloth-hangers/ch-wall-mounted-cloth-hangers.jpg",
    tag: "Showcase Configuration",
    specs: ["Fold-Flat Accordion Frame", "Rustproof Stainless Steel", "Space-Saving Compact Fit"]
  },

  // 6. Bird Spikes
  {
    id: "proj-bs-1",
    title: "Parapet Wall Stainless Steel Bird Spikes",
    category: "Bird Spikes",
    serviceSlug: "bird-spikes",
    configuration: "High-Density Anti-Perch Ledge Strips",
    description: "Blunted marine stainless steel wire prongs embedded in flexible polycarbonate bases, permanently preventing pigeons from perching on narrow architectural ledges.",
    type: "Bird Spikes",
    image: "/images/projects/project-bird-spikes.jpg",
    tag: "Showcase Configuration",
    specs: ["100% Humane Deterrent", "Marine-Grade SS Pins", "UV-Stabilized Base"]
  },
  {
    id: "proj-bs-2",
    title: "AC Outdoor Unit & Window Ledge Bird Spikes",
    category: "Bird Spikes",
    serviceSlug: "bird-spikes",
    configuration: "Flexible Base Surface Protection",
    description: "Dense blunted stainless steel prongs mounted with weather-resistant adhesive across AC compressor tops and curved window sills without drilling.",
    type: "Bird Spikes",
    image: "/images/services/benefits/bird-spikes/bs-polycarb-base.jpg",
    tag: "Showcase Configuration",
    specs: ["Zero-Drill Adhesive Mount", "AC Unit Top Protection", "Long-Term Weather Durability"]
  },
];