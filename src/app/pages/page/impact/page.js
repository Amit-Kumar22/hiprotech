"use client";
import Image from "next/image";

export default function EducationImpact() {
    return (
        <div>
            <div className="main-container text-gray-800 font-sans">
                {/* Hero Section */}
                <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                                Advancing Technology Education for Future Generations
                            </h1>
                            <p className="text-lg text-gray-600">
                                HIPROTECH delivers comprehensive STEM education programs, equipping students with critical skills in coding, AI, and robotics through innovative classroom integration.
                            </p>
                            <button className="bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
                                Explore Our Programs
                            </button>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="/Military/1.png"
                                alt="Students engaged in technology learning"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </section>

                {/* Programs Section */}
                <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                Comprehensive STEM Education Programs
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                Our curriculum spans foundational to advanced technologies, preparing students for the digital workforce.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {['Coding Fundamentals', 'AI & Machine Learning', 'Robotics Engineering'].map((program) => (
                                <div key={program} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{program}</h3>
                                    <p className="text-gray-600">
                                        {program === 'Coding Fundamentals' ? 'Building computational thinking through interactive programming lessons' :
                                            program === 'AI & Machine Learning' ? 'Introducing AI concepts with real-world applications and ethical considerations' :
                                                'Hands-on robotics projects integrating mechanical, electrical, and software components'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Government Partnerships */}
                <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <Image
                                    src="/Military/6.png"
                                    alt="Government education partnership"
                                    width={550}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="md:w-1/2 space-y-6">
                                <h2 className="text-3xl font-bold text-gray-900">Public Sector Collaborations</h2>
                                <p className="text-gray-600">
                                    We partner with government institutions to integrate emerging technologies into national education frameworks, ensuring equitable access to quality STEM education.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Curriculum development for national education standards</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Teacher training and certification programs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Infrastructure development for STEM labs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tinkering Labs Section */}
                <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                Innovation Labs & Hands-On Learning
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                Our tinkering labs provide the tools and environment for students to experiment, create, and develop problem-solving skills.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">Project-Based Curriculum</h3>
                                </div>
                                <p className="text-gray-600 pl-14">
                                    Students engage in meaningful projects that combine electronics, programming, and mechanical design to solve real-world challenges.
                                </p>

                                <div className="flex items-center mt-8">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">State-of-the-Art Equipment</h3>
                                </div>
                                <p className="text-gray-600 pl-14">
                                    Labs equipped with 3D printers, IoT devices, robotics kits, and measurement tools to support advanced prototyping.
                                </p>
                            </div>

                            <div>
                                <Image
                                    src="/drone/school6.jpeg"
                                    alt="Students working in innovation lab"
                                    width={600}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Impact Metrics */}
                <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-gray-100 via-gray-300 to-gray-400 text-gray-900">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            {[
                                { number: '50+', label: 'Schools Reached' },
                                { number: '10,000+', label: 'Students Trained' },
                                { number: '500+', label: 'Educators Certified' }
                            ].map((metric, index) => (
                                <div key={index} className="p-8 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-2xl shadow-lg border border-gray-300 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
                                    <p className="text-4xl font-bold mb-2 text-gray-800">{metric.number}</p>
                                    <p className="text-gray-700 font-medium">{metric.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
