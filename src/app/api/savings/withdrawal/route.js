import dbConnect from '@/utils/dbConnect';
import Withdrawal from '@/models/Withdrawal';

export async function POST(request) {
  const { memberId, amount, description } = await request.json();
  if (!memberId || !amount) {
    return new Response(JSON.stringify({ message: 'memberId and amount are required' }), { status: 400 });
  }
  await dbConnect();
  const withdrawal = await Withdrawal.create({ memberId, amount, description });
  return new Response(JSON.stringify(withdrawal), { status: 201 });
}