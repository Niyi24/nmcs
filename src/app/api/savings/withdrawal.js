import dbConnect from '../../../utils/dbConnect';
import Withdrawal from '../../../models/Withdrawal';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { amount, userId, accountId } = req.body;

    if (!amount || !userId || !accountId) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      const withdrawal = new Withdrawal({
        amount,
        userId,
        accountId,
        date: new Date(),
        status: 'pending',
      });

      await withdrawal.save();
      return res.status(201).json({ message: 'Withdrawal request submitted', withdrawal });
    } catch (error) {
      return res.status(500).json({ message: 'Error processing withdrawal', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}