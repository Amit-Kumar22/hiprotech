"use client";
import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/getImagePath';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllJobs } from '@/app/redux/slices/careerSlice';
import JobCard from '@/app/components/JobCard';
import ApplicationModal from '@/app/components/ApplicationModal';


export default function Page() {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector(state => state.career);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    department: '',
    location: '',
    type: ''
  });

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job =>
      (filters.department === '' || job.department === filters.department) &&
      (filters.location === '' || job.location.includes(filters.location)) &&
      (filters.type === '' || job.type === filters.type)
    );
  }, [jobs, filters]);

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Head>
        <title>Careers at Hyprotech | Robotics, Drones, and AI Jobs</title>
        <meta name="description" content="Explore career opportunities at Hyprotech. Join our team to work on robotics, drones, and AI solutions for education and industry." />
        <meta name="keywords" content="Hyprotech Careers, Robotics Jobs, Drones Jobs, AI Jobs, STEM Careers, Edtech Jobs" />
        <link rel="canonical" href="https://hyprotech.in/pages/career" />
        <meta property="og:title" content="Careers at Hyprotech | Robotics, Drones, and AI Jobs" />
        <meta property="og:description" content="Explore career opportunities at Hyprotech. Join our team to work on robotics, drones, and AI solutions for education and industry." />
        <meta property="og:url" content="https://hyprotech.in/pages/career" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/RobotLogin.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers at Hyprotech | Robotics, Drones, and AI Jobs" />
        <meta name="twitter:description" content="Explore career opportunities at Hyprotech. Join our team to work on robotics, drones, and AI solutions for education and industry." />
        <meta name="twitter:image" content="/RobotLogin.jpg" />
      </Head>
      <div className="main-container">
        {/* Hero Section */}
        <section className="relative text-white py-20 md:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={getImagePath("/Military/4.png")}
              alt="Robotics Illustration"
              fill
              className="object-cover absolute inset-0 w-full h-full z-0"
              priority
            />
          </div>
        </section>
        {/* Company Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Mission Card */}
                <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-8 rounded-2xl border border-gray-300 shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                  <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-md">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Mission</h3>
                  <p className="text-gray-700">
                    Innovate Solutions is dedicated to developing cutting-edge robotics and AI solutions for education and industry.
                  </p>
                </div>
                {/* Values Card */}
                <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-8 rounded-2xl border border-gray-300 shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                  <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-md">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Values</h3>
                  <p className="text-gray-700">
                    We value innovation, collaboration, and a passion for empowering the next generation of tech leaders.
                  </p>
                </div>
                {/* Vision Card */}
                <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-8 rounded-2xl border border-gray-300 shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                  <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-md">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Vision</h3>
                  <p className="text-gray-700">
                    To be the leading provider of robotics and AI education, shaping the future of learning and work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Employee Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Hear From Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-8 rounded-2xl shadow-xl border border-gray-300 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <svg className="w-10 h-10 text-gray-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2m4-4h0a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" /></svg>
                <p className="text-gray-800 italic mb-4 text-lg">
                  &quot;Working at Hyprotech has been incredibly rewarding. I&apos;ve had the opportunity to contribute to impactful projects and grow my skills alongside a talented team.&quot;
                </p>
                <p className="font-semibold text-gray-900">- Rohan Sharma, Software Engineer</p>
              </div>
              <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-8 rounded-2xl shadow-xl border border-gray-300 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <svg className="w-10 h-10 text-gray-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2m4-4h0a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h0a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" /></svg>
                <p className="text-gray-800 italic mb-4 text-lg">
                  &quot;The supportive and collaborative culture at Hyprotech is what sets it apart. We&apos;re encouraged to share ideas and learn from each other, which makes coming to work each day a pleasure.&quot;
                </p>
                <p className="font-semibold text-gray-900">- Priya Patel, Marketing Manager</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Benefits & Perks</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-8 rounded-2xl border border-gray-300 shadow-xl flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Healthcare</h3>
                <p className="text-gray-700 text-center">Comprehensive health insurance plans for employees and their families.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-8 rounded-2xl border border-gray-300 shadow-xl flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Paid Time Off</h3>
                <p className="text-gray-700 text-center">Generous vacation and sick leave policies.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-8 rounded-2xl border border-gray-300 shadow-xl flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Professional Growth</h3>
                <p className="text-gray-700 text-center">Opportunities for training, workshops, and conferences.</p>
              </div>
              <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-8 rounded-2xl border border-gray-300 shadow-xl flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M12 7a4 4 0 110-8 4 4 0 010 8z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Flexibility</h3>
                <p className="text-gray-700 text-center">Options for remote work and flexible hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Openings</h2>
              {/* Filters */}
              <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-4 rounded-2xl border border-gray-300 shadow-md mb-8">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md bg-white"
                      value={filters.department}
                      onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                    >
                      <option value="">All Departments</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Product">Product</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Operations">Operations</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md bg-white"
                      value={filters.location}
                      onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    >
                      <option value="">All Locations</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-md bg-white"
                      value={filters.type}
                      onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    >
                      <option value="">All Types</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Job Listings */}
              {loading ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                  <p className="mt-2 text-gray-600">Loading job openings...</p>
                </div>
              ) : filteredJobs.length > 0 ? (
                <div className="space-y-4">
                  {filteredJobs.map(job => (
                    <div
                      key={job.id}
                      className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-6 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <JobCard
                        job={job}
                        onApply={() => handleApply(job)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-8 rounded-2xl border border-gray-300 shadow-md text-center">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No jobs found</h3>
                  <p className="text-gray-600">We don&apos;t have any openings matching your filters at the moment.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Hiring Process</h2>
              <div className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
                <div className="space-y-8">
                  {[
                    { step: 1, title: "Online Application", description: "Submit your application and resume through our portal." },
                    { step: 2, title: "Initial Screening", description: "A phone call with our HR team to discuss your background and interests." },
                    { step: 3, title: "Technical Assessment", description: "For technical roles, a skills evaluation may be required." },
                    { step: 4, title: "Team Interviews", description: "Meet with the hiring manager and potential teammates." },
                    { step: 5, title: "Offer & Onboarding", description: "Welcome to the team! We'll get you set up for success." }
                  ].map((item) => (
                    <div key={item.step} className="relative pl-12">
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center transform -translate-x-1/2">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & FAQ */}
        <section className="py-16 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Have Questions?</h2>
                <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-6 rounded-2xl border border-gray-300 shadow-md flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Our HR Team</h3>
                  <p className="text-gray-700 mb-4">
                    Email: <a href="mailto:info@hiprotech.org" className="text-blue-600 hover:underline">info@hiprotech.org</a>
                  </p>
                  <p className="text-gray-700">
                    Phone: <a href="tel:+91 8777687605" className="text-blue-600 hover:underline">+91 8777687605</a>
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">FAQs</h2>
                <div className="space-y-4">
                  {[
                    { question: "How long does the hiring process take?", answer: "Typically 2-4 weeks from application to offer, depending on the role and interview availability." },
                    { question: "Do you offer remote work options?", answer: "Yes, many of our roles are available for remote work or hybrid arrangements." },
                    { question: "What benefits do you offer?", answer: "We provide comprehensive health insurance, retirement plans, generous PTO, professional development budgets, and more." }
                  ].map((faq, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-4 rounded-2xl border border-gray-300 shadow-md">
                      <h3 className="font-medium text-gray-900">{faq.question}</h3>
                      <p className="mt-1 text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Modal */}
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          job={selectedJob}
        />
      </div>
    </div>
  );
}