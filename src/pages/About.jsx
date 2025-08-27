import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-24 bg-gray-800 text-white text-center"
      style={{
        background: "linear-gradient(135deg, #0F2027, #203A43, #2C5364)",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
    <div className="relative flex flex-col items-center justify-center"></div>
      <div className="absolute inset-0 bg-gray-900 -z-10"></div>
        <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 opacity-50 -z-10"></div>
      <div className="relative z-10 mt-0">
        <img
          src="/images/Professional-Headshot.png"
          alt="Athena Jacob"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple-600 shadow-lg mx-auto"
        />
      </div>

      <div className="max-w-xl text-center mt-5">
        <h2 className="text-4xl font-bold mb-4 text-white tracking-wide">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hi, I’m <span className="text-blue-500 font-semibold">Athena Jacob</span>!<br /><br />

          I started my career as a Product Manager in digital marketing, where I learned how to craft strategies, connect with audiences, and drive impactful campaigns. Along the way, I discovered my true passion lies in building technology that empowers people, which led me to transition into <span className="text-blue-500 font-semibold">software engineering</span>.<br /><br />

          From a young age, I’ve been fascinated by robotics and interactive technologies; from controlling battle bots to immersive headset-based games. That curiosity sparked my love for creating solutions that combine creativity, logic, and hands-on innovation.<br /><br />

          My ultimate goal is to become an <span className="text-purple-500 font-semibold">entrepreneur and a leader</span>, building meaningful products and using technology as a force for good. I’m deeply committed to helping those in need, giving a voice to the marginalized, and creating opportunities for people who have faced hardship or violence. In every project I tackle, I aim to merge technical excellence with empathy, designing software that makes a real difference in people’s lives.
        </p>
      </div>
    </motion.section>
  );
}
