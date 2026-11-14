import db, { plain } from '@/lib/db'; import Product from '@/models/Product';
import Hero from '@/components/Hero'; import { Marquee, Featured, Why, Deals } from '@/components/Sections';
import { CATALOG } from '@/lib/catalog';
export const dynamic = 'force-dynamic';
export default async function Home() {
  let additionalItems = [];
  try {
    await db();
    additionalItems = plain(await Product.find({ featured: true }).sort({ createdAt: -1 }).lean());
  } catch (error) {
    console.error('Unable to load featured database products; showing catalogue products instead.', error);
  }
  const items = [...CATALOG.filter((product) => product.featured), ...additionalItems]
    .filter((product, index, list) => list.findIndex((other) => `${other.brand} ${other.name}`.toLowerCase() === `${product.brand} ${product.name}`.toLowerCase()) === index)
    .slice(0, 8);
  return <><Hero /><Marquee /><Featured items={items} /><Why catalogCount={CATALOG.length} /><Deals /></>;
}
