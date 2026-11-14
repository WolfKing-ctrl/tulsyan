import Link from 'next/link'; import db, { plain } from '@/lib/db'; import Product from '@/models/Product'; import Explorer from '@/components/Explorer'; import { Reveal } from '@/components/fx';
import { mergeCatalogProducts } from '@/lib/catalog';
export const dynamic = 'force-dynamic'; export const metadata = { title: 'Products — Tulsyan Healthcare' };
export default async function Products({ searchParams }) {
  let additionalItems = [];
  try {
    await db();
    additionalItems = plain(await Product.find().sort({ createdAt: -1 }).lean());
  } catch (error) {
    console.error('Unable to load additional database products; showing catalogue products instead.', error);
  }
  const items = mergeCatalogProducts(additionalItems);
  return <section className="prod catalogue-page" style={{ minHeight: '80vh' }}><div className="wrap">
    <Reveal><span className="eyebrow">Wholesale healthcare supply</span><h1 className="h2">Product catalogue</h1><p className="catalog-intro">Browse medical devices, diagnostics, respiratory care, supports and everyday clinical consumables from brands trusted by healthcare professionals. Select an item to ask our team for bulk availability and a B2B quote.</p></Reveal>
    <Explorer items={items} initial={searchParams?.category || 'all'} />
    <div className="catalog-footnote"><b>Supplying hospitals, clinics, pharmacies and distributors.</b><span>Looking for a bulk order or a product not listed? <Link href="/contact">Talk to our wholesale team ↗</Link></span><small>Product range and availability may vary. Contact us to confirm current supply and pack details.</small></div>
  </div></section>;
}
