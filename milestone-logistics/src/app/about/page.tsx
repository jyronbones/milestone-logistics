import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Driving Logistics Forward
          </h1>
          <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Milestone Group Logistics is a premier 3PL partner, helping e-commerce and retail businesses streamline their supply chains.
            From startups to large-scale retailers, we deliver logistics that are reliable, scalable, and intelligent.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/about/about-hero.jpg"
            alt="Modern warehouse interior with logistics activity"
            width={800}
            height={520}
            className="object-cover"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-2">
              To revolutionize logistics with cutting-edge technology, efficient operations, and a customer-first approach, enabling businesses to scale effortlessly.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Our Vision
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-2">
              To be the world’s most trusted logistics partner, recognized for innovation, operational excellence, and sustainable growth.
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
          <Image
            src="/about/warehouse-automation.jpg"
            alt="Automated warehouse logistics with robotics"
            width={800}
            height={520}
            className="object-cover"
          />
        </div>
      </section>

      {/* Modern Workplace / Team Section */}
      <section>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12 tracking-tight">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/about/team-collaboration.jpg"
              alt="Team collaborating in modern office"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/about/warehouse-automation.jpg"
              alt="Warehouse automation with robotics"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/about/last-mile-delivery.jpg"
              alt="Courier delivering package in city"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Highlight / Quote Section */}
      <section className="bg-blue-800 text-white py-16 px-6 rounded-xl shadow-lg text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          "Simplifying logistics so your business can scale with confidence."
        </h3>
        <p className="text-lg max-w-2xl mx-auto">
          Through technology, automation, and customer-first solutions, we set the benchmark in the logistics industry.
        </p>
      </section>

    </div>
  );
}
