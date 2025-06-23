import dbConnect from '@/utils/dbConnect';
import Loan from '@/models/Loan';

export async function GET(request, { params }) {
  await dbConnect();
  const { id } = params;
  const loan = await Loan.findById(id);
  if (!loan) {
    return new Response(JSON.stringify({ message: 'Loan not found' }), { status: 404 });
  }
  return new Response(JSON.stringify(loan), { status: 200 });
}