import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import Otp from '@/models/Otp';

function isValidPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(password);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  const { email, otp, newPassword } = req.body;
  if (!email || !otp || !newPassword) {
    return res.status(400).json({ message: 'Email, OTP, and new password are required.' });
  }
  if (!isValidPassword(newPassword)) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.' });
  }
  await dbConnect();
  const otpDoc = await Otp.findOne({ email });
  if (!otpDoc || otpDoc.otp !== otp || otpDoc.expiresAt < new Date()) {
    return res.status(400).json({ message: 'Invalid or expired OTP.' });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }
  await user.setPassword(newPassword);
  await user.save();
  await Otp.deleteOne({ email });
  return res.json({ message: 'Password reset successful.' });
}
