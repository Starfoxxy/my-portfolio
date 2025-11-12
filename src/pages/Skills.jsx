import React from "react";
import { motion } from "framer-motion";

const skills = [
  { 
    category: "FRONTEND",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Redux Toolkit", "Tailwind CSS", "Bootstrap", "Material-UI", "Recharts"],
    color: "#ff00ff"
  },
  { 
    category: "BACKEND",
    items: ["Node.js", "Express", "Prisma"],
    color: "#00ff66"
  },
  { 
    category: "DATABASE",
    items: ["PostgreSQL", "MongoDB", "SQLite", "Supabase"],
    color: "#ff0099"
  },
  { 
    category: "TOOLS",
    items: ["VS Code", "GitHub", "Figma", "Notion", "Jira", "Chrome DevTools", "Jest", "React Testing Library", "Prompt Engineering"],
    color: "#ff6600"
  },
  { 
    category: "MARKETING & OPERATIONS",
    items: ["Google Analytics", "Google Ads", "HubSpot", "SEMRush", "Mailchimp", "WordPress", "Excel", "Canva"],
    color: "#00ffff"
  },
  { 
    category: "DEVOPS & DEPLOYMENT",
    items: ["Vite", "Docker", "Vercel", "Fly.io", "Git"],
    color: "#ccff00"
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center py-20 px-6"
      style={{ 
        background: 'linear-gradient(135deg, #1a0033 0%, #330066 50%, #4d0099 100%)'
      }}
    >
      {/* Pixel grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#ff00ff 1px, transparent 1px),
            linear-gradient(90deg, #ff00ff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        {/* Arcade Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block border-4 border-cyan-400 px-8 py-4"
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)',
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono mb-2"
              style={{
                textShadow: '3px 3px 0 #00ffff'
              }}
            >
              [SKILL TREE]
            </h2>
            <p className="text-cyan-400 font-mono text-sm">
              ▸ UNLOCKED ABILITIES ▸
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-4 bg-black relative overflow-hidden"
              style={{
                borderColor: skillGroup.color,
                boxShadow: `0 0 15px ${skillGroup.color}40`,
                clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
              }}
            >
              {/* Category header - arcade style */}
              <div className="border-b-4 p-4 relative"
                style={{
                  borderColor: skillGroup.color,
                  background: `linear-gradient(135deg, ${skillGroup.color}20, transparent)`
                }}
              >
                <div className="flex items-center gap-2 justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-2xl" style={{ color: skillGroup.color }}>◆</span>
                    <h3 className="text-xl font-bold text-white font-mono">{skillGroup.category}</h3>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 border-2"
                    style={{
                      borderColor: skillGroup.color,
                      color: skillGroup.color
                    }}
                  >
                    LVL MAX
                  </span>
                </div>
              </div>

              {/* Skills list */}
              <div className="p-4 space-y-2">
                {skillGroup.items.map((skill, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-pink-400 font-mono">▸</span>
                    <span className="text-gray-300 font-mono text-sm hover:text-white transition cursor-default">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Power meter */}
              <div className="border-t-4 p-3" style={{ borderColor: skillGroup.color }}>
                <div className="h-2 bg-gray-900 border-2 border-gray-700 relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-full"
                    style={{
                      background: `linear-gradient(90deg, ${skillGroup.color}, ${skillGroup.color}80)`
                    }}
                  >
                    {/* Animated scan line */}
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 w-1/4"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${skillGroup.color}, transparent)`
                      }}
                    ></motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block border-4 border-pink-500 bg-black px-8 py-4"
            style={{
              boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
              clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
            }}
          >
            <p className="text-pink-400 font-mono text-sm mb-1">★ ACHIEVEMENT UNLOCKED ★</p>
            <p className="text-white font-mono text-lg font-bold">900+ HOURS TRAINING COMPLETE</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}