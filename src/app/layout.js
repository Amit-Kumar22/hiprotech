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
  metadataBase: new URL('https://hiprotech.in'),
  title: "Hiprotech | Robotics, Drones, and AI Solutions",
  description: "Hiprotech provides cutting-edge robotics, drone, and AI solutions for education, industry, and innovation. Discover our products, services, and career opportunities.",
  keywords: [
    "Hiprotech", "Robotics", "Drones", "AI", "Artificial Intelligence", "STEM", "Education", "Technology", "Innovation"
  ],
  openGraph: {
    title: "Hiprotech | Robotics, Drones, and AI Solutions",
    description: "Hiprotech provides cutting-edge robotics, drone, and AI solutions for education, industry, and innovation.",
    url: "https://hiprotech.in/",
    siteName: "Hiprotech",
    images: [
      {
        url: "/public/RobotLogin.jpg",
        width: 1200,
        height: 630,
        alt: "Hiprotech Robotics and Drones"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiprotech | Robotics, Drones, and AI Solutions",
    description: "Hiprotech provides cutting-edge robotics, drone, and AI solutions for education, industry, and innovation.",
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
              "name": "Hiprotech",
              "url": "https://hiprotech.in/",
              "logo": "https://hiprotech.in/public/RobotLogin.jpg",
              "sameAs": [
                "https://www.facebook.com/hiprotech.in/",
                "https://www.instagram.com/hiprotech.in/",
                "https://www.linkedin.com/company/hiprotech-in/"
              ],
              "description": "Hiprotech provides cutting-edge robotics, drone, and AI solutions for education, industry, and innovation."
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
