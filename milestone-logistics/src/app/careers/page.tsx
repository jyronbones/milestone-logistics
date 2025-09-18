"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamTestimonials = [
  {
    name: "Sarah Johnson",
    role: "Logistics Coordinator",
    quote: "Milestone empowers me to grow and innovate every day. The team is supportive and collaborative."
  },
  {
    name: "David Lee",
    role: "Warehouse Associate",
    quote: "Working at Milestone has taught me the value of efficiency, technology, and teamwork."
  },
  {
    name: "Emily Chen",
    role: "Customer Support Specialist",
    quote: "I love the dynamic environment and the opportunities to learn and advance my career."
  },
];

export default function Careers() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Careers at Milestone
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          Join our team and help shape the future of logistics
        </p>
      </section>

      {/* Why Work With Us / Open Positions */}
      <section className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Why Work With Us</h3>
            <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Competitive compensation &amp; benefits</li>
              <li>Opportunities for growth and training</li>
              <li>Collaborative and dynamic team environment</li>
              <li>Focus on innovation &amp; continuous improvement</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Apply / Submit Resume</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Please send your resume and cover letter to:
          </p>
          <a
            href="mailto:careers@milestone.com"
            className="bg-blue-600 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-bold shadow hover:scale-105 transition-transform"
          >
            careers@milestone.com
          </a>
        </div>
      </section>

      {/* Hear From Our Team Carousel */}
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center">Hear From Our Team</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          slidesPerView={1}
          className="mt-6"
        >
          {teamTestimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center space-y-4">
                <p className="text-gray-700 dark:text-gray-300 text-lg italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
