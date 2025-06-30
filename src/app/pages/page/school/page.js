"use client";
import Image from "next/image";

export default function HiproTechPage() {
    return (
        <div>
            <main className="font-sans bg-white text-gray-800">
                {/* Hero Section with Image */}
                <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                    {/* Background Image with overlay */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/drone/school8.jpg"
                            alt="21st Century School"
                            fill
                            className="object-cover"
                            priority
                            quality={90}
                        />
                        <div className="absolute inset-0 bg-black/40 z-10"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                            HIPROTECH&apos;S End-to-End Solution for 21st Century Schools
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 font-medium drop-shadow-md">
                            In line with <span className="font-semibold text-blue-200">NEP 2017</span>
                        </p>
                    </div>
                </section>

                {/* CIC Approach */}
                <section className="text-center py-6 border-b border-gray-200">
                    <h2 className="text-xl md:text-2xl font-semibold text-green-700">
                        CIC Approach - Our Patented Methodology
                    </h2>
                </section>

                {/* Consumer-Innovator-Creator with image icons */}
                <section className="py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Consumer", color: "green", image: "/drone/school2.png" },
                        { title: "Innovator", color: "blue", image: "/drone/school3.png" },
                        { title: "Creator", color: "red", image: "/drone/school4.png" },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={120}
                                height={120}
                                className="mb-4 rounded"
                            />
                            <h3 className={`text-xl font-bold text-${item.color}-600`}>
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </section>

                {/* Three Point Descriptions */}
                <section className="bg-gray-50 py-12 px-6 text-center grid md:grid-cols-3 gap-8">
                    {[
                        {
                            text: `Equipping kids with innovation & 21st century skills.`,
                            image: "/drone/school5.png"
                        },
                        {
                            text: `Hands-on IoT and AI learning with real-life applications for students.`,
                            image: "/drone/impact2.jpg"
                        },
                        {
                            text: `Learn in simulated environments and grasp academic concepts practically.`,
                            image: "/drone/home2.jpg"
                        },
                    ].map((desc, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-md p-6">
                            <Image
                                src={desc.image}
                                alt="Point"
                                width={80}
                                height={80}
                                className="mx-auto mb-4"
                            />
                            <p className="text-md md:text-lg font-medium">{desc.text}</p>
                        </div>
                    ))}
                </section>

                {/* Lab Cards with icons */}
                <section className="py-12 px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "STEM & ROBOTICS LAB",
                            text: `HIPROTECH is your gateway to an exciting world of innovation and learning, where students and educators can explore the fascinating concepts of STEM and Robotics. Whether you are looking to establish a STEM lab, a robotics lab, or a combination of both, we have the expertise and resources to make your students dive into the concepts of STEM and Robotics.`,
                            color: "bg-rose-100",
                            image: "/drone/franchise4.jpg"
                        },
                        {
                            title: "AI AND IOT LAB",
                            text: `Our AI & IoT lab for schools is tailored to cater to the educational needs of students at K-12 levels. Through hands-on activities and projects, students can gain a practical understanding of IoT and explore its potential for creating innovative and real-life projects. If you are looking to establish an AI and IoT lab setup in your school, HIPROTECH is here to support you.`,
                            color: "bg-cyan-100",
                            image: "/drone/blog2.webp"
                        },
                        {
                            title: "AR/VR LAB",
                            text: `Our AR/VR lab setup is designed to provide students and educators with an engaging platform to explore, create, and learn in simulated environments where our experts are committed to empower students with the skills to navigate the exciting world of AR&VR. Our Virtual Reality labs will allow students to quickly and easily grasp academic concepts that previously required extensive theoretical study.`,
                            color: "bg-green-100",
                            image: "/drone/blog1.jpg"
                        },
                        {
                            title: "21ST CENTURY SHOWCASE SCHOOL",
                            text: `The 21st Century Showcase School is a cohort of inspiring schools from around the world and to create an ecosystem encouraging young students to be 21st century skill ready. The objective behind setting up the Showcase Schools is to equip the schools with various technologies and tools to nurture innovation & 21st century skills in students which are in line with NEP 2020 & (UNSDGs)`,
                            color: "bg-indigo-100",
                            image: "/drone/franchise4.jpg"
                        },
                        {
                            title: "PRE-TINKERING LAB",
                            text: `Our unique approach in our Pre-Tinkering Lab, seamlessly blends education with excitement, ensuring that every child's encounter with STEAM is filled with wonder, joy, and valuable insights. With a diverse range of engaging activities and cutting-edge HIPROTECH products, we empower students to learn, experiment, and build their way to becoming confident problem solvers and critical thinkers in their early age.`,
                            color: "bg-pink-100",
                            image: "/drone/franchise3.jpg"
                        },
                        {
                            title: "ATAL TINKERING LAB",
                            text: `HIPROTECH is a comprehensive solution provider for setting up Atal Tinkering Labs (ATLs) and facilitating end-to-end execution of various lab activities. We offer a range of unique HIPROTECH DIY (Do It Yourself) kits, products, and methodologies to support the learning process in ATLs. HIPROTECH end-to-end execution approach ensures that ATLs receive comprehensive support from setup to implementation.`,
                            color: "bg-yellow-100",
                            image: "/drone/new.jpg"
                        },
                    ].map((lab, idx) => (
                        <div
                            key={idx}
                            className={`${lab.color} rounded-xl shadow-lg p-6`}
                        >
                            <Image
                                src={lab.image}
                                alt={lab.title}
                                width={60}
                                height={60}
                                className="mb-3"
                            />
                            <h3 className="font-bold text-lg mb-2">{lab.title}</h3>
                            <p className="text-md font-medium text-gray-700">{lab.text}</p>
                        </div>
                    ))}
                </section>

                {/* Curriculum & Setup */}
                <section className="py-12 px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Grade-wise Progressive Curriculum",
                            points: [
                                "Grade-wise, Customized, and progressive curriculum.",
                                "Individual LMS subscription to each child & teacher.",
                                "Curriculum Integrated with Academics Subjects."
                            ],
                        },
                        {
                            title: "Innovation Lab Setup at School",
                            points: [
                                "HIPROTECH will Provide Hardware DIY Kits & Equipment.",
                                "Assistance in Lab Designing and Infrastructure.",
                                "Budget Friendly Kits and Labs."
                            ],
                        },
                        {
                            title: "Training & Execution Support",
                            points: [
                                "Training to Teachers & Students.",
                                "Quarterly Assessments for the students.",
                                "Help in Competitions and Exhibitions."
                            ],
                        },
                        {
                            title: "Global Exposure",
                            points: [
                                "Participation in Global competitions.",
                                "School Innovation League, etc."
                            ],
                            image: "/3.png"
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-md p-6">
                            <Image
                                src="/drone/tick.png"
                                alt={item.title}
                                width={60}
                                height={60}
                                className="mb-3"
                            />
                            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                            <ul className="list-disc list-inside text-sm text-gray-700">
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Footer CTA */}
                <section className="bg-yellow-50 py-12 px-6 text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        Join us at HIPROTECH and unlock the potential of STEM Education!
                    </h2>
                    <div className="flex justify-center mt-6">
                        <Image
                            src="/drone/school5.png"
                            alt="HiproTech Features"
                            width={400}
                            height={250}
                            className="rounded-xl"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}