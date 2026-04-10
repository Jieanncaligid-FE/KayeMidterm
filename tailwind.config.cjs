/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Tell Tailwind to use the 'dark' class on the html tag
  darkMode: "class", 
  
  // 2. Make sure these paths match where your folders actually are
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // If you use the pages folder
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Keep this just in case
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};