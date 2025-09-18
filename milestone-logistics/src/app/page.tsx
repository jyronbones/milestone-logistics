import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="h-96 md:h-[480px] relative bg-gray-800 dark:bg-gray-900">
          <Image
            src="/hero.jpg"
            alt="Logistics hero"
            fill
            style={{ objectFit: "cover", opacity: 0.7 }}
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h1 className="text-3xl md:text-5xl font-bold">
                Smarter Logistics. Seamless Growth.
              </h1>
              <p className="mt-4 text-md md:text-lg max-w-2xl mx-auto">
                We power e-commerce and retail businesses with reliable 3PL,
                warehousing, inventory management, and last-mile delivery
                solutions.
              </p>

              <div className="mt-6 flex justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white px-6 py-3 rounded-md text-lg shadow transition hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/about"
                  className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white px-6 py-3 rounded-md text-lg shadow transition hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-primary text-center dark:text-primary">
          Our Services
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
          End-to-end solutions for e-commerce and retail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            {
              title: "3PL & Fulfillment",
              desc: "Order processing, packaging and fulfillment for online retailers.",
            },
            {
              title: "Warehousing & Distribution",
              desc: "Secure and scalable storage solutions with strategic locations.",
            },
            {
              title: "Inventory Management",
              desc: "Real-time stock visibility and automated replenishment support.",
            },
            {
              title: "Last-Mile Delivery",
              desc: "Fast, reliable delivery to ensure excellent customer experiences.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-gray-800 shadow p-6 rounded-md transition hover:shadow-lg"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats / Counters Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-primary">80k+</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Yearly Projects Completed
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary">18k</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Core Carrier & Customer Relationships
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-primary">2</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">U.S. Locations</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
          Why Choose Milestone
        </h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            {
              title: "Efficiency",
              desc: "Optimized processes to reduce costs and speed deliveries.",
            },
            {
              title: "Scalability",
              desc: "Flexible solutions for businesses at every stage.",
            },
            {
              title: "Coverage",
              desc: "Nationwide reach with global shipping options.",
            },
            {
              title: "Partnership",
              desc: "We measure success by your success.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white dark:bg-gray-800 rounded shadow transition hover:shadow-lg"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
