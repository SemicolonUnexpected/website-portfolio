import Hero from "@/components/hero";
import ProgrammingLanguages from "@/components/programming-languages";

export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-3 gap-4">
        <div className="flex h-52 items-center md:justify-start justify-center">
          <Hero/>
        </div>
        <div className="flex items-center h-52">
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
