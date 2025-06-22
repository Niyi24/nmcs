import dbConnect from '../../../utils/dbConnect';
import Minute from '../../../models/Minute';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const minutes = await Minute.find({});
      res.status(200).json(minutes);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching minutes', error });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}