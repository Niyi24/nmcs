import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  const { email, password } = await request.json();
  if (!email || !password) {
    return new Response(JSON.stringify({ message: 'Email and password are required' }), { status: 400 });
  }
  await dbConnect();
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return new Response(JSON.stringify({ token }), { status: 200 });
}