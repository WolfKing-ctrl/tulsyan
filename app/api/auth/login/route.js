import { cookies } from 'next/headers'; import { sign } from '@/lib/auth';
export async function POST(req) {
  const { user, pass } = await req.json();
  if (user === process.env.ADMIN_USER && pass === process.env.ADMIN_PASS) {
    cookies().set('th_admin', await sign(), { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 604800 });
    return Response.json({ ok: 1 });
  }
  return Response.json({ error: 'Invalid credentials' }, { status: 401 });
}
