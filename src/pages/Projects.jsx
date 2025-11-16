import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "TAP Events Platform",
    desc: "Full-featured events platform for the Teacher Accelerator Program (TAP) with dynamic filtering, responsive UI, and HubSpot CRM integration.",
    tech: ["Next.js", "React", "Tailwind CSS", "HubSpot API", "TypeScript"],
    img: "src/assets/TAP.png",
    live: "https://teacheraccelerator.org/",
    featured: true,
  },
  {
    title: "FISCIO",
    desc: "Full-stack finance dashboard with ML revenue forecasting model, advanced data visualization with Material-UI DataGrid, and comprehensive Jest test suite for reliable performance.",
    tech: ["React", "TypeScript", "Redux Toolkit", "Material-UI", "MongoDB", "Jest", "Machine Learning"],
    img: "src/assets/FISCIO.jpeg",
    code: "#",
  },
  {
    title: "EcoBridge",
    desc: "Full-stack advocacy platform empowering individuals with special needs and their families to share stories, resources, and blogs through music, art, and storytelling. Features RESTful API, authentication, and responsive UI to help families better support their loved ones.",
    tech: ["React", "Node.js", "Express", "Bootstrap", "Prisma", "SQLite", "REST API"],
    img: "src/assets/EcoBridge.png",
    code: "https://github.com/tokslaw7/ecobridge.git",
  },
  {
    title: "LearnMate",
    desc: "Bloomberg Hackathon project: Student study-matching mobile app with smart matchmaking algorithm, collaborative study rooms, and gamification features.",
    tech: ["Figma", "UI/UX Design", "API Design", "Data Modeling", "Algorithm Design"],
    img: "src/assets/LearnMate.png",
    live: "https://www.figma.com/design/NjicAVLgBXAMqpXlp1NOHk/LearnMate---Athena-Jacob?node-id=0-1&t=x9KIpc4XrAt1BpY1-1",
  },
  {
    title: "Travel Haven",
    desc: "Interactive travel planning application enabling users to explore destinations worldwide with real-time data synchronization and instant cross-device updates. Built with PostgreSQL authentication and OpenTripMap API integration for reliable performance.",
    tech: ["React", "Express", "Supabase", "Tailwind CSS", "OpenTripMap API", "JavaScript"],
    img: "src/assets/Travel-Haven.png",
    code: "https://github.com/Starfoxxy/travel-planner-site.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-6"
      style={{ 
        background: 'linear-gradient(135deg, #4d0099 0%, #ff6b35 30%, #ff006e 60%, #330066 100%)'
      }}
    >
      {/* Pixel grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#ff00ff 1px, transparent 1px),
            linear-gradient(90deg, #ff00ff 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Arcade-style header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block border-4 border-orange-400 px-8 py-4 mb-4"
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              boxShadow: '0 0 30px rgba(255, 107, 53, 0.6), 0 0 60px rgba(255, 0, 110, 0.4)',
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}
          >
            <h2 className="text-5xl font-extrabold text-white font-mono mb-2"
              style={{
                textShadow: '3px 3px 0 #ff6b35, -2px -2px 0 #00ffff'
              }}
            >
              [FEATURED BUILDS]
            </h2>
            <p className="text-orange-400 font-mono text-sm">
              ▸ GAME PROJECTS UNLOCKED ▸
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative border-4 bg-black overflow-hidden ${
                p.featured ? 'lg:col-span-2' : ''
              }`}
              style={{
                borderColor: p.featured ? '#ff6b35' : i % 2 === 0 ? '#ff00ff' : '#00ffff',
                boxShadow: p.featured 
                  ? '0 0 30px rgba(255, 107, 53, 0.5), 0 8px 0 rgba(0, 0, 0, 0.5)' 
                  : '0 0 20px rgba(255, 0, 255, 0.3), 0 6px 0 rgba(0, 0, 0, 0.5)',
                clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
              }}
            >
              {/* Featured badge */}
              {p.featured && (
                <div className="absolute top-4 right-4 z-10 border-4 border-orange-400 bg-black px-4 py-2"
                  style={{
                    boxShadow: '0 0 20px rgba(255, 107, 53, 0.8)',
                    clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
                  }}
                >
                  <span className="text-orange-400 font-mono font-bold text-sm">★ FEATURED ★</span>
                </div>
              )}

              {/* Image container */}
              <div className={`relative overflow-hidden ${p.featured ? 'h-80 md:h-96' : 'h-64'}`}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1))'
                }}
              >
                <motion.img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    imageRendering: 'crisp-edges'
                  }}
                />
                {/* Scan line effect */}
                <motion.div
                  animate={{ y: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(255, 0, 255, 0.1) 50%, transparent 100%)',
                    height: '20%'
                  }}
                />
              </div>

              {/* Content */}
              <div className={`p-6 ${p.featured ? 'md:p-8' : ''}`}>
                {/* Title */}
                <h3 className={`font-extrabold text-white tracking-wider mb-3 font-mono ${
                  p.featured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
                }`}
                  style={{
                    textShadow: '2px 2px 0 #ff6b35'
                  }}
                >
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed font-mono text-sm">{p.desc}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {p.tech.map((tech, j) => (
                    <motion.span
                      key={j}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="px-3 py-1 text-xs font-bold font-mono border-2"
                      style={{
                        background: `linear-gradient(135deg, ${
                          j % 3 === 0 ? '#9900ff, #ff00ff' : 
                          j % 3 === 1 ? '#ff6b35, #ff006e' : 
                          '#00ffff, #0099ff'
                        })`,
                        borderColor: j % 3 === 0 ? '#ff00ff' : j % 3 === 1 ? '#ff6b35' : '#00ffff',
                        color: 'white',
                        boxShadow: `2px 2px 0 rgba(0, 0, 0, 0.5)`,
                        clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)'
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons - arcade style */}
                <div className="flex gap-4 flex-wrap">
                  {p.live !== '#' && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-4 border-cyan-400 bg-transparent px-6 py-2 text-cyan-400 font-mono font-bold hover:bg-cyan-400 hover:text-black transition"
                      style={{
                        clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                        boxShadow: '3px 3px 0 rgba(0, 255, 255, 0.5)'
                      }}
                    >
                      [PLAY DEMO]
                    </a>
                  )}
                  {p.code !== '#' && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-4 border-pink-500 bg-transparent px-6 py-2 text-pink-400 font-mono font-bold hover:bg-pink-500 hover:text-white transition"
                      style={{
                        clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                        boxShadow: '3px 3px 0 rgba(255, 0, 255, 0.5)'
                      }}
                    >
                      [VIEW CODE]
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="h-2" style={{
                background: `linear-gradient(90deg, ${
                  p.featured ? '#ff6b35, #ff006e, #9900ff' :
                  i % 2 === 0 ? '#ff00ff, #00ffff' : '#00ffff, #ff00ff'
                })`
              }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}