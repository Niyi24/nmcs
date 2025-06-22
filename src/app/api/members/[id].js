import dbConnect from '../../../utils/dbConnect';
import Member from '../../../models/Member';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const member = await Member.findById(id);
        if (!member) {
          return res.status(404).json({ message: 'Member not found' });
        }
        res.status(200).json(member);
      } catch (error) {
        res.status(500).json({ message: 'Server error', error });
      }
      break;

    case 'PUT':
      try {
        const member = await Member.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!member) {
          return res.status(404).json({ message: 'Member not found' });
        }
        res.status(200).json(member);
      } catch (error) {
        res.status(500).json({ message: 'Server error', error });
      }
      break;

    case 'DELETE':
      try {
        const deletedMember = await Member.findByIdAndDelete(id);
        if (!deletedMember) {
          return res.status(404).json({ message: 'Member not found' });
        }
        res.status(204).json({});
      } catch (error) {
        res.status(500).json({ message: 'Server error', error });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}