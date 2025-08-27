import React from "react";
import { motion } from "framer-motion";
import Sparkle from '../components/Sparkle';

export default function Home({ Athena }) {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white relative"
      style={{ backgroundImage: "url('/images/polar-lights.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Hi, I'm Athena
        </h1>
        <p className="text-xl md:text-2xl max-w-xl drop-shadow-md">
          Software Engineer • React • Supabase • Tailwind CSS
        </p>

        <motion.button
          onClick={() => window.open('/resume.pdf', '_blank')}
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center gap-2"
        >
          <a href="/images/Resume 2025.docx" target="_blank" rel="noopener noreferrer" className="text-white">
            Resume ✨
          </a>
          <Sparkle />
        </motion.button>
      </div>
    </section>
  );
}

