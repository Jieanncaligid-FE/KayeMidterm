import Link from "next/link";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm dark:border-pink-900 dark:bg-[#1f1525] sm:p-6">
        <h1 className="text-3xl font-semibold text-pink-900 dark:text-pink-100">Projects</h1>
        <p className="mt-1 text-sm text-pink-700 dark:text-pink-300">Selected works and live links</p>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="grid gap-4 rounded-2xl border border-pink-200 bg-white p-4 shadow-sm dark:border-pink-900 dark:bg-[#1f1525] sm:p-5 md:grid-cols-2"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className={`h-52 w-full rounded-xl border border-pink-200 object-cover dark:border-pink-800 ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            />
            <div className={index % 2 !== 0 ? "md:order-1" : ""}>
              <h3 className="text-2xl font-semibold text-pink-900 dark:text-pink-100">{project.title}</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-200">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="rounded-full bg-pink-700 px-3 py-1.5 text-white hover:bg-pink-800"
                >
                  Details
                </Link>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-pink-300 px-3 py-1.5 text-pink-900 hover:bg-pink-50 dark:border-pink-700 dark:text-pink-100 dark:hover:bg-pink-900"
                  >
                    View Project
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-pink-300 px-3 py-1.5 text-pink-900 hover:bg-pink-50 dark:border-pink-700 dark:text-pink-100 dark:hover:bg-pink-900"
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

