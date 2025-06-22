import dbConnect from '../../../utils/dbConnect';
import Transaction from '../../../models/Transaction';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const transactions = await Transaction.find({ status: 'pending' });
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving transactions', error });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}