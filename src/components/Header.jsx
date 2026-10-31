import ThemeToggle from './ThemeToggle'
import { profile } from '../data'

function Header({ isDark, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
        aria-label="Main"
      >
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {profile.name}
        </a>

        <div className="flex items-center gap-1 sm:gap-6">
          <div className="hidden items-center gap-6 text-sm text-muted sm:flex">
            <a className="hover:text-ink" href="#work">
              Work
            </a>
            <a className="hover:text-ink" href="#about">
              About
            </a>
            <a className="hover:text-ink" href="#contact">
              Contact
            </a>
          </div>

          {profile.resumeUrl && (
            <a
              className="hidden rounded-full border border-line px-4 py-2 text-sm font-semibold hover:border-ink sm:inline-block"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          )}

          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </div>
      </nav>
    </header>
  )
}

export default Header
