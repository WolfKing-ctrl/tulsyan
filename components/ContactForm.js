'use client';
import { useState } from 'react'; import { motion, AnimatePresence } from 'framer-motion';
export default function ContactForm({ item }) {
  const [f, setF] = useState({ name: '', phone: '', email: '', message: item ? `Enquiry about: ${item}\nQuantity: ` : '' }), [s, setS] = useState('idle');
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = async (e) => { e.preventDefault(); setS('busy'); const r = await fetch('/api/enquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) }); setS(r.ok ? 'done' : 'err'); };
  return (<AnimatePresence mode="wait">{s === 'done'
    ? <motion.div key="ok" initial={{ scale: .8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ textAlign: 'center', padding: 40 }}><motion.div initial={{ rotate: -90 }} animate={{ rotate: 0 }} className="an" style={{ fontSize: 90, color: 'var(--acc)' }}>✓</motion.div><h3>Enquiry received</h3><p>We’ll call you back shortly.</p></motion.div>
    : <motion.form key="f" className="f" onSubmit={submit} exit={{ opacity: 0 }}>
      <input placeholder="Name / organisation" required value={f.name} onChange={set('name')} /><input placeholder="Phone" required value={f.phone} onChange={set('phone')} />
      <input type="email" placeholder="Email" value={f.email} onChange={set('email')} /><textarea placeholder="Items and quantities" value={f.message} onChange={set('message')} />
      <button className="btn fill" disabled={s === 'busy'}>{s === 'busy' ? 'Sending…' : 'Send enquiry'}</button>{s === 'err' && <small>Something went wrong, please call us.</small>}</motion.form>}</AnimatePresence>);
}
