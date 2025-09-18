"use client";

import Link from "next/link";

const samplePosts = [
  {
    id: "1",
    title: "How 3PL Partnerships Help E-Commerce Businesses Scale",
    excerpt: "Discover the benefits of working with a 3PL to reduce overhead and speed up delivery.",
  },
  {
    id: "2",
    title: "Why Last-Mile Delivery Defines Customer Satisfaction",
    excerpt: "Last-mile is the final touchpoint — here's how to optimize it for retention.",
  },
  {
    id: "3",
    title: "Top Inventory Management Strategies for Online Stores",
    excerpt: "Techniques and tools to reduce stockouts and overstock while improving cash flow."
  }
];

export default function Blogs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Insights & News</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Trends, tips, and strategies on logistics and e-commerce fulfillment.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {samplePosts.map(post => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 shadow rounded p-6 transition hover:shadow-lg"
          >
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{post.title}</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{post.excerpt}</p>
            <div className="mt-4">
              <Link href={`/blogs/${post.id}`}>
                <span className="text-primary dark:text-primary font-medium cursor-pointer hover:underline">
                  Read more →
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
