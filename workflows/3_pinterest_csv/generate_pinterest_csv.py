import re
import csv
import os

# Configuration
BLOGS_FILE_PATH = r"C:\Users\rdp\.gemini\antigravity\scratch\my-coupon\frontend\src\lib\blogs.ts"
OUTPUT_CSV_PATH = r"C:\Users\rdp\.gemini\antigravity\scratch\my-coupon\workflows\3_pinterest_csv\pinterest_bulk_upload.csv"
BASE_URL = "https://promoregistry.com/blog/"

def parse_blogs():
    try:
        with open(BLOGS_FILE_PATH, "r", encoding="utf-8") as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading blogs.ts: {e}")
        return []

    posts = []
    
    # Split by slug blocks roughly
    post_blocks = re.split(r'\n  "([^"]+)": \{', content)
    
    # post_blocks[0] is preamble.
    # Evens are the block contents, Odds are the slugs
    for i in range(1, len(post_blocks), 2):
        slug = post_blocks[i].strip()
        block = post_blocks[i+1]
        
        # Extract title
        title_match = re.search(r'title:\s*"([^"]+)"', block)
        title = title_match.group(1) if title_match else f"Check out this product!"
        
        # Extract description
        desc_match = re.search(r'description:\s*"([^"]+)"', block)
        description = desc_match.group(1) if desc_match else title
        
        # Ensure #ad is in description for compliance
        if "#ad" not in description.lower() and "#affiliate" not in description.lower():
            description += " #ad #findit"

        # Extract Banner Image
        banner_match = re.search(r'bannerImage:\s*"([^"]+)"', block)
        banner_img = banner_match.group(1) if banner_match else ""
        if banner_img and banner_img.startswith("/"):
            banner_img = "https://promoregistry.com" + banner_img

        destination_link = BASE_URL + slug

        # Append the main post as a Pin
        if banner_img:
            posts.append({
                "Title": title,
                "Description": description,
                "Link": destination_link,
                "Image URL": banner_img
            })
            
        # Extract products to make individual pins
        prod_blocks = re.split(r'id:\s*"([^"]+)",', block)
        for j in range(1, len(prod_blocks), 2):
            prod_block = prod_blocks[j+1]
            
            p_name_match = re.search(r'name:\s*"([^"]+)"', prod_block)
            p_name = p_name_match.group(1) if p_name_match else ""
            
            p_desc_match = re.search(r'description:\s*"([^"]+)"', prod_block)
            p_desc = p_desc_match.group(1) if p_desc_match else p_name
            if "#ad" not in p_desc.lower():
                p_desc += " #ad #musthave"
                
            p_img_match = re.search(r'imageUrl:\s*"([^"]+)"', prod_block)
            p_img = p_img_match.group(1) if p_img_match else ""
            if p_img and p_img.startswith("/"):
                p_img = "https://promoregistry.com" + p_img
                
            if p_name and p_img:
                posts.append({
                    "Title": p_name,
                    "Description": f"Find the best deal on {p_name}! {p_desc}",
                    "Link": destination_link,
                    "Image URL": p_img
                })

    return posts

def generate_csv(pins_data):
    if not pins_data:
        print("No pins extracted. Check the blogs.ts format.")
        return

    headers = ["Title", "Description", "Link", "Image URL"]
    
    try:
        with open(OUTPUT_CSV_PATH, "w", newline="", encoding="utf-8") as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=headers)
            writer.writeheader()
            writer.writerows(pins_data)
        print(f"Successfully generated Pinterest CSV with {len(pins_data)} pins!")
        print(f"Saved at: {OUTPUT_CSV_PATH}")
    except Exception as e:
        print(f"Error writing CSV: {e}")

if __name__ == "__main__":
    print("Reading blogs.ts to extract pin data...")
    data = parse_blogs()
    generate_csv(data)
