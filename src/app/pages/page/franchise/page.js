// Protected page logic is disabled: All users can access this page without login.
// To enable protection, wrap the export with an auth HOC or add logic as needed.
"use client";
import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/getImagePath';

export default function Page() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const fullText = useMemo(() => ['ROBOTICS & AI'], []);

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % fullText.length;
      const fullTxt = fullText[current];

      setText(isDeleting
        ? fullTxt.substring(0, text.length - 1)
        : fullTxt.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullTxt) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, fullText, typingSpeed]);
  return (
    <>
      <div className="min-h-screen font-sans bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-white overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <Image
      src={getImagePath("/Military/4.png")}
      alt="Robotics and AI background"
      layout="fill"
      objectFit="cover"
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-blue-900 opacity-75 mix-blend-multiply"></div>
  </div>
  
  {/* Content Container */}
  <div className="max-w-6xl mx-auto text-center relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Are You <span className="">PASSIONATE</span> To<br />
      Start Your Own Business<br />
      In <span className="text-yellow-400">ROBOTICS & AI</span>
    </h1>
    <button className="dark:bg-gray-500 text-white hover:dark:bg-gray-700 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 relative z-10">
      Get Started
    </button>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
      <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-4 rounded-xl shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
        <p className="text-3xl font-bold text-gray-800">340+</p>
        <p className="text-gray-700">Online Courses</p>
      </div>
      <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-4 rounded-xl shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
        <p className="text-3xl font-bold text-gray-800">200+</p>
        <p className="text-gray-700">Instructors</p>
      </div>
      <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-4 rounded-xl shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
        <p className="text-3xl font-bold text-gray-800">100%</p>
        <p className="text-gray-700">Certification</p>
      </div>
      <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-4 rounded-xl shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
        <p className="text-3xl font-bold text-gray-800">9k+</p>
        <p className="text-gray-700">Membership</p>
      </div>
    </div>
  </div>
</section>

        {/* About Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Starting The Right Business?
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Are you a person driven by Passion, Creativity & Technology?
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Are you looking for an experienced Partner, who knows the market and can Support you well with their Technical & Marketing skills?
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Do you already have an existing educational business and want to give it a competitive advantage?
                  </li>
                </ul>
                <p className="mt-6 text-lg font-semibold">
                  If any of your answer is yes, you have landed to the right place!
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Growing Demand of Robotics Franchise in India and Worldwide
                </h3>
                <p className="text-gray-700">
                  Robotics is transforming industries globally, and the demand for robotics education is skyrocketing. Partner with us to capitalize on this growing market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reasons Section */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                5 Reasons Why It&#39;s The Best Time to Start A Business in Robotics &amp; AI
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Edu Tech is one of the fastest growing sectors in the world. 80-90% jobs in next few years will be related to Robotics, AI & ML.
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Increasing demand of such platforms not only to school/college students but professionals as well.
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Initiatives by Govt. of India under NITI Aayog to promote Robotics/STEM in School with vision to &#39;Cultivate 1 Million children in India as Neoteric Innovators&#39;.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Emerging Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-semibold">AI & ML</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-semibold">IOT</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-semibold">3D Printing</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-semibold">Mixed Reality</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-semibold">Block Chain</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-semibold">Data Analytic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Establish a Robotics &amp; AI Lab in Partnership With HiproTech
              </h2>
              <p className="text-xl text-gray-600 mb-4">&quot;Get 100% Return On Investment in 12 Months&quot;</p>
              <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Silver Card */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300 flex flex-col transform hover:scale-105 flex flex-col bg-gray-50">
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-100 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">Silver</h3>
                <ul className="text-gray-600 mb-6 flex-grow">
                  <li className="mb-2 flex items-start">
                    <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Basic Robotics Lab Setup
                  </li>
                  <li className="mb-2 flex items-start">
                    <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    10 Starter Kits
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Basic Training
                  </li>
                </ul>
                <button className="w-full dark:bg-gray-900 text-white hover:dark:bg-gray-700 text-gray-900 font-bold py-2 px-4 rounded transition duration-300 mt-auto">
                  Enroll Now →
                </button>
              </div>

              {/* Gold Card - Highlighted */}
              <div className="border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300 transform hover:scale-105 flex flex-col bg-gray-50">
                <div className="flex justify-center mb-4">
                  <div className="bg-yellow-100 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">Gold</h3>
                <ul className="text-gray-600 mb-6 flex-grow">
                  <li className="mb-2 flex items-start">
                    <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Advanced Robotics Lab
                  </li>
                  <li className="mb-2 flex items-start">
                    <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    25 Premium Kits
                  </li>
                  <li className="mb-2 flex items-start">
                    <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    AI Integration
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Advanced Training
                  </li>
                </ul>
                <button className="w-full dark:bg-gray-900 text-white hover:dark:bg-gray-700 text-gray-900 font-bold py-2 px-4 rounded transition duration-300 mt-auto">
                  Enroll Now →
                </button>
              </div>

              {/* Platinum Card */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300 flex flex-col transform hover:scale-105 flex flex-col bg-gray-50">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">Platinum</h3>
                <ul className="text-gray-600 mb-6 flex-grow">
                  <li className="mb-2 flex items-start">
                    <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Complete AI & Robotics Lab
                  </li>
                  <li className="mb-2 flex items-start">
                    <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    50+ Premium Kits
                  </li>
                  <li className="mb-2 flex items-start">
                    <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    AI & IoT Integration
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Premium Training & Support
                  </li>
                </ul>
                <button className="w-full dark:bg-gray-900 text-white hover:dark:bg-gray-700 text-gray-900 font-bold py-2 px-4 rounded transition duration-300 mt-auto">
                  Enroll Now →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">960,000+</p>
                <p>Training Hrs. Since 2017</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">20+</p>
                <p>Levels/Course with Each</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">15</p>
                <p>Different Locations in India & Abroad</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">500%</p>
                <p>Course of 48 Hrs. Published by Students</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Robotics Franchise Requirement</h2>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-gray-700 p-6 rounded-lg hover:transform hover:scale-105 transition duration-300">
                <div className="flex justify-center mb-4">
                  {/* Replace with your actual investment icon/image */}
                  <div className="bg-blue-500 rounded-full p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Investment</h3>
                <p className="text-gray-300">Details about required capital investment</p>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg hover:transform hover:scale-105 transition duration-300">
                <div className="flex justify-center mb-4">
                  {/* Replace with your actual area icon/image */}
                  <div className="bg-green-500 rounded-full p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Area Required</h3>
                <p className="text-gray-300">Space specifications for your robotics center</p>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg hover:transform hover:scale-105 transition duration-300">
                <div className="flex justify-center mb-4">
                  {/* Replace with your actual revenue icon/image */}
                  <div className="bg-yellow-500 rounded-full p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Sources Of Revenue</h3>
                <p className="text-gray-300">Multiple income streams for your business</p>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center">
              <p>© {new Date().getFullYear()} HiproTech Robotics. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}