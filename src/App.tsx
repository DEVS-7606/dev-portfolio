import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

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

        <section id="projects" className="scroll-mt-24 py-10">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
            We&apos;ll add your projects here next.
          </p>
        </section>

        <section id="experience" className="scroll-mt-24 py-10">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
            We&apos;ll add your experience here next.
          </p>
        </section>

        <section id="education" className="scroll-mt-24 py-10">
          <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
          <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
            We&apos;ll add your education here next.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
