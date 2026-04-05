import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import About from "@/components/organisms/About";
import Experience from "@/components/organisms/Experience";
import Education from "@/components/organisms/Education";
import Projects from "@/components/organisms/Projects";
import Achievements from "@/components/organisms/Achievements";
// import Contact from "@/components/organisms/Contact";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Contact from "@/components/organisms/Contact";
// import { DatabaseTest } from "@/components/DatabaseTest";

function App() {
  // Initialize scroll spy to update URL as user scrolls
  useScrollSpy();

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* <DatabaseTest /> */}
      <Header />

      <main className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <Hero />

        <About />

        <Experience />

        <Education />

        <Projects />

        <Achievements />

        <Contact />
      </main>
    </div>
  );
}

export default App;
