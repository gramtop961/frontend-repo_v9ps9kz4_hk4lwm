import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';

const RESUME_URL = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

export default function ContactResume() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    // In a full app, send to backend; for now provide quick feedback
    alert(`Thanks ${payload.name}! I will get back to you at ${payload.email}.`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative bg-[#0a0b0f] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
        <div>
          <motion.h2
            id="resume"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold tracking-tight md:text-3xl"
          >
            Contact
          </motion.h2>
          <p className="mt-2 text-white/70">
            Let’s build something meaningful. For collaborations, roles, or freelance work, drop a message.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-white/70">Name</label>
              <input
                required
                name="name"
                className="mt-1 w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-white placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input
                required
                type="email"
                name="email"
                className="mt-1 w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-white placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="you@domain.com"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70">Message</label>
              <textarea
                required
                name="message"
                rows={4}
                className="mt-1 w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-white placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="What would you like to build?"
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm text-white shadow-[0_0_40px_rgba(59,130,246,0.35)] transition hover:brightness-110"
              >
                Send Message
              </button>
              <a
                href="mailto:sidlakhani@example.com"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <Mail size={16} /> sidlakhani@example.com
              </a>
            </div>

            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/sidlakhani"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/70 transition hover:text-white"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sidlakhani"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/70 transition hover:text-white"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </form>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold tracking-tight md:text-3xl"
          >
            Resume
          </motion.h2>
          <p className="mt-2 text-white/70">
            Download a concise PDF or preview it inline.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/90 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <Download size={16} /> Download PDF
            </a>
          </div>
          <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-white/10">
            <iframe
              title="Sid Lakhani Resume"
              src={RESUME_URL}
              className="h-72 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
