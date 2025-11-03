import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/70 dark:from-zinc-900/40 dark:via-zinc-900/10 dark:to-zinc-900/80" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200">
                Crafting delightful experiences
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-white">
                Modern portfolio for a creative developer
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-300">
                I blend thoughtful design, interactive 3D, and robust engineering to build
                playful, modern web experiences. Explore selected work and get in touch.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:opacity-90"
                >
                  View Projects
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white/60 px-5 py-3 text-sm font-semibold text-zinc-800 backdrop-blur transition hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-100"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
