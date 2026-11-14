import mongoose from 'mongoose';
const S = new mongoose.Schema({ name: { type: String, required: true }, phone: { type: String, required: true }, email: String, message: String }, { timestamps: true });
export default mongoose.models.Enquiry || mongoose.model('Enquiry', S);
