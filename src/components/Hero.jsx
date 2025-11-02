import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

function SignatureLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center gap-2"
    >
      <div className="relative h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400/30 to-blue-600/30 ring-1 ring-white/10 backdrop-blur">
        <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_30px_rgba(59,130,246,0.35)]" />
      </div>
      <span className="text-sm tracking-widest text-white/80">SID LAKHANI</span>
    </motion.div>
  );
}

export default function Hero() {
  const subtitle = useMemo(
    () => 'Building systems that think and designs that feel.',
    []
  );

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0b0f] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(56,189,248,0.12),rgba(2,6,23,0.0))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.6))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col px-6">
        <header className="flex items-center justify-between py-6">
          <SignatureLogo />
          <nav className="hidden gap-6 md:flex">
            <a href="#projects" className="text-sm text-white/70 transition hover:text-white">Projects</a>
            <a href="#blog" className="text-sm text-white/70 transition hover:text-white">Blog</a>
            <a href="#contact" className="text-sm text-white/70 transition hover:text-white">Contact</a>
            <a href="#resume" className="text-sm text-white/70 transition hover:text-white">Resume</a>
          </nav>
        </header>

        <div className="flex grow items-center">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
            >
              Hi, I’m <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Sid Lakhani</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mt-4 text-lg text-white/70 md:text-xl"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="rounded-full bg-white/5 px-5 py-2 text-sm text-white/90 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm text-white shadow-[0_0_40px_rgba(59,130,246,0.35)] transition hover:brightness-110"
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
