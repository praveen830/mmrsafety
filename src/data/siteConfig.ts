/**
 * MMR Safety — Site Configuration
 *
 * Central source of truth for business information,
 * SEO defaults, and site-wide settings.
 *
 * IMPORTANT: Do not invent or change business details
 * without explicit approval.
 */

export const siteConfig = {
  /** Business identity */
  name: "MMR Safety Nets and Invisible Grills",
  shortName: "MMR Safety",
  tagline: "Safety. Style. Peace of Mind.",
  domain: "mmrsafety.in",
  url: "https://mmrsafety.in",

  /** SEO defaults */
  seo: {
    defaultTitle: "MMR Safety Nets and Invisible Grills",
    titleTemplate: "%s | MMR Safety",
    defaultDescription:
      "Premium safety nets and invisible grills for homes and buildings. Expert installation with a focus on safety, style, and peace of mind.",
    defaultOgImage: "/logos/mmr-full.png",
    locale: "en_IN",
    type: "website" as const,
  },

  /** Social links (placeholders — update with real URLs) */
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
    whatsapp: "",
  },

  /** Contact details (Central source of truth across the entire website) */
  contact: {
    businessName: "MMR Safety Nets and Invisible Grills",
    tagline: "Safety. Style. Peace of Mind.",
    domain: "https://mmrsafety.in",
    phone: "+91 6304433505",
    phoneRaw: "+916304433505",
    whatsapp: "916304433505",
    whatsappUrl: "https://wa.me/916304433505",
    email: "mmrsafetyntes@gmail.com",
    address: "Bengaluru, Karnataka, India",
  },

  /** Navigation links */
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Warranty", href: "/#warranty" },
    { label: "Ratings", href: "/#ratings" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/**
 * Returns phone dialer link (tel:).
 */
export function getPhoneUrl(phone: string = siteConfig.contact.phoneRaw): string {
  const clean = phone || siteConfig.contact.phoneRaw;
  return `tel:${clean}`;
}

/**
 * Returns WhatsApp direct chat link.
 * - If serviceNameOrMessage is omitted: returns direct chat link (https://wa.me/916304433505).
 * - If serviceNameOrMessage starts with "Hello" or "Hi": encodes message directly.
 * - If serviceNameOrMessage is a service name: formats an automatic prefilled enquiry for that service.
 */
export function getWhatsAppUrl(
  serviceNameOrMessage: string = "",
  whatsapp: string = siteConfig.contact.whatsapp
): string {
  const cleanNumber = whatsapp ? whatsapp.replace(/[^0-9]/g, "") : siteConfig.contact.whatsapp;
  
  if (!serviceNameOrMessage) {
    return cleanNumber ? `https://wa.me/${cleanNumber}` : siteConfig.contact.whatsappUrl;
  }

  let message = serviceNameOrMessage;
  if (!/^hello|^hi/i.test(message.trim())) {
    message = `Hello MMR Safety, I would like to enquire about ${serviceNameOrMessage} installation. Please provide more details and pricing.`;
  }

  const encodedText = encodeURIComponent(message);
  return cleanNumber
    ? `https://wa.me/${cleanNumber}?text=${encodedText}`
    : `https://wa.me/?text=${encodedText}`;
}

/**
 * Returns email mailto link.
 */
export function getEmailUrl(email: string = siteConfig.contact.email, subject?: string): string {
  const cleanEmail = email || siteConfig.contact.email;
  return subject
    ? `mailto:${cleanEmail}?subject=${encodeURIComponent(subject)}`
    : `mailto:${cleanEmail}`;
}

/**
 * Builds standard prefilled WhatsApp text for requesting a Free Site Visit
 */
export function getFreeSiteVisitMessage(serviceName: string): string {
  return `Hello MMR Safety, I would like to request a free site visit and measurement for ${serviceName} in Bengaluru. Please let me know the available time slots.`;
}

/**
 * Builds standard prefilled WhatsApp text for general service enquiry
 */
export function getServiceEnquiryMessage(serviceName: string): string {
  return `Hello MMR Safety, I have an enquiry regarding ${serviceName} installation. Please provide more details and pricing.`;
}


// ================= PHASE 6: WARRANTY, SAFETY REQUIREMENTS & MATERIALS DATA =================

export interface WarrantyCategory {
  id: string;
  serviceName: string;
  warrantyPeriod: string; // Configurable exact warranty years
  periodBadge: string;
  covered: string[];
  notCovered: string[];
  careConditions: string;
  claimProcess: string;
}

export const warrantyTermsData: WarrantyCategory[] = [
  {
    id: "invisible-grills",
    serviceName: "Invisible Grills",
    warrantyPeriod: "5 Years Manufacturer & Installation Warranty (Configurable)",
    periodBadge: "5-Year Structural Terms",
    covered: [
      "Stainless steel cable tensile structural integrity",
      "Structural extruded aluminium mounting track rigidity",
      "Stainless steel concrete anchor fastener stability",
      "Zero uncoiling, burr formation, or manufacturing wire core defects",
    ],
    notCovered: [
      "Intentional manual severing using wire cutters or heavy shears",
      "Structural building settlement or concrete parapet cracking",
      "Corrosive damage caused by concentrated acid washing chemicals",
    ],
    careConditions:
      "Wipe down cables periodically with a soft damp microfiber cloth. Strictly avoid muriatic or hydrochloric acid tile cleaners near cable tracks.",
    claimProcess:
      "Contact MMR support at +91 6304433505 or email mmrsafetyntes@gmail.com with your site address for prompt on-site inspection and tension recalibration.",
  },
  {
    id: "safety-nets",
    serviceName: "Balcony & Shaft Safety Nets",
    warrantyPeriod: "3 to 5 Years UV & Polymer Warranty (Configurable)",
    periodBadge: "3 to 5-Year UV Terms",
    covered: [
      "High-density polymer resistance against solar ultraviolet degradation",
      "Heat-set knotted mesh load dispersion and perimeter rope hemming",
      "Stainless steel anchor hook structural anchorage",
    ],
    notCovered: [
      "Intentional knife incisions, sharp pet biting, or physical tampering",
      "Direct flame exposure, welding sparks, or hot cigarette burns",
      "Dislodgement resulting from friable or peeling masonry plaster",
    ],
    careConditions:
      "Rinse with light water spray to wash off urban dust. Keep open fire barbecues and heat sources away from mesh boundary.",
    claimProcess:
      "Call +91 6304433505 for quick inspection. Our technicians provide on-site net retensioning and anchor refitting.",
  },
  {
    id: "pigeon-safety-nets",
    serviceName: "Pigeon Safety Nets",
    warrantyPeriod: "3 Years Weather & Material Warranty (Configurable)",
    periodBadge: "3-Year Weather Terms",
    covered: [
      "Translucent monofilament sunlight and rain weather endurance",
      "Perimeter border cord binding and corner anchoring firmness",
      "Zero-gap bird deterrent barrier integrity",
    ],
    notCovered: [
      "Physical tearing by external painting or AC maintenance workers",
      "Facade restructuring without prior net de-rigging by MMR",
    ],
    careConditions:
      "Gently hose down with clean tap water spray to clear bird feathers and dust. Do not apply abrasive metallic scrubbers.",
    claimProcess:
      "Reach out to +91 6304433505 for prompt gap sealing and perimeter hook servicing.",
  },
  {
    id: "sports-nets",
    serviceName: "Sports & Turf Nets",
    warrantyPeriod: "2 to 3 Years Cord & Rigging Warranty (Configurable)",
    periodBadge: "2 to 3-Year Turf Terms",
    covered: [
      "Heavy-gauge multi-strand braided synthetic cord shock absorption",
      "Overlocked perimeter border hemming against unraveling",
      "Steel wire guide cable turnbuckle stability",
    ],
    notCovered: [
      "Vandalism, sharp blade cutting, or non-sporting vehicle impacts",
      "Movement of external structural support columns not erected by MMR",
    ],
    careConditions:
      "Inspect overhead turnbuckles periodically after heavy monsoon storm winds to verify cable tension.",
    claimProcess:
      "Contact MMR technical team for turnbuckle tightening or damaged panel section replacement.",
  },
  {
    id: "cloth-hangers",
    serviceName: "Ceiling Cloth Drying Hangers",
    warrantyPeriod: "2 Years Mechanical & Rust Warranty (Configurable)",
    periodBadge: "2-Year Mechanical Terms",
    covered: [
      "Stainless steel drying pipe corrosion and rust resistance",
      "Ceiling dual-pulley wheel smooth rotational operation",
      "Wall rope cleat mechanical locking stability",
    ],
    notCovered: [
      "Exceeding maximum rated wet laundry capacity per pipe",
      "Nylon pull rope abrasion caused by dragging over sharp metal edges",
      "Physical bent pipes caused by heavy hanging or child swinging",
    ],
    careConditions:
      "Operate pull ropes vertically aligned with pulleys to minimize friction and ensure smooth long-term operation.",
    claimProcess:
      "Call +91 6304433505 for quick on-site pulley servicing or nylon cord re-threading.",
  },
  {
    id: "bird-spikes",
    serviceName: "Bird Spikes",
    warrantyPeriod: "3 to 5 Years Polycarbonate & SS Warranty (Configurable)",
    periodBadge: "3 to 5-Year Ledge Terms",
    covered: [
      "Stainless steel wire prongs against rust or snapping",
      "UV-stabilized virgin polycarbonate base against outdoor brittleness",
      "Prong retention firmly embedded into polycarbonate base",
    ],
    notCovered: [
      "Direct foot trampling during window cleaning or facade glass replacement",
      "Adhesive detachment resulting from peeling underlying exterior wall paint",
    ],
    careConditions:
      "Ensure building maintenance crews avoid stepping on installed strips during facade washing.",
    claimProcess:
      "Notify MMR support to re-bond or realign any dislodged spike strip sections with outdoor structural adhesive.",
  },
];

export interface SafetyRequirementItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  suitability: string;
  recommendedService: string;
  recommendedSlug: string;
}

