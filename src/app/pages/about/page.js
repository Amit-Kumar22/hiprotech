"use client";
import Head from 'next/head';
import React from 'react';
//import Image from 'next/image';

function AboutUs() {
  const strategicPartners = [
    { name: 'Amity University', logo: '/images/partners/amity.png' },
    { name: 'AIC IIT Delhi', logo: '/images/partners/aic-iit-delhi.png' },
    { name: 'AIC Innovation Foundation', logo: '/images/partners/aic-innovation.png' },
    { name: 'Patria', logo: '/images/partners/patria.png' },
  ];

  const mediaPartners = [
    { name: 'Times Now', logo: '/images/partners/times-now.png' },
    { name: 'News 18', logo: '/images/partners/news-18.png' },
    { name: 'DD National', logo: '/images/partners/dd-national.png' },
    { name: 'Zee News', logo: '/images/partners/zee-news.png' },
    { name: 'Kashish', logo: '/images/partners/kashish.png' },
  ];
  return (
    <div>
      <Head>
        <title>About Hyprotech | Robotics, Drones, and AI Education</title>
        <meta name="description" content="Learn about Hyprotech's mission, vision, and expertise in robotics, drones, and AI education for K-12 schools in India." />
        <meta name="keywords" content="About Hyprotech, Robotics Education, AI, Drones, STEM, India, K-12, Edtech" />
        <link rel="canonical" href="https://hyprotech.in/pages/about" />
        <meta property="og:title" content="About Hyprotech | Robotics, Drones, and AI Education" />
        <meta property="og:description" content="Learn about Hyprotech's mission, vision, and expertise in robotics, drones, and AI education for K-12 schools in India." />
        <meta property="og:url" content="https://hyprotech.in/pages/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/RobotLogin.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Hyprotech | Robotics, Drones, and AI Education" />
        <meta name="twitter:description" content="Learn about Hyprotech's mission, vision, and expertise in robotics, drones, and AI education for K-12 schools in India." />
        <meta name="twitter:image" content="/RobotLogin.jpg" />
      </Head>
      <div className="main-container min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Changing the landscape for 21st Century School Education through Methodology!
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Empowering students and educators with cutting-edge STEM solutions
            </p>
          </div>
        </section>
        {/* About Section */}
        <section className="py-16 px-4 bg-gray-100 border border-gray-200 rounded-2xl shadow-lg">
          <div className="max-w-7xl mx-auto">
            {/* About Us Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-300 via-gray-100 to-white text-gray-800 rounded-full text-sm font-semibold mb-4 shadow">
                  WHO WE ARE
                </span>
                <h2 className="text-4xl font-bold mb-6">Empowering the Future of Education</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-400 mx-auto rounded-full shadow"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                    <p className="text-lg leading-relaxed">
                      Welcome to HIPROTECH Technologies, the premier AI and robotics education provider in India.
                      We&apos;re transforming K-12 education through cutting-edge STEM solutions aligned with NEP 2020,
                      equipping both students and educators with essential 21st-century skills.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-50 p-6 rounded-xl border-l-4 border-gray-500 text-gray-800 shadow">
                    <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
                    <p>
                      Through our innovative STEM programs, we cultivate creative problem-solving and
                      technical proficiency, positioning students for success in an AI-driven future.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-50 rounded-2xl p-10 text-gray-900 mb-16 shadow-xl border border-gray-300">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                      <li>NEP 2020-aligned curriculum</li>
                      <li>Hands-on, project-based learning</li>
                      <li>Expert mentors and trainers</li>
                      <li>Cutting-edge robotics and AI labs</li>
                      <li>Proven track record in K-12 education</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Impact Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Our Impact in Numbers</h3>
                <p className="text-xl max-w-3xl mx-auto">
                  Over <span className="font-bold">100+</span> schools empowered, <span className="font-bold">10,000+</span> students trained, and <span className="font-bold">500+</span> educators upskilled across India.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-50 rounded-2xl p-8 shadow text-center border border-gray-300">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">100+</h4>
                  <p className="text-gray-700">Schools Empowered</p>
                </div>
                <div className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-50 rounded-2xl p-8 shadow text-center border border-gray-300">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">10,000+</h4>
                  <p className="text-gray-700">Students Trained</p>
                </div>
                <div className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-50 rounded-2xl p-8 shadow text-center border border-gray-300">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">500+</h4>
                  <p className="text-gray-700">Educators Upskilled</p>
                </div>
              </div>
            </div>
            {/* Strategic Collaborations Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-300 via-gray-100 to-white text-gray-800 rounded-full text-sm font-semibold mb-4 shadow">
                  STRATEGIC COLLABORATIONS
                </span>
                <h3 className="text-3xl font-bold mb-4">Our Partners</h3>
                <p className="text-xl max-w-3xl mx-auto">
                  We collaborate with leading schools, government bodies, and industry partners to drive innovation in education.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-50 rounded-2xl p-8 shadow text-center border border-gray-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Govt. of India</h4>
                  <p className="text-gray-700">STEM Initiatives</p>
                </div>
                <div className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-50 rounded-2xl p-8 shadow text-center border border-gray-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Top Schools</h4>
                  <p className="text-gray-700">K-12 Collaborations</p>
                </div>
                <div className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-50 rounded-2xl p-8 shadow text-center border border-gray-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Industry Leaders</h4>
                  <p className="text-gray-700">EdTech Partnerships</p>
                </div>
              </div>
            </div>
            {/* Media Section */}
            <div className="bg-gray-50 rounded-2xl p-10">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-300 via-gray-100 to-white text-gray-800 rounded-full text-sm font-semibold mb-4 shadow">
                  MEDIA & RECOGNITION
                </span>
                <h3 className="text-3xl font-bold mb-4">Featured In</h3>
                <p className="text-xl max-w-3xl mx-auto">
                  Hyprotech has been featured in leading media outlets for its pioneering work in robotics and AI education.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-50 rounded-2xl p-8 shadow text-center border border-gray-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Times of India</h4>
                  <p className="text-gray-700">Education Innovation</p>
                </div>
                <div className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-50 rounded-2xl p-8 shadow text-center border border-gray-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">NDTV</h4>
                  <p className="text-gray-700">STEM Leadership</p>
                </div>
                <div className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-50 rounded-2xl p-8 shadow text-center border border-gray-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Hindustan Times</h4>
                  <p className="text-gray-700">AI in Schools</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join the Future of Education</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Partner with Hyprotech to bring world-class robotics and AI education to your school or organization.
            </p>
            <a href="/contact" className="inline-block bg-gradient-to-r from-black via-gray-800 to-gray-600 text-white px-8 py-3 rounded-md font-semibold shadow hover:from-gray-900 hover:to-gray-700 transition">
              Contact Us
            </a>
          </div>
        </section>
      </div>
      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-gray-100 py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-semibold tracking-wide">© {new Date().getFullYear()} Hyprotech Technologies. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;