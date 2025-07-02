import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import { verifyAuth } from '@/middleware/authMiddleware';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });
  await dbConnect();
  const user = await verifyAuth(req, res);
  if (!user) return; // verifyAuth already sent response
  try {
    const userDetail = await User.findById(user.id).select('-passwordHash');
    if (!userDetail) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ userDetail });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}
