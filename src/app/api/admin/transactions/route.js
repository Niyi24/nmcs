import dbConnect from '@/utils/dbConnect';
import Transaction from '@/models/Transaction';

export async function GET() {
  await dbConnect();
  const transactions = await Transaction.find({});
  return new Response(JSON.stringify(transactions), { status: 200 });
}