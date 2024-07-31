import { title } from "@/components/primitives"
import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className={title()}>Projects</h1>

      <ProjectCard/>
      
    </div>
  );
}
