import dbConnect from '../../../utils/dbConnect';
import Member from '../../../models/Member';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const members = await Member.find({});
      res.status(200).json({ success: true, data: members });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}