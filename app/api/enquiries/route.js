import db from '@/lib/db'; import Enquiry from '@/models/Enquiry'; import { isAdmin, deny } from '@/lib/auth';
export async function POST(req) {
  const { name, phone, email, message } = await req.json();
  if (!name || !phone) return Response.json({ error: 'Name and phone required' }, { status: 400 });
  await db(); await Enquiry.create({ name, phone, email, message });
  return Response.json({ ok: 1 }, { status: 201 });
}
export async function GET() {
  if (!(await isAdmin())) return deny(); await db();
  return Response.json(await Enquiry.find().sort({ createdAt: -1 }).lean());
}
