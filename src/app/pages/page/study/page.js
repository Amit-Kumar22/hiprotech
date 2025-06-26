"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';

const skills = [
  { title: "Analytical Thinking and Innovation", icon: "🔍" },
  { title: "Active Learning and Learning Strategies", icon: "📚" },
  { title: "Complex problem-Solving", icon: "🧩" },
  { title: "Technology Design and Programming", icon: "💻" },
  { title: "Critical Thinking and Analysis", icon: "🤔" },
  { title: "Creativity Originality and Initiative", icon: "🎨" },
  { title: "Leadership and Social Influence", icon: "👥" },
  { title: "Reading and Ideation", icon: "📖" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const skillsContainerRef = useRef(null);
  // Manual scroll handler
  const scrollSkills = (direction) => {
    const container = skillsContainerRef.current;
    if (!container) return;
    const scrollAmount = 300; // px
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  };

  // Auto-scroll skills horizontally
  useEffect(() => {
    const container = skillsContainerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScroll = scrollWidth - clientWidth;
    let scrollPosition = 0;
    let direction = 1;

    const scrollInterval = setInterval(() => {
      scrollPosition += direction * 1;
      
      if (scrollPosition >= maxScroll) {
        direction = -1;
      } else if (scrollPosition <= 0) {
        direction = 1;
      }
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }, 50);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      <div className="min-h-screen font-sans bg-white text-gray-800">

        {/* Hero Section with professional background */}
        <section className="relative py-20 px-6 text-white overflow-hidden">
          {/* Professional abstract background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-95">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0)_70%)]"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto text-center z-10">
            <h1 className="font-extrabold text-4xl md:text-5xl tracking-tight mb-2">ATAL TINKERING LAB</h1>
            <h2 className="font-bold text-2xl md:text-3xl m-0 mb-8">nurturing young minds to innovate</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Empowering the next generation of innovators through hands-on learning, creativity, and problem-solving.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg transform hover:scale-105">
                Explore Programs
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* About Section - Left aligned text with image on right */}
        <section id="about" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">About ATAL Tinkering Lab</h2>
                <p className="text-lg text-gray-600 mb-4">
                  The ATAL Tinkering Lab is a flagship initiative aimed at fostering innovation and creativity in students. 
                  We provide a state-of-the-art workspace where young minds can give shape to their ideas through hands-on 
                  do-it-yourself mode and learn innovation skills.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our lab is equipped with the latest technologies like 3D printers, robotics kits, IoT devices, and more 
                  to help students explore STEM (Science, Technology, Engineering, and Math) concepts.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-105">
                  Read More
                </button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Students working in lab"
                  width={800}
                  height={533}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Right aligned text with image on left */}
        <section id="features" className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Unique Approach</h2>
                <p className="text-lg text-gray-600 mb-4">
                  We believe in learning by doing. Our curriculum is designed to encourage experimentation, 
                  failure, and iterative learning - key components of the innovation process.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Project-based learning methodology</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Mentorship from industry experts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Access to cutting-edge technology</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Collaboration with peer innovators</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Students collaborating"
                  width={800}
                  height={533}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Horizontal auto-scrolling */}
        <section id="skills" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Top Skills in Demand</h2>
            
            <div className="relative">
              {/* Left/Right Icon Buttons */}
              <button
                aria-label="Scroll Left"
                onClick={() => scrollSkills(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-blue-100 text-blue-600 rounded-full shadow p-2 transition hidden md:inline-flex"
                style={{ backdropFilter: 'blur(2px)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                aria-label="Scroll Right"
                onClick={() => scrollSkills(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-blue-100 text-blue-600 rounded-full shadow p-2 transition hidden md:inline-flex"
                style={{ backdropFilter: 'blur(2px)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
              <div 
                ref={skillsContainerRef}
                className="flex overflow-x-auto space-x-6 py-4 scrollbar-hide-custom"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {/* Ensure each child has a unique key using both title and index */}
                {skills.concat(skills).map((skill, idx) => (
                  <div 
                    key={`skill-${idx}-${skill.title}`}
                    className="flex-shrink-0 w-64 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    <div className="text-4xl mb-4">{skill.icon}</div>
                    <h3 className="font-semibold text-lg">{skill.title}</h3>
                  </div>
                ))}
              </div>
              {/* Gradient fade effect on sides */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* CTA Section with professional background */}
        <section className="relative py-16 px-6 text-white overflow-hidden">
          {/* Professional geometric background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-blue-800 opacity-95">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0)_70%)]"></div>
            <div className="absolute inset-0 opacity-10 bg-[url('https://assets.website-files.com/5f6bc60e665f54545a1e52a5/5f6bf0e4b8ba3821b3a0a0b4_Bg-Pattern-2.svg')] bg-cover"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto text-center z-10">
            <h2 className="text-3xl font-bold mb-6">Ready to Innovate?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our community of young innovators and start your journey of creativity and problem-solving today.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg transform hover:scale-105">
              Get Started Now
            </button>
          </div>
        </section>
      </div>
      <style jsx global>{`
        .scrollbar-hide-custom {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide-custom::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}