export default function Contacts() {
  return (
    <section id="contacts" className="space-y-6">
      <div className="rounded-2xl border border-pink-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-3xl font-semibold text-pink-900">Contact Me</h2>
        <p className="mt-1 text-sm text-pink-700">Feel free to reach out</p>
      </div>

      <form className="space-y-4 rounded-2xl border border-pink-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="grid gap-2 sm:grid-cols-[140px_1fr] sm:items-center">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            className="rounded-lg border border-pink-200 px-3 py-2 focus:border-pink-400 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div className="grid gap-2 sm:grid-cols-[140px_1fr] sm:items-center">
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            className="rounded-lg border border-pink-200 px-3 py-2 focus:border-pink-400 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div className="grid gap-2 sm:grid-cols-[140px_1fr] sm:items-start">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="4"
            className="rounded-lg border border-pink-200 px-3 py-2 focus:border-pink-400 focus:outline-none"
            placeholder="Write your message"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-full bg-pink-700 px-5 py-2 text-white hover:bg-pink-800"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="grid gap-4 rounded-2xl border border-pink-200 bg-white p-4 shadow-sm sm:grid-cols-2 sm:p-6">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-pink-900">Contact Info</h3>
          <p><strong>Email:</strong> rucaskaye@gmail.com</p>
          <p><strong>Phone:</strong> +63 9067669128</p>
          <p><strong>Address:</strong> Maribago, Lapu-Lapu City, Cebu, Philippines</p>
        </div>
        <div>
          <h3 className="mb-3 text-xl font-semibold text-pink-900">Social Links</h3>
          <div className="flex flex-wrap gap-2">
            <a href="https://web.facebook.com/kaye.rucas/" className="rounded-full border border-pink-300 px-3 py-1 text-sm text-pink-900 hover:bg-pink-50">Facebook</a>
            <a href="https://www.instagram.com/k_gonzales21/" className="rounded-full border border-pink-300 px-3 py-1 text-sm text-pink-900 hover:bg-pink-50">Instagram</a>
            <a href="https://github.com/aye-ux" className="rounded-full border border-pink-300 px-3 py-1 text-sm text-pink-900 hover:bg-pink-50">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
