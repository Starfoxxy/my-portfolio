import React from "react";
import { motion } from "framer-motion";
import Sparkle from '../components/Sparkle';

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('src/assets/Tech-Mountain.jpg')" }}
    >
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
          className="mt-6 px-6 py-3 bg-pink-700 text-white rounded-lg hover:bg-pink-600 transition"
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

