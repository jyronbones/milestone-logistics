import React from "react";
import Link from "next/link";

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
          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Milestone Group Logistics</h4>
            <ul className="mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <Link href="/about" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">Careers</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">Blogs</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Contact</h4>
            <ul className="mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <a href="tel:+1234567890" className="hover:underline">Phone: (Insert Phone)</a>
              </li>
              <li>
                <a href="mailto:info@milestone.com" className="hover:underline">Email: info@milestone.com</a>
              </li>
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
