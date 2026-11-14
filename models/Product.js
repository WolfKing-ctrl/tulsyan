import mongoose from 'mongoose';
const S = new mongoose.Schema({
  name: { type: String, required: true, trim: true }, brand: String,
  category: { type: String, enum: ['diabetes', 'monitors', 'respiratory', 'supports', 'consumables'], required: true },
  price: Number, badge: String, description: String, featured: { type: Boolean, default: false },
  image: { url: { type: String, default: '' }, publicId: { type: String, default: '' } },
}, { timestamps: true });
export default mongoose.models.Product || mongoose.model('Product', S);
