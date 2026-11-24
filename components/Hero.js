'use client';
import { useEffect, useState } from 'react'; import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { CATS } from '@/lib/constants'; import { Magnetic } from './fx';
import { getCategoryProductImage } from '@/lib/product-images';
import Icon from './Icon';

const I = {
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg>,
  truck: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6h11v10H2zM13 9h5l4 4v3h-9" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>,
  box: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5z" /><path d="M3 8l9 5 9-5M12 13v8" /></svg>,
  pulse: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4" /></svg>,
};
const line = (i) => ({ initial: { y: '110%' }, animate: { y: 0 }, transition: { delay: .1 + i * .13, duration: .8, ease: [.2, .7, .2, 1] } });

export default function Hero() {
  const [a, setA] = useState(0), { scrollY } = useScroll(), y1 = useTransform(scrollY, [0, 600], [0, -80]), y2 = useTransform(scrollY, [0, 600], [0, 60]);
  useEffect(() => { const t = setTimeout(() => setA((v) => (v + 1) % CATS.length), 4200); return () => clearTimeout(t); }, [a]);
  const c = CATS[a], img = getCategoryProductImage(c.id);
  return (<header className="hero">
    <div className="hero-bg"><motion.div className="orb o1" style={{ y: y1 }} animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 9 }} /><motion.div className="orb o2" style={{ y: y2 }} animate={{ x: [0, 40, 0] }} transition={{ repeat: Infinity, duration: 11 }} /><div className="orb o3" /></div>
    <div className="wrap">
      <div>
        <motion.span className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>35+ years · Wholesale &amp; B2B supply</motion.span>
        <h1><span className="ln"><motion.span style={{ display: 'block' }} {...line(0)}>Medical supply,</motion.span></span>
          <span className="ln"><motion.span style={{ display: 'block' }} {...line(1)}>built for <span className="grad">healthcare</span></motion.span></span>
          <span className="ln"><motion.span style={{ display: 'block' }} {...line(2)}>businesses.</motion.span></span></h1>
        <motion.p className="lead" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 }}>Genuine devices, diagnostics and clinical consumables from Omron, Accu-Chek, Dr Morepen and more — quoted in bulk, delivered across India.</motion.p>
        <motion.div className="hero-cta" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .85 }}>
          <Magnetic><Link className="btn fill" href="/contact">Request a B2B quote →</Link></Magnetic>
          <Magnetic><Link className="btn" href="/products">Browse catalogue</Link></Magnetic></motion.div>
        <motion.div className="trust" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
          <div><i>{I.shield}</i>Genuine stock</div><div><i>{I.truck}</i>Pan-India dispatch</div><div><i>{I.box}</i>Bulk orders</div></motion.div>
      </div>
      <motion.div className="stage" initial={{ opacity: 0, scale: .94, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: .3, duration: .9, ease: [.2, .7, .2, 1] }}>
        <motion.div className="float f1" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 5 }}><i>{I.shield}</i><div><b>100% genuine</b><small>Authorised brands</small></div></motion.div>
        <motion.div className="float f2" animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 6, delay: .5 }}><i>{I.pulse}</i><div><b>Bulk quotes</b><small>Personal response</small></div></motion.div>
        <motion.div className="float f3" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5.5, delay: 1 }}><i>{I.truck}</i><div><b>Pan-India</b><small>Reliable delivery</small></div></motion.div>
        <div className="stage-card"><span className="ring r1" /><span className="ring r2" />
          <AnimatePresence mode="wait"><motion.div key={c.id} style={{ mixBlendMode: 'multiply' }} initial={{ opacity: 0, scale: .85, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 1.08, rotate: 3 }} transition={{ duration: .45 }}>
            <motion.div animate={{ y: [0, -14, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}>
              {img ? <img className="stage-img" src={img.src} alt={img.alt} /> : <div className="stage-ph"><Icon c={c.id} /></div>}</motion.div></motion.div></AnimatePresence>
          <div className="stage-label"><div><AnimatePresence mode="wait"><motion.div key={c.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><b>{c.name}</b><small>{c.sub}</small></motion.div></AnimatePresence></div>
            <Link href={`/products?category=${c.id}`} aria-label={`Explore ${c.name}`}>→</Link></div></div>
        <div className="chips">{CATS.map((x, i) => <button key={x.id} className={'chip' + (a === i ? ' on' : '')} onClick={() => setA(i)}><span>{x.name}</span></button>)}</div>
      </motion.div>
    </div></header>);
}
