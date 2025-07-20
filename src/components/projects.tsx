"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Muqabil",
    image: "/muqabil-change-this.png",
    description: "Microservice-based platform built with Ruby on Rails & Node.js.",
    tech: ["Ruby on Rails", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourusername/arena-booking",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    image: "/images/portfolio.jpeg",
    description: "Personal website built with Next.js, Tailwind CSS & Framer Motion.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    demo: "#",
  },
  {
    title: "Aggero",
    image: "/aggero-thumbnail.jpeg",
    description: "Real-time dashboard for metrics and user engagement.",
    tech: ["React", "Chart.js", "Express"],
    github: "#",
    demo: "#",
  },
  {
    title: "SprintFWD",
    image: "/sprintfwd-thumbnail.jpeg",
    description: "Real-time dashboard for metrics and user engagement.",
    tech: ["Ruby on Rails", "NodeJs", "Express", "Sinatra"],
    github: "#",
    demo: "#",
  },
]

export default function SingleProjectShowcase() {
  const [current, setCurrent] = useState(0)

  const goTo = (index: number) => {
    if (index >= 0 && index < projects.length) setCurrent(index)
  }

  const goLeft = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goRight = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-32 px-6 bg-gray-50 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-gray-800 text-center">Projects</h2>

      <div className="relative w-[90%] min-h-[32rem] flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={goLeft}
          className="absolute left-[-2.5rem] top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-blue-100 transition"
        >
          <ChevronLeft className="w-5 h-5 text-blue-600" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[85%] bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="relative h-64 w-full">
              <Image
                src={projects[current].image}
                alt={projects[current].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-gray-800">{projects[current].title}</h3>
              <p className="text-gray-600 mt-2 mb-4">{projects[current].description}</p>

              <ul className="flex flex-wrap gap-2 mb-4">
                {projects[current].tech.map((tech, i) => (
                  <li
                    key={i}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 text-sm">
                <Link href={projects[current].github} target="_blank" className="text-blue-600 underline">
                  GitHub
                </Link>
                {projects[current].demo && (
                  <Link href={projects[current].demo} target="_blank" className="text-blue-600 underline">
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Button */}
        <button
          onClick={goRight}
          className="absolute right-[-2.5rem] top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-blue-100 transition"
        >
          <ChevronRight className="w-5 h-5 text-blue-600" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="mt-6 flex gap-3">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              i === current ? "bg-blue-600 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
