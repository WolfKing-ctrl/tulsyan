'use client';
import { useRef } from 'react'; import Link from 'next/link'; import { motion, useScroll, useTransform } from 'framer-motion';
import { BRANDS } from '@/lib/constants'; import { Reveal, Counter, Tilt, Magnetic } from './fx'; import ProductCard from './ProductCard';
export function Marquee() { return <div className="marquee"><div className="track">{[...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => <span key={i} className="an">{b} ✺</span>)}</div></div>; }
export function Featured({ items }) {
  return (<section className="prod"><div className="wrap"><Reveal><span className="eyebrow">A catalogue built for care</span><h2 className="h2">Discover our<br />products</h2><p className="section-intro">Source trusted diagnostics, medical devices and day-to-day clinical supplies for your business. Ask us about availability and wholesale ordering.</p></Reveal>
    <div className="grid" style={{ marginTop: 40 }}>{items.map((p, i) => <Reveal key={p._id} delay={(i % 4) * .08}><ProductCard p={p} /></Reveal>)}</div>
    <div style={{ marginTop: 34 }}><Magnetic><Link href="/products" className="btn fill">View all</Link></Magnetic></div></div></section>);
}
export function Why({ catalogCount }) {
  const r = useRef(null), { scrollYProgress: p } = useScroll({ target: r, offset: ['start end', 'end start'] });
  const x1 = useTransform(p, [0, 1], ['8%', '-35%']), x2 = useTransform(p, [0, 1], ['-40%', '5%']);
  return (<section className="why" ref={r}>
    <motion.div className="ribbon r1" style={{ x: x1 }}>Wholesale · Bulk Orders · Hospitals · Clinics · Pharmacies ·</motion.div>
    <motion.div className="ribbon r2" style={{ x: x2 }}>Trusted · Genuine · Timely · Pan-India ·</motion.div>
    <div className="wrap"><Reveal><span className="eyebrow">A dependable supply partner</span><h2>Why Tulsyan will<br />win you over</h2></Reveal>
      <div className="whyc"><Reveal><div className="stats">
        <div><b><Counter to={35} /></b><span>Years of trust</span></div><div><b><Counter to={catalogCount} /></b><span>Listed products</span></div>
        <div><b><Counter to={10} suffix="+" /></b><span>Top brands</span></div><div><b>PAN</b><span>India delivery</span></div></div></Reveal>
        <Reveal delay={.15}><Tilt><div className="wnote"><h3>Top brands like Omron, Accu-Chek, Romsons &amp; more.</h3>
          <p>From glucose monitoring, blood-pressure devices and nebulizers to supports and clinical consumables, our catalogue covers practical everyday needs.</p>
          <p>Share your item list and quantities. We’ll confirm availability, wholesale terms and delivery arrangements with you directly.</p><Link href="/contact" className="btn">Talk to us ↗</Link></div></Tilt></Reveal></div></div></section>);
}
export function Deals() {
  const D = [
    ['Hospitals & clinics', 'Bulk supply contracts', 'Plan recurring supply of monitors, nebulizers, gloves and daily clinical essentials.'],
    ['Pharmacies & retailers', 'Wholesale range', 'Restock trusted healthcare devices, diagnostics and consumer health essentials.'],
    ['Distributors', 'Partner with us', 'Build a dependable supply relationship across a broad range of healthcare products.'],
  ];
  return (<section className="deals"><div className="wrap"><Reveal><h2 className="h2">Customised exclusive<br />deals await you</h2></Reveal>
    <div className="dg">{D.map(([s, t, d], i) => <div className="dgi" key={t}><Reveal delay={i * .12}><motion.div className="dc" whileHover={{ y: -8, rotate: i % 2 ? 1 : -1 }}><div><small>{s}</small><h3>{t}</h3>{d && <p>{d}</p>}</div><span className="n">0{i + 1}</span></motion.div></Reveal></div>)}</div>
    <div style={{ marginTop: 30 }}><Magnetic><Link href="/contact" className="btn" style={{ color: 'var(--dk)', borderColor: 'var(--dk)' }}>Request pricing</Link></Magnetic></div></div></section>);
}
