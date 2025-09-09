import React from "react";
import { motion } from "framer-motion";
import Headshot from "../assets/Professional-Headshot.png";

const bioCards = [
  <span>
    Hi, I’m <span className="text-cyan-500 font-semibold">Athena Jacob</span>!
  </span>,
  <span>
    I started my career as a <span className="text-cyan-500 font-semibold">Product Manager</span> in digital marketing,
    where I learned how to craft strategies, connect with audiences, and drive impactful campaigns. Along the way, I
    discovered my true passion lies in building technology that empowers people, which led me to transition into{" "}
    <span className="text-cyan-500 font-semibold">software engineering</span>.
  </span>,
  <span>
    From a young age, I’ve been fascinated by <span className="text-cyan-500 font-semibold">robotics</span> and{" "}
    <span className="text-cyan-500 font-semibold">interactive technologies</span>; from controlling battle bots to
    immersive headset-based games. That curiosity sparked my love for creating solutions that combine creativity, logic,
    and hands-on innovation.
  </span>,
  <span>
    My ultimate goal is to become an <span className="text-cyan-500 font-semibold">entrepreneur and a leader</span>,
    building meaningful products and using technology as a force for good. I’m deeply committed to helping those in
    need, giving a voice to the marginalized, and creating opportunities for people who have faced hardship or violence.
    In every project I tackle, I aim to merge technical excellence with empathy, designing software that makes a real
    difference in people’s lives.
  </span>,
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex justify-center items-center bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: "url('src/assets/Blue-Pink-Geo.jpg')" }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full blur-sm opacity-40"
            initial={{ y: -50, x: Math.random() * 1000 }}
            animate={{ y: 600, x: Math.random() * 1000 }}
            transition={{ repeat: Infinity, duration: 15 + Math.random() * 10, ease: "linear" }}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Main HUD panel */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="relative flex flex-col md:flex-row bg-gray-900/85 border-2 border-cyan-500 rounded-3xl 
                   shadow-lg backdrop-blur-md max-w-6xl w-full p-10 md:p-12 z-10 overflow-hidden"
      >
        {/* Headshot */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="relative flex-shrink-0 w-64 md:w-80 h-[32rem] rounded-2xl overflow-hidden
                      border-4 border-cyan-400 shadow-[0_6px_0_rgba(0,0,0,0.4)] mb-6 md:mb-0 md:mr-12 self-start"
          >
            <img
              src={Headshot}
              alt="Athena Jacob"
              className="w-full h-full object-cover object-[75%_50%]"
            />
          </motion.div>

        {/* Social / Contact icons */}
        <div className="flex gap-6 justify-center md:justify-start mt-6 md:mt-10">
          <motion.a
            whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/Starfoxxy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl p-3 rounded-full bg-gray-900/80 border-2 border-cyan-500 shadow-lg hover:shadow-cyan-400/60 transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/athena-jacob-aj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl p-3 rounded-full bg-gray-900/80 border-2 border-cyan-500 shadow-lg hover:shadow-blue-400/60 transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
            whileTap={{ scale: 0.9 }}
            href="mailto:athena.aj.jacob@gmail.com"
            className="text-white text-3xl p-3 rounded-full bg-gray-900/80 border-2 border-cyan-500 shadow-lg hover:shadow-pink-400/60 transition"
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
            whileTap={{ scale: 0.9 }}
            href="src/assets/Athena Jacob Resume 2025 .docx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl p-3 rounded-full bg-gray-900/80 border-2 border-cyan-500 shadow-lg hover:shadow-green-400/60 transition"
          >
            <FaFileAlt />
          </motion.a>
        </div>


        {/* Panels */}
        <div className="flex-1 flex flex-col gap-6">
          {bioCards.map((text, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              animate={{
                boxShadow: [
                  "0 0 5px #00fff0, 0 0 10px #00fff0 inset",
                  "0 0 15px #00fff0, 0 0 25px #00fff0 inset",
                  "0 0 5px #00fff0, 0 0 10px #00fff0 inset",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="bg-gray-900/90 border-2 border-cyan-500 rounded-2xl p-6 
                        shadow-md hover:shadow-[0_0_25px_#00fff0,0_0_50px_#00fff0]"
            >
              <p className="text-gray-300 text-lg leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
