import db from '@/lib/db'; import Product from '@/models/Product'; import cloudinary from '@/lib/cloudinary'; import { isAdmin, deny } from '@/lib/auth';
export async function PUT(req, { params }) {
  if (!(await isAdmin())) return deny(); await db();
  const { _id, __v, createdAt, updatedAt, ...b } = await req.json();
  const old = await Product.findById(params.id);
  if (old?.image?.publicId && old.image.publicId !== b.image?.publicId) await cloudinary.uploader.destroy(old.image.publicId);
  return Response.json(await Product.findByIdAndUpdate(params.id, b, { new: true, runValidators: true }));
}
export async function DELETE(_, { params }) {
  if (!(await isAdmin())) return deny(); await db();
  const p = await Product.findByIdAndDelete(params.id);
  if (p?.image?.publicId) await cloudinary.uploader.destroy(p.image.publicId);
  return Response.json({ ok: 1 });
}
