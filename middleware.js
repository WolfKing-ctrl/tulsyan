import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/auth';
export async function middleware(req) {
  if (req.nextUrl.pathname === '/admin/login') return NextResponse.next();
  if (!(await isAdmin(req.cookies.get('th_admin')?.value || ''))) return NextResponse.redirect(new URL('/admin/login', req.url));
  return NextResponse.next();
}
export const config = { matcher: ['/admin/:path*'] };
