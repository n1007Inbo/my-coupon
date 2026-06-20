import re
import urllib.parse

file_path = r"C:\Users\rdp\.gemini\antigravity\scratch\my-coupon\frontend\src\lib\blogs.ts"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

out_lines = []
current_product_name = None

for line in lines:
    # Match product name
    name_match = re.search(r'name:\s*"([^"]+)",', line)
    if name_match:
        current_product_name = name_match.group(1)
    
    # Match affiliateUrl
    aff_match = re.search(r'affiliateUrl:\s*"([^"]+)",', line)
    if aff_match and current_product_name:
        # Encode the product name for URL
        encoded_name = urllib.parse.quote_plus(current_product_name)
        new_url = f"https://www.amazon.com/s?k={encoded_name}&tag=hazique1122-20"
        
        # Replace the URL in the line
        new_line = re.sub(r'affiliateUrl:\s*"[^"]+"', f'affiliateUrl: "{new_url}"', line)
        out_lines.append(new_line)
        # Reset current_product_name so we don't accidentally replace something else
        current_product_name = None
    else:
        out_lines.append(line)

with open(file_path, "w", encoding="utf-8") as f:
    f.writelines(out_lines)

print("Updated all affiliate URLs in blogs.ts!")
