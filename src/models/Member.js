import mongoose from 'mongoose';

const MemberSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  address: String,
  dateOfBirth: String,
  nin: String,
  nepaBill: String,
  bvn: String,
  nextOfKin: String,
  profilePicture: String,
});

export default mongoose.models.Member || mongoose.model('Member', MemberSchema);