import ProjectDetailSection from "@/components/features/projects/ProjectDetailSection";
import { projects } from "@/data/portfolio";

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return <ProjectDetailSection project={project} />;
}

