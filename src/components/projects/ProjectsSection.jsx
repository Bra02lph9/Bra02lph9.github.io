import { projects } from "../../data/projects";
import SectionTitle from "../layout/SectionTitle";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-24">
      <SectionTitle label="Projects" title="Recent Projects" />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
