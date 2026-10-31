import ApiPanel from './ApiPanel'
import { profile } from '../data'

function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="border-b border-line">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-24 lg:pb-28">
        <div>
          <p className="text-base text-muted">
            {profile.role}, {profile.location}
          </p>

          <h1
            id="hero-title"
            className="mt-3 font-display text-[clamp(3.5rem,11vw,7.25rem)] leading-[0.9] font-extrabold tracking-[-0.035em]"
          >
            {profile.name}
          </h1>

          <p className="mt-7 max-w-[34rem] text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            {profile.intro}
          </p>

          <p className="mt-5 flex items-center gap-2 text-base font-semibold">
            <span className="size-2.5 rounded-full bg-live" aria-hidden="true"></span>
            {profile.availability}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              className="inline-flex h-12 items-center rounded-full bg-accent px-6 font-semibold text-accent-ink transition-transform hover:-translate-y-0.5"
              href="#work"
            >
              See my work
            </a>
            <a
              className="inline-flex h-12 items-center rounded-full border border-ink/25 px-6 font-semibold transition-colors hover:border-ink"
              href={`mailto:${profile.emails[0]}`}
            >
              Email me
            </a>
          </div>
        </div>

        <ApiPanel />
      </div>
    </section>
  )
}

export default Hero
