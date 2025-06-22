import dbConnect from '../../../utils/dbConnect';
import Deposit from '../../../models/Deposit';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const {
        senderName,
        amount,
        senderAccount,
        status,
        senderBank,
        receiverId,
      } = req.body;

      const deposit = new Deposit({
        senderName,
        amount,
        senderAccount,
        date: new Date(),
        status,
        senderBank,
        receiverId,
      });

      await deposit.save();
      res.status(201).json({ success: true, data: deposit });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}