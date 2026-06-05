export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  couponCode: string;
  affiliateUrl: string;
  imageUrl: string;
  description: string;
  rating: number;
  reviewsCount: number;
  savingsText: string;
  pros: string[];
  cons: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Hotspot {
  x: number; // percentage from left
  y: number; // percentage from top
  productId: string;
  title: string;
  price: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  bannerImage: string;
  category: string;
  content: string[];
  products: Product[];
  faqs: FAQ[];
  hotspots: Hotspot[];
}

export const BLOGS_DATABASE: Record<string, BlogPost> = {
  "summer-maternity-comfort": {
    slug: "summer-maternity-comfort",
    title: "The Ultimate Summer Maternity & Baby Comfort Essentials (June 2026 Checklist)",
    description: "Keep cool, active, and comfortable this summer with our curated checklist of top maternity and baby products, verified by moms.",
    publishDate: "June 5, 2026",
    readTime: "4 min read",
    category: "Maternity & Parenting",
    bannerImage: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Staying comfortable during the warm summer months of pregnancy can be a challenge. With rising temperatures, choosing the right breathable clothes, skincare, and travel systems makes all the difference in the world.",
      "In this guide, we break down the most aesthetic, durable, and trending products curated directly from high-growing Pinterest trends. Whether you are prepping for your nursery or looking for functional accessories to beat the heat, these items will elevate your summer journey."
    ],
    products: [
      {
        id: "maternity-stroller-travel",
        name: "Aesthetic Premium Maternity Stroller & Travel Bundle",
        brand: "Target Essentials",
        price: "$189.99",
        originalPrice: "$219.99",
        couponCode: "MAVSAVE10",
        affiliateUrl: "https://mavely.app.link/EOkCCu97I3b",
        imageUrl: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=600&q=80",
        description: "A lightweight, breathable, and highly modular stroller system designed for summer city strolls. Feature-rich, with responsive suspension, UV50+ canopy protection, and a comfortable ergonomic baby bassinet.",
        rating: 5.0,
        reviewsCount: 428,
        savingsText: "SAVE $30",
        pros: [
          "Super lightweight and folds in 3 seconds",
          "Extendable UV50+ sun canopy with mesh windows",
          "Advanced shock-absorbing wheels for all terrains"
        ],
        cons: [
          "Limited color variations available in stock",
          "Rain cover sold separately"
        ]
      },
      {
        id: "organic-tallow-glow",
        name: "Ancestral Grass-Fed Tallow Skin Nourishing Balm",
        brand: "Kossma Skincare",
        price: "$34.00",
        originalPrice: "$40.00",
        couponCode: "MarkPaul15",
        affiliateUrl: "https://kossma.com/discount/MarkPaul15",
        imageUrl: "https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=600&q=80",
        description: "Rich in vitamins A, D, E, and K, this non-toxic tallow balm mimics your skin's natural barrier. Perfect for achieving a radiant, chemical-free summer glow and treating stretch marks naturally.",
        rating: 4.9,
        reviewsCount: 184,
        savingsText: "15% OFF",
        pros: [
          "100% organic grass-fed tallow base",
          "Absorbs quickly without sticky residue",
          "Rich in vitamins A, D, E, and K"
        ],
        cons: [
          "Natural unscented version has a mild earthy tone",
          "Small batch production creates inventory delays"
        ]
      }
    ],
    faqs: [
      {
        question: "How do I claim these discount codes?",
        answer: "Simply hover or tap on the dashed promo code box inside each product card. It will automatically copy to your clipboard. Then, click 'Claim Deal' and paste it during checkout on the official store page."
      },
      {
        question: "Are these products recommended for all trimesters?",
        answer: "Yes! The maternity skincare is 100% toxin-free and safe for all trimesters, and the travel strollers are fully customizable to grow with your baby from newborn to toddler stages."
      }
    ],
    hotspots: [
      { x: 45, y: 65, productId: "maternity-stroller-travel", title: "Aesthetic Premium Stroller", price: "$189.99" },
      { x: 75, y: 35, productId: "organic-tallow-glow", title: "Organic Tallow Skin Balm", price: "$34.00" }
    ]
  },
  "aesthetic-wfh-desk-setup": {
    slug: "aesthetic-wfh-desk-setup",
    title: "10 Essential Pieces for an Aesthetic & Ergonomic WFH Desk Setup (June 2026)",
    description: "Upgrade your productivity with our expert WFH setup checklist. We combine ergonomic standing desks with minimalist wooden workspace accessories.",
    publishDate: "June 4, 2026",
    readTime: "5 min read",
    category: "Home Office & Ergonomics",
    bannerImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    content: [
      "The perfect workspace is a balance between visual simplicity and structural ergonomics. Banish fatigue and back pain by structuring your setup around a motorized height-adjustable standing desk.",
      "In this feature, we evaluate the industry-standard Desktronic standing desk alongside aesthetic desk organizers to keep your devices charged, your posture correct, and your workflow uncluttered."
    ],
    products: [
      {
        id: "desktronic-homepro-desk",
        name: "Desktronic Motorized Height Adjustable Standing Desk (HomePro)",
        brand: "Desktronic UK",
        price: "£289.00",
        originalPrice: "£339.00",
        couponCode: "MarkPaul15",
        affiliateUrl: "https://promoregistry.com/go/desktronic-desk-homepro",
        imageUrl: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&w=600&q=80",
        description: "Featuring dual high-performance motors, smart preset memory controls, and a solid wood desktop, the HomePro desk makes transitions between sitting and standing smooth and noiseless.",
        rating: 5.0,
        reviewsCount: 612,
        savingsText: "£50 OFF",
        pros: [
          "Ultra-quiet dual motor system (<40dB)",
          "Three custom height preset memories",
          "Built-in anti-collision safety sensors"
        ],
        cons: [
          "Shipping package is heavy and requires two people to assemble",
          "Cable management tray sold as an add-on"
        ]
      },
      {
        id: "mechanical-keyboard-aesthetic",
        name: "NuPhy Halo75 V2 Minimalist Mechanical Keyboard",
        brand: "NuPhy Direct",
        price: "$129.00",
        originalPrice: "$149.00",
        couponCode: "MarkPaul15",
        affiliateUrl: "https://nuphy.com/discount/MarkPaul15",
        imageUrl: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80",
        description: "An incredibly styled 75% layout mechanical keyboard with custom dye-sub keycaps, RGB backlighting, and hot-swappable tactile switches. Elevates typing comfort for long hours of writing.",
        rating: 4.8,
        reviewsCount: 341,
        savingsText: "10% OFF",
        pros: [
          "Beautiful retro-modern layout with RGB sidebars",
          "Superior sound dampening and keypress travel acoustics",
          "Triple-mode connectivity (Bluetooth, 2.4G, Wired)"
        ],
        cons: [
          "Keycap puller tool takes practice to use safely",
          "Battery life is shorter with full RGB brightness"
        ]
      }
    ],
    faqs: [
      {
        question: "How long is the warranty on Desktronic desks?",
        answer: "Desktronic provides a comprehensive 5-year structural warranty on the steel frame, desk motor systems, and electrical controllers."
      },
      {
        question: "Is the keyboard compatible with Mac OS?",
        answer: "Yes! The NuPhy Halo75 keyboard fully supports both Windows and macOS systems, and includes replacement macOS keycaps inside the box."
      }
    ],
    hotspots: [
      { x: 50, y: 55, productId: "desktronic-homepro-desk", title: "Ergonomic Standing Desk", price: "£289.00" },
      { x: 30, y: 70, productId: "mechanical-keyboard-aesthetic", title: "Halo75 V2 Keyboard", price: "$129.00" }
    ]
  },
  "glossy-summer-skincare": {
    slug: "glossy-summer-skincare",
    title: "The Ancestral Skin Secrets: Achieving a Glossy Summer Glow Naturally",
    description: "Ditch chemical-heavy moisturizers. Discover the rise of grass-fed tallow and natural ancestral serums that lock in moisture all day.",
    publishDate: "June 3, 2026",
    readTime: "3 min read",
    category: "Beauty & Skincare",
    bannerImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Natural ancestral beauty practices are having a massive resurgence on Pinterest. Skincare enthusiasts are moving away from heavy synthetic compounds in favor of organic, single-origin ingredients.",
      "In this guide, we review Kossma Skincare's organic tallow moisturizers alongside premium beauty tools to keep your skin plump, glossy, and hydrated in the summer sun."
    ],
    products: [
      {
        id: "kossma-tallow-oil",
        name: "Ancestral Meadow Gold Whipped Tallow Moisturizer",
        brand: "Kossma Skincare",
        price: "$39.00",
        originalPrice: "$46.00",
        couponCode: "MarkPaul15",
        affiliateUrl: "https://kossma.com/discount/MarkPaul15",
        imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
        description: "Whipped to perfection with active botanical extracts, this Meadow Gold moisturizer provides deep hydration that mimics skin sebum. Rich in natural anti-inflammatory fats.",
        rating: 4.9,
        reviewsCount: 295,
        savingsText: "15% OFF",
        pros: [
          "Whipped light texture that melts into skin",
          "Sourced from 100% pasture-raised, grass-fed cows",
          "Rich in CLA and fat-soluble vitamins"
        ],
        cons: [
          "Must be stored in a cool area to prevent melting",
          "Unscented tallow has a natural organic scent"
        ]
      },
      {
        id: "ionic-hair-blow-dryer",
        name: "Premium Professional Ionic Hair Gloss Blow Dryer",
        brand: "AliExpress Beauty",
        price: "$59.99",
        originalPrice: "$79.99",
        couponCode: "ALSAVE12",
        affiliateUrl: "https://promoregistry.com/go/aliexpress",
        imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
        description: "An advanced ionic styling blow dryer that cuts drying time in half while preserving your hair's natural hydration and shine. Includes attachments for curls and smooth styling.",
        rating: 4.7,
        reviewsCount: 189,
        savingsText: "SAVE $20",
        pros: [
          "Negative ion tech prevents frizz and split ends",
          "Three precise speed and temperature controls",
          "Includes diffuser and styling concentrator nozzles"
        ],
        cons: [
          "Plug configuration must be chosen carefully during check-out",
          "Slightly heavier than standard travel dryers"
        ]
      }
    ],
    faqs: [
      {
        question: "Is tallow suitable for oily or acne-prone skin?",
        answer: "Surprisingly, yes! Tallow is non-comedogenic and closely matches human skin sebum, which helps regulate oil production without clogging pores."
      },
      {
        question: "How long does AliExpress delivery take for beauty tools?",
        answer: "Most items ship via AliExpress Choice Shipping, which takes roughly 7 to 10 business days to reach addresses in the US and Europe."
      }
    ],
    hotspots: [
      { x: 35, y: 45, productId: "kossma-tallow-oil", title: "Whipped Tallow Balm", price: "$39.00" },
      { x: 65, y: 60, productId: "ionic-hair-blow-dryer", title: "Ionic Gloss Dryer", price: "$59.99" }
    ]
  },
  "summer-vacation-fashion": {
    slug: "summer-vacation-fashion",
    title: "Unveiling the Sporty Summer Chic: 2026 Women's Vacation Capsule",
    description: "From tennis-court aesthetics to elegant beach strolls, here is your essential fashion capsule checklist to stay comfortable and chic.",
    publishDate: "June 2, 2026",
    readTime: "4 min read",
    category: "Women's Fashion & Capsule",
    bannerImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Summer 2026 fashion trends are all about the intersection of sport and comfort. Think F1 varsity aesthetics, high-shine accessories, and flowing linen comfort pieces.",
      "We showcase this summer's most viral Pinterest clothing trends, pairing affordable and elegant linen wear with aesthetic designer-inspired sunglasses."
    ],
    products: [
      {
        id: "chic-summer-linen-dress",
        name: "Flowing Organic Linen Summer Midi Dress",
        brand: "Mavely Fashion Hub",
        price: "$48.00",
        originalPrice: "$60.00",
        couponCode: "MAVSAVE10",
        affiliateUrl: "https://mavely.app.link/EOkCCu97I3b",
        imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
        description: "An elegant, lightweight midi dress made from 100% pure organic linen. Features adjustable shoulder straps, side slits for airflow, and a classic square neckline.",
        rating: 4.8,
        reviewsCount: 312,
        savingsText: "20% OFF",
        pros: [
          "100% natural, breathable organic linen fibers",
          "Functional side pockets for utility",
          "Pre-washed to prevent post-wash shrinkage"
        ],
        cons: [
          "Pure linen wrinkles easily and requires warm ironing",
          "Fabric is slightly sheer in direct bright sunlight"
        ]
      },
      {
        id: "retro-polarized-sunglasses",
        name: "Vintage Aviator Polarized Sun Glasses",
        brand: "AliExpress Fashion",
        price: "$14.99",
        originalPrice: "$24.99",
        couponCode: "ALSAVE12",
        affiliateUrl: "https://promoregistry.com/go/aliexpress",
        imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
        description: "Aesthetic, 70s-inspired vintage sunglasses with polarized UV400 lenses and a gold-plated metal frame. Perfect for completing active street style looks.",
        rating: 4.6,
        reviewsCount: 520,
        savingsText: "40% OFF",
        pros: [
          "Premium UV400 polarization protects vision from glares",
          "Ultra-lightweight alloy frames prevent pressure points",
          "Includes protective carrying box and cleaning cloth"
        ],
        cons: [
          "Lens tint is relatively dark, not ideal for indoor wear",
          "Frame adjustments require delicate care"
        ]
      }
    ],
    faqs: [
      {
        question: "How should I wash organic linen to keep it soft?",
        answer: "Wash on a gentle cycle in cold water with mild detergent. Hang to dry, and iron while slightly damp for the best smooth result."
      },
      {
        question: "Do the sunglasses fit small or large face structures?",
        answer: "These aviators feature flexible spring hinges that expand gently to comfortably fit medium to large face structures."
      }
    ],
    hotspots: [
      { x: 45, y: 55, productId: "chic-summer-linen-dress", title: "Linen Midi Dress", price: "$48.00" },
      { x: 55, y: 25, productId: "retro-polarized-sunglasses", title: "Vintage Sunglasses", price: "$14.99" }
    ]
  },
  "clean-kitchen-organization": {
    slug: "clean-kitchen-organization",
    title: "Modern Kitchen & Pantry Organization Hacks That Save Counter Space",
    description: "Struggling with kitchen clutter? Discover the most aesthetic and functional spice organization racks and utility utility shelves.",
    publishDate: "June 1, 2026",
    readTime: "4 min read",
    category: "Home & Utility Organization",
    bannerImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A clean kitchen leads to a clear mind. When meal prepping, having a dedicated system for spices, utensils, and pantry jars keeps you organized and focused.",
      "We look at Pinterest's highly growing kitchen refresh items, evaluating modern spice drawer layouts alongside aesthetic laundry hampers to bring order to your home."
    ],
    products: [
      {
        id: "magnetic-spice-rack",
        name: "Minimalist Magnetic Kitchen Spice Organizer Rack",
        brand: "Wayfair Home",
        price: "$24.99",
        originalPrice: "$34.99",
        couponCode: "SAVE10",
        affiliateUrl: "https://promoregistry.com/go/aliexpress",
        imageUrl: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=600&q=80",
        description: "A heavy-duty magnetic shelf that attaches securely to the side of your refrigerator or metal walls. Keeps frequently used spices within easy arm's reach.",
        rating: 4.9,
        reviewsCount: 320,
        savingsText: "SAVE $10",
        pros: [
          "Super strong magnets hold up to 10 lbs securely",
          "Includes 4 removable hook attachments for towels",
          "Made from rust-resistant powder-coated steel"
        ],
        cons: [
          "Only adheres to magnetic metal surfaces",
          "Width fits standard size spice bottles only"
        ]
      },
      {
        id: "modern-woven-laundry-hamper",
        name: "Aesthetic Woven Canvas Laundry Basket & Hamper",
        brand: "AliExpress Home",
        price: "$19.99",
        originalPrice: "$29.99",
        couponCode: "ALSAVE12",
        affiliateUrl: "https://promoregistry.com/go/aliexpress",
        imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        description: "A durable woven utility basket made from premium cotton ropes. Features elegant handles and a neutral color scheme that fits modern bathrooms.",
        rating: 4.7,
        reviewsCount: 250,
        savingsText: "SAVE $10",
        pros: [
          "Large capacity holds up to two full laundry loads",
          "Collapsible structure is easy to pack and store",
          "Sturdy double-stitched leather handle grips"
        ],
        cons: [
          "Arrives folded and takes a few days to regain round shape",
          "Not waterproof, damp items should be aired out"
        ]
      }
    ],
    faqs: [
      {
        question: "Can I mount the magnetic spice rack on dry-walls?",
        answer: "The rack relies purely on magnetic force. To mount on wood or dry-walls, you must use the provided screw-fasteners included inside the package."
      },
      {
        question: "Is the laundry basket machine-washable?",
        answer: "We recommend spot-cleaning with a wet soapy cloth. If machine washed, use a delicate cycle and lay flat to dry to avoid losing structure."
      }
    ],
    hotspots: [
      { x: 40, y: 45, productId: "magnetic-spice-rack", title: "Magnetic Spice Shelf", price: "$24.99" },
      { x: 60, y: 70, productId: "modern-woven-laundry-hamper", title: "Woven Utility Basket", price: "$19.99" }
    ]
  }
};
