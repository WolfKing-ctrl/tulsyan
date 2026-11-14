import cloudinary from '@/lib/cloudinary'; import { isAdmin, deny } from '@/lib/auth';
export async function POST(req) {
  if (!(await isAdmin())) return deny();
  const file = (await req.formData()).get('file');
  if (!file) return Response.json({ error: 'No file' }, { status: 400 });
  const buf = Buffer.from(await file.arrayBuffer());
  const r = await new Promise((ok, no) => cloudinary.uploader.upload_stream({ folder: 'tulsyan', transformation: [{ width: 900, crop: 'limit', quality: 'auto' }] }, (e, x) => (e ? no(e) : ok(x))).end(buf));
  return Response.json({ url: r.secure_url, publicId: r.public_id });
}
