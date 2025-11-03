import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Dashboard',
    description:
      'A data-rich dashboard with motion and delightful micro-interactions built with React and Tailwind.',
    tags: ['React', 'Tailwind', 'Motion'],
    link: '#',
    gradient: 'from-violet-500 via-fuchsia-500 to-pink-500',
  },
  {
    title: '3D Product Teaser',
    description:
      'Landing page featuring real-time 3D with Spline and smooth scroll-driven animations.',
    tags: ['Spline', 'Three', 'UX'],
    link: '#',
    gradient: 'from-cyan-500 via-sky-500 to-indigo-500',
  },
  {
    title: 'Minimal Portfolio',
    description:
      'A clean, fast personal site with themeable UI and accessible components.',
    tags: ['Vite', 'Accessibility', 'Performance'],
    link: '#',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-white">
            Selected Projects
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            A snapshot of things I enjoyed building recently.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className={`h-36 w-full rounded-xl bg-gradient-to-br ${p.gradient} opacity-80 transition group-hover:opacity-100`} />
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {p.title}
                  </h3>
                  <ExternalLink size={16} className="text-zinc-500 group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-white" />
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
