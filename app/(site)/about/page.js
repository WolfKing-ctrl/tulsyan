import { Reveal, Counter } from '@/components/fx';
import Link from 'next/link';
import { CATS, BRANDS, INFO } from '@/lib/constants';
import { CATALOG } from '@/lib/catalog';
export const metadata = { title: 'About — Tulsyan Healthcare' };
export default function About() {
  return (<section className="wrap page"><Reveal><h1>About<br />Tulsyan</h1></Reveal>
    <div className="eq about-intro"><Reveal><p className="lead">Tulsyan Healthcare Pvt Ltd is a Gorakhpur-based wholesale partner for the people and businesses that keep healthcare moving.</p>
      <p>For more than 35 years, we have helped healthcare professionals source dependable medical devices, diagnostics, respiratory care products, supports and everyday consumables. We work with clinics, hospitals, pharmacies, retailers and distributors, with bulk orders and pan-India supply support.</p>
      <p>Our catalogue brings together established names including {BRANDS.slice(0, 6).join(', ')} and more. We focus on genuine products, responsive service and practical support from enquiry to dispatch.</p></Reveal>
      <Reveal delay={.15}><div className="stats"><div><b><Counter to={35} /></b><span>Years of trust</span></div><div><b><Counter to={CATALOG.length} /></b><span>Listed products</span></div><div><b><Counter to={10} suffix="+" /></b><span>Brands</span></div><div><b>PAN</b><span>India supply</span></div></div></Reveal></div>
    <section className="about-block"><Reveal><h2>One wholesale partner.<br />Everyday healthcare essentials.</h2><p>We bring a broad and practical range together so business buyers can enquire across categories with one team.</p></Reveal>
      <div className="about-categories">{CATS.map((category) => <Link key={category.id} href={`/products?category=${category.id}`}><span>{category.name}</span><small>{category.sub}</small><b aria-hidden="true">↗</b></Link>)}</div></section>
    <section className="about-block about-supply"><Reveal><h2>Made for business buying.</h2><p>From a single clinic restock to recurring institutional requirements, share your product list and quantities. We’ll confirm availability, pack details, delivery options and a quote for your enquiry.</p></Reveal>
      <div className="supply-steps"><div><b>01</b><h3>Share your requirements</h3><p>Tell us the product names, quantities and delivery location.</p></div><div><b>02</b><h3>Get a tailored quote</h3><p>Our team follows up to discuss availability and wholesale terms.</p></div><div><b>03</b><h3>Coordinate supply</h3><p>We work with you on order confirmation and delivery arrangements.</p></div></div>
      <Link href="/contact" className="btn fill">Speak with our team ↗</Link></section>
    <p className="about-address"><b>Based in Gorakhpur, Uttar Pradesh</b><br />{INFO.addr}</p>
  </section>);
}
