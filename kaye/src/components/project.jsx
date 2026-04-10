export default function Project({ onCpuClick }) {

  const projects = [
    {
      title: "Midterm App Devs",
      description: "A full-stack web application showcasing app development projects.",
      imageUrl: "images/p1.png",
      liveUrl: "https://midtermappdevs.vercel.app/",
      repoUrl: "https://github.com/ryleive039/midtermappdevs"
    },
    {
      title: "3A Product Card",
      description: "A product card UI with modern styling and responsive design.",
      imageUrl: "images/k2.jpg",
      liveUrl: "https://github.com/aye-ux/Project-no.1",
      repoUrl: "https://github.com/aye-ux/Project-no.1"
    },
    {
      title: "Holy Verse API",
      description: "A personal website api activity",
      imageUrl: "images/k4.png",
      liveUrl: "https://kayerucas-bsit-2a.netlify.app/",
      repoUrl: "https://github.com/aye-ux/kayerucas/blob/main/index.html"
    },
    {
      title: "Kaye UI (Figma Design)",
      description: "A clean and elegant UI/UX design created inside Figma.",
      imageUrl: "images/k3.png",
      liveUrl: "https://www.figma.com/design/ufWbl1yumXd0kZQIg53Kjs/Kaye-Gwapa?node-id=0-1&p=f&t=jlzvXdgFxeeWoid6-0",
      repoUrl: null,
    }
  ];

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-3xl font-semibold text-pink-900">Projects</h2>
        <p className="mt-1 text-sm text-pink-700">Selected works and live links</p>
      </div>

      <div className="space-y-4">
        {projects.map(({ title, description, imageUrl, liveUrl, repoUrl }, index) => (
          <article
            key={title}
            className="grid gap-4 rounded-2xl border border-pink-200 bg-white p-4 shadow-sm sm:p-5 md:grid-cols-2"
          >
            <a
              href={liveUrl || repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={index % 2 !== 0 ? "md:order-2" : ""}
            >
              <img
                src={imageUrl}
                alt={title}
                className="h-52 w-full rounded-xl border border-pink-200 object-cover"
                loading="lazy"
              />
            </a>
            <div className={index % 2 !== 0 ? "md:order-1" : ""}>
              <h3 className="text-2xl font-semibold text-pink-900">{title}</h3>
              <p className="mt-2 text-neutral-700">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-pink-700 px-3 py-1.5 text-white hover:bg-pink-800"
                  >
                    View Project
                  </a>
                )}
                {repoUrl && (
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-pink-300 px-3 py-1.5 text-pink-900 hover:bg-pink-50"
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}

        <article className="grid gap-4 rounded-2xl border border-pink-200 bg-white p-4 shadow-sm sm:p-5 md:grid-cols-2">
          <div className="flex h-52 items-center justify-center rounded-xl border border-pink-200 bg-pink-50 text-pink-700">
            CPU Scheduling Tool
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-pink-900">SJF CPU Scheduling Calculator</h3>
            <p className="mt-2 text-neutral-700">
              Interactive tool for Shortest Job First scheduling with Gantt chart
              and waiting/turnaround metrics.
            </p>
            <button
              onClick={onCpuClick}
              className="mt-4 rounded-full bg-pink-700 px-3 py-1.5 text-white hover:bg-pink-800"
            >
              Open Tool
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
