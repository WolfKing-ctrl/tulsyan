const rows = [
  ['diabetes', 'Accu-Chek', 'Accu-Chek Active 50'],
  ['diabetes', 'Accu-Chek', 'Accu-Chek Active 100'],
  ['diabetes', 'Accu-Chek', 'Accu-Chek Active Meter'],
  ['diabetes', 'Accu-Chek', 'Accu-Chek Guide 50 Strip'],
  ['diabetes', 'Accu-Chek', 'Accu-Chek Guide Meter'],
  ['diabetes', 'Accu-Chek', 'Accu-Chek Instant 50 Test Strip'],
  ['diabetes', 'Accu-Chek', 'Accu-Chek Instant Meter'],
  ['diabetes', 'Accu-Chek', 'Accu-Chek Instant-S Meter'],
  ['diabetes', 'Accu-Chek', 'Accu-Chek Fine 4mm 32G'],
  ['diabetes', 'Contour', 'Contour Plus Contour Meter'],
  ['diabetes', 'Contour', 'Contour Plus 50 Strip'],
  ['diabetes', 'Contour', 'Contour Plus 25 Strip'],
  ['diabetes', 'Dr Morepen', 'Dr Morepen BG 03 25 Test Strip'],
  ['diabetes', 'Dr Morepen', 'Dr Morepen 50 Test Strip'],
  ['monitors', 'Dr Morepen', 'Dr Morepen BP 14'],
  ['monitors', 'Dr Morepen', 'Dr Morepen BP 15'],
  ['monitors', 'Dr Morepen', 'Dr Morepen Digital Weighing Scale DS-11'],
  ['diabetes', 'Dr Morepen', 'Dr Morepen Semi Meter'],
  ['monitors', 'Dr Morepen', 'Dr Morepen Pulse Oximeter'],
  ['respiratory', 'Dr Morepen', 'Dr Morepen Vaporizer VP-06'],
  ['monitors', 'Dr Morepen', 'Dr Morepen Stethoscope ST-01A'],
  ['diabetes', 'Dr Morepen', 'Dr Morepen Pregnancy Test Kit'],
  ['respiratory', 'Dr Morepen', 'Dr Morepen Compressor Nebulizer CN-11'],
  ['diabetes', 'Gluco-Chek', 'Gluco-Chek Meter'],
  ['diabetes', 'Glucose', 'Glucose 2S Strip 5 Sec'],
  ['diabetes', 'Glucose', 'Glucose 50 Strip 5 Sec'],
  ['diabetes', 'Glucose', 'Glucose Strip 9 Seconds'],
  ['monitors', 'Omron', 'ECG Machine + BP Monitor HEM-7530T'],
  ['monitors', 'Omron', 'Omron BP Monitor HEM-7600T'],
  ['monitors', 'Omron', 'Omron HEM-6161'],
  ['monitors', 'Omron', 'Omron 7121'],
  ['monitors', 'Omron', 'Omron 7141'],
  ['monitors', 'Omron', 'Omron BP Monitor HEM-7156'],
  ['monitors', 'Omron', 'Omron BP Monitor HEM-7361T'],
  ['monitors', 'Omron', 'Omron HN-289'],
  ['monitors', 'Omron', 'Omron Thermometer MC-246'],
  ['respiratory', 'Omron', 'Omron Nebulizer NEC-106'],
  ['respiratory', 'Omron', 'Omron Nebulizer NEC-28'],
  ['monitors', 'Omron', 'Omron HEM-7143T1A'],
  ['monitors', 'Omron', 'Omron HEM-8712'],
  ['monitors', 'Omron', 'Omron HEM-7090L'],
  ['monitors', 'Omron', 'Omron HEM-7194T1FL'],
  ['monitors', 'Omron', 'Omron HEM-7090'],
  ['monitors', 'Omron', 'Omron HEM-7183T1-FLB'],
  ['monitors', 'Omron', 'Omron HEM-7124'],
  ['monitors', 'Omron', 'Omron AC Adapter'],

  ['consumables', 'Romsons', 'Romsons Intra Cath 24/26'],
  ['consumables', 'Romsons', 'Romsons Kempore 0.5/1'],
  ['consumables', 'Romsons', 'Romsons Kempore 3 Inch'],
  ['consumables', 'Romsons', 'Romsons Foley 14'],
  ['consumables', 'Romsons', 'Romsons Foley 16'],
  ['consumables', 'Romsons', 'Romsons Foley 18'],
  ['respiratory', 'Romsons', 'Romsons Aero Mist Adult'],
  ['consumables', 'Romsons', 'Romsons Adult Diaper Child'],
  ['consumables', 'Romsons', 'Romsons Adult Diaper Medium'],
  ['consumables', 'Romsons', 'Romsons Adult Pants Large'],
  ['consumables', 'Romsons', 'Romsons Adult Pants Small XL'],
  ['consumables', 'Romsons', 'Romsons Adult Pants Medium'],
  ['respiratory', 'Romsons', 'Romsons Nebulizer Angel'],
  ['consumables', 'Romsons', 'Romsons Spinal Needle 25'],
  ['diabetes', 'On Call Plus', 'On Call Plus Bold Glucose'],
  ['diabetes', 'On Call Plus', 'On Call Plus 200 Strip'],
  ['diabetes', 'On Call Plus', 'On Call Plus 50 Strip'],
  ['consumables', 'Hansaplast', 'Hansaplast Regular 100'],
  ['consumables', 'Hansaplast', 'Hansaplast 100+40'],
  ['consumables', 'BD', 'BD Pen Needle'],
  ['consumables', 'BD', 'BD Glide with TRL U-40'],
  ['monitors', 'Hicks', 'Hicks Thermometer Digital'],
  ['monitors', 'Hicks', 'Hicks Thermometer Fast Read'],
  ['monitors', 'Hicks', 'Hicks Thermometer Flexible'],
  ['respiratory', 'Hicks', 'Hicks Nebulizer NEB-210'],
  ['respiratory', 'Hicks', 'Hicks Nebulizer NEB-215'],
  ['respiratory', 'Control D', 'Control D Nebulizer PDM Neb Aerosol'],
  ['respiratory', 'T-Care', 'T-Care Nebulizer TIN 110'],
  ['respiratory', 'Optima', 'Optima Big Vaporizer'],
  ['respiratory', 'Optima', 'Optima Nebulizer Smart'],
  ['respiratory', 'Optima', 'Optima Compressor Nebulizer'],
  ['consumables', 'Optima', 'Optima Cannula Fixer'],
  ['diabetes', 'Morepen', 'Morepen SEM Meter'],
  ['consumables', 'Medical', 'Operation Prep Razor'],

  ['consumables', 'T-Care', 'T-Care Gloves 70'],
  ['consumables', 'T-Care', 'T-Care Examination Gloves 100'],
  ['consumables', 'T-Care', 'T-Care Latex Gloves 100'],
  ['diabetes', 'T-Care', 'T-Care Lancet 50'],
  ['diabetes', 'T-Care', 'T-Care Lancet 100'],
  ['monitors', 'T-Care', 'T-Care BP Monitor'],
  ['supports', 'T-Care', 'T-Care Hot Water Bag'],
  ['supports', 'T-Care', 'T-Care Warm Bag'],
  ['supports', 'T-Care', 'T-Care Breast Pump Electric'],
  ['supports', 'T-Care', 'T-Care Breast Pump Manual'],
  ['monitors', 'T-Care', 'T-Care Arm Cuff S/M/L'],
  ['supports', 'T-Care', 'T-Care Airbed'],
  ['respiratory', 'T-Care', 'T-Care Spirometer MSP-01'],
  ['consumables', 'T-Care', 'T-Care Disposable Gloves'],
  ['consumables', 'T-Care', 'T-Care Zig-Zag Cotton 100gm'],
  ['consumables', 'T-Care', 'T-Care Zig-Zag Cotton 400gm'],
  ['consumables', 'T-Care', 'T-Care Zig-Zag Cotton 500gm'],
  ['consumables', 'T-Care', 'T-Care Surgical Combine Dressing 10x10'],
  ['consumables', 'T-Care', 'T-Care IV Cannula Fixator'],
  ['supports', 'Lifewear', 'Lifewear Knee Cap Small'],
  ['supports', 'Lifewear', 'Lifewear Knee Cap Medium'],
  ['supports', 'Lifewear', 'Lifewear Knee Cap Large'],
  ['supports', 'Lifewear', 'Lifewear Knee Cap Extra Large'],
  ['supports', 'Lifewear', 'Lifewear Knee Immobilizer Small'],
  ['supports', 'Lifewear', 'Lifewear Knee Immobilizer Medium'],
  ['supports', 'Lifewear', 'Lifewear Knee Immobilizer Large'],
  ['supports', 'Lifewear', 'Lifewear Knee Immobilizer Extra Large'],
  ['supports', 'Lifewear', 'Lifewear Lumbo Sacral Belt Small'],
  ['supports', 'Lifewear', 'Lifewear Lumbo Sacral Belt Medium'],
  ['supports', 'Lifewear', 'Lifewear Lumbo Sacral Belt Large'],
  ['supports', 'Lifewear', 'Lifewear Lumbo Sacral Belt Extra Large'],
  ['consumables', 'Medigrip', 'Medigrip Adhesive Tape 10cm'],
  ['consumables', 'Medigrip', 'Medigrip Adhesive Tape 2.5cm'],
  ['consumables', 'Medigrip', 'Medigrip Adhesive Tape 2.5cm x 5'],
  ['consumables', 'Medigrip', 'Medigrip Adhesive Tape 5cm x 5'],
  ['consumables', 'Medigrip', 'Medigrip Adhesive Tape 7.5cm x 4'],
  ['consumables', 'Medigrip', 'Medigrip Bandage Regular 10x10mm'],
  ['consumables', 'Medigrip', 'Medigrip Belladonna Plaster 10x10cm'],
  ['consumables', 'Medigrip', 'Medigrip Corncap 25x75m'],
  ['supports', 'Optima', 'Optima Crepe Bandage 10cm x 4m'],
  ['supports', 'Optima', 'Optima Crepe Bandage 15cm x 4m'],
  ['supports', 'Optima', 'Optima Crepe Bandage 6cm x 4m'],
  ['monitors', 'Optima', 'Optima Digital Blood Pressure OBP-113'],
  ['monitors', 'Optima', 'Optima Dual Digital Meter GOT-01'],
  ['monitors', 'Optima', 'Optima Fingertip Pulse Oximeter'],
];

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const descriptions = {
  diabetes: 'Blood glucose meters, test strips, lancets and related diabetes-care essentials. Ask us about current pack sizes and availability.',
  monitors: 'Blood-pressure monitors, oximeters, thermometers and other monitoring devices for healthcare and home-care supply.',
  respiratory: 'Nebulizers, vaporizers and related respiratory-care products. Contact us for model availability and bulk enquiries.',
  supports: 'Braces, supports and everyday recovery and comfort products. Ask about available sizes and pack details.',
  consumables: 'Everyday medical and clinical consumables for routine facility replenishment. Bulk quantities are welcome.',
};

const products = rows.map(([category, brand, name], index) => ({
  _id: `catalog-${index + 1}`,
  slug: slugify(`${brand}-${name}`),
  category,
  brand,
  name,
  badge: '',
  featured: false,
  description: descriptions[category],
}));

const featuredIndexes = new Set();
for (const category of ['diabetes', 'monitors', 'respiratory', 'supports', 'consumables']) {
  let count = 0;
  products.forEach((product, index) => {
    if (product.category === category && count < 2) {
      featuredIndexes.add(index);
      count += 1;
    }
  });
}

export const CATALOG = products.map((product, index) => ({
  ...product,
  featured: featuredIndexes.has(index),
}));

export function mergeCatalogProducts(additionalProducts = []) {
  const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const products = [...CATALOG];
  const knownProducts = new Set(CATALOG.map((product) => normalize(`${product.brand} ${product.name}`)));

  for (const product of additionalProducts) {
    const key = normalize(`${product.brand || ''} ${product.name || ''}`);
    if (knownProducts.has(key)) continue;
    knownProducts.add(key);
    products.push(product);
  }

  return products;
}

export function findCatalogProduct(slug) {
  return CATALOG.find((product) => product.slug === slug);
}
