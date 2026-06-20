# Developer Guide: Creating New Pinterest Product Blogs

This guide outlines how developers or AI agents can add new posts and product showcases to the system. By following these steps, you can expand the product catalog to 100+ offers without writing any new HTML/CSS.

---

## 🛑 CRITICAL RULES FOR ALL AI AGENTS 🛑
**READ THESE RULES BEFORE CREATING ANY POST:**

1. **NO PLACEHOLDER IMAGES:** Do NOT copy-paste dummy Unsplash URLs. You MUST use the `generate_image` tool to dynamically create 3 unique, aesthetic images for each post:
   - 1 `bannerImage` (a flatlay or lifestyle aesthetic image representing the post category).
   - 2 `imageUrl` product images (one for each product, isolated on a clean aesthetic background).
   - Save these generated images to `frontend/public/images/` and link them appropriately (e.g., `/images/product_name.png`).
2. **STRICTLY AMAZON ASIN LINKS:** Do NOT use Mavely, ConvertSocial, or any other dummy affiliate links. 
   - You MUST use the `search_web` tool to find the exact **Amazon US ASIN** and Live Price for the products.
   - Format the `affiliateUrl` strictly as: `https://www.amazon.com/dp/[ASIN]?tag=hazique1122-20`
   - **Fallback Rule:** If an exact ASIN cannot be verified or the item is out of stock, use the Amazon Search URL format: `https://www.amazon.com/s?k=[Product+Name]&tag=hazique1122-20`

Failure to follow these rules will result in broken sites and lost commission.

---

## 🛠️ Step 1: Open the Blogs Database
All blog posts are driven by a single local database file:
👉 **[src/lib/blogs.ts](file:///C:/Users/rdp/.gemini/antigravity/scratch/github_repos/my-coupon/frontend/src/lib/blogs.ts)**

Open this file and add a new entry to the `BLOGS_DATABASE` record using the TypeScript template below.

---

## 📋 Step 2: Copy-Paste Code Template
Add your new post block inside the `BLOGS_DATABASE` object:

```typescript
"your-article-slug": {
  slug: "your-article-slug",
  title: "Aesthetic Catchy Title for Pinterest",
  description: "Meta description for SEO and Pinterest link previews.",
  publishDate: "June 5, 2026",
  readTime: "4 min read",
  category: "Your Target Niche",
  bannerImage: "/images/your-generated-banner.png", // Must be generated!
  content: [
    "Paragraph 1 introduction to the trend and problem.",
    "Paragraph 2 listing the curated recommendations."
  ],
  products: [
    {
      id: "unique-product-id-1",
      name: "Full Product Name",
      brand: "Merchant Name",
      price: "$99.99", // Must be live Amazon price!
      originalPrice: "$129.99", // Optional
      couponCode: "YOURCODE",
      affiliateUrl: "https://www.amazon.com/dp/B0XYZ123?tag=hazique1122-20", // Must be Amazon!
      imageUrl: "/images/your-generated-product-1.png", // Must be generated!
      description: "Brief review details about the product, features, and why it is trending.",
      rating: 4.9,
      reviewsCount: 154,
      savingsText: "SAVE $30", // Appears in floating card badge
      pros: [
        "First advantage",
        "Second advantage"
      ],
      cons: [
        "First drawback",
        "Second drawback"
      ]
    }
  ],
  faqs: [
    {
      question: "Frequently Asked Question?",
      answer: "Helpful answer to resolve buying friction."
    }
  ],
  hotspots: [
    {
      x: 45, // Horizontal position in % from left of image (0-100)
      y: 65, // Vertical position in % from top of image (0-100)
      productId: "unique-product-id-1",
      title: "Short Pin Title",
      price: "$99.99"
    }
  ]
}
```

---

## 🎯 Step 3: How to Calculate Hotspot Coordinates
The banner image has interactive dots overlaying it. You can place these dots directly on top of specific items in the picture.

1.  **Open the Banner Image:** Look at the visual details of your main image.
2.  **Estimate X & Y Percentages:**
    *   **X Coordinate:** Estimate how far right the item is from the left edge of the image as a percentage. (e.g., center is `50`, far right is `90`).
    *   **Y Coordinate:** Estimate how far down the item is from the top edge of the image as a percentage. (e.g., center is `50`, bottom is `80`).
3.  **Map to Product ID:** Make sure the `productId` in the hotspot matches the `id` of the product in the `products` array so that clicking the hotspot correctly scrolls down to that card.

---

## 📌 Step 4: Verify the New Page
1.  Run the development server locally:
    ```bash
    npm run dev
    ```
2.  Access the URL directly:
    `http://localhost:3000/blog/your-article-slug`
3.  **Quality Check Checklist:**
    *   [ ] Does the banner image load correctly on both PC and mobile?
    *   [ ] Are the hotspot dots aligned with the items in the image?
    *   [ ] Do the coupon copy clicks successfully copy the code and trigger the redirect?
    *   [ ] Is the formatting clean without truncated headings?

---

## 📈 Pinterest CSV Upload Guidelines
When creating your Pinterest scheduling CSV:
*   **Destination Link:** Always point directly to the specific landing page (e.g., `https://promoregistry.com/blog/your-article-slug`).
*   **Keywords:** Include high-intent Pinterest search queries in the pin title and description.
*   **Ad Disclosure:** Include `#affiliate` or `#ad` in the pin description to remain fully compliant with guidelines.
