import { title } from "@/components/primitives"
import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className={title()}>What have I been up to?</h1>
      <div className="text-center">
        Over the past while, I have been working on several projects, some of which are showcased below...
      </div>

      {/* The projects */}

      <div className="flex flex-col justify-center space-y-4">
        <ProjectCard title="Test" route="/" text="This is some very very very very very very long text"/> 
        <ProjectCard title="Test" route="/" text="This is some very very very very very very long text"/> 
        <ProjectCard title="Test" route="/" text="This is some very very very very very very long text"/> 
        <ProjectCard title="Test" route="/" text="This is some very very very very very very long text"/> 
        <ProjectCard title="Test" route="/" text="This is some very very very very very very long text" imageSrc="../public/clouds.jpg"/>
      </div>
      
    </div>
  );
}
