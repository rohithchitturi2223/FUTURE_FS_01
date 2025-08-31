import React from "react";
import { motion } from "framer-motion";
import Typewriter from "react-typewriter-effect";
import profile from "../assets/rohith.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-8 pt-24 bg-background"
    >
      {/* Left: Text */}
      <div className="flex-1 space-y-6">
        <h2 className="text-xl text-grayText">Hello, I'm</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-whiteText">
          CHITTURI NAGA RAJA <br />
          TEJA <span className="text-accent">ROHITH</span>
        </h1>

        {/* Typewriter Animated Text */}
        <div className="text-lg md:text-xl font-light text-grayText mb-6">
          <Typewriter
            textStyle={{
              fontWeight: 500,
              color: "#A020F0", // neon purple
            }}
            startDelay={500}
            cursorColor="#FFD600"
            multiText={[
              "Full-Stack Developer",
              "React | Firebase | MongoDB | Java",
              "Clean Code. Clean Design.",
            ]}
            multiTextDelay={1500}
            typeSpeed={70}
            deleteSpeed={30}
            loop
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-accent text-whiteText px-6 py-2 rounded-full hover:bg-whiteText hover:text-accent transition font-medium"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="border border-accent px-6 py-2 rounded-full text-accent hover:bg-accent hover:text-background transition font-medium"
          >
            Projects
          </a>
        </div>
      </div>

      {/* Right: Glowing Image */}
      <motion.div
  className="flex-1 mt-10 md:mt-0 flex justify-center items-center"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1 }}
>
  <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-accent to-purple-900">
    <div className="w-full h-full rounded-full bg-background p-1 animate-glow border-4 border-glow">
      <img
        src={profile}
        alt="Rohith"
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  </div>
</motion.div>

    </section>
  );
};

export default Hero;
