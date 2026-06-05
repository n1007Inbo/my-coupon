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
      },
      {
        question: "Can I use multiple promo codes on Target?",
        answer: "Target usually allows one promotional discount code per checkout session. Make sure to choose the coupon that gives you the highest dollar savings."
      }
    ],
    hotspots: [
      {
        x: 45,
        y: 65,
        productId: "maternity-stroller-travel",
        title: "Aesthetic Premium Stroller",
        price: "$189.99"
      },
      {
        x: 75,
        y: 35,
        productId: "organic-tallow-glow",
        title: "Organic Tallow Skin Balm",
        price: "$34.00"
      }
    ]
  }
};
