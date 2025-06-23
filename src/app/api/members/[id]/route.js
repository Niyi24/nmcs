import dbConnect from '@/utils/dbConnect';
import Member from '@/models/Member';

export async function GET(request, { params }) {
  await dbConnect();
  const { id } = params;
  const member = await Member.findById(id);
  if (!member) {
    return new Response(JSON.stringify({ message: 'Member not found' }), { status: 404 });
  }
  return new Response(JSON.stringify(member), { status: 200 });
}