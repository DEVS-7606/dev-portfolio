import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import About from "@/components/organisms/About";
import Experience from "@/components/organisms/Experience";
import Education from "@/components/organisms/Education";
import Projects from "@/components/organisms/Projects";
import Achievements from "@/components/organisms/Achievements";
import Contact from "@/components/organisms/Contact";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Footer from "@/components/organisms/Footer";

function App() {
  useScrollSpy();

  return (
    <div className="relative min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-body">
      {/* ── Global Background Layer ── */}
      <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
        {/* Dot-grid pattern across entire site */}
        <div className="absolute inset-0 dot-grid-bg opacity-50" />

        {/* Top-left accent glow */}
        <div
          className="absolute top-0 left-0 w-[800px] h-[800px]"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, rgba(215,25,33,0.05) 0%, transparent 60%)",
          }}
        />

        {/* Bottom-right accent glow */}
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle at 100% 100%, rgba(215,25,33,0.04) 0%, transparent 60%)",
          }}
        />

        {/* Decorative vertical glyph line — left edge */}
        <div className="absolute top-[20%] left-8 w-px h-[200px] bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent opacity-10" />

        {/* Decorative vertical glyph line — right edge */}
        <div className="absolute top-[60%] right-8 w-px h-[300px] bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent opacity-10" />

        {/* Decorative horizontal glyph line — middle */}
        <div className="absolute top-[45%] left-0 w-[120px] h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-8" />
      </div>

      <Header />

      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
