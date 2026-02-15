import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import About from "@/components/organisms/About";
import Experience from "@/components/organisms/Experience";
import Education from "@/components/organisms/Education";

function App() {
  return (
    <div
      id="top"
      className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
    >
      <Header />

      <main className="mx-auto max-w-[1280px] px-4 py-24">
        <Hero />

        <About />

        <Experience />

        <Education />

        <section id="projects" className="scroll-mt-24 py-10">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
            We&apos;ll add your projects here next.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
