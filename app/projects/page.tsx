import { title } from "@/components/primitives"
import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <div className="space-y-4">
      <h1 className={title()}>What have I been up to?</h1>
      <div className="text-center">
        Over the past while, I have been working on several projects, some of which are showcased below...
      </div>

      {/* The projects */}

      <div className="flex flex-cols justify-center">
        <ProjectCard title="Test" page="/" text="This is some very very very very very very long text"/>
      </div>
      
    </div>
  );
}
