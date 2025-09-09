import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "EcoBridge",
    desc: "EcoBridge’s mission is to empower individuals with special needs through music, art, and storytelling.",
    tech: ["React", "Node.js", "Express", "Bootstrap", "Prisma", "SQLite", "REST API"],
    img: "src/assets/EcoBridge.png",
    live: "https://ecobridge.com",
    code: "https://github.com/tokslaw7/ecobridge.git",
  },
  {
    title: "Travel Haven",
    desc: "Travel Haven helps users explore destinations, discover attractions, and plan trips effortlessly.",
    tech: ["React", "Express", "Supabase", "Tailwind CSS", "OpenTripMap API", "JavaScript"],
    img: "src/assets/Travel-Haven.png",
    live: "https://travelhaven.com",
    code: "https://github.com/Starfoxxy/travel-planner-site.git",
  },
  {
    title: "Donezo",
    desc: "Donezo is a full-stack task management app for productivity and simplicity.",
    tech: ["React", "TailwindCSS", "DaisyUI", "React Router", "Express", "Prisma", "Supabase"],
    img: "src/assets/Donezo.gif",
    live: "https://donezo.com",
    code: "https://github.com/Starfoxxy/Athena_J_Donezo.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-slate-950 text-white text-center relative"
      style={{ backgroundImage: "url('src/assets/45200029_9077176.jpg')" }}
    >
      <h2 className="text-5xl font-extrabold mb-12 drop-shadow-lg">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-10 px-6">
        {projects.map((p, i) => (
          <motion.div
            className="relative bg-gray-900 rounded-2xl shadow-2xl p-6 hover:shadow-pink-500/40 transition overflow-hidden border-2 border-pink-600 flex flex-col items-center"
          >
            {/* Image wrapper */}
            <div className="w-full md:w-96 lg:w-[28rem] h-64 flex items-center justify-center mb-6">
              <motion.img
                src={p.img}
                alt={p.title}
                className="max-h-full max-w-full object-contain rounded-lg shadow-lg border-2 border-cyan-500"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              />
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-wider drop-shadow-2xl mb-5">
              {p.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-6 text-center">{p.desc}</p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {p.tech.map((tech, j) => (
                <motion.span
                  key={j}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 2 + j * 0.3, ease: "easeInOut" }}
                  whileHover={{ scale: 1.15, rotate: [-5, 5, 0] }}
                  className="px-3 py-1 text-sm font-bold uppercase text-white bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 
                            border-2 border-white rounded-lg shadow-[0_3px_0_rgba(0,0,0,0.5)] tracking-wider select-none cursor-pointer transition-transform"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 transition"
              >
                See Project
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={p.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500/20 transition"
              >
                See Code
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
