import dbConnect from '../../../../utils/dbConnect.js';
import Member from '../../../../models/Member.js';

export async function GET(req, { params }) {
  await dbConnect();
  const { id } = params;

  try {
    const member = await Member.findById(id).lean();
    if (!member) {
      return new Response(JSON.stringify({ error: 'Member not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(member), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}