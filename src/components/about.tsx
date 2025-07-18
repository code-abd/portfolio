export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-white px-4 py-16"
    >
      {/* Background Symbol */}
      <span className="absolute text-[30rem] font-black text-blue-800 opacity-10 bottom-[-5rem] left-[-10rem] select-none pointer-events-none z-0">
        {'</>'}
      </span>

      {/* Content */}
      <div className="max-w-5xl text-center z-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>

        <p className="text-gray-600 text-lg mb-10">
          I'm a full-stack engineer passionate about building thoughtful, user-focused web applications.
          My primary focus is on <span className="text-blue-600 font-medium">Ruby on Rails</span>, where I love crafting clean, maintainable backends and high-performance APIs.
          I also work with <span className="text-blue-600 font-medium">JavaScript, TypeScript, and Node.js</span> to create interactive frontends and modern full-stack applications.
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Skills */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">🛠 Tech Stack</h3>
            <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
              <li>Ruby on Rails (API-first, MVC, ActiveRecord)</li>
              <li>PostgreSQL, Redis, Sidekiq</li>
              <li>JavaScript / TypeScript (ES6+)</li>
              <li>Node.js, Express, REST APIs</li>
              <li>React, Next.js, Tailwind CSS</li>
              <li>RSpec, Minitest, Jest</li>
            </ul>
          </div>

          {/* Work Ethic */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">💼 Work Ethic</h3>
            <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
              <li>Attention to detail in code and UI</li>
              <li>Modular, scalable architecture</li>
              <li>Test-driven development mindset</li>
              <li>Clean, readable code and documentation</li>
              <li>Focus on maintainability and team collaboration</li>
            </ul>
          </div>

          {/* Interests */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">✨ Personal Interests</h3>
            <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
              <li>Exploring design-to-code workflows</li>
              <li>Refining user experience through micro-interactions</li>
              <li>Contributing to Ruby and open-source tools</li>
              <li>Learning new backend patterns & clean architecture</li>
              <li>Automating repetitive tasks with scripts</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
