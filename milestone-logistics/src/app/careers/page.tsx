"use client";

import React from "react";

export default function Careers() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Careers at Milestone</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Join our team and help shape the future of logistics.
      </p>

      <section className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">Why work with us</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Competitive compensation & benefits</li>
            <li>Opportunities for growth and training</li>
            <li>Collaborative and dynamic team environment</li>
            <li>Focus on innovation & continuous improvement</li>
          </ul>

          <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">Open Positions</h4>
          <ul className="mt-2 text-gray-700 dark:text-gray-300">
            <li>Warehouse Associate</li>
            <li>Logistics Coordinator</li>
            <li>Delivery Driver</li>
            <li>Customer Support Specialist</li>
          </ul>
        </div>

        <div className="flex flex-col items-start bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Apply / Submit Resume</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Please send your resume and cover letter to:
          </p>
          <a
            href="mailto:careers@milestone.com"
            className="bg-gray-800 dark:bg-white text-white dark:text-gray-900 px-5 py-3 rounded font-bold shadow hover:scale-105 transition-transform"
          >
            careers@milestone.com
          </a>
        </div>
      </section>
    </div>
  );
}
