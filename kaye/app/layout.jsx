import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata = {
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-gradient-to-b from-rose-50 to-pink-100 text-neutral-900 transition-colors dark:from-[#120d17] dark:to-[#1e1224] dark:text-neutral-100">
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

