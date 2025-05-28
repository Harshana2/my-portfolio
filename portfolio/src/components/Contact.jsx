import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    setStatus("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full bg-white dark:bg-[#0e0e0e] text-black dark:text-white py-16 px-6 sm:px-12 lg:px-24 xl:px-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading aligned with "Works" */}
        <div className="relative mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold">Contact</h2>
          <div className="absolute -bottom-5 left-0 w-full h-px bg-gray-300 dark:bg-gray-700"></div>
        </div>

        {/* Form centered */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-black dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-black dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] text-black dark:text-white px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white dark:bg-white dark:text-black font-semibold py-3 rounded-md border border-gray-700 hover:opacity-90 transition duration-300"
            >
              Send Message
            </button>

            {status && (
              <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
