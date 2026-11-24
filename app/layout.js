import './globals.css';
import { Sora, Inter, IBM_Plex_Mono } from 'next/font/google';
import { Cursor, ScrollBar } from '@/components/fx';
const an = Sora({ subsets: ['latin'], weight: ['500', '600', '700', '800'], variable: '--an' });
const mn = Inter({ subsets: ['latin'], variable: '--mn' });
const mono = IBM_Plex_Mono({ weight: ['400', '500', '600'], subsets: ['latin'], variable: '--mono' });
export const metadata = { title: 'Tulsyan Healthcare — Wholesale Medical & Wellness Devices', description: 'Gorakhpur-based distributor of Omron, Accu-Chek, Dr Morepen, T-Care and more. Bulk orders across India.' };
export default function Root({ children }) {
  return (<html lang="en"><body className={`${an.variable} ${mn.variable} ${mono.variable}`}><ScrollBar /><Cursor />{children}</body></html>);
}
