"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-white px-4 overflow-hidden"
    >
      {/* Background Element */}
      <span className="absolute text-[30rem] font-black text-blue-800 opacity-10 bottom-[-5rem] left-[-10rem] select-none pointer-events-none z-0">
        @
      </span>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-xl text-center z-10"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact</h2>
        <p className="text-gray-600 text-lg mb-8">
          Want to connect or work together? I’m open to freelance projects, collaborations, or just a friendly chat.
          Reach out via{' '}
          <a
            href="mailto:abd.nadeem.dev@gmail.com"
            className="text-blue-600 underline hover:text-blue-800 transition"
          >
            email
          </a>{' '}
          or find me on the platforms below.
        </p>

        {/* Contact Links */}
        <div className="flex justify-center gap-6">
          <a
            href="mailto:abd.nadeem.dev@gmail.com"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>

          <a
            href="https://github.com/code-abd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abdnadeem-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  )
}
