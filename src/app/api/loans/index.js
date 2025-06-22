import dbConnect from '../../../utils/dbConnect';
import Loan from '../../../models/Loan';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const loans = await Loan.find({});
      res.status(200).json(loans);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching loans', error });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}