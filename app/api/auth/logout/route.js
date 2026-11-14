import { cookies } from 'next/headers';
export async function POST(req) { cookies().delete('th_admin'); return Response.redirect(new URL('/admin/login', req.url), 303); }
