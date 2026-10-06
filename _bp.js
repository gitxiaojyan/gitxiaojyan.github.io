const baseProducts = [
  {
    id: 'heavyweight-terry-hoodie',
    name: 'Heavyweight Terry Hoodie',
    category: 'hoodie',
    categoryLabel: 'Hoodie',
    badge: 'Bestseller',
    image: '/y/h8.avif',
    images: ['/y/h1.avif', '/y/h2.avif', '/y/h6.avif', '/y/h5.avif'],
    moq: '100 pcs',
    leadTime: '20-25 days',
    fabric: '100% Cotton 420GSM Terry Fleece',
    sku: 'DC-HD-001',
    desc: 'Our signature heavyweight hoodie in 420GSM loopback terry fleece. Oversized drop-shoulder fit, double-layer hood, kangaroo pocket and ribbed cuffs. A clean canvas for screen print, embroidery and custom branding.',
    specs: {
      fabric: '100% Cotton Terry Fleece',
      weight: '420 GSM',
      moq: '100 pieces per style',
      leadTime: '20-25 days',
      wash: 'Garment dyed / Enzyme',
      sizing: 'S - 3XL (custom available)'
    }
  },
  {
    id: 'oversized-graphic-tee',
    name: 'Oversized Graphic Tee',
    category: 'tee',
    categoryLabel: 'Tee',
    badge: 'New',
    image: '/y/t1.avif',
    images: ['/y/t2.avif', '/y/t6.avif', '/y/t4.avif', '/y/t5.avif'],
    moq: '100 pcs',
    leadTime: '20-25 days',
    fabric: '100% Cotton 240GSM Jersey',
    sku: 'DC-TE-001',
    desc: 'Oversized boxy-fit tee in heavy 240GSM cotton jersey. Front graphic printing available in screen print, DTG or puff ink. Pre-shrunk fabric, taped shoulder seams and reinforced neck ribbing.',
    specs: {
      fabric: '100% Cotton Jersey',
      weight: '220 GSM',
      moq: '100 pieces per style',
      leadTime: '20-25 days',
      print: 'Screen / DTG / Puff Ink',
      sizing: 'S - 3XL (custom available)'
    }
  },
  {
    id: 'Baseball-jacket',
    name: 'Baseball jacket',
    category: 'jacket',
    categoryLabel: 'Jacket',
    badge: 'Popular',
    image: '/y/jk10.avif',
    images: ['/y/jk.avif', '/y/jk3.avif', '/y/jk2.avif', '/y/jk4.avif'],
    moq: '100 pcs',
    leadTime: '25-30 days',
    fabric: '100% Cotton 12oz',
    sku: 'DC-JK-001',
    desc: 'Classic trucker silhouette in mottled acid wash. Bleach-treated 300gsm 100% Cotton gives every piece a one-of-a-kind finish. Pointed collar, chest flap pockets, adjustable waist tabs and branded copper hardware.',
    specs: {
      fabric: '100% Cotton',
      weight: '300 GSM',
      moq: '100 pieces per style',
      leadTime: '25-30 days',
      wash: 'Acid / Stone / Bleach',
      sizing: 'S - 3XL (custom available)'
    }
  },
  {
    id: 'Sweatpants',
    name: 'Wash Sweatpants',
    category: 'Sweatpants',
    categoryLabel: 'Sweatpants',
    badge: 'Bestseller',
    image: '/y/sp5.avif',
    images: ['/y/sp6.avif', '/y/sp4.avif', '/y/sp9.avif', '/y/sp8.avif'],
    moq: '100 pcs',
    leadTime: '25-30 days',
    fabric: '98% Cotton 2% Spandex 11oz',
    sku: 'DC-JN-001',
    desc: 'Streetwear statement sweatpants with hand-applied rhinestone studs along the seams and pockets. Slim stretch fit with 5-pocket styling, YKK zip and reinforced stress points. Multiple wash and stone options.',
    specs: {
      fabric: '98% Cotton 2% Spandex',
      weight: '300 GSM',
      moq: '100 pieces per style',
      leadTime: '25-30 days',
      details: 'Rhinestone / Studs / Patch',
      sizing: '28 - 40 waist (custom available)'
    }
  },
  {
    id: 'cargo-pants',
    name: 'Multi-Pocket Cargo Pants',
    category: 'pants',
    categoryLabel: 'Cargo Pants',
    badge: 'New',
    image: '/y/cargo pant4.avif',
    images: ['/y/cargo pant1.avif', '/y/cargo pant3.avif', '/y/cargo pant2.avif', '/y/cargo pant5.avif'],
    moq: '100 pcs',
    leadTime: '25-30 days',
    fabric: '100% Cotton Ripstop Twill',
    sku: 'DC-PT-001',
    desc: 'Utility cargo pants with six-pocket layout, drawstring waist and tapered leg. Made from durable ripstop twill with bartack reinforcement. Custom pocket styles, embroidery and reflective detailing available.',
    specs: {
      fabric: '100% Cotton Ripstop Twill',
      weight: '320 GSM / 9.4 oz',
      moq: '100 pieces per style',
      leadTime: '25-30 days',
      details: '6-Pocket Utility / Drawstring',
      sizing: 'S - 3XL (custom available)'
    }
  },
  {
    id: 'vest',
    name: 'Vest',
    category: 'vest',
    categoryLabel: 'Vest',
    badge: '',
    image: '/y/tanktop2.avif',
    images: ['/y/tanktop3.avif', '/y/tanktop6.avif', '/y/tanktop1.avif', '/y/tanktop1.avif'],
    moq: '100 pcs',
    leadTime: '20-25 days',
    fabric: '100% Cotton ',
    sku: 'DC-VT-001',
    desc: 'Classic vest with pointed collar and button-front closure. Perfect for streetwear layering, biker and festival looks. Custom patches, embroidery, rhinestone and distressing available.',
    specs: {
      fabric: '100% Cotton ',
      weight: '220 GSM',
      moq: '100 pieces per style',
      leadTime: '15-20 days',
      wash: 'Raw / Stone / Acid / Distressed',
      sizing: 'S - 3XL (custom available)'
    }
  }
];
