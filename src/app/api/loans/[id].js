import dbConnect from '../../../utils/dbConnect';
import Loan from '../../../models/Loan';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const loan = await Loan.findById(id);
        if (!loan) {
          return res.status(404).json({ message: 'Loan not found' });
        }
        res.status(200).json(loan);
      } catch (error) {
        res.status(500).json({ message: 'Server error', error });
      }
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}