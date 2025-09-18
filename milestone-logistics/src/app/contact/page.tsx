"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess(false);
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("https://formspree.io/f/xwpndzvk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Failed to send message. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          Tell us about your logistics needs and we&apos;ll get back to you.
        </p>
      </section>

      {/* Form Section */}
      <section className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Details</h3>
          <p className="text-gray-700 dark:text-gray-300">Phone: (Insert Phone)</p>
          <p className="text-gray-700 dark:text-gray-300">Email: info@milestone.com</p>
          <p className="text-gray-700 dark:text-gray-300">Address: (Insert Address)</p>

          <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <h4 className="font-semibold text-gray-900 dark:text-white">Office Hours</h4>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Mon - Fri: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Send Us a Message
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 rounded border ${errors.name ? "border-red-500" : "border-gray-300"} dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded border ${errors.email ? "border-red-500" : "border-gray-300"} dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full p-3 rounded border ${errors.message ? "border-red-500" : "border-gray-300"} dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white`}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-bold shadow hover:scale-105 transition-transform disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 dark:text-green-400 font-medium mt-2">
              Thank you! Your message has been sent successfully.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
