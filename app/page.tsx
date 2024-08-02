import Hero from "@/components/hero";
import ProgrammingLanguages from "@/components/programming-languages";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex h-80 items-center justify-center">
          <Hero/>
        </div>
        <div className="flex items-center">
          Hi, I&#39;m Matthew aka. github user SemicolonUnexpected. I am enthusiastic for computer science and mathematics problems
        </div>

        <div>
        </div>
        <div>
          <ProgrammingLanguages/>
        </div>

        <div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}
