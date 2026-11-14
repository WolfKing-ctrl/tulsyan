'use client';
import { useEffect, useState } from 'react'; import { motion, AnimatePresence } from 'framer-motion'; import { CATS } from '@/lib/constants';
const E = { name: '', brand: '', category: 'diabetes', price: '', badge: '', description: '', featured: false, image: { url: '', publicId: '' } };
export default function Products() {
  const [list, setList] = useState([]), [f, setF] = useState(null), [busy, setBusy] = useState(false), [q, setQ] = useState('');
  const load = () => fetch('/api/products').then((r) => r.json()).then(setList);
  useEffect(() => { load(); }, []);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const upload = async (e) => {
    const file = e.target.files[0]; if (!file) return; setBusy(true);
    const d = new FormData(); d.append('file', file); const r = await fetch('/api/upload', { method: 'POST', body: d });
    if (r.ok) { const image = await r.json(); setF((x) => ({ ...x, image })); } else alert('Upload failed'); setBusy(false);
  };
  const save = async (e) => {
    e.preventDefault(); setBusy(true);
    const r = await fetch(f._id ? `/api/products/${f._id}` : '/api/products', { method: f._id ? 'PUT' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...f, price: +f.price }) });
    setBusy(false); if (r.ok) { setF(null); load(); } else alert('Save failed');
  };
  const del = async (p) => { if (confirm(`Delete "${p.name}"?`)) { await fetch(`/api/products/${p._id}`, { method: 'DELETE' }); load(); } };
  const rows = list.filter((p) => (p.name + p.brand).toLowerCase().includes(q.toLowerCase()));
  return (<>
    <div style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'center' }}><h2 style={{ marginRight: 'auto' }}>Products ({list.length})</h2>
      <input style={{ maxWidth: 240 }} placeholder="Search…" value={q} onChange={(e) => setQ(e.target.value)} /><button className="btn fill" onClick={() => setF(E)}>+ New product</button></div>
    <table><thead><tr><th></th><th>Name</th><th>Brand</th><th>Category</th><th>MRP</th><th>★</th><th></th></tr></thead><tbody>
      {rows.map((p) => <motion.tr key={p._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}><td>{p.image?.url && <img className="thumb" src={p.image.url} alt="" />}</td><td>{p.name}</td><td>{p.brand}</td><td>{p.category}</td><td>₹{p.price}</td><td>{p.featured ? '★' : ''}</td>
        <td style={{ whiteSpace: 'nowrap' }}><button className="btn sm" onClick={() => setF({ ...E, ...p })}>Edit</button><button className="btn sm" onClick={() => del(p)}>Delete</button></td></motion.tr>)}</tbody></table>
    <AnimatePresence>{f && <motion.div className="ov" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.form className="modal" onSubmit={save} initial={{ y: 40, scale: .96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 40 }}>
        <h3>{f._id ? 'Edit' : 'New'} product</h3>
        <input required placeholder="Name" value={f.name} onChange={set('name')} /><input placeholder="Brand" value={f.brand || ''} onChange={set('brand')} />
        <select value={f.category} onChange={set('category')}>{CATS.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select>
        <input type="number" placeholder="MRP (₹)" value={f.price || ''} onChange={set('price')} /><input placeholder="Badge (Best seller / New arrival)" value={f.badge || ''} onChange={set('badge')} />
        <textarea placeholder="Description" value={f.description || ''} onChange={set('description')} />
        <label><input type="checkbox" style={{ width: 'auto' }} checked={!!f.featured} onChange={set('featured')} /> Show on homepage</label>
        <input type="file" accept="image/*" onChange={upload} />{f.image?.url && <img className="thumb" style={{ width: 90, height: 90 }} src={f.image.url} alt="" />}
        <div><button className="btn fill sm" disabled={busy}>{busy ? 'Working…' : 'Save'}</button><button type="button" className="btn sm" onClick={() => setF(null)}>Cancel</button></div></motion.form></motion.div>}</AnimatePresence>
  </>);
}
