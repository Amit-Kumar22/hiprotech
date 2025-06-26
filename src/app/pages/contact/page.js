"use client";
import Head from 'next/head';
import React, { useState } from 'react';
import { BASE_URL } from '@/app/config';
import { useToast } from '@/app/components/Toast';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        showToast(data.message || 'Message sent successfully!', { type: 'success' });
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        showToast(data.error || 'Failed to send message.', { type: 'error' });
      }
    } catch (err) {
      showToast('Failed to send message. Please try again later.', { type: 'error' });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Head>
        <title>Contact Hyprotech | Robotics, Drones, and AI Solutions</title>
        <meta name="description" content="Contact Hyprotech for robotics, drones, and AI solutions. Get in touch to discuss your needs or request more information." />
        <meta name="keywords" content="Contact Hyprotech, Robotics, Drones, AI, STEM, Education, Support" />
        <link rel="canonical" href="https://hyprotech.in/pages/contact" />
        <meta property="og:title" content="Contact Hyprotech | Robotics, Drones, and AI Solutions" />
        <meta property="og:description" content="Contact Hyprotech for robotics, drones, and AI solutions. Get in touch to discuss your needs or request more information." />
        <meta property="og:url" content="https://hyprotech.in/pages/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/RobotLogin.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Hyprotech | Robotics, Drones, and AI Solutions" />
        <meta name="twitter:description" content="Contact Hyprotech for robotics, drones, and AI solutions. Get in touch to discuss your needs or request more information." />
        <meta name="twitter:image" content="/RobotLogin.jpg" />
      </Head>
      <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or want to discuss how we can help transform your institution&apos;s STEM education? Reach out to our team.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+91 "
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  {/* Only toast messages are used for feedback. No inline messages. */}
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
            {/* Contact Information */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Office</h3>
                      <p className="text-gray-600">
                        9th floor, Biscomaun Bhawan, Gandhi Nagar,<br />
                        Patna, Bihar 800001, India
                      </p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                      <a href="mailto:info@hiprotech.org" className="text-blue-600 hover:text-blue-800 transition">info@hiprotech.org</a>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                      <a href="tel:+918777687605" className="text-blue-600 hover:text-blue-800 transition">+91 8777687605</a>
                    </div>
                  </div>
                  {/* Social Media */}
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      {/* Facebook */}
                      <a href="#" aria-label="Facebook" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition duration-300 transform hover:scale-110">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-blue-600">
                          <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                        </svg>
                      </a>
                      {/* Twitter */}
                      <a href="#" aria-label="Twitter" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition duration-300 transform hover:scale-110">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-blue-400">
                          <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.633A9.936 9.936 0 0 0 24 4.557z"/>
                        </svg>
                      </a>
                      {/* LinkedIn */}
                      <a href="#" aria-label="LinkedIn" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition duration-300 transform hover:scale-110">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-blue-700">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 12.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-11h2.881v1.501h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v6.453z"/>
                        </svg>
                      </a>
                      {/* Instagram */}
                      <a href="#" aria-label="Instagram" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition duration-300 transform hover:scale-110">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-pink-500">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.292 2.393 1.272 3.373.98.98 2.092 1.213 3.373 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.292 3.373-1.272.98-.98 1.213-2.092 1.272-3.373.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.292-2.393-1.272-3.373-.98-.98-2.092-1.213-3.373-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                        </svg>
                      </a>
                      {/* YouTube */}
                      <a href="#" aria-label="YouTube" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition duration-300 transform hover:scale-110">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-red-600">
                          <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
