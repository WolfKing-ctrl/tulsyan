import mongoose from 'mongoose';
const c = global._mongo || (global._mongo = { conn: null, p: null });
export default async function db() {
  if (c.conn) return c.conn;
  c.p ||= mongoose.connect(process.env.MONGODB_URI, { bufferCommands: false });
  return (c.conn = await c.p);
}
export const plain = (d) => JSON.parse(JSON.stringify(d));
