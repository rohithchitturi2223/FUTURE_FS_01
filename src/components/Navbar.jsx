import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-background text-whiteText py-4 px-6 shadow-sm flex justify-between items-center">
      <h1 className="text-2xl font-bold text-accent">Rohith</h1>
      <ul className="flex gap-6 text-sm">
        <li><a href="#hero" className="hover:text-accent transition">Home</a></li>
        <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
        <li><a href="#skills" className="hover:text-accent transition">Skills</a></li>
        <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
