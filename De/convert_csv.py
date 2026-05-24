import sys
import os
import codecs

src_dir = r"C:\Users\rdp\.gemini\antigravity\scratch\my-coupon\De"
src_file = os.path.join(src_dir, "Campaign report (2).csv")
dst_file = os.path.join(src_dir, "Campaign report (2)_utf8.csv")

try:
    with codecs.open(src_file, 'r', encoding='utf-16le') as f_in:
        content = f_in.read()
    with codecs.open(dst_file, 'w', encoding='utf-8') as f_out:
        f_out.write(content)
    print("Success")
except Exception as e:
    print("Error:", e)
