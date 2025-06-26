// import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import ReduxProvider from "./Provider";
import { ToastProvider } from './components/Toast';
import Chatbot from './components/Chatbot';
import TopNavBar from "./components/TopNavBar";
import { GoogleAnalytics } from '@next/third-parties/google'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


export const metadata = {
  metadataBase: new URL('https://hyprotech.in'),
  title: "Hyprotech | Robotics, Drones, and AI Solutions",
  description: "Hyprotech provides cutting-edge robotics, drone, and AI solutions for education, industry, and innovation. Discover our products, services, and career opportunities.",
  keywords: [
    "Hyprotech", "Robotics", "Drones", "AI", "Artificial Intelligence", "STEM", "Education", "Technology", "Innovation"
  ],
  openGraph: {
    title: "Hyprotech | Robotics, Drones, and AI Solutions",
    description: "Hyprotech provides cutting-edge robotics, drone, and AI solutions for education, industry, and innovation.",
    url: "https://hyprotech.in/",
    siteName: "Hyprotech",
    images: [
      {
        url: "/public/RobotLogin.jpg",
        width: 1200,
        height: 630,
        alt: "Hyprotech Robotics and Drones"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyprotech | Robotics, Drones, and AI Solutions",
    description: "Hyprotech provides cutting-edge robotics, drone, and AI solutions for education, industry, and innovation.",
    images: ["/public/RobotLogin.jpg"]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hyprotech",
              "url": "https://hyprotech.in/",
              "logo": "https://hyprotech.in/public/RobotLogin.jpg",
              "sameAs": [
                "https://www.facebook.com/hyprotech.in/",
                "https://www.instagram.com/hyprotech.in/",
                "https://www.linkedin.com/company/hyprotech-in/"
              ],
              "description": "Hyprotech provides cutting-edge robotics, drone, and AI solutions for education, industry, and innovation."
            })
          }}
        />
      </head>
      <body>
        <ReduxProvider>
          <ToastProvider>
            <TopNavBar />
            {children}
            <Chatbot />
            <GoogleAnalytics gaId="G-0XKKE1SW0F" />
          </ToastProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
