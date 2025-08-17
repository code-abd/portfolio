'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCalendarAlt } from 'react-icons/fa';
import { FiEye, FiDownload, FiPhoneCall } from 'react-icons/fi';
import Counter from './counter';
import Link from 'next/link';

const stats = [
  { label: 'Years Experience', value: 5 },
  { label: 'Projects Completed', value: 17 },
  { label: 'Technologies Used', value: 20 },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-30 pb-12 text-center bg-gradient-to-b from-white to-blue-50 scroll-smooth"
      id="home"
    >
      <span className="absolute text-[30rem] font-black text-blue-800 opacity-10 top-[-5rem] left-[-4rem] select-none pointer-events-none z-0">
        ;
      </span>
      <span className="absolute text-[30rem] font-black text-blue-800 opacity-10 bottom-[-5rem] right-[-4rem] select-none pointer-events-none z-0">
        !
      </span>
      <div className="max-w-2xl z-10 space-y-6">
        <motion.img
          src="/abd.png"
          alt="Abd"
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="w-48 h-32 mx-auto rounded-full border-4 border-white shadow-lg object-cover mb-6"
        />

        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold text-gray-800"
        >
          Hi, I&apos;m <span className="text-gradient">Abd</span>{' '}
          <motion.span
            className="inline-block origin-bottom-left"
            variants={{
              wave: {
                rotate: [0, 20, -10, 20, -5, 0],
                transition: { duration: 0.8 },
              },
            }}
            whileHover="wave"
          >
            👋
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600"
        >
          A passionate full-stack developer focused on building modern, fast, and user-friendly web apps.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          {/* View Projects */}
          <Link
            href="#projects"
            className="group relative bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center overflow-hidden"
          >
            <span className="transition-all duration-300 group-hover:pr-6">View Projects</span>
            <span className="absolute right-5 transform translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              <FiEye size={18} />
            </span>
          </Link>

          {/* Download Resume */}
          <Link
            href="/abdullahResume.pdf"
            download
            className="group relative bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all duration-300 flex items-center overflow-hidden"
          >
            <span className="transition-all duration-300 group-hover:pr-6">Download Resume</span>
            <span className="absolute right-5 transform translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              <FiDownload size={18} />
            </span>
          </Link>

          {/* Let’s Talk */}
          <Link
            href="#contact"
            className="group relative bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-all duration-300 flex items-center overflow-hidden"
          >
            <span className="transition-all duration-300 group-hover:pr-6">Let’s Talk</span>
            <span className="absolute right-5 transform translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              <FiPhoneCall size={18} />
            </span>
          </Link>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-12 flex flex-wrap justify-center gap-8 z-10"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <h3 className="text-3xl font-bold text-gray-800">
              <Counter value={stat.value} />+
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      <div className="flex justify-center gap-6 text-2xl text-gray-600 mt-10 mb-6">
        <a href="https://github.com/code-abd" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/abdnadeem-dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaLinkedin />
        </a>
        <a
          href="https://calendly.com/abd-nadeem-dev/intro-with-abd"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600"
          title="Book a Call"
        >
          <FaCalendarAlt />
        </a>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-blue-600 text-2xl"
      >
        ↓
      </motion.div>
    </section>
  );
}
