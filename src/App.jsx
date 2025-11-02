import Hero from './components/Hero';
import Projects from './components/Projects';
import BlogSection from './components/BlogSection';
import ContactResume from './components/ContactResume';

function App() {
  return (
    <div className="min-h-screen bg-[#07080c] text-white antialiased selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Subtle global backdrop effects */}
      <div className="pointer-events-none fixed inset-0 opacity-70 [background:radial-gradient(60%_60%_at_50%_0%,#0b1220_0%,transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px] mix-blend-overlay" />

      <Hero />
      <Projects />
      <BlogSection />
      <ContactResume />

      <footer className="py-12 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Sid Lakhani — crafted with taste.
      </footer>
    </div>
  );
}

export default App;
