import db from '@/lib/db'; import Enquiry from '@/models/Enquiry'; import { isAdmin, deny } from '@/lib/auth';
export async function DELETE(_, { params }) {
  if (!(await isAdmin())) return deny(); await db(); await Enquiry.findByIdAndDelete(params.id);
  return Response.json({ ok: 1 });
}
