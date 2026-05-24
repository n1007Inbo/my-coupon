import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      // 1. Grant public access permissions automatically for Coupon & Store APIs
      const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      });

      if (publicRole) {
        const publicActions = [
          'api::store.store.find',
          'api::store.store.findOne',
          'api::coupon.coupon.find',
          'api::coupon.coupon.findOne',
        ];

        for (const action of publicActions) {
          const existing = await strapi.query('plugin::users-permissions.permission').findOne({
            where: { action, role: publicRole.id },
          });

          if (!existing) {
            await strapi.query('plugin::users-permissions.permission').create({
              data: {
                action,
                role: publicRole.id,
              },
            });
            strapi.log.info(`Granted public permission for: ${action}`);
          }
        }
      }

      // 2. Seed mock Stores and Coupons if empty
      const storeCount = await strapi.query('api::store.store').count({});
      if (storeCount === 0) {
        strapi.log.info('Database empty. Seeding mock stores and coupons...');

        const storesData = [
          {
            name: 'Amazon',
            slug: 'amazon',
            website: 'https://amazon.com',
            coupons: [
              { code: 'AMZN20', discount: '20% OFF', description: 'Get 20% off on all electronics and home appliances. Limited time offer.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'FREEAMZN', discount: 'Free Shipping', description: 'Free shipping on orders above $35. Applicable sitewide.', expiry_date: '2026-08-15T23:59:59.000Z', is_verified: true },
              { code: 'AMZNBOOKS10', discount: '10% OFF', description: 'Save an extra 10% on highly trending physical books and bestsellers.', expiry_date: '2026-09-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Nike',
            slug: 'nike',
            website: 'https://nike.com',
            coupons: [
              { code: 'JUSTDOIT15', discount: '15% OFF', description: 'Save 15% on your next purchase of running shoes and athletic apparel.', expiry_date: '2026-09-30T23:59:59.000Z', is_verified: true },
              { code: 'NIKECLUB25', discount: '25% OFF', description: 'Exclusive discount for Nike Club members on select merchandise.', expiry_date: '2026-10-10T23:59:59.000Z', is_verified: false },
              { code: 'NIKEFREESHIP', discount: 'Free Shipping', description: 'Free standard shipping sitewide for registered Nike Members.', expiry_date: '2026-11-15T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Hostinger',
            slug: 'hostinger',
            website: 'https://hostinger.com',
            coupons: [
              { code: 'HOSTING80', discount: '80% OFF', description: 'Get up to 80% off on premium web hosting plans + free domain.', expiry_date: '2026-12-25T23:59:59.000Z', is_verified: true },
              { code: 'SAVE10', discount: 'Extra 10% OFF', description: 'Additional 10% discount on VPS and cloud hosting packages.', expiry_date: '2026-11-30T23:59:59.000Z', is_verified: true },
              { code: 'HOSTSPECIAL', discount: 'Extra 7% OFF', description: 'Save an extra 7% on all 48-month web hosting subscriptions.', expiry_date: '2026-12-15T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Adidas',
            slug: 'adidas',
            website: 'https://adidas.com',
            coupons: [
              { code: 'ADI30', discount: '30% OFF', description: 'Get 30% off sitewide on shoes, sportswear, and accessories.', expiry_date: '2026-07-04T23:59:59.000Z', is_verified: true },
              { code: 'STRIPES20', discount: '20% OFF', description: 'Extra 20% off for Creators Club members on select items.', expiry_date: '2026-10-25T23:59:59.000Z', is_verified: false }
            ]
          },
          {
            name: 'Walmart',
            slug: 'walmart',
            website: 'https://walmart.com',
            coupons: [
              { code: 'WALMART50', discount: '$10 OFF', description: 'Get $10 off on your first grocery order of $50 or more.', expiry_date: '2026-06-30T23:59:59.000Z', is_verified: false },
              { code: 'WMFREESHIP', discount: 'Free Shipping', description: 'Free shipping on orders over $35 with no membership required.', expiry_date: '2026-09-15T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'eBay',
            slug: 'ebay',
            website: 'https://ebay.com',
            coupons: [
              { code: 'EBAYFASH10', discount: '10% OFF', description: 'Save an extra 10% on select brand clothing and accessories.', expiry_date: '2026-08-31T23:59:59.000Z', is_verified: true },
              { code: 'COLLECT25', discount: '25% OFF', description: 'Get 25% off on vintage collectibles, action figures, and sports cards.', expiry_date: '2026-12-15T23:59:59.000Z', is_verified: false },
              { code: 'EBAYSAVE5', discount: '$5 OFF', description: 'Get $5 off sitewide on any item orders over $25 or more.', expiry_date: '2026-07-20T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Target',
            slug: 'target',
            website: 'https://target.com',
            coupons: [
              { code: 'TARGETROOM', discount: '15% OFF', description: 'Save 15% on home decor, bedding, and stylish furniture.', expiry_date: '2026-07-31T23:59:59.000Z', is_verified: true },
              { code: 'TGTBABY', discount: '$20 OFF', description: 'Get $20 gift card when you spend $100 on baby essentials.', expiry_date: '2026-08-20T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Apple',
            slug: 'apple',
            website: 'https://apple.com',
            coupons: [
              { code: 'IPADSTUDENT', discount: '$100 OFF', description: 'Students save up to $100 on the new iPad Air or iPad Pro.', expiry_date: '2026-09-15T23:59:59.000Z', is_verified: true },
              { code: 'APPLERED', discount: 'Free Engraving', description: 'Get free personalized engraving on any new AirPods or Apple Pencil.', expiry_date: '2026-12-25T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Starbucks',
            slug: 'starbucks',
            website: 'https://starbucks.com',
            coupons: [
              { code: 'BREWFREE', discount: 'Buy 1 Get 1', description: 'Buy one handcrafted beverage and get one of equal or lesser value free.', expiry_date: '2026-06-30T23:59:59.000Z', is_verified: true },
              { code: 'STAR2X', discount: 'Double Stars', description: 'Earn double stars on all purchases using the Starbucks App today.', expiry_date: '2026-07-15T23:59:59.000Z', is_verified: false }
            ]
          },
          {
            name: 'Steam',
            slug: 'steam',
            website: 'https://steampowered.com',
            coupons: [
              { code: 'STEAMSUMMER', discount: '50% OFF', description: 'Save 50% or more on top-selling indie games during the seasonal sale.', expiry_date: '2026-08-31T23:59:59.000Z', is_verified: true },
              { code: 'HALFLIFE90', discount: '90% OFF', description: 'Get 90% off the legendary Half-Life series for a limited time.', expiry_date: '2026-09-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'AliExpress',
            slug: 'aliexpress',
            website: 'https://aliexpress.com',
            coupons: [
              { code: 'ALIEXNEW', discount: '$4 OFF', description: 'Special ConvertSocial coupon: $4 off your first order of $5 or more.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'ALSAVE12', discount: '$12 OFF', description: 'Save $12 on select global orders valued at $80 or more.', expiry_date: '2026-10-15T23:59:59.000Z', is_verified: true },
              { code: 'ALISPRING5', discount: '5% OFF', description: 'Save an extra 5% on super trending smart gadgets and tech accessories.', expiry_date: '2026-08-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Adobe',
            slug: 'adobe',
            website: 'https://adobe.com',
            coupons: [
              { code: 'ADOBECREATIVE', discount: '20% OFF', description: 'Impact network exclusive: Save 20% on Creative Cloud All Apps plans.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'ADOBESTUDENT', discount: '60% OFF', description: 'Students & teachers save over 60% on entire Creative Cloud catalog.', expiry_date: '2026-11-20T23:59:59.000Z', is_verified: true },
              { code: 'ADOBEPRO', discount: 'Extra 10% OFF', description: 'Additional 10% off monthly Acrobat Pro document scanner subscriptions.', expiry_date: '2026-09-15T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Canva',
            slug: 'canva',
            website: 'https://canva.com',
            coupons: [
              { code: 'CANVAPRO30', discount: '30 Days Free', description: 'Get 30 days of Canva Pro premium designer tools for absolutely free.', expiry_date: '2026-12-25T23:59:59.000Z', is_verified: true },
              { code: 'CANVAEDU', discount: 'Free Access', description: '100% free premium class designs and workflows for verified educators.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'CANVASAVE10', discount: '10% OFF', description: 'Impact exclusive: Save 10% on annual Canva Pro premium subscriptions.', expiry_date: '2026-10-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Samsung',
            slug: 'samsung',
            website: 'https://samsung.com',
            coupons: [
              { code: 'SAMSUNGEVO', discount: '10% OFF', description: 'Awin network exclusive: Save 10% on select premium Galaxy smartphones.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'MEMBERS5', discount: 'Extra 5% OFF', description: 'Additional 5% discount sitewide for registered Samsung Members.', expiry_date: '2026-09-10T23:59:59.000Z', is_verified: false },
              { code: 'SAMSUNGTVS', discount: '$150 OFF', description: 'Get $150 off on award-winning QLED 4K Smart TVs and sound systems.', expiry_date: '2026-08-25T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'NordVPN',
            slug: 'nordvpn',
            website: 'https://nordvpn.com',
            coupons: [
              { code: 'NORDVPN68', discount: '68% OFF', description: 'Save 68% on 2-year cybersecurity shield protection + 3 months free.', expiry_date: '2026-12-25T23:59:59.000Z', is_verified: true },
              { code: 'SECURE10', discount: 'Extra 10% OFF', description: 'Get 10% off high-speed NordVPN Dedicated IP add-on plans.', expiry_date: '2026-10-15T23:59:59.000Z', is_verified: true },
              { code: 'NORDPASS30', discount: '30% OFF', description: 'Get 30% off NordPass Premium password locker subscriptions.', expiry_date: '2026-09-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Lenovo',
            slug: 'lenovo',
            website: 'https://lenovo.com',
            coupons: [
              { code: 'THINKPAD10', discount: '10% OFF', description: 'Impact exclusive: Save 10% on elite ThinkPad corporate laptops.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'LEGIONSAVE', discount: '15% OFF', description: 'Get 15% off high-performance Legion esports gaming laptops.', expiry_date: '2026-08-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Puma',
            slug: 'puma',
            website: 'https://puma.com',
            coupons: [
              { code: 'PUMASPEED', discount: '20% OFF', description: 'Awin exclusive: Save 20% on Puma nitro athletic footwear and tracksuits.', expiry_date: '2026-09-15T23:59:59.000Z', is_verified: true },
              { code: 'FOREVERFASTER', discount: 'Extra 15% OFF', description: 'Additional 15% off clearance items and summer sports merchandise.', expiry_date: '2026-10-31T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Fiverr',
            slug: 'fiverr',
            website: 'https://fiverr.com',
            coupons: [
              { code: 'FIVERRNEW10', discount: '10% OFF', description: 'Awin exclusive: Get 10% off your first digital design or dev service order.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'FIVERRBIZ', discount: '15% OFF', description: 'Save 15% on Fiverr Business setup and corporate onboarding.', expiry_date: '2026-11-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Booking.com',
            slug: 'bookingcom',
            website: 'https://booking.com',
            coupons: [
              { code: 'BOOKING15', discount: '15% OFF', description: 'Impact exclusive: Save 15% or more on certified Genius hotel stays worldwide.', expiry_date: '2026-09-30T23:59:59.000Z', is_verified: true },
              { code: 'RENTALCAR10', discount: '10% OFF', description: 'Get 10% off premium global car rentals when booked alongside stays.', expiry_date: '2026-08-31T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Udemy',
            slug: 'udemy',
            website: 'https://udemy.com',
            coupons: [
              { code: 'UDEMYLEARN', discount: '85% OFF', description: 'Impact exclusive: Up to 85% off select digital developer courses.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'SKILLS2026', discount: 'Extra 10% OFF', description: 'Save an extra 10% on business and project management courses.', expiry_date: '2026-10-15T23:59:59.000Z', is_verified: true },
              { code: 'UDEMYFIRST', discount: '$10 OFF', description: 'Get any professional developer course for just $10 flat for new accounts.', expiry_date: '2026-12-25T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Desktronic UK',
            slug: 'desktronic-uk',
            website: 'https://desktronic.co.uk/muhammadhaziqueali',
            coupons: [
              { code: 'MarkPaul15', discount: '15% OFF', description: 'Exclusive 15% off discount code sitewide on premium standing desks and frames.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true, affiliate_url: 'https://desktronic.co.uk/muhammadhaziqueali' },
              { code: 'MarkPaul15', discount: '15% OFF', description: 'Save 15% on high-performance 4-Leg standing desks for professional workspaces.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true, affiliate_url: 'https://desktronic.co.uk/products/4-leg-standing-desk?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program' },
              { code: 'MarkPaul15', discount: '15% OFF', description: 'Get 15% off Height Adjustable Desk Frame (HomeOne) with advanced single-motor preset memory.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true, affiliate_url: 'https://desktronic.co.uk/products/height-adjustable-desk-frame-homeone?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program' },
              { code: 'MarkPaul15', discount: '15% OFF', description: 'Save 15% off Height Adjustable Desk Frame (HomePro) dual-motor model.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true, affiliate_url: 'https://desktronic.co.uk/products/height-adjustable-desk-frame-homepro?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program' },
              { code: 'MarkPaul15', discount: '15% OFF', description: 'Enjoy 15% off Height Adjustable Standing Desk (HomePro) dual-motor complete setup.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true, affiliate_url: 'https://desktronic.co.uk/products/height-adjustable-desk-homepro?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program' },
              { code: 'MarkPaul15', discount: '15% OFF', description: 'Enjoy 15% off Height Adjustable Standing Desk (HomeOne) single-motor complete setup.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true, affiliate_url: 'https://desktronic.co.uk/products/height-adjustable-desk-homeone?bg_ref=fek2GZmWHH&utm_source=fek2GZmWHH&utm_medium=partner&utm_campaign=Beginner%20Program' },
              { code: 'MarkPaul15', discount: 'Free Shipping', description: 'Get free standard UK delivery on all orders above £100.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true, affiliate_url: 'https://desktronic.co.uk/muhammadhaziqueali' }
            ]
          },
          {
            name: 'Desktronic US',
            slug: 'desktronic-us',
            website: 'https://desktronic.com',
            coupons: [
              { code: 'DESKUS10', discount: '10% OFF', description: 'Get 10% off your next purchase of advanced standing desks.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'SPRING36', discount: '36% OFF', description: 'Enjoy 36% off during our limited-time Spring Sale promotion.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'USWIDE10', discount: '10% OFF', description: 'Exclusive 10% off discount code sitewide on all ergonomic frames.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'ERGOUS35', discount: '35% OFF', description: 'Save 35% on high-performance ergonomic office chairs.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'FREESHIPUS', discount: 'Free Shipping', description: 'Free delivery on all shipments across the United States.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'ACCESSUS35', discount: '35% OFF', description: 'Get 35% off on desk accessories, cable sleeves, and mouse mats.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'FRAMEUS30', discount: '30% OFF', description: 'Save 30% on smart height-adjustable desk frames.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'BESTSELL30', discount: '30% OFF', description: 'Enjoy 30% off on our best-selling ergonomic furniture.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'SELECT20', discount: '20% OFF', description: 'Save 20% on selected ergonomic office setups and accessories.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'USNEWS10', discount: '10% OFF', description: 'Enjoy 10% off your first purchase when subscribing to the newsletter.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Tenways UK',
            slug: 'tenways-uk',
            website: 'https://tenways.com/pages/uk-store',
            coupons: [
              { code: 'TENWAYSUK', discount: '£50 OFF', description: 'Special launch coupon: £50 off your first Tenways electric bike order.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'RIDEGREEN', discount: 'Free Guards', description: 'Get free mudguards and structural safety upgrades with any e-bike.', expiry_date: '2026-09-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Tenways US',
            slug: 'tenways-us',
            website: 'https://tenways.com',
            coupons: [
              { code: 'TENWAYSUS', discount: '$60 OFF', description: 'Get $60 off on sleek lightweight city e-bikes orders US wide.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'ECOMOVE', discount: 'Free Stand', description: 'Get a free adjustable premium kickstand with any new e-bike purchase.', expiry_date: '2026-09-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Geekbuying',
            slug: 'geekbuying',
            website: 'https://geekbuying.com',
            coupons: [
              { code: 'GEEKNEW', discount: '$5 OFF', description: 'ConvertSocial exclusive: Save $5 on orders over $50 sitewide.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'GEEKTECH10', discount: '10% OFF', description: 'Get 10% off high-speed 3D printers, lasers, and smart appliances.', expiry_date: '2026-09-15T23:59:59.000Z', is_verified: true },
              { code: 'GEEKSAVE', discount: '$15 OFF', description: 'Get an additional $15 off on tech collections valued at $200+.', expiry_date: '2026-10-31T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Banggood',
            slug: 'banggood',
            website: 'https://banggood.com',
            coupons: [
              { code: 'BGNEW10', discount: '10% OFF', description: 'ConvertSocial coupon: Save an extra 10% on your first wholesale order.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'BGSPRING8', discount: '8% OFF', description: 'Save 8% on active outdoor tools, smart electronics, and RC hobbies.', expiry_date: '2026-08-30T23:59:59.000Z', is_verified: true },
              { code: 'BGSAVE25', discount: '$25 OFF', description: 'Save $25 on bulk orders valued at $150 or more sitewide.', expiry_date: '2026-11-15T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Zaful',
            slug: 'zaful',
            website: 'https://zaful.com',
            coupons: [
              { code: 'ZAFULNEW', discount: '15% OFF', description: 'ConvertSocial exclusive: 15% off first order on clothing styles.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'ZAFUL20', discount: '20% OFF', description: 'Save 20% on visual design outfits on orders over $59.', expiry_date: '2026-10-15T23:59:59.000Z', is_verified: true },
              { code: 'ZAFULFREE', discount: 'Free Shipping', description: 'Get free standard shipping on apparel orders above $39.', expiry_date: '2026-09-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'MassiveMobile',
            slug: 'massivemobile',
            website: 'https://massivemobile.de',
            coupons: [
              { code: 'MASSIVE10', discount: '10% OFF', description: 'ConvertSocial deal: Save 10% on all modular tech mobile accessories.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'MASSIVEFREE', discount: 'Free Delivery', description: 'Get free express courier delivery on orders above €100.', expiry_date: '2026-09-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'DHgate',
            slug: 'dhgate',
            website: 'https://dhgate.com',
            coupons: [
              { code: 'DHNEW4', discount: '$4 OFF', description: 'ConvertSocial coupon: $4 off on first order of $5 or more.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'DHSAVE10', discount: '$10 OFF', description: 'Get $10 off sitewide on bulk items orders above $100.', expiry_date: '2026-09-15T23:59:59.000Z', is_verified: true },
              { code: 'DHGATE20', discount: '$20 OFF', description: 'Save an extra $20 on bulk orders valued at $200 or more.', expiry_date: '2026-10-31T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Envato Elements',
            slug: 'envato',
            website: 'https://elements.envato.com',
            coupons: [
              { code: 'ENVATOSTUDENT', discount: '30% OFF', description: 'Impact exclusive: Students save 30% on unlimited creative assets.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'ENVATOTRIAL', discount: '7 Days Free', description: 'Get 7 days of unlimited vector templates and media assets for free.', expiry_date: '2026-12-25T23:59:59.000Z', is_verified: true },
              { code: 'ENVATOSAVE10', discount: '10% OFF', description: 'Save 10% on annual individual creative team registrations.', expiry_date: '2026-09-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Semrush',
            slug: 'semrush',
            website: 'https://semrush.com',
            coupons: [
              { code: 'SEMRUSHTRIAL', discount: '14 Days Free', description: 'Impact network special: Get 14 days free access to Semrush Pro SEO suite.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'SEMRUSHSAVE', discount: '17% OFF', description: 'Save 17% on any annual SEO research plans Pro or Guru.', expiry_date: '2026-10-30T23:59:59.000Z', is_verified: true },
              { code: 'SEMRUSHGURU', discount: '7 Days Free', description: 'Get 7 days free access to Semrush Guru marketing agency plan.', expiry_date: '2026-09-15T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Namecheap',
            slug: 'namecheap',
            website: 'https://namecheap.com',
            coupons: [
              { code: 'NAMECHEAP99', discount: '$0.99 Domains', description: 'Get selected .com domain registration for just $0.99 for first year.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'NAMECHEAPSAVE', discount: '20% OFF', description: 'Impact network exclusive: Save 20% on Stellar shared web hosting.', expiry_date: '2026-10-15T23:59:59.000Z', is_verified: true },
              { code: 'SSLPROTECT', discount: '15% OFF', description: 'Save 15% on Comodo SSL site certificates and security tools.', expiry_date: '2026-08-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Squarespace',
            slug: 'squarespace',
            website: 'https://squarespace.com',
            coupons: [
              { code: 'GIMME10', discount: '10% OFF', description: 'Save 10% on your first website, commerce shop, or domain registration.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'SQSSTUDENT', discount: '50% OFF', description: 'Verified students save over 50% on annual website subscriptions.', expiry_date: '2026-10-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'HostGator',
            slug: 'hostgator',
            website: 'https://hostgator.com',
            coupons: [
              { code: 'GATOR60', discount: '60% OFF', description: 'Impact exclusive: Save 60% on WordPress Hatchling shared web hosting.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'GATORPENNY', discount: '$0.01 First Mo', description: 'Get your first month of shared web hosting for just one penny.', expiry_date: '2026-09-30T23:59:59.000Z', is_verified: true },
              { code: 'DOMAINGATOR', discount: '$4.99 Domains', description: 'Save and get domains for just $4.99 during corporate promotions.', expiry_date: '2026-10-15T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Bluehost',
            slug: 'bluehost',
            website: 'https://bluehost.com',
            coupons: [
              { code: 'BLUEHOST75', discount: '75% OFF', description: 'Impact network exclusive: Get 75% off managed WordPress hosting.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'BLUEFREE', discount: 'Free Domain', description: 'Get a free custom domain registration with any annual plan order.', expiry_date: '2026-11-30T23:59:59.000Z', is_verified: true },
              { code: 'BLUESAVE10', discount: 'Extra 10% OFF', description: 'Save an extra 10% on WooCommerce online store registrations.', expiry_date: '2026-09-15T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Coursera',
            slug: 'coursera',
            website: 'https://coursera.org',
            coupons: [
              { code: 'COURSERAFREE', discount: '7 Days Free', description: 'Impact exclusive: 7 days free access to standard Google & Meta certificates.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'COURSERA10', discount: '10% OFF', description: 'Get 10% off selected university professional degree courses.', expiry_date: '2026-10-15T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Skillshare',
            slug: 'skillshare',
            website: 'https://skillshare.com',
            coupons: [
              { code: 'SKILLSHARE30', discount: '30 Days Free', description: 'Get 30 days free access to premium digital creative video catalog.', expiry_date: '2026-12-25T23:59:59.000Z', is_verified: true },
              { code: 'SKILLSHARE50', discount: '50% OFF', description: 'Impact exclusive: Save 50% on annual premium memberships.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'CREATIVE10', discount: 'Extra 10% OFF', description: 'Save 10% on corporate creative learning teams onboarding.', expiry_date: '2026-09-15T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'NordPass',
            slug: 'nordpass',
            website: 'https://nordpass.com',
            coupons: [
              { code: 'NORDPASS50', discount: '50% OFF', description: 'Impact network exclusive: Save 50% on 2-year password lockers.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'PASSSECURE', discount: 'Extra 10% OFF', description: 'Get an extra 10% off NordPass Business identity packages.', expiry_date: '2026-08-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'GoDaddy',
            slug: 'godaddy',
            website: 'https://godaddy.com',
            coupons: [
              { code: 'GODADDY30', discount: '30% OFF', description: 'Save 30% on first year standard hosting and domain bundles.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'COM10', discount: '$4.99 .com', description: 'Get your first .com domain registration for just $4.99.', expiry_date: '2026-09-15T23:59:59.000Z', is_verified: true },
              { code: 'GODADDYHOST', discount: '50% OFF', description: 'Save 50% on Economy Shared Web Hosting annual plans.', expiry_date: '2026-08-30T23:59:59.000Z', is_verified: true }
            ]
          },
          {
            name: 'Gymshark',
            slug: 'gymshark',
            website: 'https://gymshark.com',
            coupons: [
              { code: 'GYMSHARK10', discount: '10% OFF', description: 'Save 10% sitewide on gym sportswear, activewear, and gear.', expiry_date: '2026-12-31T23:59:59.000Z', is_verified: true },
              { code: 'SHARKFREESHIP', discount: 'Free Shipping', description: 'Get free shipping on fitness gear orders above $75 sitewide.', expiry_date: '2026-09-15T23:59:59.000Z', is_verified: true },
              { code: 'SHARKSTUDENT', discount: '15% OFF', description: 'Impact exclusive: Students save 15% on latest fitness clothes.', expiry_date: '2026-08-31T23:59:59.000Z', is_verified: true }
            ]
          }
        ];

        for (const s of storesData) {
          const createdStore = await strapi.documents('api::store.store').create({
            data: {
              name: s.name,
              slug: s.slug,
              website: s.website,
            },
            status: 'published',
          });

          for (const c of s.coupons) {
            await strapi.documents('api::coupon.coupon').create({
              data: {
                code: c.code,
                discount: c.discount,
                description: c.description,
                expiry_date: c.expiry_date,
                is_verified: c.is_verified,
                affiliate_url: (c as any).affiliate_url || '',
                store: createdStore.documentId,
              },
              status: 'published',
            });
          }
        }
        strapi.log.info('Seeding finished successfully!');
      }
    } catch (err) {
      strapi.log.error('Error in bootstrap:', err);
    }
  },
};
