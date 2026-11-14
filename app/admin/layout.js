import Link from 'next/link';
export const metadata = { title: 'Admin — Tulsyan Healthcare' };
export default function Admin({ children }) {
  return (<div className="adm"><aside className="side"><b className="an" style={{ fontSize: 22 }}>TH Admin</b>
    <Link href="/admin">Products</Link><Link href="/admin/enquiries">Enquiries</Link><Link href="/">View site ↗</Link>
    <form action="/api/auth/logout" method="post"><button className="btn" style={{ color: 'var(--dk)', borderColor: 'var(--dk)' }}>Logout</button></form></aside><div className="amain">{children}</div></div>);
}
