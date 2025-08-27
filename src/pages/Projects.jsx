import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    desc: "Built with React, Supabase, Prisma",
    link: "https://github.com/your-repo",
  },
  {
    title: "Project Two",
    desc: "API-powered app with Node.js and Express",
    link: "https://github.com/your-repo",
  },
  {
    title: "Project Three",
    desc: "Full-stack app with authentication",
    link: "https://github.com/your-repo",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-12">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {projects.map((p, i) => (
          <motion.a
            key={i}
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