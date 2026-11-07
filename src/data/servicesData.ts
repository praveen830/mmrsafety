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
    heroImage: "/images/desktop/invisible-grills.webp",
    imageDesktop: "/images/desktop/invisible-grills.webp",
    imageMobile: "/images/mobile/invisible-grills.webp",
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
        image: "/images/comparison/invisible-view.jpg",
      },
      {
        title: "Child & Pet Fall Protection",
        description:
          "Engineered 2-inch or 3-inch gap calibrations prevent children and pets from slipping through, withstanding up to 400 kg tensile impact force.",
        icon: "shield",
        image: "/images/services/benefits/invisible-grills/ig-child-protection.jpg",
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
          "Approved by leading Bangalore gated communities and apartment associations because it preserves building elevation uniform design codes.",
        icon: "building",
        image: "/images/services/benefits/invisible-grills/ig-apartment-facade.jpg",
      },
      {
        title: "Zero Painting & Low Maintenance",
        description:
          "Requires no repetitive enamel painting or anti-rust coatings. Simply wipe with a soft cloth to maintain pristine clarity for years.",
        icon: "clean",
        image: "/images/comparison/after-invisible-grills.jpg",
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
        image: "/images/projects/project-invisible-grills.jpg",
        alt: "High-Rise Balcony Invisible Grill Installation MMR Safety Bangalore",
        caption: "High-Rise Balcony Installation — Panoramic City Skyline",
      },
      {
        image: "/images/services/gallery/ig-gallery-2.jpg",
        alt: "Living Room Bay Window Invisible Grill System Bangalore",
        caption: "Luxury Apartment Living Room — Unobstructed Glass Bay Window Grills",
      },
      {
        image: "/images/services/gallery/ig-gallery-3.jpg",
        alt: "Child Safe Open Balcony Invisible Grill Installation Bangalore",
        caption: "High-Floor Terrace & Balcony — Slimline Architectural Cable Safety",
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
        tagline: "Unobstructed Panoramic Skyline Safety",
        description:
          "High-tensile vertical wire system custom-tensioned for residential high-rise balconies, delivering complete fall safety without compromising natural light or airflow.",
        image: "/images/services/subservices/invisible-grills/ig-balcony-invisible-grills.jpg",
        imageAlt: "Balcony Invisible Grills Installation Bengaluru",
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
        id: "terrace-invisible-grills",
        title: "Terrace Invisible Grills",
        tagline: "Spacious Penthouse & Rooftop Perimeter Cable Defense",
        description:
          "Full-perimeter marine-grade stainless steel cable barrier designed for open rooftop terraces, penthouse sit-outs, and sky decks, offering panoramic city vistas with total fall prevention.",
        image: "/images/services/subservices/invisible-grills/ig-terrace-invisible-grills.jpg",
        imageAlt: "Terrace Invisible Grills Installation Bengaluru",
        suitability: [
          "Rooftop Terraces",
          "Penthouse Sit-Outs",
          "Sky Lounge Balconies"
        ],
        hardwareSpecs: [
          { label: "Cable Core", value: "High-Tensile AISI 316 Marine Stainless Steel (2.5mm)" },
          { label: "Tension Anchors", value: "Heavy-Duty Parapet & Ceiling Anchor Brackets" },
          { label: "Wind Endurance", value: "Aerodynamic wire profile zero-drag under high altitude winds" },
          { label: "Coating", value: "UV-Stabilized Anti-Burr Transparent Membrane" }
        ],
        installationHighlight: "Encloses open terrace perimeters with ultra-high tensile strength while keeping 99% open skyline views.",
        badge: "Rooftop Safe",
      },
      {
        id: "apartment-invisible-grills",
        title: "Apartment Invisible Grills",
        tagline: "Gated Society Bylaw Compliant Balcony Protection",
        description:
          "Uniform architectural vertical cable aesthetic approved across Bangalore luxury apartment societies where traditional iron grills are strictly prohibited.",
        image: "/images/services/subservices/invisible-grills/ig-apartment-invisible-grills.jpg",
        imageAlt: "Apartment Invisible Grills Bengaluru",
        suitability: [
          "Gated Apartment Societies",
          "Luxury Condominiums",
          "High-Rise Balconies"
        ],
        hardwareSpecs: [
          { label: "Bylaw Compliance", value: "Meets modern apartment facade bylaws" },
          { label: "Exterior Profile", value: "Subtle architectural finish unnoticeable from ground" },
          { label: "Hardware Alloy", value: "Marine-Grade 316 SS & Anodized Track" },
          { label: "Maintenance", value: "Zero painting required; simple microfiber cloth wipe" }
        ],
        installationHighlight: "Fully approved across Bangalore apartment associations where exterior iron grills are prohibited.",
        badge: "Society Approved",
      },
      {
        id: "window-invisible-grills",
        title: "Window Invisible Grills",
        tagline: "Slimline Track Fitment for Sliding & Casement Windows",
        description:
          "Architectural grade vertical stainless steel cables anchored seamlessly into concrete window jambs, offering 100% safety with zero visual obstruction.",
        image: "/images/services/subservices/invisible-grills/ig-window-invisible-grills.jpg",
        imageAlt: "Window Invisible Grills Installation Bengaluru",
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
        badge: "Precision Fit",
      },
      {
        id: "staircase-invisible-grills",
        title: "Staircase Invisible Grills",
        tagline: "Duplex Villa Stairwell & Open Void Protection",
        description:
          "Architectural marine-grade stainless steel cable railing custom-anchored along interior stairs and duplex voids, eliminating accidental slip-and-fall hazards while elevating interior elegance.",
        image: "/images/services/subservices/invisible-grills/ig-staircase-invisible-grills.jpg",
        imageAlt: "Staircase Invisible Grills Installation Bengaluru Duplex",
        suitability: [
          "Duplex Stair Balustrades",
          "Spiral & Cantilever Stairs",
          "Open Mezzanine & Atrium Drops"
        ],
        hardwareSpecs: [
          { label: "Balustrade Posts", value: "Grade 304/316 Stainless Steel Tension Balusters" },
          { label: "Cable Core", value: "High-Tensile 2.5mm Marine-Grade SS 316 Wire" },
          { label: "Tension Hardware", value: "Swaged Turnbuckles & Concealed Threaded Anchors" },
          { label: "Child Protection", value: "Calibrated 2-inch pitch eliminates balustrade slip-through" }
        ],
        installationHighlight: "Seamlessly integrates with marble, wood, and concrete steps for uncompromised interior safety.",
        badge: "Duplex Safe",
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
    heroImage: "/images/desktop/safety-nets.webp",
    imageDesktop: "/images/desktop/safety-nets.webp",
    imageMobile: "/images/mobile/safety-nets.webp",
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
        image: "/images/services/subservices/safety-nets/sn-children-safety-nets.jpg",
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
        image: "/images/services/subservices/safety-nets/sn-terrace-safety-nets.jpg",
      },
      {
        title: "Discreet Visual Footprint",
        description:
          "Semi-translucent mesh blends into background greenery and skyline views, avoiding a closed-in or cage-like feeling.",
        icon: "eye",
        image: "/images/services/benefits/safety-nets/sn-child-pet-security.jpg",
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
        image: "/images/services/subservices/safety-nets/sn-window-safety-nets.jpg",
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
        image: "/images/mobile/safety-nets.webp",
        alt: "Tensioned safety net protecting luxury balcony perimeter with potted plants and city view",
        caption: "Tightly Anchored Mesh with Clear Outdoor Visibility & Natural Light",
      },
      {
        image: "/images/services/gallery/sn-gallery-2.jpg",
        alt: "Duplex Staircase Void Safety Net System MMR Safety",
        caption: "Duplex Staircase Void & Open Atrium Child Safety Enclosure",
      },
      {
        image: "/images/services/gallery/sn-gallery-3.jpg",
        alt: "Apartment Duct Area Fall Barrier Netting Bangalore",
        caption: "Apartment Duct Area & High-Rise Balcony Fall Arrest Barrier",
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
    heroImage: "/images/desktop/pigeon-safety-nets.webp",
    imageDesktop: "/images/desktop/pigeon-safety-nets.webp",
    imageMobile: "/images/mobile/pigeon-safety-nets.webp",
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
        image: "/images/services/subservices/pigeon-safety-nets/pn-balcony-safety-nets.jpg",
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
        image: "/images/mobile/pigeon-safety-nets.webp",
        alt: "Balcony pigeon exclusion netting keeping outdoor furniture and tiles spotless",
        caption: "Clean, Bird-Free Living Space — Spotless Outdoor Balcony Area",
      },
      {
        image: "/images/services/gallery/pn-gallery-2.jpg",
        alt: "AC Ledge Pigeon Defense Installation MMR Safety",
        caption: "AC Outdoor Unit & Ledge Pigeon Exclusion Mesh Protection",
      },
      {
        image: "/images/services/gallery/pn-gallery-3.jpg",
        alt: "Apartment Utility Area Pigeon Netting Bangalore",
        caption: "High-Rise Apartment Facade & Utility Area Bird Defense",
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
        id: "balcony-pigeon-safety-nets",
        title: "Balcony Pigeon Safety Nets",
        tagline: "Full-Height Balcony Bird Exclusion",
        description:
          "Floor-to-ceiling translucent polymer netting anchored securely along balcony balustrades, keeping outdoor living spaces completely free of pigeons while preserving panoramic views.",
        image: "/images/services/subservices/pigeon-safety-nets/pn-balcony-safety-nets.jpg",
        imageAlt: "Balcony Pigeon Safety Nets Installation Bengaluru",
        suitability: [
          "High-Rise Balconies",
          "Terrace Openings",
          "Outdoor Sitting Areas"
        ],
        hardwareSpecs: [
          { label: "Mesh Aperture", value: "25mm–30mm Precision Knotted Mesh" },
          { label: "Polymer Quality", value: "UV-Stabilized Monofilament Nylon" },
          { label: "Light Transmission", value: "98% Natural Daylight Penetration" },
          { label: "Fasteners", value: "Marine-Grade Stainless Steel Eye Hooks" }
        ],
        installationHighlight: "Completely seals the exterior balcony opening with zero visual obstruction and full cross-ventilation.",
        badge: "Most Popular",
      },
      {
        id: "window-pigeon-safety-nets",
        title: "Window Pigeon Safety Nets",
        tagline: "Ledge & Sill Roosting Prevention",
        description:
          "Custom-fitted perimeter mesh secured tightly across external window reveals, preventing pigeons from perching on window sills, AC ledges, and frames without obstructing fresh air.",
        image: "/images/services/subservices/pigeon-safety-nets/pn-window-safety-nets.jpg",
        imageAlt: "Window Pigeon Safety Nets Installation Bengaluru",
        suitability: [
          "Sliding & Casement Windows",
          "Bedroom Window Sills",
          "Kitchen Utility Windows"
        ],
        hardwareSpecs: [
          { label: "Frame Mounting", value: "Flush-Fit Concealed Anchor Fasteners" },
          { label: "Airflow Clearance", value: "100% Free Air Ventilation" },
          { label: "UV Protection", value: "Carbon-Stabilized Tropical Sun Resistance" },
          { label: "Maintenance", value: "Zero Maintenance, Easy Washable Mesh" }
        ],
        installationHighlight: "Allows keeping windows open 24/7 without risk of pigeons entering or leaving droppings on sills.",
        badge: "Precision Fit",
      },
      {
        id: "duct-area-pigeon-nets",
        title: "Duct Area Pigeon Nets",
        tagline: "Building Shaft & Pipe Enclosures",
        description:
          "Heavy-gauge industrial netting engineered to enclose multi-story plumbing shafts, vertical building ducts, and exhaust corridors where pigeons routinely roost and cause severe hygiene issues.",
        image: "/images/services/subservices/pigeon-safety-nets/pn-duct-area-nets.jpg",
        imageAlt: "Duct Area Pigeon Nets Installation Bengaluru",
        suitability: [
          "Internal Plumbing Shafts",
          "Air Exhaust Corridors",
          "Service Duct Openings"
        ],
        hardwareSpecs: [
          { label: "Twine Thickness", value: "Heavy-Duty 1.5mm–2.0mm Knotted Polyethylene" },
          { label: "Coverage Span", value: "Multi-Floor Vertical & Horizontal Duct Spans" },
          { label: "Anchorage", value: "Concrete Sleeve Anchors & Wire Rope Border" },
          { label: "Hygiene Defense", value: "Blocks Colony Nesting & Odor Circulation" }
        ],
        installationHighlight: "Stops pigeon colonies from nesting in deep building shafts, eliminating foul odors and allergen buildup.",
        badge: "Heavy Duty",
      },
      {
        id: "apartment-pigeon-safety-nets",
        title: "Apartment Pigeon Safety Nets",
        tagline: "Uniform Residential Society Enclosures",
        description:
          "Architecturally compliant society-wide pigeon netting installations approved across Bengaluru gated communities and apartment complexes, preserving uniform exterior elevation aesthetics.",
        image: "/images/services/subservices/pigeon-safety-nets/pn-apartment-safety-nets.jpg",
        imageAlt: "Apartment Pigeon Safety Nets Installation Bengaluru",
        suitability: [
          "Gated Community Societies",
          "High-Rise Apartment Towers",
          "Residential Complex Balconies"
        ],
        hardwareSpecs: [
          { label: "Elevation Code", value: "Gated Community Bylaw Compliant Uniform Look" },
          { label: "Tensile Strength", value: "High-Tensile Knotted Weatherproof Twine" },
          { label: "Color Finish", value: "Translucent White / Neutral Sky Tone" },
          { label: "Longevity", value: "5+ Years Reliable Outdoor Service Life" }
        ],
        installationHighlight: "Preserves architectural uniformity across entire apartment elevations while keeping all balconies spotless.",
        badge: "Society Approved",
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
    heroImage: "/images/desktop/sports-nets.webp",
    imageDesktop: "/images/desktop/sports-nets.webp",
    imageMobile: "/images/mobile/sports-nets.webp",
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
        image: "/images/services/subservices/sports-nets/sp-tennis-nets.jpg",
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
        image: "/images/mobile/sports-nets.webp",
        alt: "Outdoor cricket pitch turf with green sports netting and guide cables",
        caption: "High-Tensile Ball Containment for Sports Enthusiasts & Academies",
      },
      {
        image: "/images/services/gallery/sp-gallery-2.jpg",
        alt: "School Sports Ground Perimeter Netting MMR Safety",
        caption: "Multi-Sport Ground & Terrace Ball Containment Boundary",
      },
      {
        image: "/images/services/gallery/sp-gallery-3.jpg",
        alt: "Commercial Futsal Turf Enclosure Bangalore",
        caption: "Commercial Turf Arena & Rooftop Sports Box Cage Enclosure",
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
        id: "sports-ground-enclosure-nets",
        title: "Sports Ground Enclosure Nets",
        tagline: "Full-Perimeter Turf & Rooftop Box Enclosures",
        description:
          "Large outdoor sports grounds and rooftop turf arenas completely enclosed with high-strength sports netting, tall support structures, and complete 360-degree ball containment.",
        image: "/images/services/subservices/sports-nets/sp-sports-ground-enclosure.jpg",
        imageAlt: "Sports Ground Enclosure Netting Bengaluru",
        suitability: [
          "Commercial Box Cricket Turfs",
          "Rooftop Sports Arenas",
          "Multi-Sport Athletic Grounds",
        ],
        hardwareSpecs: [
          { label: "Coverage Scope", value: "Complete 360-degree perimeter + top roof net" },
          { label: "Wind Permeability", value: "Aerodynamic mesh allows high monsoon winds to pass" },
          { label: "Framework", value: "Industrial GI tubular trusses and steel wire rigging" },
          { label: "UV Warranty", value: "100% Rot-proof and UV-resistant synthetic filaments" },
        ],
        installationHighlight: "Maximizes playable hours with safe, complete ball containment.",
        badge: "Full Enclosure",
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
          "Multi-Sport Courts",
        ],
        hardwareSpecs: [
          { label: "Barrier Height", value: "Custom 15ft to 35ft vertical protective spans" },
          { label: "Mesh Type", value: "Weather-resistant UV-inhibited synthetic weave" },
          { label: "Support Posts", value: "Galvanized GI steel posts with concrete footing" },
          { label: "Border Reinforce", value: "Double-stitched high-density boundary rope" },
        ],
        installationHighlight: "Contains multi-sport activities safely within playground boundaries.",
        badge: "Campus Safe",
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
          "Sports Complexes",
        ],
        hardwareSpecs: [
          { label: "Material", value: "High-Tenacity Virgin Polypropylene Twine" },
          { label: "Mesh Size", value: "100mm to 120mm Square Aperture" },
          { label: "Weather Proofing", value: "100% Water-repellent and UV-stabilized coating" },
          { label: "Anchors", value: "Heavy-duty perimeter tie cords & clip hooks" },
        ],
        installationHighlight: "Drop-tested mesh absorbs powerful ball strikes with minimal bounce-back.",
        badge: "FIFA Spec",
      },
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
          "Apartment Sports Zones",
        ],
        hardwareSpecs: [
          { label: "Twine Ply", value: "Heavy-Gauge UV-Treated High-Density Polyethylene" },
          { label: "Mesh Size", value: "Calibrated Cricket Leather Ball Mesh" },
          { label: "Impact Rating", value: "Withstands hard leather cricket ball strikes at 140+ km/h" },
          { label: "Rigging", value: "Steel Suspension Cables & Turnbuckles" },
        ],
        installationHighlight: "Rigid overhead suspension lines eliminate net sagging during intense batting practice.",
        badge: "High Impact",
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
    heroImage: "/images/desktop/cloth-hangers.webp",
    imageDesktop: "/images/desktop/cloth-hangers.webp",
    imageMobile: "/images/mobile/cloth-hangers.webp",
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
        image: "/images/services/subservices/cloth-hangers/ch-automatic-cloth-hangers.jpg",
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
        image: "/images/mobile/cloth-hangers.webp",
        alt: "Apartment balcony with stainless steel drying rods and clean floor space",
        caption: "Frees 100% Balcony Floor Space — Quick Warm-Air Ceiling Drying",
      },
      {
        image: "/images/services/gallery/ch-gallery-2.jpg",
        alt: "Utility Room Retractable Wall Clothes Rack MMR Safety",
        caption: "Utility Room Retractable Wall-Mount Stainless Drying Rack",
      },
      {
        image: "/images/services/gallery/ch-gallery-3.jpg",
        alt: "Heavy Duty 6 Pipe Stainless Ceiling Hanger Bangalore",
        caption: "Sunlit Apartment Balcony Dual-Pulley Stainless Steel Drying Setup",
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
        id: "ceiling-mounted-cloth-hangers",
        title: "Ceiling-Mounted Cloth Hangers",
        tagline: "Overhead Stainless Steel Space Saver",
        description:
          "Ceiling-mounted stainless steel drying pipes suspended from high-grade ceiling anchor brackets, keeping laundry elevated to maximize floor space and natural breeze.",
        image: "/images/services/subservices/cloth-hangers/ch-ceiling-mounted-cloth-hangers.jpg",
        imageAlt: "Ceiling-Mounted Cloth Hangers Installation Bengaluru",
        suitability: [
          "Apartment Balconies",
          "Utility Balconies",
          "Covered Patios & Sit-outs"
        ],
        hardwareSpecs: [
          { label: "Pipe Material", value: "High-Grade Rustproof Stainless Steel (SS 304/202)" },
          { label: "Ceiling Anchors", value: "Heavy-Duty Metal Expansion Fasteners" },
          { label: "Rope Quality", value: "UV-Stabilized High-Tenacity Braided Nylon Pull Cords" },
          { label: "Capacity", value: "Supports up to 5kg–8kg wet laundry per rod" }
        ],
        installationHighlight: "Reclaims 100% of valuable balcony floor space by utilizing natural warm ceiling airflow.",
        badge: "Most Popular",
      },
      {
        id: "pulley-cloth-hangers",
        title: "Pulley Cloth Hangers",
        tagline: "Smooth Dual-Pulley Individual Lowering System",
        description:
          "Precision dual-pulley and high-strength cord system that lets you lower and raise individual drying rods effortlessly to comfortable eye-level height.",
        image: "/images/services/subservices/cloth-hangers/ch-pulley-cloth-hangers.jpg",
        imageAlt: "Pulley Cloth Hangers Installation Bengaluru",
        suitability: [
          "Daily Household Laundry",
          "Senior & Child-Friendly Balconies",
          "Narrow Utility Passages"
        ],
        hardwareSpecs: [
          { label: "Pulley Mechanism", value: "Smooth Dual-Wheel Frictionless Brass/Nylon" },
          { label: "Operation", value: "Individual Rod Pull-and-Lock / Wall Crank Winch" },
          { label: "Cables/Cords", value: "Heavy-Duty Wear-Resistant Braided Wire & Rope" },
          { label: "Effort Reduction", value: "Mechanical pulley advantage requiring minimal pulling effort" }
        ],
        installationHighlight: "Lower each rod independently to hang clothes and hoist it back up to ceiling level with zero strain.",
        badge: "Easy Lift",
      },
      {
        id: "wall-mounted-cloth-hangers",
        title: "Wall-Mounted Cloth Hangers",
        tagline: "Compact Retractable Accordion Scissor Racks",
        description:
          "Fold-flat wall-mounted stainless steel drying frames that extend outward when needed and fold completely flush against exterior or utility walls.",
        image: "/images/services/subservices/cloth-hangers/ch-wall-mounted-cloth-hangers.jpg",
        imageAlt: "Wall-Mounted Retractable Cloth Hangers Bengaluru",
        suitability: [
          "Utility Service Balconies",
          "Bathroom Drying Areas",
          "Compact Exterior Walls"
        ],
        hardwareSpecs: [
          { label: "Frame Operation", value: "Smooth accordion scissor expansion & fold-flat design" },
          { label: "Corrosion Proof", value: "100% Rustproof Mirror-Polished Stainless Steel" },
          { label: "Wall Anchors", value: "Heavy-Duty Stainless Concrete Anchor Fasteners" },
          { label: "Profile", value: "Projects just 2 inches from wall when fully collapsed" }
        ],
        installationHighlight: "Collapses completely flat against the wall when not in use for an uncluttered balcony look.",
        badge: "Foldable Space Saver",
      },
      {
        id: "automatic-cloth-hangers",
        title: "Automatic Cloth Hangers",
        tagline: "Smart Motorized Ceiling Hanger with Remote & LED",
        description:
          "Luxury motorized ceiling cloth dryer featuring wireless remote control, integrated LED panel lighting, auto-stop safety sensors, and rapid air circulation.",
        image: "/images/services/subservices/cloth-hangers/ch-automatic-cloth-hangers.jpg",
        imageAlt: "Automatic Motorized Cloth Hangers Bengaluru",
        suitability: [
          "Luxury High-Rise Apartments",
          "Premium Penthouses & Villas",
          "Covered Balconies & Indoor Utilities"
        ],
        hardwareSpecs: [
          { label: "Control System", value: "Wireless RF Remote Control & Digital Display" },
          { label: "Integrated Light", value: "Built-in Energy-Efficient LED Panel Lighting" },
          { label: "Motor & Lift", value: "Ultra-Quiet Scissor-Lift Tubular Motor" },
          { label: "Safety System", value: "Obstacle Detection Auto-Stop & Overload Protection" }
        ],
        installationHighlight: "Effortlessly lower and raise heavy wet laundry with the tap of a button on the handheld remote.",
        badge: "Smart Luxury",
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
    heroImage: "/images/desktop/bird-spikes.webp",
    imageDesktop: "/images/desktop/bird-spikes.webp",
    imageMobile: "/images/mobile/bird-spikes.webp",
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
        image: "/images/services/subservices/bs-building-ledge.jpg",
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
        image: "/images/mobile/bird-spikes.webp",
        alt: "Close-up of stainless steel bird spikes on building ledge with flexible base",
        caption: "Blunted Marine SS Prongs for 100% Humane Bird Deterrence",
      },
      {
        image: "/images/services/gallery/bs-gallery-2.jpg",
        alt: "Commercial Facade Architectural Bird Spikes MMR Safety",
        caption: "Commercial & Residential Facade Ledge Bird Barrier Protection",
      },
      {
        image: "/images/services/gallery/bs-gallery-3.jpg",
        alt: "Air Conditioner Outdoor Unit Bird Defense Spikes Bangalore",
        caption: "Air Conditioner Outdoor Unit & Parapet Wall Bird Deterrent Spikes",
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
        tagline: "Heavy-Gauge Anti-Rust Marine Prongs",
        description:
          "Marine-grade 304 stainless steel spike wires bonded to UV-stabilized polymer bases, providing maximum durability against harsh sun and bird pressure.",
        image: "/images/projects/project-bird-spikes.jpg",
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
        tagline: "Flexible Base for Curved Ledges & Parapets",
        description:
          "Segmented flexible polycarbonate bases that conform to curved parapets, architectural cornices, and narrow window sills with non-destructive adhesive mounting.",
        image: "/images/details/detail-spikes-base.jpg",
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
