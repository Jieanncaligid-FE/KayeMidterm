export default function Navbar({
  currentView,
  onHomeClick,
  onProjectsClick,
  onAboutClick,
  onContactsClick,
  onCpuClick,
}) {
  const links = [
    { id: "home", label: "Home", onClick: onHomeClick },
    { id: "projects", label: "Projects", onClick: onProjectsClick },
    { id: "about", label: "About", onClick: onAboutClick },
    { id: "contact", label: "Contact", onClick: onContactsClick },
    { id: "cpuScheduling", label: "CPU Scheduling", onClick: onCpuClick },
  ];

  return (
    <nav className="sticky top-0 z-30 border-b border-pink-200 bg-white/85 px-4 py-3 backdrop-blur sm:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block h-4 w-4 rounded-full bg-pink-700" />
          <span className="text-lg font-semibold tracking-wide text-pink-900">
            Kaye Portfolio
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={link.onClick}
              className={`rounded-md border px-3 py-1.5 text-sm transition ${
                currentView === link.id
                  ? "border-pink-700 bg-pink-700 text-white"
                  : "border-pink-200 bg-white hover:bg-pink-50 text-pink-900"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
