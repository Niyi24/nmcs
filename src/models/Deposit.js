import mongoose from 'mongoose';

const DepositSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'completed' },
  description: { type: String }
});

export default mongoose.models.Deposit || mongoose.model('Deposit', DepositSchema);