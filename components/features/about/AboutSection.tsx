import { education, personalDetails, personalInfo, skills } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm dark:border-pink-900 dark:bg-[#1f1525] sm:p-6">
        <h1 className="text-3xl font-semibold text-pink-900 dark:text-pink-100">About Me</h1>
        <p className="mt-1 text-sm text-pink-700 dark:text-pink-300">Background, skills, and education</p>
      </div>

      <div className="grid gap-5 rounded-2xl border border-pink-200 bg-white p-4 shadow-sm dark:border-pink-900 dark:bg-[#1f1525] md:grid-cols-[260px_1fr] sm:p-6">
        <div className="flex h-56 items-center justify-center overflow-hidden rounded-xl border border-pink-200 bg-pink-50 dark:border-pink-800 dark:bg-pink-950/20">
          <img src="/ky.jpg" alt={personalInfo.name} className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-pink-900 dark:text-pink-100">{personalInfo.name}</h2>
          <p className="mt-3 leading-relaxed text-neutral-700 dark:text-neutral-200">{personalInfo.shortSummary}</p>
        </div>
      </div>

      <div className="rounded-2xl border border-pink-200 bg-white p-4 shadow-sm dark:border-pink-900 dark:bg-[#1f1525] sm:p-6">
        <h3 className="mb-3 text-2xl font-semibold text-pink-900 dark:text-pink-100">Skills</h3>
        <div className="grid gap-2 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill} className="flex items-center gap-2 rounded-lg bg-pink-50 px-3 py-2 dark:bg-pink-950/20">
              <span className="text-pink-700 dark:text-pink-300">•</span>
              <span className="text-pink-900 dark:text-pink-100">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-pink-200 bg-white p-4 shadow-sm dark:border-pink-900 dark:bg-[#1f1525] sm:p-6">
        <h3 className="mb-3 text-2xl font-semibold text-pink-900 dark:text-pink-100">Personal Information</h3>
        <ul className="grid gap-2 sm:grid-cols-2 dark:text-neutral-200">
          {personalDetails.map((item) => (
            <li key={item.label}>
              <strong>{item.label}:</strong> {item.value}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-pink-200 bg-white p-4 shadow-sm dark:border-pink-900 dark:bg-[#1f1525] sm:p-6">
        <h3 className="mb-3 text-2xl font-semibold text-pink-900 dark:text-pink-100">Education Attainment</h3>
        <div className="space-y-1 dark:text-neutral-200">
          {education.map((item) => (
            <p key={item.level}>
              <strong>{item.level}:</strong> {item.school}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

