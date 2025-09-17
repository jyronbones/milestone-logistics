"use client";

import React from "react";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Tell us about your logistics needs and we'll get back to you.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">Contact Details</h3>
          <p className="text-gray-700 dark:text-gray-300">Phone: (Insert Phone)</p>
          <p className="text-gray-700 dark:text-gray-300">Email: info@milestone.com</p>
          <p className="text-gray-700 dark:text-gray-300">Address: (Insert Address)</p>

          <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h4 className="font-semibold text-gray-900 dark:text-white">Office Hours</h4>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Mon - Fri: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Send Email CTA */}
        <div className="flex flex-col items-start justify-center bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Send Us a Message</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Click the button below to email us your inquiry:
          </p>
          <a
            href="mailto:info@milestone.com"
            className="bg-gray-800 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded font-bold shadow hover:scale-105 transition-transform"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}
