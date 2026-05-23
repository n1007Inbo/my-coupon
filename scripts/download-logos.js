const fs = require('fs');
const path = require('path');

const logosDir = path.join(__dirname, '..', 'frontend', 'public', 'logos');
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

const stores = [
  { slug: 'amazon' },
  { slug: 'nike' },
  { slug: 'hostinger' },
  { slug: 'adidas' },
  { slug: 'walmart' },
  { slug: 'ebay' },
  { slug: 'target' },
  { slug: 'apple' },
  { slug: 'starbucks' },
  { slug: 'steam' },
  { slug: 'aliexpress' },
  { slug: 'adobe' },
  { slug: 'canva' },
  { slug: 'samsung' },
  { slug: 'nordvpn' },
  { slug: 'lenovo' },
  { slug: 'puma' },
  { slug: 'fiverr' },
  { slug: 'bookingdotcom' },
  { slug: 'udemy' },
  { slug: 'desktronic' },
  { slug: 'tenways' },
  { slug: 'geekbuying' },
  { slug: 'banggood' },
  { slug: 'zaful' },
  { slug: 'dhgate' },
  { slug: 'envato' },
  { slug: 'semrush' },
  { slug: 'namecheap' },
  { slug: 'squarespace' },
  { slug: 'hostgator' },
  { slug: 'bluehost' },
  { slug: 'coursera' },
  { slug: 'skillshare' },
  { slug: 'nordpass' },
  { slug: 'godaddy' },
  { slug: 'gymshark' }
];

async function downloadLogo(store) {
  const dest = path.join(logosDir, `${store.slug === 'bookingdotcom' ? 'bookingcom' : store.slug}.svg`);
  
  // Directly download SVG from jsdelivr Simple Icons (@latest)
  const iconSlug = store.slug;
  const url = `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${iconSlug}.svg`;
  console.log(`Downloading SVG logo for ${store.slug} from ${url}...`);
  try {
    const res = await fetch(url);
    if (res.ok) {
      const text = await res.text();
      fs.writeFileSync(dest, text);
      console.log(`✓ Saved ${store.slug}.svg`);
    } else {
      console.error(`Failed to download ${store.slug} SVG`);
    }
  } catch (err) {
    console.error(`Error downloading ${store.slug}:`, err);
  }
}

async function run() {
  for (const store of stores) {
    await downloadLogo(store);
  }
  console.log('All SVG downloads completed!');
}

run();
