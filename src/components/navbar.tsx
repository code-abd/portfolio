'use client';

import { motion } from 'framer-motion';
import TypewriterText from './typewriterText';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      {/* Glow layer */}
      <div className="absolute inset-0 blur-2xl opacity-70 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-400 rounded-3xl z-[-1]" />

      {/* Glossy glass navbar */}
      <div className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-3xl px-6 py-4 w-[95vw] max-w-7xl mx-auto flex justify-between items-center min-h-[70px]">
        <a href="#home">
          <TypewriterText />
        </a>

        <ul className="hidden md:flex space-x-8 font-medium text-gray-800">
          {['about', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="relative group transition duration-300"
              >
                <span className="capitalize">{section}</span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
