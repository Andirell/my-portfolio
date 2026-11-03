// Small "browser window" next to each project. It shows real content from
// the project (API routes or lines from the live site) instead of a screenshot,
// so it never goes out of date or breaks when an image path changes.

const methodColors = {
  GET: 'text-live',
  POST: 'text-accent',
  PUT: 'text-[#b5650d] dark:text-[#f0a64a]',
  PATCH: 'text-[#b5650d] dark:text-[#f0a64a]',
  DELETE: 'text-[#c0392b] dark:text-[#ff8a7a]',
}

function EndpointList({ endpoints }) {
  return (
    <ul className="divide-y divide-line">
      {endpoints.map((endpoint) => {
        const method = endpoint[0]
        const path = endpoint[1]

        return (
          <li key={method + path} className="flex gap-4 px-5 py-3 font-mono text-[13px]">
            <span className={`w-14 shrink-0 font-bold ${methodColors[method]}`}>{method}</span>
            <span className="min-w-0 break-all">{path}</span>
          </li>
        )
      })}
    </ul>
  )
}

function SiteList({ heading, lines }) {
  return (
    <div className="px-5 py-5">
      <p className="font-display text-2xl font-bold tracking-tight">{heading}</p>
      <ul className="mt-4 grid grid-cols-2 gap-2">
        {lines.map((line) => (
          <li key={line} className="rounded-lg bg-paper px-3 py-2.5 text-sm font-semibold">
            {line}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProjectPreview({ project }) {
  const preview = project.preview

  // Not every project is deployed yet, so fall back to the GitHub link
  let link = project.liveUrl
  if (!link) {
    link = project.codeUrl
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.title}`}
      className="group block overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-accent"
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3 text-xs text-muted">
        <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v10H6z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        <span className="truncate">{preview.address}</span>
      </div>

      {preview.kind === 'endpoints' && <EndpointList endpoints={preview.endpoints} />}
      {preview.kind === 'list' && <SiteList heading={preview.heading} lines={preview.lines} />}
    </a>
  )
}

export default ProjectPreview
