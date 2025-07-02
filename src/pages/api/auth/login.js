import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  const { username, password } = req.body;
  try {
    await dbConnect();
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid username or password' });
    const valid = await user.validatePassword(password);
    if (!valid) return res.status(400).json({ message: 'Invalid username or password' });
    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return res.json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
}
