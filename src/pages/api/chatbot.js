import httpProxy from "http-proxy";
import { BASE_URL } from "@/app/config";

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
  const { message } = req.body;
  let reply = "I'm a simple bot. You said: " + message;
  if (message && typeof message === 'string') {
    if (message.toLowerCase().includes('hello')) {
      reply = 'Hello! How can I help you today?';
    } else if (message.toLowerCase().includes('help')) {
      reply = 'Sure, I am here to help! Ask me anything.';
    } else if (message.toLowerCase().includes('bye')) {
      reply = 'Goodbye! Have a great day!';
    }
  }
  res.json({ reply });
}
