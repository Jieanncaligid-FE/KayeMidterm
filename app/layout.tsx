import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import type { ReactNode } from "react";
// 1. Add this import
import Script from "next/script"; 

export const metadata: Metadata = {
  title: "Kaye Portfolio",
  description: "Portfolio website of Kaye Rucas",
};

const themeInitScript = `
(function(){
  try {
    var s = localStorage.getItem("theme");
    var d = s === "dark" || (s !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", d);
  } catch (_) {}
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="flex min-h-screen flex-col bg-gradient-to-b from-rose-50 to-pink-100 text-neutral-900 transition-colors dark:from-[#120d17] dark:to-[#1e1224] dark:text-neutral-100">
        {/* 2. Use the Next.js Script component with 'beforeInteractive' strategy */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 px-4 py-6 sm:px-8 sm:py-8">
            <div className="mx-auto w-full max-w-5xl">{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}