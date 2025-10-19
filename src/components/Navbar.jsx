import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'problems-joys', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'GAME LOG', id: 'problems-joys' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
      style={{
        background: scrolled 
          ? 'rgba(0, 0, 0, 0.95)' 
          : 'linear-gradient(180deg, rgba(0, 0, 0, 0.8), transparent)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border-4 border-purple-500 px-4 py-2 cursor-pointer"
            style={{
              background: 'rgba(153, 0, 255, 0.2)',
              boxShadow: '0 0 15px rgba(153, 0, 255, 0.5)',
              clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
            }}
            onClick={() => scrollToSection('home')}
          >
            <h1 className="text-xl font-bold font-mono text-white"
              style={{ textShadow: '2px 2px 0 #9900ff' }}
            >
              {'<AJ/>'}
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 font-mono text-sm font-bold transition border-2 ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-transparent text-gray-300 hover:text-white'
                }`}
                style={{
                  borderColor: activeSection === link.id ? '#ff00ff' : 'transparent',
                  clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                  boxShadow: activeSection === link.id ? '0 0 15px rgba(255, 0, 255, 0.5)' : 'none'
                }}
              >
                [{link.name}]
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden border-4 border-cyan-400 px-3 py-2"
            style={{
              background: 'rgba(0, 255, 255, 0.2)',
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
              clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'
            }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: isOpen ? (i === 1 ? 45 : i === 0 ? 45 : -45) : 0,
                    y: isOpen ? (i === 0 ? 8 : i === 2 ? -8 : 0) : 0,
                    opacity: isOpen && i === 1 ? 0 : 1
                  }}
                  className="w-full h-0.5 bg-cyan-400"
                />
              ))}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 border-t-4 border-purple-500 mt-4"
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              boxShadow: '0 0 20px rgba(153, 0, 255, 0.3)'
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 font-mono font-bold transition border-l-4 ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-purple-900/30'
                }`}
                style={{
                  borderColor: activeSection === link.id ? '#ff00ff' : 'transparent'
                }}
              >
                <span className="text-purple-400 mr-2">▸</span>
                [{link.name}]
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Health/Level Bar */}
      {scrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background: 'linear-gradient(90deg, #9900ff, #ff00ff, #ff6b35, #ff006e, #00ffff)'
          }}
        >
          <motion.div
            className="h-full bg-white"
            style={{
              width: `${((navLinks.findIndex(l => l.id === activeSection) + 1) / navLinks.length) * 100}%`
            }}
          />
        </motion.div>
      )}
    </motion.nav>
  );
}