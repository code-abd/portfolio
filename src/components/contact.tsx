export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center bg-white px-4 overflow-hidden">
      <span className="absolute text-[30rem] font-black text-blue-800 opacity-10 bottom-[-5rem] left-[-10rem] select-none pointer-events-none z-0">
        @
      </span>

      <div className="max-w-2xl text-center z-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
        <p className="text-gray-600 text-lg">
          Want to connect or work together? Reach out via{' '}
          <a href="mailto:youremail@example.com" className="text-blue-600 underline">
            email
          </a>{' '}
          or message me on{' '}
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            GitHub
          </a>.
        </p>
      </div>
    </section>
  );
}
