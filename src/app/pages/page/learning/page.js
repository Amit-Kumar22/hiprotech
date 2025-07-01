"use client";
import Image from "next/image";
import { getImagePath } from "@/app/utils/getImagePath";

export default function EducationImpact() {
    return (
        <div>
            <div className="main-container text-gray-800 font-sans">
                {/* Hero Section */}
                <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                                School Education Just got more comfortable
                            </h1>
                            <p className="text-lg text-gray-600">
                                With HIPROTECH LMS platform your student can now learn from anywhere, anytime and on any device. Our platform is designed to provide a seamless learning experience, ensuring that students can access their courses and materials with ease.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                                Explore Our Programs
                            </button>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src={getImagePath("/drone/coding.jpg")}
                                alt="Students engaged in technology learning"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </section>
                {/* Government Partnerships */}
                <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <Image
                                    src={getImagePath("/drone/school7.jpg")}
                                    alt="Government education partnership"
                                    width={550}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="md:w-1/2 space-y-6">
                                <h2 className="text-3xl font-bold text-gray-900">World-Class Content</h2>
                                <p className="text-gray-600">
                                    From a world-class content curated by HIPROTECH experts to a progressive grade-wise curriculum, session-wise planners, and lesson plans for teachers – it’s all at your fingertips.
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
                                Streamlined Coding Education
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                Integrated coding platform and code files for teachers, hands-on coding education becomes seamless.

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
                                    <h3 className="text-xl font-semibold text-gray-800">Coding Languages and Tools for Teachers</h3>
                                </div>
                                <p className="text-gray-600 pl-14">
                                    JavaScript, Python, C++, Java, C# and Scratch programming languages with integrated code files for easy lesson planning.
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
                                    src="/Military/5.png"
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
                <section className="bg-yellow-50 py-12 px-6 text-center">
                                    <h2 className="text-2xl font-bold mb-4">
                                        HIPROTECH END-TO-END SCHOOL SOLUTION
                                    </h2>
                                    <div className="flex justify-center mt-6">
                                        <Image
                                            src="/drone/learning3.png"
                                            alt="HiproTech Features"
                                            width={400}
                                            height={250}
                                            className="rounded-xl"
                                        />
                                    </div>
                                </section>
            </div>
        </div>
    );
}
