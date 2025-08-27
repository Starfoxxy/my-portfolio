import React from "react";
import { motion } from "framer-motion";
import Sparkle from '../components/Sparkle';

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/your-background.jpg')" }}
    >
      {/* Optional overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-6xl font-bold mb-4 text-white">
          Hi, I'm Athena Jacob
        </h1>
        <p className="text-2xl text-gray-200">
          Software Engineer | React & Supabase
        </p>
        <motion.button
          onClick={() => window.open('/resume.pdf', '_blank')}
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white">
          Resume ✨
        </a>
          <Sparkle />
        </motion.button>
      </div>
    </section>
  );
}

