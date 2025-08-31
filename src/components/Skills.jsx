import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs,
  FaPhp, FaJava, FaPython, FaDatabase, FaGitAlt, FaGithub
} from "react-icons/fa";

const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "MySQL", icon: <FaDatabase /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <h2 className="text-3xl font-bold text-center text-accent mb-12">Technical Skills</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-3 bg-card px-5 py-4 rounded-xl text-whiteText hover:shadow-[0_0_20px_#A020F0] transition"
          >
            <div className="text-2xl text-accent">{skill.icon}</div>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
