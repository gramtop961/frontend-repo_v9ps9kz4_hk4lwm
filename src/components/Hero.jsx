import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

function SignatureLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex items-center gap-2"
    >
      <div className="relative h-7 w-7 rounded-xl bg-gradient-to-br from-cyan-400/25 to-violet-500/25 ring-1 ring-white/10 backdrop-blur-md">
        <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_25px_rgba(99,102,241,0.35)]" />
      </div>
      <span className="text-[11px] tracking-[0.3em] text-white/70">SID LAKHANI</span>
    </motion.div>
  );
}

export default function Hero() {
  const subtitle = useMemo(
    () => 'Gen Z energy. Minimal taste. Systems that feel alive.',
    []
  );

  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#080a0f] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlays: gradient glow + bottom fade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_20%,rgba(56,189,248,0.14),rgba(2,6,23,0.0))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.7))]" />

      {/* Content with big margins on desktop */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-4xl flex-col px-5 md:px-6 xl:px-0">
        <header className="flex items-center justify-between py-6">
          <SignatureLogo />
          <nav className="hidden items-center gap-4 md:flex">
            <a href="#projects" className="text-xs text-white/70 transition hover:text-white/90">Projects</a>
            <a href="#blog" className="text-xs text-white/70 transition hover:text-white/90">Blog</a>
            <a href="#contact" className="text-xs text-white/70 transition hover:text-white/90">Contact</a>
            <a href="#resume" className="text-xs text-white/70 transition hover:text-white/90">Resume</a>
          </nav>
        </header>

        <div className="flex grow items-center py-6">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[32px] font-light leading-tight tracking-tight md:text-[56px]"
            >
              Hi, I’m{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                Sid Lakhani
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mt-3 text-base text-white/70 md:text-lg"
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
                className="rounded-full px-5 py-2 text-xs text-white/90 ring-1 ring-white/15 backdrop-blur-md transition hover:bg-white/5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2 text-xs text-white shadow-[0_0_40px_rgba(99,102,241,0.35)] transition hover:brightness-110"
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
