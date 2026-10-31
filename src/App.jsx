import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

const themeStorageKey = 'portfolio-theme'

function getStartingTheme() {
  // localStorage can throw in some private browsing modes, so fall back to the system setting
  try {
    const savedTheme = window.localStorage.getItem(themeStorageKey)
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme
    }
  } catch {
    // ignore and use the system setting below
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

function App() {
  const [theme, setTheme] = useState(getStartingTheme)
  const isDark = theme === 'dark'

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    try {
      window.localStorage.setItem(themeStorageKey, theme)
    } catch {
      // the theme still works for this visit, it just won't be remembered
    }
  }, [isDark, theme])

  function toggleTheme() {
    if (isDark) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
