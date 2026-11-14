'use client';
import Link from 'next/link'; import Icon from './Icon'; import { Tilt } from './fx';
import { getCategoryProductImage, getProductImage } from '@/lib/product-images';
export default function ProductCard({ p }) {
  const productImage = getProductImage(p);
  const image = productImage || getCategoryProductImage(p.category, p.name);
  return (<Tilt><Link href={`/products/${p.slug || p._id}`} className="pc">
    <div className="top"><span>{p.badge}</span><span className="add">+</span></div>
    <div className="pimg">{image ? <img src={image.src} alt={productImage ? image.alt : `Representative category image: ${image.alt}`} loading="lazy" /> : <Icon c={p.category} />}{image && !productImage && <span className="pimg-caption">Category image</span>}</div>
    <div className="b">{p.brand}</div><div className="row"><h3>{p.name}</h3></div><span className="catalog-card-action">View details &amp; request B2B quote <span aria-hidden="true">↗</span></span></Link></Tilt>);
}
