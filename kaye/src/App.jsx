import React, { useState } from "react";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import About from "./components/about";
import Project from "./components/project";
import PinkScheduling from "./components/PinkScheduling";
import Contacts from "./components/contact";

function Footer() {
  return (
    <footer className="border-t border-pink-200 bg-white/80 px-4 py-5 sm:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-pink-900">
        <p className="text-sm font-medium">
          Built by Kaye Rucas - Web Designer / BSIT Student
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://web.facebook.com/kaye.rucas/"
            aria-label="Facebook"
            className="rounded-full border border-pink-300 px-3 py-1 text-sm hover:bg-pink-100"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/k_gonzales21/"
            aria-label="Instagram"
            className="rounded-full border border-pink-300 px-3 py-1 text-sm hover:bg-pink-100"
          >
            Instagram
          </a>
          <a
            href="https://github.com/aye-ux"
            aria-label="GitHub"
            className="rounded-full border border-pink-300 px-3 py-1 text-sm hover:bg-pink-100"
          >
            GitHub
          </a>
          <a
            href="mailto:rucaskaye@gmail.com"
            aria-label="Email"
            className="rounded-full border border-pink-300 px-3 py-1 text-sm hover:bg-pink-100"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [currentView, setCurrentView] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-100">
      <Navbar
        currentView={currentView}
        onHomeClick={() => setCurrentView("home")}
        onProjectsClick={() => setCurrentView("projects")}
        onAboutClick={() => setCurrentView("about")}
        onContactsClick={() => setCurrentView("contact")}
        onCpuClick={() => setCurrentView("cpuScheduling")}
      />

      <main className="px-4 py-6 sm:px-8 sm:py-8">
        {currentView === "home" && (
          <Profile
            onProjectsClick={() => setCurrentView("projects")}
            onContactsClick={() => setCurrentView("contact")}
            onAboutClick={() => setCurrentView("about")}
          />
        )}
        {currentView === "about" && <About />}
        {currentView === "projects" && <Project onCpuClick={() => setCurrentView("cpuScheduling")} />}
        {currentView === "cpuScheduling" && <PinkScheduling />}
        {currentView === "contact" && <Contacts />}
      </main>

      <div className="px-4 pb-6 sm:px-8 sm:pb-8">
        <Footer />
      </div>
    </div>
  );
}

export default App;