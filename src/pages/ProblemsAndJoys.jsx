import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const entries = [
  {
    type: "joy",
    title: "Building This Portfolio",
    date: "October 2025",
    content: "Creating this portfolio was an incredible journey. I got to experiment with retro game aesthetics, vibrant color gradients, and angular designs. The challenge of merging video game vibes with professional presentation taught me so much about design systems and creative problem-solving.",
    tags: ["React", "Framer Motion", "Design", "Game UI"],
  },
  {
    type: "problem",
    title: "The HubSpot Integration Challenge",
    date: "September 2025",
    content: "While building the TAP Events platform, integrating HubSpot's API was trickier than expected. The documentation was extensive but sometimes unclear about rate limits and webhook handling. After days of debugging, I learned to implement proper error handling and retry logic with a middleware layer that batched requests intelligently.",
    tags: ["Next.js", "HubSpot API", "Problem Solving"],
  },
  {
    type: "joy",
    title: "First Full-Stack Deploy",
    date: "August 2025",
    content: "Deploying my first full-stack application from scratch was exhilarating! Watching the build process complete successfully, seeing the database migrations run, and finally clicking that deployed URL to see my app live was pure magic. All those hours learning Docker and CI/CD finally clicked.",
    tags: ["Deployment", "Docker", "Full Stack"],
  },
  {
    type: "problem",
    title: "State Management Headaches",
    date: "July 2025",
    content: "Working on Travel Haven, I initially tried to manage all state with useState and quickly created prop-drilling hell. Components were re-rendering unnecessarily. Learning when to lift state up, when to use Context, and when to keep it local was a game-changer. Sometimes the simplest solution is the right one.",
    tags: ["React", "State Management", "Debugging"],
  },
  {
    type: "joy",
    title: "Mentoring Fellow Developers",
    date: "June 2025",
    content: "At The Knowledge House, helping other fellows debug their code has made me a better developer. There's something special about that 'aha!' moment when someone finally gets it. Teaching forces you to truly understand something yourself, and I've learned so much from the questions people ask.",
    tags: ["Mentorship", "Teaching", "Community"],
  },
  {
    type: "problem",
    title: "Accessibility Wasn't Optional",
    date: "May 2025",
    content: "I built an entire component library before realizing it was barely accessible. No keyboard navigation, poor color contrast, missing ARIA labels. Refactoring everything taught me that accessibility isn't something you add later—it needs to be baked into your workflow from day one.",
    tags: ["Accessibility", "Best Practices", "Learning"],
  },
];

export default function ProblemsAndJoys() {
  const [filter, setFilter] = useState("all");

  const filteredEntries = filter === "all" 
    ? entries 
    : entries.filter(entry => entry.type === filter);

  return (
    <section
      id="problems-joys"
      className="relative min-h-screen py-20 px-6"
      style={{ 
        background: 'linear-gradient(135deg, #1a0033 0%, #4d0099 30%, #ff006e 60%, #ff6b35 100%)'
      }}
    >
      {/* Pixel grid */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: `
            linear-gradient(#ff00ff 1px, transparent 1px),
            linear-gradient(90deg, #ff00ff 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          height: '100%'
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block border-4 border-purple-500 px-8 py-4"
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              boxShadow: '0 0 30px rgba(153, 0, 255, 0.6)',
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}
          >
            <h2 className="text-5xl font-extrabold text-white font-mono mb-2"
              style={{ textShadow: '3px 3px 0 #9900ff' }}
            >
              [GAME LOG]
            </h2>
            <p className="text-purple-400 font-mono text-sm">
              ▸ WINS & LOSSES ▸
            </p>
          </div>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 justify-center mb-12 flex-wrap"
        >
          {[
            { label: 'ALL', value: 'all', color: '#00ffff' },
            { label: 'PROBLEMS', value: 'problem', color: '#ff006e' },
            { label: 'JOYS', value: 'joy', color: '#ff6b35' }
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-8 py-3 border-4 font-mono font-bold transition ${
                filter === btn.value ? 'text-black' : 'bg-transparent text-white'
              }`}
              style={{
                borderColor: btn.color,
                backgroundColor: filter === btn.value ? btn.color : 'transparent',
                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                boxShadow: filter === btn.value ? `0 0 20px ${btn.color}80` : `3px 3px 0 ${btn.color}80`
              }}
            >
              [{btn.label}]
            </button>
          ))}
        </motion.div>

        {/* Entries */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredEntries.map((entry, i) => (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.1 }}
                className="border-4 bg-black p-6"
                style={{
                  borderColor: entry.type === 'joy' ? '#ff6b35' : '#ff006e',
                  boxShadow: `0 0 20px ${entry.type === 'joy' ? 'rgba(255, 107, 53, 0.3)' : 'rgba(255, 0, 110, 0.3)'}, 0 6px 0 rgba(0, 0, 0, 0.5)`,
                  clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <span
                      className="px-3 py-1 text-xs font-bold font-mono border-2"
                      style={{
                        borderColor: entry.type === 'joy' ? '#ff6b35' : '#ff006e',
                        color: entry.type === 'joy' ? '#ff6b35' : '#ff006e',
                        background: entry.type === 'joy' ? 'rgba(255, 107, 53, 0.2)' : 'rgba(255, 0, 110, 0.2)',
                        clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)'
                      }}
                    >
                      {entry.type === 'joy' ? '✓ WIN' : '✗ BOSS'}
                    </span>
                    <span className="text-gray-500 text-sm font-mono">{entry.date}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white font-mono mb-3"
                  style={{
                    textShadow: `2px 2px 0 ${entry.type === 'joy' ? '#ff6b35' : '#ff006e'}`
                  }}
                >
                  {entry.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-4 font-mono text-sm">{entry.content}</p>

                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 text-xs font-mono border-2"
                      style={{
                        borderColor: '#9900ff',
                        color: '#9900ff',
                        background: 'rgba(153, 0, 255, 0.1)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}