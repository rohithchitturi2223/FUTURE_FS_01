import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Canteen Crafter",
    desc: "Responsive web app to manage food items using HTML, CSS & Bootstrap.",
    tech: ["HTML", "CSS", "Bootstrap"],
    link: "https://github.com/rohith-chitturi/canteen-crafter",
  },
  {
    title: "Hackathon Manager",
    desc: "A Firebase-based project to handle hackathon events and participants.",
    tech: ["React", "Firebase", "Auth"],
    link: "https://github.com/rohith-chitturi/hackathon-manager",
  },
  {
    title: "PG Life",
    desc: "Room listing app built using PHP and MySQL with login system.",
    tech: ["PHP", "MySQL", "JavaScript"],
    link: "https://github.com/rohith-chitturi/pg-life",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <h2 className="text-3xl font-bold text-center text-accent mb-12">Projects</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-card p-6 rounded-xl border border-glow shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-whiteText mb-2">{proj.title}</h3>
            <p className="text-grayText text-sm mb-4">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {proj.tech.map((t, j) => (
                <span
                  key={j}
                  className="text-xs bg-glow text-accent px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={proj.link}
              className="text-accent underline text-sm hover:text-whiteText"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
