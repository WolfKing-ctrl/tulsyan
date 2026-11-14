import db from '@/lib/db'; import Product from '@/models/Product'; import { isAdmin, deny } from '@/lib/auth';
export async function GET(req) {
  await db(); const u = new URL(req.url); const f = {};
  if (u.searchParams.get('category')) f.category = u.searchParams.get('category');
  if (u.searchParams.get('q')) f.name = new RegExp(u.searchParams.get('q').replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  return Response.json(await Product.find(f).sort({ createdAt: -1 }).lean());
}
export async function POST(req) {
  if (!(await isAdmin())) return deny(); await db();
  const { _id, __v, ...b } = await req.json();
  return Response.json(await Product.create(b), { status: 201 });
}
