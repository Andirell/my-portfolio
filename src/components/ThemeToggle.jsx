function ThemeToggle({ isDark, onToggle }) {
  let label = 'Switch to dark mode'
  if (isDark) {
    label = 'Switch to light mode'
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
    >
      {isDark ? (
        <svg className="size-5" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-5.66 1.41-1.41M4.93 19.07l1.41-1.41m0-11.32L4.93 4.93m14.14 14.14-1.41-1.41M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ) : (
        <svg className="size-5" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
