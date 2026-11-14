import './globals.css';
import { Anton, Manrope } from 'next/font/google';
import { Cursor, ScrollBar } from '@/components/fx';
const an = Anton({ weight: '400', subsets: ['latin'], variable: '--an' });
const mn = Manrope({ subsets: ['latin'], variable: '--mn' });
export const metadata = { title: 'Tulsyan Healthcare — Wholesale Medical & Wellness Devices', description: 'Gorakhpur-based distributor of Omron, Accu-Chek, Dr Morepen, T-Care and more. Bulk orders across India.' };
export default function Root({ children }) {
  return (<html lang="en"><body className={`${an.variable} ${mn.variable}`}><ScrollBar /><Cursor />{children}</body></html>);
}
