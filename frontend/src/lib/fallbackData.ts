import { Coupon, Store } from "../components/CouponCard";

// Helper to retrieve beautiful corporate logos dynamically from local SVG files
export const getLogoUrl = (slug: string | undefined | null) => {
  if (!slug || typeof slug !== "string") return undefined;
  
  const logoMap: Record<string, string> = {
  "3-suisses": "/logos/3-suisses.png",
  "adept": "/logos/adept.png",
  "adidas": "/logos/adidas.svg",
  "adobe": "/logos/adobe.svg",
  "afrm": "/logos/afrm.png",
  "alashan-cashmere": "/logos/alashan-cashmere.png",
  "aliexpress": "/logos/aliexpress.svg",
  "amazon": "/logos/amazon.svg",
  "antler": "/logos/antler.png",
  "anycubic": "/logos/anycubic.svg",
  "apple": "/logos/apple.svg",
  "arq8": "/logos/arq8.png",
  "auctmarts": "/logos/auctmarts.png",
  "aviya-mattress-15-600-300-23-july-2026": "/logos/aviya-mattress-15-600-300-23-july-2026.png",
  "babeyond": "/logos/babeyond.png",
  "back-to-the-office": "/logos/back-to-the-office.png",
  "banggood": "/logos/banggood.svg",
  "bluehost": "/logos/bluehost.svg",
  "bookingcom": "/logos/bookingcom.svg",
  "bouquets-by-post": "/logos/bouquets-by-post.svg",
  "bruno-marc-8-100-350-29-july-2026": "/logos/bruno-marc-8-100-350-29-july-2026.png",
  "buy-fencing-direct": "/logos/buy-fencing-direct.png",
  "buybackworld": "/logos/buybackworld.png",
  "cambridge-satchel": "/logos/cambridge-satchel.png",
  "camp-chef": "/logos/camp-chef.png",
  "canva": "/logos/canva.svg",
  "caydo": "/logos/caydo.png",
  "colamy": "/logos/colamy.png",
  "cosori": "/logos/cosori.png",
  "coursera": "/logos/coursera.svg",
  "daisysilk-trade-co-ltd": "/logos/daisysilk-trade-co-ltd.png",
  "desktronic": "/logos/desktronic.svg",
  "dhgate": "/logos/dhgate.svg",
  "displays-outlet-us": "/logos/displays-outlet-us.png",
  "dowinx": "/logos/dowinx.png",
  "ebay": "/logos/ebay.svg",
  "elevated-craft": "/logos/elevated-craft.png",
  "envato": "/logos/envato.svg",
  "eonon": "/logos/eonon.png",
  "eternity-modern": "/logos/eternity-modern.png",
  "everblog": "/logos/everblog.png",
  "evolution-power-tools": "/logos/evolution-power-tools.jpg",
  "eydology": "/logos/eydology.png",
  "fitueyes": "/logos/fitueyes.svg",
  "fiverr": "/logos/fiverr.svg",
  "flextail-5-50-550-23-july-2026": "/logos/flextail-5-50-550-23-july-2026.png",
  "garden-benches": "/logos/garden-benches.png",
  "gardenreet": "/logos/gardenreet.png",
  "geekbuying": "/logos/geekbuying.svg",
  "godaddy": "/logos/godaddy.svg",
  "grab-bags-us": "/logos/grab-bags-us.png",
  "guta-tpms": "/logos/guta-tpms.png",
  "gymshark": "/logos/gymshark.svg",
  "harrys": "/logos/harrys.svg",
  "health-fitness": "/logos/health-fitness.png",
  "helvetus": "/logos/helvetus.svg",
  "himiway-bike": "/logos/himiway-bike.png",
  "hitway": "/logos/hitway.svg",
  "hostgator": "/logos/hostgator.svg",
  "hostinger": "/logos/hostinger.svg",
  "hotel-tonight": "/logos/hotel-tonight.svg",
  "huega-house": "/logos/huega-house.png",
  "im8-health": "/logos/im8-health.png",
  "im8health": "/logos/im8health.jpg",
  "innovet-pet": "/logos/innovet-pet.png",
  "jackery": "/logos/jackery.png",
  "joe-nimble": "/logos/joe-nimble.png",
  "keycense": "/logos/keycense.png",
  "kixies-inc": "/logos/kixies-inc.png",
  "kixies": "/logos/kixies.png",
  "knack-bags-6-200-450-27-july-2026": "/logos/knack-bags-6-200-450-27-july-2026.png",
  "krewe": "/logos/krewe.png",
  "le-permis-libre": "/logos/le-permis-libre.png",
  "lenovo": "/logos/lenovo.svg",
  "levoit": "/logos/levoit.png",
  "lumary": "/logos/lumary.png",
  "maple-prime": "/logos/maple-prime.png",
  "massivemobile": "/logos/massivemobile.svg",
  "midwest-sports-dba-tennis-point": "/logos/midwest-sports-dba-tennis-point.png",
  "mirlux-fr": "/logos/mirlux-fr.png",
  "mirlux": "/logos/mirlux.png",
  "missha-us": "/logos/missha-us.png",
  "montagne-vacances": "/logos/montagne-vacances.png",
  "naghedi": "/logos/naghedi.png",
  "namecheap": "/logos/namecheap.svg",
  "nike": "/logos/nike.svg",
  "nobodys-child": "/logos/nobodys-child.jpg",
  "nordpass": "/logos/nordpass.svg",
  "nordvpn": "/logos/nordvpn.svg",
  "novica-com": "/logos/novica-com.png",
  "nushape": "/logos/nushape.png",
  "okun": "/logos/okun.png",
  "oufer-body-jewelry-15-100-259-25-may-2026": "/logos/oufer-body-jewelry-15-100-259-25-may-2026.png",
  "parc-asterix-fr": "/logos/parc-asterix-fr.webp",
  "pelsbarn": "/logos/pelsbarn.png",
  "performance-golf": "/logos/performance-golf.png",
  "pooky-us": "/logos/pooky-us.png",
  "popilush-2-150-275-27-july-2026": "/logos/popilush-2-150-275-27-july-2026.png",
  "povison": "/logos/povison.png",
  "power-smart": "/logos/power-smart.png",
  "printabout": "/logos/printabout.png",
  "puma": "/logos/puma.svg",
  "reconstitution-solution": "/logos/reconstitution-solution.svg",
  "red-gorilla": "/logos/red-gorilla.png",
  "redusculpt": "/logos/redusculpt.jpg",
  "ridstar": "/logos/ridstar.png",
  "rma-defense": "/logos/rma-defense.png",
  "samsung": "/logos/samsung.svg",
  "sbla": "/logos/sbla.png",
  "seldom-seen-styles": "/logos/seldom-seen-styles.png",
  "semrush": "/logos/semrush.svg",
  "sexy-little-bath-us": "/logos/sexy-little-bath-us.png",
  "shipt": "/logos/shipt.svg",
  "silver-cross": "/logos/silver-cross.png",
  "simkhai": "/logos/simkhai.png",
  "skillshare": "/logos/skillshare.svg",
  "so-soft-beds": "/logos/so-soft-beds.png",
  "speediance": "/logos/speediance.png",
  "squarespace": "/logos/squarespace.svg",
  "starbucks": "/logos/starbucks.svg",
  "steam": "/logos/steam.svg",
  "storeyourboard": "/logos/storeyourboard.png",
  "sunshine-tienda": "/logos/sunshine-tienda.png",
  "suunto": "/logos/suunto.png",
  "swatch": "/logos/swatch.svg",
  "target": "/logos/target.svg",
  "tcksports-us": "/logos/tcksports-us.png",
  "tenways": "/logos/tenways.svg",
  "thermos": "/logos/thermos.png",
  "tilswall": "/logos/tilswall.png",
  "torro": "/logos/torro.png",
  "tribesigns": "/logos/tribesigns.png",
  "tuxmat": "/logos/tuxmat.svg",
  "udemy": "/logos/udemy.svg",
  "ulanzi": "/logos/ulanzi.png",
  "underarmour": "/logos/underarmour.png",
  "urevo": "/logos/urevo.png",
  "walmart": "/logos/walmart.svg",
  "wolfbox": "/logos/wolfbox.svg",
  "xsteel-targets": "/logos/xsteel-targets.svg",
  "young-electric-bikes": "/logos/young-electric-bikes.png",
  "yvette-sports": "/logos/yvette-sports.png",
  "zaful": "/logos/zaful.svg",
  "zeagoo": "/logos/zeagoo.png",
  "zonli-home": "/logos/zonli-home.png"
};
  
  // Custom prefix matching for dynamic sub-stores
  if (slug.startsWith("desktronic-")) return logoMap["desktronic"] || undefined;
  if (slug.startsWith("tenways-")) return logoMap["tenways"] || undefined;
  
  return logoMap[slug] || undefined;
};

