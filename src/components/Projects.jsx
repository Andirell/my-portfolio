import ProjectPreview from './ProjectPreview'
import { projects } from '../data'

function ProjectLink({ href, children, primary }) {
  let style = 'border border-ink/25 hover:border-ink'
  if (primary) {
    style = 'bg-ink text-paper hover:bg-accent hover:text-accent-ink'
  }

  return (
    <a
      className={`inline-flex h-10 items-center rounded-full px-4 text-sm font-semibold transition-colors ${style}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

function ProjectRow({ project }) {
  // APIs open their docs, sites open the site itself
  let liveText = 'Open live site'
  if (project.kind === 'Backend API') {
    liveText = 'Open API docs'
  }

  return (
    <article className="grid gap-10 border-t border-line py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-20">
      <div>
        <p className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <span>{project.kind}</span>
          {project.liveUrl ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-live/40 px-2.5 py-0.5 font-semibold text-live">
              <span className="size-1.5 rounded-full bg-live" aria-hidden="true"></span>
              Live
            </span>
          ) : (
            <span className="rounded-full border border-line px-2.5 py-0.5 font-semibold">Code on GitHub</span>
          )}
        </p>

        <h3 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{project.summary}</p>

        <dl className="mt-6 grid max-w-xl gap-4 text-[15px] leading-7">
          {project.frontend && (
            <div>
              <dt className="font-semibold">Frontend</dt>
              <dd className="text-muted">{project.frontend}</dd>
            </div>
          )}
          {project.backend && (
            <div>
              <dt className="font-semibold">Backend</dt>
              <dd className="text-muted">{project.backend}</dd>
            </div>
          )}
        </dl>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Built with">
          {project.stack.map((item) => (
            <li key={item} className="rounded-md bg-surface px-2.5 py-1 text-sm">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl && (
            <ProjectLink href={project.liveUrl} primary>
              {liveText}
            </ProjectLink>
          )}
          {project.apiUrl && <ProjectLink href={project.apiUrl}>Open the API</ProjectLink>}
          {/* Projects that aren't deployed yet use the code link as the main button */}
          <ProjectLink href={project.codeUrl} primary={!project.liveUrl}>
            View code
          </ProjectLink>
        </div>
      </div>

      <div className="lg:pt-10">
        <ProjectPreview project={project} />
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto w-full max-w-6xl px-4 pt-20 sm:px-6 lg:pt-28">
      <div className="max-w-2xl pb-12">
        <h2 id="work-title" className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
          Selected work
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted">
          Things I've built. Open the live sites and API docs, or read the code on GitHub.
        </p>
      </div>

      {projects.map((project) => (
        <ProjectRow key={project.title} project={project} />
      ))}
    </section>
  )
}

export default Projects
