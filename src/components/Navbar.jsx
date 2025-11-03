import { useState } from 'react'
import { Menu, X, Rocket, Github, Linkedin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/70 backdrop-blur dark:bg-zinc-900/60 shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
                <Rocket size={18} />
              </div>
              <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                MyPortfolio
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="ml-4 flex items-center gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-700"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 px-4 py-3">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
