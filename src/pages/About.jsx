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

        {/* Character Card */}
        <div className="grid md:grid-cols-3 gap-8">
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
            <div className="border-4 border-purple-600 overflow-hidden relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
              <div className="w-full h-80 flex items-center justify-center">
                <img
                  src={Headshot}
                  alt="Athena Jacob"
                  className="w-full h-full object-cover"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center center'
                  }}
                />
              </div>
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

          {/* Quest Log style bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4"
          >
            {/* Origin Story */}
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

              <div className="space-y-2">
                <p className="text-gray-300 font-mono text-sm flex items-start gap-2">
                  <span className="text-purple-400 flex-shrink-0">▸</span>
                  <span>Full Stack Web Developer specializing in <span className="text-cyan-400">JavaScript, React, and Next.js</span> with hands-on experience building <span className="text-green-400">scalable</span>, <span className="text-green-400">production-ready</span> applications</span>
                </p>

                <p className="text-gray-300 font-mono text-sm flex items-start gap-2">
                  <span className="text-purple-400 flex-shrink-0">▸</span>
                  <span>Completing <span className="text-pink-400">The Knowledge House Innovation Fellowship</span> (900+ hours) with expertise in modern web technologies, <span className="text-green-400">Agile development</span>, and collaborative software engineering</span>
                </p>

                <p className="text-gray-300 font-mono text-sm flex items-start gap-2">
                  <span className="text-purple-400 flex-shrink-0">▸</span>
                  <span>Built and deployed 5 production-ready applications using <span className="text-cyan-400">React, TypeScript, Redux Toolkit, PostgreSQL, Prisma ORM, SQLite, Tailwind CSS, Bootstrap, and Material-UI</span></span>
                </p>

                <p className="text-gray-300 font-mono text-sm flex items-start gap-2">
                  <span className="text-purple-400 flex-shrink-0">▸</span>
                  <span>Background in digital marketing and CRM management, having driven <span className="text-green-400">20% ROI increase</span> and <span className="text-green-400">40% organic traffic growth</span> for 100+ clients</span>
                </p>
              </div>
            </div>

            {/* Current Quest */}
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

              <div className="space-y-2">
                <p className="text-gray-300 font-mono text-sm flex items-start gap-2">
                  <span className="text-purple-400 flex-shrink-0">▸</span>
                  <span>Architected <span className="text-pink-400">Teacher Accelerator Program (TAP)'s Events platform</span> implementing <span className="text-green-400">dynamic filtering</span>, <span className="text-green-400">RESTful APIs</span>, <span className="text-green-400">HubSpot CRM integration</span>, and <span className="text-green-400">mobile-first responsive design</span> using <span className="text-cyan-400">Next.js, React, and Tailwind CSS</span> with progressive scaling across all devices</span>
                </p>

                <p className="text-gray-300 font-mono text-sm flex items-start gap-2">
                  <span className="text-purple-400 flex-shrink-0">▸</span>
                  <span>Engineered <span className="text-green-400">bi-directional data sync</span> for automated event registrations with real-time RSVP updates and user engagement tracking</span>
                </p>

                <p className="text-gray-300 font-mono text-sm flex items-start gap-2">
                  <span className="text-purple-400 flex-shrink-0">▸</span>
                  <span>Built <span className="text-green-400">WCAG 2.1 accessibility-compliant interactive components</span> with multi-criteria search functionality and cross-browser compatibility</span>
                </p>

                <p className="text-gray-300 font-mono text-sm flex items-start gap-2">
                  <span className="text-purple-400 flex-shrink-0">▸</span>
                  <span>Eager to bring a <span className="text-green-400">collaborative, solution-driven mindset</span> to a Full Stack Developer role</span>
                </p>
              </div>
            </div>

            {/* Special Abilities */}
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

              <div className="space-y-2">
                <p className="text-gray-300 font-mono text-sm flex items-start gap-2">
                  <span className="text-pink-400 flex-shrink-0">▸</span>
                  <span><span className="text-purple-400">Robotics & Raspberry Pi Projects:</span> Exploring robotic arms and sensors using Raspberry Pi, starting with <span className="text-cyan-400">Python</span>-based prototyping and coding movements</span>
                </p>

                <p className="text-gray-300 font-mono text-sm flex items-start gap-2">
                  <span className="text-pink-400 flex-shrink-0">▸</span>
                  <span><span className="text-purple-400">Game Development:</span> Developing a personal game using <span className="text-cyan-400">Unity & C#</span>, designing gameplay, mechanics, and interactive elements</span>
                </p>

                <p className="text-gray-300 font-mono text-sm flex items-start gap-2">
                  <span className="text-pink-400 flex-shrink-0">▸</span>
                  <span><span className="text-purple-400">Creative Writing:</span> Author of short stories and currently working on a book, blending <span className="text-green-400">narrative storytelling</span> with the same logical problem-solving approach used in development</span>
                </p>

                <p className="text-gray-300 font-mono text-sm flex items-start gap-2">
                  <span className="text-pink-400 flex-shrink-0">▸</span>
                  <span><span className="text-purple-400">Music & Songwriting:</span> Singer-songwriter who brings <span className="text-green-400">creative thinking</span> and <span className="text-green-400">attention to detail</span> from composing melodies to writing clean, maintainable code</span>
                </p>

                <p className="text-gray-300 font-mono text-sm flex items-start gap-2">
                  <span className="text-pink-400 flex-shrink-0">▸</span>
                  <span><span className="text-purple-400">Classic Video Games:</span> Retro gaming enthusiast—where my passion for <span className="text-green-400">interactive technology</span>, <span className="text-green-400">user experience</span>, and <span className="text-green-400">game logic</span> began</span>
                </p>
              </div>
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



