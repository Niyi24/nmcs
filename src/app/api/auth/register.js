import dbConnect from '../../../utils/dbConnect';
import Member from '../../../models/Member';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await dbConnect();

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      dateOfBirth,
      NIN,
      nepaBill,
      profilePicture,
      password,
      BVN,
      nextOfKin,
    } = req.body;

    // Validate input
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    // Check if user already exists
    const existingMember = await Member.findOne({ email });
    if (existingMember) {
      return res.status(409).json({ message: 'Member already exists.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new member
    const newMember = new Member({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      dateOfBirth,
      NIN,
      nepaBill,
      profilePicture,
      password: hashedPassword,
      BVN,
      nextOfKin,
    });

    try {
      await newMember.save();
      return res.status(201).json({ message: 'Member registered successfully.' });
    } catch (error) {
      return res.status(500).json({ message: 'Error registering member.', error });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}