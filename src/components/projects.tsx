"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Heart,
  Signal,
  Bot,
  AlertTriangle,
} from "lucide-react";

const projects = [
  {
    title: "Muqabil",
    image: "/muqabil-change-this.png",
    description: "Online booking system based on Microservice architecture. Built with Ruby on Rails, Node.js and Java.",
    details: "A scalable booking system using services architecture. It features authentication, tournament logic, and booking orchestration.",
    tech: [
      { name: "Ruby on Rails", icon: "rails.svg" },
      { name: "Node.js", icon: "nodejs-dark.svg" },
      { name: "PostgreSQL", icon: "postgresql-dark.svg" },
    ],
    github: "https://github.com/yourusername/arena-booking",
    demo: "#",
    petProject: true,
    aiGenerated: false,
    isPublic: false,
    inDevelopment: true,
  },
  {
    title: "Portfolio Website",
    image: "/ca.png",
    description: "Personal website built with Next.js, Tailwind CSS & Framer Motion. Built with vibes only 🎶, vibe coded",
    details: "Showcases personal projects, blog, contact form and animated transitions using Framer Motion.",
    tech: [
      { name: "Next.js", icon: "nextjs-dark.svg" },
      { name: "Tailwind CSS", icon: "tailwindcss-dark.svg" },
      { name: "React", icon: "react-dark.svg" },
    ],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://code-abd-portfolio.vercel.app/",
    petProject: true,
    aiGenerated: true,
    isPublic: true,
    inDevelopment: false,
  },
  {
    title: "Aggero",
    image: "/aggero-thumbnail.jpeg",
    description: "Real-time dashboard for metrics and user engagement and campaign management.",
    details: "Worked on influencer analytics integration and campaign engagement metrics using live API streams.",
    tech: [
      { name: "React", icon: "react-dark.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "Facebook", icon: "facebook.svg" },
      { name: "Twitter | X", icon: "x.svg" },
      { name: "Twitch", icon: "twitch.svg" },
      { name: "Tiktok", icon: "tiktok.svg" },
    ],
    github: "#",
    demo: "https://aggero.io/",
    petProject: false,
    aiGenerated: false,
    isPublic: false,
    inDevelopment: false,
  },
  {
    title: "SprintFWD",
    image: "/sprintfwd-thumbnail.jpeg",
    description: "Providing services to health care clients to manage and book online classes for big brand.",
    details: "Developed features like time zone support, custom class filters, and secure patient access flow.",
    tech: [
      { name: "Ruby on Rails", icon: "rails.svg" },
      { name: "AWS", icon: "aws-dark.svg" },
      { name: "Node.js", icon: "nodejs-dark.svg" },
    ],
    github: "#",
    demo: "https://sprintfwd.com/work",
    petProject: false,
    aiGenerated: false,
    isPublic: false,
    inDevelopment: false,
  },
];

export default function SingleProjectShowcase() {
  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (index: number) => {
    if (index >= 0 && index < projects.length) setCurrent(index);
  };

  const goLeft = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goRight = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => setHovering(true), 300);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovering(false);
  };

  return (
    <section
      className="py-32 px-6 bg-gray-50 flex flex-col items-center justify-center"
      id="projects"
    >
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Projects</h2>

      <div className="relative w-[50%] min-h-[32rem] flex items-center justify-center">
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
            className="relative w-full max-w-[85%] bg-white rounded-xl shadow-xl overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full h-64 bg-gray-100 relative flex items-center justify-center overflow-hidden">
            <Image
              src={projects[current].image}
              alt={projects[current].title}
              width={600}
              height={400}
              className="object-contain max-h-64 w-auto h-auto mx-auto"
            />
            </div>

            <div className="p-6 text-left relative">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 className="text-2xl font-semibold text-gray-800">{projects[current].title}</h3>

                {projects[current].petProject && (
                  <span className="inline-flex items-center gap-1 bg-pink-100 text-pink-700 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                    <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
                    Pet Project
                  </span>
                )}

                {projects[current].aiGenerated && (
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                    <Bot className="w-3 h-3 text-blue-500" />
                    AI Generated
                  </span>
                )}

                {projects[current].inDevelopment && (
                  <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                    <AlertTriangle className="w-3 h-3 text-yellow-500" />
                    In Development
                  </span>
                )}
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={hovering ? "details" : "desc"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 mt-2 mb-4"
                >
                  {hovering
                    ? projects[current].details
                    : projects[current].description}
                </motion.p>
              </AnimatePresence>

              <ul className="flex flex-wrap gap-4 mb-6">
                {projects[current].tech.map((tech, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Image
                      src={`/tech/${tech.icon}`}
                      alt={tech.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <span className="text-sm text-gray-700">{tech.name}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 text-sm z-10 relative">
                {projects[current].isPublic && projects[current].github && (
                  <Link
                    href={projects[current].github}
                    target="_blank"
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition inline-flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Link>
                )}

                {projects[current].inDevelopment ? (
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md font-medium inline-flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    In Development
                  </span>
                ) : (
                  projects[current].demo && (
                    <Link
                      href={projects[current].demo}
                      target="_blank"
                      className="bg-green-100 text-green-800 px-4 py-2 rounded-md font-medium hover:bg-green-200 transition inline-flex items-center gap-2"
                    >
                      <Signal className="w-4 h-4" />
                      Live Demo
                    </Link>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={goRight}
          className="absolute right-[-2.5rem] top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-blue-100 transition"
        >
          <ChevronRight className="w-5 h-5 text-blue-600" />
        </button>
      </div>

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
  );
}
