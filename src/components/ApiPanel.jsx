import { useState } from 'react'
import { apiSamples } from '../data'

function ApiPanel() {
  const [selected, setSelected] = useState(0)
  const sample = apiSamples[selected]

  return (
    <div className="overflow-hidden rounded-2xl bg-code text-code-ink shadow-[0_30px_60px_-30px_rgba(22,24,42,0.55)]">
      <div className="flex gap-1 overflow-x-auto border-b border-white/10 p-2" role="tablist" aria-label="My live APIs">
        {apiSamples.map((item, index) => {
          const isSelected = index === selected
          let tabClass = 'text-code-ink/60 hover:text-code-ink'
          if (isSelected) {
            tabClass = 'bg-white/10 text-code-ink'
          }

          return (
            <button
              key={item.label}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelected(index)}
              className={`shrink-0 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${tabClass}`}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <div className="p-5 font-mono text-[13px] leading-6 sm:p-6">
        <p className="break-all">
          <span className="mr-2 font-bold text-[#9db0ff]">{sample.method}</span>
          {sample.url}
        </p>

        <p className="mt-3 flex items-center gap-2 text-[#6ee2ad]">
          <span className="size-2 rounded-full bg-[#6ee2ad]" aria-hidden="true"></span>
          Deployed on Render
        </p>

        {/* The key makes React redraw the lines, so the reveal plays again on every tab change */}
        <pre key={selected} className="mt-4 min-h-56 overflow-x-auto whitespace-pre text-code-ink/85">
          {sample.response.map((line, index) => (
            <span
              key={index}
              className="response-line block"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {line}
            </span>
          ))}
        </pre>

        <a
          className="mt-2 inline-block font-sans text-sm font-semibold text-[#9db0ff] underline underline-offset-4"
          href={sample.openUrl}
          target="_blank"
          rel="noreferrer"
        >
          {sample.openText}
        </a>
      </div>
    </div>
  )
}

export default ApiPanel
