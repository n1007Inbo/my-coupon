# 🎯 Google Ads - Desktronic UK Campaign Upload Instructions

We have fully updated your campaign configuration:
- **Campaign Status**: Set to **`Paused`** in both import files. When you upload them to Google Ads Editor or the web interface, the campaign will import in a paused state. It will **never** go live automatically. You can review everything and click "Enable" to make it live manually whenever you want!
- **Final URL**: Updated to your exact website URL with `www.`: `https://www.promoregistry.com/store/desktronic-uk`

Both import files are saved in your `De` folder at:
`C:\Users\rdp\.gemini\antigravity\scratch\my-coupon\De\`

---

## ❓ Why do we upload 2 separate CSV files?

In Google Ads architecture, **Keywords** and **Ads (Creative Copy)** are two completely different entities:
1. **`google_ads_keywords.csv`**: This handles your targeting (tells Google *when* to show your ad—i.e., when someone searches for these specific 15 Desktronic exact-match keywords).
2. **`google_ads_responsive_ad.csv`**: This handles your presentation (tells Google *what* to show to the user—i.e., your headlines, descriptions, sub-paths, and the final URL pointing to your store).

While Google Ads Editor allows importing sheets, keeping them in two separate, clean files is the industry standard because:
* **Avoids Mapping Conflicts**: If keywords and ads are in a single sheet, Google Ads Editor gets confused because keywords require columns like `Keyword` and `Match Type` (which ads don't use), and ads require columns like `Headline 1`, `Description 1`, `Final URL` (which keywords don't use).
* **Step-by-Step Control**: Importing the Keywords file first sets up your campaign, ad group, and targeting. Importing the Ads file second attaches the ad copy to that exact campaign/ad group cleanly.

---

## 🚀 How to Import into Google Ads Editor

### Step 1: Import Keywords
1. Open **Google Ads Editor** and select your account.
2. In the left panel, click on **Account** > **Import** > **From file...**
3. Select [google_ads_keywords.csv](file:///C:/Users/rdp/.gemini/antigravity/scratch/my-coupon/De/google_ads_keywords.csv).
4. Google Ads Editor will automatically map the columns (`Campaign`, `Campaign Status`, `Ad Group`, `Keyword`, `Match Type`). Click **Finish and review changes**.
5. Click **Keep** at the top right to save the keywords import.

### Step 2: Import Responsive Search Ad
1. Go to **Account** > **Import** > **From file...**
2. Select [google_ads_responsive_ad.csv](file:///C:/Users/rdp/.gemini/antigravity/scratch/my-coupon/De/google_ads_responsive_ad.csv).
3. Review the column mapping (it maps `Campaign Status`, `Final URL`, `Headline 1-5`, `Description 1-3`, and `Path 1-2` to their correct Google Ads attributes).
4. Click **Finish and review changes** and click **Keep**.

*Note: Since the `Campaign Status` is set to `Paused` in both files, the entire campaign is created as Paused. It will not run until you manually toggle it to Active!*

---

## 🌐 How to Upload via the Web Interface (Google Ads Website)

If you don't have Google Ads Editor installed:
1. Go to your **Google Ads Dashboard** (ads.google.com).
2. Click on **Tools** (spanner icon) > **Bulk Actions** > **Uploads**.
3. Click the blue `+` button.
4. Set source to **Upload a file** and choose **Google Ads templates** or CSV.
5. Upload both CSV files one by one to create your campaign, ad group, keywords, and ads automatically in a paused state!
