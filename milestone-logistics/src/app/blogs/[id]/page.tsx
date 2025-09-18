"use client";

import { useParams, useRouter } from "next/navigation";

const blogPosts = {
    "1": {
        title: "How 3PL Partnerships Help E-Commerce Businesses Scale",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vivamus lacinia odio vitae vestibulum vestibulum. 
Cras venenatis euismod malesuada.`
    },
    "2": {
        title: "Why Last-Mile Delivery Defines Customer Satisfaction",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vestibulum in neque et nisl. 
Curabitur consequat.`
    },
    "3": {
        title: "Top Inventory Management Strategies for Online Stores",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Praesent sit amet ligula eget metus ullamcorper tincidunt. 
Mauris euismod.`
    }
};

export default function BlogPage() {
    const { id } = useParams();
    const router = useRouter();
    const post = blogPosts[id as keyof typeof blogPosts];

    if (!post) return <p className="text-center mt-20">Post not found.</p>;

    return (
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
            {/* Back Button */}
            <button
                onClick={() => router.push("/blogs")}
                className="px-4 py-2 bg-gray-200 text-gray-900 rounded-lg shadow hover:bg-gray-300 transition"
            >
                ← Back to Blogs
            </button>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{post.title}</h1>

            <div className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {post.content.split("\n").map((para, idx) => (
                    <p key={idx} className="mb-4">{para}</p>
                ))}
            </div>
        </div>
    );
}
