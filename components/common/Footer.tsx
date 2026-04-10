import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { SocialIcon } from "./SocialFooterIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-pink-200/90 bg-white/90 px-4 pt-4 pb-6 shadow-[0_-1px_0_0_rgba(236,72,153,0.08)] backdrop-blur-md dark:border-pink-900/80 dark:bg-[#1b1220]/95 dark:shadow-[0_-1px_0_0_rgba(131,24,67,0.35)] sm:px-8 sm:pb-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm text-pink-900 dark:text-pink-100">
            © {year} {personalInfo.name}
          </p>
          <Link
            href="/contact"
            className="text-sm text-pink-700 underline-offset-2 hover:text-pink-900 hover:underline dark:text-pink-300 dark:hover:text-pink-100"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-1 sm:justify-end">
          {personalInfo.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className="rounded-full p-2.5 text-pink-700 transition hover:bg-pink-100 hover:text-pink-900 dark:text-pink-300 dark:hover:bg-pink-900/50 dark:hover:text-pink-100"
            >
              <SocialIcon label={social.label} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