export const safetyRequirementsData: SafetyRequirementItem[] = [
  {
    id: "children-safety",
    title: "Children & Toddler Safety",
    tagline: "Balcony & Stairwell Fall Prevention",
    description:
      "High-rise balconies and open stair voids present acute fall risks for energetic toddlers. Precision 2-inch pitch invisible grills and high-density safety netting create an unbreachable protective barrier without closing off natural outdoor light.",
    image: "/images/services/benefits/safety-nets/sn-child-pet-security.jpg",
    suitability: "High-Rise Apartments, Duplex Stairwells, Villa Mezzanines",
    recommendedService: "Invisible Grills & Balcony Safety Nets",
    recommendedSlug: "invisible-grills",
  },
  {
    id: "pet-safety",
    title: "Pet Safety (Cats & Dogs)",
    tagline: "Balustrade & Railing Gap Security",
    description:
      "Household cats and dogs can slip through wide railing spindles or jump towards birds on outer ledges. Non-invasive knotted polymer netting and slim stainless cables close balustrade voids reliably while preserving fresh outdoor breeze.",
    image: "/images/services/safety-nets-desktop.webp",
    suitability: "Balcony Railings, Terrace Parapets, Sliding Window Louvers",
    recommendedService: "Balcony Safety Nets",
    recommendedSlug: "safety-nets",
  },
  {
    id: "high-rise-balcony",
    title: "High-Rise Balcony Protection",
    tagline: "Full-Height Structural Perimeter Barriers",
    description:
      "Upper-floor apartment balconies face severe wind exposure and elevated slip dangers. Full-height ceiling-to-railing tensioned invisible grills deliver robust accidental fall protection without blocking panoramic skyline views.",
    image: "/images/services/invisible-grills-desktop.webp",
    suitability: "Floors 4 to 30+, Luxury Condominiums, Penthouses",
    recommendedService: "Invisible Grills",
    recommendedSlug: "invisible-grills",
  },
  {
    id: "open-windows",
    title: "Open Window Protection",
    tagline: "Fresh Air Circulation with Zero Falling Risks",
    description:
      "French sliding windows and low-sill bedroom openings require slimline fall security that allows natural cross-ventilation 24/7 while preserving quick emergency fire egress capability with standard wire cutters.",
    image: "/images/services/benefits/invisible-grills/ig-skyline-view.jpg",
    suitability: "Sliding Glass Windows, Bedroom French Openings",
    recommendedService: "Window Invisible Grills",
    recommendedSlug: "invisible-grills",
  },
  {
    id: "pigeon-hygiene",
    title: "Pigeon & Bird Hygiene Protection",
    tagline: "Ending Acidic Droppings, Mites & Health Risks",
    description:
      "Pigeons nesting on apartment balconies introduce fungal spores, foul odors, and acidic droppings that corrode AC units. Discreet translucent nets and stainless spikes humanely deny perching access without harming birds.",
    image: "/images/services/pigeon-safety-nets-desktop.webp",
    suitability: "Balconies, Utility Areas, Window AC Ledges",
    recommendedService: "Pigeon Safety Nets & Bird Spikes",
    recommendedSlug: "pigeon-safety-nets",
  },
  {
    id: "sports-turf",
    title: "Sports & Turf Facility Enclosures",
    tagline: "Heavy-Impact Ball Containment Solutions",
    description:
      "Cricket practice batting cages and community multi-sport turfs require high-tenacity braided cords engineered to absorb high-velocity leather cricket balls, preventing injury and damage to surrounding properties.",
    image: "/images/services/sports-nets-desktop.webp",
    suitability: "Rooftop Turfs, Cricket Pitches, School Grounds",
    recommendedService: "Sports Nets",
    recommendedSlug: "sports-nets",
  },
  {
    id: "apartment-complexes",
    title: "Residential Apartment Complexes",
    tagline: "Gated Community Bylaw & Facade Compliance",
    description:
      "Modern Bangalore apartment associations strictly prohibit heavy exterior iron grilles that alter building facades. Slimline stainless steel invisible grills and neutral mesh integrate seamlessly, meeting strict society bylaws.",
    image: "/images/services/benefits/invisible-grills/ig-community-compliance.jpg",
    suitability: "Gated Societies, Residential Condominiums, RWAs",
    recommendedService: "Invisible Grills",
    recommendedSlug: "invisible-grills",
  },
  {
    id: "commercial-industrial",
    title: "Commercial & Industrial Buildings",
    tagline: "Duct Voids, Rooftops & Open Atrium Safety",
    description:
      "Multi-story commercial atriums, plumbing duct shafts, and warehouse roofs require engineered perimeter nets and anti-perch strips to prevent maintenance falls and bird infestation across high-traffic facilities.",
    image: "/images/details/detail-cable-tensioner.webp",
    suitability: "Tech Parks, Commercial Towers, Hospitals, Warehouses",
    recommendedService: "Duct Safety Nets & Spikes",
    recommendedSlug: "safety-nets",
  },
];

