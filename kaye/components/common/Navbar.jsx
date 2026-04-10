"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinkClassName } from "./nav-link-styles";
import { siteNavLinks } from "./site-nav-links";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-30 border-b border-pink-200 bg-white/85 px-4 py-3 backdrop-blur dark:border-pink-900 dark:bg-[#1b1220]/90 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block h-4 w-4 shrink-0 rounded-full bg-pink-700" aria-hidden />
          <span className="text-lg font-semibold tracking-wide text-pink-900 dark:text-pink-100">
            Kaye Portfolio
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {siteNavLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={navLinkClassName(active)}>
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