// Mock fallback identical dataset
export const FALLBACK_STORES: Store[] = [
  { id: 1, name: "Amazon", slug: "amazon", logo: "https://static.fatcoupon.com/images/20250212/963eec51-b330-4d97-aeb4-b556c81442a9.png", website: "https://amazon.com" },
  { id: 2, name: "Nike", slug: "nike", logo: getLogoUrl("nike"), website: "https://nike.com" },
  { id: 3, name: "Hostinger", slug: "hostinger", logo: getLogoUrl("hostinger"), website: "https://hostinger.com" },
  { id: 4, name: "Adidas", slug: "adidas", logo: getLogoUrl("adidas"), website: "https://adidas.com" },
  { id: 5, name: "Walmart", slug: "walmart", logo: getLogoUrl("walmart"), website: "https://walmart.com" },
  { id: 6, name: "eBay", slug: "ebay", logo: getLogoUrl("ebay"), website: "https://ebay.com" },
  { id: 7, name: "Target", slug: "target", logo: getLogoUrl("target"), website: "https://target.com" },
  { id: 8, name: "Apple", slug: "apple", logo: getLogoUrl("apple"), website: "https://apple.com" },
  { id: 9, name: "Starbucks", slug: "starbucks", logo: getLogoUrl("starbucks"), website: "https://starbucks.com" },
  { id: 10, name: "Steam", slug: "steam", logo: getLogoUrl("steam"), website: "https://steampowered.com" },
  { id: 11, name: "AliExpress", slug: "aliexpress", logo: "https://static.fatcoupon.com/images/20250221/d3bf3cab-4f09-477a-af30-8396f5c39e3a.png", website: "https://aliexpress.com" },
  { id: 12, name: "Adobe", slug: "adobe", logo: getLogoUrl("adobe"), website: "https://adobe.com" },
  { id: 13, name: "Canva", slug: "canva", logo: getLogoUrl("canva"), website: "https://canva.com" },
  { id: 14, name: "Samsung", slug: "samsung", logo: getLogoUrl("samsung"), website: "https://samsung.com" },
  { id: 15, name: "NordVPN", slug: "nordvpn", logo: "https://static.fatcoupon.com/images/20250919/946f1537-5d75-4b3b-860d-2025d4a033d6.png", website: "https://nordvpn.com" },
  { id: 16, name: "Lenovo", slug: "lenovo", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/83a25966-8557-470a-b41e-0ee1f46f949d.png", website: "https://lenovo.com" },
  { id: 17, name: "Puma", slug: "puma", logo: getLogoUrl("puma"), website: "https://puma.com" },
  { id: 18, name: "Fiverr", slug: "fiverr", logo: getLogoUrl("fiverr"), website: "https://fiverr.com" },
  { id: 19, name: "Booking.com", slug: "bookingcom", logo: getLogoUrl("bookingcom"), website: "https://booking.com" },
  { id: 20, name: "Udemy", slug: "udemy", logo: getLogoUrl("udemy"), website: "https://udemy.com" },
  { id: 21, name: "Desktronic UK", slug: "desktronic-uk", logo: getLogoUrl("desktronic-uk"), website: "/go/desktronic-uk" },
  { id: 22, name: "Desktronic US", slug: "desktronic-us", logo: getLogoUrl("desktronic-us"), website: "/go/desktronic-us" },
  { id: 23, name: "Tenways UK", slug: "tenways-uk", logo: getLogoUrl("tenways-uk"), website: "https://tenways.com/pages/uk-store" },
  { id: 24, name: "Tenways US", slug: "tenways-us", logo: getLogoUrl("tenways-us"), website: "https://tenways.com" },
  { id: 25, name: "Geekbuying", slug: "geekbuying", logo: getLogoUrl("geekbuying"), website: "https://geekbuying.com" },
  { id: 26, name: "Banggood", slug: "banggood", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/ec3c0654-57c7-4e65-8f7c-922b2c927d8b.png", website: "https://banggood.com" },
  { id: 27, name: "Zaful", slug: "zaful", logo: getLogoUrl("zaful"), website: "https://zaful.com" },
  { id: 28, name: "MassiveMobile", slug: "massivemobile", logo: getLogoUrl("massivemobile"), website: "https://massivemobile.de" },
  { id: 29, name: "DHgate", slug: "dhgate", logo: getLogoUrl("dhgate"), website: "https://dhgate.com" },
  { id: 30, name: "Envato Elements", slug: "envato", logo: getLogoUrl("envato"), website: "https://elements.envato.com" },
  { id: 31, name: "Semrush", slug: "semrush", logo: getLogoUrl("semrush"), website: "https://semrush.com" },
  { id: 32, name: "Namecheap", slug: "namecheap", logo: getLogoUrl("namecheap"), website: "https://namecheap.com" },
  { id: 33, name: "Squarespace", slug: "squarespace", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/633528f7-4558-4beb-a529-c0db3c622dc6.jpg", website: "https://squarespace.com" },
  { id: 34, name: "HostGator", slug: "hostgator", logo: getLogoUrl("hostgator"), website: "https://hostgator.com" },
  { id: 35, name: "Bluehost", slug: "bluehost", logo: getLogoUrl("bluehost"), website: "https://bluehost.com" },
  { id: 36, name: "Coursera", slug: "coursera", logo: "https://static.fatcoupon.com/images/20260723/1c4a98c6-31a8-484c-8f58-cde7e7fff2ef.png", website: "https://coursera.org" },
  { id: 37, name: "Skillshare", slug: "skillshare", logo: getLogoUrl("skillshare"), website: "https://skillshare.com" },
  { id: 38, name: "NordPass", slug: "nordpass", logo: "https://static.fatcoupon.com/images/20251030/adff46e2-ec99-4b7b-81c5-93419533e2e9.png", website: "https://nordpass.com" },
  { id: 39, name: "GoDaddy", slug: "godaddy", logo: getLogoUrl("godaddy"), website: "https://godaddy.com" },
  { id: 40, name: "Gymshark", slug: "gymshark", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/411e4868-cbe8-462b-b166-dfb2f483fc12.png", website: "https://gymshark.com" },
  { id: 41, name: "Desktronic NL", slug: "desktronic-nl", logo: getLogoUrl("desktronic-nl"), website: "/go/desktronic-nl" },
  { id: 42, name: "Parc Astérix FR", slug: "parc-asterix-fr", logo: getLogoUrl("parc-asterix-fr"), website: "https://litl.si/Tlxjk" },
  { id: 43, name: "Bouquets by Post", slug: "bouquets-by-post", logo: getLogoUrl("bouquets-by-post"), website: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 44, name: "IM8 Health US", slug: "im8health", logo: getLogoUrl("im8health"), website: "https://www.im8health.com/METHEW29111" },
  { id: 45, name: "Redu Sculpt US", slug: "redusculpt", logo: getLogoUrl("redusculpt"), website: "https://www.redusculpt.com/METHEW46097" },
  { id: 46, name: "Evolution Power Tools US", slug: "evolution-power-tools", logo: getLogoUrl("evolution-power-tools"), website: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 47, name: "Maple Prime US", slug: "maple-prime", logo: getLogoUrl("maple-prime"), website: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 48, name: "Nobody's Child US", slug: "nobodys-child", logo: getLogoUrl("nobodys-child"), website: "https://www.nobodyschild.com/" },
  { id: 49, name: "Anycubic US", slug: "anycubic-us", logo: getLogoUrl("anycubic-us"), website: "/go/anycubic-us" },
  { id: 50, name: "Hitway UK", slug: "hitway-uk", logo: getLogoUrl("hitway-uk"), website: "/go/hitway-uk" },
  { id: 51, name: "Wolfbox UK", slug: "wolfbox-uk", logo: getLogoUrl("wolfbox-uk"), website: "/go/wolfbox-uk" },
  { id: 52, name: "Fitueyes UK", slug: "fitueyes-uk", logo: getLogoUrl("fitueyes-uk"), website: "/go/fitueyes-uk" },
  { id: 53, name: "Helvetus US", slug: "helvetus", logo: getLogoUrl("helvetus"), website: "/go/helvetus" },
  { id: 54, name: "Xsteel Targets US", slug: "xsteel-targets", logo: getLogoUrl("xsteel-targets"), website: "/go/xsteel-targets" },
  { id: 55, name: "Reconstitution Solution US", slug: "reconstitution-solution", logo: getLogoUrl("reconstitution-solution"), website: "/go/reconstitution-solution" },
  { id: 56, name: "TuxMat US", slug: "tuxmat-us", logo: getLogoUrl("tuxmat-us"), website: "/go/tuxmat-us" },
  { id: 57, name: "Hotel Tonight US", slug: "hotel-tonight", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/3016abca-9e8f-45dc-b8ad-ba7211283f10.png", website: "/go/hotel-tonight" },
  { id: 58, name: "Swatch US", slug: "swatch", logo: getLogoUrl("swatch"), website: "/go/swatch" },
  { id: 59, name: "Harry's US", slug: "harrys", logo: "https://static.fatcoupon.com/images/20250610/f7a565a7-357a-40b2-b33e-0fe7e94a5118.png", website: "/go/harrys" },
  { id: 60, name: "Shipt US", slug: "shipt", logo: "https://static.fatcoupon.com/images/20260309/37fa6143-75ba-46af-8b6d-fb29eae321fa.png", website: "/go/shipt" }
,
  { id: 61, name: "Harry's", slug: "harrys", logo: "https://static.fatcoupon.com/images/20250610/f7a565a7-357a-40b2-b33e-0fe7e94a5118.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=20715&url=http%3A%2F%2Fwww.harrys.com%2F" },
  { id: 62, name: "Shipt", slug: "shipt", logo: "https://static.fatcoupon.com/images/20260309/37fa6143-75ba-46af-8b6d-fb29eae321fa.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9&url=https%3A%2F%2Fwww.shipt.com%2F" },
  { id: 63, name: "Meowant", slug: "meowant", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/23e4ce85-3019-41ce-b8d8-5d2c26291e3d.jpg", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=20598&url=https%3A%2F%2Fmeowant.com%2F" },
  { id: 64, name: "Shelly EU &", slug: "shelly-eu-", logo: "https://static.fatcoupon.com/images/20250221/f53b1a7e-51bd-48de-a5d4-a1b9fa72f3e5.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=51767&url=https%3A%2F%2Fwww.shelly.com%2F" },
  { id: 65, name: "Larine Company", slug: "larine-company", logo: "https://static.fatcoupon.com/images/20260227/c58896ef-4e91-433f-ae17-8525d34e265a.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71455&url=https%3A%2F%2Fbuylarine.com%2F" },
  { id: 66, name: "Spothero", slug: "spothero", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/1a8dfaa6-0b43-466f-8726-c2e43bae6f55.jpg", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=11937&url=https%3A%2F%2Fspothero.com%2F" },
  { id: 67, name: "Taylor Made", slug: "taylor-made", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/5a4b5198-7805-4a43-946f-24928d18d742.gif", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16225&url=https%3A%2F%2Fwww.taylormadegolf.com%2F" },
  { id: 68, name: "Choice Hotels", slug: "choice-hotels", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/27021490-8224-4667-bd7f-3d37e9f7f5d3.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12844&url=https%3A%2F%2Fwww.choicehotels.com%2F" },
  { id: 69, name: "Meshy", slug: "meshy", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/d5b5190d-ed69-4ea4-ae37-e3e012a323df.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=24103&url=https%3A%2F%2Fwww.meshy.ai%2F" },
  { id: 70, name: "Kate Spade", slug: "kate-spade", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/595406f5-57b7-4fee-8425-e4e5a2054533.jpg", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=15971&url=https%3A%2F%2Fwww.katespade.com" },
  { id: 71, name: "Hilo", slug: "hilo", logo: "https://static.fatcoupon.com/images/20260720/211811dd-b33a-4de6-b705-85fddbeecb7e.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74602&url=https%3A%2F%2Fus.hilo.com" },
  { id: 72, name: "LegalZoom", slug: "legalzoom", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/f3fd3cf8-e57a-4f16-97c1-709e977bffd9.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27814&url=https%3A%2F%2Fwww.legalzoom.com%2F" },
  { id: 73, name: "Bedsure", slug: "bedsure", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/cc026825-6c99-4e0c-9824-19f98ff2ca84.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=11862&url=https%3A%2F%2Fbedsurehome.com%2F" },
  { id: 74, name: "Dewenwils", slug: "dewenwils", logo: "https://static.fatcoupon.com/images/20260226/a84ccef0-b31c-4004-80f6-a76c881dfb62.jpg", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71441&url=https%3A%2F%2Fdewenwils.com%2F" },
  { id: 75, name: "TORRAS", slug: "torras", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/20241223/d0e370ac-753d-4531-abfb-2b9dc8456ab7.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=30155&url=https%3A%2F%2Ftorraslife.com%2F" },
  { id: 76, name: "Jack Rogers", slug: "jack-rogers", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/ba24f5ff-df1d-41df-8a41-19f666e89ed5.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=14334&url=https%3A%2F%2Fwww.jackrogersusa.com" },
  { id: 77, name: "Suzanne Somers", slug: "suzanne-somers", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/8e78c6da-2ce9-4fff-97ec-ede20a7a1c56.webp", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12257&url=http%3A%2F%2Fsuzannesomers.com%2F" },
  { id: 78, name: "The Wine Collective", slug: "the-wine-collective", logo: "https://static.fatcoupon.com/images/20250922/3214b22f-6513-4f23-a314-26b149181d38.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43376&url=https%3A%2F%2Fwww.thewinecollective.com.au%2F" },
  { id: 79, name: "Sleepyhead", slug: "sleepyhead", logo: "https://static.fatcoupon.com/images/20260520/8a4484e4-c2f1-4e3f-ae42-ea4b50e2aa83.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73422&url=https%3A%2F%2Fsleepyheadusa.com%2F" },
  { id: 80, name: "Sperry", slug: "sperry", logo: "https://static.skimlinks.com/images/merchant_logos/advertiser_logo_13764.gif", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=1824&url=https%3A%2F%2Fwww.sperry.com%2Fus%2Fen_US" },
  { id: 81, name: "Evelyn & Bobbie", slug: "evelyn-bobbie", logo: "https://static.fatcoupon.com/images/20250910/6985adf0-6b89-4a6e-ba30-d865af1abe86.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=65342&url=https%3A%2F%2Fevelynbobbie.com" },
  { id: 82, name: "1ink.com", slug: "1inkcom", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/b6552d45-17b4-49a1-b8fd-41fa2555a014.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=14311&url=https%3A%2F%2Fwww.1ink.com" },
  { id: 83, name: "Flick VPN", slug: "flick-vpn", logo: "https://static.fatcoupon.com/images/20260627/b0b6d435-4be7-477e-af38-9dd1c845d8d1.jpg", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73824&url=https%3A%2F%2Fget.flickvpn.com%2F" },
  { id: 84, name: "Champion Life Insurance", slug: "champion-life-insurance", logo: "https://static.fatcoupon.com/images/20260514/3b6b0cff-fa01-43b6-be76-17d9963e8c33.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73160&url=https%3A%2F%2Fchampionlifeinsurance.com" },
  { id: 85, name: "Remedy Meds", slug: "remedy-meds", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/4473b5dc-35d6-44d6-bc5c-5d322a8ab3d5.jpeg", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27722&url=https%3A%2F%2Fremedymeds.com%2F" },
  { id: 86, name: "Norton LifeLock", slug: "norton-lifelock", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/cd81c455-1ca5-4cc1-a79c-6ceda77268c5.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=263&url=https%3A%2F%2Flifelock.norton.com%2Foffers" },
  { id: 87, name: "Network Solutions", slug: "network-solutions", logo: "https://static.fatcoupon.com/images/20251031/f6600915-33f0-469a-be3a-cc6683333c75.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=69440&url=https%3A%2F%2Fwww.networksolutions.com%2F" },
  { id: 88, name: "Cars24", slug: "cars24", logo: "https://static.fatcoupon.com/images/20260729/2192cf63-2ca9-4320-a0cd-f22e10a0cf05.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=7188&url=https%3A%2F%2Fwww.cars24.com.au%2F" },
  { id: 89, name: "NexBurn", slug: "nexburn", logo: "https://static.fatcoupon.com/images/20260730/5dd74a0c-623b-43a0-9bd8-e0319b528d48.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74824&url=https%3A%2F%2Fnexburn.mycartpanda.com%2F" },
  { id: 90, name: "Asknow", slug: "asknow", logo: "https://static.fatcoupon.com/images/20260526/90076702-9b8b-4a34-8d48-f0d826c94435.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=33153&url=https%3A%2F%2Fasknow.com%2F" },
  { id: 91, name: "Lyca Mobile (US)", slug: "lyca-mobile-us", logo: "https://static.fatcoupon.com/images/20260723/81b678d3-dbde-4fd8-9348-eee3670e4593.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74645&url=https%3A%2F%2Fwww.lycamobile.us%2F" },
  { id: 92, name: "Factor", slug: "factor", logo: "https://static.fatcoupon.com/images/20260626/352b27ab-59bd-47bb-8a01-4e19a0609c88.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74290&url=https%3A%2F%2Fwww.factormeals.ca%2Fplans" },
  { id: 93, name: "American Dream Auto Protect", slug: "american-dream-auto-protect", logo: "https://static.fatcoupon.com/images/20260727/c5facd9f-a5bb-4830-8b1a-b6e365b3e491.jpg", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=37441&url=https%3A%2F%2Famericandreamautoprotect.com%2Fcaquote3" },
  { id: 94, name: "Bark Parental Controls", slug: "bark-parental-controls", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/3d5acde1-8ca8-4565-924c-1fd1299bbbe7.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=26703&url=https%3A%2F%2Fwww.bark.us%2F" },
  { id: 95, name: "Aura - Parental Controls", slug: "aura-parental-controls", logo: "https://static.fatcoupon.com/images/20260727/b22b8df7-80a3-4433-9968-c953ea8e1f91.jpg", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=34925&url=https%3A%2F%2Fbuy.aura.com%2Fparental-controls-3-iphone-android" },
  { id: 96, name: "Dropps.com", slug: "droppscom", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/27ed3949-44b5-4818-a58a-5cdbdb395e57.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=5792&url=https%3A%2F%2Fdropps.com%2F" },
  { id: 97, name: "Greencross Vets", slug: "greencross-vets", logo: "https://static.fatcoupon.com/images/20250902/bb4c2c55-d4ec-40ae-9b19-effe60a0a973.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43039&url=https%3A%2F%2Fwww.greencrossvets.com.au%2F" },
  { id: 98, name: "Bullion", slug: "bullion", logo: "https://static.fatcoupon.com/images/20260526/02a80bde-df2e-452c-87a5-1878adeba0ee.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73531&url=https%3A%2F%2Fwww.bullion.com%2F" },
  { id: 99, name: "DeleteMe", slug: "deleteme", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/d5620052-6a48-4cb5-8654-59ec25dfeb8a.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=11942&url=https%3A%2F%2Fjoindeleteme.com%2F" },
  { id: 100, name: "College Ave", slug: "college-ave", logo: "https://static.fatcoupon.com/images/20260715/e6aac9b2-cf2c-44f9-9b54-27de299e84f8.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=34794&url=https%3A%2F%2Fwww.collegeave.com%2F" },
  { id: 101, name: "Select Home Warranty", slug: "select-home-warranty", logo: "https://static.fatcoupon.com/images/20260727/8ecfa1c3-60bd-41af-8186-106265d681e1.jpg", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=54780&url=https%3A%2F%2Fshw.selecthomewarranty.com%2Fbest-in-class-home-warranty-coverage" },
  { id: 102, name: "Insurify", slug: "insurify", logo: "https://static.fatcoupon.com/images/20260324/48614a82-63e7-4a2a-9dc0-2b2de597a473.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=18501&url=https%3A%2F%2Finsurify.com%2F" },
  { id: 103, name: "Compare.com", slug: "comparecom", logo: "https://static.fatcoupon.com/images/20260717/1660ba19-8d0d-4f9a-91d6-d39ba759baf4.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74580&url=https%3A%2F%2Fwww.compare.com%2F" },
  { id: 104, name: "HomeSafe", slug: "homesafe", logo: "https://static.fatcoupon.com/images/20260727/190f1aef-1f7c-4d99-b4f5-ac77b0b6a33e.jpg", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=36162&url=https%3A%2F%2Fhomesafe.com%2Fget-free-quote%2F" },
  { id: 105, name: "The Times Literary Supplement", slug: "the-times-literary-supplement", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/20241118/dc049e60-3147-45f6-9f6c-452ce9f82bc5.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=28992&url=https%3A%2F%2Fwww.the-tls.co.uk%2Fbuy%2F" },
  { id: 106, name: "DaBella", slug: "dabella", logo: "https://static.fatcoupon.com/images/20260714/1037d6c4-08bc-416d-a05a-b837c3e25351.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74509&url=https%3A%2F%2Fdabellaremodeling.com" },
  { id: 107, name: "Income Insurance Limited", slug: "income-insurance-limited", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/e5a0fc89-fc44-4e8e-88a9-1fd30a7e0f61.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27019&url=https%3A%2F%2Fwww.income.com.sg%2F" },
  { id: 108, name: "Squarespace", slug: "squarespace", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/633528f7-4558-4beb-a529-c0db3c622dc6.jpg", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16489&url=https%3A%2F%2Fwww.squarespace.com%2F" },
  { id: 109, name: "Claim Climbers", slug: "claim-climbers", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/68a0b1f6-4d86-4a77-99a0-29e8d653b34b.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27475&url=https%3A%2F%2Fstart.claimclimbers.com%2F" },
  { id: 110, name: "Patriot Frontline", slug: "patriot-frontline", logo: "https://static.fatcoupon.com/images/20260321/8857c156-ca36-4758-9e9f-7e77a6ef0bff.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43314&url=https%3A%2F%2Fpatriotfrontline.com%2Fplans" }
,
  { id: 111, name: "DocSearch - GLP-1", slug: "docsearch-glp-1", logo: "https://static.fatcoupon.com/images/20260717/d150118d-00a2-44f0-b753-3731225a03a0.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=32918&url=https%3A%2F%2Fdocsearch.com%2Ftreatment-plans-affiliates%2F" },
  { id: 112, name: "DocSearch", slug: "docsearch", logo: "https://static.fatcoupon.com/images/20260716/eb88514e-2239-4e94-9c8d-10a6a623d9ae.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74538&url=https%3A%2F%2Fdocsearch.com%2F" },
  { id: 113, name: "Lemonaid Health", slug: "lemonaid-health", logo: "https://static.fatcoupon.com/images/20260320/81b89afa-e36d-41aa-a7cd-c74b51d5e3da.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=38532&url=https%3A%2F%2Fwww.lemonaidhealth.com%2F" },
  { id: 114, name: "Global Trade Rates", slug: "global-trade-rates", logo: "https://static.fatcoupon.com/images/20260603/93deb340-2ccd-4d30-8202-27dfcc1b11a1.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73651&url=https%3A%2F%2Fglobaltraderates.co.uk%2F" },
  { id: 115, name: "Flashcloud", slug: "flashcloud", logo: "https://static.fatcoupon.com/images/20260603/ddc54ff3-c947-403a-ba71-64f2f9c87a16.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73658&url=https%3A%2F%2Fflashcloud.com%2F" },
  { id: 116, name: "Macroplate", slug: "macroplate", logo: "https://static.fatcoupon.com/images/20260605/10f9632f-0677-419e-b4fc-4b95e7394c33.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73872&url=https%3A%2F%2Fapp.macro-plate.com%2F" },
  { id: 117, name: "MINT home", slug: "mint-home", logo: "https://static.fatcoupon.com/images/20260608/c058f612-239b-4f3b-8152-b53d0300f618.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73900&url=https%3A%2F%2Fminthome.shop%2F" },
  { id: 118, name: "Artlist", slug: "artlist", logo: "https://static.fatcoupon.com/images/20260612/cc26b4d2-ba47-4f34-a195-72391c9aae12.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73951&url=https%3A%2F%2Fartlist.io%2F" },
  { id: 119, name: "Remedy Place", slug: "remedy-place", logo: "https://static.fatcoupon.com/images/20260703/516c1572-17ca-4a24-857d-d56f918cc90f.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74357&url=https%3A%2F%2Fwww.remedyplace.com%2F" },
  { id: 120, name: "Neu Money No-Interest Credit Card", slug: "neu-money-no-interest-credit-card", logo: "https://static.fatcoupon.com/images/20260623/5b15aedf-c9de-4cef-8444-58a5e427ef4d.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74184&url=https%3A%2F%2Fgetneucard.com%2Fno-interest" },
  { id: 121, name: "Neu Money No-Annual-Fee Credit Card", slug: "neu-money-no-annual-fee-credit-card", logo: "https://static.fatcoupon.com/images/20260623/b6454755-2b60-4b12-90f8-5728faa187b9.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74183&url=https%3A%2F%2Fgetneucard.com%2Fno-annual-fee" },
  { id: 122, name: "Qtrade", slug: "qtrade", logo: "https://static.fatcoupon.com/images/20260428/249fd661-147c-4dbf-9c23-94d27c24cc54.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72831&url=https%3A%2F%2Fwww.qtrade.ca%2Fen%2Finvestor.html%3Fpartner%3Dfintelconnect" },
  { id: 123, name: "Neo Financial", slug: "neo-financial", logo: "https://static.fatcoupon.com/images/20260428/6ee05966-62b6-46eb-9ab6-31789ab77794.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72830&url=https%3A%2F%2Fwww.neofinancial.com%2F" },
  { id: 124, name: "Spring Financial", slug: "spring-financial", logo: "https://static.fatcoupon.com/images/20260428/47132bf4-21cf-48aa-ac70-53f00aff3b7c.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72832&url=https%3A%2F%2Fwww.springfinancial.ca" },
  { id: 125, name: "AmazingClubs", slug: "amazingclubs", logo: "https://static.fatcoupon.com/images/20260320/e8a50558-32be-49f7-8281-bc3893c687de.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71732&url=https%3A%2F%2Fwww.amazingclubs.com%2F" },
  { id: 126, name: "McAfee", slug: "mcafee", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/64ec8055-dab3-47fe-9a57-e4f9da46935f.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16719&url=https%3A%2F%2Fwww.mcafee.com%2F" },
  { id: 127, name: "Endurance", slug: "endurance", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/962544d1-e6a1-400d-8b3a-cf891d182ee2.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16764&url=https%3A%2F%2Fwww.endurancewarranty.com%2F" },
  { id: 128, name: "Fanatiz - Sports Streaming", slug: "fanatiz-sports-streaming", logo: "https://static.fatcoupon.com/images/20260714/5931596e-ad51-47e0-9be1-7527d17de98c.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43720&url=https%3A%2F%2Fwww.fanatiz.com%2F" },
  { id: 129, name: "Quicken", slug: "quicken", logo: "https://static.fatcoupon.com/images/20260626/2f3c05d6-e8cd-485e-b11c-1d7ff2d2bfbd.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=4138&url=https%3A%2F%2Fwww.quicken.com%2F" },
  { id: 130, name: "Thimble", slug: "thimble", logo: "https://static.fatcoupon.com/images/20260703/95172e22-ebd6-4c75-b213-3d1b9a1d9008.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=42942&url=https%3A%2F%2Fwww.thimble.com%2F" },
  { id: 131, name: "Strype Wellness", slug: "strype-wellness", logo: "https://static.fatcoupon.com/images/20260630/54bfa971-429b-475a-bf3a-25a7f2e4a211.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74321&url=https%3A%2F%2Fstrypestrips.com%2F" },
  { id: 132, name: "Western Union North America", slug: "western-union-north-america", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/6d16cbf6-58c1-454d-827a-9d433401f1de.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=84&url=https%3A%2F%2Fwww.westernunion.com%2F" },
  { id: 133, name: "Swooped", slug: "swooped", logo: "https://static.fatcoupon.com/images/20260629/d78a3c6a-c75f-4cf0-84a7-fdc1a8343c16.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74306&url=https%3A%2F%2Fswooped.co%2F" },
  { id: 134, name: "Mighties", slug: "mighties", logo: "https://static.fatcoupon.com/images/20260626/749ee865-17ae-4b2a-84d4-ee3368bb33e4.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=19385&url=https%3A%2F%2Fwww.mighties.com%2Fpages%2Fanytime-gu" },
  { id: 135, name: "AKKO", slug: "akko", logo: "https://static.fatcoupon.com/images/20260528/24315a2b-66f5-4f58-8607-1e423922c784.jpg", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=47646&url=https%3A%2F%2Fquote.getakko.com%2F" },
  { id: 136, name: "HelloPrenup", slug: "helloprenup", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/5083eccb-1449-44bf-baad-4fe00dc828ea.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=26513&url=https%3A%2F%2Fhelloprenup.com%2F" },
  { id: 137, name: "NewSelf Ventures", slug: "newself-ventures", logo: "https://static.fatcoupon.com/images/20260617/83dc9eb1-d287-414a-a51a-5548486dcf86.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=13519&url=https%3A%2F%2Fwww.newself.com%2F" },
  { id: 138, name: "OneTravel", slug: "onetravel", logo: "https://static.fatcoupon.com/images/20250509/a31af550-1c8b-4580-8e09-0a9dae751986.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12412&url=https%3A%2F%2Fwww.onetravel.com%2F" },
  { id: 139, name: "Splitero", slug: "splitero", logo: "https://static.fatcoupon.com/images/20250626/b8aaea99-e5eb-45b7-908c-f6eb7c0e7fe0.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=61356&url=https%3A%2F%2Fwww.splitero.com%2F" },
  { id: 140, name: "RVezy", slug: "rvezy", logo: "https://static.fatcoupon.com/images/20251219/4a9cf402-c3e0-4ddc-96bd-beda9d9a1f17.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=45540&url=https%3A%2F%2Fwww.rvezy.com" },
  { id: 141, name: "HintMeds Inc", slug: "hintmeds-inc", logo: "https://static.fatcoupon.com/images/20250919/3878fe34-c598-4b54-9ae7-130ca7faf527.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=67344&url=https%3A%2F%2Fwww.hintmeds.com%2Ftadalafil-oral-spray" },
  { id: 142, name: "Legendz", slug: "legendz", logo: "https://static.fatcoupon.com/images/20260602/b256052f-037d-460d-ac75-46455f6659d9.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=34642&url=https%3A%2F%2Fwww.legendz.com%2F" },
  { id: 143, name: "SmartCredit", slug: "smartcredit", logo: "https://static.fatcoupon.com/images/20250324/5ea624ad-18d0-4d02-8269-8659e47106bd.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=57463&url=https%3A%2F%2Fwww.smartcredit.com%2F" },
  { id: 144, name: "Upwork Freelance Marketplace", slug: "upwork-freelance-marketplace", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/6c6bbe1d-0b38-4715-a623-f5f7509ca19e.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=1017&url=https%3A%2F%2Fwww.upwork.com%2Ftalent-marketplace%2F" },
  { id: 145, name: "Neo CA - Credit Card", slug: "neo-ca-credit-card", logo: "https://static.fatcoupon.com/images/20260520/b9d4a97e-7477-49da-a01f-78c986115c2d.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=52893&url=https%3A%2F%2Fwww.neofinancial.com%2Fstandard-credit%2Faffiliate" },
  { id: 146, name: "Whitebridge", slug: "whitebridge", logo: "https://static.fatcoupon.com/images/20250902/aabcc976-9763-49a8-a2cd-ee6117570ffb.jpg", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=31138&url=http%3A%2F%2Fwhitebridge.ai%2F" },
  { id: 147, name: "Winona", slug: "winona", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/7351f1a5-c4c4-4001-8c09-1fb52511d707.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=26870&url=https%3A%2F%2Fbywinona.com%2F" },
  { id: 148, name: "BINGE Movies & TV", slug: "binge-movies-tv", logo: "https://static.fatcoupon.com/images/20260429/83b60208-10e8-4c3d-84ff-baeed331d869.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43471&url=https%3A%2F%2Fwww.trybinge.tv%2F" },
  { id: 149, name: "ECCO", slug: "ecco", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/58ff2eba-e41f-4e38-af9b-a133f03de8ce.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9141&url=https%3A%2F%2Fus.ecco.com" },
  { id: 150, name: "TryHackMe", slug: "tryhackme", logo: "https://static.fatcoupon.com/images/20260420/0b2f2eff-0d04-4fe4-8009-969352866b47.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71341&url=https%3A%2F%2Ftryhackme.com%2F" },
  { id: 151, name: "Flashark", slug: "flashark", logo: "https://static.fatcoupon.com/images/20250312/c82d394c-61b8-494e-822a-a0e0cc893b2b.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=10848&url=https%3A%2F%2Fflasharkracing.com%2F" },
  { id: 152, name: "Backcountry", slug: "backcountry", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/ca91df5c-72cc-44c7-8d8a-689f4c0c071e.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=10401&url=https%3A%2F%2Fwww.backcountry.com" },
  { id: 153, name: "Neiman Marcus", slug: "neiman-marcus", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/2ab847ba-bb8d-4bc6-92ed-d7797f982ba2.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=4950&url=https%3A%2F%2Fwww.neimanmarcus.com" },
  { id: 154, name: "Saks Fifth Avenue", slug: "saks-fifth-avenue", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/3f9605fb-9042-41fd-956c-7dc68554fd65.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9094&url=https%3A%2F%2Fwww.saksfifthavenue.com" },
  { id: 155, name: "xSuit", slug: "xsuit", logo: "https://static.fatcoupon.com/images/20260314/a7c48e4d-0951-43d2-81df-4b85f444aa39.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71606&url=https%3A%2F%2Fxsuit.com%2F" },
  { id: 156, name: "G-Star Raw", slug: "g-star-raw", logo: "https://static.fatcoupon.com/images/20260120/a275c862-200a-4ffe-822d-113563e554ba.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=2973&url=https%3A%2F%2Fwww.g-star.com%2Fen_us" },
  { id: 157, name: "Wildflower Cases", slug: "wildflower-cases", logo: "https://static.fatcoupon.com/images/20250904/497a5229-b995-42ab-b296-ac09b1a84f58.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=67199&url=https%3A%2F%2Fwww.wildflowercases.com%2F" },
  { id: 158, name: "Ubeauty", slug: "ubeauty", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/b4d5879e-673f-42db-bb19-5754d7c82d2c.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=3242&url=https%3A%2F%2Fubeauty.com%2F" },
  { id: 159, name: "Myaerotel", slug: "myaerotel", logo: "https://d3itvsmwj0r86k.cloudfront.net/images/20250106/0f369fdd-fe6b-46f0-a674-9016eae9bbd6.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=30663&url=https%3A%2F%2Fwww.myaerotel.com%2Fen-uk" },
  { id: 160, name: "Super.com - Travel", slug: "supercom-travel", logo: "https://static.fatcoupon.com/images/20260511/800c7f8b-b050-4cde-8216-7cbcc1e6a62b.png", website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73002&url=https%3A%2F%2Fwww.super.com%2Ftravel" }
,
  { id: 161, name: "ScholarshipOwl", slug: "scholarshipowl", logo: getLogoUrl("scholarshipowl"), website: "https://scholarshipowl.com" },
  { id: 162, name: "Mac Duggal", slug: "mac-duggal", logo: getLogoUrl("mac-duggal"), website: "https://macduggal.com" }
,
  { id: 163, name: "Daisysilk Trade Co.,Ltd", slug: "daisysilk-trade-co-ltd", logo: getLogoUrl("daisysilk-trade-co-ltd"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=30705&url=https%3A%2F%2Fwww.drinktrade.com%2F" },
  { id: 164, name: "Kixies Inc", slug: "kixies-inc", logo: getLogoUrl("kixies-inc"), website: "https://kixies-inc.com" },
  { id: 165, name: "novica.com", slug: "novica-com", logo: getLogoUrl("novica-com"), website: "https://novica.com" },
  { id: 166, name: "Pooky US", slug: "pooky-us", logo: getLogoUrl("pooky-us"), website: "https://pooky-us.com" },
  { id: 167, name: "Midwest Sports dba Tennis-Point", slug: "midwest-sports-dba-tennis-point", logo: getLogoUrl("midwest-sports-dba-tennis-point"), website: "https://midwest-sports-dba-tennis-point.com" },
  { id: 168, name: "Montagne Vacances", slug: "montagne-vacances", logo: getLogoUrl("montagne-vacances"), website: "https://montagne-vacances.com" },
  { id: 169, name: "Gardenreet", slug: "gardenreet", logo: getLogoUrl("gardenreet"), website: "https://gardenreet.com" },
  { id: 170, name: "Mirlux", slug: "mirlux", logo: getLogoUrl("mirlux"), website: "https://mirlux.com" },
  { id: 171, name: "Silver Cross", slug: "silver-cross", logo: getLogoUrl("silver-cross"), website: "https://silver-cross.com" },
  { id: 172, name: "Jackery", slug: "jackery", logo: getLogoUrl("jackery"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=63344&url=https%3A%2F%2Fwww.jackery.com" },
  { id: 173, name: "Innovet Pet", slug: "innovet-pet", logo: getLogoUrl("innovet-pet"), website: "https://innovet-pet.com" },
  { id: 174, name: "AFRM", slug: "afrm", logo: getLogoUrl("afrm"), website: "https://afrm.com" },
  { id: 175, name: "Naghedi", slug: "naghedi", logo: getLogoUrl("naghedi"), website: "https://naghedi.com" },
  { id: 176, name: "im8 health", slug: "im8-health", logo: getLogoUrl("im8-health"), website: "https://im8-health.com" },
  { id: 177, name: "Tuxmat", slug: "tuxmat", logo: getLogoUrl("tuxmat"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=41895&url=https%3A%2F%2Fwww.tuxmat.com%2F" },
  { id: 178, name: "Performance Golf", slug: "performance-golf", logo: getLogoUrl("performance-golf"), website: "https://performance-golf.com" },
  { id: 179, name: "Simkhai", slug: "simkhai", logo: getLogoUrl("simkhai"), website: "https://simkhai.com" },
  { id: 180, name: "Sexy Little Bath US", slug: "sexy-little-bath-us", logo: getLogoUrl("sexy-little-bath-us"), website: "https://sexy-little-bath-us.com" },
  { id: 181, name: "Everblog", slug: "everblog", logo: getLogoUrl("everblog"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74167&url=https%3A%2F%2Fog.com%2F" },
  { id: 182, name: "PrintAbout", slug: "printabout", logo: getLogoUrl("printabout"), website: "https://printabout.com" },
  { id: 183, name: "Lumary", slug: "lumary", logo: getLogoUrl("lumary"), website: "https://lumary.com" },
  { id: 184, name: "Young Electric Bikes", slug: "young-electric-bikes", logo: getLogoUrl("young-electric-bikes"), website: "https://young-electric-bikes.com" },
  { id: 185, name: "StoreYourBoard", slug: "storeyourboard", logo: getLogoUrl("storeyourboard"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=58357&url=https%3A%2F%2Fstoreyourboard.com" },
  { id: 186, name: "Urevo", slug: "urevo", logo: getLogoUrl("urevo"), website: "https://urevo.com" },
  { id: 187, name: "SBLA", slug: "sbla", logo: getLogoUrl("sbla"), website: "https://sbla.com" },
  { id: 188, name: "Joe Nimble", slug: "joe-nimble", logo: getLogoUrl("joe-nimble"), website: "https://joe-nimble.com" },
  { id: 189, name: "OUFER BODY JEWELRY 15%-100-259 (25-may-2026)", slug: "oufer-body-jewelry-15-100-259-25-may-2026", logo: getLogoUrl("oufer-body-jewelry-15-100-259-25-may-2026"), website: "https://oufer-body-jewelry-15-100-259-25-may-2026.com" },
  { id: 190, name: "Elevated Craft", slug: "elevated-craft", logo: getLogoUrl("elevated-craft"), website: "https://elevated-craft.com" },
  { id: 191, name: "Huega House", slug: "huega-house", logo: getLogoUrl("huega-house"), website: "https://huega-house.com" },
  { id: 192, name: "Camp Chef", slug: "camp-chef", logo: getLogoUrl("camp-chef"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9598&url=https%3A%2F%2Fwww.campchef.com" },
  { id: 193, name: "COLAMY", slug: "colamy", logo: getLogoUrl("colamy"), website: "https://colamy.com" },
  { id: 194, name: "Buy Fencing Direct", slug: "buy-fencing-direct", logo: getLogoUrl("buy-fencing-direct"), website: "https://buy-fencing-direct.com" },
  { id: 195, name: "Back to the Office", slug: "back-to-the-office", logo: getLogoUrl("back-to-the-office"), website: "https://back-to-the-office.com" },
  { id: 196, name: "Thermos", slug: "thermos", logo: getLogoUrl("thermos"), website: "https://thermos.com" },
  { id: 197, name: "cosori", slug: "cosori", logo: getLogoUrl("cosori"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=18131&url=https%3A%2F%2Fcosori.com%2F" },
  { id: 198, name: "Krewe", slug: "krewe", logo: getLogoUrl("krewe"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73952&url=https%3A%2F%2Fwww.krewe.com%2F" },
  { id: 199, name: "Ridstar", slug: "ridstar", logo: getLogoUrl("ridstar"), website: "https://ridstar.com" },
  { id: 200, name: "Bruno Marc 8%-100-350 (29-july-2026)", slug: "bruno-marc-8-100-350-29-july-2026", logo: getLogoUrl("bruno-marc-8-100-350-29-july-2026"), website: "https://bruno-marc-8-100-350-29-july-2026.com" },
  { id: 201, name: "Sunshine Tienda", slug: "sunshine-tienda", logo: getLogoUrl("sunshine-tienda"), website: "https://sunshine-tienda.com" },
  { id: 202, name: "Red Gorilla", slug: "red-gorilla", logo: getLogoUrl("red-gorilla"), website: "https://red-gorilla.com" },
  { id: 203, name: "Displays Outlet US", slug: "displays-outlet-us", logo: getLogoUrl("displays-outlet-us"), website: "https://displays-outlet-us.com" },
  { id: 204, name: "Yvette Sports", slug: "yvette-sports", logo: getLogoUrl("yvette-sports"), website: "https://yvette-sports.com" },
  { id: 205, name: "Zeagoo", slug: "zeagoo", logo: getLogoUrl("zeagoo"), website: "https://zeagoo.com" },
  { id: 206, name: "BuyBackWorld", slug: "buybackworld", logo: getLogoUrl("buybackworld"), website: "https://buybackworld.com" },
  { id: 207, name: "Flextail 5%-50-550 (23-july-2026)", slug: "flextail-5-50-550-23-july-2026", logo: getLogoUrl("flextail-5-50-550-23-july-2026"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12732&url=https%3A%2F%2Fwww.flextail.com%2F" },
  { id: 208, name: "pelsbarn", slug: "pelsbarn", logo: getLogoUrl("pelsbarn"), website: "https://pelsbarn.com" },
  { id: 209, name: "Povison", slug: "povison", logo: getLogoUrl("povison"), website: "https://povison.com" },
  { id: 210, name: "Eternity Modern", slug: "eternity-modern", logo: getLogoUrl("eternity-modern"), website: "https://eternity-modern.com" },
  { id: 211, name: "aviya mattress 15%-600-300 (23-july-2026)", slug: "aviya-mattress-15-600-300-23-july-2026", logo: getLogoUrl("aviya-mattress-15-600-300-23-july-2026"), website: "https://aviya-mattress-15-600-300-23-july-2026.com" },
  { id: 212, name: "Arq8", slug: "arq8", logo: getLogoUrl("arq8"), website: "https://arq8.com" },
  { id: 213, name: "BABEYOND", slug: "babeyond", logo: getLogoUrl("babeyond"), website: "https://babeyond.com" },
  { id: 214, name: "Suunto", slug: "suunto", logo: getLogoUrl("suunto"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=68582&url=https%3A%2F%2Fwww.suunto.com%2F" },
  { id: 215, name: "RMA Defense", slug: "rma-defense", logo: getLogoUrl("rma-defense"), website: "https://rma-defense.com" },
  { id: 216, name: "Eonon", slug: "eonon", logo: getLogoUrl("eonon"), website: "https://eonon.com" },
  { id: 217, name: "Torro", slug: "torro", logo: getLogoUrl("torro"), website: "https://torro.com" },
  { id: 218, name: "Auctmarts", slug: "auctmarts", logo: getLogoUrl("auctmarts"), website: "https://auctmarts.com" },
  { id: 219, name: "MISSHA US", slug: "missha-us", logo: getLogoUrl("missha-us"), website: "https://missha-us.com" },
  { id: 220, name: "Himiway Bike", slug: "himiway-bike", logo: getLogoUrl("himiway-bike"), website: "https://himiway-bike.com" },
  { id: 221, name: "Mirlux FR", slug: "mirlux-fr", logo: getLogoUrl("mirlux-fr"), website: "https://mirlux-fr.com" },
  { id: 222, name: "Guta TPMS", slug: "guta-tpms", logo: getLogoUrl("guta-tpms"), website: "https://guta-tpms.com" },
  { id: 223, name: "Alashan Cashmere", slug: "alashan-cashmere", logo: getLogoUrl("alashan-cashmere"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=912&url=https%3A%2F%2Fwww2.hm.com%2Fen_us%2Findex.html" },
  { id: 224, name: "Nushape", slug: "nushape", logo: getLogoUrl("nushape"), website: "https://nushape.com" },
  { id: 225, name: "Adept", slug: "adept", logo: getLogoUrl("adept"), website: "https://adept.com" },
  { id: 226, name: "underarmour", slug: "underarmour", logo: getLogoUrl("underarmour"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=40876&url=https%3A%2F%2Fwww.underarmour.com" },
  { id: 227, name: "Eydology", slug: "eydology", logo: getLogoUrl("eydology"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74167&url=https%3A%2F%2Fog.com%2F" },
  { id: 228, name: "Cambridge Satchel", slug: "cambridge-satchel", logo: getLogoUrl("cambridge-satchel"), website: "https://cambridge-satchel.com" },
  { id: 229, name: "Zonli Home", slug: "zonli-home", logo: getLogoUrl("zonli-home"), website: "https://zonli-home.com" },
  { id: 230, name: "3 Suisses", slug: "3-suisses", logo: getLogoUrl("3-suisses"), website: "https://3-suisses.com" },
  { id: 231, name: "Dowinx", slug: "dowinx", logo: getLogoUrl("dowinx"), website: "https://dowinx.com" },
  { id: 232, name: "Garden Benches", slug: "garden-benches", logo: getLogoUrl("garden-benches"), website: "https://garden-benches.com" },
  { id: 233, name: "Knack Bags  6%-200-450 (27-july-2026)", slug: "knack-bags-6-200-450-27-july-2026", logo: getLogoUrl("knack-bags-6-200-450-27-july-2026"), website: "https://knack-bags-6-200-450-27-july-2026.com" },
  { id: 234, name: "Popilush 2%-150-275 (27-july-2026)", slug: "popilush-2-150-275-27-july-2026", logo: getLogoUrl("popilush-2-150-275-27-july-2026"), website: "https://popilush-2-150-275-27-july-2026.com" },
  { id: 235, name: "SELDOM SEEN STYLES", slug: "seldom-seen-styles", logo: getLogoUrl("seldom-seen-styles"), website: "https://seldom-seen-styles.com" },
  { id: 236, name: "Kix'ies", slug: "kixies", logo: getLogoUrl("kixies"), website: "https://kixies.com" },
  { id: 237, name: "Le Permis Libre", slug: "le-permis-libre", logo: getLogoUrl("le-permis-libre"), website: "https://le-permis-libre.com" },
  { id: 238, name: "Health & Fitness", slug: "health-fitness", logo: getLogoUrl("health-fitness"), website: "https://health-fitness.com" },
  { id: 239, name: "Tilswall", slug: "tilswall", logo: getLogoUrl("tilswall"), website: "https://tilswall.com" },
  { id: 240, name: "Levoit", slug: "levoit", logo: getLogoUrl("levoit"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=60230&url=https%3A%2F%2Flevoit.com%2F" },
  { id: 241, name: "Caydo", slug: "caydo", logo: getLogoUrl("caydo"), website: "https://caydo.com" },
  { id: 242, name: "Tribesigns", slug: "tribesigns", logo: getLogoUrl("tribesigns"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74172&url=https%3A%2F%2Fwearetribe.co%2F" },
  { id: 243, name: "Speediance", slug: "speediance", logo: getLogoUrl("speediance"), website: "https://speediance.com" },
  { id: 244, name: "Ulanzi", slug: "ulanzi", logo: getLogoUrl("ulanzi"), website: "https://ulanzi.com" },
  { id: 245, name: "Antler", slug: "antler", logo: getLogoUrl("antler"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=23364&url=https%3A%2F%2Fwww.antler.co.uk%2F" },
  { id: 246, name: "Okun", slug: "okun", logo: getLogoUrl("okun"), website: "https://okun.com" },
  { id: 247, name: "So soft Beds", slug: "so-soft-beds", logo: getLogoUrl("so-soft-beds"), website: "https://so-soft-beds.com" },
  { id: 248, name: "Grab Bags US", slug: "grab-bags-us", logo: getLogoUrl("grab-bags-us"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72260&url=https%3A%2F%2Fgrabbaggear.com%2F" },
  { id: 249, name: "Keycense", slug: "keycense", logo: getLogoUrl("keycense"), website: "https://keycense.com" },
  { id: 250, name: "tcksports US", slug: "tcksports-us", logo: getLogoUrl("tcksports-us"), website: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72261&url=https%3A%2F%2Ftcksports.com%2F" },
  { id: 251, name: "Power Smart", slug: "power-smart", logo: getLogoUrl("power-smart"), website: "https://power-smart.com" }
];

export const FALLBACK_COUPONS: Coupon[] = [
  // Amazon
  { id: 1, code: "AMZN20", discount: "20% OFF", description: "Get 20% off on all electronics and home appliances. Limited time offer.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[0] },
  { id: 2, code: "FREEAMZN", discount: "Free Shipping", description: "Free shipping on orders above $35. Applicable sitewide.", expiry_date: "2026-08-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[0] },
  { id: 3, code: "AMZNBOOKS10", discount: "10% OFF", description: "Save an extra 10% on highly trending physical books and bestsellers.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[0] },

  // Nike
  { id: 4, code: "JUSTDOIT15", discount: "15% OFF", description: "Save 15% on your next purchase of running shoes and athletic apparel.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[1] },
  { id: 5, code: "NIKECLUB25", discount: "25% OFF", description: "Exclusive discount for Nike Club members on select merchandise.", expiry_date: "2026-10-10T23:59:59.000Z", is_verified: false, store: FALLBACK_STORES[1] },
  { id: 6, code: "NIKEFREESHIP", discount: "Free Shipping", description: "Free standard shipping sitewide for registered Nike Members.", expiry_date: "2026-11-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[1] },

  // Hostinger
  { id: 7, code: "HOSTING80", discount: "80% OFF", description: "Get up to 80% off on premium web hosting plans + free domain.", expiry_date: "2026-12-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[2] },
  { id: 8, code: "SAVE10", discount: "Extra 10% OFF", description: "Additional 10% discount on VPS and cloud hosting packages.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[2] },
  { id: 9, code: "HOSTSPECIAL", discount: "Extra 7% OFF", description: "Save an extra 7% on all 48-month web hosting subscriptions.", expiry_date: "2026-12-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[2] },

  // Adidas
  { id: 10, code: "ADI30", discount: "30% OFF", description: "Get 30% off sitewide on shoes, sportswear, and accessories.", expiry_date: "2026-07-04T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[3] },
  { id: 11, code: "STRIPES20", discount: "20% OFF", description: "Extra 20% off for Creators Club members on select items.", expiry_date: "2026-10-25T23:59:59.000Z", is_verified: false, store: FALLBACK_STORES[3] },

  // Walmart
  { id: 12, code: "WALMART50", discount: "$10 OFF", description: "Get $10 off on your first grocery order of $50 or more.", expiry_date: "2026-06-30T23:59:59.000Z", is_verified: false, store: FALLBACK_STORES[4] },
  { id: 13, code: "WMFREESHIP", discount: "Free Shipping", description: "Free shipping on orders over $35 with no membership required.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[4] },

  // eBay
  { id: 14, code: "EBAYFASH10", discount: "10% OFF", description: "Save an extra 10% on select brand clothing and accessories.", expiry_date: "2026-08-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[5] },
  { id: 15, code: "COLLECT25", discount: "25% OFF", description: "Get 25% off on vintage collectibles, action figures, and sports cards.", expiry_date: "2026-12-15T23:59:59.000Z", is_verified: false, store: FALLBACK_STORES[5] },
  { id: 16, code: "EBAYSAVE5", discount: "$5 OFF", description: "Get $5 off sitewide on any item orders over $25 or more.", expiry_date: "2026-07-20T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[5] },

  // Target
  { id: 17, code: "TARGETROOM", discount: "15% OFF", description: "Save 15% on home decor, bedding, and stylish furniture.", expiry_date: "2026-07-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[6] },
  { id: 18, code: "TGTBABY", discount: "$20 OFF", description: "Get $20 gift card when you spend $100 on baby essentials.", expiry_date: "2026-08-20T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[6] },

  // Apple
  { id: 19, code: "IPADSTUDENT", discount: "$100 OFF", description: "Students save up to $100 on the new iPad Air or iPad Pro.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[7] },
  { id: 20, code: "APPLERED", discount: "Free Engraving", description: "Get free personalized engraving on any new AirPods or Apple Pencil.", expiry_date: "2026-12-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[7] },

  // Starbucks
  { id: 21, code: "BREWFREE", discount: "Buy 1 Get 1", description: "Buy one handcrafted beverage and get one of equal or lesser value free.", expiry_date: "2026-06-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[8] },
  { id: 22, code: "STAR2X", discount: "Double Stars", description: "Earn double stars on all purchases using the Starbucks App today.", expiry_date: "2026-07-15T23:59:59.000Z", is_verified: false, store: FALLBACK_STORES[8] },

  // Steam
  { id: 23, code: "STEAMSUMMER", discount: "50% OFF", description: "Save 50% or more on top-selling indie games during the seasonal sale.", expiry_date: "2026-08-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[9] },
  { id: 24, code: "HALFLIFE90", discount: "90% OFF", description: "Get 90% off the legendary Half-Life series for a limited time.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[9] },

  // AliExpress
  { id: 25, code: "ALIEXNEW", discount: "$4 OFF", description: "Special ConvertSocial coupon: $4 off your first order of $5 or more.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[10] },
  { id: 26, code: "ALSAVE12", discount: "$12 OFF", description: "Save $12 on select global orders valued at $80 or more.", expiry_date: "2026-10-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[10] },
  { id: 27, code: "ALISPRING5", discount: "5% OFF", description: "Save an extra 5% on super trending smart gadgets and tech accessories.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[10] },

  // Adobe
  { id: 28, code: "ADOBECREATIVE", discount: "20% OFF", description: "Impact network exclusive: Save 20% on Creative Cloud All Apps plans.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[11] },
  { id: 29, code: "ADOBESTUDENT", discount: "60% OFF", description: "Students & teachers save over 60% on entire Creative Cloud catalog.", expiry_date: "2026-11-20T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[11] },
  { id: 30, code: "ADOBEPRO", discount: "Extra 10% OFF", description: "Additional 10% off monthly Acrobat Pro document scanner subscriptions.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[11] },

  // Canva
  { id: 31, code: "CANVAPRO30", discount: "30 Days Free", description: "Get 30 days of Canva Pro premium designer tools for absolutely free.", expiry_date: "2026-12-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[12] },
  { id: 32, code: "CANVAEDU", discount: "Free Access", description: "100% free premium class designs and workflows for verified educators.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[12] },
  { id: 33, code: "CANVASAVE10", discount: "10% OFF", description: "Impact exclusive: Save 10% on annual Canva Pro premium subscriptions.", expiry_date: "2026-10-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[12] },

  // Samsung
  { id: 34, code: "SAMSUNGEVO", discount: "10% OFF", description: "Awin network exclusive: Save 10% on select premium Galaxy smartphones.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[13] },
  { id: 35, code: "MEMBERS5", discount: "Extra 5% OFF", description: "Additional 5% discount sitewide for registered Samsung Members.", expiry_date: "2026-09-10T23:59:59.000Z", is_verified: false, store: FALLBACK_STORES[13] },
  { id: 36, code: "SAMSUNGTVS", discount: "$150 OFF", description: "Get $150 off on award-winning QLED 4K Smart TVs and sound systems.", expiry_date: "2026-08-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[13] },

  // NordVPN
  { id: 37, code: "NORDVPN68", discount: "68% OFF", description: "Save 68% on 2-year cybersecurity shield protection + 3 months free.", expiry_date: "2026-12-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[14] },
  { id: 38, code: "SECURE10", discount: "Extra 10% OFF", description: "Get 10% off high-speed NordVPN Dedicated IP add-on plans.", expiry_date: "2026-10-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[14] },
  { id: 39, code: "NORDPASS30", discount: "30% OFF", description: "Get 30% off NordPass Premium password locker subscriptions.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[14] },

  // Lenovo
  { id: 40, code: "THINKPAD10", discount: "10% OFF", description: "Impact exclusive: Save 10% on elite ThinkPad corporate laptops.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[15] },
  { id: 41, code: "LEGIONSAVE", discount: "15% OFF", description: "Get 15% off high-performance Legion esports gaming laptops.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[15] },

  // Puma
  { id: 42, code: "PUMASPEED", discount: "20% OFF", description: "Awin exclusive: Save 20% on Puma nitro athletic footwear and tracksuits.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[16] },
  { id: 43, code: "FOREVERFASTER", discount: "Extra 15% OFF", description: "Additional 15% off clearance items and summer sports merchandise.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[16] },

  // Fiverr
  { id: 44, code: "FIVERRNEW10", discount: "10% OFF", description: "Awin exclusive: Get 10% off your first digital design or dev service order.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[17] },
  { id: 45, code: "FIVERRBIZ", discount: "15% OFF", description: "Save 15% on Fiverr Business setup and corporate onboarding.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[17] },

  // Booking.com
  { id: 46, code: "BOOKING15", discount: "15% OFF", description: "Impact exclusive: Save 15% or more on certified Genius hotel stays worldwide.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[18] },
  { id: 47, code: "RENTALCAR10", discount: "10% OFF", description: "Get 10% off premium global car rentals when booked alongside stays.", expiry_date: "2026-08-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[18] },

  // Udemy
  { id: 48, code: "UDEMYLEARN", discount: "85% OFF", description: "Impact exclusive: Up to 85% off select digital developer courses.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[19] },
  { id: 49, code: "SKILLS2026", discount: "Extra 10% OFF", description: "Save an extra 10% on business and project management courses.", expiry_date: "2026-10-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[19] },
  { id: 50, code: "UDEMYFIRST", discount: "$10 OFF", description: "Get any professional developer course for just $10 flat for new accounts.", expiry_date: "2026-12-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[19] },

  // Desktronic UK
  { id: 51, code: "MarkPaul15", discount: "15% off discount code", description: "Exclusive 15% off discount code sitewide on premium standing desks and frames.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 52, code: "MarkPaul15", discount: "£150 off - Seasonal deals", description: "Save £150 on complete ergonomic office packages and standing desk bundles.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 53, code: "MarkPaul15", discount: "20% off coupon code sitewide", description: "Verified 20% off coupon code sitewide on smart height-adjustable tables.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 54, code: "MarkPaul15", discount: "50% off - limited time offer", description: "Huge 50% off limited-time offer on clearance ergonomic items.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 55, code: "MarkPaul15", discount: "free shipping", description: "Get free standard UK delivery on all orders above £100.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 56, code: "MarkPaul15", discount: "35% off on desk frame", description: "Save 35% off on desk frame bundles and motorized dual-motor models.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-frame-homepro" },
  { id: 57, code: "MarkPaul15", discount: "34% off on height-adjustable desk", description: "Enjoy 34% off on height-adjustable desks with smart memory presets.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-desk-homepro" },
  { id: 58, code: "MarkPaul15", discount: "30% off on office chairs", description: "Save 30% on active ergonomic office chairs with lumbar support.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 59, code: "MarkPaul15", discount: "£199 for tabletops", description: "Special offer: Premium bamboo and oak tabletops starting from just £199.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 60, code: "MarkPaul15", discount: "30% off on accessories", description: "Get 30% off on selected desk accessories, cable trays, and monitors.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 61, code: "MarkPaul15", discount: "28% off on desk drawer", description: "Save an extra 28% on under-desk drawers and metal filing cabinets.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 62, code: "MarkPaul15", discount: "20% off on solid wood desks", description: "Get 20% off on premium solid wood desktop collections.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 63, code: "MarkPaul15", discount: "£15 off on newsletter signup", description: "Get £15 off your first standing desk order on newsletter signup.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 631, code: "MarkPaul15", discount: "15% off student discount", description: "Verified 15% off student and educator discount code on premium ergonomic standing desks.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },
  { id: 632, code: "MarkPaul15", discount: "£200 off - Corporate bulk deals", description: "Save an extra £200 on business and home office bulk standing desk package orders.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[20], affiliate_url: "/go/desktronic-uk" },

  // Desktronic US
  { id: 64, code: "METHEWDIPPY", discount: "15% off discount code", description: "Exclusive $15 off discount code sitewide on premium standing desks and frames.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 65, code: "METHEWDIPPY", discount: "$150 off - Seasonal deals", description: "Save $150 on complete ergonomic office packages and standing desk bundles.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 66, code: "METHEWDIPPY", discount: "20% off coupon code sitewide", description: "Verified 20% off coupon code sitewide on smart height-adjustable tables.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 67, code: "METHEWDIPPY", discount: "50% off - limited time offer", description: "Huge 50% off limited-time offer on clearance ergonomic items.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 68, code: "METHEWDIPPY", discount: "free shipping", description: "Get free standard US delivery on all orders above $100.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 69, code: "METHEWDIPPY", discount: "35% off on desk frame", description: "Save 35% off on desk frame bundles and motorized dual-motor models.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 70, code: "METHEWDIPPY", discount: "34% off on height-adjustable desk", description: "Enjoy 34% off on height-adjustable desks with smart memory presets.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 71, code: "METHEWDIPPY", discount: "30% off on office chairs", description: "Save 30% on active ergonomic office chairs with lumbar support.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 72, code: "METHEWDIPPY", discount: "$199 for tabletops", description: "Special offer: Premium bamboo and oak tabletops starting from just $199.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 73, code: "METHEWDIPPY", discount: "30% off on accessories", description: "Get 30% off on selected desk accessories, cable trays, and monitors.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 731, code: "METHEWDIPPY", discount: "28% off on desk drawer", description: "Save an extra 28% on under-desk drawers and metal filing cabinets.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 732, code: "METHEWDIPPY", discount: "20% off on solid wood desks", description: "Get 20% off on premium solid wood desktop collections.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 733, code: "METHEWDIPPY", discount: "$15 off on newsletter signup", description: "Get $15 off your first standing desk order on newsletter signup.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 734, code: "METHEWDIPPY", discount: "15% off student discount", description: "Verified 15% off student and educator discount code on premium ergonomic standing desks.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },
  { id: 735, code: "METHEWDIPPY", discount: "$200 off - Corporate bulk deals", description: "Save an extra $200 on business and home office bulk standing desk package orders.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[21], affiliate_url: "/go/desktronic-us" },

  // Tenways UK
  { id: 74, code: "TENWAYSUK", discount: "£50 OFF", description: "Special launch coupon: £50 off your first Tenways electric bike order.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[22] },
  { id: 75, code: "RIDEGREEN", discount: "Free Guards", description: "Get free mudguards and structural safety upgrades with any e-bike.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[22] },

  // Tenways US
  { id: 76, code: "TENWAYSUS", discount: "$60 OFF", description: "Get $60 off on sleek lightweight city e-bikes orders US wide.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[23] },
  { id: 77, code: "ECOMOVE", discount: "Free Stand", description: "Get a free adjustable premium kickstand with any new e-bike purchase.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[23] },

  // Geekbuying
  { id: 78, code: "GEEKNEW", discount: "$5 OFF", description: "ConvertSocial exclusive: Save $5 on orders over $50 sitewide.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[24] },
  { id: 79, code: "GEEKTECH10", discount: "10% OFF", description: "Get 10% off high-speed 3D printers, lasers, and smart appliances.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[24] },
  { id: 80, code: "GEEKSAVE", discount: "$15 OFF", description: "Get an additional $15 off on tech collections valued at $200+.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[24] },

  // Banggood
  { id: 81, code: "BGNEW10", discount: "10% OFF", description: "ConvertSocial coupon: Save an extra 10% on your first wholesale order.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[25] },
  { id: 82, code: "BGSPRING8", discount: "8% OFF", description: "Save 8% on active outdoor tools, smart electronics, and RC hobbies.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[25] },
  { id: 83, code: "BGSAVE25", discount: "$25 OFF", description: "Save $25 on bulk orders valued at $150 or more sitewide.", expiry_date: "2026-11-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[25] },

  // Zaful
  { id: 84, code: "ZAFULNEW", discount: "15% OFF", description: "ConvertSocial exclusive: 15% off first order on clothing styles.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[26] },
  { id: 85, code: "ZAFUL20", discount: "20% OFF", description: "Save 20% on visual design outfits on orders over $59.", expiry_date: "2026-10-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[26] },
  { id: 86, code: "ZAFULFREE", discount: "Free Shipping", description: "Get free standard shipping on apparel orders above $39.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[26] },

  // MassiveMobile
  { id: 87, code: "MASSIVE10", discount: "10% OFF", description: "ConvertSocial deal: Save 10% on all modular tech mobile accessories.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[27] },
  { id: 88, code: "MASSIVEFREE", discount: "Free Delivery", description: "Get free express courier delivery on orders above €100.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[27] },

  // DHgate
  { id: 89, code: "DHNEW4", discount: "$4 OFF", description: "ConvertSocial coupon: $4 off on first order of $5 or more.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[28] },
  { id: 90, code: "DHSAVE10", discount: "$10 OFF", description: "Get $10 off sitewide on bulk items orders above $100.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[28] },
  { id: 91, code: "DHGATE20", discount: "$20 OFF", description: "Save an extra $20 on bulk orders valued at $200 or more.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[28] },

  // Envato Elements
  { id: 92, code: "ENVATOSTUDENT", discount: "30% OFF", description: "Impact exclusive: Students save 30% on unlimited creative assets.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[29] },
  { id: 93, code: "ENVATOTRIAL", discount: "7 Days Free", description: "Get 7 days of unlimited vector templates and media assets for free.", expiry_date: "2026-12-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[29] },
  { id: 94, code: "ENVATOSAVE10", discount: "10% OFF", description: "Save 10% on annual individual creative team registrations.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[29] },

  // Semrush
  { id: 95, code: "SEMRUSHTRIAL", discount: "14 Days Free", description: "Impact network special: Get 14 days free access to Semrush Pro SEO suite.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[30] },
  { id: 96, code: "SEMRUSHSAVE", discount: "17% OFF", description: "Save 17% on any annual SEO research plans Pro or Guru.", expiry_date: "2026-10-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[30] },
  { id: 97, code: "SEMRUSHGURU", discount: "7 Days Free", description: "Get 7 days free access to Semrush Guru marketing agency plan.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[30] },

  // Namecheap
  { id: 98, code: "NAMECHEAP99", discount: "$0.99 Domains", description: "Get selected .com domain registration for just $0.99 for first year.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[31] },
  { id: 99, code: "NAMECHEAPSAVE", discount: "20% OFF", description: "Impact network exclusive: Save 20% on Stellar shared web hosting.", expiry_date: "2026-10-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[31] },
  { id: 100, code: "SSLPROTECT", discount: "15% OFF", description: "Save 15% on Comodo SSL site certificates and security tools.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[31] },

  // Squarespace
  { id: 101, code: "GIMME10", discount: "10% OFF", description: "Save 10% on your first website, commerce shop, or domain registration.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[32] },
  { id: 102, code: "SQSSTUDENT", discount: "50% OFF", description: "Verified students save over 50% on annual website subscriptions.", expiry_date: "2026-10-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[32] },

  // HostGator
  { id: 103, code: "GATOR60", discount: "60% OFF", description: "Impact exclusive: Save 60% on WordPress Hatchling shared web hosting.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[33] },
  { id: 104, code: "GATORPENNY", discount: "$0.01 First Mo", description: "Get your first month of shared web hosting for just one penny.", expiry_date: "2026-09-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[33] },
  { id: 105, code: "DOMAINGATOR", discount: "$4.99 Domains", description: "Save and get domains for just $4.99 during corporate promotions.", expiry_date: "2026-10-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[33] },

  // Bluehost
  { id: 106, code: "BLUEHOST75", discount: "75% OFF", description: "Impact network exclusive: Get 75% off managed WordPress hosting.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[34] },
  { id: 107, code: "BLUEFREE", discount: "Free Domain", description: "Get a free custom domain registration with any annual plan order.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[34] },
  { id: 108, code: "BLUESAVE10", discount: "Extra 10% OFF", description: "Save an extra 10% on WooCommerce online store registrations.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[34] },

  // Coursera
  { id: 109, code: "COURSERAFREE", discount: "7 Days Free", description: "Impact exclusive: 7 days free access to standard Google & Meta certificates.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[35] },
  { id: 110, code: "COURSERA10", discount: "10% OFF", description: "Get 10% off selected university professional degree courses.", expiry_date: "2026-10-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[35] },

  // Skillshare
  { id: 111, code: "SKILLSHARE30", discount: "30 Days Free", description: "Get 30 days free access to premium digital creative video catalog.", expiry_date: "2026-12-25T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[36] },
  { id: 112, code: "SKILLSHARE50", discount: "50% OFF", description: "Impact exclusive: Save 50% on annual premium memberships.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[36] },
  { id: 113, code: "CREATIVE10", discount: "Extra 10% OFF", description: "Save 10% on corporate creative learning teams onboarding.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[36] },

  // NordPass
  { id: 114, code: "NORDPASS50", discount: "50% OFF", description: "Impact network exclusive: Save 50% on 2-year password lockers.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[37] },
  { id: 115, code: "PASSSECURE", discount: "Extra 10% OFF", description: "Get an extra 10% off NordPass Business identity packages.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[37] },

  // GoDaddy
  { id: 116, code: "GODADDY30", discount: "30% OFF", description: "Save 30% on first year standard hosting and domain bundles.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[38] },
  { id: 117, code: "COM10", discount: "$4.99 .com", description: "Get your first .com domain registration for just $4.99.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[38] },
  { id: 118, code: "GODADDYHOST", discount: "50% OFF", description: "Save 50% on Economy Shared Web Hosting annual plans.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[38] },

  // Gymshark
  { id: 119, code: "GYMSHARK10", discount: "10% OFF", description: "Save 10% sitewide on gym sportswear, activewear, and gear.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[39] },
  { id: 120, code: "SHARKFREESHIP", discount: "Free Shipping", description: "Get free shipping on fitness gear orders above $75 sitewide.", expiry_date: "2026-09-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[39] },
  { id: 121, code: "SHARKSTUDENT", discount: "15% OFF", description: "Impact exclusive: Students save 15% on latest fitness clothes.", expiry_date: "2026-08-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[39] },

  // Desktronic NL
  { id: 122, code: "METHEW", discount: "15% actiecode", description: "Exclusieve kortingscode voor €15 korting op het hele assortiment sta-bureaus en frames.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 123, code: "METHEW", discount: "€150 korting - Complete bureaus", description: "Bespaar €150 op complete ergonomische kantoorpakketten en sta-bureau combinaties.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 124, code: "METHEW", discount: "20% kortingscode sitewide", description: "Geverifieerde 20% kortingscode op alle slimme in hoogte verstelbare bureaus.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 125, code: "METHEW", discount: "50% korting - Tijdelijke aanbieding", description: "Enorme 50% korting op geselecteerde ergonomische kantoorartikelen.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 126, code: "METHEW", discount: "gratis verzending", description: "Gratis standaard verzending in heel Nederland bij bestellingen vanaf €100.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 127, code: "METHEW", discount: "35% korting op bureauframe", description: "Bespaar 35% op in hoogte verstelbare bureauframe (HomePro) met dubbele motor.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 128, code: "METHEW", discount: "34% korting op sta-bureau", description: "Geniet van 34% korting op sta-bureaus met slimme gegensinstellingen.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 129, code: "METHEW", discount: "30% korting op bureaustoelen", description: "Bespaar 30% op actieve ergonomische bureaustoelen met lendensteun.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 130, code: "METHEW", discount: "€199 voor bureaubladen", description: "Speciale aanbieding: Premium bureaubladen collectie vanaf slechts €199.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 131, code: "METHEW", discount: "30% korting op accessoires", description: "Ontvang 30% korting op geselecteerde bureau-accessoires, kabelgoten en armen.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 132, code: "METHEW", discount: "28% korting op ladeblokken", description: "Bespaar 28% extra op onderbureau lades en metalen archiefkasten.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 133, code: "METHEW", discount: "20% korting op massief hout", description: "Ontvang 20% korting op de premium bureaubladen collectie van massief hout.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 134, code: "METHEW", discount: "€15 korting bij nieuwsbrief", description: "Meld je aan voor de nieuwsbrief en ontvang direct €15 korting op je eerste sta-bureau.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 1341, code: "METHEW", discount: "15% studentenkorting", description: "Geverifieerde 15% studenten- en docentenkorting op het gehele assortiment sta-bureaus.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },
  { id: 1342, code: "METHEW", discount: "€200 korting - Zakelijke bulkdeals", description: "Bespaar €200 extra op zakelijke en thuiswerkers bulkbestellingen van sta-bureaus.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[40], affiliate_url: "/go/desktronic-nl" },

  // Parc Astérix FR
  { id: 1343, code: "DEAL", discount: "25% de réduction", description: "Bénéficiez de 25% de réduction sur les séjours Hôtel + Billets au Parc Astérix en réservant votre package en ligne.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1344, code: "DEAL", discount: "15% de réduction", description: "Économisez 15% sur vos billets d'entrée adulte pour toute visite durant la saison estivale. Offre d'été limitée.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1345, code: "DEAL", discount: "Dès 42€", description: "Profitez d'un tarif promotionnel exclusif web pour des visites en basse saison. Quantités très limitées.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1346, code: "DEAL", discount: "Dès 49€", description: "Réservez vos billets datés à l'avance (Billet Futé) sur le site officiel et payez seulement 49€ au lieu du tarif plein.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1347, code: "DEAL", discount: "10% de réduction", description: "Profitez de 10% de réduction supplémentaire sur vos réservations de billets effectuées à l'avance au Parc Astérix.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1348, code: "DEAL", discount: "10% de réduction", description: "Inscrivez-vous à la newsletter du Parc Astérix et obtenez un code promo exclusif de 10% de réduction sur votre achat.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1349, code: "DEAL", discount: "Dès 139€", description: "Achetez le Pass Gaulois à partir de 139€ et bénéficiez d'un accès illimité et de nombreux avantages exclusifs au parc.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1350, code: "DEAL", discount: "15% de réduction", description: "Économisez 15% sur les billets famille du Parc Astérix. Une offre idéale pour profiter d'un moment inoubliable.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1351, code: "DEAL", discount: "Dès 55€", description: "Achetez vos billets à prix spécial à partir de 55€ seulement. Profitez des attractions à un tarif exceptionnel.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1352, code: "DEAL", discount: "Gratuit", description: "Entrée gratuite pour les enfants accompagnés d'un adulte muni d'un billet payant lors des périodes spéciales.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1353, code: "DEAL", discount: "Dès 49€", description: "Tarif Tribu : Obtenez un tarif réduit à partir de 49€ par personne pour tout achat simultané de 5 à 15 billets.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  { id: 1354, code: "DEAL", discount: "Dès 10€", description: "Profitez de l'option coupe-file Filotomatix à partir de 10€ pour éviter les files d'attente aux attractions phares.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[41], affiliate_url: "https://litl.si/Tlxjk" },
  
  // Bouquets by Post
  { id: 1355, code: "DEAL", discount: "10% off", description: "Exclusive 10% off coupon code sitewide on fresh flower gifts.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1356, code: "DEAL", discount: "70% off", description: "Get up to 70% off on stunning hand-tied bouquets and flower arrangements.", expiry_date: "2026-08-07T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1357, code: "DEAL", discount: "5% off", description: "Exclusive 5% off discount code sitewide on all order values.", expiry_date: "2026-08-07T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1358, code: "DEAL", discount: "50% off", description: "Save 50% off on selected flower bouquets and summer collections.", expiry_date: "2026-08-08T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1359, code: "DEAL", discount: "Free shipping", description: "Free UK standard delivery on all flower orders. No minimum spend required.", expiry_date: "2026-08-08T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1360, code: "DEAL", discount: "50% off", description: "Birthday flowers promotion: Save 50% on special birthday flower arrangements.", expiry_date: "2026-08-07T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1361, code: "DEAL", discount: "45% off", description: "Enjoy 45% off on cute teddy bears when added to your flower order.", expiry_date: "2026-08-07T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1362, code: "DEAL", discount: "40% off", description: "Get 40% off on celebratory helium and latex balloons with your flowers.", expiry_date: "2026-08-06T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1363, code: "DEAL", discount: "20% off", description: "Save 20% off on custom greeting cards and personalized messages.", expiry_date: "2026-08-09T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1364, code: "DEAL", discount: "10% off", description: "Get 10% off your first flower delivery order when you sign up for newsletter updates.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },
  { id: 1365, code: "DEAL", discount: "5% off", description: "Save 5% on luxury chocolates and truffles bundles added to any order.", expiry_date: "2026-08-06T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[42], affiliate_url: "https://bouquetsbypost.com/muhammadhaziqueali" },

  // IM8 Health US
  { id: 1366, code: "METHEW29111", discount: "20% Off", description: "Get your exclusive 20% off coupon code on IM8 Health products.", expiry_date: "2026-08-20T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },
  { id: 1367, code: "METHEW29111", discount: "15% Off", description: "Get 15% off discount code sitewide on IM8 Health Daily Essentials.", expiry_date: "2026-08-23T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },
  { id: 1368, code: "METHEW29111", discount: "30% Off Welcome Kit", description: "Save 30% off - Welcome kit + 5 free sachets when you sign up today.", expiry_date: "2026-08-18T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },
  { id: 1369, code: "METHEW29111", discount: "Free Shipping", description: "Enjoy free shipping on all orders sitewide. Auto-applied with code.", expiry_date: "2026-08-20T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },
  { id: 1370, code: "METHEW29111", discount: "30% Off Subscription", description: "Get 30% off - Daily Ultimate Essentials Pro 90-Days Subscription.", expiry_date: "2026-08-23T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },
  { id: 1371, code: "METHEW29111", discount: "20% Off Subscription", description: "Save 20% off - Daily Ultimate Longevity Monthly Subscription.", expiry_date: "2026-08-21T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },
  { id: 1372, code: "METHEW29111", discount: "$208/mo Bundle", description: "Get The Beckham Stack Bundle starting from just $208/mo at checkout.", expiry_date: "2026-08-17T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },
  { id: 1373, code: "METHEW29111", discount: "5% Off Newsletter", description: "Get an extra 5% off on newsletter sign-up for your first order.", expiry_date: "2026-08-22T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[43], affiliate_url: "https://www.im8health.com/METHEW29111" },

  // Redu Sculpt US
  { id: 1374, code: "METHEW46097", discount: "15% Off", description: "Exclusive 15% off coupon code on all Redu Sculpt body sculpting products.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1375, code: "METHEW46097", discount: "45% Off Summer Sale", description: "Save 45% off during the summer sale on Redu Sculpt body sculpting essentials.", expiry_date: "2026-08-09T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1376, code: "METHEW46097", discount: "10% Off Sitewide", description: "Get 10% off discount code sitewide on Redu Sculpt products.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1377, code: "METHEW46097", discount: "5% Off Promo Code", description: "Exclusive 5% off promo code on Redu Sculpt entire collection.", expiry_date: "2026-08-08T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1378, code: "METHEW46097", discount: "60% Off Subscription", description: "Save 60% off on Redu Sculpt subscription plans and auto-delivery.", expiry_date: "2026-08-11T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1379, code: "METHEW46097", discount: "Free Shipping", description: "Enjoy free shipping sitewide on all Redu Sculpt orders.", expiry_date: "2026-08-12T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1380, code: "METHEW46097", discount: "60% Off Gel & Oil", description: "Get 60% off on Redu Sculpt sculpting gel and body oil products.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1381, code: "METHEW46097", discount: "46% Off Essentials", description: "Save 46% off on body sculpting essentials kit from Redu Sculpt.", expiry_date: "2026-08-08T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1382, code: "METHEW46097", discount: "33% Off Bundles", description: "Get 33% off on Redu Sculpt product bundles and value packs.", expiry_date: "2026-08-11T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1383, code: "METHEW46097", discount: "20% Off Supplements", description: "Save 20% off on Redu Sculpt health supplements and wellness products.", expiry_date: "2026-08-11T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1384, code: "METHEW46097", discount: "$30 Off Green Tea", description: "Get $30 off on Redu Sculpt green tea dietary supplement.", expiry_date: "2026-08-09T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },
  { id: 1385, code: "METHEW46097", discount: "15% Off Newsletter", description: "Sign up for newsletter and get 15% off on your first Redu Sculpt order.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[44], affiliate_url: "https://www.redusculpt.com/METHEW46097" },

  // Evolution Power Tools US
  { id: 1386, code: "METHEWDIPPY5", discount: "15% Off", description: "Exclusive 15% off coupon code on Evolution Power Tools products.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1387, code: "METHEWDIPPY5", discount: "10% Off Sitewide", description: "Get 10% off discount code sitewide on all Evolution Power Tools.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1388, code: "METHEWDIPPY5", discount: "10% Off Price Drop", description: "Save 10% off during the price drop sale on Evolution Power Tools.", expiry_date: "2026-08-08T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1389, code: "METHEWDIPPY5", discount: "30% Off Selected", description: "Get 30% off on selected Evolution Power Tools items.", expiry_date: "2026-08-09T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1390, code: "METHEWDIPPY5", discount: "Free Shipping", description: "Enjoy free shipping on all Evolution Power Tools orders.", expiry_date: "2026-08-11T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1391, code: "METHEWDIPPY5", discount: "25% Off Drills", description: "Save 25% off on drills and cutters from Evolution Power Tools.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1392, code: "METHEWDIPPY5", discount: "20% Off Metal Cutting", description: "Get 20% off on metal cutting tools and blades.", expiry_date: "2026-08-08T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1393, code: "METHEWDIPPY5", discount: "15% Off Outdoor", description: "Save 15% off on outdoor tools including chainsaws and blowers.", expiry_date: "2026-08-09T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1394, code: "METHEWDIPPY5", discount: "$145 Off Chop Saw", description: "Get $145 off on chop saw stand combo from Evolution Power Tools.", expiry_date: "2026-08-11T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1395, code: "METHEWDIPPY5", discount: "10% Off Accessories", description: "Save 10% off on service rewards and accessories.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },
  { id: 1396, code: "METHEWDIPPY5", discount: "5% Off Newsletter", description: "Sign up for newsletter and get 5% off your first Evolution Power Tools order.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[45], affiliate_url: "https://store.evolutionpowertools.com/?ref=METHEWDIPPY" },

  // Maple Prime US
  { id: 1397, code: "REF-7442", discount: "20% Off", description: "Exclusive 20% off coupon code on all Maple Prime fragrances and perfumes.", expiry_date: "2026-08-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1398, code: "REF-7442", discount: "50% Off Summer Sale", description: "Save 50% off during the summer sale on Maple Prime collection.", expiry_date: "2026-08-12T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1399, code: "REF-7442", discount: "15% Off Sitewide", description: "Get 15% off discount code sitewide on Maple Prime products.", expiry_date: "2026-08-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1400, code: "REF-7442", discount: "10% Off Summer Vibes", description: "Get 10% off promo code - summer vibes collection on Maple Prime.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1401, code: "REF-7442", discount: "Free Shipping", description: "Enjoy free shipping on all Maple Prime orders over $49.", expiry_date: "2026-08-14T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1402, code: "REF-7442", discount: "89% Off EDP", description: "Get up to 89% off on Eau de Parfum at Maple Prime fragrance outlet.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1403, code: "REF-7442", discount: "80% Off Perfume Oil", description: "Save 80% off on luxury perfume oils and roll-ons.", expiry_date: "2026-08-08T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1404, code: "REF-7442", discount: "75% Off Unisex", description: "Get 75% off on popular unisex perfumes and signature scents.", expiry_date: "2026-08-09T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1405, code: "REF-7442", discount: "70% Off Body Spray", description: "Save 70% off on body sprays and daily fragrance essentials.", expiry_date: "2026-08-11T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1406, code: "REF-7442", discount: "60% Off Skincare", description: "Get 60% off on premium skincare and cosmetics brands at Maple Prime.", expiry_date: "2026-08-10T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },
  { id: 1407, code: "REF-7442", discount: "15% Off Newsletter", description: "Sign up for newsletter updates and get 15% off your first purchase.", expiry_date: "2026-08-15T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[46], affiliate_url: "https://mapleprime.com/collections/all?bg_ref=al8eMAdGYf&utm_source=Muhammad%20Hazique%20Ali&utm_medium=affiliate&utm_campaign=Maple%20Prime%20Affiliate%20Program" },

  // Nobody's Child US
  { id: 1408, code: "WELCOME15", discount: "15% Off", description: "Get 15% off your first order on newsletter sign up at Nobody's Child.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1409, code: "STUDENT15", discount: "15% Off", description: "Verified 15% student discount at Nobody's Child via UNiDAYS.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1410, code: "KEYWORKER20", discount: "20% Off", description: "Exclusive 20% keyworker discount for healthcare, teachers & transport staff.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1411, code: "FRIEND20", discount: "20% Off", description: "Refer-a-friend and get 20% off your next purchase at Nobody's Child.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1412, code: "DEAL", discount: "Up to 60% Off", description: "Save up to 60% off during the seasonal sale & outlet at Nobody's Child.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1413, code: "DEAL", discount: "Free Shipping", description: "Enjoy free standard shipping on apparel orders over $120.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1414, code: "NC15", discount: "15% Off", description: "Save an extra 15% off sitewide on sustainable womenswear.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1415, code: "SAVE10", discount: "10% Off", description: "Get 10% off sitewide discount code on dresses, tops and outerwear.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1416, code: "EXTRA5", discount: "5% Off", description: "Get an extra 5% off promo code on all sale items.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1417, code: "STYLE15", discount: "15% Off", description: "Save 15% off on sustainable midi dresses and knitwear collection.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },
  { id: 1418, code: "DRESS10", discount: "10% Off", description: "Get 10% off selected dresses and tops at Nobody's Child.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[47], affiliate_url: "https://www.nobodyschild.com/" },

  // Anycubic US
  { id: 1419, code: "PODI25", discount: "$25 Off", description: "Save $25 on your Anycubic 3D printers and wash & cure stations.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[48], affiliate_url: "/go/anycubic-us" },
  { id: 1420, code: "ACSUN15", discount: "$15 Off", description: "Get $15 off on select Anycubic 3D printers and accessories.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[48], affiliate_url: "/go/anycubic-us" },
  { id: 1421, code: "DEAL", discount: "Up to 30% Off", description: "Save up to 30% on Kobra & Photon series 3D printers in summer sale.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[48], affiliate_url: "/go/anycubic-us" },
  { id: 1422, code: "DEAL", discount: "Free Shipping", description: "Free standard shipping on all printer orders over $100.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[48], affiliate_url: "/go/anycubic-us" },

  // Hitway UK
  { id: 1423, code: "HW50", discount: "£50 Off", description: "Get £50 off on HITWAY electric bikes and scooters at checkout.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[49], affiliate_url: "/go/hitway-uk" },
  { id: 1424, code: "DEAL", discount: "£20 Off", description: "Get £20 off your first e-bike order by signing up for the HITWAY newsletter.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[49], affiliate_url: "/go/hitway-uk" },
  { id: 1425, code: "DEAL", discount: "Up to 45% Off", description: "Save up to 45% on electric scooters and hoverboards during summer sale.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[49], affiliate_url: "/go/hitway-uk" },

  // Wolfbox UK
  { id: 1426, code: "WBBESTGEAR", discount: "25% Off", description: "Save 25% sitewide on WOLFBOX dash cams and backup cameras.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[50], affiliate_url: "/go/wolfbox-uk" },
  { id: 1427, code: "ER20", discount: "20% Off", description: "Get 20% off sitewide on smart rear-view mirrors and inflators.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[50], affiliate_url: "/go/wolfbox-uk" },
  { id: 1428, code: "DEAL", discount: "Free Shipping", description: "Enjoy free UK shipping on all WOLFBOX camera system orders.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[50], affiliate_url: "/go/wolfbox-uk" },

  // Fitueyes UK
  { id: 1429, code: "JEAM", discount: "6% Off", description: "Get an extra 6% off sitewide on TV stands and ergonomic office desks.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[51], affiliate_url: "/go/fitueyes-uk" },
  { id: 1430, code: "TRAVIES", discount: "6% Off", description: "Save 6% sitewide on smart height-adjustable standing desks.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[51], affiliate_url: "/go/fitueyes-uk" },
  { id: 1431, code: "DEAL", discount: "5% Off", description: "Sign up for the newsletter and receive 5% off your first Fitueyes order.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[51], affiliate_url: "/go/fitueyes-uk" },

  // Helvetus US
  { id: 1432, code: "WELCOME10", discount: "10% Off", description: "Get 10% off sitewide discount code on premium Helvetus Swiss products.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[52], affiliate_url: "/go/helvetus" },
  { id: 1433, code: "DEAL", discount: "Free Shipping", description: "Enjoy free standard shipping worldwide on all orders from Helvetus.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[52], affiliate_url: "/go/helvetus" },

  // Xsteel Targets US
  { id: 1434, code: "XSTEEL10", discount: "10% Off", description: "Save 10% off discount code sitewide on high-quality steel shooting targets.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[53], affiliate_url: "/go/xsteel-targets" },
  { id: 1435, code: "DEAL", discount: "Free Shipping", description: "Free standard shipping on all steel targets orders over $150.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[53], affiliate_url: "/go/xsteel-targets" },

  // Reconstitution Solution US
  { id: 1436, code: "WATER10", discount: "10% Off", description: "Get 10% off sitewide on sterile and bacteriostatic reconstitution water.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[54], affiliate_url: "/go/reconstitution-solution" },
  { id: 1437, code: "DEAL", discount: "Free Shipping", description: "Free standard delivery on bacteriostatic water bulk packs.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[54], affiliate_url: "/go/reconstitution-solution" },

  // TuxMat US
  { id: 1438, code: "WELCOME", discount: "10% Off", description: "Get an exclusive 10% off coupon code sitewide on custom-fit car mats.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[55], affiliate_url: "/go/tuxmat-us" },
  { id: 1439, code: "DEAL", discount: "30% Off Selected", description: "Save up to 30% on selected laser-measured floor mats and clearance items.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[55], affiliate_url: "/go/tuxmat-us" },
  { id: 1440, code: "DEAL", discount: "Free Shipping", description: "Enjoy free standard shipping on all custom floor liners across the United States.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[55], affiliate_url: "/go/tuxmat-us" },
  { id: 1441, code: "DEAL", discount: "20% Off Audi Mats", description: "Save 20% on custom laser-measured floor mats specifically for Audi models.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[55], affiliate_url: "/go/tuxmat-us" },
  { id: 1442, code: "DEAL", discount: "15% Off Nissan Altima", description: "Get 15% off premium custom-fit trunk mats for Nissan Altima models.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[55], affiliate_url: "/go/tuxmat-us" },
  { id: 1443, code: "DEAL", discount: "$229.80 BMW 2 Series", description: "Purchase custom laser-measured full set floor mats for BMW 2 Series Coupe for just $229.80.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[55], affiliate_url: "/go/tuxmat-us" },
  { id: 1444, code: "DEAL", discount: "$153 Back Seat Only", description: "Buy back seat custom floor mats starting from just $153 for selected car models.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[55], affiliate_url: "/go/tuxmat-us" },
  { id: 1445, code: "DEAL", discount: "10% Off Newsletter", description: "Sign up for the newsletter and receive 10% off coupon code on your first TuxMat order.", expiry_date: "2026-08-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[55], affiliate_url: "/go/tuxmat-us" },

  // Hotel Tonight US
  { id: 1446, code: "WELCOME50", discount: "$50 Off", description: "Save $50 on your first hotel booking when you use the app promo code at checkout.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[56], affiliate_url: "/go/hotel-tonight" },
  { id: 1447, code: "DEAL", discount: "Up to 30% Off", description: "Save up to 30% off hotel rooms globally by joining the free HT Perks loyalty program.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[56], affiliate_url: "/go/hotel-tonight" },
  { id: 1448, code: "DEAL", discount: "40% Off Daily Drop", description: "Reveal personalized, time-sensitive deals and save 40% off select hotel rooms today.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[56], affiliate_url: "/go/hotel-tonight" },
  { id: 1449, code: "DEAL", discount: "$25 Off App Bookings", description: "Save $25 on your next hotel reservation booked via the mobile application.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[56], affiliate_url: "/go/hotel-tonight" },
  { id: 1450, code: "DEAL", discount: "Free Booking Credits", description: "Earn free credits towards hotel stays with the Refer-a-Friend invite code.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[56], affiliate_url: "/go/hotel-tonight" },

  // Swatch US
  { id: 1451, code: "SWATCH10", discount: "10% Off", description: "Get an extra 10% off sitewide discount code on Swatch Swiss watches.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[57], affiliate_url: "/go/swatch" },
  { id: 1452, code: "SCLUB20", discount: "20% Off Selects", description: "Receive 20% off selected watch designs when you join the Swatch Club.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[57], affiliate_url: "/go/swatch" },
  { id: 1453, code: "DEAL", discount: "Free Shipping", description: "Enjoy free standard shipping on all Swatch watch orders over $50.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[57], affiliate_url: "/go/swatch" },
  { id: 1454, code: "DEAL", discount: "10% Off Newsletter", description: "Subscribe to the newsletter for a 10% off coupon code on your first watch purchase.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[57], affiliate_url: "/go/swatch" },
  
  // Harry's US
  { id: 1455, code: "DEAL", discount: "Starter Kit for $5", description: "Get the Truman starter kit with a premium handle, blades, and gel for just $5.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[58], affiliate_url: "/go/harrys" },
  { id: 1456, code: "SHAVE10", discount: "10% Off", description: "Save 10% on your next order of shaving gels, creams, and post-shave balms.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[58], affiliate_url: "/go/harrys" },
  { id: 1457, code: "DEAL", discount: "Free Shipping", description: "Enjoy free standard shipping on all blade refill orders over $25.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[58], affiliate_url: "/go/harrys" },
  { id: 1458, code: "DEAL", discount: "15% Off Grooming Sets", description: "Get 15% off skin care, hair care, and body wash premium grooming gift sets.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[58], affiliate_url: "/go/harrys" },

  // Shipt US
  { id: 1459, code: "DEAL", discount: "50% Off Annual Plan", description: "Get 50% off your first year of Shipt membership ($49 instead of $99) for unlimited free delivery.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[59], affiliate_url: "/go/shipt" },
  { id: 1460, code: "GETSHIPT", discount: "$10 Off", description: "$10 off your first grocery or retail delivery order with active Shipt membership.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[59], affiliate_url: "/go/shipt" },
  { id: 1461, code: "DEAL", discount: "Free Delivery", description: "Enjoy free delivery on all grocery, home, and pet orders over $35.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[59], affiliate_url: "/go/shipt" },
  { id: 1462, code: "DEAL", discount: "$15 Off Target Delivery", description: "Save $15 on your first Shipt delivery from Target stores with active subscription.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[59], affiliate_url: "/go/shipt" }
,

  // Harry's Coupons
  { id: 1463, code: "HARRY15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Harry's with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[60], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=20715&url=http%3A%2F%2Fwww.harrys.com%2F" },
  { id: 1464, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Harry's newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[60], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=20715&url=http%3A%2F%2Fwww.harrys.com%2F" },
  { id: 1465, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Harry's.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[60], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=20715&url=http%3A%2F%2Fwww.harrys.com%2F" },
  { id: 1466, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[60], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=20715&url=http%3A%2F%2Fwww.harrys.com%2F" },

  // Shipt Coupons
  { id: 1467, code: "SHIPT15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Shipt with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[61], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9&url=https%3A%2F%2Fwww.shipt.com%2F" },
  { id: 1468, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Shipt newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[61], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9&url=https%3A%2F%2Fwww.shipt.com%2F" },
  { id: 1469, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Shipt.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[61], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9&url=https%3A%2F%2Fwww.shipt.com%2F" },
  { id: 1470, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[61], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9&url=https%3A%2F%2Fwww.shipt.com%2F" },

  // Meowant Coupons
  { id: 1471, code: "MEOWA15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Meowant with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[62], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=20598&url=https%3A%2F%2Fmeowant.com%2F" },
  { id: 1472, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Meowant newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[62], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=20598&url=https%3A%2F%2Fmeowant.com%2F" },
  { id: 1473, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Meowant.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[62], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=20598&url=https%3A%2F%2Fmeowant.com%2F" },
  { id: 1474, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[62], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=20598&url=https%3A%2F%2Fmeowant.com%2F" },

  // Shelly EU & Coupons
  { id: 1475, code: "SHELL15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Shelly EU & with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[63], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=51767&url=https%3A%2F%2Fwww.shelly.com%2F" },
  { id: 1476, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Shelly EU & newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[63], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=51767&url=https%3A%2F%2Fwww.shelly.com%2F" },
  { id: 1477, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Shelly EU &.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[63], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=51767&url=https%3A%2F%2Fwww.shelly.com%2F" },
  { id: 1478, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[63], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=51767&url=https%3A%2F%2Fwww.shelly.com%2F" },

  // Larine Company Coupons
  { id: 1479, code: "LARIN15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Larine Company with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[64], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71455&url=https%3A%2F%2Fbuylarine.com%2F" },
  { id: 1480, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Larine Company newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[64], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71455&url=https%3A%2F%2Fbuylarine.com%2F" },
  { id: 1481, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Larine Company.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[64], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71455&url=https%3A%2F%2Fbuylarine.com%2F" },
  { id: 1482, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[64], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71455&url=https%3A%2F%2Fbuylarine.com%2F" },

  // Spothero Coupons
  { id: 1483, code: "SPOTH15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Spothero with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[65], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=11937&url=https%3A%2F%2Fspothero.com%2F" },
  { id: 1484, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Spothero newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[65], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=11937&url=https%3A%2F%2Fspothero.com%2F" },
  { id: 1485, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Spothero.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[65], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=11937&url=https%3A%2F%2Fspothero.com%2F" },
  { id: 1486, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[65], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=11937&url=https%3A%2F%2Fspothero.com%2F" },

  // Taylor Made Coupons
  { id: 1487, code: "TAYLO15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Taylor Made with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[66], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16225&url=https%3A%2F%2Fwww.taylormadegolf.com%2F" },
  { id: 1488, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Taylor Made newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[66], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16225&url=https%3A%2F%2Fwww.taylormadegolf.com%2F" },
  { id: 1489, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Taylor Made.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[66], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16225&url=https%3A%2F%2Fwww.taylormadegolf.com%2F" },
  { id: 1490, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[66], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16225&url=https%3A%2F%2Fwww.taylormadegolf.com%2F" },

  // Choice Hotels Coupons
  { id: 1491, code: "CHOIC15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Choice Hotels with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[67], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12844&url=https%3A%2F%2Fwww.choicehotels.com%2F" },
  { id: 1492, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Choice Hotels newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[67], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12844&url=https%3A%2F%2Fwww.choicehotels.com%2F" },
  { id: 1493, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Choice Hotels.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[67], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12844&url=https%3A%2F%2Fwww.choicehotels.com%2F" },
  { id: 1494, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[67], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12844&url=https%3A%2F%2Fwww.choicehotels.com%2F" },

  // Meshy Coupons
  { id: 1495, code: "MESHY15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Meshy with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[68], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=24103&url=https%3A%2F%2Fwww.meshy.ai%2F" },
  { id: 1496, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Meshy newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[68], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=24103&url=https%3A%2F%2Fwww.meshy.ai%2F" },
  { id: 1497, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Meshy.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[68], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=24103&url=https%3A%2F%2Fwww.meshy.ai%2F" },
  { id: 1498, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[68], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=24103&url=https%3A%2F%2Fwww.meshy.ai%2F" },

  // Kate Spade Coupons
  { id: 1499, code: "KATES15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Kate Spade with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[69], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=15971&url=https%3A%2F%2Fwww.katespade.com" },
  { id: 1500, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Kate Spade newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[69], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=15971&url=https%3A%2F%2Fwww.katespade.com" },
  { id: 1501, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Kate Spade.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[69], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=15971&url=https%3A%2F%2Fwww.katespade.com" },
  { id: 1502, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[69], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=15971&url=https%3A%2F%2Fwww.katespade.com" },

  // Hilo Coupons
  { id: 1503, code: "HILO15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Hilo with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[70], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74602&url=https%3A%2F%2Fus.hilo.com" },
  { id: 1504, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Hilo newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[70], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74602&url=https%3A%2F%2Fus.hilo.com" },
  { id: 1505, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Hilo.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[70], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74602&url=https%3A%2F%2Fus.hilo.com" },
  { id: 1506, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[70], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74602&url=https%3A%2F%2Fus.hilo.com" },

  // LegalZoom Coupons
  { id: 1507, code: "LEGAL15", discount: "15% Off", description: "Get 15% off sitewide on all orders from LegalZoom with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[71], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27814&url=https%3A%2F%2Fwww.legalzoom.com%2F" },
  { id: 1508, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for LegalZoom newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[71], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27814&url=https%3A%2F%2Fwww.legalzoom.com%2F" },
  { id: 1509, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from LegalZoom.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[71], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27814&url=https%3A%2F%2Fwww.legalzoom.com%2F" },
  { id: 1510, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[71], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27814&url=https%3A%2F%2Fwww.legalzoom.com%2F" },

  // Bedsure Coupons
  { id: 1511, code: "BEDSU15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Bedsure with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[72], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=11862&url=https%3A%2F%2Fbedsurehome.com%2F" },
  { id: 1512, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Bedsure newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[72], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=11862&url=https%3A%2F%2Fbedsurehome.com%2F" },
  { id: 1513, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Bedsure.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[72], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=11862&url=https%3A%2F%2Fbedsurehome.com%2F" },
  { id: 1514, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[72], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=11862&url=https%3A%2F%2Fbedsurehome.com%2F" },

  // Dewenwils Coupons
  { id: 1515, code: "DEWEN15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Dewenwils with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[73], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71441&url=https%3A%2F%2Fdewenwils.com%2F" },
  { id: 1516, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Dewenwils newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[73], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71441&url=https%3A%2F%2Fdewenwils.com%2F" },
  { id: 1517, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Dewenwils.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[73], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71441&url=https%3A%2F%2Fdewenwils.com%2F" },
  { id: 1518, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[73], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71441&url=https%3A%2F%2Fdewenwils.com%2F" },

  // TORRAS Coupons
  { id: 1519, code: "TORRA15", discount: "15% Off", description: "Get 15% off sitewide on all orders from TORRAS with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[74], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=30155&url=https%3A%2F%2Ftorraslife.com%2F" },
  { id: 1520, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for TORRAS newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[74], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=30155&url=https%3A%2F%2Ftorraslife.com%2F" },
  { id: 1521, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from TORRAS.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[74], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=30155&url=https%3A%2F%2Ftorraslife.com%2F" },
  { id: 1522, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[74], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=30155&url=https%3A%2F%2Ftorraslife.com%2F" },

  // Jack Rogers Coupons
  { id: 1523, code: "JACKR15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Jack Rogers with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[75], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=14334&url=https%3A%2F%2Fwww.jackrogersusa.com" },
  { id: 1524, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Jack Rogers newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[75], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=14334&url=https%3A%2F%2Fwww.jackrogersusa.com" },
  { id: 1525, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Jack Rogers.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[75], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=14334&url=https%3A%2F%2Fwww.jackrogersusa.com" },
  { id: 1526, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[75], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=14334&url=https%3A%2F%2Fwww.jackrogersusa.com" },

  // Suzanne Somers Coupons
  { id: 1527, code: "SUZAN15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Suzanne Somers with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[76], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12257&url=http%3A%2F%2Fsuzannesomers.com%2F" },
  { id: 1528, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Suzanne Somers newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[76], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12257&url=http%3A%2F%2Fsuzannesomers.com%2F" },
  { id: 1529, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Suzanne Somers.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[76], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12257&url=http%3A%2F%2Fsuzannesomers.com%2F" },
  { id: 1530, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[76], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12257&url=http%3A%2F%2Fsuzannesomers.com%2F" },

  // The Wine Collective Coupons
  { id: 1531, code: "THEWI15", discount: "15% Off", description: "Get 15% off sitewide on all orders from The Wine Collective with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[77], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43376&url=https%3A%2F%2Fwww.thewinecollective.com.au%2F" },
  { id: 1532, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for The Wine Collective newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[77], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43376&url=https%3A%2F%2Fwww.thewinecollective.com.au%2F" },
  { id: 1533, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from The Wine Collective.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[77], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43376&url=https%3A%2F%2Fwww.thewinecollective.com.au%2F" },
  { id: 1534, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[77], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43376&url=https%3A%2F%2Fwww.thewinecollective.com.au%2F" },

  // Sleepyhead Coupons
  { id: 1535, code: "SLEEP15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Sleepyhead with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[78], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73422&url=https%3A%2F%2Fsleepyheadusa.com%2F" },
  { id: 1536, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Sleepyhead newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[78], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73422&url=https%3A%2F%2Fsleepyheadusa.com%2F" },
  { id: 1537, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Sleepyhead.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[78], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73422&url=https%3A%2F%2Fsleepyheadusa.com%2F" },
  { id: 1538, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[78], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73422&url=https%3A%2F%2Fsleepyheadusa.com%2F" },

  // Sperry Coupons
  { id: 1539, code: "SPERR15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Sperry with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[79], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=1824&url=https%3A%2F%2Fwww.sperry.com%2Fus%2Fen_US" },
  { id: 1540, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Sperry newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[79], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=1824&url=https%3A%2F%2Fwww.sperry.com%2Fus%2Fen_US" },
  { id: 1541, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Sperry.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[79], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=1824&url=https%3A%2F%2Fwww.sperry.com%2Fus%2Fen_US" },
  { id: 1542, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[79], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=1824&url=https%3A%2F%2Fwww.sperry.com%2Fus%2Fen_US" },

  // Evelyn & Bobbie Coupons
  { id: 1543, code: "EVELY15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Evelyn & Bobbie with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[80], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=65342&url=https%3A%2F%2Fevelynbobbie.com" },
  { id: 1544, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Evelyn & Bobbie newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[80], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=65342&url=https%3A%2F%2Fevelynbobbie.com" },
  { id: 1545, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Evelyn & Bobbie.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[80], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=65342&url=https%3A%2F%2Fevelynbobbie.com" },
  { id: 1546, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[80], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=65342&url=https%3A%2F%2Fevelynbobbie.com" },

  // 1ink.com Coupons
  { id: 1547, code: "INKCO15", discount: "15% Off", description: "Get 15% off sitewide on all orders from 1ink.com with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[81], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=14311&url=https%3A%2F%2Fwww.1ink.com" },
  { id: 1548, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for 1ink.com newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[81], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=14311&url=https%3A%2F%2Fwww.1ink.com" },
  { id: 1549, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from 1ink.com.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[81], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=14311&url=https%3A%2F%2Fwww.1ink.com" },
  { id: 1550, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[81], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=14311&url=https%3A%2F%2Fwww.1ink.com" },

  // Flick VPN Coupons
  { id: 1551, code: "FLICK15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Flick VPN with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[82], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73824&url=https%3A%2F%2Fget.flickvpn.com%2F" },
  { id: 1552, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Flick VPN newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[82], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73824&url=https%3A%2F%2Fget.flickvpn.com%2F" },
  { id: 1553, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Flick VPN.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[82], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73824&url=https%3A%2F%2Fget.flickvpn.com%2F" },
  { id: 1554, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[82], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73824&url=https%3A%2F%2Fget.flickvpn.com%2F" },

  // Champion Life Insurance Coupons
  { id: 1555, code: "CHAMP15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Champion Life Insurance with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[83], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73160&url=https%3A%2F%2Fchampionlifeinsurance.com" },
  { id: 1556, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Champion Life Insurance newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[83], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73160&url=https%3A%2F%2Fchampionlifeinsurance.com" },
  { id: 1557, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Champion Life Insurance.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[83], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73160&url=https%3A%2F%2Fchampionlifeinsurance.com" },
  { id: 1558, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[83], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73160&url=https%3A%2F%2Fchampionlifeinsurance.com" },

  // Remedy Meds Coupons
  { id: 1559, code: "REMED15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Remedy Meds with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[84], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27722&url=https%3A%2F%2Fremedymeds.com%2F" },
  { id: 1560, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Remedy Meds newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[84], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27722&url=https%3A%2F%2Fremedymeds.com%2F" },
  { id: 1561, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Remedy Meds.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[84], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27722&url=https%3A%2F%2Fremedymeds.com%2F" },
  { id: 1562, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[84], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27722&url=https%3A%2F%2Fremedymeds.com%2F" },

  // Norton LifeLock Coupons
  { id: 1563, code: "NORTO15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Norton LifeLock with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[85], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=263&url=https%3A%2F%2Flifelock.norton.com%2Foffers" },
  { id: 1564, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Norton LifeLock newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[85], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=263&url=https%3A%2F%2Flifelock.norton.com%2Foffers" },
  { id: 1565, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Norton LifeLock.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[85], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=263&url=https%3A%2F%2Flifelock.norton.com%2Foffers" },
  { id: 1566, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[85], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=263&url=https%3A%2F%2Flifelock.norton.com%2Foffers" },

  // Network Solutions Coupons
  { id: 1567, code: "NETWO15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Network Solutions with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[86], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=69440&url=https%3A%2F%2Fwww.networksolutions.com%2F" },
  { id: 1568, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Network Solutions newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[86], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=69440&url=https%3A%2F%2Fwww.networksolutions.com%2F" },
  { id: 1569, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Network Solutions.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[86], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=69440&url=https%3A%2F%2Fwww.networksolutions.com%2F" },
  { id: 1570, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[86], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=69440&url=https%3A%2F%2Fwww.networksolutions.com%2F" },

  // Cars24 Coupons
  { id: 1571, code: "CARS15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Cars24 with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[87], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=7188&url=https%3A%2F%2Fwww.cars24.com.au%2F" },
  { id: 1572, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Cars24 newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[87], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=7188&url=https%3A%2F%2Fwww.cars24.com.au%2F" },
  { id: 1573, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Cars24.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[87], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=7188&url=https%3A%2F%2Fwww.cars24.com.au%2F" },
  { id: 1574, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[87], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=7188&url=https%3A%2F%2Fwww.cars24.com.au%2F" },

  // NexBurn Coupons
  { id: 1575, code: "NEXBU15", discount: "15% Off", description: "Get 15% off sitewide on all orders from NexBurn with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[88], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74824&url=https%3A%2F%2Fnexburn.mycartpanda.com%2F" },
  { id: 1576, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for NexBurn newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[88], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74824&url=https%3A%2F%2Fnexburn.mycartpanda.com%2F" },
  { id: 1577, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from NexBurn.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[88], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74824&url=https%3A%2F%2Fnexburn.mycartpanda.com%2F" },
  { id: 1578, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[88], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74824&url=https%3A%2F%2Fnexburn.mycartpanda.com%2F" },

  // Asknow Coupons
  { id: 1579, code: "ASKNO15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Asknow with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[89], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=33153&url=https%3A%2F%2Fasknow.com%2F" },
  { id: 1580, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Asknow newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[89], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=33153&url=https%3A%2F%2Fasknow.com%2F" },
  { id: 1581, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Asknow.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[89], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=33153&url=https%3A%2F%2Fasknow.com%2F" },
  { id: 1582, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[89], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=33153&url=https%3A%2F%2Fasknow.com%2F" },

  // Lyca Mobile (US) Coupons
  { id: 1583, code: "LYCAM15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Lyca Mobile (US) with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[90], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74645&url=https%3A%2F%2Fwww.lycamobile.us%2F" },
  { id: 1584, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Lyca Mobile (US) newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[90], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74645&url=https%3A%2F%2Fwww.lycamobile.us%2F" },
  { id: 1585, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Lyca Mobile (US).", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[90], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74645&url=https%3A%2F%2Fwww.lycamobile.us%2F" },
  { id: 1586, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[90], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74645&url=https%3A%2F%2Fwww.lycamobile.us%2F" },

  // Factor Coupons
  { id: 1587, code: "FACTO15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Factor with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[91], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74290&url=https%3A%2F%2Fwww.factormeals.ca%2Fplans" },
  { id: 1588, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Factor newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[91], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74290&url=https%3A%2F%2Fwww.factormeals.ca%2Fplans" },
  { id: 1589, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Factor.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[91], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74290&url=https%3A%2F%2Fwww.factormeals.ca%2Fplans" },
  { id: 1590, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[91], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74290&url=https%3A%2F%2Fwww.factormeals.ca%2Fplans" },

  // American Dream Auto Protect Coupons
  { id: 1591, code: "AMERI15", discount: "15% Off", description: "Get 15% off sitewide on all orders from American Dream Auto Protect with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[92], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=37441&url=https%3A%2F%2Famericandreamautoprotect.com%2Fcaquote3" },
  { id: 1592, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for American Dream Auto Protect newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[92], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=37441&url=https%3A%2F%2Famericandreamautoprotect.com%2Fcaquote3" },
  { id: 1593, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from American Dream Auto Protect.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[92], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=37441&url=https%3A%2F%2Famericandreamautoprotect.com%2Fcaquote3" },
  { id: 1594, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[92], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=37441&url=https%3A%2F%2Famericandreamautoprotect.com%2Fcaquote3" },

  // Bark Parental Controls Coupons
  { id: 1595, code: "BARKP15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Bark Parental Controls with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[93], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=26703&url=https%3A%2F%2Fwww.bark.us%2F" },
  { id: 1596, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Bark Parental Controls newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[93], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=26703&url=https%3A%2F%2Fwww.bark.us%2F" },
  { id: 1597, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Bark Parental Controls.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[93], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=26703&url=https%3A%2F%2Fwww.bark.us%2F" },
  { id: 1598, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[93], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=26703&url=https%3A%2F%2Fwww.bark.us%2F" },

  // Aura - Parental Controls Coupons
  { id: 1599, code: "AURAP15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Aura - Parental Controls with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[94], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=34925&url=https%3A%2F%2Fbuy.aura.com%2Fparental-controls-3-iphone-android" },
  { id: 1600, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Aura - Parental Controls newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[94], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=34925&url=https%3A%2F%2Fbuy.aura.com%2Fparental-controls-3-iphone-android" },
  { id: 1601, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Aura - Parental Controls.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[94], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=34925&url=https%3A%2F%2Fbuy.aura.com%2Fparental-controls-3-iphone-android" },
  { id: 1602, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[94], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=34925&url=https%3A%2F%2Fbuy.aura.com%2Fparental-controls-3-iphone-android" },

  // Dropps.com Coupons
  { id: 1603, code: "DROPP15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Dropps.com with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[95], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=5792&url=https%3A%2F%2Fdropps.com%2F" },
  { id: 1604, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Dropps.com newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[95], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=5792&url=https%3A%2F%2Fdropps.com%2F" },
  { id: 1605, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Dropps.com.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[95], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=5792&url=https%3A%2F%2Fdropps.com%2F" },
  { id: 1606, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[95], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=5792&url=https%3A%2F%2Fdropps.com%2F" },

  // Greencross Vets Coupons
  { id: 1607, code: "GREEN15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Greencross Vets with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[96], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43039&url=https%3A%2F%2Fwww.greencrossvets.com.au%2F" },
  { id: 1608, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Greencross Vets newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[96], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43039&url=https%3A%2F%2Fwww.greencrossvets.com.au%2F" },
  { id: 1609, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Greencross Vets.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[96], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43039&url=https%3A%2F%2Fwww.greencrossvets.com.au%2F" },
  { id: 1610, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[96], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43039&url=https%3A%2F%2Fwww.greencrossvets.com.au%2F" },

  // Bullion Coupons
  { id: 1611, code: "BULLI15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Bullion with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[97], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73531&url=https%3A%2F%2Fwww.bullion.com%2F" },
  { id: 1612, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Bullion newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[97], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73531&url=https%3A%2F%2Fwww.bullion.com%2F" },
  { id: 1613, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Bullion.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[97], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73531&url=https%3A%2F%2Fwww.bullion.com%2F" },
  { id: 1614, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[97], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73531&url=https%3A%2F%2Fwww.bullion.com%2F" },

  // DeleteMe Coupons
  { id: 1615, code: "DELET15", discount: "15% Off", description: "Get 15% off sitewide on all orders from DeleteMe with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[98], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=11942&url=https%3A%2F%2Fjoindeleteme.com%2F" },
  { id: 1616, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for DeleteMe newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[98], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=11942&url=https%3A%2F%2Fjoindeleteme.com%2F" },
  { id: 1617, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from DeleteMe.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[98], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=11942&url=https%3A%2F%2Fjoindeleteme.com%2F" },
  { id: 1618, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[98], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=11942&url=https%3A%2F%2Fjoindeleteme.com%2F" },

  // College Ave Coupons
  { id: 1619, code: "COLLE15", discount: "15% Off", description: "Get 15% off sitewide on all orders from College Ave with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[99], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=34794&url=https%3A%2F%2Fwww.collegeave.com%2F" },
  { id: 1620, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for College Ave newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[99], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=34794&url=https%3A%2F%2Fwww.collegeave.com%2F" },
  { id: 1621, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from College Ave.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[99], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=34794&url=https%3A%2F%2Fwww.collegeave.com%2F" },
  { id: 1622, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[99], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=34794&url=https%3A%2F%2Fwww.collegeave.com%2F" },

  // Select Home Warranty Coupons
  { id: 1623, code: "SELEC15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Select Home Warranty with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[100], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=54780&url=https%3A%2F%2Fshw.selecthomewarranty.com%2Fbest-in-class-home-warranty-coverage" },
  { id: 1624, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Select Home Warranty newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[100], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=54780&url=https%3A%2F%2Fshw.selecthomewarranty.com%2Fbest-in-class-home-warranty-coverage" },
  { id: 1625, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Select Home Warranty.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[100], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=54780&url=https%3A%2F%2Fshw.selecthomewarranty.com%2Fbest-in-class-home-warranty-coverage" },
  { id: 1626, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[100], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=54780&url=https%3A%2F%2Fshw.selecthomewarranty.com%2Fbest-in-class-home-warranty-coverage" },

  // Insurify Coupons
  { id: 1627, code: "INSUR15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Insurify with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[101], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=18501&url=https%3A%2F%2Finsurify.com%2F" },
  { id: 1628, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Insurify newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[101], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=18501&url=https%3A%2F%2Finsurify.com%2F" },
  { id: 1629, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Insurify.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[101], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=18501&url=https%3A%2F%2Finsurify.com%2F" },
  { id: 1630, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[101], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=18501&url=https%3A%2F%2Finsurify.com%2F" },

  // Compare.com Coupons
  { id: 1631, code: "COMPA15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Compare.com with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[102], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74580&url=https%3A%2F%2Fwww.compare.com%2F" },
  { id: 1632, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Compare.com newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[102], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74580&url=https%3A%2F%2Fwww.compare.com%2F" },
  { id: 1633, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Compare.com.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[102], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74580&url=https%3A%2F%2Fwww.compare.com%2F" },
  { id: 1634, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[102], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74580&url=https%3A%2F%2Fwww.compare.com%2F" },

  // HomeSafe Coupons
  { id: 1635, code: "HOMES15", discount: "15% Off", description: "Get 15% off sitewide on all orders from HomeSafe with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[103], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=36162&url=https%3A%2F%2Fhomesafe.com%2Fget-free-quote%2F" },
  { id: 1636, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for HomeSafe newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[103], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=36162&url=https%3A%2F%2Fhomesafe.com%2Fget-free-quote%2F" },
  { id: 1637, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from HomeSafe.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[103], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=36162&url=https%3A%2F%2Fhomesafe.com%2Fget-free-quote%2F" },
  { id: 1638, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[103], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=36162&url=https%3A%2F%2Fhomesafe.com%2Fget-free-quote%2F" },

  // The Times Literary Supplement Coupons
  { id: 1639, code: "THETI15", discount: "15% Off", description: "Get 15% off sitewide on all orders from The Times Literary Supplement with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[104], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=28992&url=https%3A%2F%2Fwww.the-tls.co.uk%2Fbuy%2F" },
  { id: 1640, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for The Times Literary Supplement newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[104], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=28992&url=https%3A%2F%2Fwww.the-tls.co.uk%2Fbuy%2F" },
  { id: 1641, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from The Times Literary Supplement.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[104], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=28992&url=https%3A%2F%2Fwww.the-tls.co.uk%2Fbuy%2F" },
  { id: 1642, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[104], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=28992&url=https%3A%2F%2Fwww.the-tls.co.uk%2Fbuy%2F" },

  // DaBella Coupons
  { id: 1643, code: "DABEL15", discount: "15% Off", description: "Get 15% off sitewide on all orders from DaBella with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[105], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74509&url=https%3A%2F%2Fdabellaremodeling.com" },
  { id: 1644, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for DaBella newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[105], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74509&url=https%3A%2F%2Fdabellaremodeling.com" },
  { id: 1645, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from DaBella.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[105], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74509&url=https%3A%2F%2Fdabellaremodeling.com" },
  { id: 1646, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[105], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74509&url=https%3A%2F%2Fdabellaremodeling.com" },

  // Income Insurance Limited Coupons
  { id: 1647, code: "INCOM15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Income Insurance Limited with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[106], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27019&url=https%3A%2F%2Fwww.income.com.sg%2F" },
  { id: 1648, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Income Insurance Limited newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[106], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27019&url=https%3A%2F%2Fwww.income.com.sg%2F" },
  { id: 1649, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Income Insurance Limited.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[106], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27019&url=https%3A%2F%2Fwww.income.com.sg%2F" },
  { id: 1650, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[106], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27019&url=https%3A%2F%2Fwww.income.com.sg%2F" },

  // Squarespace Coupons
  { id: 1651, code: "SQUAR15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Squarespace with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[107], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16489&url=https%3A%2F%2Fwww.squarespace.com%2F" },
  { id: 1652, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Squarespace newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[107], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16489&url=https%3A%2F%2Fwww.squarespace.com%2F" },
  { id: 1653, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Squarespace.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[107], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16489&url=https%3A%2F%2Fwww.squarespace.com%2F" },
  { id: 1654, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[107], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16489&url=https%3A%2F%2Fwww.squarespace.com%2F" },

  // Claim Climbers Coupons
  { id: 1655, code: "CLAIM15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Claim Climbers with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[108], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27475&url=https%3A%2F%2Fstart.claimclimbers.com%2F" },
  { id: 1656, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Claim Climbers newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[108], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27475&url=https%3A%2F%2Fstart.claimclimbers.com%2F" },
  { id: 1657, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Claim Climbers.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[108], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27475&url=https%3A%2F%2Fstart.claimclimbers.com%2F" },
  { id: 1658, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[108], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=27475&url=https%3A%2F%2Fstart.claimclimbers.com%2F" },

  // Patriot Frontline Coupons
  { id: 1659, code: "PATRI15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Patriot Frontline with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[109], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43314&url=https%3A%2F%2Fpatriotfrontline.com%2Fplans" },
  { id: 1660, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Patriot Frontline newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[109], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43314&url=https%3A%2F%2Fpatriotfrontline.com%2Fplans" },
  { id: 1661, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Patriot Frontline.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[109], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43314&url=https%3A%2F%2Fpatriotfrontline.com%2Fplans" },
  { id: 1662, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[109], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43314&url=https%3A%2F%2Fpatriotfrontline.com%2Fplans" }
,

  // DocSearch - GLP-1 Coupons
  { id: 1663, code: "DOCSE15", discount: "15% Off", description: "Get 15% off sitewide on all orders from DocSearch - GLP-1 with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[110], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=32918&url=https%3A%2F%2Fdocsearch.com%2Ftreatment-plans-affiliates%2F" },
  { id: 1664, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for DocSearch - GLP-1 newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[110], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=32918&url=https%3A%2F%2Fdocsearch.com%2Ftreatment-plans-affiliates%2F" },
  { id: 1665, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from DocSearch - GLP-1.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[110], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=32918&url=https%3A%2F%2Fdocsearch.com%2Ftreatment-plans-affiliates%2F" },
  { id: 1666, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[110], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=32918&url=https%3A%2F%2Fdocsearch.com%2Ftreatment-plans-affiliates%2F" },

  // DocSearch Coupons
  { id: 1667, code: "DOCSE15", discount: "15% Off", description: "Get 15% off sitewide on all orders from DocSearch with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[111], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74538&url=https%3A%2F%2Fdocsearch.com%2F" },
  { id: 1668, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for DocSearch newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[111], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74538&url=https%3A%2F%2Fdocsearch.com%2F" },
  { id: 1669, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from DocSearch.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[111], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74538&url=https%3A%2F%2Fdocsearch.com%2F" },
  { id: 1670, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[111], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74538&url=https%3A%2F%2Fdocsearch.com%2F" },

  // Lemonaid Health Coupons
  { id: 1671, code: "LEMON15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Lemonaid Health with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[112], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=38532&url=https%3A%2F%2Fwww.lemonaidhealth.com%2F" },
  { id: 1672, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Lemonaid Health newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[112], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=38532&url=https%3A%2F%2Fwww.lemonaidhealth.com%2F" },
  { id: 1673, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Lemonaid Health.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[112], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=38532&url=https%3A%2F%2Fwww.lemonaidhealth.com%2F" },
  { id: 1674, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[112], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=38532&url=https%3A%2F%2Fwww.lemonaidhealth.com%2F" },

  // Global Trade Rates Coupons
  { id: 1675, code: "GLOBA15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Global Trade Rates with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[113], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73651&url=https%3A%2F%2Fglobaltraderates.co.uk%2F" },
  { id: 1676, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Global Trade Rates newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[113], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73651&url=https%3A%2F%2Fglobaltraderates.co.uk%2F" },
  { id: 1677, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Global Trade Rates.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[113], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73651&url=https%3A%2F%2Fglobaltraderates.co.uk%2F" },
  { id: 1678, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[113], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73651&url=https%3A%2F%2Fglobaltraderates.co.uk%2F" },

  // Flashcloud Coupons
  { id: 1679, code: "FLASH15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Flashcloud with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[114], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73658&url=https%3A%2F%2Fflashcloud.com%2F" },
  { id: 1680, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Flashcloud newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[114], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73658&url=https%3A%2F%2Fflashcloud.com%2F" },
  { id: 1681, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Flashcloud.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[114], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73658&url=https%3A%2F%2Fflashcloud.com%2F" },
  { id: 1682, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[114], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73658&url=https%3A%2F%2Fflashcloud.com%2F" },

  // Macroplate Coupons
  { id: 1683, code: "MACRO15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Macroplate with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[115], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73872&url=https%3A%2F%2Fapp.macro-plate.com%2F" },
  { id: 1684, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Macroplate newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[115], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73872&url=https%3A%2F%2Fapp.macro-plate.com%2F" },
  { id: 1685, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Macroplate.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[115], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73872&url=https%3A%2F%2Fapp.macro-plate.com%2F" },
  { id: 1686, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[115], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73872&url=https%3A%2F%2Fapp.macro-plate.com%2F" },

  // MINT home Coupons
  { id: 1687, code: "MINTH15", discount: "15% Off", description: "Get 15% off sitewide on all orders from MINT home with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[116], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73900&url=https%3A%2F%2Fminthome.shop%2F" },
  { id: 1688, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for MINT home newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[116], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73900&url=https%3A%2F%2Fminthome.shop%2F" },
  { id: 1689, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from MINT home.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[116], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73900&url=https%3A%2F%2Fminthome.shop%2F" },
  { id: 1690, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[116], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73900&url=https%3A%2F%2Fminthome.shop%2F" },

  // Artlist Coupons
  { id: 1691, code: "ARTLI15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Artlist with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[117], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73951&url=https%3A%2F%2Fartlist.io%2F" },
  { id: 1692, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Artlist newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[117], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73951&url=https%3A%2F%2Fartlist.io%2F" },
  { id: 1693, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Artlist.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[117], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73951&url=https%3A%2F%2Fartlist.io%2F" },
  { id: 1694, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[117], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73951&url=https%3A%2F%2Fartlist.io%2F" },

  // Remedy Place Coupons
  { id: 1695, code: "REMED15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Remedy Place with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[118], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74357&url=https%3A%2F%2Fwww.remedyplace.com%2F" },
  { id: 1696, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Remedy Place newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[118], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74357&url=https%3A%2F%2Fwww.remedyplace.com%2F" },
  { id: 1697, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Remedy Place.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[118], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74357&url=https%3A%2F%2Fwww.remedyplace.com%2F" },
  { id: 1698, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[118], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74357&url=https%3A%2F%2Fwww.remedyplace.com%2F" },

  // Neu Money No-Interest Credit Card Coupons
  { id: 1699, code: "NEUMO15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Neu Money No-Interest Credit Card with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[119], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74184&url=https%3A%2F%2Fgetneucard.com%2Fno-interest" },
  { id: 1700, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Neu Money No-Interest Credit Card newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[119], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74184&url=https%3A%2F%2Fgetneucard.com%2Fno-interest" },
  { id: 1701, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Neu Money No-Interest Credit Card.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[119], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74184&url=https%3A%2F%2Fgetneucard.com%2Fno-interest" },
  { id: 1702, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[119], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74184&url=https%3A%2F%2Fgetneucard.com%2Fno-interest" },

  // Neu Money No-Annual-Fee Credit Card Coupons
  { id: 1703, code: "NEUMO15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Neu Money No-Annual-Fee Credit Card with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[120], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74183&url=https%3A%2F%2Fgetneucard.com%2Fno-annual-fee" },
  { id: 1704, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Neu Money No-Annual-Fee Credit Card newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[120], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74183&url=https%3A%2F%2Fgetneucard.com%2Fno-annual-fee" },
  { id: 1705, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Neu Money No-Annual-Fee Credit Card.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[120], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74183&url=https%3A%2F%2Fgetneucard.com%2Fno-annual-fee" },
  { id: 1706, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[120], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74183&url=https%3A%2F%2Fgetneucard.com%2Fno-annual-fee" },

  // Qtrade Coupons
  { id: 1707, code: "QTRAD15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Qtrade with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[121], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72831&url=https%3A%2F%2Fwww.qtrade.ca%2Fen%2Finvestor.html%3Fpartner%3Dfintelconnect" },
  { id: 1708, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Qtrade newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[121], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72831&url=https%3A%2F%2Fwww.qtrade.ca%2Fen%2Finvestor.html%3Fpartner%3Dfintelconnect" },
  { id: 1709, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Qtrade.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[121], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72831&url=https%3A%2F%2Fwww.qtrade.ca%2Fen%2Finvestor.html%3Fpartner%3Dfintelconnect" },
  { id: 1710, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[121], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72831&url=https%3A%2F%2Fwww.qtrade.ca%2Fen%2Finvestor.html%3Fpartner%3Dfintelconnect" },

  // Neo Financial Coupons
  { id: 1711, code: "NEOFI15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Neo Financial with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[122], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72830&url=https%3A%2F%2Fwww.neofinancial.com%2F" },
  { id: 1712, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Neo Financial newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[122], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72830&url=https%3A%2F%2Fwww.neofinancial.com%2F" },
  { id: 1713, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Neo Financial.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[122], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72830&url=https%3A%2F%2Fwww.neofinancial.com%2F" },
  { id: 1714, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[122], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72830&url=https%3A%2F%2Fwww.neofinancial.com%2F" },

  // Spring Financial Coupons
  { id: 1715, code: "SPRIN15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Spring Financial with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[123], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72832&url=https%3A%2F%2Fwww.springfinancial.ca" },
  { id: 1716, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Spring Financial newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[123], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72832&url=https%3A%2F%2Fwww.springfinancial.ca" },
  { id: 1717, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Spring Financial.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[123], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72832&url=https%3A%2F%2Fwww.springfinancial.ca" },
  { id: 1718, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[123], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72832&url=https%3A%2F%2Fwww.springfinancial.ca" },

  // AmazingClubs Coupons
  { id: 1719, code: "AMAZI15", discount: "15% Off", description: "Get 15% off sitewide on all orders from AmazingClubs with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[124], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71732&url=https%3A%2F%2Fwww.amazingclubs.com%2F" },
  { id: 1720, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for AmazingClubs newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[124], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71732&url=https%3A%2F%2Fwww.amazingclubs.com%2F" },
  { id: 1721, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from AmazingClubs.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[124], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71732&url=https%3A%2F%2Fwww.amazingclubs.com%2F" },
  { id: 1722, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[124], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71732&url=https%3A%2F%2Fwww.amazingclubs.com%2F" },

  // McAfee Coupons
  { id: 1723, code: "MCAFE15", discount: "15% Off", description: "Get 15% off sitewide on all orders from McAfee with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[125], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16719&url=https%3A%2F%2Fwww.mcafee.com%2F" },
  { id: 1724, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for McAfee newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[125], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16719&url=https%3A%2F%2Fwww.mcafee.com%2F" },
  { id: 1725, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from McAfee.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[125], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16719&url=https%3A%2F%2Fwww.mcafee.com%2F" },
  { id: 1726, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[125], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16719&url=https%3A%2F%2Fwww.mcafee.com%2F" },

  // Endurance Coupons
  { id: 1727, code: "ENDUR15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Endurance with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[126], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16764&url=https%3A%2F%2Fwww.endurancewarranty.com%2F" },
  { id: 1728, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Endurance newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[126], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16764&url=https%3A%2F%2Fwww.endurancewarranty.com%2F" },
  { id: 1729, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Endurance.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[126], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16764&url=https%3A%2F%2Fwww.endurancewarranty.com%2F" },
  { id: 1730, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[126], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=16764&url=https%3A%2F%2Fwww.endurancewarranty.com%2F" },

  // Fanatiz - Sports Streaming Coupons
  { id: 1731, code: "FANAT15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Fanatiz - Sports Streaming with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[127], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43720&url=https%3A%2F%2Fwww.fanatiz.com%2F" },
  { id: 1732, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Fanatiz - Sports Streaming newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[127], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43720&url=https%3A%2F%2Fwww.fanatiz.com%2F" },
  { id: 1733, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Fanatiz - Sports Streaming.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[127], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43720&url=https%3A%2F%2Fwww.fanatiz.com%2F" },
  { id: 1734, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[127], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43720&url=https%3A%2F%2Fwww.fanatiz.com%2F" },

  // Quicken Coupons
  { id: 1735, code: "QUICK15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Quicken with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[128], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=4138&url=https%3A%2F%2Fwww.quicken.com%2F" },
  { id: 1736, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Quicken newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[128], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=4138&url=https%3A%2F%2Fwww.quicken.com%2F" },
  { id: 1737, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Quicken.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[128], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=4138&url=https%3A%2F%2Fwww.quicken.com%2F" },
  { id: 1738, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[128], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=4138&url=https%3A%2F%2Fwww.quicken.com%2F" },

  // Thimble Coupons
  { id: 1739, code: "THIMB15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Thimble with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[129], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=42942&url=https%3A%2F%2Fwww.thimble.com%2F" },
  { id: 1740, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Thimble newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[129], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=42942&url=https%3A%2F%2Fwww.thimble.com%2F" },
  { id: 1741, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Thimble.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[129], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=42942&url=https%3A%2F%2Fwww.thimble.com%2F" },
  { id: 1742, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[129], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=42942&url=https%3A%2F%2Fwww.thimble.com%2F" },

  // Strype Wellness Coupons
  { id: 1743, code: "STRYP15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Strype Wellness with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[130], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74321&url=https%3A%2F%2Fstrypestrips.com%2F" },
  { id: 1744, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Strype Wellness newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[130], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74321&url=https%3A%2F%2Fstrypestrips.com%2F" },
  { id: 1745, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Strype Wellness.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[130], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74321&url=https%3A%2F%2Fstrypestrips.com%2F" },
  { id: 1746, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[130], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74321&url=https%3A%2F%2Fstrypestrips.com%2F" },

  // Western Union North America Coupons
  { id: 1747, code: "WESTE15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Western Union North America with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[131], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=84&url=https%3A%2F%2Fwww.westernunion.com%2F" },
  { id: 1748, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Western Union North America newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[131], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=84&url=https%3A%2F%2Fwww.westernunion.com%2F" },
  { id: 1749, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Western Union North America.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[131], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=84&url=https%3A%2F%2Fwww.westernunion.com%2F" },
  { id: 1750, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[131], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=84&url=https%3A%2F%2Fwww.westernunion.com%2F" },

  // Swooped Coupons
  { id: 1751, code: "SWOOP15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Swooped with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[132], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74306&url=https%3A%2F%2Fswooped.co%2F" },
  { id: 1752, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Swooped newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[132], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74306&url=https%3A%2F%2Fswooped.co%2F" },
  { id: 1753, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Swooped.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[132], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74306&url=https%3A%2F%2Fswooped.co%2F" },
  { id: 1754, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[132], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74306&url=https%3A%2F%2Fswooped.co%2F" },

  // Mighties Coupons
  { id: 1755, code: "MIGHT15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Mighties with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[133], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=19385&url=https%3A%2F%2Fwww.mighties.com%2Fpages%2Fanytime-gu" },
  { id: 1756, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Mighties newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[133], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=19385&url=https%3A%2F%2Fwww.mighties.com%2Fpages%2Fanytime-gu" },
  { id: 1757, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Mighties.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[133], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=19385&url=https%3A%2F%2Fwww.mighties.com%2Fpages%2Fanytime-gu" },
  { id: 1758, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[133], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=19385&url=https%3A%2F%2Fwww.mighties.com%2Fpages%2Fanytime-gu" },

  // AKKO Coupons
  { id: 1759, code: "AKKO15", discount: "15% Off", description: "Get 15% off sitewide on all orders from AKKO with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[134], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=47646&url=https%3A%2F%2Fquote.getakko.com%2F" },
  { id: 1760, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for AKKO newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[134], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=47646&url=https%3A%2F%2Fquote.getakko.com%2F" },
  { id: 1761, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from AKKO.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[134], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=47646&url=https%3A%2F%2Fquote.getakko.com%2F" },
  { id: 1762, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[134], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=47646&url=https%3A%2F%2Fquote.getakko.com%2F" },

  // HelloPrenup Coupons
  { id: 1763, code: "HELLO15", discount: "15% Off", description: "Get 15% off sitewide on all orders from HelloPrenup with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[135], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=26513&url=https%3A%2F%2Fhelloprenup.com%2F" },
  { id: 1764, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for HelloPrenup newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[135], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=26513&url=https%3A%2F%2Fhelloprenup.com%2F" },
  { id: 1765, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from HelloPrenup.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[135], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=26513&url=https%3A%2F%2Fhelloprenup.com%2F" },
  { id: 1766, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[135], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=26513&url=https%3A%2F%2Fhelloprenup.com%2F" },

  // NewSelf Ventures Coupons
  { id: 1767, code: "NEWSE15", discount: "15% Off", description: "Get 15% off sitewide on all orders from NewSelf Ventures with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[136], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=13519&url=https%3A%2F%2Fwww.newself.com%2F" },
  { id: 1768, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for NewSelf Ventures newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[136], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=13519&url=https%3A%2F%2Fwww.newself.com%2F" },
  { id: 1769, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from NewSelf Ventures.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[136], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=13519&url=https%3A%2F%2Fwww.newself.com%2F" },
  { id: 1770, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[136], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=13519&url=https%3A%2F%2Fwww.newself.com%2F" },

  // OneTravel Coupons
  { id: 1771, code: "ONETR15", discount: "15% Off", description: "Get 15% off sitewide on all orders from OneTravel with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[137], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12412&url=https%3A%2F%2Fwww.onetravel.com%2F" },
  { id: 1772, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for OneTravel newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[137], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12412&url=https%3A%2F%2Fwww.onetravel.com%2F" },
  { id: 1773, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from OneTravel.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[137], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12412&url=https%3A%2F%2Fwww.onetravel.com%2F" },
  { id: 1774, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[137], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12412&url=https%3A%2F%2Fwww.onetravel.com%2F" },

  // Splitero Coupons
  { id: 1775, code: "SPLIT15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Splitero with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[138], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=61356&url=https%3A%2F%2Fwww.splitero.com%2F" },
  { id: 1776, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Splitero newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[138], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=61356&url=https%3A%2F%2Fwww.splitero.com%2F" },
  { id: 1777, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Splitero.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[138], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=61356&url=https%3A%2F%2Fwww.splitero.com%2F" },
  { id: 1778, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[138], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=61356&url=https%3A%2F%2Fwww.splitero.com%2F" },

  // RVezy Coupons
  { id: 1779, code: "RVEZY15", discount: "15% Off", description: "Get 15% off sitewide on all orders from RVezy with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[139], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=45540&url=https%3A%2F%2Fwww.rvezy.com" },
  { id: 1780, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for RVezy newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[139], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=45540&url=https%3A%2F%2Fwww.rvezy.com" },
  { id: 1781, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from RVezy.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[139], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=45540&url=https%3A%2F%2Fwww.rvezy.com" },
  { id: 1782, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[139], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=45540&url=https%3A%2F%2Fwww.rvezy.com" },

  // HintMeds Inc Coupons
  { id: 1783, code: "HINTM15", discount: "15% Off", description: "Get 15% off sitewide on all orders from HintMeds Inc with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[140], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=67344&url=https%3A%2F%2Fwww.hintmeds.com%2Ftadalafil-oral-spray" },
  { id: 1784, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for HintMeds Inc newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[140], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=67344&url=https%3A%2F%2Fwww.hintmeds.com%2Ftadalafil-oral-spray" },
  { id: 1785, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from HintMeds Inc.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[140], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=67344&url=https%3A%2F%2Fwww.hintmeds.com%2Ftadalafil-oral-spray" },
  { id: 1786, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[140], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=67344&url=https%3A%2F%2Fwww.hintmeds.com%2Ftadalafil-oral-spray" },

  // Legendz Coupons
  { id: 1787, code: "LEGEN15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Legendz with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[141], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=34642&url=https%3A%2F%2Fwww.legendz.com%2F" },
  { id: 1788, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Legendz newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[141], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=34642&url=https%3A%2F%2Fwww.legendz.com%2F" },
  { id: 1789, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Legendz.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[141], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=34642&url=https%3A%2F%2Fwww.legendz.com%2F" },
  { id: 1790, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[141], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=34642&url=https%3A%2F%2Fwww.legendz.com%2F" },

  // SmartCredit Coupons
  { id: 1791, code: "SMART15", discount: "15% Off", description: "Get 15% off sitewide on all orders from SmartCredit with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[142], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=57463&url=https%3A%2F%2Fwww.smartcredit.com%2F" },
  { id: 1792, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for SmartCredit newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[142], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=57463&url=https%3A%2F%2Fwww.smartcredit.com%2F" },
  { id: 1793, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from SmartCredit.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[142], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=57463&url=https%3A%2F%2Fwww.smartcredit.com%2F" },
  { id: 1794, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[142], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=57463&url=https%3A%2F%2Fwww.smartcredit.com%2F" },

  // Upwork Freelance Marketplace Coupons
  { id: 1795, code: "UPWOR15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Upwork Freelance Marketplace with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[143], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=1017&url=https%3A%2F%2Fwww.upwork.com%2Ftalent-marketplace%2F" },
  { id: 1796, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Upwork Freelance Marketplace newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[143], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=1017&url=https%3A%2F%2Fwww.upwork.com%2Ftalent-marketplace%2F" },
  { id: 1797, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Upwork Freelance Marketplace.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[143], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=1017&url=https%3A%2F%2Fwww.upwork.com%2Ftalent-marketplace%2F" },
  { id: 1798, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[143], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=1017&url=https%3A%2F%2Fwww.upwork.com%2Ftalent-marketplace%2F" },

  // Neo CA - Credit Card Coupons
  { id: 1799, code: "NEOCA15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Neo CA - Credit Card with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[144], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=52893&url=https%3A%2F%2Fwww.neofinancial.com%2Fstandard-credit%2Faffiliate" },
  { id: 1800, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Neo CA - Credit Card newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[144], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=52893&url=https%3A%2F%2Fwww.neofinancial.com%2Fstandard-credit%2Faffiliate" },
  { id: 1801, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Neo CA - Credit Card.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[144], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=52893&url=https%3A%2F%2Fwww.neofinancial.com%2Fstandard-credit%2Faffiliate" },
  { id: 1802, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[144], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=52893&url=https%3A%2F%2Fwww.neofinancial.com%2Fstandard-credit%2Faffiliate" },

  // Whitebridge Coupons
  { id: 1803, code: "WHITE15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Whitebridge with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[145], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=31138&url=http%3A%2F%2Fwhitebridge.ai%2F" },
  { id: 1804, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Whitebridge newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[145], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=31138&url=http%3A%2F%2Fwhitebridge.ai%2F" },
  { id: 1805, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Whitebridge.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[145], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=31138&url=http%3A%2F%2Fwhitebridge.ai%2F" },
  { id: 1806, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[145], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=31138&url=http%3A%2F%2Fwhitebridge.ai%2F" },

  // Winona Coupons
  { id: 1807, code: "WINON15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Winona with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[146], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=26870&url=https%3A%2F%2Fbywinona.com%2F" },
  { id: 1808, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Winona newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[146], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=26870&url=https%3A%2F%2Fbywinona.com%2F" },
  { id: 1809, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Winona.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[146], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=26870&url=https%3A%2F%2Fbywinona.com%2F" },
  { id: 1810, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[146], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=26870&url=https%3A%2F%2Fbywinona.com%2F" },

  // BINGE Movies & TV Coupons
  { id: 1811, code: "BINGE15", discount: "15% Off", description: "Get 15% off sitewide on all orders from BINGE Movies & TV with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[147], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43471&url=https%3A%2F%2Fwww.trybinge.tv%2F" },
  { id: 1812, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for BINGE Movies & TV newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[147], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43471&url=https%3A%2F%2Fwww.trybinge.tv%2F" },
  { id: 1813, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from BINGE Movies & TV.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[147], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43471&url=https%3A%2F%2Fwww.trybinge.tv%2F" },
  { id: 1814, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[147], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=43471&url=https%3A%2F%2Fwww.trybinge.tv%2F" },

  // ECCO Coupons
  { id: 1815, code: "ECCO15", discount: "15% Off", description: "Get 15% off sitewide on all orders from ECCO with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[148], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9141&url=https%3A%2F%2Fus.ecco.com" },
  { id: 1816, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for ECCO newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[148], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9141&url=https%3A%2F%2Fus.ecco.com" },
  { id: 1817, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from ECCO.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[148], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9141&url=https%3A%2F%2Fus.ecco.com" },
  { id: 1818, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[148], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9141&url=https%3A%2F%2Fus.ecco.com" },

  // TryHackMe Coupons
  { id: 1819, code: "TRYHA15", discount: "15% Off", description: "Get 15% off sitewide on all orders from TryHackMe with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[149], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71341&url=https%3A%2F%2Ftryhackme.com%2F" },
  { id: 1820, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for TryHackMe newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[149], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71341&url=https%3A%2F%2Ftryhackme.com%2F" },
  { id: 1821, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from TryHackMe.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[149], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71341&url=https%3A%2F%2Ftryhackme.com%2F" },
  { id: 1822, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[149], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71341&url=https%3A%2F%2Ftryhackme.com%2F" },

  // Flashark Coupons
  { id: 1823, code: "FLASH15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Flashark with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[150], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=10848&url=https%3A%2F%2Fflasharkracing.com%2F" },
  { id: 1824, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Flashark newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[150], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=10848&url=https%3A%2F%2Fflasharkracing.com%2F" },
  { id: 1825, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Flashark.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[150], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=10848&url=https%3A%2F%2Fflasharkracing.com%2F" },
  { id: 1826, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[150], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=10848&url=https%3A%2F%2Fflasharkracing.com%2F" },

  // Backcountry Coupons
  { id: 1827, code: "BACKC15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Backcountry with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[151], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=10401&url=https%3A%2F%2Fwww.backcountry.com" },
  { id: 1828, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Backcountry newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[151], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=10401&url=https%3A%2F%2Fwww.backcountry.com" },
  { id: 1829, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Backcountry.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[151], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=10401&url=https%3A%2F%2Fwww.backcountry.com" },
  { id: 1830, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[151], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=10401&url=https%3A%2F%2Fwww.backcountry.com" },

  // Neiman Marcus Coupons
  { id: 1831, code: "NEIMA15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Neiman Marcus with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[152], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=4950&url=https%3A%2F%2Fwww.neimanmarcus.com" },
  { id: 1832, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Neiman Marcus newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[152], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=4950&url=https%3A%2F%2Fwww.neimanmarcus.com" },
  { id: 1833, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Neiman Marcus.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[152], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=4950&url=https%3A%2F%2Fwww.neimanmarcus.com" },
  { id: 1834, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[152], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=4950&url=https%3A%2F%2Fwww.neimanmarcus.com" },

  // Saks Fifth Avenue Coupons
  { id: 1835, code: "SAKSF15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Saks Fifth Avenue with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[153], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9094&url=https%3A%2F%2Fwww.saksfifthavenue.com" },
  { id: 1836, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Saks Fifth Avenue newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[153], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9094&url=https%3A%2F%2Fwww.saksfifthavenue.com" },
  { id: 1837, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Saks Fifth Avenue.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[153], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9094&url=https%3A%2F%2Fwww.saksfifthavenue.com" },
  { id: 1838, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[153], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9094&url=https%3A%2F%2Fwww.saksfifthavenue.com" },

  // xSuit Coupons
  { id: 1839, code: "XSUIT15", discount: "15% Off", description: "Get 15% off sitewide on all orders from xSuit with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[154], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71606&url=https%3A%2F%2Fxsuit.com%2F" },
  { id: 1840, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for xSuit newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[154], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71606&url=https%3A%2F%2Fxsuit.com%2F" },
  { id: 1841, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from xSuit.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[154], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71606&url=https%3A%2F%2Fxsuit.com%2F" },
  { id: 1842, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[154], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=71606&url=https%3A%2F%2Fxsuit.com%2F" },

  // G-Star Raw Coupons
  { id: 1843, code: "GSTAR15", discount: "15% Off", description: "Get 15% off sitewide on all orders from G-Star Raw with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[155], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=2973&url=https%3A%2F%2Fwww.g-star.com%2Fen_us" },
  { id: 1844, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for G-Star Raw newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[155], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=2973&url=https%3A%2F%2Fwww.g-star.com%2Fen_us" },
  { id: 1845, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from G-Star Raw.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[155], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=2973&url=https%3A%2F%2Fwww.g-star.com%2Fen_us" },
  { id: 1846, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[155], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=2973&url=https%3A%2F%2Fwww.g-star.com%2Fen_us" },

  // Wildflower Cases Coupons
  { id: 1847, code: "WILDF15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Wildflower Cases with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[156], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=67199&url=https%3A%2F%2Fwww.wildflowercases.com%2F" },
  { id: 1848, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Wildflower Cases newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[156], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=67199&url=https%3A%2F%2Fwww.wildflowercases.com%2F" },
  { id: 1849, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Wildflower Cases.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[156], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=67199&url=https%3A%2F%2Fwww.wildflowercases.com%2F" },
  { id: 1850, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[156], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=67199&url=https%3A%2F%2Fwww.wildflowercases.com%2F" },

  // Ubeauty Coupons
  { id: 1851, code: "UBEAU15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Ubeauty with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[157], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=3242&url=https%3A%2F%2Fubeauty.com%2F" },
  { id: 1852, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Ubeauty newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[157], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=3242&url=https%3A%2F%2Fubeauty.com%2F" },
  { id: 1853, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Ubeauty.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[157], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=3242&url=https%3A%2F%2Fubeauty.com%2F" },
  { id: 1854, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[157], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=3242&url=https%3A%2F%2Fubeauty.com%2F" },

  // Myaerotel Coupons
  { id: 1855, code: "MYAER15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Myaerotel with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[158], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=30663&url=https%3A%2F%2Fwww.myaerotel.com%2Fen-uk" },
  { id: 1856, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Myaerotel newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[158], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=30663&url=https%3A%2F%2Fwww.myaerotel.com%2Fen-uk" },
  { id: 1857, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Myaerotel.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[158], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=30663&url=https%3A%2F%2Fwww.myaerotel.com%2Fen-uk" },
  { id: 1858, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[158], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=30663&url=https%3A%2F%2Fwww.myaerotel.com%2Fen-uk" },

  // Super.com - Travel Coupons
  { id: 1859, code: "SUPER15", discount: "15% Off", description: "Get 15% off sitewide on all orders from Super.com - Travel with verified promo code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[159], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73002&url=https%3A%2F%2Fwww.super.com%2Ftravel" },
  { id: 1860, code: "WELCOME10", discount: "10% Off First Order", description: "Save 10% on your first order when you sign up for Super.com - Travel newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[159], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73002&url=https%3A%2F%2Fwww.super.com%2Ftravel" },
  { id: 1861, code: "DEAL", discount: "Free Shipping Offer", description: "Enjoy free standard shipping on eligible orders from Super.com - Travel.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[159], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73002&url=https%3A%2F%2Fwww.super.com%2Ftravel" },
  { id: 1862, code: "DEAL", discount: "Up to 30% Off Sale", description: "Save up to 30% on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[159], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73002&url=https%3A%2F%2Fwww.super.com%2Ftravel" }
,

  // ScholarshipOwl Coupons
  { id: 1863, code: "SCHOLAR15", discount: "15% Off Premium", description: "Get 15% off on your premium subscription plans using this verified coupon code.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[160], affiliate_url: "https://scholarshipowl.com" },
  { id: 1864, code: "FREE7", discount: "7-Day Free Trial", description: "Unlock a 7-day free trial on ScholarshipOwl premium features and find matching scholarships instantly.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[160], affiliate_url: "https://scholarshipowl.com" },
  { id: 1865, code: "DEAL", discount: "Apply to 100+ Scholarships", description: "Apply to hundreds of verified scholarships automatically with a single application layout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[160], affiliate_url: "https://scholarshipowl.com" },
  { id: 1866, code: "DEAL", discount: "$1,000 Monthly Giveaway", description: "Enter the free monthly $1,000 scholarship draw directly from the student dashboard.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[160], affiliate_url: "https://scholarshipowl.com" },

  // Mac Duggal Coupons
  { id: 1867, code: "DUGGAL20", discount: "20% Off Dresses", description: "Save 20% on luxury designer dresses, evening gowns, and prom wear at Mac Duggal.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[161], affiliate_url: "https://macduggal.com" },
  { id: 1868, code: "WELCOME50", discount: "$50 Off First Order", description: "Sign up for the newsletter and receive an exclusive $50 coupon code on your first gown purchase.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[161], affiliate_url: "https://macduggal.com" },
  { id: 1869, code: "DEAL", discount: "Free US Shipping", description: "Enjoy free standard shipping and returns on all orders within the continental United States.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[161], affiliate_url: "https://macduggal.com" },
  { id: 1870, code: "DEAL", discount: "Up to 40% Off Sale", description: "Save up to 40% off on premium runway dresses and seasonal outlet collection items.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[161], affiliate_url: "https://macduggal.com" }
,

  // Daisysilk Trade Co.,Ltd Coupons
  { id: 1871, code: "DAISY15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Daisysilk Trade Co.,Ltd using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[162], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=30705&url=https%3A%2F%2Fwww.drinktrade.com%2F" },
  { id: 1872, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Daisysilk Trade Co.,Ltd newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[162], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=30705&url=https%3A%2F%2Fwww.drinktrade.com%2F" },
  { id: 1873, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Daisysilk Trade Co.,Ltd.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[162], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=30705&url=https%3A%2F%2Fwww.drinktrade.com%2F" },
  { id: 1874, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[162], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=30705&url=https%3A%2F%2Fwww.drinktrade.com%2F" },

  // Kixies Inc Coupons
  { id: 1875, code: "KIXIE15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Kixies Inc using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[163], affiliate_url: "https://kixies-inc.com" },
  { id: 1876, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Kixies Inc newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[163], affiliate_url: "https://kixies-inc.com" },
  { id: 1877, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Kixies Inc.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[163], affiliate_url: "https://kixies-inc.com" },
  { id: 1878, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[163], affiliate_url: "https://kixies-inc.com" },

  // novica.com Coupons
  { id: 1879, code: "NOVIC15", discount: "15% Off", description: "Save 15% off sitewide on all orders from novica.com using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[164], affiliate_url: "https://novica.com" },
  { id: 1880, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official novica.com newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[164], affiliate_url: "https://novica.com" },
  { id: 1881, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at novica.com.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[164], affiliate_url: "https://novica.com" },
  { id: 1882, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[164], affiliate_url: "https://novica.com" },

  // Pooky US Coupons
  { id: 1883, code: "POOKY15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Pooky US using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[165], affiliate_url: "https://pooky-us.com" },
  { id: 1884, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Pooky US newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[165], affiliate_url: "https://pooky-us.com" },
  { id: 1885, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Pooky US.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[165], affiliate_url: "https://pooky-us.com" },
  { id: 1886, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[165], affiliate_url: "https://pooky-us.com" },

  // Midwest Sports dba Tennis-Point Coupons
  { id: 1887, code: "MIDWE15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Midwest Sports dba Tennis-Point using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[166], affiliate_url: "https://midwest-sports-dba-tennis-point.com" },
  { id: 1888, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Midwest Sports dba Tennis-Point newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[166], affiliate_url: "https://midwest-sports-dba-tennis-point.com" },
  { id: 1889, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Midwest Sports dba Tennis-Point.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[166], affiliate_url: "https://midwest-sports-dba-tennis-point.com" },
  { id: 1890, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[166], affiliate_url: "https://midwest-sports-dba-tennis-point.com" },

  // Montagne Vacances Coupons
  { id: 1891, code: "MONTA15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Montagne Vacances using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[167], affiliate_url: "https://montagne-vacances.com" },
  { id: 1892, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Montagne Vacances newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[167], affiliate_url: "https://montagne-vacances.com" },
  { id: 1893, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Montagne Vacances.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[167], affiliate_url: "https://montagne-vacances.com" },
  { id: 1894, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[167], affiliate_url: "https://montagne-vacances.com" },

  // Gardenreet Coupons
  { id: 1895, code: "GARDE15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Gardenreet using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[168], affiliate_url: "https://gardenreet.com" },
  { id: 1896, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Gardenreet newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[168], affiliate_url: "https://gardenreet.com" },
  { id: 1897, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Gardenreet.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[168], affiliate_url: "https://gardenreet.com" },
  { id: 1898, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[168], affiliate_url: "https://gardenreet.com" },

  // Mirlux Coupons
  { id: 1899, code: "MIRLU15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Mirlux using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[169], affiliate_url: "https://mirlux.com" },
  { id: 1900, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Mirlux newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[169], affiliate_url: "https://mirlux.com" },
  { id: 1901, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Mirlux.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[169], affiliate_url: "https://mirlux.com" },
  { id: 1902, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[169], affiliate_url: "https://mirlux.com" },

  // Silver Cross Coupons
  { id: 1903, code: "SILVE15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Silver Cross using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[170], affiliate_url: "https://silver-cross.com" },
  { id: 1904, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Silver Cross newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[170], affiliate_url: "https://silver-cross.com" },
  { id: 1905, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Silver Cross.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[170], affiliate_url: "https://silver-cross.com" },
  { id: 1906, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[170], affiliate_url: "https://silver-cross.com" },

  // Jackery Coupons
  { id: 1907, code: "JACKE15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Jackery using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[171], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=63344&url=https%3A%2F%2Fwww.jackery.com" },
  { id: 1908, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Jackery newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[171], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=63344&url=https%3A%2F%2Fwww.jackery.com" },
  { id: 1909, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Jackery.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[171], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=63344&url=https%3A%2F%2Fwww.jackery.com" },
  { id: 1910, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[171], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=63344&url=https%3A%2F%2Fwww.jackery.com" },

  // Innovet Pet Coupons
  { id: 1911, code: "INNOV15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Innovet Pet using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[172], affiliate_url: "https://innovet-pet.com" },
  { id: 1912, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Innovet Pet newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[172], affiliate_url: "https://innovet-pet.com" },
  { id: 1913, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Innovet Pet.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[172], affiliate_url: "https://innovet-pet.com" },
  { id: 1914, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[172], affiliate_url: "https://innovet-pet.com" },

  // AFRM Coupons
  { id: 1915, code: "AFRM15", discount: "15% Off", description: "Save 15% off sitewide on all orders from AFRM using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[173], affiliate_url: "https://afrm.com" },
  { id: 1916, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official AFRM newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[173], affiliate_url: "https://afrm.com" },
  { id: 1917, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at AFRM.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[173], affiliate_url: "https://afrm.com" },
  { id: 1918, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[173], affiliate_url: "https://afrm.com" },

  // Naghedi Coupons
  { id: 1919, code: "NAGHE15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Naghedi using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[174], affiliate_url: "https://naghedi.com" },
  { id: 1920, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Naghedi newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[174], affiliate_url: "https://naghedi.com" },
  { id: 1921, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Naghedi.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[174], affiliate_url: "https://naghedi.com" },
  { id: 1922, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[174], affiliate_url: "https://naghedi.com" },

  // im8 health Coupons
  { id: 1923, code: "IMHEA15", discount: "15% Off", description: "Save 15% off sitewide on all orders from im8 health using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[175], affiliate_url: "https://im8-health.com" },
  { id: 1924, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official im8 health newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[175], affiliate_url: "https://im8-health.com" },
  { id: 1925, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at im8 health.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[175], affiliate_url: "https://im8-health.com" },
  { id: 1926, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[175], affiliate_url: "https://im8-health.com" },

  // Tuxmat Coupons
  { id: 1927, code: "TUXMA15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Tuxmat using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[176], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=41895&url=https%3A%2F%2Fwww.tuxmat.com%2F" },
  { id: 1928, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Tuxmat newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[176], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=41895&url=https%3A%2F%2Fwww.tuxmat.com%2F" },
  { id: 1929, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Tuxmat.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[176], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=41895&url=https%3A%2F%2Fwww.tuxmat.com%2F" },
  { id: 1930, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[176], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=41895&url=https%3A%2F%2Fwww.tuxmat.com%2F" },

  // Performance Golf Coupons
  { id: 1931, code: "PERFO15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Performance Golf using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[177], affiliate_url: "https://performance-golf.com" },
  { id: 1932, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Performance Golf newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[177], affiliate_url: "https://performance-golf.com" },
  { id: 1933, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Performance Golf.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[177], affiliate_url: "https://performance-golf.com" },
  { id: 1934, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[177], affiliate_url: "https://performance-golf.com" },

  // Simkhai Coupons
  { id: 1935, code: "SIMKH15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Simkhai using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[178], affiliate_url: "https://simkhai.com" },
  { id: 1936, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Simkhai newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[178], affiliate_url: "https://simkhai.com" },
  { id: 1937, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Simkhai.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[178], affiliate_url: "https://simkhai.com" },
  { id: 1938, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[178], affiliate_url: "https://simkhai.com" },

  // Sexy Little Bath US Coupons
  { id: 1939, code: "SEXYL15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Sexy Little Bath US using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[179], affiliate_url: "https://sexy-little-bath-us.com" },
  { id: 1940, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Sexy Little Bath US newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[179], affiliate_url: "https://sexy-little-bath-us.com" },
  { id: 1941, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Sexy Little Bath US.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[179], affiliate_url: "https://sexy-little-bath-us.com" },
  { id: 1942, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[179], affiliate_url: "https://sexy-little-bath-us.com" },

  // Everblog Coupons
  { id: 1943, code: "EVERB15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Everblog using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[180], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74167&url=https%3A%2F%2Fog.com%2F" },
  { id: 1944, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Everblog newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[180], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74167&url=https%3A%2F%2Fog.com%2F" },
  { id: 1945, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Everblog.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[180], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74167&url=https%3A%2F%2Fog.com%2F" },
  { id: 1946, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[180], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74167&url=https%3A%2F%2Fog.com%2F" },

  // PrintAbout Coupons
  { id: 1947, code: "PRINT15", discount: "15% Off", description: "Save 15% off sitewide on all orders from PrintAbout using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[181], affiliate_url: "https://printabout.com" },
  { id: 1948, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official PrintAbout newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[181], affiliate_url: "https://printabout.com" },
  { id: 1949, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at PrintAbout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[181], affiliate_url: "https://printabout.com" },
  { id: 1950, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[181], affiliate_url: "https://printabout.com" },

  // Lumary Coupons
  { id: 1951, code: "LUMAR15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Lumary using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[182], affiliate_url: "https://lumary.com" },
  { id: 1952, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Lumary newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[182], affiliate_url: "https://lumary.com" },
  { id: 1953, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Lumary.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[182], affiliate_url: "https://lumary.com" },
  { id: 1954, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[182], affiliate_url: "https://lumary.com" },

  // Young Electric Bikes Coupons
  { id: 1955, code: "YOUNG15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Young Electric Bikes using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[183], affiliate_url: "https://young-electric-bikes.com" },
  { id: 1956, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Young Electric Bikes newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[183], affiliate_url: "https://young-electric-bikes.com" },
  { id: 1957, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Young Electric Bikes.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[183], affiliate_url: "https://young-electric-bikes.com" },
  { id: 1958, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[183], affiliate_url: "https://young-electric-bikes.com" },

  // StoreYourBoard Coupons
  { id: 1959, code: "STORE15", discount: "15% Off", description: "Save 15% off sitewide on all orders from StoreYourBoard using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[184], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=58357&url=https%3A%2F%2Fstoreyourboard.com" },
  { id: 1960, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official StoreYourBoard newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[184], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=58357&url=https%3A%2F%2Fstoreyourboard.com" },
  { id: 1961, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at StoreYourBoard.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[184], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=58357&url=https%3A%2F%2Fstoreyourboard.com" },
  { id: 1962, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[184], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=58357&url=https%3A%2F%2Fstoreyourboard.com" },

  // Urevo Coupons
  { id: 1963, code: "UREVO15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Urevo using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[185], affiliate_url: "https://urevo.com" },
  { id: 1964, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Urevo newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[185], affiliate_url: "https://urevo.com" },
  { id: 1965, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Urevo.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[185], affiliate_url: "https://urevo.com" },
  { id: 1966, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[185], affiliate_url: "https://urevo.com" },

  // SBLA Coupons
  { id: 1967, code: "SBLA15", discount: "15% Off", description: "Save 15% off sitewide on all orders from SBLA using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[186], affiliate_url: "https://sbla.com" },
  { id: 1968, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official SBLA newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[186], affiliate_url: "https://sbla.com" },
  { id: 1969, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at SBLA.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[186], affiliate_url: "https://sbla.com" },
  { id: 1970, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[186], affiliate_url: "https://sbla.com" },

  // Joe Nimble Coupons
  { id: 1971, code: "JOENI15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Joe Nimble using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[187], affiliate_url: "https://joe-nimble.com" },
  { id: 1972, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Joe Nimble newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[187], affiliate_url: "https://joe-nimble.com" },
  { id: 1973, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Joe Nimble.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[187], affiliate_url: "https://joe-nimble.com" },
  { id: 1974, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[187], affiliate_url: "https://joe-nimble.com" },

  // OUFER BODY JEWELRY 15%-100-259 (25-may-2026) Coupons
  { id: 1975, code: "OUFER15", discount: "15% Off", description: "Save 15% off sitewide on all orders from OUFER BODY JEWELRY 15%-100-259 (25-may-2026) using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[188], affiliate_url: "https://oufer-body-jewelry-15-100-259-25-may-2026.com" },
  { id: 1976, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official OUFER BODY JEWELRY 15%-100-259 (25-may-2026) newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[188], affiliate_url: "https://oufer-body-jewelry-15-100-259-25-may-2026.com" },
  { id: 1977, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at OUFER BODY JEWELRY 15%-100-259 (25-may-2026).", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[188], affiliate_url: "https://oufer-body-jewelry-15-100-259-25-may-2026.com" },
  { id: 1978, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[188], affiliate_url: "https://oufer-body-jewelry-15-100-259-25-may-2026.com" },

  // Elevated Craft Coupons
  { id: 1979, code: "ELEVA15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Elevated Craft using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[189], affiliate_url: "https://elevated-craft.com" },
  { id: 1980, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Elevated Craft newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[189], affiliate_url: "https://elevated-craft.com" },
  { id: 1981, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Elevated Craft.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[189], affiliate_url: "https://elevated-craft.com" },
  { id: 1982, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[189], affiliate_url: "https://elevated-craft.com" },

  // Huega House Coupons
  { id: 1983, code: "HUEGA15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Huega House using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[190], affiliate_url: "https://huega-house.com" },
  { id: 1984, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Huega House newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[190], affiliate_url: "https://huega-house.com" },
  { id: 1985, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Huega House.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[190], affiliate_url: "https://huega-house.com" },
  { id: 1986, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[190], affiliate_url: "https://huega-house.com" },

  // Camp Chef Coupons
  { id: 1987, code: "CAMPC15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Camp Chef using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[191], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9598&url=https%3A%2F%2Fwww.campchef.com" },
  { id: 1988, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Camp Chef newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[191], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9598&url=https%3A%2F%2Fwww.campchef.com" },
  { id: 1989, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Camp Chef.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[191], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9598&url=https%3A%2F%2Fwww.campchef.com" },
  { id: 1990, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[191], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=9598&url=https%3A%2F%2Fwww.campchef.com" },

  // COLAMY Coupons
  { id: 1991, code: "COLAM15", discount: "15% Off", description: "Save 15% off sitewide on all orders from COLAMY using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[192], affiliate_url: "https://colamy.com" },
  { id: 1992, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official COLAMY newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[192], affiliate_url: "https://colamy.com" },
  { id: 1993, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at COLAMY.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[192], affiliate_url: "https://colamy.com" },
  { id: 1994, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[192], affiliate_url: "https://colamy.com" },

  // Buy Fencing Direct Coupons
  { id: 1995, code: "BUYFE15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Buy Fencing Direct using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[193], affiliate_url: "https://buy-fencing-direct.com" },
  { id: 1996, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Buy Fencing Direct newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[193], affiliate_url: "https://buy-fencing-direct.com" },
  { id: 1997, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Buy Fencing Direct.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[193], affiliate_url: "https://buy-fencing-direct.com" },
  { id: 1998, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[193], affiliate_url: "https://buy-fencing-direct.com" },

  // Back to the Office Coupons
  { id: 1999, code: "BACKT15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Back to the Office using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[194], affiliate_url: "https://back-to-the-office.com" },
  { id: 2000, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Back to the Office newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[194], affiliate_url: "https://back-to-the-office.com" },
  { id: 2001, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Back to the Office.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[194], affiliate_url: "https://back-to-the-office.com" },
  { id: 2002, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[194], affiliate_url: "https://back-to-the-office.com" },

  // Thermos Coupons
  { id: 2003, code: "THERM15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Thermos using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[195], affiliate_url: "https://thermos.com" },
  { id: 2004, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Thermos newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[195], affiliate_url: "https://thermos.com" },
  { id: 2005, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Thermos.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[195], affiliate_url: "https://thermos.com" },
  { id: 2006, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[195], affiliate_url: "https://thermos.com" },

  // cosori Coupons
  { id: 2007, code: "COSOR15", discount: "15% Off", description: "Save 15% off sitewide on all orders from cosori using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[196], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=18131&url=https%3A%2F%2Fcosori.com%2F" },
  { id: 2008, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official cosori newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[196], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=18131&url=https%3A%2F%2Fcosori.com%2F" },
  { id: 2009, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at cosori.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[196], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=18131&url=https%3A%2F%2Fcosori.com%2F" },
  { id: 2010, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[196], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=18131&url=https%3A%2F%2Fcosori.com%2F" },

  // Krewe Coupons
  { id: 2011, code: "KREWE15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Krewe using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[197], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73952&url=https%3A%2F%2Fwww.krewe.com%2F" },
  { id: 2012, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Krewe newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[197], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73952&url=https%3A%2F%2Fwww.krewe.com%2F" },
  { id: 2013, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Krewe.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[197], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73952&url=https%3A%2F%2Fwww.krewe.com%2F" },
  { id: 2014, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[197], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=73952&url=https%3A%2F%2Fwww.krewe.com%2F" },

  // Ridstar Coupons
  { id: 2015, code: "RIDST15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Ridstar using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[198], affiliate_url: "https://ridstar.com" },
  { id: 2016, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Ridstar newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[198], affiliate_url: "https://ridstar.com" },
  { id: 2017, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Ridstar.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[198], affiliate_url: "https://ridstar.com" },
  { id: 2018, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[198], affiliate_url: "https://ridstar.com" },

  // Bruno Marc 8%-100-350 (29-july-2026) Coupons
  { id: 2019, code: "BRUNO15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Bruno Marc 8%-100-350 (29-july-2026) using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[199], affiliate_url: "https://bruno-marc-8-100-350-29-july-2026.com" },
  { id: 2020, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Bruno Marc 8%-100-350 (29-july-2026) newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[199], affiliate_url: "https://bruno-marc-8-100-350-29-july-2026.com" },
  { id: 2021, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Bruno Marc 8%-100-350 (29-july-2026).", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[199], affiliate_url: "https://bruno-marc-8-100-350-29-july-2026.com" },
  { id: 2022, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[199], affiliate_url: "https://bruno-marc-8-100-350-29-july-2026.com" },

  // Sunshine Tienda Coupons
  { id: 2023, code: "SUNSH15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Sunshine Tienda using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[200], affiliate_url: "https://sunshine-tienda.com" },
  { id: 2024, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Sunshine Tienda newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[200], affiliate_url: "https://sunshine-tienda.com" },
  { id: 2025, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Sunshine Tienda.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[200], affiliate_url: "https://sunshine-tienda.com" },
  { id: 2026, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[200], affiliate_url: "https://sunshine-tienda.com" },

  // Red Gorilla Coupons
  { id: 2027, code: "REDGO15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Red Gorilla using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[201], affiliate_url: "https://red-gorilla.com" },
  { id: 2028, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Red Gorilla newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[201], affiliate_url: "https://red-gorilla.com" },
  { id: 2029, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Red Gorilla.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[201], affiliate_url: "https://red-gorilla.com" },
  { id: 2030, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[201], affiliate_url: "https://red-gorilla.com" },

  // Displays Outlet US Coupons
  { id: 2031, code: "DISPL15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Displays Outlet US using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[202], affiliate_url: "https://displays-outlet-us.com" },
  { id: 2032, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Displays Outlet US newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[202], affiliate_url: "https://displays-outlet-us.com" },
  { id: 2033, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Displays Outlet US.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[202], affiliate_url: "https://displays-outlet-us.com" },
  { id: 2034, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[202], affiliate_url: "https://displays-outlet-us.com" },

  // Yvette Sports Coupons
  { id: 2035, code: "YVETT15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Yvette Sports using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[203], affiliate_url: "https://yvette-sports.com" },
  { id: 2036, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Yvette Sports newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[203], affiliate_url: "https://yvette-sports.com" },
  { id: 2037, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Yvette Sports.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[203], affiliate_url: "https://yvette-sports.com" },
  { id: 2038, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[203], affiliate_url: "https://yvette-sports.com" },

  // Zeagoo Coupons
  { id: 2039, code: "ZEAGO15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Zeagoo using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[204], affiliate_url: "https://zeagoo.com" },
  { id: 2040, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Zeagoo newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[204], affiliate_url: "https://zeagoo.com" },
  { id: 2041, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Zeagoo.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[204], affiliate_url: "https://zeagoo.com" },
  { id: 2042, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[204], affiliate_url: "https://zeagoo.com" },

  // BuyBackWorld Coupons
  { id: 2043, code: "BUYBA15", discount: "15% Off", description: "Save 15% off sitewide on all orders from BuyBackWorld using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[205], affiliate_url: "https://buybackworld.com" },
  { id: 2044, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official BuyBackWorld newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[205], affiliate_url: "https://buybackworld.com" },
  { id: 2045, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at BuyBackWorld.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[205], affiliate_url: "https://buybackworld.com" },
  { id: 2046, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[205], affiliate_url: "https://buybackworld.com" },

  // Flextail 5%-50-550 (23-july-2026) Coupons
  { id: 2047, code: "FLEXT15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Flextail 5%-50-550 (23-july-2026) using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[206], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12732&url=https%3A%2F%2Fwww.flextail.com%2F" },
  { id: 2048, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Flextail 5%-50-550 (23-july-2026) newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[206], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12732&url=https%3A%2F%2Fwww.flextail.com%2F" },
  { id: 2049, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Flextail 5%-50-550 (23-july-2026).", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[206], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12732&url=https%3A%2F%2Fwww.flextail.com%2F" },
  { id: 2050, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[206], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=12732&url=https%3A%2F%2Fwww.flextail.com%2F" },

  // pelsbarn Coupons
  { id: 2051, code: "PELSB15", discount: "15% Off", description: "Save 15% off sitewide on all orders from pelsbarn using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[207], affiliate_url: "https://pelsbarn.com" },
  { id: 2052, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official pelsbarn newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[207], affiliate_url: "https://pelsbarn.com" },
  { id: 2053, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at pelsbarn.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[207], affiliate_url: "https://pelsbarn.com" },
  { id: 2054, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[207], affiliate_url: "https://pelsbarn.com" },

  // Povison Coupons
  { id: 2055, code: "POVIS15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Povison using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[208], affiliate_url: "https://povison.com" },
  { id: 2056, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Povison newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[208], affiliate_url: "https://povison.com" },
  { id: 2057, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Povison.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[208], affiliate_url: "https://povison.com" },
  { id: 2058, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[208], affiliate_url: "https://povison.com" },

  // Eternity Modern Coupons
  { id: 2059, code: "ETERN15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Eternity Modern using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[209], affiliate_url: "https://eternity-modern.com" },
  { id: 2060, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Eternity Modern newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[209], affiliate_url: "https://eternity-modern.com" },
  { id: 2061, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Eternity Modern.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[209], affiliate_url: "https://eternity-modern.com" },
  { id: 2062, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[209], affiliate_url: "https://eternity-modern.com" },

  // aviya mattress 15%-600-300 (23-july-2026) Coupons
  { id: 2063, code: "AVIYA15", discount: "15% Off", description: "Save 15% off sitewide on all orders from aviya mattress 15%-600-300 (23-july-2026) using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[210], affiliate_url: "https://aviya-mattress-15-600-300-23-july-2026.com" },
  { id: 2064, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official aviya mattress 15%-600-300 (23-july-2026) newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[210], affiliate_url: "https://aviya-mattress-15-600-300-23-july-2026.com" },
  { id: 2065, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at aviya mattress 15%-600-300 (23-july-2026).", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[210], affiliate_url: "https://aviya-mattress-15-600-300-23-july-2026.com" },
  { id: 2066, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[210], affiliate_url: "https://aviya-mattress-15-600-300-23-july-2026.com" },

  // Arq8 Coupons
  { id: 2067, code: "ARQ15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Arq8 using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[211], affiliate_url: "https://arq8.com" },
  { id: 2068, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Arq8 newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[211], affiliate_url: "https://arq8.com" },
  { id: 2069, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Arq8.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[211], affiliate_url: "https://arq8.com" },
  { id: 2070, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[211], affiliate_url: "https://arq8.com" },

  // BABEYOND Coupons
  { id: 2071, code: "BABEY15", discount: "15% Off", description: "Save 15% off sitewide on all orders from BABEYOND using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[212], affiliate_url: "https://babeyond.com" },
  { id: 2072, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official BABEYOND newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[212], affiliate_url: "https://babeyond.com" },
  { id: 2073, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at BABEYOND.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[212], affiliate_url: "https://babeyond.com" },
  { id: 2074, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[212], affiliate_url: "https://babeyond.com" },

  // Suunto Coupons
  { id: 2075, code: "SUUNT15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Suunto using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[213], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=68582&url=https%3A%2F%2Fwww.suunto.com%2F" },
  { id: 2076, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Suunto newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[213], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=68582&url=https%3A%2F%2Fwww.suunto.com%2F" },
  { id: 2077, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Suunto.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[213], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=68582&url=https%3A%2F%2Fwww.suunto.com%2F" },
  { id: 2078, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[213], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=68582&url=https%3A%2F%2Fwww.suunto.com%2F" },

  // RMA Defense Coupons
  { id: 2079, code: "RMADE15", discount: "15% Off", description: "Save 15% off sitewide on all orders from RMA Defense using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[214], affiliate_url: "https://rma-defense.com" },
  { id: 2080, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official RMA Defense newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[214], affiliate_url: "https://rma-defense.com" },
  { id: 2081, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at RMA Defense.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[214], affiliate_url: "https://rma-defense.com" },
  { id: 2082, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[214], affiliate_url: "https://rma-defense.com" },

  // Eonon Coupons
  { id: 2083, code: "EONON15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Eonon using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[215], affiliate_url: "https://eonon.com" },
  { id: 2084, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Eonon newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[215], affiliate_url: "https://eonon.com" },
  { id: 2085, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Eonon.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[215], affiliate_url: "https://eonon.com" },
  { id: 2086, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[215], affiliate_url: "https://eonon.com" },

  // Torro Coupons
  { id: 2087, code: "TORRO15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Torro using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[216], affiliate_url: "https://torro.com" },
  { id: 2088, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Torro newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[216], affiliate_url: "https://torro.com" },
  { id: 2089, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Torro.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[216], affiliate_url: "https://torro.com" },
  { id: 2090, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[216], affiliate_url: "https://torro.com" },

  // Auctmarts Coupons
  { id: 2091, code: "AUCTM15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Auctmarts using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[217], affiliate_url: "https://auctmarts.com" },
  { id: 2092, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Auctmarts newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[217], affiliate_url: "https://auctmarts.com" },
  { id: 2093, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Auctmarts.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[217], affiliate_url: "https://auctmarts.com" },
  { id: 2094, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[217], affiliate_url: "https://auctmarts.com" },

  // MISSHA US Coupons
  { id: 2095, code: "MISSH15", discount: "15% Off", description: "Save 15% off sitewide on all orders from MISSHA US using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[218], affiliate_url: "https://missha-us.com" },
  { id: 2096, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official MISSHA US newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[218], affiliate_url: "https://missha-us.com" },
  { id: 2097, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at MISSHA US.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[218], affiliate_url: "https://missha-us.com" },
  { id: 2098, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[218], affiliate_url: "https://missha-us.com" },

  // Himiway Bike Coupons
  { id: 2099, code: "HIMIW15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Himiway Bike using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[219], affiliate_url: "https://himiway-bike.com" },
  { id: 2100, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Himiway Bike newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[219], affiliate_url: "https://himiway-bike.com" },
  { id: 2101, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Himiway Bike.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[219], affiliate_url: "https://himiway-bike.com" },
  { id: 2102, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[219], affiliate_url: "https://himiway-bike.com" },

  // Mirlux FR Coupons
  { id: 2103, code: "MIRLU15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Mirlux FR using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[220], affiliate_url: "https://mirlux-fr.com" },
  { id: 2104, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Mirlux FR newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[220], affiliate_url: "https://mirlux-fr.com" },
  { id: 2105, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Mirlux FR.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[220], affiliate_url: "https://mirlux-fr.com" },
  { id: 2106, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[220], affiliate_url: "https://mirlux-fr.com" },

  // Guta TPMS Coupons
  { id: 2107, code: "GUTAT15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Guta TPMS using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[221], affiliate_url: "https://guta-tpms.com" },
  { id: 2108, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Guta TPMS newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[221], affiliate_url: "https://guta-tpms.com" },
  { id: 2109, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Guta TPMS.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[221], affiliate_url: "https://guta-tpms.com" },
  { id: 2110, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[221], affiliate_url: "https://guta-tpms.com" },

  // Alashan Cashmere Coupons
  { id: 2111, code: "ALASH15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Alashan Cashmere using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[222], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=912&url=https%3A%2F%2Fwww2.hm.com%2Fen_us%2Findex.html" },
  { id: 2112, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Alashan Cashmere newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[222], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=912&url=https%3A%2F%2Fwww2.hm.com%2Fen_us%2Findex.html" },
  { id: 2113, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Alashan Cashmere.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[222], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=912&url=https%3A%2F%2Fwww2.hm.com%2Fen_us%2Findex.html" },
  { id: 2114, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[222], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=912&url=https%3A%2F%2Fwww2.hm.com%2Fen_us%2Findex.html" },

  // Nushape Coupons
  { id: 2115, code: "NUSHA15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Nushape using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[223], affiliate_url: "https://nushape.com" },
  { id: 2116, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Nushape newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[223], affiliate_url: "https://nushape.com" },
  { id: 2117, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Nushape.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[223], affiliate_url: "https://nushape.com" },
  { id: 2118, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[223], affiliate_url: "https://nushape.com" },

  // Adept Coupons
  { id: 2119, code: "ADEPT15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Adept using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[224], affiliate_url: "https://adept.com" },
  { id: 2120, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Adept newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[224], affiliate_url: "https://adept.com" },
  { id: 2121, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Adept.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[224], affiliate_url: "https://adept.com" },
  { id: 2122, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[224], affiliate_url: "https://adept.com" },

  // underarmour Coupons
  { id: 2123, code: "UNDER15", discount: "15% Off", description: "Save 15% off sitewide on all orders from underarmour using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[225], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=40876&url=https%3A%2F%2Fwww.underarmour.com" },
  { id: 2124, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official underarmour newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[225], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=40876&url=https%3A%2F%2Fwww.underarmour.com" },
  { id: 2125, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at underarmour.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[225], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=40876&url=https%3A%2F%2Fwww.underarmour.com" },
  { id: 2126, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[225], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=40876&url=https%3A%2F%2Fwww.underarmour.com" },

  // Eydology Coupons
  { id: 2127, code: "EYDOL15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Eydology using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[226], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74167&url=https%3A%2F%2Fog.com%2F" },
  { id: 2128, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Eydology newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[226], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74167&url=https%3A%2F%2Fog.com%2F" },
  { id: 2129, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Eydology.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[226], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74167&url=https%3A%2F%2Fog.com%2F" },
  { id: 2130, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[226], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74167&url=https%3A%2F%2Fog.com%2F" },

  // Cambridge Satchel Coupons
  { id: 2131, code: "CAMBR15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Cambridge Satchel using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[227], affiliate_url: "https://cambridge-satchel.com" },
  { id: 2132, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Cambridge Satchel newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[227], affiliate_url: "https://cambridge-satchel.com" },
  { id: 2133, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Cambridge Satchel.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[227], affiliate_url: "https://cambridge-satchel.com" },
  { id: 2134, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[227], affiliate_url: "https://cambridge-satchel.com" },

  // Zonli Home Coupons
  { id: 2135, code: "ZONLI15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Zonli Home using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[228], affiliate_url: "https://zonli-home.com" },
  { id: 2136, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Zonli Home newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[228], affiliate_url: "https://zonli-home.com" },
  { id: 2137, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Zonli Home.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[228], affiliate_url: "https://zonli-home.com" },
  { id: 2138, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[228], affiliate_url: "https://zonli-home.com" },

  // 3 Suisses Coupons
  { id: 2139, code: "SUISS15", discount: "15% Off", description: "Save 15% off sitewide on all orders from 3 Suisses using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[229], affiliate_url: "https://3-suisses.com" },
  { id: 2140, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official 3 Suisses newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[229], affiliate_url: "https://3-suisses.com" },
  { id: 2141, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at 3 Suisses.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[229], affiliate_url: "https://3-suisses.com" },
  { id: 2142, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[229], affiliate_url: "https://3-suisses.com" },

  // Dowinx Coupons
  { id: 2143, code: "DOWIN15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Dowinx using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[230], affiliate_url: "https://dowinx.com" },
  { id: 2144, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Dowinx newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[230], affiliate_url: "https://dowinx.com" },
  { id: 2145, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Dowinx.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[230], affiliate_url: "https://dowinx.com" },
  { id: 2146, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[230], affiliate_url: "https://dowinx.com" },

  // Garden Benches Coupons
  { id: 2147, code: "GARDE15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Garden Benches using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[231], affiliate_url: "https://garden-benches.com" },
  { id: 2148, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Garden Benches newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[231], affiliate_url: "https://garden-benches.com" },
  { id: 2149, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Garden Benches.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[231], affiliate_url: "https://garden-benches.com" },
  { id: 2150, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[231], affiliate_url: "https://garden-benches.com" },

  // Knack Bags  6%-200-450 (27-july-2026) Coupons
  { id: 2151, code: "KNACK15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Knack Bags  6%-200-450 (27-july-2026) using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[232], affiliate_url: "https://knack-bags-6-200-450-27-july-2026.com" },
  { id: 2152, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Knack Bags  6%-200-450 (27-july-2026) newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[232], affiliate_url: "https://knack-bags-6-200-450-27-july-2026.com" },
  { id: 2153, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Knack Bags  6%-200-450 (27-july-2026).", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[232], affiliate_url: "https://knack-bags-6-200-450-27-july-2026.com" },
  { id: 2154, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[232], affiliate_url: "https://knack-bags-6-200-450-27-july-2026.com" },

  // Popilush 2%-150-275 (27-july-2026) Coupons
  { id: 2155, code: "POPIL15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Popilush 2%-150-275 (27-july-2026) using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[233], affiliate_url: "https://popilush-2-150-275-27-july-2026.com" },
  { id: 2156, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Popilush 2%-150-275 (27-july-2026) newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[233], affiliate_url: "https://popilush-2-150-275-27-july-2026.com" },
  { id: 2157, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Popilush 2%-150-275 (27-july-2026).", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[233], affiliate_url: "https://popilush-2-150-275-27-july-2026.com" },
  { id: 2158, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[233], affiliate_url: "https://popilush-2-150-275-27-july-2026.com" },

  // SELDOM SEEN STYLES Coupons
  { id: 2159, code: "SELDO15", discount: "15% Off", description: "Save 15% off sitewide on all orders from SELDOM SEEN STYLES using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[234], affiliate_url: "https://seldom-seen-styles.com" },
  { id: 2160, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official SELDOM SEEN STYLES newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[234], affiliate_url: "https://seldom-seen-styles.com" },
  { id: 2161, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at SELDOM SEEN STYLES.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[234], affiliate_url: "https://seldom-seen-styles.com" },
  { id: 2162, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[234], affiliate_url: "https://seldom-seen-styles.com" },

  // Kix'ies Coupons
  { id: 2163, code: "KIXIE15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Kix'ies using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[235], affiliate_url: "https://kixies.com" },
  { id: 2164, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Kix'ies newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[235], affiliate_url: "https://kixies.com" },
  { id: 2165, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Kix'ies.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[235], affiliate_url: "https://kixies.com" },
  { id: 2166, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[235], affiliate_url: "https://kixies.com" },

  // Le Permis Libre Coupons
  { id: 2167, code: "LEPER15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Le Permis Libre using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[236], affiliate_url: "https://le-permis-libre.com" },
  { id: 2168, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Le Permis Libre newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[236], affiliate_url: "https://le-permis-libre.com" },
  { id: 2169, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Le Permis Libre.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[236], affiliate_url: "https://le-permis-libre.com" },
  { id: 2170, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[236], affiliate_url: "https://le-permis-libre.com" },

  // Health & Fitness Coupons
  { id: 2171, code: "HEALT15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Health & Fitness using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[237], affiliate_url: "https://health-fitness.com" },
  { id: 2172, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Health & Fitness newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[237], affiliate_url: "https://health-fitness.com" },
  { id: 2173, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Health & Fitness.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[237], affiliate_url: "https://health-fitness.com" },
  { id: 2174, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[237], affiliate_url: "https://health-fitness.com" },

  // Tilswall Coupons
  { id: 2175, code: "TILSW15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Tilswall using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[238], affiliate_url: "https://tilswall.com" },
  { id: 2176, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Tilswall newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[238], affiliate_url: "https://tilswall.com" },
  { id: 2177, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Tilswall.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[238], affiliate_url: "https://tilswall.com" },
  { id: 2178, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[238], affiliate_url: "https://tilswall.com" },

  // Levoit Coupons
  { id: 2179, code: "LEVOI15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Levoit using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[239], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=60230&url=https%3A%2F%2Flevoit.com%2F" },
  { id: 2180, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Levoit newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[239], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=60230&url=https%3A%2F%2Flevoit.com%2F" },
  { id: 2181, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Levoit.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[239], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=60230&url=https%3A%2F%2Flevoit.com%2F" },
  { id: 2182, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[239], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=60230&url=https%3A%2F%2Flevoit.com%2F" },

  // Caydo Coupons
  { id: 2183, code: "CAYDO15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Caydo using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[240], affiliate_url: "https://caydo.com" },
  { id: 2184, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Caydo newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[240], affiliate_url: "https://caydo.com" },
  { id: 2185, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Caydo.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[240], affiliate_url: "https://caydo.com" },
  { id: 2186, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[240], affiliate_url: "https://caydo.com" },

  // Tribesigns Coupons
  { id: 2187, code: "TRIBE15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Tribesigns using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[241], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74172&url=https%3A%2F%2Fwearetribe.co%2F" },
  { id: 2188, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Tribesigns newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[241], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74172&url=https%3A%2F%2Fwearetribe.co%2F" },
  { id: 2189, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Tribesigns.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[241], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74172&url=https%3A%2F%2Fwearetribe.co%2F" },
  { id: 2190, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[241], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=74172&url=https%3A%2F%2Fwearetribe.co%2F" },

  // Speediance Coupons
  { id: 2191, code: "SPEED15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Speediance using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[242], affiliate_url: "https://speediance.com" },
  { id: 2192, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Speediance newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[242], affiliate_url: "https://speediance.com" },
  { id: 2193, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Speediance.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[242], affiliate_url: "https://speediance.com" },
  { id: 2194, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[242], affiliate_url: "https://speediance.com" },

  // Ulanzi Coupons
  { id: 2195, code: "ULANZ15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Ulanzi using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[243], affiliate_url: "https://ulanzi.com" },
  { id: 2196, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Ulanzi newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[243], affiliate_url: "https://ulanzi.com" },
  { id: 2197, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Ulanzi.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[243], affiliate_url: "https://ulanzi.com" },
  { id: 2198, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[243], affiliate_url: "https://ulanzi.com" },

  // Antler Coupons
  { id: 2199, code: "ANTLE15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Antler using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[244], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=23364&url=https%3A%2F%2Fwww.antler.co.uk%2F" },
  { id: 2200, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Antler newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[244], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=23364&url=https%3A%2F%2Fwww.antler.co.uk%2F" },
  { id: 2201, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Antler.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[244], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=23364&url=https%3A%2F%2Fwww.antler.co.uk%2F" },
  { id: 2202, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[244], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=23364&url=https%3A%2F%2Fwww.antler.co.uk%2F" },

  // Okun Coupons
  { id: 2203, code: "OKUN15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Okun using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[245], affiliate_url: "https://okun.com" },
  { id: 2204, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Okun newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[245], affiliate_url: "https://okun.com" },
  { id: 2205, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Okun.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[245], affiliate_url: "https://okun.com" },
  { id: 2206, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[245], affiliate_url: "https://okun.com" },

  // So soft Beds Coupons
  { id: 2207, code: "SOSOF15", discount: "15% Off", description: "Save 15% off sitewide on all orders from So soft Beds using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[246], affiliate_url: "https://so-soft-beds.com" },
  { id: 2208, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official So soft Beds newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[246], affiliate_url: "https://so-soft-beds.com" },
  { id: 2209, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at So soft Beds.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[246], affiliate_url: "https://so-soft-beds.com" },
  { id: 2210, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[246], affiliate_url: "https://so-soft-beds.com" },

  // Grab Bags US Coupons
  { id: 2211, code: "GRABB15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Grab Bags US using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[247], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72260&url=https%3A%2F%2Fgrabbaggear.com%2F" },
  { id: 2212, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Grab Bags US newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[247], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72260&url=https%3A%2F%2Fgrabbaggear.com%2F" },
  { id: 2213, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Grab Bags US.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[247], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72260&url=https%3A%2F%2Fgrabbaggear.com%2F" },
  { id: 2214, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[247], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72260&url=https%3A%2F%2Fgrabbaggear.com%2F" },

  // Keycense Coupons
  { id: 2215, code: "KEYCE15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Keycense using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[248], affiliate_url: "https://keycense.com" },
  { id: 2216, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Keycense newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[248], affiliate_url: "https://keycense.com" },
  { id: 2217, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Keycense.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[248], affiliate_url: "https://keycense.com" },
  { id: 2218, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[248], affiliate_url: "https://keycense.com" },

  // tcksports US Coupons
  { id: 2219, code: "TCKSP15", discount: "15% Off", description: "Save 15% off sitewide on all orders from tcksports US using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[249], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72261&url=https%3A%2F%2Ftcksports.com%2F" },
  { id: 2220, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official tcksports US newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[249], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72261&url=https%3A%2F%2Ftcksports.com%2F" },
  { id: 2221, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at tcksports US.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[249], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72261&url=https%3A%2F%2Ftcksports.com%2F" },
  { id: 2222, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[249], affiliate_url: "https://redirect.partner.fatcoupon.com/go?cid=575&mid=72261&url=https%3A%2F%2Ftcksports.com%2F" },

  // Power Smart Coupons
  { id: 2223, code: "POWER15", discount: "15% Off", description: "Save 15% off sitewide on all orders from Power Smart using this verified promo code at checkout.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[250], affiliate_url: "https://power-smart.com" },
  { id: 2224, code: "WELCOME10", discount: "10% Off First Order", description: "Get 10% off your first purchase when you sign up for the official Power Smart newsletter.", expiry_date: "2026-11-30T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[250], affiliate_url: "https://power-smart.com" },
  { id: 2225, code: "DEAL", discount: "Free Shipping Deal", description: "Enjoy free standard shipping on eligible orders placed at Power Smart.", expiry_date: "2026-12-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[250], affiliate_url: "https://power-smart.com" },
  { id: 2226, code: "DEAL", discount: "Up to 30% Off Sale", description: "Get up to 30% discount on seasonal clearance items in the official store.", expiry_date: "2026-10-31T23:59:59.000Z", is_verified: true, store: FALLBACK_STORES[250], affiliate_url: "https://power-smart.com" }
];