export interface MaterialShowcaseItem {
  id: string;
  name: string;
  shortDesc: string;
  application: string;
  composition: string;
  image: string;
  badges: string[];
}

export const materialsShowcaseData: MaterialShowcaseItem[] = [
  {
    id: "marine-ss-wires",
    name: "Marine-Grade Stainless Steel Wires",
    shortDesc:
      "Multi-strand AISI 316 marine-grade stainless steel cables encased in a clear UV-stabilized nylon sleeve for high tensile accidental fall protection with zero burr formation.",
    application: "Invisible Grills for Balconies & Windows",
    composition: "AISI 316 Stainless Steel Core + Clear Nylon Protective Jacket (2.0–2.5mm)",
    image: "/images/details/detail-cable-tensioner.webp",
    badges: ["316 Marine Alloy", "UV Nylon Sheath", "Anti-Burr"],
  },
  {
    id: "uv-netting-mesh",
    name: "High-Density UV-Stabilized Netting Mesh",
    shortDesc:
      "Heat-set square knotted polymer netting fabricated with virgin polyethylene and carbon-black UV stabilizers, engineered to endure intense tropical sun without brittle degradation.",
    application: "Balcony Fall Safety Nets & Duct Protection",
    composition: "Virgin High-Density Polyethylene (HDPE) with UV Blockers",
    image: "/images/details/detail-net-anchor.webp",
    badges: ["UV-Stabilized", "Heat-Set Knots", "High Tenacity"],
  },
  {
    id: "tensioning-accessories",
    name: "Precision Fixing & Tensioning Accessories",
    shortDesc:
      "Calibrated internal mechanical locking pins, copper/aluminum ferrules, and stainless turnbuckles that maintain taut cable tension across spans without sagging.",
    application: "Invisible Grill Cable Locking & Sports Rigging",
    composition: "Stainless Steel & Solid Brass Locking Pegs",
    image: "/images/details/detail-cable-tensioner.webp",
    badges: ["Zero-Sag Lock", "Calibrated Tension", "Concealed Pegs"],
  },
  {
    id: "heavy-duty-fasteners",
    name: "Heavy-Duty Hooks, Eye-Bolts & Wall Fasteners",
    shortDesc:
      "Heavy-gauge stainless steel J-hooks and expansion sleeve anchors drilled directly into concrete ceiling and parapet beams at tight intervals for balanced load dispersion.",
    application: "Perimeter Anchoring for Safety & Pigeon Nets",
    composition: "Stainless Steel Concrete Expansion Anchors",
    image: "/images/details/detail-net-anchor.webp",
    badges: ["Solid Concrete Anchors", "Stainless Alloy", "Even Load Spread"],
  },
  {
    id: "structural-aluminium-tracks",
    name: "Structural Supporting Frames & Aluminium Tracks",
    shortDesc:
      "Rigid architectural extruded aluminum mounting profiles finished with powder coating to securely hold tensioned cables while concealing anchor bolts for a sleek aesthetic.",
    application: "Mounting Tracks for Balcony & Window Invisible Grills",
    composition: "Architectural Extruded Aluminum Alloy Profile (Powder-Coated)",
    image: "/images/details/detail-cable-tensioner.webp",
    badges: ["Powder-Coated", "Concealed Fasteners", "Rigid Profile"],
  },
  {
    id: "cloth-hanger-hardware",
    name: "Ceiling Cloth Hanger Pulleys, Gear Boxes & SS Rods",
    shortDesc:
      "Independent dual-wheel ceiling pulleys with smooth nylon rollers, heavy wall locking cleats, and rustproof stainless steel pipes engineered for easy laundry pull-and-dry operation.",
    application: "Ceiling-Mounted Balcony Cloth Drying Hangers",
    composition: "Grade 304/202 Stainless Steel Tubes + Nylon Dual-Wheel Pulleys",
    image: "/images/details/detail-hanger-pulley.webp",
    badges: ["Rustproof SS Tubes", "Smooth Nylon Wheels", "Wall Cleat Lock"],
  },
  {
    id: "polycarb-bird-spikes",
    name: "UV-Stabilized Polycarbonate & SS Bird Spike Strips",
    shortDesc:
      "Blunted upward-pointing marine stainless steel wire pins anchored into a flexible segmented polycarbonate base, creating an uneven surface where birds cannot land or roost.",
    application: "Ledge, Parapet Wall, Window Sill & AC Bracket Protection",
    composition: "AISI 304/316 Stainless Wire Prongs + UV-Resistant Polycarbonate Base",
    image: "/images/details/detail-spikes-base.webp",
    badges: ["100% Humane", "Flexible Curved Base", "Zero-Drill Adhesive"],
  },
];


