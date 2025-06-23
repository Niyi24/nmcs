import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
  amount: Number,
  status: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Loan || mongoose.model('Loan', LoanSchema);