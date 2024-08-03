import { CSharp, Typescript, Python } from "@/components/icons";

export default function ProgrammingLanguages() {
  return(
    <div className="relative flex w-full h-80">
      <CSharp size={90} className=""/>
      <Typescript size={90} className="absolute bottom-0 right-64"/>
      <Python size={90} className=""/>
    </div>
  );
}
