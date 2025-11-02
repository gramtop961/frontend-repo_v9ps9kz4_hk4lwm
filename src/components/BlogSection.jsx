import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Architecting Minimal Systems that Scale',
    date: 'Sep 15, 2025',
    excerpt:
      'Exploring the intersection of minimal design, distributed systems, and developer experience.',
    image: '#',
    url: '#',
  },
  {
    title: 'Dark UI: Function over Flourish',
    date: 'Aug 28, 2025',
    excerpt:
      'Principles for crafting dark-mode interfaces with clarity, contrast, and comfort.',
    image: '#',
    url: '#',
  },
  {
    title: 'From Prompt to Product',
    date: 'Aug 02, 2025',
    excerpt:
      'An end-to-end guide on going from exploration to production with AI-native apps.',
    image: '#',
    url: '#',
  },
];

function BlogCard({ post }) {
  return (
    <motion.a
      href={post.url}
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="group block overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
    >
      <div className="aspect-[16/9] w-full bg-gradient-to-br from-slate-800 to-slate-900" />
      <div className="p-5">
        <div className="text-xs text-white/50">{post.date}</div>
        <h3 className="mt-1 text-lg font-semibold text-white">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-white/70">{post.excerpt}</p>
        <div className="mt-4 inline-block text-sm text-cyan-400/90 transition group-hover:text-cyan-300">Read More →</div>
      </div>
    </motion.a>
  );
}

export default function BlogSection() {
  return (
    <section id="blog" className="relative bg-[#0a0b0f] py-20 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold tracking-tight md:text-3xl"
        >
          Blog
        </motion.h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.title} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
