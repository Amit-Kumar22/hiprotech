import { tokenBlacklist } from '@/middleware/authMiddleware';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Authorization header missing' });
  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token missing' });
  tokenBlacklist.add(token);
  return res.json({ message: 'Logged out successfully' });
}
