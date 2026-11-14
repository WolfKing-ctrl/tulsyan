import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
const key = () => new TextEncoder().encode(process.env.JWT_SECRET);
export const sign = () => new SignJWT({ role: 'admin' }).setProtectedHeader({ alg: 'HS256' }).setExpirationTime('7d').sign(key());
export async function isAdmin(token) {
  try { await jwtVerify(token ?? cookies().get('th_admin')?.value, key()); return true; } catch { return false; }
}
export const deny = () => Response.json({ error: 'Unauthorized' }, { status: 401 });
