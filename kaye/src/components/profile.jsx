export default function Profile({ onProjectsClick, onContactsClick, onAboutClick }) {
  const featuredProjects = [
    {
      title: "Midterm App Devs",
      description: "A full-stack web application showcasing app development projects.",
    },
    {
      title: "3A Product Card",
      description: "A product card UI with modern styling and responsive design.",
    },
    {
      title: "Holy Verse API",
      description: "A personal website api activity.",
    },
  ];

  return (
    <section id="home" className="space-y-8">
      <div className="rounded-2xl border border-pink-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-pink-200 bg-pink-50">
            <img
              src="/ky.jpg"
              alt="Profile"
              className="h-72 w-full object-contain object-center sm:h-80"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-pink-700">Web Designer</p>
            <h3 className="mt-1 text-3xl font-bold text-pink-900 sm:text-4xl">KAYE RUCAS</h3>
            <p className="mt-3 leading-relaxed text-neutral-700">
              A dedicated BSIT student with a strong interest in technology,
              software, and system development. I enjoy learning new tools,
              solving technical problems, and building projects that improve
              efficiency and user experience. I am committed to becoming a
              competent IT professional.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                onClick={onAboutClick}
                className="rounded-full bg-pink-700 px-4 py-2 text-white hover:bg-pink-800"
              >
                View Resume
              </button>
              <button
                onClick={onProjectsClick}
                className="rounded-full border border-pink-300 px-4 py-2 text-pink-900 hover:bg-pink-50"
              >
                View Projects
              </button>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="https://web.facebook.com/kaye.rucas/" className="rounded-full border border-pink-200 px-3 py-1 text-sm text-pink-900 hover:bg-pink-50">Facebook</a>
              <a href="https://www.instagram.com/k_gonzales21/" className="rounded-full border border-pink-200 px-3 py-1 text-sm text-pink-900 hover:bg-pink-50">Instagram</a>
              <a href="https://github.com/aye-ux" className="rounded-full border border-pink-200 px-3 py-1 text-sm text-pink-900 hover:bg-pink-50">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-pink-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="mb-4 text-2xl font-semibold text-pink-900">
          Featured Projects
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.title} className="rounded-xl border border-pink-200 bg-pink-50/50 p-4">
              <h3 className="font-semibold text-pink-900">{project.title}</h3>
              <p className="mt-1 text-sm text-neutral-700">{project.description}</p>
              <button
                onClick={onProjectsClick}
                className="mt-3 rounded-full border border-pink-300 px-3 py-1.5 text-sm text-pink-900 hover:bg-pink-100"
              >
                View Project
              </button>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-4 rounded-2xl border border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50 p-4 sm:grid-cols-2 sm:p-6">
        <div>
          <h2 className="text-2xl font-semibold text-pink-900">Let&apos;s Work Together</h2>
          <p className="mt-2 text-neutral-700">Feel free to reach out.</p>
          <p className="text-neutral-700">I&apos;m open to projects and collaboration.</p>
        </div>
        <div className="flex items-center sm:justify-end">
          <button
            onClick={onContactsClick}
            className="rounded-full bg-pink-700 px-5 py-2 text-white hover:bg-pink-800"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
