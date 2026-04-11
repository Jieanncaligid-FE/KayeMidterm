import Image from "next/image";
import Link from "next/link";
import { personalInfo, projects } from "@/data/portfolio";
import homeProfilePhoto from "@/public/k.jpg";

export default function HomeSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="space-y-8">
      <div className="overflow-hidden rounded-2xl border border-pink-200/80 bg-white/95 p-4 shadow-md shadow-pink-900/5 ring-1 ring-pink-100/80 dark:border-pink-900/60 dark:bg-[#1f1525]/95 dark:shadow-black/20 dark:ring-pink-900/30 sm:p-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-pink-200/90 bg-gradient-to-b from-pink-50 to-rose-50/80 shadow-inner dark:border-pink-800/80 dark:from-pink-950/30 dark:to-[#2a162d]/40 sm:max-w-sm md:mx-0">
            <Image
              src={homeProfilePhoto}
              alt={`${personalInfo.name} — profile photo`}
              placeholder="blur"
              className="mx-auto block h-auto w-full max-w-full object-contain object-center max-h-[14rem] sm:max-h-[18rem] md:max-h-[20rem]"
              sizes="(max-width: 768px) 100vw, 280px"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-pink-600 dark:text-pink-400">
              {personalInfo.role}
            </p>
            <h1 className="mt-2 bg-gradient-to-r from-pink-900 to-rose-800 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-pink-100 dark:to-rose-200 dark:text-pink-50 sm:text-4xl">
              {personalInfo.name.toUpperCase()}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-200">
              {personalInfo.summary}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                href="/about"
                className="rounded-full bg-pink-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-pink-800 hover:shadow-md dark:bg-pink-600 dark:hover:bg-pink-500"
              >
                View Resume
              </Link>
              <Link
                href="/projects"
                className="rounded-full border border-pink-300 bg-white/80 px-5 py-2.5 text-sm font-medium text-pink-900 shadow-sm transition hover:border-pink-400 hover:bg-pink-50 dark:border-pink-600 dark:bg-[#2a1f32] dark:text-pink-100 dark:hover:bg-pink-900/40"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-pink-200/80 bg-white/95 p-4 shadow-md shadow-pink-900/5 ring-1 ring-pink-100/80 dark:border-pink-900/60 dark:bg-[#1f1525]/95 dark:ring-pink-900/30 sm:p-6">
        <h2 className="mb-5 text-xl font-semibold text-pink-900 dark:text-pink-100 sm:text-2xl">
          Featured Projects
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="rounded-xl border border-pink-200/70 bg-gradient-to-b from-pink-50/90 to-white/50 p-4 shadow-sm transition hover:border-pink-300/80 hover:shadow-md dark:border-pink-800/60 dark:from-pink-950/25 dark:to-[#1f1525]/80 dark:hover:border-pink-700"
            >
              <h3 className="font-semibold text-pink-900 dark:text-pink-100">{project.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{project.description}</p>
              <Link
                href={`/projects/${project.slug}`}
                className="mt-3 inline-block rounded-full border border-pink-300 px-3 py-1.5 text-sm text-pink-900 transition hover:bg-pink-100 dark:border-pink-600 dark:text-pink-100 dark:hover:bg-pink-900/50"
              >
                View Project
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-5 rounded-2xl border border-pink-200/80 bg-gradient-to-br from-pink-50 via-rose-50/90 to-pink-100/50 p-5 shadow-md ring-1 ring-pink-100/60 dark:border-pink-900/60 dark:from-[#2a162d] dark:via-[#2f1a32] dark:to-[#341e2f] dark:ring-pink-900/25 sm:grid-cols-2 sm:p-6">
        <div>
          <h2 className="text-xl font-semibold text-pink-900 dark:text-pink-100 sm:text-2xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Feel free to reach out. I&apos;m open to projects and collaboration.
          </p>
        </div>
        <div className="flex items-center sm:justify-end">
          <Link
            href="/contact"
            className="rounded-full bg-pink-700 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-pink-800 hover:shadow-md dark:bg-pink-600 dark:hover:bg-pink-500"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
