import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-3 gap-4">
        <div className="flex h-36 items-center">
          <Hero/>
        </div>
        <div className="flex bg-gray-600 items-center">Hello</div>
        <div className="bg-gray-600">Hello</div>
        <div>Hello</div>
        <div className="bg-gray-600">Hello</div>
        <div className="bg-gray-600">Hello</div>
      </div>
    </>
  );
}
