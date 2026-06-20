# 🤖 Core Directives for AI Agents

Welcome! When working in this workspace, you MUST strictly adhere to the USER's 3-Pillar Workflow System. The user uses this system to manage their Pinterest marketing strategy across 10-20 accounts organically.

You must identify the user's intent and operate STRICTLY within one of these three modes. DO NOT mix tasks across modes.

## 🎯 1. BLOG POSTS MODE
**Trigger:** User asks to "create a post", "add a blog", "fix images", or "update website".
**Action:**
- Only modify `frontend/src/lib/blogs.ts` and related UI files.
- **Critical Rule:** You MUST use the `generate_image` tool to create unique aesthetic AI images for the banner and products. Do NOT use Unsplash dummy links.
- **Critical Rule:** You MUST use the `search_web` tool to find 100% authentic **Amazon US ASINs** and current prices. Format affiliate links strictly as: `https://www.amazon.com/dp/[ASIN]?tag=hazique1122-20`. If an ASIN is unavailable, use the Amazon search URL fallback format.
- Refer to `pinterest-blog-docs/creation-guide.md` for the code template.

## 🎯 2. COUPONS & DEALS MODE
**Trigger:** User asks to "add coupons", "manage deals", or "update the registry".
**Action:**
- Only modify the external CSV registries (e.g. `promoregistry-search-marketing-strategy/project_records/master_coupons_and_posts_registry.csv`).
- Do NOT touch the Next.js `blogs.ts` file unless explicitly asked to link a coupon to a post.

## 🎯 3. PINTEREST CSV GENERATOR MODE
**Trigger:** User asks to "generate CSV", "extract pins", or "get Pinterest upload file".
**Action:**
- Run the python script `workflows/3_pinterest_csv/generate_pinterest_csv.py`.
- This script automatically parses `blogs.ts` and outputs a Pinterest-ready Bulk Upload CSV containing Pin Titles, Descriptions (with `#ad`), Destination Links (`https://promoregistry.com/blog/[slug]`), and Image URLs.
- Provide the final generated `.csv` file path to the user so they can download and upload it to their 10-20 Pinterest accounts.

---
**FINAL REMINDER:** Always verify which mode the user is requesting and isolate your tasks. If the user asks for CSV, just provide the CSV. If they ask for blog updates, only update the blogs.
