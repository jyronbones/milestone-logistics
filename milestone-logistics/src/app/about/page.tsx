import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            About Milestone Group Logistics
          </h1>
          <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Milestone Group Logistics is a full-service 3PL partner helping e-commerce and retail businesses optimize their supply chains.
            From Shopify merchants to large retailers, we simplify logistics and make them reliable and scalable.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/about/about-hero.jpg"
            alt="Modern warehouse interior"
            width={800}
            height={520}
            className="object-cover"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-2">
              To deliver world-class logistics solutions that empower businesses to scale with confidence.
              We are committed to innovation, integrity, and excellence at every step of the supply chain.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-2">
              To be the leading logistics partner globally, recognized for cutting-edge technology, operational excellence,
              and a relentless focus on customer success.
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
          <Image
            src="/about/warehouse-automation.jpg"
            alt="Automated warehouse logistics"
            width={800}
            height={520}
            className="object-cover"
          />
        </div>
      </section>

      {/* Modern Workplace / Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Our Team & Modern Operations
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

      {/* Optional Highlight / Quote Section */}
      <section className="bg-blue-800 text-white py-16 px-6 rounded-xl shadow-lg text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          "Simplifying logistics so your business can scale with confidence."
        </h3>
        <p className="text-lg max-w-2xl mx-auto">
          Our commitment to technology, automation, and customer-first solutions sets us apart in the logistics industry.
        </p>
      </section>

    </div>
  );
}
