import dbConnect from '@/utils/dbConnect';
import Loan from '@/models/Loan';

export async function GET() {
  await dbConnect();
  const loans = await Loan.find({});
  return new Response(JSON.stringify(loans), { status: 200 });
}