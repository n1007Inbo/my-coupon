const fs = require('fs');
const path = require('path');

const filePath = 'C:\\Users\\rdp\\.gemini\\antigravity\\brain\\db8d512c-a2ad-4a1d-bd3c-dd024ee368da\\.system_generated\\steps\\788\\content.md';

try {
  const html = fs.readFileSync(filePath, 'utf8');
  
  // Extract all occurrences of MuiTypography-h6 headings (coupon titles)
  const h6Regex = /<div class="[^"]*MuiTypography-h6[^"]*">([^<]+)<\/div>/g;
  let match;
  const titles = [];
  while ((match = h6Regex.exec(html)) !== null) {
    titles.push(match[1].trim());
  }

  // Extract all occurrences of descriptions
  // Looking for descriptive content
  console.log('--- EXTRACTED COUPON TITLES ---');
  titles.forEach((title, idx) => {
    console.log(`${idx + 1}. ${title}`);
  });
} catch (err) {
  console.error('Error reading or parsing file:', err);
}
