"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/getImagePath';

const roboticsImages = [
  {
    id: 1,
    src: getImagePath('/Education/d6.jpg'),
    alt: 'Industrial robotic arm in factory',
    title: 'Industrial Automation',
    description: 'Revolutionizing manufacturing with precision robotics'
  },
  {
    id: 2,
    src: getImagePath('/Environment/3.png'),
    alt: 'Humanoid robot interacting with humans',
    title: 'Human-Robot Interaction',
    description: 'The future of collaborative robotics in daily life'
  },
  {
    id: 3,
    src: getImagePath('/Health/3.png'),
    alt: 'Medical robot performing surgery',
    title: 'Medical Robotics',
    description: 'Enhancing precision in surgical procedures'
  },
  {
    id: 4,
    src: getImagePath('/Agriculture/3.png'),
    alt: 'Autonomous mobile robot in warehouse',
    title: 'Logistics Automation',
    description: 'Optimizing supply chains with mobile robotics'
  }
];

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Collaborative Robotics',
    excerpt: 'Exploring how cobots are transforming small and medium enterprises with safe human-robot interaction.',
    image: getImagePath('/drone/collab.jpg'),
    date: 'May 15, 2023',
    readTime: '5 min read',
    link: 'https://www.automate.org/robotics/cobots/future-of-collaborative-robots'
  },
  {
    id: 2,
    title: 'AI Integration in Industrial Robots',
    excerpt: 'How machine learning algorithms are enabling predictive maintenance and quality control in robotic systems.',
    image: getImagePath('/drone/blog2.webp'),
    date: 'April 28, 2023',
    readTime: '7 min read',
    link: 'https://www.controleng.com/industrial-robots-powered-by-ai-improve-manufacturing/'
  },
  {
    id: 3,
    title: 'Robotics in Precision Agriculture',
    excerpt: 'Automated solutions for planting, monitoring, and harvesting with millimeter accuracy.',
    image: getImagePath('/drone/blog3.webp'),
    date: 'March 10, 2023',
    readTime: '6 min read',
    link: 'https://www.azorobotics.com/Article.aspx?ArticleID=113'
  },
  {
    id: 4,
    title: 'The Ethics of Autonomous Systems',
    excerpt: 'Examining the moral implications of decision-making algorithms in robotics.',
    image: getImagePath('/drone/blog4.avif'),
    date: 'February 22, 2023',
    readTime: '8 min read',
    link: 'https://www.studysmarter.co.uk/explanations/engineering/artificial-intelligence-engineering/autonomous-systems-ethics/'
  }
];

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === roboticsImages.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume autoplay after 10s
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? roboticsImages.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume autoplay after 10s
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === roboticsImages.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div>
      <Head>
        <title>Hyprotech Blog | Robotics, Drones, and AI Insights</title>
        <meta name="description" content="Read the latest articles and insights on robotics, drones, AI, and STEM education from Hyprotech's experts." />
        <meta name="keywords" content="Hyprotech Blog, Robotics, Drones, AI, STEM, Education, Insights, Articles" />
        <link rel="canonical" href="https://hyprotech.in/pages/blog" />
        <meta property="og:title" content="Hyprotech Blog | Robotics, Drones, and AI Insights" />
        <meta property="og:description" content="Read the latest articles and insights on robotics, drones, AI, and STEM education from Hyprotech's experts." />
        <meta property="og:url" content="https://hyprotech.in/pages/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/RobotLogin.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hyprotech Blog | Robotics, Drones, and AI Insights" />
        <meta name="twitter:description" content="Read the latest articles and insights on robotics, drones, AI, and STEM education from Hyprotech's experts." />
        <meta name="twitter:image" content="/RobotLogin.jpg" />
      </Head>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50">
        <main className="flex-grow">
          {/* Hero Carousel Section */}
          <section className="relative h-96 md:h-[32rem] overflow-hidden">
            <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {roboticsImages.map((image, index) => (
                <div key={image.id} className="w-full flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100vw"
                    priority={index === 0}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-2">{image.title}</h1>
                    <p className="text-lg md:text-xl max-w-2xl">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {roboticsImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </section>
          {/* Blog Content Section */}
          <section className="container mx-auto px-4 py-12 md:py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Robotics Insights</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover the latest trends, innovations, and research in robotics technology from our experts.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <Image 
                      width={400}
                      height={300}
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-sm text-blue-600">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <button className="text-blue-600 font-medium hover:text-blue-800 transition">
                      <a target='_blank' href={post.link}>Read More →</a>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
          {/* Call to Action */}
          <section className="bg-gray-700 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Robotics Innovations</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest robotics research, case studies, and industry news.
              </p>
              <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-md bg-white text-gray-900 flex-grow"
                />
                <button className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-30">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-4">Robotics Insights</h3>
                <p className="text-gray-400">
                  Providing cutting-edge analysis and perspectives on robotics technology since 2015.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Robotics Insights. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
