import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import Otp from '@/models/Otp';
import { sendOtpEmail } from '@/utils/email';

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function isValidPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(password);
}
function isValidEmail(email) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}
function isValidMobile(mobile) {
  const regex = /^\+?\d{10,15}$/;
  return regex.test(mobile);
}
function isValidZipCode(zipCode) {
  const regex = /^[A-Za-z0-9\- ]{4,10}$/;
  return regex.test(zipCode);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  const { username, email, password, firstName, lastName, mobile, dateOfBirth, address, city, state, country, zipCode } = req.body;
  try {
    await dbConnect();
    if (!username || !email || !firstName || !lastName || !mobile || !dateOfBirth || !address || !city || !state || !country || !zipCode || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format.' });
    }
    if (!isValidMobile(mobile)) {
      return res.status(400).json({ message: 'Invalid mobile number. It should be 10-15 digits and may start with +.' });
    }
    if (!isValidZipCode(zipCode)) {
      return res.status(400).json({ message: 'Invalid zip code.' });
    }
    if (!isValidPassword(password)) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.' });
    }
    let existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists.' });
    }
    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
    await Otp.findOneAndDelete({ email });
    await Otp.create({ email, otp, expiresAt });
    await sendOtpEmail(email, otp);
    return res.status(200).json({ message: 'OTP sent to email. Please verify to complete signup.', tempUser: { username, email, password, firstName, lastName, mobile, dateOfBirth, address, city, state, country, zipCode } });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
}
