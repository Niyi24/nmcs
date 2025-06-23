import mongoose from 'mongoose';

const WithdrawalSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  description: { type: String }
});

export default mongoose.models.Withdrawal || mongoose.model('Withdrawal', WithdrawalSchema);