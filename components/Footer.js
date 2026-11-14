import { INFO } from '@/lib/constants';
export default function Footer() {
  return (<footer className="ft"><div className="wrap"><h2 className="big">Your Health.<br />Our Priority.</h2><img className="footer-logo" src="/images/tulsyan-transparent-logo.png" alt="Tulsyan Healthcare — trust and care" />
    <div><span>{INFO.phone} · {INFO.phone2}</span><span>{INFO.email}</span><span>{INFO.web}</span></div>
    <div style={{ marginTop: 14 }}><span>© Tulsyan Healthcare Pvt Ltd · Gorakhpur, Uttar Pradesh</span><a href="/admin">Admin</a></div></div></footer>);
}
