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
        <div className="flex items-center text-justify sm:text-center m-auto text-lg">
          I am self taught in python, C# and typescript. I also have some experience with java through the First Robotics Competition and have dabbled in haskell and rust.
        </div>

        <div className="flex h-60 sm:h-80 items-center justify-center">
          <Linux/>
        </div>
        <div className="flex items-center text-justify sm:text-center m-auto">
          Linux is my primary OS, but I also dual boot windows... I use Arch btw
        </div>
      </div>
    </>
  );
}
