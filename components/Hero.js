'use client';
import { useState } from 'react'; import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { CATS } from '@/lib/constants'; import { Split, Magnetic } from './fx';
import { getCategoryProductImage } from '@/lib/product-images';
import Icon from './Icon';

export default function Hero() {
  const [a, setA] = useState(0), { scrollY } = useScroll(), y = useTransform(scrollY, [0, 600], [0, -140]);
  return (<header className="hero">
    <div className="hl"><motion.div className="blob" style={{ y }} animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 6 }} />
      <h1><Split text="Healthcare" /><br /><Split text="Essentials" delay={.4} /></h1>
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>Your one-stop wholesale source for trusted medical devices, diagnostics and supplies across India.</motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}><Magnetic><Link className="btn fill" href="/products">Browse catalogue</Link></Magnetic></motion.div></div>
    <div className="strips">{CATS.map((c, i) => (
      <motion.div key={c.id} className={'strip' + (a === i ? ' on' : '')} onMouseEnter={() => setA(i)} onClick={() => setA(i)} animate={{ flexGrow: a === i ? 1 : 0 }} transition={{ type: 'spring', stiffness: 110, damping: 20 }}>
        <span className="an" style={{ fontSize: 15 }}>0{i + 1}</span>
        {a === i ? <AnimatePresence><motion.div className="sin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 3.5 }} style={{ margin: 'auto' }}>{getCategoryProductImage(c.id) ? <img className="category-photo" src={getCategoryProductImage(c.id).src} alt={getCategoryProductImage(c.id).alt} /> : <div className="category-photo-placeholder"><Icon c={c.id} /></div>}</motion.div>
          <div><b>{c.name}</b><small>{c.sub}</small><Link href={`/products?category=${c.id}`} className="btn" style={{ color: 'var(--dk)', borderColor: 'var(--dk)' }}>Explore ↗</Link></div></motion.div></AnimatePresence>
          : <span className="v">{c.name}</span>}
      </motion.div>))}</div>
  </header>);
}
