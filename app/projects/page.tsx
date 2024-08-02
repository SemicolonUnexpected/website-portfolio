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

      <div className="flex flex-col justify-center items-center space-y-4">
        <ProjectCard 
          title="Project Euler" 
          route="/projects/project-euler" 
          text="This is a test"
          imageSrc="/clouds.jpg"/> 
        <ProjectCard 
          title="AS Coursework" 
          route="/projects/as-coursework" 
          text="This is a test"
          isIcon
          imageSrc="/clouds.jpg"/> 
        <ProjectCard 
          title="Wordscapes Bot" 
          route="/projects/wordscapes-bot" 
          text="This is a test"
          imageSrc="/placeholder.jpg"/> 
        <ProjectCard 
          title="Robotics" 
          route="/projects/robotics" 
          text="This is a test"
          imageSrc="/clouds.jpg"/> 
        <ProjectCard 
          title="Test" 
          route="/" 
          text="Test"/>
      </div>
      
    </div>
  );
}
