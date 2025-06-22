import cron from 'node-cron';
import dbConnect from '../../../utils/dbConnect.js';
import Savings from '../../../models/Savings.js';
import Minute from '../../../models/Minute.js';

// Schedule: midnight on the last day of each month
cron.schedule('0 0 28-31 * *', async () => {
  const today = new Date();
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  if (today.getDate() !== lastDay) return; // Only run on last day of month

  await dbConnect();

  const savingsAccounts = await Savings.find({});
  for (const account of savingsAccounts) {
    if (account.balance >= 1000) {
      account.balance -= 1000;
      await account.save();
      await Minute.create({
        memberId: account.memberId,
        amount: 1000,
        date: today,
        description: 'Monthly minutes deduction'
      });
    }
  }
});

// Optionally, export a handler if this is also an API route
export default function handler(req, res) {
  res.status(200).json({ message: 'Minutes cron job is set up.' });
}