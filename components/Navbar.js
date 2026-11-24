'use client';
import Link from 'next/link'; import { usePathname } from 'next/navigation'; import { useEffect, useState } from 'react'; import { motion, AnimatePresence } from 'framer-motion';
import { INFO } from '@/lib/constants';
const L = [['/products', 'Products'], ['/about', 'About'], ['/contact', 'Contact']];
export default function Navbar() {
  const p = usePathname(), [o, setO] = useState(false), [stuck, setStuck] = useState(false);
  useEffect(() => { const f = () => setStuck(window.scrollY > 10); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f); }, []);
  return (<>
    <div className="topbar"><div className="wrap"><span><i className="dot" />Now supplying hospitals, clinics, pharmacies &amp; distributors pan-India</span>
      <span className="hide-s"><a href={`tel:${INFO.phone}`}>{INFO.phone}</a> · <a href={`mailto:${INFO.email}`}>{INFO.email}</a></span></div></div>
    <div className={'navwrap' + (stuck ? ' stuck' : '')}>
      <nav className="nav"><Link href="/" className="logo" aria-label="Tulsyan Healthcare home"><img src="/images/tulsyan-transparent-logo.png" alt="Tulsyan Healthcare — trust and care" /></Link>
        <div className="links">{L.map(([h, t]) => <Link key={h} href={h} className={'l' + (p.startsWith(h) ? ' on' : '')}>{t}{p.startsWith(h) && <motion.i layoutId="ul" className="ul" />}</Link>)}</div>
        <Link href="/contact" className="btn fill">Request a quote →</Link><button className="burger" onClick={() => setO(!o)} aria-label="Menu">{o ? '✕' : '☰'}</button></nav>
    </div>
    <AnimatePresence>{o && <motion.div className="mobile" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 26 }}>
      <button className="burger" style={{ position: 'absolute', top: 18, right: 20, display: 'block', color: '#fff', background: 'rgba(255,255,255,.1)', borderColor: 'rgba(255,255,255,.2)' }} onClick={() => setO(false)} aria-label="Close menu">✕</button>
      {[['/', 'Home'], ...L].map(([h, t]) => <Link key={h} href={h} className="an" onClick={() => setO(false)}>{t}</Link>)}</motion.div>}</AnimatePresence>
  </>);
}
