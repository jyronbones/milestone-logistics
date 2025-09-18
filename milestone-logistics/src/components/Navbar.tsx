"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-40">
      <div className="w-full flex items-center justify-between px-6 h-16 md:h-24">

        {/* Logo */}
        <div className="flex-shrink-0 mx-auto md:mx-0 h-full">
          <Link href="/" className="block relative w-48 md:w-64 h-full">
            <Image
              src="/logo.png"
              alt="Milestone Group Logistics"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 192px, 256px"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 ml-auto h-full">
          <nav className="flex items-center gap-6 text-sm h-full">
            <Link href="/" className="hover:text-primary hover:underline text-gray-800 dark:text-gray-200">Home</Link>
            <Link href="/about" className="hover:text-primary hover:underline text-gray-800 dark:text-gray-200">About Us</Link>
            <Link href="/blogs" className="hover:text-primary hover:underline text-gray-800 dark:text-gray-200">Blogs</Link>
            <Link href="/careers" className="hover:text-primary hover:underline text-gray-800 dark:text-gray-200">Careers</Link>
            <Link href="/contact" className="hover:text-primary hover:underline text-gray-800 dark:text-gray-200">Contact</Link>
          </nav>

          <Link
            href="/contact"
            className="ml-6 font-bold bg-primary text-white px-5 py-2 rounded-md text-sm shadow-lg transition-transform transform hover:scale-105 hover:bg-primary/90"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-6 top-1/2 -translate-y-1/2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 px-6 py-4 space-y-4">
          <nav className="flex flex-col gap-4 text-sm">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-primary hover:underline text-gray-800 dark:text-gray-200">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-primary hover:underline text-gray-800 dark:text-gray-200">About Us</Link>
            <Link href="/blogs" onClick={() => setIsOpen(false)} className="hover:text-primary hover:underline text-gray-800 dark:text-gray-200">Blogs</Link>
            <Link href="/careers" onClick={() => setIsOpen(false)} className="hover:text-primary hover:underline text-gray-800 dark:text-gray-200">Careers</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-primary hover:underline text-gray-800 dark:text-gray-200">Contact</Link>
          </nav>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="inline-block bg-primary text-white px-5 py-2 rounded-md text-sm font-bold shadow hover:scale-105 transition-transform"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
