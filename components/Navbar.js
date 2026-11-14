'use client';
import Link from 'next/link'; import { usePathname } from 'next/navigation'; import { useState } from 'react'; import { motion, AnimatePresence } from 'framer-motion';
const L = [['/products', 'Products'], ['/about', 'About'], ['/contact', 'Contact']];
export default function Navbar() {
  const p = usePathname(), [o, setO] = useState(false);
  return (<>
    <nav className="nav"><Link href="/" className="logo" aria-label="Tulsyan Healthcare home"><img src="/images/tulsyan-transparent-logo.png" alt="Tulsyan Healthcare — trust and care" /></Link>
      <div className="links">{L.map(([h, t]) => <Link key={h} href={h} className="l">{t}{p.startsWith(h) && <motion.i layoutId="ul" className="ul" />}</Link>)}</div>
      <Link href="/contact" className="btn">Get Quote</Link><button className="burger" onClick={() => setO(!o)} aria-label="Menu">{o ? '✕' : '☰'}</button></nav>
    <AnimatePresence>{o && <motion.div className="mobile" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 26 }}>
      {[['/', 'Home'], ...L].map(([h, t]) => <Link key={h} href={h} className="an" onClick={() => setO(false)}>{t}</Link>)}</motion.div>}</AnimatePresence>
  </>);
}
