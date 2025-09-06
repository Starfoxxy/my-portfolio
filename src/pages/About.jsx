import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('src/assets/6884392_3452679.jpg')" }}
    >
        <div className="relative z-10 mt-0">
          <img
            src="/images/Professional-Headshot.png"
            alt="Athena Jacob"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-cyan-600 shadow-lg mx-auto" />
        </div>

        <div className="max-w-xl text-center mt-5">
          <h2 className="text-4xl font-bold mb-4 text-white tracking-wide">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Hi, I’m <span className="text-cyan-500 font-semibold">Athena Jacob</span>!<br /><br />

            I started my career as a Product Manager in digital marketing, where I learned how to craft strategies, connect with audiences, and drive impactful campaigns. Along the way, I discovered my true passion lies in building technology that empowers people, which led me to transition into <span className="text-cyan-500 font-semibold">software engineering</span>.<br /><br />

            From a young age, I’ve been fascinated by robotics and interactive technologies; from controlling battle bots to immersive headset-based games. That curiosity sparked my love for creating solutions that combine creativity, logic, and hands-on innovation.<br /><br />

            My ultimate goal is to become an <span className="text-cyan-500 font-semibold">entrepreneur and a leader</span>, building meaningful products and using technology as a force for good. I’m deeply committed to helping those in need, giving a voice to the marginalized, and creating opportunities for people who have faced hardship or violence. In every project I tackle, I aim to merge technical excellence with empathy, designing software that makes a real difference in people’s lives.
          </p>
        </div>
    </section>
  );
}
