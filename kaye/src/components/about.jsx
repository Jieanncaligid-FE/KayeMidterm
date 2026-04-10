export default function About() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-3xl font-semibold text-pink-900">About Me</h2>
        <p className="mt-1 text-sm text-pink-700">Background, skills, and education</p>
      </div>

      <div className="grid gap-5 rounded-2xl border border-pink-200 bg-white p-4 shadow-sm md:grid-cols-[260px_1fr] sm:p-6">
        <div className="flex h-56 items-center justify-center overflow-hidden rounded-xl border border-pink-200 bg-pink-50">
          <img src="/ky.jpg" alt="Kaye Rucas" className="h-full w-full object-cover" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-pink-900">Kaye Rucas</h3>
          <p className="mt-3 leading-relaxed text-neutral-700">
            I am an Information Technology student at Cordova Public College with
            a strong passion for Web Design.
          </p>
          <p className="mt-2 leading-relaxed text-neutral-700">
            I am an enthusiastic learner committed to improving my design and
            development skills.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-pink-200 bg-white p-4 shadow-sm sm:p-6">
        <h3 className="mb-3 text-2xl font-semibold text-pink-900">Skills</h3>
        <div className="grid gap-2 sm:grid-cols-2">
          {["JavaScript", "React/Next.js", "TailwindCSS", "C#", "Figma"].map((skill) => (
            <div key={skill} className="flex items-center gap-2 rounded-lg bg-pink-50 px-3 py-2">
              <span className="text-pink-700">•</span>
              <span className="text-pink-900">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-pink-200 bg-white p-4 shadow-sm sm:p-6">
        <h3 className="mb-3 text-2xl font-semibold text-pink-900">Personal Information</h3>
        <ul className="grid gap-2 sm:grid-cols-2">
          <li><strong>Birth Date:</strong> September 19, 2005</li>
          <li><strong>Birth Place:</strong> Cebu City, Philippines</li>
          <li><strong>Age:</strong> 19</li>
          <li><strong>Sex:</strong> Female</li>
          <li><strong>Civil Status:</strong> Single</li>
          <li><strong>Religion:</strong> Roman Catholic</li>
          <li><strong>Nationality:</strong> Filipino</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-pink-200 bg-white p-4 shadow-sm sm:p-6">
        <h3 className="mb-3 text-2xl font-semibold text-pink-900">Education Attainment</h3>
        <div className="space-y-1">
          <p><strong>Elementary:</strong> Maribago Elementary School</p>
          <p><strong>Junior High School:</strong> Maribago High School</p>
          <p><strong>Senior High School:</strong> Rizwoods Colleges Montessori School</p>
          <p><strong>College:</strong> Cordova Public College</p>
        </div>
      </div>
    </section>
  );
}
