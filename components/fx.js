'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
export function Reveal({ children, delay = 0, y = 40 }) {
  return <motion.div initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: .7, delay, ease: [.2, .7, .2, 1] }} style={{ height: '100%' }}>{children}</motion.div>;
}
export function Split({ text, delay = 0 }) {
  return <span aria-label={text} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>{[...text].map((c, i) => <motion.span key={i} style={{ display: 'inline-block' }} initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: delay + i * .04, duration: .6, ease: [.2, .7, .2, 1] }}>{c}</motion.span>)}</span>;
}
export function Counter({ to, suffix = '' }) {
  const r = useRef(null), v = useInView(r, { once: true }), [n, setN] = useState(0);
  useEffect(() => { if (!v) return; const c = animate(0, to, { duration: 1.8, ease: 'easeOut', onUpdate: (x) => setN(Math.round(x)) }); return () => c.stop(); }, [v, to]);
  return <span ref={r}>{n}{suffix}</span>;
}
export function Tilt({ children }) {
  const x = useMotionValue(0), y = useMotionValue(0), cfg = { stiffness: 200, damping: 20 };
  const rx = useSpring(useTransform(y, [-.5, .5], [8, -8]), cfg), ry = useSpring(useTransform(x, [-.5, .5], [-8, 8]), cfg);
  return <motion.div style={{ rotateX: rx, rotateY: ry, transformPerspective: 800, height: '100%' }} whileHover={{ scale: 1.02 }}
    onMouseMove={(e) => { const b = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - b.left) / b.width - .5); y.set((e.clientY - b.top) / b.height - .5); }}
    onMouseLeave={() => { x.set(0); y.set(0); }}>{children}</motion.div>;
}
export function Magnetic({ children }) {
  const x = useMotionValue(0), y = useMotionValue(0), cfg = { stiffness: 200, damping: 15 }, sx = useSpring(x, cfg), sy = useSpring(y, cfg);
  return <motion.div style={{ x: sx, y: sy, display: 'inline-block' }}
    onMouseMove={(e) => { const b = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - b.left - b.width / 2) * .35); y.set((e.clientY - b.top - b.height / 2) * .35); }}
    onMouseLeave={() => { x.set(0); y.set(0); }}>{children}</motion.div>;
}
export function Cursor() {
  const x = useMotionValue(-200), y = useMotionValue(-200), cfg = { stiffness: 700, damping: 42, mass: .35 }, sx = useSpring(x, cfg), sy = useSpring(y, cfg);
  const [h, setH] = useState(false), [typing, setTyping] = useState(false), [down, setDown] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia('(pointer:fine)').matches) return;
    const root = document.documentElement;
    const move = (e) => { root.classList.add('tcur'); x.set(e.clientX); y.set(e.clientY); setH(!!e.target.closest?.('a,button,[role=button],summary,label')); setTyping(!!e.target.closest?.('input,textarea,select')); };
    const dn = () => setDown(true), up = () => setDown(false), leave = () => { x.set(-200); y.set(-200); };
    window.addEventListener('mousemove', move); window.addEventListener('mousedown', dn); window.addEventListener('mouseup', up); document.addEventListener('mouseleave', leave);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mousedown', dn); window.removeEventListener('mouseup', up); document.removeEventListener('mouseleave', leave); root.classList.remove('tcur'); };
  }, []);
  return (<motion.div className="cursor" aria-hidden="true" style={{ x: sx, y: sy, opacity: typing ? 0 : 1 }}>
    <motion.div className="therm" animate={{ rotate: down ? -30 : -38, scale: down ? .88 : h ? 1.2 : 1 }} transition={{ type: 'spring', stiffness: 400, damping: 22 }}>
      <svg viewBox="0 0 90 26" width="90" height="26">
        <path d="M2 13 L16 8 L16 18 Z" fill="#8a97b5" stroke="#0a1a3a" strokeWidth="1.2" strokeLinejoin="round" />
        <rect x="15" y="6" width="72" height="14" rx="7" fill="#fff" stroke="#0a1a3a" strokeWidth="1.4" />
        <rect x="29" y="9" width="26" height="8" rx="2" fill={h ? '#bcd3ff' : '#e3eeff'} stroke="#1558e8" strokeWidth=".8" />
        <text x="42" y="15.4" textAnchor="middle" fontSize="6.6" fontWeight="700" fill="#0a1a3a" fontFamily="ui-monospace,monospace">{h ? '39.2' : '36.6'}</text>
        <circle cx="69" cy="13" r="3.2" fill="#1558e8" />
      </svg>
    </motion.div>
  </motion.div>);
}
export function ScrollBar() { const { scrollYProgress } = useScroll(); return <motion.div className="bar" style={{ scaleX: scrollYProgress }} />; }
export { useScroll, useTransform };
