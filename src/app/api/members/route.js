import dbConnect from '@/utils/dbConnect';
import Member from '@/models/Member';

export async function GET() {
  await dbConnect();
  const members = await Member.find({});
  return new Response(JSON.stringify(members), { status: 200 });
}