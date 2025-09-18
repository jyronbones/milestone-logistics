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
              <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                Smarter Logistics. Seamless Growth.
              </h1>
              <p className="mt-4 text-md md:text-lg max-w-2xl mx-auto text-gray-200">
                We power e-commerce and retail businesses with reliable 3PL,
                warehousing, inventory management, and last-mile delivery
                solutions
              </p>

              {/* Buttons */}
              <div className="mt-6 flex justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-900 text-white px-6 py-3 rounded-lg text-lg shadow-md transition-colors duration-300 hover:bg-blue-500"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/about"
                  className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg text-lg shadow-md transition-colors duration-300 hover:bg-gray-400"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Our Services
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-3 text-lg">
          End-to-end solutions for e-commerce and retail
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            {
              title: "3PL & Fulfillment",
              desc: "Order processing, packaging and fulfillment for online retailers",
              img: "/home/service-3pl.jpg",
            },
            {
              title: "Warehousing & Distribution",
              desc: "Secure and scalable storage solutions with strategic locations",
              img: "/home/service-warehouse.jpg",
            },
            {
              title: "Inventory Management",
              desc: "Real-time stock visibility and automated replenishment support",
              img: "/home/service-inventory.jpg",
            },
            {
              title: "Last-Mile Delivery",
              desc: "Fast, reliable delivery to ensure excellent customer experiences",
              img: "/home/service-delivery.jpg",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              {/* Image container with fixed aspect ratio */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Overlay text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-200">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats / Counters Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-5xl font-bold">80k+</h3>
            <p className="mt-2 text-lg">Yearly Projects Completed</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">18k</h3>
            <p className="mt-2 text-lg">Core Carrier & Customer Relationships</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">2</h3>
            <p className="mt-2 text-lg">U.S. Locations</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Why Choose Milestone
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-3 text-lg">
          The advantages that set us apart.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Efficiency",
              desc: "Optimized processes to reduce costs and speed deliveries",
              img: "/home/why-efficiency.jpg",
            },
            {
              title: "Scalability",
              desc: "Flexible solutions for businesses at every stage",
              img: "/home/why-scalability.jpg",
            },
            {
              title: "Coverage",
              desc: "Nationwide reach with global shipping options",
              img: "/home/why-coverage.jpg",
            },
            {
              title: "Partnership",
              desc: "We measure success by your success",
              img: "/home/why-partnership.jpg",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              {/* Image container with fixed aspect ratio */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Overlay text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-200 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
