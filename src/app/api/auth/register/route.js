import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';

export async function POST(request) {
  const { email, password, role } = await request.json();
  if (!email || !password) {
    return new Response(JSON.stringify({ message: 'Email and password are required' }), { status: 400 });
  }
  await dbConnect();
  const exists = await User.findOne({ email });
  if (exists) {
    return new Response(JSON.stringify({ message: 'User already exists' }), { status: 409 });
  }
  const user = await User.create({ email, password, role });
  return new Response(JSON.stringify({ id: user._id, email: user.email, role: user.role }), { status: 201 });
}