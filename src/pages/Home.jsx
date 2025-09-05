import React from "react";
import { motion } from "framer-motion";
import Sparkle from '../components/Sparkle';

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('src/assets/Tech.png')" }}
    >
      <motion.img
        src="/Professional Headshot Original.JPG"
        alt="Athena Jacob"
        className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-xl object-cover mb-6 md:mb-0 md:mr-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">
        <h1 className="text-6xl font-bold mb-4 text-white">
          Hi, I'm Athena Jacob
        </h1>
        <p className="text-2xl text-gray-200">
          Software Engineer | React & SQL
        </p>
        <motion.button
          onClick={() => window.open('/resume.pdf', '_blank')}
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
        <a href="/Athena Jacob Resume 2025 .md" target="_blank" rel="noopener noreferrer" className="text-white">
          Resume ✨
        </a>
          <Sparkle />
        </motion.button>
      </div>
    </section>
  );
}

