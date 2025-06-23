import dbConnect from '@/utils/dbConnect';
import Minute from '@/models/Minute';

export async function GET() {
  await dbConnect();
  const minutes = await Minute.find({});
  return new Response(JSON.stringify(minutes), { status: 200 });
}