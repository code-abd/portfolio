"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Arena Booking System",
    image: "/images/arena.jpg", // replace with your actual image path
    description: "Microservice-based booking platform with Ruby on Rails & Node.js.",
    tech: ["Ruby on Rails", "Node.js", "PostgreSQL", "TypeScript"],
    github: "https://github.com/yourusername/arena-booking",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    image: "/images/portfolio.jpg",
    description: "My portfolio site built with Next.js, Tailwind, and Framer Motion.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    demo: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
        <p className="text-gray-600 text-lg mt-2">
          Built with passion, detail, and clean code.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-56 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2 mb-4">{project.description}</p>

              <ul className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 text-sm">
                <Link href={project.github} target="_blank" className="text-blue-600 underline">
                  GitHub
                </Link>
                {project.demo && (
                  <Link href={project.demo} target="_blank" className="text-blue-600 underline">
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
