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
  // Proxy to backend server (adjust port if needed)
  proxy.web(req, res, { target: BASE_URL });
}
