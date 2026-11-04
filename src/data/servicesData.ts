/**
 * servicesData.ts — Authoritative Structured Data for All MMR Safety Services
 *
 * Provides type-safe, strictly factual content for individual service pages.
 * Strictly adheres to truth-in-advertising guidelines:
 * - No unverified steel grades or load-testing claims
 * - No fabricated warranties or certifications
 * - Realistic descriptions tailored to Bangalore high-rise apartments & villas
 */

export interface SubServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  whatsappMessage?: string;
  suitability?: string[];
  hardwareSpecs?: { label: string; value: string }[];
  installationHighlight?: string;
}

export interface MaterialSpecItem {
  label: string;
  value: string;
}

export interface MaterialOverview {
  title: string;
  description: string;
  specs: MaterialSpecItem[];
}

export interface ServiceDetail {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  subtitle: string;
  heroImage: string;
  imageDesktop: string;
  imageMobile: string;
  imageAlt: string;
  altText: string;
  metaTitle: string;
  metaDescription: string;
  specBadges: string[];
  overview: string[];
  benefits: {
    title: string;
    description: string;
    icon: string;
    image: string;
  }[];
  anatomy: {
    title: string;
    description: string;
    detailImage: string;
    detailImageAlt: string;
    components: {
      name: string;
      desc: string;
    }[];
  };
  applications: {
    title: string;
    description: string;
  }[];
  gallery: {
    image: string;
    alt: string;
    caption: string;
  }[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
  subServices: SubServiceItem[];
  materials: MaterialOverview;
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
}

export const servicesDetailData: Record<string, ServiceDetail> = {
  "invisible-grills": {
    slug: "invisible-grills",
    name: "Invisible Grills",
    category: "Balcony & Window Safety",
    tagline: "Architectural Elegance Meets High-Tensile Protection",
    subtitle:
      "Slim high-tensile stainless steel cable systems engineered for contemporary balconies and windows, providing certified accidental fall protection without blocking natural airflow or city vistas.",
    heroImage: "/images/services/invisible-grills-desktop.webp",
    imageDesktop: "/images/services/invisible-grills-desktop.webp",
    imageMobile: "/images/services/invisible-grills-mobile.webp",
    imageAlt:
      "Modern luxury high-rise apartment balcony fitted with vertical stainless steel invisible grill safety cables overlooking city skyline",
    altText:
      "Modern luxury high-rise apartment balcony fitted with vertical stainless steel invisible grill safety cables overlooking city skyline",
    metaTitle:
      "Invisible Grills Installation in Bangalore | Modern Balcony Safety",
    metaDescription:
      "High-tensile stainless steel invisible grills for high-rise balconies and windows. Enjoy 99% open skyline views with robust accidental fall protection.",
    specBadges: [
      "High-Tensile Stainless Steel Cables",
      "Slim Architectural Profile (<2.5mm)",
      "Maximized Natural Ventilation & Views",
      "Precision Tensioned Aluminum Tracks",
    ],
    overview: [
      "Invisible grills represent the modern standard in architectural home safety. Unlike traditional bulky iron grills that block natural light and feel cage-like, invisible grills use ultra-slim, high-tensile stainless steel cables spaced at precise intervals.",
      "Engineered to blend seamlessly with contemporary building facades, our invisible grill systems protect children and pets from accidental falls while keeping your panoramic outdoor views completely clear.",
    ],
    benefits: [
      {
        title: "Unobstructed Skyline Views",
        description:
          "Maintains over 98% open visual transparency, allowing natural daylight and fresh breezes to flood your living space without visual obstruction.",
        icon: "eye",
        image: "/images/services/benefits/invisible-grills/ig-skyline-view.jpg",
      },
      {
        title: "Child & Pet Fall Protection",
        description:
          "Precision-spaced tensioned cables create a protective barrier along balcony balustrades, preventing accidental falls while keeping windows accessible.",
        icon: "shield",
        image: "/images/services/benefits/invisible-grills/ig-fall-protection.jpg",
      },
      {
        title: "Emergency Fire Egress",
        description:
          "Unlike immovable welded iron bars, invisible grill cables can be severed with standard wire cutters during an emergency to allow rapid egress.",
        icon: "fire-escape",
        image: "/images/services/benefits/invisible-grills/ig-fire-egress.jpg",
      },
      {
        title: "Weather & Corrosion Resistance",
        description:
          "High-grade stainless steel cables encased in UV-stabilized nylon coating prevent surface rust, outdoor weathering, and sharp burr formation.",
        icon: "weather",
        image: "/images/services/benefits/invisible-grills/ig-weather-resistance.jpg",
      },
      {
        title: "Gated Community Compliance",
        description:
          "Approved across modern apartment complexes and high-rise developments where traditional exterior iron grills are strictly prohibited by society bylaws.",
        icon: "building",
        image: "/images/services/benefits/invisible-grills/ig-community-compliance.jpg",
      },
      {
        title: "Zero Painting & Low Maintenance",
        description:
          "Requires no repetitive enamel painting or anti-rust coatings. Simply wipe with a soft cloth to maintain pristine clarity for years.",
        icon: "clean",
        image: "/images/services/benefits/invisible-grills/ig-low-maintenance.jpg",
      },
    ],
    anatomy: {
      title: "Engineered Hardware & Cable Anatomy",
      description:
        "Every invisible grill installation relies on structural-grade anchoring hardware and calibrated mechanical tensioning for long-term safety.",
      detailImage: "/images/details/detail-cable-tensioner.jpg",
      detailImageAlt:
        "Close-up of high-tensile cable tensioning hardware and structural mounting track",
      components: [
        {
          name: "Structural Aluminum Mounting Track",
          desc: "Heavy-duty extruded aluminum profile anchored directly into concrete ceiling and parapet beams using stainless steel expansion fasteners.",
        },
        {
          name: "High-Tensile Multi-Strand Cable",
          desc: "Multi-wire stainless steel core coated in a transparent, UV-stabilized protective nylon jacket to prevent cuts and outdoor oxidation.",
        },
        {
          name: "Concealed Locking Tensioners",
          desc: "Internal mechanical pegs and locking pins that maintain calibrated tension across every cable run, eliminating slack or sagging.",
        },
        {
          name: "Protective Finishing Fascia",
          desc: "Powder-coated aluminum cover profile that conceals all anchor bolts and wire junctions for a clean, flush architectural finish.",
        },
      ],
    },
    applications: [
      {
        title: "High-Rise Apartment Balconies",
        description:
          "Full ceiling-to-railing safety enclosures for high-elevation apartments without compromising the exterior visual aesthetic.",
      },
      {
        title: "French Windows & Sliding Doors",
        description:
          "Slimline window protection allowing residents to keep wide glass sliding panels open for maximum ventilation.",
      },
      {
        title: "Staircase Voids & Open Mezzanines",
        description:
          "Floor-to-ceiling interior cable partitions for duplex villas, open stairwells, and mezzanine floor drops.",
      },
      {
        title: "Commercial Terrace Perimeters",
        description:
          "Perimeter safety barriers for rooftop terraces, open office breakout areas, and outdoor cafeteria decks.",
      },
    ],
    gallery: [
      {
        image: "/images/services/invisible-grills-desktop.webp",
        alt: "Original AI architectural high-rise balcony with stainless steel invisible safety grill cables catching sunlight",
        caption: "Luxury High-Rise Balcony — High-Tensile Stainless Steel Cable Safety Installation",
      },
      {
        image: "/images/services/invisible-grills-mobile.webp",
        alt: "High-rise apartment balcony vertical invisible grill safety installation with panoramic city background",
        caption: "High-Rise Balcony — Full-Height Vertical Marine SS Invisible Grill Installation",
      },
      {
        image: "/images/projects/project-invisible-grills.jpg",
        alt: "Invisible grill installation on high-rise residential balcony",
        caption: "High-Rise Balcony Installation — Panoramic City Skyline",
      },
    ],
    process: [
      {
        step: "01",
        title: "Laser Site Measurement",
        desc: "Our technicians inspect the structural concrete, parapet wall, and ceiling depth using precision laser measurement tools.",
      },
      {
        step: "02",
        title: "Track Anchoring",
        desc: "Structural aluminum mounting tracks are leveled and securely fastened using stainless steel expansion anchors.",
      },
      {
        step: "03",
        title: "Continuous Wire Threading",
        desc: "Continuous high-tensile stainless wire is threaded through nylon grommets at either 2-inch or 3-inch gap intervals.",
      },
      {
        step: "04",
        title: "Mechanical Tensioning",
        desc: "Each cable run is mechanically tensioned and locked into place, followed by manual deflection and stress verification.",
      },
    ],
    faqs: [
      {
        question: "How safe are invisible grills for children and pets?",
        answer:
          "Invisible grills are engineered specifically to prevent accidental falls. The high-tensile multi-strand stainless cables are tensioned mechanically across rigid aluminum tracks anchored directly into structural concrete, creating a reliable barrier that children and pets cannot push through.",
      },
      {
        question: "Will invisible grills rust over time in rainy weather?",
        answer:
          "No. Our invisible grills utilize high-grade stainless steel multi-strand wire wrapped in an exterior UV-stabilized nylon sleeve that seals out moisture, humidity, and atmospheric pollutants.",
      },
      {
        question: "What is the standard spacing between invisible grill cables?",
        answer:
          "We offer 2-inch (50mm) and 3-inch (75mm) spacing. For households with young children or small pets, 2-inch spacing is strongly recommended for maximum fall protection.",
      },
      {
        question: "Can invisible grills be cut in case of an emergency fire egress?",
        answer:
          "Yes. One of the chief safety advantages of invisible grills over traditional iron grilles is fire safety. In an emergency, rescue personnel or residents can sever individual cables using a standard household wire cutter in seconds.",
      },
      {
        question: "How do I clean and maintain invisible grills?",
        answer:
          "Maintenance is minimal. Simply wipe down the cables with a microfiber cloth dipped in mild soapy water every few months to remove surface dust. No painting or special treatments are required.",
      },
    ],
    subServices: [
      {
        id: "balcony-invisible-grills",
        title: "Balcony Invisible Grills",
        tagline: "Panoramic Balcony Fall Protection",
        description:
          "Full-height or railing-to-ceiling high-tensile stainless steel vertical cables engineered for apartment balconies, ensuring 100% open views and fresh airflow.",
        image: "/images/services/invisible-grills-desktop.webp",
        imageAlt: "Balcony invisible grill installation overlooking Bangalore city view",
        suitability: [
          "High-Rise Balconies",
          "Railing Balustrades",
          "Open Skyline Penthouses"
        ],
        hardwareSpecs: [
          { label: "Core Cable", value: "AISI 316 Marine Stainless Steel (2.0–2.5mm)" },
          { label: "Pitch Options", value: "2.0 inch (50mm) or 3.0 inch (75mm)" },
          { label: "Track Material", value: "Heavy-Duty Powder-Coated Extruded Aluminium" },
          { label: "Anchoring", value: "SS Expansion Fasteners into Concrete Slabs" }
        ],
        installationHighlight: "Completed within 3–5 hours with precision laser levelling and mechanical tensioning.",
        badge: "Most Popular",
      },
      {
        id: "window-invisible-grills",
        title: "Window Invisible Grills",
        tagline: "Slim Window Fall & Tamper Security",
        description:
          "Precision-spaced slim cable tracks designed for modern sliding, French, and casement windows, maintaining easy window operation and emergency egress.",
        image: "/images/services/benefits/invisible-grills/ig-skyline-view.jpg",
        imageAlt: "Apartment window invisible grills installation",
        suitability: [
          "French Sliding Windows",
          "Casement Windows",
          "Bedroom Window Openings"
        ],
        hardwareSpecs: [
          { label: "Core Cable", value: "Slim 2.0mm High-Tensile 316 Stainless Wire" },
          { label: "Frame Mounting", value: "Flush Internal or Parapet Recessed Track" },
          { label: "Emergency Egress", value: "Quick-severable with manual emergency wire cutter" },
          { label: "Corrosion Coating", value: "UV-Stabilized Transparent Protective Nylon Jacket" }
        ],
        installationHighlight: "Slim perimeter tracks preserve complete sliding window operation and fresh airflow.",
      },
      {
        id: "child-protection-grills",
        title: "Child Protection Grills",
        tagline: "Calibrated 2-Inch Toddler Safety Pitch",
        description:
          "Ultra-secure 2-inch pitch configuration with horizontal cross stiffeners designed specifically to protect curious toddlers, young kids, and household pets.",
        image: "/images/services/benefits/invisible-grills/ig-fall-protection.jpg",
        imageAlt: "Child safety invisible grills on high-rise balcony balustrade",
        suitability: [
          "Toddler Play Balconies",
          "Nursery Windows",
          "Duplex Stair Voids"
        ],
        hardwareSpecs: [
          { label: "Cable Pitch", value: "Strict 2-inch (50mm) Toddler-Safe Pitch" },
          { label: "Cross Stiffeners", value: "Horizontal Stainless Spacer Clips every 3 feet" },
          { label: "Deflection Test", value: "Calibrated under manual deflection inspection" },
          { label: "Coating Finish", value: "Zero-Burr Smooth Nylon Jacket (Safe for Little Hands)" }
        ],
        installationHighlight: "Engineered with rigid horizontal cross-stiffeners to prevent curious toddler gap separation.",
        badge: "Child Safety",
      },
      {
        id: "apartment-invisible-grills",
        title: "Apartment Invisible Grills",
        tagline: "Gated Community Bylaw Compliant",
        description:
          "Uniform architectural aesthetic approved across Bangalore luxury apartment societies where bulky iron grilles are strictly prohibited by society bylaws.",
        image: "/images/services/benefits/invisible-grills/ig-community-compliance.jpg",
        imageAlt: "Apartment society invisible grill architectural facade",
        suitability: [
          "Gated Apartment Societies",
          "Luxury Condominiums",
          "Villa Communities"
        ],
        hardwareSpecs: [
          { label: "Bylaw Compliance", value: "Meets modern apartment facade bylaws" },
          { label: "Exterior Profile", value: "Subtle architectural finish unnoticeable from ground" },
          { label: "Hardware Alloy", value: "Marine-Grade 316 SS & Anodized Track" },
          { label: "Maintenance", value: "Zero painting required; simple microfiber cloth wipe" }
        ],
        installationHighlight: "Fully approved across Bangalore apartment associations where exterior iron grills are prohibited.",
      },
    ],
    materials: {
      title: "Marine-Grade SS 316 Multi-Strand Cable System",
      description:
        "Every MMR invisible grill installation uses multi-strand AISI 316 marine-grade stainless steel cables encased in UV-stabilized transparent nylon, anchored into structural concrete with heavy-duty extruded aluminum profiles.",
      specs: [
        { label: "Cable Core Alloy", value: "AISI 316 Marine-Grade Stainless Steel" },
        { label: "Outer Protective Jacket", value: "UV-Stabilized Clear Nylon (Anti-Burr)" },
        { label: "Mounting Track Profile", value: "Structural Extruded Aluminum with Powder Coat" },
        { label: "Tensile Cable Diameter", value: "2.0mm – 2.5mm Slim Architectural Profile" },
        { label: "Calibrated Spacing Pitch", value: "2-inch (50mm) / 3-inch (75mm) Options" },
        { label: "Fastener Hardware", value: "Stainless Steel Concrete Expansion Anchor Bolts" },
      ],
    },
    relatedSlugs: ["safety-nets", "pigeon-safety-nets", "cloth-hangers"],
  },

  "safety-nets": {
    slug: "safety-nets",
    name: "Safety Nets",
    category: "Balcony & Shaft Fall Protection",
    tagline: "Comprehensive Fall Prevention for Balconies & Open Shafts",
    subtitle:
      "Durable, UV-stabilized polymer safety netting tailored for residential balconies, stairwells, and open building ducts to safeguard children, pets, and residents from falls.",
    heroImage: "/images/services/safety-nets-desktop.webp",
    imageDesktop: "/images/services/safety-nets-desktop.webp",
    imageMobile: "/images/services/safety-nets-mobile.webp",
    imageAlt:
      "Residential balcony fall protection safety net installation overlooking green city view",
    altText:
      "Residential balcony fall protection safety net installation overlooking green city view",
    metaTitle:
      "Balcony Safety Nets Installation in Bangalore | Fall Protection",
    metaDescription:
      "Durable UV-stabilized balcony safety netting tailored for apartments and residential buildings. Protect children and pets with secure perimeter anchoring.",
    specBadges: [
      "UV-Stabilized High-Density Polymer",
      "Square Mesh Load Dispersion",
      "Weather & Sun Resistant",
      "Stainless Steel Perimeter Anchors",
    ],
    overview: [
      "Balcony safety netting provides an essential, non-invasive barrier for high-rise residences. Designed to safeguard infants, toddlers, and household pets, safety nets enclose open balcony perimeters without obstructing fresh air or natural sunlight.",
      "Manufactured from high-density, UV-stabilized polymer filaments, our nets withstand intense tropical sunlight, sudden downpours, and outdoor temperature shifts without becoming brittle or discolored.",
    ],
    benefits: [
      {
        title: "Child & Pet Fall Security",
        description:
          "Provides a continuous safety barrier that prevents curious children from climbing railings or pets from slipping through balustrade gaps.",
        icon: "shield",
        image: "/images/services/benefits/safety-nets/sn-child-pet-security.jpg",
      },
      {
        title: "High Airflow & Light Transmission",
        description:
          "Over 92% open area allows natural outdoor breeze and sunlight to circulate freely into your living quarters.",
        icon: "air",
        image: "/images/services/benefits/safety-nets/sn-airflow-transmission.jpg",
      },
      {
        title: "UV-Treated Weather Endurance",
        description:
          "Stabilized against solar ultraviolet degradation, ensuring the polymer fibers retain strength across wet monsoons and harsh summers.",
        icon: "sun",
        image: "/images/services/benefits/safety-nets/sn-uv-endurance.jpg",
      },
      {
        title: "Discreet Visual Footprint",
        description:
          "Semi-translucent mesh blends into background greenery and skyline views, avoiding a closed-in or cage-like feeling.",
        icon: "eye",
        image: "/images/services/benefits/safety-nets/sn-discreet-footprint.jpg",
      },
      {
        title: "Clean Non-Invasive Anchoring",
        description:
          "Perimeter stainless steel hooks are neatly drilled into concrete borders, allowing easy temporary unhooking for balcony painting.",
        icon: "anchor",
        image: "/images/services/benefits/safety-nets/sn-anchor-hooks.jpg",
      },
      {
        title: "Object Fall Prevention",
        description:
          "Prevents toys, plant pots, and laundry items from accidentally tumbling off balconies onto lower floors or common walkways.",
        icon: "fall-prevent",
        image: "/images/services/benefits/safety-nets/sn-object-prevention.jpg",
      },
    ],
    anatomy: {
      title: "Netting Material & Anchor Hardware",
      description:
        "A secure safety net installation requires heavy-gauge polymer mesh combined with durable perimeter anchor hardware.",
      detailImage: "/images/details/detail-net-anchor.jpg",
      detailImageAlt:
        "Stainless steel perimeter net anchor hook secured into masonry wall",
      components: [
        {
          name: "High-Density Polymer Knotted Mesh",
          desc: "Tightly knotted square mesh manufactured from heat-set synthetic filaments with built-in UV stabilizers.",
        },
        {
          name: "Braided Perimeter Border Cord",
          desc: "Heavy-gauge synthetic border rope threaded through all outer mesh loops to evenly distribute tension across anchors.",
        },
        {
          name: "Stainless Steel Anchor Fasteners",
          desc: "Corrosion-resistant metal anchor hooks installed at uniform 1-foot intervals along ceiling, walls, and railing bases.",
        },
        {
          name: "Reinforced Corner Tie-Offs",
          desc: "Double-looped locking ties securing high-stress corner junctions against wind flutter and accidental impacts.",
        },
      ],
    },
    applications: [
      {
        title: "Apartment Balcony Openings",
        description:
          "Full enclosure of front and side balconies from railing height to ceiling slab, customized to curved or rectangular openings.",
      },
      {
        title: "Open Stairwell Center Voids",
        description:
          "Vertical safety net installations covering the central gap between multi-story staircase railings.",
      },
      {
        title: "Building Utility Duct Shafts",
        description:
          "Horizontal and vertical protective netting across open internal building ducts and plumbing shafts.",
      },
      {
        title: "Terrace Parapet Extensions",
        description:
          "Vertical extension netting installed above low terrace parapet walls for child-friendly rooftop play areas.",
      },
    ],
    gallery: [
      {
        image: "/images/services/safety-nets-desktop.webp",
        alt: "High-rise apartment balcony with transparent safety net enclosing the railing in crisp daylight",
        caption: "Apartment Balcony Fall Safety Netting — Full Height Protection",
      },
      {
        image: "/images/services/safety-nets-mobile.webp",
        alt: "Tensioned safety net protecting luxury balcony perimeter with potted plants and city view",
        caption: "Tightly Anchored Mesh with Clear Outdoor Visibility & Natural Light",
      },
      {
        image: "/images/projects/project-safety-nets.jpg",
        alt: "Residential balcony safety netting installation on high-rise building",
        caption: "Residential Balcony Safety Netting — High-Tenacity Enclosure",
      },
    ],
    process: [
      {
        step: "01",
        title: "Perimeter Inspection",
        desc: "Detailed measurement of balcony spans and assessment of masonry anchor points along walls and ceiling slabs.",
      },
      {
        step: "02",
        title: "Anchor Placement",
        desc: "Stainless steel anchor hooks are drilled at consistent 1-foot spacing along the complete installation boundary.",
      },
      {
        step: "03",
        title: "Custom Net Fitting",
        desc: "The safety net is trimmed and bordered with high-strength perimeter rope to match the exact balcony contour.",
      },
      {
        step: "04",
        title: "Tension & Pull Testing",
        desc: "Technicians stretch and hook the net across all perimeter points, testing manual pull resistance to ensure zero slack.",
      },
    ],
    faqs: [
      {
        question: "Does the safety net block fresh air or natural sunlight?",
        answer:
          "No. The mesh strands are thin and spaced to allow more than 92% natural light and full cross-ventilation into your balcony and living area.",
      },
      {
        question: "How long does the safety net last outdoors in Bangalore weather?",
        answer:
          "Our safety nets are constructed from UV-stabilized polymer materials engineered specifically to withstand heavy outdoor sunlight and monsoon rains without brittle degradation.",
      },
      {
        question: "Can the net support the weight of a child or pet leaning against it?",
        answer:
          "Yes. The combination of high-density knotted polymer mesh and closely spaced stainless anchors disperses pressure evenly across the perimeter, preventing toddlers or pets from falling.",
      },
      {
        question: "Can the net be removed if we need to repaint the balcony?",
        answer:
          "Yes. The perimeter hooks allow the net to be temporarily unhooked for maintenance or wall painting, and reinstalled with proper tension.",
      },
      {
        question: "Does safety netting also stop pigeons?",
        answer:
          "While safety nets prevent accidental falls, the mesh aperture is designed for load protection. For specialized bird exclusion, we recommend our pigeon-specific translucent nets with finer mesh apertures.",
      },
    ],
    subServices: [
      {
        id: "balcony-safety-nets",
        title: "Balcony Safety Nets",
        tagline: "Comprehensive Balcony Fall Protection",
        description:
          "High-tenacity perimeter netting designed to enclose open apartment balconies, preventing children, toddlers, and pets from falling through balustrade gaps.",
        image: "/images/services/safety-nets-mobile.webp",
        imageAlt: "Balcony fall protection safety net installation in high-rise building",
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
        id: "window-safety-nets",
        title: "Window Safety Nets",
        tagline: "Unobtrusive Window Opening Security",
        description:
          "Custom-fitted mesh enclosures for low-sill windows and casement frames that allow natural daylight while securing family members against accidental slips.",
        image: "/images/services/benefits/safety-nets/sn-airflow-transmission.jpg",
        imageAlt: "Apartment window safety net installation",
        suitability: [
          "High-Floor Windows",
          "Open Sliding Windows",
          "Utility Ventilation Louvers"
        ],
        hardwareSpecs: [
          { label: "Mesh Aperture", value: "25mm to 30mm Square Aperture" },
          { label: "Frame Fixing", value: "Concealed Stainless Perimeter Eyelets" },
          { label: "Sun Resistance", value: "UV Carbon-Black Stabilizer (No Sunlight Brittle Rot)" },
          { label: "Air Circulation", value: "Over 92% open free airflow area" }
        ],
        installationHighlight: "Allows keeping windows open 24/7 for cool breeze without accidental fall risks.",
      },
      {
        id: "duct-area-safety-nets",
        title: "Duct Area Safety Nets",
        tagline: "Building Plumbing & Shaft Enclosures",
        description:
          "Heavy-duty fall barrier netting installed across vertical plumbing shafts and duct openings in multi-story residential buildings.",
        image: "/images/services/benefits/safety-nets/sn-child-pet-security.jpg",
        imageAlt: "Duct area safety netting in high-rise residential complex",
        suitability: [
          "Internal Building Ducts",
          "Plumbing Shafts",
          "Air Shaft Voids"
        ],
        hardwareSpecs: [
          { label: "Coverage Span", value: "Multi-floor vertical or horizontal duct spans" },
          { label: "Twine Thickness", value: "Heavy-Duty 1.5mm–2.0mm Knotted Polyethylene" },
          { label: "Anchor Hardware", value: "Masonry Concrete Sleeve Anchors" },
          { label: "Drop Resistance", value: "Catches tumbling maintenance tools and debris" }
        ],
        installationHighlight: "Full-height vertical duct netting prevents accidental slip hazards in deep utility shafts.",
      },
      {
        id: "open-area-safety-nets",
        title: "Open Area Safety Nets",
        tagline: "Atrium, Staircase & Void Fall Defense",
        description:
          "Engineered safety barriers spanning large central stairwell voids, apartment building atriums, and open recreational courtyards.",
        image: "/images/services/benefits/safety-nets/sn-discreet-footprint.jpg",
        imageAlt: "Open area central staircase void safety net",
        suitability: [
          "Terrace Parapets",
          "Duplex Stair Voids",
          "Courtyard Atriums"
        ],
        hardwareSpecs: [
          { label: "Twine Tensile", value: "High-Tenacity Multi-Filament Polyethylene" },
          { label: "Corner Bracing", value: "High-Tension Steel Turnbuckles & Guy Wires" },
          { label: "Border Hemming", value: "Triple-Overlocked Braided Outer Border" },
          { label: "Weatherproofing", value: "100% Water-repellent and rot-proof" }
        ],
        installationHighlight: "Custom-rigged to enclose large atrium voids and open stairwells safely.",
      },
      {
        id: "construction-safety-nets",
        title: "Construction Safety Nets",
        tagline: "Heavy-Duty Personnel & Debris Barrier",
        description:
          "Industrial-strength containment netting for construction perimeters, building renovations, and elevated scaffolding platforms.",
        image: "/images/services/benefits/safety-nets/sn-uv-endurance.jpg",
        imageAlt: "Construction perimeter debris safety netting",
        suitability: [
          "Building Renovation Sites",
          "Exterior Scaffoldings",
          "Under-Construction Balconies"
        ],
        hardwareSpecs: [
          { label: "Debris Containment", value: "Dual-layer fine debris & fall containment" },
          { label: "Anchor System", value: "Industrial Scaffold Clamps & Steel Guide Cables" },
          { label: "Material", value: "Virgin Polypropylene & High-Density Polymer" },
          { label: "Reusability", value: "Durable and relocatable across project stages" }
        ],
        installationHighlight: "Engineered for perimeter fall containment and falling tool/masonry protection.",
        badge: "Heavy Duty",
      },
    ],
    materials: {
      title: "High-Density UV-Stabilized Polymer Mesh",
      description:
        "Engineered using virgin high-density polymer filaments treated with UV stabilizers to maintain structural tensile strength under intense sunlight and monsoon downpours.",
      specs: [
        { label: "Mesh Polymer Alloy", value: "High-Density UV-Stabilized Polyethylene" },
        { label: "Twine Geometry", value: "Heat-Set Square Knotted Mesh Structure" },
        { label: "Mesh Pitch Opening", value: "25mm to 40mm Standard Apertures" },
        { label: "Perimeter Rigging", value: "Reinforced 6mm Multi-Strand Border Rope" },
        { label: "Anchoring System", value: "Stainless Steel J-Hooks & Heavy Anchors" },
        { label: "Weather Endurance", value: "UV-Treated for Extreme Tropical Sunlight" },
      ],
    },
    relatedSlugs: ["invisible-grills", "pigeon-safety-nets", "bird-spikes"],
  },

  "pigeon-safety-nets": {
    slug: "pigeon-safety-nets",
    name: "Pigeon Safety Nets",
    category: "Humane Bird Exclusion",
    tagline: "Clean, Bird-Free Living Spaces Without Blocking Airflow",
    subtitle:
      "Discreet translucent netting designed to prevent pigeons and other birds from roosting in balconies and utility ducts, eliminating health hazards while maintaining complete ventilation.",
    heroImage: "/images/services/pigeon-safety-nets-desktop.webp",
    imageDesktop: "/images/services/pigeon-safety-nets-desktop.webp",
    imageMobile: "/images/services/pigeon-safety-nets-mobile.webp",
    imageAlt:
      "Apartment balcony protected by translucent pigeon safety net with birds deterred on exterior ledge",
    altText:
      "Apartment balcony protected by translucent pigeon safety net with birds deterred on exterior ledge",
    metaTitle:
      "Pigeon Safety Nets for Balconies & Windows | Bird Netting",
    metaDescription:
      "Humane, discreet pigeon safety nets for apartments and utility areas. Keep balconies clean, hygienic, and bird-free without harming birds or blocking airflow.",
    specBadges: [
      "Translucent Monofilament Mesh",
      "Humane Zero-Harm Deterrent",
      "Eliminates Droppings & Mites",
      "Weather-Treated UV Protection",
    ],
    overview: [
      "Pigeons nesting on balconies, AC ledges, and utility ducts pose serious hygiene and health concerns for urban homeowners. Pigeon droppings contain harmful fungal spores and attract mites, while feathers and nesting twigs clog drainage pipes.",
      "Our pigeon safety netting provides a humane, non-harmful physical barrier that keeps birds completely outside your living space without compromising the natural beauty, light, or airflow of your home.",
    ],
    benefits: [
      {
        title: "Hygiene & Respiratory Health",
        description:
          "Eliminates toxic bird droppings, foul odors, and fungal spores associated with pigeon infestation, protecting your family's health.",
        icon: "health",
        image: "/images/services/benefits/pigeon-safety-nets/pn-hygiene-health.jpg",
      },
      {
        title: "Humane Bird Deterrence",
        description:
          "Acts as a smooth physical barrier that prevents birds from landing without trapping, entangling, or harming them in any way.",
        icon: "bird-safe",
        image: "/images/services/benefits/pigeon-safety-nets/pn-pigeon-block.jpg",
      },
      {
        title: "Virtually Invisible Appearance",
        description:
          "Ultra-fine translucent monofilament strands blend into the background sky, making the net barely noticeable from a distance.",
        icon: "transparent",
        image: "/images/services/benefits/pigeon-safety-nets/pn-daylight-airflow.jpg",
      },
      {
        title: "Unrestricted Air Circulation",
        description:
          "Maintains open cross-ventilation in balconies, utility wash areas, and air-conditioning outdoor condenser zones.",
        icon: "breeze",
        image: "/images/services/benefits/pigeon-safety-nets/pn-balcony-cleanliness.jpg",
      },
      {
        title: "Protects Laundry & Balcony Furniture",
        description:
          "Keep your clothes drying racks, outdoor cushions, and potted plants spotless and free of stains and feathers.",
        icon: "clean-home",
        image: "/images/services/benefits/pigeon-safety-nets/pn-humane-barrier.jpg",
      },
      {
        title: "Prevents Drain & AC Blockages",
        description:
          "Prevents nesting twigs, feathers, and bird debris from clogging rainwater balcony drain spouts and AC condenser fans.",
        icon: "drain-safe",
        image: "/images/services/benefits/pigeon-safety-nets/pn-reversible-mount.jpg",
      },
    ],
    anatomy: {
      title: "Fine Mesh & Hardware Specification",
      description:
        "Engineered with small square apertures that block even small birds while maintaining total optical clarity.",
      detailImage: "/images/details/detail-net-anchor.jpg",
      detailImageAlt:
        "Close-up of perimeter net anchor hook securing translucent bird netting",
      components: [
        {
          name: "Translucent UV-Treated Monofilament",
          desc: "Fine synthetic mesh strands designed for outdoor sunlight exposure, resisting brittle cracking and discoloration.",
        },
        {
          name: "Calibrated Small Mesh Grid",
          desc: "Precise small-square apertures preventing pigeons and sparrows from squeezing through while avoiding wing entanglement.",
        },
        {
          name: "Stainless Steel Fasteners",
          desc: "Rust-proof perimeter hooks installed flush against building masonry, ceilings, and railing bottoms to eliminate gaps.",
        },
        {
          name: "Flush Edge Sealing",
          desc: "Continuous boundary cord tensioned flush with walls and floor tiles so birds cannot crawl beneath the net.",
        },
      ],
    },
    applications: [
      {
        title: "Residential Balconies & Sit-Outs",
        description:
          "Full enclosure of living room balconies and master bedroom sit-outs to keep outdoor seating areas hygienic.",
      },
      {
        title: "Kitchen Utility Areas & Wash Yards",
        description:
          "Deterrence for washing machine balconies, laundry drying areas, and water heater utility corners.",
      },
      {
        title: "AC Outdoor Unit Ledges",
        description:
          "Protection for air conditioning outdoor compressor units and architectural wall niches where pigeons commonly nest.",
      },
      {
        title: "Apartment Plumbing & Duct Voids",
        description:
          "Full-height vertical duct netting across building plumbing corridors to prevent colony nesting across multiple floors.",
      },
    ],
    gallery: [
      {
        image: "/images/services/pigeon-safety-nets-desktop.webp",
        alt: "Apartment balcony protected by translucent pigeon safety net with birds deterred on exterior ledge",
        caption: "Apartment Balcony Pigeon Protection — Full Daytime Airflow & Clarity",
      },
      {
        image: "/images/services/pigeon-safety-nets-mobile.webp",
        alt: "Balcony pigeon exclusion netting keeping outdoor furniture and tiles spotless",
        caption: "Clean, Bird-Free Living Space — Spotless Outdoor Balcony Area",
      },
      {
        image: "/images/projects/project-pigeon-nets.jpg",
        alt: "High-rise residential balcony pigeon deterrence mesh installation",
        caption: "Humane Exclusion — Birds Safely Deterred Outside Mesh Boundary",
      },
    ],
    process: [
      {
        step: "01",
        title: "Site & Entry Point Survey",
        desc: "Inspection of pigeon roosting hotspots, parapet ledges, and precise perimeter measurement of all open spans.",
      },
      {
        step: "02",
        title: "Perimeter Hook Anchorage",
        desc: "Corrosion-resistant metal hooks are drilled into the ceiling slab, side walls, and railing bottom at close intervals.",
      },
      {
        step: "03",
        title: "Net Tensioning & Fitting",
        desc: "Translucent netting is stretched taut across the perimeter, ensuring zero slack or flapping in high winds.",
      },
      {
        step: "04",
        title: "Edge Sealing Check",
        desc: "Technicians inspect every corner and border to verify 100% flush closure, ensuring no bird crawl-in gaps exist.",
      },
    ],
    faqs: [
      {
        question: "Does the pigeon net hurt or trap the birds?",
        answer:
          "No. Our pigeon netting acts strictly as a physical boundary deterrent. The smooth, taut mesh simply denies birds a landing area, encouraging them to fly elsewhere naturally without harm.",
      },
      {
        question: "Is the pigeon netting noticeable from the outside?",
        answer:
          "The netting uses translucent UV-treated monofilament that blends with the sky and building facade, making it virtually unnoticeable from street level or inside the room.",
      },
      {
        question: "Will pigeons still be able to enter through small corners?",
        answer:
          "Our technicians measure and seal all edges flush with walls, floor, and ceiling, ensuring zero gaps where pigeons could squeeze in.",
      },
      {
        question: "How does this help with balcony hygiene?",
        answer:
          "It completely prevents pigeons from roosting, nesting, and leaving droppings on balcony floors, outdoor furniture, and AC units, keeping your space clean and hygienic.",
      },
      {
        question: "Can bird spikes be combined with pigeon netting?",
        answer:
          "Yes. For ledges directly outside the netted balcony, we often install stainless steel bird spikes to prevent birds from perching on external concrete sills.",
      },
    ],
    subServices: [
      {
        id: "balcony-pigeon-nets",
        title: "Balcony Pigeon Nets",
        tagline: "Humane Balcony Bird Deterrence",
        description:
          "Discreet translucent netting enclosing open apartment balconies, permanently ending bird infestation while keeping your panoramic views and fresh air.",
        image: "/images/services/pigeon-safety-nets-desktop.webp",
        imageAlt: "Balcony pigeon safety net installation in high-rise building",
        suitability: [
          "Apartment Balconies",
          "Outdoor Sit-Outs",
          "Terrace Garden Nooks"
        ],
        hardwareSpecs: [
          { label: "Net Filament", value: "Discreet Translucent Monofilament Mesh" },
          { label: "Mesh Aperture", value: "25mm to 30mm (Too small for pigeons/sparrows)" },
          { label: "Perimeter Sealing", value: "Zero-Gap Flush Perimeter Anchors" },
          { label: "Air & Light", value: "Maintains 100% natural sunlight & outdoor view" }
        ],
        installationHighlight: "Permanently ends pigeon nesting and acidic droppings while keeping outdoor views clear.",
        badge: "High Demand",
      },
      {
        id: "window-pigeon-nets",
        title: "Window Pigeon Nets",
        tagline: "Clean Window Sills & AC Ledges",
        description:
          "Custom-fit translucent nets protecting window frames and AC exterior units from roosting pigeons, eliminating feather and dropping cleanup.",
        image: "/images/services/benefits/pigeon-safety-nets/pn-pigeon-block.jpg",
        imageAlt: "Apartment window pigeon exclusion net",
        suitability: [
          "Bedroom Windows",
          "Kitchen Ledges",
          "French Balcony Windows"
        ],
        hardwareSpecs: [
          { label: "Translucency", value: "Ultra-Fine Monofilament (Virtually Invisible)" },
          { label: "Mounting", value: "Parapet Ledge and Window Reveals Flush Hooking" },
          { label: "Harm-Free", value: "Smooth physical barrier with zero harm to birds" },
          { label: "Cleaning", value: "Water washable with hose pipe spray" }
        ],
        installationHighlight: "Keeps window sills, curtains, and air-conditioner outdoor units completely dropping-free.",
      },
      {
        id: "utility-area-pigeon-nets",
        title: "Utility Area Pigeon Nets",
        tagline: "Hygienic Laundry & Washing Yards",
        description:
          "Protective netting installed across utility service balconies to safeguard freshly washed clothes, washing machines, and water heaters from bird droppings.",
        image: "/images/services/benefits/pigeon-safety-nets/pn-balcony-cleanliness.jpg",
        imageAlt: "Utility balcony pigeon netting in apartment complex",
        suitability: [
          "Washing Machine Balconies",
          "Drying Yards",
          "Kitchen Utility Ducts"
        ],
        hardwareSpecs: [
          { label: "Mesh Thickness", value: "Reinforced 0.8mm–1.0mm Translucent Twine" },
          { label: "Hygiene Factor", value: "Eliminates pigeon mites, feather allergens, & odor" },
          { label: "Corner Rigging", value: "Taut wire guide tensioning for high wind stability" },
          { label: "Access Points", value: "Optional zippered access port for AC servicing" }
        ],
        installationHighlight: "Protects clean laundry and washing appliances from stains, feathers, and nest debris.",
      },
      {
        id: "open-duct-pigeon-nets",
        title: "Open Duct Pigeon Nets",
        tagline: "Building Plumbing Shaft Bird Protection",
        description:
          "Vertical multi-floor shaft netting sealing off building plumbing voids, preventing severe internal pigeon nesting and health hazards.",
        image: "/images/services/benefits/pigeon-safety-nets/pn-daylight-airflow.jpg",
        imageAlt: "Open duct pigeon netting for high-rise apartment shaft",
        suitability: [
          "Apartment Plumbing Voids",
          "Electrical Ducts",
          "HVAC Shafts"
        ],
        hardwareSpecs: [
          { label: "Shaft Coverage", value: "Floor-to-roof continuous shaft enclosure" },
          { label: "Anchor Hardware", value: "Heavy-Duty Stainless Anchor Pegs" },
          { label: "Drain Protection", value: "Prevents twigs from blocking rooftop downspouts" },
          { label: "UV Stabilization", value: "Extended sunlight endurance for open lightwells" }
        ],
        installationHighlight: "Prevents large pigeon colonies from establishing roosting nests inside building shafts.",
      },
    ],
    materials: {
      title: "Translucent UV-Stabilized Monofilament Netting",
      description:
        "Fabricated from high-clarity translucent monofilament polymer fibers that blend into the skyline, providing non-lethal, humane deterrence without restricting natural airflow.",
      specs: [
        { label: "Filament Composition", value: "High-Strength Translucent Monofilament" },
        { label: "Visual Footprint", value: "Near-Invisible Transparency (Skyline Blended)" },
        { label: "Mesh Pitch Aperture", value: "20mm – 25mm Pitch (Pigeon & Sparrow Proof)" },
        { label: "Perimeter Anchoring", value: "Stainless Steel Fasteners & Tie Wire" },
        { label: "UV Stabilization", value: "Solar-Inhibitor Formulated (No Sun Degradation)" },
        { label: "Animal Safety", value: "100% Humane Non-Harmful Physical Deterrent" },
      ],
    },
    relatedSlugs: ["bird-spikes", "safety-nets", "invisible-grills"],
  },

  "sports-nets": {
    slug: "sports-nets",
    name: "Sports Nets",
    category: "Athletic & Turf Ball Containment",
    tagline: "Engineered Ball Containment for Practice & Play Areas",
    subtitle:
      "Specialized high-durability netting solutions designed for cricket practice pitches, badminton courts, terrace play areas, and sports complexes with reinforced borders.",
    heroImage: "/images/services/sports-nets-desktop.webp",
    imageDesktop: "/images/services/sports-nets-desktop.webp",
    imageMobile: "/images/services/sports-nets-mobile.webp",
    imageAlt:
      "Professional outdoor cricket practice turf enclosure with heavy-duty safety sports netting",
    altText:
      "Professional outdoor cricket practice turf enclosure with heavy-duty safety sports netting",
    metaTitle:
      "Sports Nets Installation | Cricket, Badminton & Turf Enclosures",
    metaDescription:
      "High-durability sports netting for cricket practice pitches, terrace play areas, and sports complexes. Engineered for high ball impact resistance.",
    specBadges: [
      "High-Impact Ball Containment",
      "Multi-Strand Braided Cord",
      "Custom Cage Dimensions",
      "Weatherproof Outdoor Treatment",
    ],
    overview: [
      "Dedicated practice and play areas require heavy-duty ball containment to ensure player focus and protect surrounding properties. From rooftop cricket nets to multi-sport turf enclosures, our sports netting is built to withstand high-velocity ball impacts.",
      "Custom-fabricated with reinforced braided borders and UV-treated synthetic cords, our sports nets provide secure containment for residential communities, schools, sports academies, and private terraces.",
    ],
    benefits: [
      {
        title: "High Ball Velocity Containment",
        description:
          "Heavy-gauge multi-strand braided cord absorbs the kinetic energy of leather and tennis cricket balls without tearing or over-stretching.",
        icon: "impact",
        image: "/images/services/benefits/sports-nets/sp-impact-absorption.jpg",
      },
      {
        title: "Protection for Neighboring Property",
        description:
          "Prevents stray balls from breaking apartment windows, damaging solar panels, or flying into vehicle parking zones.",
        icon: "protect",
        image: "/images/services/benefits/sports-nets/sp-property-safety.jpg",
      },
      {
        title: "Terrace Space Optimization",
        description:
          "Converts underutilized building rooftops into functional, safe cricket practice nets or multi-sport recreational turfs.",
        icon: "terrace",
        image: "/images/services/benefits/sports-nets/sp-cricket-turf.jpg",
      },
      {
        title: "All-Weather Durability",
        description:
          "Formulated with UV stabilizers and water-repellent compounds to withstand continuous sun exposure and heavy monsoons.",
        icon: "weather",
        image: "/images/services/benefits/sports-nets/sp-all-weather.jpg",
      },
      {
        title: "Customized Pitch Dimensions",
        description:
          "Tailor-made for full cricket pitch lengths (66ft), compact batting cages, badminton courts, and multi-game enclosures.",
        icon: "measure",
        image: "/images/services/benefits/sports-nets/sp-custom-enclosures.jpg",
      },
      {
        title: "Minimal Ball Retrieval Time",
        description:
          "Keeps balls confined within the court or pitch boundary, dramatically increasing actual practice and play time.",
        icon: "time",
        image: "/images/services/benefits/sports-nets/sp-zero-sag-rigging.jpg",
      },
    ],
    anatomy: {
      title: "Heavy-Impact Net Architecture",
      description:
        "Constructed with industrial braided cords and reinforced perimeter cabling to absorb repeated athletic impacts.",
      detailImage: "/images/details/detail-cable-tensioner.jpg",
      detailImageAlt:
        "High-tension perimeter cabling and steel hardware for sports enclosures",
      components: [
        {
          name: "Multi-Strand Braided Synthetic Cord",
          desc: "High-denier synthetic twine braided into tightly knotted square mesh, engineered for maximum tensile shock absorption.",
        },
        {
          name: "Reinforced Overlocked Border Rope",
          desc: "Heavy-duty perimeter border rope machine-stitched along all edges to prevent unraveling under impact loads.",
        },
        {
          name: "Galvanized Steel Suspension Cables",
          desc: "Overhead tensioned steel guide cables that maintain consistent roof height and prevent top-net sagging.",
        },
        {
          name: "Weighted Ground Hem Anchoring",
          desc: "Bottom border weighted or anchored to turf edges, preventing balls from sliding beneath the net perimeter.",
        },
      ],
    },
    applications: [
      {
        title: "Rooftop Cricket Practice Nets",
        description:
          "Complete enclosed practice pitches on apartment terraces with overhead containment and partition netting.",
      },
      {
        title: "Gated Community Sports Arenas",
        description:
          "Perimeter containment netting around tennis courts, basketball courts, and outdoor multi-sport play fields.",
      },
      {
        title: "School & Sports Academy Pitches",
        description:
          "Heavy-duty multi-lane cricket practice enclosures designed for intense daily training sessions.",
      },
      {
        title: "Commercial Turf Enclosures",
        description:
          "Full height (20ft–30ft) boundary netting for commercial 5-a-side football turfs and indoor arenas.",
      },
    ],
    gallery: [
      {
        image: "/images/services/sports-nets-desktop.webp",
        alt: "Professional outdoor cricket practice turf enclosure with heavy-duty safety sports netting",
        caption: "Cricket Practice Pitch — Heavy-Impact Ball Containment Enclosure",
      },
      {
        image: "/images/services/sports-nets-mobile.webp",
        alt: "Outdoor cricket pitch turf with green sports netting and guide cables",
        caption: "High-Tensile Ball Containment for Sports Enthusiasts & Academies",
      },
      {
        image: "/images/projects/project-sports-nets.jpg",
        alt: "Full height cricket practice turf enclosure with steel cage framework",
        caption: "Cricket Practice Pitch — Full Height Rooftop Enclosure",
      },
    ],
    process: [
      {
        step: "01",
        title: "Court Layout & Measurement",
        desc: "Survey of court dimensions, overhead clearance, and structural support column spacing.",
      },
      {
        step: "02",
        title: "Cable & Framework Rigging",
        desc: "Installation of overhead galvanized guide cables, turnbuckles, and corner tension posts.",
      },
      {
        step: "03",
        title: "Mesh Hoisting & Ring Fitting",
        desc: "Net panels are hoisted and secured to guide cables using heavy-duty carabiners and metal rings.",
      },
      {
        step: "04",
        title: "Bottom Border Anchoring",
        desc: "Bottom perimeter is anchored flush with turf or weighted to prevent ball roll-throughs.",
      },
    ],
    faqs: [
      {
        question: "Can these sports nets withstand hard leather cricket balls?",
        answer:
          "Yes. Our cricket sports netting is fabricated from heavy-gauge multi-strand braided synthetic twine designed specifically to withstand repeated impacts from leather cricket balls.",
      },
      {
        question: "Can sports nets be installed on an apartment rooftop without damaging waterproofing?",
        answer:
          "Yes. We use specialized freestanding or perimeter-anchored steel frameworks that do not compromise the rooftop waterproof membrane.",
      },
      {
        question: "What sports are suitable for these netting enclosures?",
        answer:
          "They are ideal for cricket practice cages, badminton courts, 5-a-side football turf perimeters, tennis practice hitting walls, and general multi-sport play zones.",
      },
      {
        question: "How does the net hold up in heavy monsoon winds?",
        answer:
          "The open mesh design allows wind to pass freely through the net, minimizing aerodynamic drag. Combined with tensioned steel guide cables, the enclosure remains stable during high winds.",
      },
    ],
    subServices: [
      {
        id: "cricket-practice-nets",
        title: "Cricket Practice Nets",
        tagline: "High-Impact Cricket Bowling Pitch Enclosures",
        description:
          "Heavy-duty containment cages and batting pitch nets engineered to absorb high-velocity leather and tennis cricket ball impacts safely.",
        image: "/images/services/sports-nets-mobile.webp",
        imageAlt: "Professional cricket practice net pitch enclosure",
        suitability: [
          "Apartment Rooftop Turfs",
          "School Sports Academies",
          "Private Cricket Enclosures"
        ],
        hardwareSpecs: [
          { label: "Cord Material", value: "Heavy-Gauge Multi-Strand Braided Synthetic Twine" },
          { label: "Impact Rating", value: "Engineered for high-velocity leather and tennis balls" },
          { label: "Overhead Rigging", value: "Galvanized Steel Wire Core Guide Cables & Turnbuckles" },
          { label: "Bottom Border", value: "Weighted leaded rope to prevent ball roll-out" }
        ],
        installationHighlight: "Heavy-duty ball containment allows intense bowling and batting practice without stray ball hazards.",
        badge: "Most Popular",
      },
      {
        id: "football-nets",
        title: "Football Nets",
        tagline: "Turf & Futsal Arena Boundary Containment",
        description:
          "Reinforced high-impact barrier netting for 5-a-side football arenas, residential sports turfs, and rooftop playing grounds.",
        image: "/images/services/benefits/sports-nets/sp-cricket-turf.jpg",
        imageAlt: "Football sports turf containment netting",
        suitability: [
          "5-a-side Mini Turfs",
          "Futsal Arenas",
          "Community Play Grounds"
        ],
        hardwareSpecs: [
          { label: "Mesh Aperture", value: "100mm to 120mm Square Knotted Construction" },
          { label: "Twine Diameter", value: "2.5mm to 3.5mm High-Tenacity Polypropylene" },
          { label: "Height Spans", value: "Available in 15ft, 20ft, and 25ft boundary drops" },
          { label: "Weather Treatment", value: "All-Weather UV Treatment for year-round sun" }
        ],
        installationHighlight: "High-elasticity impact cords absorb powerful kicks without snapping or knot slippage.",
      },
      {
        id: "volleyball-nets",
        title: "Volleyball Nets",
        tagline: "Court Boundary & Divider Enclosures",
        description:
          "Regulation-standard multi-court divider nets and boundary barriers for schools, community clubhouses, and corporate complexes.",
        image: "/images/services/benefits/sports-nets/sp-all-weather.jpg",
        imageAlt: "Outdoor volleyball court netting",
        suitability: [
          "Volleyball Courts",
          "Beach & Sand Turfs",
          "School Sports Complexes"
        ],
        hardwareSpecs: [
          { label: "Mesh Quality", value: "Reinforced Knotted Cord with White Vinyl Headband" },
          { label: "Side Anchoring", value: "Side Tension Straps & Steel Eyelet Anchors" },
          { label: "Cord Twine", value: "Waterproof Polyethylene with Anti-Abrasion Finish" },
          { label: "Regulation Specs", value: "Available in standard tournament dimensions" }
        ],
        installationHighlight: "Maintains taut center net elevation with zero mid-court sagging under outdoor exposure.",
      },
      {
        id: "badminton-nets",
        title: "Badminton Nets",
        tagline: "Indoor & Outdoor Court Enclosures",
        description:
          "Fine-gauge perimeter netting preventing shuttlecock loss across terrace courts, apartment clubhouses, and recreational areas.",
        image: "/images/services/benefits/sports-nets/sp-property-safety.jpg",
        imageAlt: "Terrace badminton court barrier netting",
        suitability: [
          "Indoor Badminton Halls",
          "Apartment Clubhouses",
          "Outdoor Community Courts"
        ],
        hardwareSpecs: [
          { label: "Mesh Aperture", value: "18mm to 20mm Fine Braided Mesh" },
          { label: "Top Band", value: "Heavy-Duty Dual-Fold White Canvas Band" },
          { label: "Tension Cable", value: "Aircraft-grade steel wire cable through top hem" },
          { label: "Durability", value: "Tested for continuous shuttlecock impact without tears" }
        ],
        installationHighlight: "Precision top cable tensioning ensures official tournament regulation height.",
      },
      {
        id: "sports-ground-netting",
        title: "Sports Ground Netting",
        tagline: "Full-Height Campus & Clubhouse Perimeter Protection",
        description:
          "Tall structural barrier netting erected on structural poles to prevent sports balls from damaging neighboring residences, windows, and parked cars.",
        image: "/images/services/benefits/sports-nets/sp-custom-enclosures.jpg",
        imageAlt: "Multi-sport ground tall perimeter barrier netting",
        suitability: [
          "Terrace Sports Arenas",
          "Commercial Multisport Turfs",
          "Golf Driving Ranges"
        ],
        hardwareSpecs: [
          { label: "Full Perimeter", value: "360-degree ceiling-to-floor cage enclosure" },
          { label: "Steel Hardware", value: "Hot-Dipped Galvanized Pulleys & Tension Posts" },
          { label: "Wind Stability", value: "Low aerodynamic drag prevents pole bending in storms" },
          { label: "Custom Layout", value: "Laser-measured to exact property boundaries" }
        ],
        installationHighlight: "Protects surrounding apartment windows and car parking areas from high-speed stray balls.",
        badge: "Full Campus",
      },
    ],
    materials: {
      title: "Heavy-Gauge High-Tenacity Braided Twine",
      description:
        "Manufactured using braided multi-filament cords with reinforced triple-stitched borders and steel-core rigging cables, engineered to withstand intense athletic impacts.",
      specs: [
        { label: "Cord Composition", value: "Braided Multi-Strand Polyethylene / Nylon" },
        { label: "Impact Rating", value: "Calibrated for High-Velocity Ball Containment" },
        { label: "Border Reinforcement", value: "Triple-Stitched Heavy-Gauge Overlocked Hem" },
        { label: "Structural Rigging", value: "High-Tensile Steel Wire Core Guide Ropes" },
        { label: "Outdoor Endurance", value: "100% Weatherproof Solar UV Resistance" },
        { label: "Wind Drag Profile", value: "Open Aerodynamic Aperture for Low Wind Load" },
      ],
    },
    relatedSlugs: ["safety-nets", "invisible-grills", "pigeon-safety-nets"],
  },

  "cloth-hangers": {
    slug: "cloth-hangers",
    name: "Cloth Hangers",
    category: "Ceiling-Mounted Space Savers",
    tagline: "Effortless Ceiling Space-Savers for Modern Balconies",
    subtitle:
      "Individual pulley-operated cloth drying systems crafted from stainless steel pipes, freeing up clean floor space while utilizing warm ceiling airflow.",
    heroImage: "/images/services/cloth-hangers-desktop.webp",
    imageDesktop: "/images/services/cloth-hangers-desktop.webp",
    imageMobile: "/images/services/cloth-hangers-mobile.webp",
    imageAlt:
      "Ceiling-mounted stainless steel pulley cloth drying hanger installed in a modern apartment balcony",
    altText:
      "Ceiling-mounted stainless steel pulley cloth drying hanger installed in a modern apartment balcony",
    metaTitle:
      "Ceiling Cloth Drying Hangers in Bangalore | Balcony Hangers",
    metaDescription:
      "Space-saving ceiling-mounted stainless steel cloth drying hangers for balconies. Smooth individual pulley mechanisms for effortless laundry drying.",
    specBadges: [
      "Rust-Resistant Stainless Steel Pipes",
      "Smooth Individual Pulley Mechanism",
      "Frees 100% Balcony Floor Space",
      "Durable Nylon Suspension Cords",
    ],
    overview: [
      "Modern apartment balconies are designed for relaxation, yet floor-standing drying racks quickly clutter valuable space and obstruct living room views. Ceiling-mounted cloth drying hangers provide an ergonomic, clutter-free alternative.",
      "Engineered with individual stainless steel pipes that operate smoothly via ceiling pulleys, each rod can be lowered to chest height for easy hanging and elevated to the ceiling where warm air naturally accelerates drying.",
    ],
    benefits: [
      {
        title: "100% Balcony Floor Space Reclaimed",
        description:
          "Eliminates cumbersome, wobbly floor-standing racks, leaving your balcony floor completely clear for seating, plants, or pets.",
        icon: "floor-space",
        image: "/images/services/benefits/cloth-hangers/ch-reclaim-floor.jpg",
      },
      {
        title: "Effortless Pulley Operation",
        description:
          "Lower individual pipes to chest level for comfortable laundry hanging, then raise them to the ceiling with minimal pulling effort.",
        icon: "pulley",
        image: "/images/services/benefits/cloth-hangers/ch-pulley-mechanism.jpg",
      },
      {
        title: "Faster Natural Drying",
        description:
          "Takes full advantage of warm air naturally rising near the ceiling and unobstructed cross-ventilation for faster garment drying.",
        icon: "dry",
        image: "/images/services/benefits/cloth-hangers/ch-fast-drying.jpg",
      },
      {
        title: "Zero Rust on Garments",
        description:
          "High-grade stainless steel pipes prevent metallic rust stains on damp whites, delicates, and fine fabrics.",
        icon: "no-rust",
        image: "/images/services/benefits/cloth-hangers/ch-rustproof-steel.jpg",
      },
      {
        title: "Heavy Laundry Load Capacity",
        description:
          "Rigid tubular construction comfortably supports heavy wet items such as bedsheets, blankets, and denim jeans without bending.",
        icon: "heavy-load",
        image: "/images/services/benefits/cloth-hangers/ch-multi-rod-capacity.jpg",
      },
      {
        title: "Neat Interior & Exterior Aesthetics",
        description:
          "Keeps laundry elevated above window sightlines, maintaining an organized and uncluttered appearance from inside the room.",
        icon: "neat",
        image: "/images/services/benefits/cloth-hangers/ch-ceiling-integration.jpg",
      },
    ],
    anatomy: {
      title: "Pulley System & Pipe Components",
      description:
        "Precision ceiling brackets, smooth dual-wheel pulleys, and rigid stainless steel rods designed for daily household use.",
      detailImage: "/images/details/detail-hanger-pulley.jpg",
      detailImageAlt:
        "Smooth ceiling pulley mechanism and stainless steel drying rod bracket",
      components: [
        {
          name: "Dual-Wheel Ceiling Pulley Brackets",
          desc: "Friction-reducing nylon pulleys mounted in heavy-gauge steel brackets anchored firmly into the concrete ceiling.",
        },
        {
          name: "Rust-Proof Stainless Steel Rods",
          desc: "Rigid tubular stainless steel pipes with rounded end caps, available in standard lengths from 4 feet up to 8 feet.",
        },
        {
          name: "High-Tensile Braided Nylon Cords",
          desc: "Wear-resistant synthetic ropes that glide smoothly over pulley wheels without fraying or knotting.",
        },
        {
          name: "Wall-Mounted Locking Cleat",
          desc: "Ergonomic wall bracket with individual slots to securely anchor each pipe at any chosen elevation.",
        },
      ],
    },
    applications: [
      {
        title: "Apartment Balconies & Sit-Outs",
        description:
          "Mounted overhead in main or bedroom balconies to preserve seating space while drying daily family laundry.",
      },
      {
        title: "Kitchen Utility Areas",
        description:
          "Installed directly above washing machines and wash basins in compact utility corridors.",
      },
      {
        title: "Indoor Laundry Corridors",
        description:
          "Dry clothes discreetly during heavy monsoon seasons inside well-ventilated bathrooms or utility rooms.",
      },
    ],
    gallery: [
      {
        image: "/images/services/cloth-hangers-desktop.webp",
        alt: "Ceiling-mounted stainless steel pulley cloth drying hanger installed in a modern apartment balcony",
        caption: "Ceiling Pulley Cloth Hanger — Effortless Independent Rod Lowering System",
      },
      {
        image: "/images/services/cloth-hangers-mobile.webp",
        alt: "Apartment balcony with stainless steel drying rods and clean floor space",
        caption: "Frees 100% Balcony Floor Space — Quick Warm-Air Ceiling Drying",
      },
      {
        image: "/images/projects/project-cloth-hangers.jpg",
        alt: "Ceiling cloth drying hanger with laundry hanging neatly",
        caption: "Ceiling-Mounted Pulley System — Clean & Ergonomic Balcony",
      },
    ],
    process: [
      {
        step: "01",
        title: "Ceiling Space Assessment",
        desc: "Checking concrete ceiling slab depth, clearance from balcony doors, and determining ideal rod length (4ft–8ft).",
      },
      {
        step: "02",
        title: "Pulley Bracket Anchoring",
        desc: "Drilling and fixing dual-wheel ceiling brackets with heavy-duty metal expansion fasteners.",
      },
      {
        step: "03",
        title: "Rod & Rope Assembly",
        desc: "Threading braided nylon cords through pulleys and securing them to individual stainless steel drying pipes.",
      },
      {
        step: "04",
        title: "Wall Cleat & Motion Testing",
        desc: "Mounting the wall rope cleat at comfortable operating height and testing smooth motion across all rods.",
      },
    ],
    faqs: [
      {
        question: "How much laundry weight can each rod support?",
        answer:
          "Each stainless steel pipe is engineered to support a full load of wet clothes, including heavy items such as jeans, bedsheets, and towels without sagging.",
      },
      {
        question: "Can each pipe be lowered and raised independently?",
        answer:
          "Yes. Each drying rod operates on its own dedicated pulley and rope, allowing you to lower one rod at a time without disturbing clothes hanging on the others.",
      },
      {
        question: "Will the rods rust from hanging wet clothes?",
        answer:
          "No. The rods are crafted from high-grade stainless steel pipes, ensuring zero rust transfer to your clean garments.",
      },
      {
        question: "What ceiling heights and lengths are supported?",
        answer:
          "Our systems accommodate standard ceiling heights up to 11 feet, with pipe lengths ranging from 4 feet, 5 feet, 6 feet, 7 feet, to 8 feet depending on your balcony dimensions.",
      },
    ],
    subServices: [
      {
        id: "ceiling-cloth-drying-hangers",
        title: "Ceiling Cloth Drying Hangers",
        tagline: "Individual Pulley Pull-and-Dry System",
        description:
          "Independent 6-rod pulley system lowering each stainless steel pipe to chest height for effortless laundry hanging and raising to the ceiling for quick warm-air drying.",
        image: "/images/services/cloth-hangers-mobile.webp",
        imageAlt: "Ceiling cloth drying hanger pulley system in apartment balcony",
        suitability: [
          "Apartment Balconies",
          "Utility Rooms",
          "Compact Indoor Drying Spaces"
        ],
        hardwareSpecs: [
          { label: "Pipe Material", value: "Rust-Resistant Stainless Steel Round Tubes" },
          { label: "Pulley Mechanism", value: "Dual-Wheel Nylon Ceiling Pulleys (Smooth Pull)" },
          { label: "Cords", value: "Multi-Strand High-Density Nylon Braided Ropes" },
          { label: "Operating Cleat", value: "Heavy-Duty Wall Cleat with individual rod locking" }
        ],
        installationHighlight: "Lowers each drying pipe to chest level for effortless hanging, then raises it to the ceiling.",
        badge: "Bestseller",
      },
      {
        id: "retractable-cloth-hangers",
        title: "Retractable Cloth Hangers",
        tagline: "Wall-Mounted Accordion Foldable Racks",
        description:
          "Space-saving wall-mounted accordion drying racks that extend out when hanging clothes and fold completely flat against the wall when not in use.",
        image: "/images/services/benefits/cloth-hangers/ch-reclaim-floor.jpg",
        imageAlt: "Wall-mounted retractable foldable cloth drying rack",
        suitability: [
          "Wall-Mounted Balconies",
          "Narrow Washing Niches",
          "Bathroom Wet Areas"
        ],
        hardwareSpecs: [
          { label: "Accordion Frame", value: "Foldable Stainless Steel Scissor Arms" },
          { label: "Load Capacity", value: "Supports up to 25kg of wet laundry loads" },
          { label: "Storage Depth", value: "Folds flush against the wall to less than 4 inches" },
          { label: "Fastening", value: "Stainless Steel Expansion Wall Bolts" }
        ],
        installationHighlight: "Folds completely flat against the wall when not in use, freeing 100% of floor and air space.",
      },
      {
        id: "balcony-cloth-hangers",
        title: "Balcony Cloth Hangers",
        tagline: "High-Rise Balcony Space Maximizers",
        description:
          "Custom-length stainless steel overhead drying rods engineered specifically for narrow apartment balconies and utility wash areas in Bengaluru.",
        image: "/images/services/benefits/cloth-hangers/ch-ceiling-integration.jpg",
        imageAlt: "Overhead balcony cloth hanger installation in luxury apartment",
        suitability: [
          "Open Balconies",
          "Semi-Covered Terraces",
          "Luxury Apartment Balconies"
        ],
        hardwareSpecs: [
          { label: "Rod Options", value: "4-Rod, 5-Rod, and 6-Rod Configurations" },
          { label: "Length Options", value: "Custom 4ft, 5ft, 6ft, 7ft, and 8ft pipe lengths" },
          { label: "Rust Resistance", value: "Zero rust transfer onto damp whites or delicates" },
          { label: "Warm Air Drying", value: "Accelerates drying using natural warm ceiling airflow" }
        ],
        installationHighlight: "Custom cut to the exact length of your balcony for maximum hanging capacity.",
      },
    ],
    materials: {
      title: "Rustproof Stainless Steel & Smooth Pulley Hardware",
      description:
        "Engineered with premium mirror-polished stainless steel tubes and wear-resistant nylon pulley wheels to ensure smooth, snag-free laundry lifting without rust transfer to clean garments.",
      specs: [
        { label: "Drying Rods", value: "Mirror-Polished Rustproof Stainless Steel Tubes" },
        { label: "Pulley Wheel Mechanism", value: "Heavy-Duty Low-Friction Nylon / Polyacetal" },
        { label: "Lowering Cords", value: "High-Tensile Braided Nylon Rope (Wear-Resistant)" },
        { label: "Ceiling Brackets", value: "Powder-Coated Structural Ceiling Anchors" },
        { label: "Load Capacity", value: "5kg to 8kg per Individual Rod (Heavy Bedding Safe)" },
        { label: "Available Pipe Lengths", value: "4ft, 5ft, 6ft, 7ft, 8ft Custom Sizes" },
      ],
    },
    relatedSlugs: ["invisible-grills", "safety-nets", "pigeon-safety-nets"],
  },

  "bird-spikes": {
    slug: "bird-spikes",
    name: "Bird Spikes",
    category: "Anti-Perch Ledge Deterrents",
    tagline: "Humane, Permanent Anti-Perch Protection for Ledges",
    subtitle:
      "High-tensile stainless steel wire spikes mounted on flexible polycarbonate bases to stop birds from perching on narrow ledges, pipes, and outdoor AC units.",
    heroImage: "/images/services/bird-spikes-desktop.webp",
    imageDesktop: "/images/services/bird-spikes-desktop.webp",
    imageMobile: "/images/services/bird-spikes-mobile.webp",
    imageAlt:
      "Close-up of stainless steel anti-perch bird spikes installed on building parapet wall ledge",
    altText:
      "Close-up of stainless steel anti-perch bird spikes installed on building parapet wall ledge",
    metaTitle:
      "Stainless Steel Bird Spikes Installation in Bangalore | Anti-Perch Strips",
    metaDescription:
      "Durable stainless steel bird spikes on UV-stabilized polycarbonate bases. Humane anti-perch deterrence for parapet ledges, window sills, and AC outdoor units.",
    specBadges: [
      "Stainless Steel Wire Prongs",
      "UV-Stabilized Polycarbonate Base",
      "Humane Non-Harmful Deterrent",
      "Zero-Drill All-Weather Adhesive Option",
    ],
    overview: [
      "Pigeons, crows, and other urban birds frequently roost on narrow parapet ledges, sunshades, window cornices, and AC outdoor compressor brackets. Over time, accumulated droppings cause corrosion, stains, and severe health concerns.",
      "Stainless steel bird spikes provide a permanent, 100% humane solution. By creating an uneven surface where birds cannot land or balance, bird spikes persuade birds to move on without inflicting any physical harm.",
    ],
    benefits: [
      {
        title: "Permanent Perch Prevention",
        description:
          "Denies birds landing footing on architectural ledges, preventing them from establishing roosting and nesting colonies.",
        icon: "no-perch",
        image: "/images/services/benefits/bird-spikes/bs-humane-perch.jpg",
      },
      {
        title: "100% Humane & Non-Harmful",
        description:
          "Features blunted metal prongs that deter landing without impaling, trapping, or injuring birds.",
        icon: "humane",
        image: "/images/services/benefits/bird-spikes/bs-architectural-invisible.jpg",
      },
      {
        title: "Long-Term Weather Endurance",
        description:
          "Marine-grade stainless steel wire pins combined with UV-stabilized polycarbonate base will not crack, rust, or degrade.",
        icon: "weather",
        image: "/images/services/benefits/bird-spikes/bs-zero-maintenance.jpg",
      },
      {
        title: "No-Drill Adhesive Installation",
        description:
          "Can be bonded using high-strength outdoor structural silicone adhesive, preserving delicate ledge waterproof coatings.",
        icon: "adhesive",
        image: "/images/services/benefits/bird-spikes/bs-polycarb-base.jpg",
      },
      {
        title: "Zero Operating Costs",
        description:
          "Passive physical deterrent requiring zero electricity, zero chemicals, and no periodic mechanical maintenance.",
        icon: "zero-cost",
        image: "/images/services/benefits/bird-spikes/bs-curved-ledges.jpg",
      },
      {
        title: "Protects Expensive AC Units",
        description:
          "Prevents corrosive bird droppings from damaging aluminum AC condenser fins and fan housings.",
        icon: "ac-protect",
        image: "/images/services/benefits/bird-spikes/bs-surface-protection.jpg",
      },
    ],
    anatomy: {
      title: "Spike Strip Architecture & Mounting",
      description:
        "Multi-angled stainless steel wire pins mounted onto a flexible, segmented polycarbonate base for complete coverage.",
      detailImage: "/images/details/detail-spikes-base.jpg",
      detailImageAlt:
        "Close-up of flexible polycarbonate spike base with stainless steel upward prongs",
      components: [
        {
          name: "UV-Stabilized Polycarbonate Base",
          desc: "Flexible transparent polymer base strip with pre-molded snap lines that contour to straight, curved, or narrow ledge profiles.",
        },
        {
          name: "Multi-Angle Stainless Steel Pins",
          desc: "Spring-tempered stainless wire spikes splayed at varying outward angles to eliminate any landing gaps.",
        },
        {
          name: "Structural Outdoor Adhesive",
          desc: "Heavy-duty silicone sealant designed for masonry, stone, metal, and plastic bonding under extreme outdoor temperatures.",
        },
        {
          name: "Mechanical Screw Holes",
          desc: "Integrated screw eyelets allowing screw-fixed mounting on wooden beams or heavy masonry ledges when required.",
        },
      ],
    },
    applications: [
      {
        title: "Parapet Walls & Building Cornices",
        description:
          "Installed along top parapet edges and ornamental cornices where pigeons sit and overlook the street.",
      },
      {
        title: "AC Outdoor Compressor Units",
        description:
          "Fixed on top of outdoor AC condenser brackets to prevent nesting and protect electronic components.",
      },
      {
        title: "Window Sills & Sunshades (Chajjas)",
        description:
          "Continuous strip coverage along external window frames and concrete sunshades to prevent dropping accumulation.",
      },
      {
        title: "Pipes, Beams & Signage Ledges",
        description:
          "Fitted along horizontal plumbing pipes, structural I-beams, and commercial signboard top borders.",
      },
    ],
    gallery: [
      {
        image: "/images/services/bird-spikes-desktop.webp",
        alt: "Stainless steel anti-bird spikes installed on building parapet wall ledge",
        caption: "Parapet Ledge Installation — Clean Architectural Appearance",
      },
      {
        image: "/images/services/bird-spikes-mobile.webp",
        alt: "Close-up of stainless steel bird spikes on building ledge with flexible base",
        caption: "Blunted Marine SS Prongs for 100% Humane Bird Deterrence",
      },
      {
        image: "/images/projects/project-bird-spikes.jpg",
        alt: "Parapet ledge bird spike installation with structural silicone bonding",
        caption: "Zero-Drill Adhesive Mounting — Waterproof Membrane Protected",
      },
    ],
    process: [
      {
        step: "01",
        title: "Ledge Survey & Cleaning",
        desc: "Cleaning and scraping accumulated dirt and bird droppings from the ledge surface to ensure maximum adhesive bonding.",
      },
      {
        step: "02",
        title: "Strip Sizing & Snapping",
        desc: "Polycarbonate base strips are trimmed and snapped to match the exact length and contours of the ledge.",
      },
      {
        step: "03",
        title: "Adhesive Application",
        desc: "Heavy bead of all-weather structural outdoor silicone adhesive is applied along the base underside.",
      },
      {
        step: "04",
        title: "Placement & Alignment",
        desc: "Strips are pressed firmly onto the ledge, overlapping prong angles to ensure zero unprotected landing spaces.",
      },
    ],
    faqs: [
      {
        question: "Do bird spikes hurt or injure birds?",
        answer:
          "No. The metal pins have blunted tips and are designed purely to make landing impossible. Birds see the barrier from the air and divert to another location without harm.",
      },
      {
        question: "Can bird spikes be installed without drilling into the wall?",
        answer:
          "Yes. We frequently use high-strength outdoor structural silicone adhesive that forms a weatherproof bond on concrete, granite, tile, and metal without drilling into waterproof membranes.",
      },
      {
        question: "Will the spikes rust or leave brown stains on the building facade?",
        answer:
          "No. The wire pins are manufactured from high-grade stainless steel that will not rust or cause unsightly brown drip marks down the building facade.",
      },
      {
        question: "How long do bird spikes last?",
        answer:
          "Because they are made from UV-treated polycarbonate and stainless steel wire, our bird spikes typically last for years under outdoor sun and rain exposure without needing replacement.",
      },
    ],
    subServices: [
      {
        id: "ss-bird-spikes",
        title: "Stainless Steel Bird Spikes",
        tagline: "Marine SS Wire Anti-Perch Strips",
        description:
          "High-grade stainless steel spike pins set on clear polycarbonate bases, providing permanent humane bird deterrence for narrow parapets and ledges.",
        image: "/images/services/bird-spikes-mobile.webp",
        imageAlt: "Stainless steel bird spikes on building parapet",
        suitability: [
          "Building Parapet Walls",
          "Window Sills",
          "AC Outdoor Condenser Units"
        ],
        hardwareSpecs: [
          { label: "Prong Material", value: "AISI 304/316 Stainless Steel Wire Prongs" },
          { label: "Prong Geometry", value: "Multi-Angle V-Pattern (Zero Bird Landing Footing)" },
          { label: "Base Material", value: "UV-Stabilized Clear Virgin Polycarbonate" },
          { label: "Tips", value: "Blunted tips for 100% humane, injury-free deterrence" }
        ],
        installationHighlight: "Denies birds landing footing permanently without inflicting physical harm.",
        badge: "Most Durable",
      },
      {
        id: "polycarb-bird-spikes",
        title: "Polycarbonate Bird Spikes",
        tagline: "Clear All-Polycarbonate Strips",
        description:
          "Lightweight, 100% transparent polycarbonate spike strips designed for decorative architectural mouldings and heritage facades.",
        image: "/images/services/benefits/bird-spikes/bs-polycarb-base.jpg",
        imageAlt: "Transparent polycarbonate bird spikes installation",
        suitability: [
          "Curved Ledges",
          "Sunshades (Chajjas)",
          "Narrow Architectural Niches"
        ],
        hardwareSpecs: [
          { label: "Base Flexibility", value: "Segmented base snaps and bends to fit curved ledges" },
          { label: "Weather Endurance", value: "Sunlight UV-stabilized, will not crack or yellow" },
          { label: "Mounting Options", value: "Structural outdoor silicone or screw fasteners" },
          { label: "Pre-Punched Holes", value: "Easy screw installation for wooden or metal beams" }
        ],
        installationHighlight: "Flexible segmented base easily mounts over curved cornices and uneven ledge surfaces.",
      },
      {
        id: "building-ledge-protection",
        title: "Building Ledge Protection",
        tagline: "Facade Sills & Architectural Projections",
        description:
          "Custom-measured strips protecting window sills, external beam projections, and signboards from pigeon nesting and dropping stains.",
        image: "/images/services/benefits/bird-spikes/bs-curved-ledges.jpg",
        imageAlt: "Building ledge bird spike protection",
        suitability: [
          "Commercial Signboards",
          "Facade Beams",
          "Balcony Top Parapets"
        ],
        hardwareSpecs: [
          { label: "Coverage Width", value: "Up to 150mm wide multi-angled deterrent spread" },
          { label: "Adhesive Type", value: "Heavy-duty all-weather structural silicone bonding" },
          { label: "Waterproof Membrane", value: "Zero-Drill adhesive preserves roof waterproofing" },
          { label: "Maintenance", value: "Passive physical deterrent requiring zero maintenance" }
        ],
        installationHighlight: "Zero-drill adhesive installation protects building waterproofing from moisture leaks.",
      },
      {
        id: "rooftop-bird-protection",
        title: "Rooftop Bird Protection",
        tagline: "AC Compressors & Parapet Wall Defense",
        description:
          "Specialized non-drilling adhesive mounting for air conditioning outdoor compressor units, parapets, and solar panel perimeters.",
        image: "/images/services/benefits/bird-spikes/bs-humane-perch.jpg",
        imageAlt: "Rooftop AC compressor bird spike protection",
        suitability: [
          "Rooftop Water Tanks",
          "Solar Panel Arrays",
          "Elevator Machine Rooms"
        ],
        hardwareSpecs: [
          { label: "Corrosion Resistance", value: "100% Rust-proof in outdoor rain and sun exposure" },
          { label: "Pest Exclusion", value: "Stops pigeons, crows, and mynas from roosting" },
          { label: "Clean Facade", value: "Prevents acidic droppings from staining walls" },
          { label: "Longevity", value: "Engineered for 5+ years of continuous outdoor life" }
        ],
        installationHighlight: "Protects rooftop solar panels and equipment from corrosive bird droppings.",
      },
    ],
    materials: {
      title: "Marine-Grade SS Wire on Virgin Polycarbonate Base",
      description:
        "Engineered with marine-grade stainless steel wire pins fixed into a flexible, UV-stabilized virgin polycarbonate base that conforms to flat, curved, or narrow ledge surfaces without cracking.",
      specs: [
        { label: "Spike Pin Alloy", value: "High-Tensile Marine-Grade Stainless Steel" },
        { label: "Base Strip Material", value: "Virgin UV-Stabilized Polycarbonate" },
        { label: "Pin Profile", value: "Blunted Humane Non-Injurious Design" },
        { label: "Base Flexibility", value: "Snappable Segments for Curved Balustrades & Sills" },
        { label: "Mounting Compatibility", value: "Structural Silicone Adhesive & Screw Fixing" },
        { label: "Corrosion Resistance", value: "100% Rust-Proof & Weather-Enduring" },
      ],
    },
    relatedSlugs: ["pigeon-safety-nets", "safety-nets", "invisible-grills"],
  },
};
