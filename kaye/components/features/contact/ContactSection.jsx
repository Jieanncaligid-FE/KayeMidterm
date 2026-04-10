import { personalInfo } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section id="contacts" className="space-y-6">
      <div className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm dark:border-pink-900 dark:bg-[#1f1525] sm:p-6">
        <h1 className="text-3xl font-semibold text-pink-900 dark:text-pink-100">Contact Me</h1>
        <p className="mt-1 text-sm text-pink-700 dark:text-pink-300">Feel free to reach out</p>
      </div>

      <form className="space-y-4 rounded-2xl border border-pink-200 bg-white p-4 shadow-sm dark:border-pink-900 dark:bg-[#1f1525] sm:p-6">
        <div className="grid gap-2 sm:grid-cols-[140px_1fr] sm:items-center">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            className="rounded-lg border border-pink-200 px-3 py-2 focus:border-pink-400 focus:outline-none dark:border-pink-700 dark:bg-[#2a1a31]"
            placeholder="Enter your name"
          />
        </div>
        <div className="grid gap-2 sm:grid-cols-[140px_1fr] sm:items-center">
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            className="rounded-lg border border-pink-200 px-3 py-2 focus:border-pink-400 focus:outline-none dark:border-pink-700 dark:bg-[#2a1a31]"
            placeholder="Enter your email"
          />
        </div>
        <div className="grid gap-2 sm:grid-cols-[140px_1fr] sm:items-start">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="4"
            className="rounded-lg border border-pink-200 px-3 py-2 focus:border-pink-400 focus:outline-none dark:border-pink-700 dark:bg-[#2a1a31]"
            placeholder="Write your message"
          />
        </div>
        <div className="flex justify-end">
          <button type="button" className="rounded-full bg-pink-700 px-5 py-2 text-white hover:bg-pink-800">
            Send Message
          </button>
        </div>
      </form>

      <div className="grid gap-4 rounded-2xl border border-pink-200 bg-white p-4 shadow-sm dark:border-pink-900 dark:bg-[#1f1525] sm:grid-cols-2 sm:p-6">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-pink-900 dark:text-pink-100">Contact Info</h3>
          <p><strong>Email:</strong> {personalInfo.contact.email}</p>
          <p><strong>Phone:</strong> {personalInfo.contact.phone}</p>
          <p><strong>Address:</strong> {personalInfo.contact.address}</p>
        </div>
        <div>
          <h3 className="mb-3 text-xl font-semibold text-pink-900 dark:text-pink-100">Social Links</h3>
          <div className="flex flex-wrap gap-2">
            {personalInfo.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="rounded-full border border-pink-300 px-3 py-1 text-sm text-pink-900 hover:bg-pink-50 dark:border-pink-700 dark:text-pink-100 dark:hover:bg-pink-900"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