/**
 * Service Areas Data — Confirmed Operational Zones in Bengaluru
 * Central source of truth for all location and coverage components.
 */
export interface ServiceAreaItem {
  id: string;
  name: string;
  zone: string;
  landmarks: string[];
  popularServices: string[];
  responseTime: string;
  description: string;
}

export const serviceAreasData: ServiceAreaItem[] = [
  {
    id: "whitefield-marathahalli",
    name: "Whitefield & Marathahalli",
    zone: "East Bengaluru",
    landmarks: ["ITPB Tech Park", "Kadugodi", "Varthur Road", "Brookefield", "Hoodi"],
    popularServices: ["Invisible Grills", "Balcony Safety Nets", "Pigeon Nets"],
    responseTime: "Same-Day / Within 24h",
    description: "Dedicated technical crew serving luxury high-rise towers, gated apartment enclaves, and villas along the Whitefield-Varthur corridor."
  },
  {
    id: "electronic-city-sarjapur",
    name: "Electronic City & Sarjapur Road",
    zone: "South-East Bengaluru",
    landmarks: ["Electronic City Phase 1 & 2", "Sarjapur Road", "Carmelaram", "Hadosiddapura"],
    popularServices: ["Invisible Grills", "Balcony Safety Nets", "Cloth Hangers"],
    responseTime: "Same-Day / Within 24h",
    description: "Comprehensive site visits across modern apartment complexes and IT residential corridors with laser-measured railing installations."
  },
  {
    id: "bellandur-outer-ring-road",
    name: "Bellandur & Outer Ring Road",
    zone: "Tech Corridor",
    landmarks: ["EcoSpace Tech Park", "Devarabisanahalli", "Kasavanahalli", "Kaikondrahalli"],
    popularServices: ["Invisible Grills", "Pigeon Safety Nets", "Bird Spikes"],
    responseTime: "Within 24 Hours",
    description: "High-density residential high-rise coverage specializing in society-compliant invisible grills and discreet pigeon exclusion netting."
  },
  {
    id: "hsr-layout-koramangala",
    name: "HSR Layout, Koramangala & BTM",
    zone: "South Bengaluru",
    landmarks: ["HSR Sectors 1-7", "Koramangala 1st-8th Block", "BTM Layout", "Silk Board"],
    popularServices: ["Invisible Grills", "Safety Nets", "Ceiling Cloth Hangers"],
    responseTime: "Same-Day / Within 24h",
    description: "Fast-dispatch technicians providing on-site samples and balcony assessments for apartments and independent homes."
  },
  {
    id: "hebbal-thanisandra",
    name: "Hebbal, Thanisandra & Yelahanka",
    zone: "North Bengaluru",
    landmarks: ["Manyata Tech Park", "Thanisandra Main Road", "Hebbal Flyover", "Jakkur", "Yelahanka"],
    popularServices: ["Invisible Grills", "Balcony Safety Nets", "Sports Nets"],
    responseTime: "Within 24 Hours",
    description: "Equipped for large-scale residential balconies, rooftop sports turf installations, and high-rise fall protection across North Bengaluru."
  },
  {
    id: "jp-nagar-kanakapura",
    name: "JP Nagar, Jayanagar & Kanakapura Rd",
    zone: "South Bengaluru",
    landmarks: ["JP Nagar Phases 1-8", "Jayanagar", "Kanakapura Road", "Banashankari"],
    popularServices: ["Invisible Grills", "Balcony Safety Nets", "Cloth Hangers"],
    responseTime: "Same-Day / Within 24h",
    description: "Reliable residential installation service with sample demonstrations and laser-accurate balcony and window estimates."
  },
  {
    id: "indiranagar-central",
    name: "Indiranagar, Domlur & Central Bengaluru",
    zone: "Central Bengaluru",
    landmarks: ["100ft Road", "Defence Colony", "Domlur", "Old Airport Road", "Ulsoor"],
    popularServices: ["Invisible Grills", "Pigeon Nets", "Bird Spikes"],
    responseTime: "Within 24 Hours",
    description: "Architectural invisible grill solutions and humane anti-perch bird spikes tailored for premium apartments and commercial balconies."
  },
  {
    id: "yeshwanthpur-malleshwaram",
    name: "Yeshwanthpur, Rajajinagar & Malleshwaram",
    zone: "West Bengaluru",
    landmarks: ["World Trade Center", "Yeshwanthpur Metro", "Rajajinagar", "Malleshwaram 8th Cross"],
    popularServices: ["Balcony Safety Nets", "Invisible Grills", "Pigeon Nets"],
    responseTime: "Within 24 Hours",
    description: "Serving gated communities and residential towers across West Bengaluru with prompt measurement surveys and guaranteed workmanship."
  }
];

export function getAreaSiteVisitMessage(areaName: string): string {
  return `Hello MMR Safety, I would like to request a free site visit and measurement for my property in ${areaName}, Bengaluru. Please let me know your available schedule.`;
}
