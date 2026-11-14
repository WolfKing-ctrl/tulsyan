'use client';
import { useEffect, useState } from 'react'; import { motion, AnimatePresence } from 'framer-motion';
export default function Enquiries() {
  const [l, setL] = useState([]); const load = () => fetch('/api/enquiries').then((r) => r.json()).then(setL); useEffect(() => { load(); }, []);
  const del = async (id) => { await fetch(`/api/enquiries/${id}`, { method: 'DELETE' }); load(); };
  return (<><h2 style={{ marginBottom: 20 }}>Enquiries ({l.length})</h2><AnimatePresence>{l.map((e) => (
    <motion.div key={e._id} layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} style={{ background: 'var(--card)', padding: 16, marginBottom: 10 }}>
      <b>{e.name}</b> · <a href={`tel:${e.phone}`}>{e.phone}</a> {e.email && <>· {e.email}</>} <small style={{ opacity: .6 }}>{new Date(e.createdAt).toLocaleString('en-IN')}</small>
      <p style={{ whiteSpace: 'pre-wrap', margin: '8px 0' }}>{e.message}</p><button className="btn sm" onClick={() => del(e._id)}>Delete</button></motion.div>))}</AnimatePresence></>);
}
