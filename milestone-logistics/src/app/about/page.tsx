import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            About Milestone Group Logistics
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Milestone Group Logistics is a full-service 3PL partner focused on helping e-commerce and retail
            businesses optimize their supply chains. From Shopify merchants to large retailers, our goal is to
            make logistics simple and reliable.
          </p>

          <h3 className="mt-6 font-semibold text-gray-900 dark:text-white">Our Mission</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            To deliver world-class logistics solutions that empower businesses to scale with confidence.
          </p>

          <h3 className="mt-6 font-semibold text-gray-900 dark:text-white">Core Values</h3>
          <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Excellence</li>
            <li>Customer-first</li>
          </ul>
        </div>

        <div className="rounded overflow-hidden shadow">
          <Image
            src="/warehouse.jpg"
            alt="Warehouse"
            width={800}
            height={520}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Services We Provide</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "3PL & Fulfillment", desc: "End-to-end fulfillment for e-commerce & retail." },
            { title: "Inventory Management", desc: "Real-time visibility, forecasting and reporting." },
            { title: "Last-Mile Delivery", desc: "Same-day & scheduled delivery options." },
            { title: "Reverse Logistics", desc: "Efficient returns management and processing." },
            { title: "Freight Forwarding", desc: "Domestic & international freight services." },
          ].map((service) => (
            <div
              key={service.title}
              className="p-4 bg-white dark:bg-gray-800 shadow rounded transition hover:shadow-lg"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white">{service.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
