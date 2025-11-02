import Hero from './components/Hero';
import Projects from './components/Projects';
import BlogSection from './components/BlogSection';
import ContactResume from './components/ContactResume';

function App() {
  return (
    <div className="min-h-screen bg-[#080a0f] text-white antialiased">
      <Hero />
      <Projects />
      <BlogSection />
      <ContactResume />
      <footer className="bg-[#080a0f] py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Sid Lakhani. Built with care.
      </footer>
    </div>
  );
}

export default App;
