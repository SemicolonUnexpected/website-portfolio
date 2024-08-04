import Hero from "@/components/hero";
import ProgrammingLanguages from "@/components/programming-languages";
import Linux from "@/components/linux";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex h-60 sm:h-80 items-center justify-center">
          <Hero/>
        </div>
        <div className="flex items-center text-justify sm:text-center m-auto text-lg">
          Hi, I&#39;m Matthew aka. github user SemicolonUnexpected. I am enthusiastic for computer science and mathematics problems, robotics and building projects
        </div>

        <div className="flex h-60 sm:h-80 items-center justify-center">
          <ProgrammingLanguages/>
        </div>
        <div className="flex items-center text-justify sm:text-center m-auto">
          Hi, I&#39;m Matthew aka. github user SemicolonUnexpected. I am enthusiastic for computer science and mathematics problems
        </div>

        <div>
          <Linux/>
        </div>
        <div className="flex items-center text-justify sm:text-center m-auto">
          Hi, I&#39;m Matthew aka. github user SemicolonUnexpected. I am enthusiastic for computer science and mathematics problems
        </div>
      </div>
    </>
  );
}
