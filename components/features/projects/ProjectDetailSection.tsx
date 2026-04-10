import Link from "next/link";
import type { Project } from "@/data/portfolio";

export default function ProjectDetailSection({ project }: { project: Project | undefined }) {
  if (!project) {
    return (
      <section className="rounded-2xl border border-pink-200 bg-white p-6 dark:border-pink-900 dark:bg-[#1f1525]">
        <h1 className="text-2xl font-semibold text-pink-900 dark:text-pink-100">Project Not Found</h1>
        <Link href="/projects" className="mt-4 inline-block text-pink-700 underline dark:text-pink-300">
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm dark:border-pink-900 dark:bg-[#1f1525] sm:p-6">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="h-72 w-full rounded-xl border border-pink-200 object-cover dark:border-pink-800"
      />
      <h1 className="mt-5 text-3xl font-semibold text-pink-900 dark:text-pink-100">{project.title}</h1>
      <p className="mt-2 text-neutral-700 dark:text-neutral-200">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-pink-700 px-3 py-1.5 text-white hover:bg-pink-800"
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
        <Link
          href="/projects"
          className="rounded-full border border-pink-300 px-3 py-1.5 text-pink-900 hover:bg-pink-50 dark:border-pink-700 dark:text-pink-100 dark:hover:bg-pink-900"
        >
          Back to Projects
        </Link>
      </div>
    </section>
  );
}

