import Link from 'next/link'; import { INFO, CATS } from '@/lib/constants';
export default function Footer() {
  return (<footer className="ft"><div className="wrap">
    <div className="ft-grid">
      <div className="ft-brand"><img src="/images/tulsyan-transparent-logo.png" alt="Tulsyan Healthcare — trust and care" />
        <p>Wholesale medical devices, diagnostics and clinical supplies from trusted brands — supplied to healthcare businesses across India.</p></div>
      <div><h4>Catalogue</h4><ul>{CATS.map((c) => <li key={c.id}><Link href={`/products?category=${c.id}`}>{c.name}</Link></li>)}</ul></div>
      <div><h4>Company</h4><ul><li><Link href="/about">About us</Link></li><li><Link href="/products">All products</Link></li><li><Link href="/contact">Request a quote</Link></li><li><a href="/admin">Admin</a></li></ul></div>
      <div><h4>Get in touch</h4><ul><li><a href={`tel:${INFO.phone}`}>{INFO.phone}</a> / <a href={`tel:${INFO.phone2}`}>{INFO.phone2}</a></li><li><a href={`mailto:${INFO.email}`}>{INFO.email}</a></li><li>{INFO.web}</li><li>{INFO.addr}</li></ul></div>
    </div></div>
    <div className="ft-giant" aria-hidden="true">TULSYAN</div>
    <div className="ft-bot"><div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, width: '100%' }}><span>© {new Date().getFullYear()} Tulsyan Healthcare Pvt Ltd · Gorakhpur, UP</span><span>Your health. Our priority.</span></div></div></footer>);
}
