import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-white">
            Let’s build something together
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            I’m open to collaborations, freelance projects, and full-time roles.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 max-w-xl rounded-2xl border border-zinc-200 bg-white/80 p-6 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70"
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href="mailto:hello@example.com"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
            >
              <Mail size={16} />
              Email
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <p className="mt-10 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </section>
  )
}
