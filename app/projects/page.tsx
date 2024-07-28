import { title } from "@/components/primitives";
import { Typescript, CSharp, Arch } from "@/components/icons";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className={title()}>Projects</h1>
      <Typescript/>
      <CSharp size={100}/>
      <Arch size={100}/>
    </div>
  );
}
