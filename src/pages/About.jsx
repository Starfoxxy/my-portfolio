import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import Headshot from "../assets/Professional-Headshot.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center py-20 px-6"
      style={{ 
        background: 'linear-gradient(135deg, #4d0099 0%, #330066 50%, #1a0033 100%)'
      }}
    >
      {/* Pixel grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#ff00ff 1px, transparent 1px),
            linear-gradient(90deg, #ff00ff 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block border-4 border-purple-500 px-8 py-4"
            style={{
              background: 'rgba(26, 0, 51, 0.8)',
              boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)',
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono"
              style={{
                textShadow: '3px 3px 0 #ff00ff'
              }}
            >
              [PLAYER INFO]
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Character Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-4 border-cyan-400 p-1"
            style={{
              background: '#000',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
            }}
          >
            <div className="border-4 border-purple-600 overflow-hidden">
              <img
                src={Headshot}
                alt="Athena Jacob"
                className="w-full h-80 object-cover"
                style={{
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>
            
            {/* Stats bar */}
            <div className="bg-black border-t-4 border-purple-600 p-3 font-mono text-xs">
              <div className="flex justify-between mb-1">
                <span className="text-cyan-400">CLASS:</span>
                <span className="text-pink-400">DEVELOPER</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-cyan-400">LEVEL:</span>
                <span className="text-purple-400">FULL STACK</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-400">STATUS:</span>
                <span className="text-green-400">ACTIVE</span>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4"
          >
            {/* Quest Log style bio */}
            <div className="border-4 border-purple-500 bg-black p-6"
              style={{
                boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)',
                clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-pink-400 font-mono text-xl">▶</span>
                <h3 className="text-cyan-400 font-mono font-bold text-lg">ORIGIN_STORY.txt</h3>
              </div>
              <p className="text-gray-300 leading-relaxed font-mono text-sm mb-3">
                I'm a <span className="text-purple-400">Full Stack Web Developer</span> with hands-on experience developing client projects through{" "}
                <span className="text-cyan-400">The Knowledge House Innovation Fellowship</span>. I work with JavaScript, React, Next.js, Node.js, and modern tech stacks to build responsive and scalable applications.
              </p>
            </div>

            <div className="border-4 border-purple-500 bg-black p-6"
              style={{
                boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)',
                clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-pink-400 font-mono text-xl">▶</span>
                <h3 className="text-cyan-400 font-mono font-bold text-lg">CURRENT_QUEST.txt</h3>
              </div>
              <p className="text-gray-300 leading-relaxed font-mono text-sm">
                Currently partnering with <span className="text-purple-400">Prometheus</span> to deliver a full-featured events platform for the Teacher Accelerator Program (TAP), integrating advanced filtering, APIs, and HubSpot. As a{" "}
                <span className="text-cyan-400">Digital Strategy Lead at ECHO5 Digital</span>, I combine technical skills with strategic thinking to optimize campaigns for 100+ clients.
              </p>
            </div>

            <div className="border-4 border-purple-500 bg-black p-6"
              style={{
                boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)',
                clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-pink-400 font-mono text-xl">▶</span>
                <h3 className="text-cyan-400 font-mono font-bold text-lg">SPECIAL_ABILITIES.txt</h3>
              </div>
              <p className="text-gray-300 leading-relaxed font-mono text-sm">
                From a young age, I've been fascinated by <span className="text-purple-400">robotics and interactive technologies</span>. That curiosity sparked my love for creating solutions that combine creativity, logic, and hands-on innovation. I bring a{" "}
                <span className="text-cyan-400">collaborative, solution-driven mindset</span> to every project.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Social Links - Game Menu Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap gap-4 justify-center"
        >
          {[
            { icon: FaGithub, url: "https://github.com/Starfoxxy", label: "GITHUB" },
            { icon: FaLinkedin, url: "https://linkedin.com/in/athena-jacob-aj", label: "LINKEDIN" },
            { icon: FaEnvelope, url: "mailto:athena.aj.jacob@gmail.com", label: "EMAIL" },
            { icon: FaFileAlt, url: "src/assets/Athena Jacob Resume 2025 .docx", label: "RESUME" }
          ].map((link, i) => (
            <a
              key={i}
              href={link.url}
              target={link.label !== "EMAIL" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="border-4 border-purple-500 bg-black px-6 py-3 hover:bg-purple-900 transition group"
              style={{
                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                boxShadow: '3px 3px 0 #ff00ff'
              }}
            >
              <div className="flex items-center gap-3">
                <link.icon className="text-cyan-400 text-xl" />
                <span className="text-white font-mono text-sm font-bold group-hover:text-pink-400 transition">
                  [{link.label}]
                </span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}