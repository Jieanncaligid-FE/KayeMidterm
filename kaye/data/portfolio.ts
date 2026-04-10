export type SocialLabel = "Facebook" | "Instagram" | "GitHub";

export type SocialLink = {
  label: SocialLabel;
  href: string;
};

export type Project = {
  slug: string;
  category: string;
  year: string;
  month: string;
  day: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string | null;
  repoUrl: string | null;
};

export const personalInfo: {
  name: string;
  role: string;
  summary: string;
  shortSummary: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  socials: SocialLink[];
} = {
  name: "Kaye Rucas",
  role: "Web Designer",
  summary:
    "A dedicated BSIT student with a strong interest in technology, software, and system development. I enjoy learning new tools, solving technical problems, and building projects that improve efficiency and user experience. I am committed to becoming a competent IT professional.",
  shortSummary:
    "I am an Information Technology student at Cordova Public College with a strong passion for Web Design. I am an enthusiastic learner committed to improving my design and development skills.",
  contact: {
    email: "rucaskaye@gmail.com",
    phone: "+63 9067669128",
    address: "Maribago, Lapu-Lapu City, Cebu, Philippines",
  },
  socials: [
    { label: "Facebook", href: "https://web.facebook.com/kaye.rucas/" },
    { label: "Instagram", href: "https://www.instagram.com/k_gonzales21/" },
    { label: "GitHub", href: "https://github.com/aye-ux" },
  ],
};

export const skills: string[] = ["JavaScript", "React/Next.js", "TailwindCSS", "C#", "Figma"];

export const personalDetails: { label: string; value: string }[] = [
  { label: "Birth Date", value: "September 19, 2005" },
  { label: "Birth Place", value: "Cebu City, Philippines" },
  { label: "Age", value: "19" },
  { label: "Sex", value: "Female" },
  { label: "Civil Status", value: "Single" },
  { label: "Religion", value: "Roman Catholic" },
  { label: "Nationality", value: "Filipino" },
];

export const education: { level: string; school: string }[] = [
  { level: "Elementary", school: "Maribago Elementary School" },
  { level: "Junior High School", school: "Maribago High School" },
  { level: "Senior High School", school: "Rizwoods Colleges Montessori School" },
  { level: "College", school: "Cordova Public College" },
];

export const projects: Project[] = [
  {
    slug: "midterm-app-devs",
    category: "web",
    year: "2026",
    month: "04",
    day: "08",
    title: "Midterm App Devs",
    description: "A full-stack web application showcasing app development projects.",
    imageUrl: "/images/p1.png",
    liveUrl: "https://midtermappdevs.vercel.app/",
    repoUrl: "https://github.com/ryleive039/midtermappdevs",
  },
  {
    slug: "3a-product-card",
    category: "ui",
    year: "2026",
    month: "04",
    day: "08",
    title: "3A Product Card",
    description: "A product card UI with modern styling and responsive design.",
    imageUrl: "/images/k2.jpg",
    liveUrl: "https://github.com/aye-ux/Project-no.1",
    repoUrl: "https://github.com/aye-ux/Project-no.1",
  },
  {
    slug: "holy-verse-api",
    category: "api",
    year: "2026",
    month: "04",
    day: "08",
    title: "Holy Verse API",
    description: "A personal website api activity.",
    imageUrl: "/images/k4.png",
    liveUrl: "https://kayerucas-bsit-2a.netlify.app/",
    repoUrl: "https://github.com/aye-ux/kayerucas/blob/main/index.html",
  },
  {
    slug: "kaye-ui-figma-design",
    category: "design",
    year: "2026",
    month: "04",
    day: "08",
    title: "Kaye UI (Figma Design)",
    description: "A clean and elegant UI/UX design created inside Figma.",
    imageUrl: "/images/k3.png",
    liveUrl:
      "https://www.figma.com/design/ufWbl1yumXd0kZQIg53Kjs/Kaye-Gwapa?node-id=0-1&p=f&t=jlzvXdgFxeeWoid6-0",
    repoUrl: null,
  },
];

