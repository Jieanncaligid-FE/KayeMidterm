export const activeNavLinkClass =
  "rounded-md border border-pink-700 bg-pink-700 px-3 py-1.5 text-sm text-white transition";

export const inactiveNavLinkClass =
  "rounded-md border border-pink-200 bg-white px-3 py-1.5 text-sm text-pink-900 transition hover:bg-pink-50 dark:border-pink-700 dark:bg-[#24142b] dark:text-pink-100 dark:hover:bg-pink-900";

export function navLinkClassName(isActive: boolean) {
  return isActive ? activeNavLinkClass : inactiveNavLinkClass;
}
