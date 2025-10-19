import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Contact form error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center py-20 px-6"
      style={{ 
        background: 'linear-gradient(135deg, #ff006e 0%, #330066 40%, #1a0033 70%, #4d0099 100%)'
      }}
    >
      {/* Pixel grid */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: `
            linear-gradient(#ff00ff 1px, transparent 1px),
            linear-gradient(90deg, #ff00ff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          height: '100%'
        }}></div>
      </div>

      <div className="relative z-10 w-full max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block border-4 border-pink-500 px-8 py-4"
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              boxShadow: '0 0 30px rgba(255, 0, 110, 0.6)',
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}
          >
            <h2 className="text-5xl font-extrabold text-white font-mono mb-2"
              style={{ textShadow: '3px 3px 0 #ff006e' }}
            >
              [CONNECT]
            </h2>
            <p className="text-pink-400 font-mono text-sm">
              ▸ PRESS START TO MESSAGE ▸
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="border-4 border-purple-500 bg-black p-8 md:p-10"
          style={{
            boxShadow: '0 0 30px rgba(153, 0, 255, 0.5), 0 8px 0 rgba(0, 0, 0, 0.8)',
            clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
          }}
        >
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 border-4 border-green-500 p-4 text-center font-mono"
              style={{
                background: 'rgba(0, 255, 0, 0.1)',
                boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
              }}
            >
              <p className="text-green-400 font-bold">✓ MESSAGE SENT!</p>
              <p className="text-green-300 text-sm mt-1">I'll get back to you soon!</p>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 border-4 border-red-500 p-4 text-center font-mono"
              style={{
                background: 'rgba(255, 0, 0, 0.1)',
                boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
              }}
            >
              <p className="text-red-400 font-bold">✗ ERROR</p>
              <p className="text-red-300 text-sm mt-1">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-cyan-400 font-mono font-bold mb-2 text-sm flex items-center gap-2">
                <span className="text-purple-400">▸</span>
                PLAYER NAME:
              </label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your name..."
                required
                className="w-full border-4 border-purple-500 bg-black text-white p-3 font-mono 
                         placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition"
                style={{
                  boxShadow: '0 0 10px rgba(153, 0, 255, 0.3)',
                  clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
                }}
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-cyan-400 font-mono font-bold mb-2 text-sm flex items-center gap-2">
                <span className="text-purple-400">▸</span>
                EMAIL ADDRESS:
              </label>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your.email@example.com"
                type="email"
                required
                className="w-full border-4 border-purple-500 bg-black text-white p-3 font-mono 
                         placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition"
                style={{
                  boxShadow: '0 0 10px rgba(153, 0, 255, 0.3)',
                  clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
                }}
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-cyan-400 font-mono font-bold mb-2 text-sm flex items-center gap-2">
                <span className="text-purple-400">▸</span>
                MESSAGE:
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or just say hi!"
                required
                rows="6"
                className="w-full border-4 border-purple-500 bg-black text-white p-3 font-mono 
                         placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition resize-none"
                style={{
                  boxShadow: '0 0 10px rgba(153, 0, 255, 0.3)',
                  clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 font-mono font-bold text-lg border-4 transition ${
                loading 
                  ? 'border-gray-600 bg-gray-800 text-gray-500 cursor-not-allowed' 
                  : 'border-orange-400 bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:from-orange-600 hover:to-pink-700'
              }`}
              style={{
                boxShadow: loading ? 'none' : '0 0 30px rgba(255, 107, 53, 0.6), 0 6px 0 rgba(0, 0, 0, 0.8)',
                clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                textShadow: loading ? 'none' : '2px 2px 0 rgba(0, 0, 0, 0.5)'
              }}
            >
              {loading ? '[SENDING...]' : '[SEND MESSAGE]'}
            </button>
          </form>

          {/* Direct Contact Info */}
          <div className="mt-8 pt-8 border-t-4 border-purple-500/30">
            <p className="text-center text-gray-400 mb-4 font-mono text-sm">
              ▸ OR REACH OUT DIRECTLY ▸
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:athena.aj.jacob@gmail.com"
                className="border-4 border-cyan-400 bg-transparent px-6 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-mono font-bold"
                style={{
                  clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                  boxShadow: '3px 3px 0 rgba(0, 255, 255, 0.5)'
                }}
              >
                [EMAIL]
              </a>
              <span className="hidden sm:inline text-purple-400 font-mono">|</span>
              <a
                href="https://linkedin.com/in/athena-jacob-aj"
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 border-pink-400 bg-transparent px-6 py-2 text-pink-400 hover:bg-pink-400 hover:text-black transition font-mono font-bold"
                style={{
                  clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
                  boxShadow: '3px 3px 0 rgba(255, 0, 110, 0.5)'
                }}
              >
                [LINKEDIN]
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="border-4 border-purple-500 bg-black px-6 py-3 inline-block"
            style={{
              boxShadow: '0 0 20px rgba(153, 0, 255, 0.3)',
              clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
            }}
          >
            <p className="text-purple-400 font-mono text-sm">
              © 2025 ATHENA JACOB | DESIGNED & CODED WITH 💜
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}