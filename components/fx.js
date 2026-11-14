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
  const x = useMotionValue(-100), y = useMotionValue(-100), cfg = { stiffness: 500, damping: 35 }, sx = useSpring(x, cfg), sy = useSpring(y, cfg), [h, setH] = useState(false);
  useEffect(() => { const m = (e) => { x.set(e.clientX); y.set(e.clientY); setH(!!e.target.closest?.('a,button,input,textarea,select')); }; window.addEventListener('mousemove', m); return () => window.removeEventListener('mousemove', m); }, []);
  return <motion.div className="cursor" style={{ x: sx, y: sy }} animate={{ scale: h ? 2.6 : 1 }} />;
}
export function ScrollBar() { const { scrollYProgress } = useScroll(); return <motion.div className="bar" style={{ scaleX: scrollYProgress }} />; }
export { useScroll, useTransform };
