"use client";
import Image from "next/image";
// import withAuth from '@/app/components/withAuth'; // Disabled: page is now public

export default function Drone() {
  return (
    <div>
      <main className="bg-white text-gray-800 font-sans">
        {/* Hero Section with custom video */}
        <section className="hero-section">
          <div className="video-wrapper h-[600px] md:h-[400px] lg:h-[600px] w-full overflow-hidden flex items-center justify-center">
            <video
              src="/hiprotech-website-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="hero-video w-full h-full object-cover"
            />
          </div>
        </section>


        {/* Stats Section */}
        <section className="py-16 bg-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Our Legacy in Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { count: "8+", title: "Years of Innovation" },
                { count: "50+", title: "Satisfied Clients" },
                { count: "100+", title: "Successful Projects" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
                  <p className="text-5xl font-bold text-blue-900">{item.count}</p>
                  <p className="mt-4 text-blue-700 font-medium text-lg">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering & Partner Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-1 md:order-none">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Unmatched Passion for UAV Engineering
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  HIPROTECH is a business built by experts with decades of
                  experience in robotics, aviation, and model building. Our team
                  builds the world&apos;s best flying machines through a love for our
                  work, craftsmanship, and technical prowess.
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors">
                  Learn About Our Process
                </button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/drone/drone2.jpg"
                  alt="Engineering"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/drone/drone3.jpg"
                  alt="Commitment"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Commitment to Our Partners
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We design and manufacture drones for specific use cases. We
                  focus on customer success over sales and provide only the best
                  solutions when we know we can truly deliver.
                </p>
                <button className="mt-6 px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition-colors">
                  Our Client Stories
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Delivering innovative solutions that transform industries and improve lives
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Product Development",
                  icon: "🛠️",
                  points: ["Multi-rotors", "Fixed wing", "Controllers", "Ground robotics", "Sensors", "Software & AI"],
                },
                {
                  title: "Contract Engineering",
                  icon: "📐",
                  points: ["Prototyping", "Designing", "Engineering"],
                },
                {
                  title: "Software, Data and AI",
                  icon: "🤖",
                  points: ["Energy", "Mining", "Telehealth", "Infrastructure"],
                },
                {
                  title: "Flight Services",
                  icon: "✈️",
                  points: ["Mapping", "Surveying", "Data Collection", "Delivery"],
                },
              ].map((cap, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{cap.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">{cap.title}</h3>
                  <ul className="space-y-2">
                    {cap.points.map((p, j) => (
                      <li key={j} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Tailored UAV solutions for your specific industry needs
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                {
                  title: "Agriculture",
                  image: "/Agriculture/2.png",
                  points: ["Enterprise", "Production", "Research"],
                  desc: "Collect high-quality environmental data using UAVs with sensor tech.",
                },
                {
                  title: "Environment & Energy",
                  image: "/Environment/2.png",
                  points: ["Mining", "Oil & Gas", "Electric"],
                  desc: "Optimize operations, improve safety, and respond after disasters.",
                },
                {
                  title: "Military & Government",
                  image: "/Military/8.png",
                  points: ["Indian Defense", "Government Contractors"],
                  desc: "Partner to improve safety of personnel and infrastructure.",
                },
                {
                  title: "Public Safety",
                  image: "/Safety/3.png",
                  points: ["Police – Fire", "HAZMAT – Emergency", "Response"],
                  desc: "Leaders in using drones for public safety since 2013.",
                },
                {
                  title: "Public Health",
                  image: "/drone/drone9.avif",
                  points: ["Venues", "Hospital Networks", "Care Providers"],
                  desc: "Vital signs assessment while protecting personal privacy.",
                },
                {
                  title: "Insurance",
                  image: "/Insurance/2.png",
                  points: ["Carriers", "Commercial", "Property Owners"],
                  desc: "UAVs used for damage assessment to reduce infrastructure risks.",
                },
                {
                  title: "Education",
                  image: "/Education/d5.jpg",
                  points: ["Custom Training", "Corporate Training", "Online Courses"],
                  desc: "Leading drone training and certification programs in India.",
                },
                {
                  title: "Humanitarian",
                  image: "/Humanitarian/6.png",
                  points: ["Landmine Detection", "Medical Response", "Situational Assessment"],
                  desc: "Supporting global public safety and humanitarian aid operations.",
                },
              ].map((sol, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{sol.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {sol.points.map((pt, j) => (
                        <span key={j} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {pt}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600">{sol.desc}</p>
                    <button className="mt-4 text-blue-700 font-medium hover:text-blue-900 transition-colors">
                      Learn more →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

