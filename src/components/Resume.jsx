import React from "react";
import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 bg-background text-center">
      <h2 className="text-3xl font-bold text-accent mb-8">My Resume</h2>

      <div className="max-w-5xl mx-auto w-full">
        <iframe
          src={resume}
          title="Rohith Resume"
          className="w-full h-[600px] rounded-xl shadow-lg border border-glow"
        ></iframe>
      </div>

      <div className="mt-6">
        <a
          href={resume}
          download="Rohith_Resume.pdf"
          className="inline-block bg-accent text-background px-6 py-3 rounded-full font-semibold hover:bg-whiteText hover:text-accent transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
