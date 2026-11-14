import mongoose from 'mongoose';
const map = { d: 'diabetes', b: 'monitors', r: 'respiratory', s: 'supports', c: 'consumables' };
const raw = `d|Accu-Chek Active Meter|Accu-Chek|1199|Best seller
d|Accu-Chek Instant Meter|Accu-Chek|1549|
d|Accu-Chek Guide Meter|Accu-Chek|2249|New arrival
d|Accu-Chek Active 50 Strips|Accu-Chek|1190|Best seller
d|Contour Plus 50 Strips|Contour|1077|
d|On Call Plus 50 Strips|On Call|1170|
d|Dr Morepen BG 03 25 Strips|Dr Morepen|465|
d|Gluco-Chek Meter|Gluco-Chek|740|
b|Omron BP Monitor HEM-7156|Omron|4090|Best seller
b|Omron BP Monitor HEM-7124|Omron|1301|
b|Omron BP Monitor HEM-7361T|Omron|7290|
b|Omron BP Monitor HEM-7600T|Omron|11990|New arrival
b|T-Care BP Monitor|T-Care|1899|
b|Optima Digital BP OBP-113|Optima|1699|
b|Dr Morepen Pulse Oximeter|Dr Morepen|1599|Best seller
b|Optima Fingertip Oximeter|Optima|1338|
b|Omron Thermometer MC-246|Omron|275|
b|Hicks Digital Thermometer|Hicks|198|
r|Omron Nebulizer NEC-106|Omron|1866|Best seller
r|Omron Nebulizer NEC-28|Omron|3770|
r|Hicks Nebulizer NEB-210|Hicks|1710|
r|T-Care Nebulizer TIN 110|T-Care|1399|
r|Dr Morepen Compressor CN-11|Dr Morepen|1500|
r|Dr Morepen Vaporizer VP-06|Dr Morepen|450|
r|Optima Compressor Nebulizer|Optima|760|
r|T-Care Spirometer MSP-01|T-Care|949|New arrival
s|Lifewear Knee Cap|Lifewear|450|
s|Lifewear Knee Immobilizer|Lifewear|1250|
s|Lifewear Lumbo Sacral Belt|Lifewear|1125|
s|T-Care Hot Water Bag|T-Care|799|
s|T-Care Airbed|T-Care|5499|
s|Optima Crepe Bandage 10cm x 4m|Optima|370|
c|T-Care Examination Gloves 100|T-Care|1100|Best seller
c|T-Care Latex Gloves 100|T-Care|1799|
c|T-Care Lancet 100|T-Care|350|
c|Medigrip Adhesive Tape 10cm|Medigrip|245|
c|Medigrip Bandage Regular|Medigrip|120|
c|Romsons Adult Pants Medium|Romsons|852|`;
await mongoose.connect(process.env.MONGODB_URI);
const col = mongoose.connection.collection('products');
await col.deleteMany({});
const now = new Date();
await col.insertMany(raw.split('\n').map((l) => { const [a, name, brand, p, badge] = l.split('|'); return { name, brand, category: map[a], price: +p, badge, description: '', featured: badge === 'Best seller', image: { url: '', publicId: '' }, createdAt: now, updatedAt: now }; }));
console.log('Seeded'); process.exit(0);
