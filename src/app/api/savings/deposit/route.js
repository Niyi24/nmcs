import dbConnect from '@/utils/dbConnect';
import Deposit from '@/models/Deposit';

export async function POST(request) {
  const { memberId, amount, description } = await request.json();
  if (!memberId || !amount) {
    return new Response(JSON.stringify({ message: 'memberId and amount are required' }), { status: 400 });
  }
  await dbConnect();
  const deposit = await Deposit.create({ memberId, amount, description });
  return new Response(JSON.stringify(deposit), { status: 201 });
}