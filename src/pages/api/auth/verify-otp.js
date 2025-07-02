import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import Otp from '@/models/Otp';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  const { email, otp, userData } = req.body;
  try {
    await dbConnect();
    const otpDoc = await Otp.findOne({ email, otp });
    if (!otpDoc) {
      return res.status(400).json({ message: 'Invalid OTP.' });
    }
    if (otpDoc.expiresAt < new Date()) {
      await Otp.deleteOne({ _id: otpDoc._id });
      return res.status(400).json({ message: 'OTP expired.' });
    }
    let existingUser = await User.findOne({ $or: [{ username: userData.username }, { email }] });
    if (existingUser) {
      await Otp.deleteOne({ _id: otpDoc._id });
      return res.status(400).json({ message: 'Username or email already exists.' });
    }
    const user = new User({ ...userData, email });
    await user.setPassword(userData.password);
    await user.save();
    await Otp.deleteOne({ _id: otpDoc._id });
    return res.status(201).json({ message: 'Signup complete.' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
}
