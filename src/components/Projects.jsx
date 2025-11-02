import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'NeuroEdge OS',
    description:
      'A minimal microservice platform for running AI inference at the edge with streaming observability.',
    tags: ['Go', 'gRPC', 'WebAssembly', 'OpenTelemetry'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'HoloUI Kit',
    description:
      'A glassmorphic component toolkit focused on accessibility, motion, and dark-mode aesthetics.',
    tags: ['React', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Lambda Graph',
    description:
      'A query engine that turns natural language into optimized graph traversals.',
    tags: ['TypeScript', 'Rust', 'LLM'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-600/10 opacity-0 transition group-hover:opacity-100" />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-white/70">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10 transition hover:bg-white/10"
          >
            <Github size={16} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1.5 text-xs text-white transition hover:brightness-110"
          >
            <ExternalLink size={16} /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0a0b0f] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight md:text-3xl"
        >
          Featured Projects
        </motion.h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
