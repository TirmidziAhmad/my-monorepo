import Introduction from "./components/Introduction";
import TechStack from "./components/TechStack";
import Project from "./components/Project";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen ">
        <Hero />
      </section>
      {/* introduction */}
      <section className="h-[50vh] flex flex-col justify-center items-center  gap-4 font-normal">
        <Introduction />
      </section>
      {/* tech stack */}
      <section className="h-[90vh] flex flex-col items-center justify-center gap-2">
        <TechStack />
      </section>
      {/* personal project */}
      <section className="h-[90vh] flex flex-col items-center justify-center">
        <Project />
      </section>
    </div>
  );
}
