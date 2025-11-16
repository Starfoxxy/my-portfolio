import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #1a0033 0%, #330066 50%, #4d0099 100%)'
      }}
    >
      {/* Pixel grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#ff00ff 1px, transparent 1px),
            linear-gradient(90deg, #ff00ff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div 
              className="w-12 h-12 border-4"
              style={{
                borderColor: i % 2 === 0 ? '#ff00ff' : '#00ffff',
                clipPath: i % 3 === 0 
                  ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                  : i % 3 === 1
                  ? 'polygon(50% 0%, 100% 100%, 0% 100%)'
                  : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                opacity: 0.3
              }}
            ></div>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl">
        {/* Pixel art border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="border-4 border-purple-500 p-8 md:p-12"
          style={{
            background: 'rgba(26, 0, 51, 0.8)',
            boxShadow: '0 0 30px rgba(255, 0, 255, 0.5), inset 0 0 30px rgba(255, 0, 255, 0.1)',
            clipPath: 'polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))'
          }}
        >
          {/* Level indicator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-cyan-400 font-mono text-sm mb-4 flex items-center justify-center gap-2"
          >
            <span className="text-purple-400">◆</span>
            LVL 01: FULL STACK DEVELOPER
            <span className="text-purple-400">◆</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-white font-mono tracking-wider"
            style={{
              textShadow: '4px 4px 0 #ff00ff, -2px -2px 0 #00ffff'
            }}
          >
            ATHENA JACOB
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-6"
          >
            {/* HP/XP Bar */}
            <div className="bg-black border-2 border-purple-500 p-3 mb-4 font-mono text-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-cyan-400">SKILLS:</span>
                <span className="text-pink-400">React • Next.js • Node.js • PostgreSQL</span>
              </div>
              <div className="w-full h-4 bg-gray-900 border-2 border-purple-600 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, delay: 0.8 }}
                  className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400"
                ></motion.div>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-lg text-gray-300 mb-8 font-mono"
          >
            &gt; Building_scalable_applications...
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              _
            </motion.span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-purple-600 text-white font-bold font-mono border-4 border-purple-400 hover:bg-purple-500 transition relative group"
              style={{
                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                boxShadow: '4px 4px 0 #ff00ff'
              }}
            >
              [VIEW PROJECTS]
            </a>

            <a
              href="src/assets/Tech Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent text-cyan-400 font-bold font-mono border-4 border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
              style={{
                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                boxShadow: '4px 4px 0 #00ffff'
              }}
            >
              [RESUME]
            </a>
          </motion.div>
        </motion.div>

        {/* Press Start indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          className="mt-8 text-purple-400 font-mono text-sm"
        >
          ▼ SCROLL TO CONTINUE ▼
        </motion.div>
      </div>
    </section>
  );
}