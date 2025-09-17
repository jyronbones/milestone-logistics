import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
            Milestone Group Logistics
          </h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 max-w-sm">
            End-to-end logistics & 3PL solutions for e-commerce and retail. Warehousing, fulfillment,
            inventory management and delivery.
          </p>
        </div>

        <div className="flex gap-12">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Company</h4>
            <ul className="mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Contact</h4>
            <ul className="mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li>Phone: (Insert Phone)</li>
              <li>Email: info@milestone.com</li>
              <li>Address: (Insert Address)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 text-center py-4 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Milestone Group Logistics — All rights reserved.
      </div>
    </footer>
  );
}
