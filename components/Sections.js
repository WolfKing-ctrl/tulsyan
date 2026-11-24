'use client';
import { useRef } from 'react'; import Link from 'next/link'; import { motion, useScroll, useTransform } from 'framer-motion';
import { BRANDS, CATS } from '@/lib/constants'; import { Reveal, Counter, Magnetic } from './fx'; import ProductCard from './ProductCard';
import { getCategoryProductImage } from '@/lib/product-images';

const ic = (d) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d}</svg>;

export function Marquee() {
  return (<div className="brands"><div className="cap">Brands we stock &amp; supply</div><div className="marquee"><div className="track">{[...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => <span key={i}>{b}</span>)}</div></div></div>);
}

export function Categories() {
  return (<section className="sec"><div className="wrap"><Reveal><div className="sec-head"><span className="eyebrow">Shop by category</span><h2 className="h2">One partner for your <span className="grad">entire supply list</span></h2><p className="section-intro">Five focused ranges covering the devices and consumables healthcare businesses reorder every week.</p></div></Reveal>
    <div className="cats">{CATS.map((c, i) => { const img = getCategoryProductImage(c.id); return (
      <Reveal key={c.id} delay={i * .07}><motion.div style={{ height: '100%' }} whileHover={{ y: -6 }}><Link href={`/products?category=${c.id}`} className="cat" style={{ height: '100%' }}>
        <span className="glow" /><span className="num">0{i + 1}</span>{img && <img src={img.src} alt={img.alt} loading="lazy" />}
        <h3>{c.name}</h3><p>{c.sub}</p><span className="go">→</span></Link></motion.div></Reveal>); })}</div></div></section>);
}

export function Featured({ items }) {
  return (<section className="prod"><div className="wrap"><Reveal><span className="eyebrow">Featured range</span><h2 className="h2">Best-selling <span className="grad">products</span></h2><p className="section-intro">Source trusted diagnostics, medical devices and clinical supplies for your business. Ask us about availability and wholesale ordering.</p></Reveal>
    <div className="grid" style={{ marginTop: 44 }}>{items.map((p, i) => <Reveal key={p._id} delay={(i % 4) * .08}><ProductCard p={p} /></Reveal>)}</div>
    <div style={{ marginTop: 44 }}><Magnetic><Link href="/products" className="btn fill">View full catalogue →</Link></Magnetic></div></div></section>);
}

export function Why({ catalogCount }) {
  const F = [
    [ic(<><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>), 'Genuine, branded stock', 'Omron, Accu-Chek, Dr Morepen and other trusted names — sourced properly, supplied with confidence.'],
    [ic(<><path d="M3 12h4l3-8 4 16 3-8h4" /></>), 'Fast, personal quotes', 'Send your list and quantities. A real person confirms availability, pack sizes and wholesale terms.'],
    [ic(<><path d="M2 6h11v10H2zM13 9h5l4 4v3h-9" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>), 'Pan-India logistics', 'From one-off clinic restocks to recurring institutional supply, delivered wherever you operate.'],
  ];
  return (<section className="why"><div className="orb o1" /><div className="orb o2" /><div className="wrap">
    <Reveal><div className="sec-head"><span className="eyebrow">Why Tulsyan</span><h2 className="h2">A supply partner you can <span className="grad">depend on</span></h2><p className="section-intro">Three and a half decades of serving hospitals, clinics, pharmacies and distributors.</p></div></Reveal>
    <div className="stats">{[[<Counter to={35} suffix="+" />, 'Years of trust'], [<Counter to={catalogCount} />, 'Listed products'], [<Counter to={10} suffix="+" />, 'Top brands'], ['PAN', 'India delivery']].map(([n, l], i) => <Reveal key={l} delay={i * .08}><div className="stat"><b>{n}</b><span>{l}</span></div></Reveal>)}</div>
    <div className="feats">{F.map(([i, t, d], k) => <Reveal key={t} delay={k * .1}><div className="feat"><i>{i}</i><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></div></section>);
}

export function Process() {
  const r = useRef(null), { scrollYProgress: p } = useScroll({ target: r, offset: ['start 80%', 'end 60%'] }), sx = useTransform(p, [0, 1], [0, 1]);
  const S = [['Share your list', 'Send product names, quantities and your delivery location.'], ['Receive a quote', 'We confirm availability, pack details and wholesale pricing.'], ['Confirm the order', 'Approve the quote and we arrange dispatch and paperwork.'], ['Delivered & supported', 'Pan-India delivery with after-sales help when you need it.']];
  return (<section className="sec"><div className="wrap"><Reveal><div className="sec-head"><span className="eyebrow">How it works</span><h2 className="h2">From enquiry to <span className="grad">delivery</span> in four steps</h2></div></Reveal>
    <div className="steps" ref={r}><motion.div className="prog" style={{ scaleX: sx }} />{S.map(([t, d], i) => <Reveal key={t} delay={i * .1}><div className="step"><div className="n">{i + 1}</div><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div></div></section>);
}

export function Deals() {
  const D = [
    ['Hospitals & clinics', 'Bulk supply contracts', 'Plan recurring supply of monitors, nebulizers, gloves and daily clinical essentials.'],
    ['Pharmacies & retailers', 'Wholesale range', 'Restock trusted healthcare devices, diagnostics and consumer health essentials.'],
    ['Distributors', 'Partner with us', 'Build a dependable supply relationship across a broad range of healthcare products.'],
  ];
  return (<section className="deals"><div className="wrap"><Reveal><div className="sec-head"><span className="eyebrow">Who we serve</span><h2 className="h2">Tailored deals for <span className="grad">every buyer</span></h2></div></Reveal>
    <div className="dg">{D.map(([s, t, d], i) => <Reveal key={t} delay={i * .12}><motion.div className="dc" whileHover={{ y: -8 }}><div><small>{s}</small><h3>{t}</h3><p>{d}</p></div><span className="n">0{i + 1}</span></motion.div></Reveal>)}</div></div></section>);
}

export function CTA() {
  return (<section className="cta"><div className="wrap"><Reveal><div className="cta-box"><h2>Ready to stock up? Let’s talk supply.</h2><p>Share your item list and quantities — we’ll come back with availability, wholesale pricing and delivery details.</p>
    <div className="acts"><Magnetic><Link href="/contact" className="btn white">Request pricing →</Link></Magnetic><Magnetic><Link href="/products" className="btn ghost-w">Browse catalogue</Link></Magnetic></div></div></Reveal></div></section>);
}
