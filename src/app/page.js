"use client";
// SEO: Add custom meta tags for homepage
import Head from 'next/head';
import { useState, useEffect } from "react";
import Image from "next/image";
import { getImagePath } from "@/app/utils/getImagePath";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Hiprotech | Robotics, Drones, and AI Solutions</title>
        <meta name="description" content="Hiprotech provides cutting-edge robotics, drone, and AI solutions for education, industry, and innovation. Discover our products, services, and career opportunities." />
        <meta name="keywords" content="Hiprotech, Robotics, Drones, AI, Artificial Intelligence, STEM, Education, Technology, Innovation" />
        <link rel="canonical" href="https://hiprotech.in/" />
        {/* Open Graph */}
        <meta property="og:title" content="Hyprotech | Robotics, Drones, and AI Solutions" />
        <meta property="og:description" content="Hyprotech provides cutting-edge robotics, drone, and AI solutions for education, industry, and innovation." />
        <meta property="og:url" content="https://hyprotech.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/RobotLogin.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hyprotech | Robotics, Drones, and AI Solutions" />
        <meta name="twitter:description" content="Hyprotech provides cutting-edge robotics, drone, and AI solutions for education, industry, and innovation." />
        <meta name="twitter:image" content="/RobotLogin.jpg" />
      </Head>
      <div className="main-container min-h-screen flex flex-col font-sans">

        {/* Hero Section with Video */}
        <section className="hero-section">
          <div className="video-wrapper h-[600px] md:h-[400px] lg:h-[600px] w-full overflow-hidden flex items-center justify-center">
            <video
              src={getImagePath("/hiprotech-website-video.mp4")}
              autoPlay
              loop
              muted
              playsInline
              className="hero-video w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Main Content */}
        <main className="flex-grow">
          {/* About Section with Image */}
          <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">WHO WE ARE</h2>
                <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                <p className="text-lg text-gray-600 mb-6">
                  Welcome to HIPROTECH Technologies, the leading Edtech company in India. We specialize in providing comprehensive end-to-end solutions for K-12 schools, aligning with the National Education Policy (NEP) 2020.
                </p>
                <p className="text-lg text-gray-600">
                  Our mission is to equip students and teachers with 21st-century skills (STEM, Coding, Robotics, AI, ML, IOT, AR & VR) necessary to thrive in the rapidly changing innovation landscape.
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src={getImagePath("/Education/d1.jpg")}
                  alt="Robotics Illustration"
                  width={600}
                  height={400}
                  className="w-full h-64 lg:h-96 object-cover object-center"
                  priority={true}
                />
              </div>
            </div>
          </section>

          {/* What We Do Section */}
          <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">WHAT WE DO</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                <p className="text-2xl font-semibold text-gray-700 mb-8">
                  Preparing Students for rapidly changing Technological World
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard
                  icon="🚀"
                  title="Innovation & 21st Century Skills"
                  description="Empowering kids to become Creative Thinkers & Problem Solvers"
                  imagePlaceholder={getImagePath("/drone/home2.jpg")}
                />
                <ServiceCard
                  icon="🏫"
                  title="Integrated School Solutions"
                  description="End-To-End Solution for Schools aligned with NEP 2020"
                  imagePlaceholder="/drone/home3.jpg"
                />
                <ServiceCard
                  icon="🔧"
                  title="Practical Learning"
                  description="Hands-on experience with cutting-edge technologies"
                  imagePlaceholder="/drone/home4.jpg"
                />
              </div>
            </div>
          </section>

          {/* How We Do It Section */}
          <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">HOW WE DO THIS</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
                <TechPill icon="💻" title="Coding" />
                <TechPill icon="🤖" title="Robotics" />
                <TechPill icon="🔬" title="STEAM" />
                <TechPill icon="📚" title="Content" />
                <TechPill icon="👓" title="AR & VR" />
                <TechPill icon="🧠" title="AI & ML" />
              </div>

              {/* Technology Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  {/* PLACEHOLDER FOR CODING IMAGE */}
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Coding Image</span>
                    
                  </div>
                  <Image
                    src={getImagePath("/Education/d1.jpg")}
                    alt="Coding Platform"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover object-center"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Coding Platform</h3>
                    <p className="text-gray-600">Interactive learning with PictoBlox</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={getImagePath("/Education/d2.jpg")}
                    alt="Robotics Kits"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover object-center"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Robotics Kits</h3>
                    <p className="text-gray-600">Hands-on robotics education</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={getImagePath("/Education/d3.jpg")}
                    alt="AI Labs"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover object-center"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">AI Labs</h3>
                    <p className="text-gray-600">Artificial Intelligence curriculum</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={getImagePath("/Education/d4.jpg")}
                    alt="VR Learning"
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover object-center"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">VR Learning</h3>
                    <p className="text-gray-600">Immersive educational experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Offerings Section */}
          <section className="bg-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                OFFERINGS TO MAKE YOUR SCHOOL READY FOR 21ST CENTURY
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative text-black">
                  <OfferingCard
                    title="PRE-TINKERING LAB"
                    description="Our unique approach in our Pre-Tinkering Lab seamlessly blends education with excitement, ensuring that every child's encounter with STEAM is filled with wonder, joy, and valuable insights. With a diverse range of engaging activities and cutting-edge HIPROTECH products, we empower students to learn, experiment, and build their way to becoming confident problem solvers and critical thinkers."
                  />
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Image
                      src={getImagePath("/Education/d5.jpg")}
                      alt="Pre-Tinkering Lab"
                      width={160}
                      height={160}
                      className="w-40 h-40 rounded-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="relative">
                  <OfferingCard
                    title="ATAL TINKERING LAB"
                    description="HIPROTECH offers comprehensive end-to-end assistance in establishing and running Atal Tinkering Lab in schools, providing students with a stimulating environment for exploring and mastering STEM, tinkering, the Internet of Things, and entrepreneurship."
                  />
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Image
                      src={getImagePath("/Education/d6.jpg")}
                      alt="Atal Tinkering Lab"
                      width={160}
                      height={160}
                      className="w-40 h-40 rounded-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI & Robotics Lab Section */}
          <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    AI & Robotics Lab for Schools
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    HIPROTECH AI and Robotics Lab are <span className="font-semibold">upgrading ICT labs in schools</span> by integrating modern ICT, coding, AI, and robotics education into the <span className="font-semibold">curriculum for classes 3-12</span>. Through hands-on learning with PictoBlox and Quarky, students are able to gain valuable skills that can help prepare them for the future.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
                <div className="bg-gray-100 rounded-xl overflow-hidden">
                  <Image
                    src={getImagePath("/drone/drone1.jpg")}
                    alt="AI & Robotics Lab"
                    width={800}
                    height={384}
                    className="w-full h-64 lg:h-96 object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Impact Stats Section */}
          <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                UNLOCKING THE NEW AGE SKILLS FOR SCHOOLS & TEACHERS
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                <StatCard number="20+" label="SCHOOLS" />
                <StatCard number="100K+" label="STUDENTS" />
                <StatCard number="3+" label="COUNTRIES" />
                <StatCard number="50+" label="TEACHERS" />
                <StatCard number="97%" label="Customer Satisfaction" />
              </div>

              {/* PLACEHOLDER FOR IMPACT IMAGE */}
              <div className="mt-16 bg-gray-100 rounded-xl overflow-hidden">
                <Image
                  src={getImagePath("/drone/impact2.jpg")}
                  alt="Impact/Results"
                  width={1200}
                  height={256}
                  className="w-full h-64 object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Ecosystem Section */}
          <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Discover the power of the HIPROTECH ecosystem
              </h2>
              <p className="text-xl mb-8 max-w-4xl mx-auto">
                A revolutionary Coding, AI, and Robotics solution for schools! Our educational specialists are here to show you how to harness the potential of this cutting-edge technology.
              </p>

              {/* PLACEHOLDER FOR ECOSYSTEM IMAGE */}
              <div className="mb-8 bg-white bg-opacity-20 rounded-xl overflow-hidden max-w-3xl mx-auto">
                <Image
                  src={getImagePath("/Education/d7.jpg")}
                  alt="Ecosystem/Product"
                  width={900}
                  height={192}
                  className="w-full h-48 object-cover object-center"
                  loading="lazy"
                />
              </div>

              <button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
                Contact Us for a Free Demo
              </button>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <FAQItem
                  question="I am not an engineering student, will I be able to learn and understand Robotics?"
                  answer="Robotics is not just for engineering students, but for every individual who is interested in technology. The very first and basic steps are easy to learn and understand for any individual, from any stream. It is only when you want to endeavor into advanced robotics, that you may require comprehensive training, which is why Techno Gravity Solutions is formed. With TGS i.e. with us you need not be an engineering student; our training will make you one."
                />
                <FAQItem
                  question="What is NEP STEM education?"
                  answer="NEP STEM education refers to the integration of Science, Technology, Engineering, and Mathematics in school curricula as recommended by India's National Education Policy 2020. It emphasizes hands-on learning, critical thinking, and problem-solving skills to prepare students for the 21st century."
                />
                <FAQItem
                  question="How AI is integrated in education?"
                  answer="AI is integrated in education through personalized learning platforms, intelligent tutoring systems, automated grading, and data-driven insights into student performance. It helps create adaptive learning experiences tailored to individual student needs and learning paces."
                />
                <FAQItem
                  question="How to use a drone for education?"
                  answer="Drones can be used in education to teach coding (programming flight paths), geography (aerial mapping), physics (understanding flight dynamics), and even art (aerial photography). They provide hands-on STEM learning opportunities and help students develop technical skills."
                />
                <FAQItem
                  question="What is practical knowledge in education?"
                  answer="Practical knowledge in education refers to learning through hands-on experience, experimentation, and real-world application of concepts. It complements theoretical knowledge by allowing students to apply what they've learned in practical scenarios, developing problem-solving and critical thinking skills."
                />
              </div>
            </div>
          </section>
        </main>


        {/* Footer (kept as original) */}
        <footer className="bg-gray-900 text-white pt-12 pb-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="footer-section">
                <h3 className="text-xl font-semibold mb-4 border-b border-blue-600 pb-2 inline-block">Contact Us</h3>
                <address className="not-italic">
                  <p className="mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@hiprotech.com" className="hover:text-blue-400 transition-colors">info@hiprotech.com</a>
                  </p>
                  <p className="mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+91 8777687605" className="hover:text-blue-400 transition-colors">+91 8777687605</a>
                  </p>
                  <p className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Biscomaun Bhawan<br />9th floor<br />Gandhi Maidan<br />Patna, Bihar 800001<br />India</span>
                  </p>
                </address>
              </div>

              <div className="footer-section">
                <h3 className="text-xl font-semibold mb-4 border-b border-blue-600 pb-2 inline-block">Connect With Us</h3>
                <div className="flex space-x-4 mb-4">
                  <a target='_blank' href="http://linkedin.com/in/abhishek-kumar-b52975177" aria-label="LinkedIn" className="social-icon hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter" className="social-icon hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a target='_blank' href="https://www.facebook.com/share/16UZicJHnu/?mibextid=wwXIfr" aria-label="Facebook" className="social-icon hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                 
                </div>
                <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 rounded text-white bg-gray-800 placeholder-gray-300 flex-grow"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div className="footer-bottom border-t border-gray-800 pt-6 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} HiProTech. All rights reserved. | <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function ServiceCard({ icon, title, description, imagePlaceholder }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="bg-gray-100 rounded-lg overflow-hidden mt-auto">
        <Image
          src={imagePlaceholder}
          alt={title}
          width={400}
          height={128}
          className="w-full h-32 object-cover object-center"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function TechPill({ icon, title }) {
  return (
    <div className="bg-white p-4 rounded-full shadow-md flex flex-col items-center justify-center border border-gray-200 hover:shadow-lg transition-shadow">
      <span className="text-3xl mb-2">{icon}</span>
      <span className="font-semibold text-gray-700">{title}</span>
    </div>
  );
}

function OfferingCard({ title, description }) {
  return (
    <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-filter backdrop-blur-sm border border-white border-opacity-20 h-full">
      <h3 className="text-2xl text-black font-bold mb-4">{title}</h3>
      <p className="text-black text-opacity-90">{description}</p>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center">
      <p className="text-4xl font-bold text-blue-600 mb-2">{number}</p>
      <p className="text-gray-600 uppercase text-sm font-semibold">{label}</p>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}