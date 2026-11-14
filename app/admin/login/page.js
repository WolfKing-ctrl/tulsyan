'use client';
import { useState } from 'react'; import { useRouter } from 'next/navigation'; import { motion } from 'framer-motion';
export default function Login() {
  const [u, setU] = useState(''), [p, setP] = useState(''), [e, setE] = useState(''), r = useRouter();
  const go = async (ev) => { ev.preventDefault(); const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ user: u, pass: p }) }); if (res.ok) { r.push('/admin'); r.refresh(); } else setE('Invalid credentials'); };
  return (<div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}><motion.form className="f modal" onSubmit={go} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
    <h2>Admin login</h2><input placeholder="Username" value={u} onChange={(x) => setU(x.target.value)} /><input type="password" placeholder="Password" value={p} onChange={(x) => setP(x.target.value)} />
    {e && <small>{e}</small>}<button className="btn fill">Sign in</button></motion.form></div>);
}
