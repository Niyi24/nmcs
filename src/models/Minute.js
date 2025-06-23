import mongoose from 'mongoose';

const MinuteSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
  amount: Number,
  date: { type: Date, default: Date.now },
  description: String,
});

export default mongoose.models.Minute || mongoose.model('Minute', MinuteSchema);