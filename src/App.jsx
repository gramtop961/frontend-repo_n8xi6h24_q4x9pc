import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-white to-zinc-50 text-zinc-900 dark:from-zinc-950 dark:to-zinc-900 dark:text-zinc-50">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
