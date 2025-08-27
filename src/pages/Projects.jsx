import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "EcoBridge",
    desc: "EcoBridge’s mission is to empower individuals with special needs through music, art, and storytelling, while also serving as an advocacy hub for families. Built with a React frontend and a Node.js + Express backend, it uses Prisma with a SQLite database to provide secure API endpoints for managing creative content, user data, and authentication. Tech Stack: Node.js, Express, Prisma, SQLite, REST API.",
    img: "/images/EcoBridge.png",
    link: "https://github.com/tokslaw7/ecobridge.git",
  },
  {
    title: "Travel Haven",
    desc: "Travel Haven is an interactive web app that helps users explore destinations, discover nearby attractions, and plan trips effortlessly. Features include location search, coordinate lookup, points-of-interest discovery, and detailed place information. Tech Stack: React, Supabase, Tailwind CSS, OpenTripMap API, JavaScript (ES6+).",
    img: "/images/Travel-Haven.png",
    link: "https://github.com/Starfoxxy/travel-planner-site.git",
  },
  {
    title: "Donezo",
    desc: "Donezo is a full-stack task management application designed for productivity and simplicity. The backend is built with Node.js, Prisma, and Supabase, featuring JWT-based authentication and role-based authorization to ensure secure access control. The frontend is a React single-page application that connects to Supabase for data management and user authentication, providing a seamless and responsive experience. Tech Stack: React, Node.js, Prisma, Supabase, JWT Authentication, REST API.",
    img: "/images/Donezo.gif",
    link: "https://github.com/Starfoxxy/Athena_J_Donezo.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-24 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-12">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 w-full max-w-6xl">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            title={p.title}
            description={p.desc}
            image={p.img}
            link={p.link}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotate: -1, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-pink-500/40 transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
            <p className="text-gray-300">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}