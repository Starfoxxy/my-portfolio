import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "EcoBridge",
    desc: "EcoBridge’s mission is to empower individuals with special needs through music, art, and storytelling.",
    tech: ["React", "Node.js", "Express", "Prisma", "SQLite", "REST API"],
    img: "/EcoBridge.png",
    link: "https://github.com/tokslaw7/ecobridge.git",
  },
  {
    title: "Travel Haven",
    desc: "Travel Haven helps users explore destinations, discover attractions, and plan trips effortlessly.",
    tech: ["React", "Supabase", "Tailwind CSS", "OpenTripMap API", "JavaScript"],
    img: "/Travel-Haven.png",
    link: "https://github.com/Starfoxxy/travel-planner-site.git",
  },
  {
    title: "Donezo",
    desc: "Donezo is a full-stack task management app for productivity and simplicity.",
    tech: ["React", "Node.js", "Prisma", "Supabase", "JWT Auth", "REST API"],
    img: "/Donezo.gif",
    link: "https://github.com/Starfoxxy/Athena_J_Donezo.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-slate-950 text-white text-center"
      style={{ backgroundImage: "url('src/assets/45200029_9077176.jpg')" }}
    >
      <h2 className="text-5xl font-extrabold mb-12 drop-shadow-lg">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-10 px-6">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ rotate: -1, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gray-900 rounded-2xl shadow-2xl p-6 hover:shadow-pink-500/70 transition overflow-hidden border-2 border-pink-600"
          >
            {/* Big game-style title */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-wider drop-shadow-2xl">
              {p.title}
            </h3>

            {/* Project description */}
            <p className="text-gray-300 mb-4">{p.desc}</p>

            {/* Gamer-style tech badges */}
            <div className="flex flex-wrap gap-3 justify-center">
              {p.tech.map((tech, j) => (
                <motion.span
                  key={j}
                  whileHover={{ scale: 1.2, rotate: [-5, 5, 0] }}
                  className="px-4 py-2 text-sm font-bold uppercase text-white bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 
                             border-2 border-white rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.5)] 
                             tracking-wider select-none cursor-pointer transition-transform"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
