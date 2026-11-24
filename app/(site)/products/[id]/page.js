import Link from 'next/link'; import { notFound } from 'next/navigation';
import db, { plain } from '@/lib/db'; import Product from '@/models/Product'; import { CATS } from '@/lib/constants';
import Icon from '@/components/Icon'; import { Reveal, Magnetic } from '@/components/fx'; import { getProductImage, getCategoryProductImage } from '@/lib/product-images'; import { findCatalogProduct } from '@/lib/catalog';
export const dynamic = 'force-dynamic';
export default async function Detail({ params }) {
  let p = findCatalogProduct(params.id); try { if (!p) { await db(); p = plain(await Product.findById(params.id).lean()); } } catch {}
  if (!p) notFound();
  const own = getProductImage(p), image = own || getCategoryProductImage(p.category, p.name);
  return (<section className="wrap page"><Reveal><Link href="/products" className="b">← All products</Link></Reveal>
    <div className="pdg" style={{ marginTop: 20 }}><Reveal><div className="pimg big">{image ? <img src={image.src} alt={own ? image.alt : `Representative category image: ${image.alt}`} /> : <Icon c={p.category} />}{image && !own && <span className="pimg-caption">Category image</span>}</div></Reveal>
      <Reveal delay={.15}><div className="b">{p.brand} · {CATS.find((c) => c.id === p.category)?.name}</div><h1 style={{ margin: '10px 0' }}>{p.name}</h1>
        {p.description && <p>{p.description}</p>}
        <p>Request current availability, pack size and wholesale terms for your business. Our team can help with bulk orders for hospitals, clinics, pharmacies and distributors.</p>
        <div className="product-detail-points"><span>Genuine branded products</span><span>Bulk enquiries welcome</span><span>Pan-India supply support</span></div>
        <Magnetic><Link className="btn fill" href={`/contact?item=${encodeURIComponent(p.name)}`}>Request B2B quote ↗</Link></Magnetic></Reveal></div></section>);
}
