import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Building My Portfolio with React",
    date: "July 2025",
    desc: "How I designed, developed and deployed my personal portfolio using React, Tailwind and Framer Motion.",
    link: "#",
  },
  {
    title: "Top Firebase Features You Must Know",
    date: "June 2025",
    desc: "Explore the key features of Firebase — Auth, Realtime DB, Hosting, and more, with real project use cases.",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6 bg-background max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-accent mb-12">My Blog</h2>

      <div className="grid sm:grid-cols-2 gap-10">
        {blogPosts.map((post, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-card p-6 rounded-xl border border-glow shadow-md transition"
          >
            <p className="text-sm text-grayText mb-1">{post.date}</p>
            <h3 className="text-xl font-semibold text-whiteText mb-2">{post.title}</h3>
            <p className="text-grayText mb-4">{post.desc}</p>
            <a
              href={post.link}
              className="text-accent underline text-sm hover:text-whiteText"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
