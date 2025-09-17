import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-40">
      <div className="w-full flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3 flex-shrink-0">
          <Link href="/" className="flex items-center gap-3">
<div className="w-18 h-18 relative">
  <Image
    src="/logo.png"
    alt="Milestone Group Logistics"
    fill
    style={{ objectFit: "contain" }}
    priority
    sizes="(max-width: 768px) 48px, 72px"
  />
</div>
            <span className="font-bold text-2xl md:text-3xl text-gray-900 dark:text-white font-poppins">
              Milestone Group Logistics
            </span>
          </Link>
        </div>

        {/* Desktop nav + CTA */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-primary text-gray-800 dark:text-gray-200">Home</Link>
            <Link href="/about" className="hover:text-primary text-gray-800 dark:text-gray-200">About Us</Link>
            <Link href="/blogs" className="hover:text-primary text-gray-800 dark:text-gray-200">Blogs</Link>
            <Link href="/careers" className="hover:text-primary text-gray-800 dark:text-gray-200">Careers</Link>
            <Link href="/contact" className="hover:text-primary text-gray-800 dark:text-gray-200">Contact</Link>
          </nav>

          <Link
            href="/contact"
            className="ml-6 font-bold bg-primary text-white px-5 py-2 rounded-md text-sm shadow-lg transition-transform transform hover:scale-105 hover:bg-primary/90"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold"
          >
            Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
