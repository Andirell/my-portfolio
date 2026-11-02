import { skills } from '../data'

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-28">
        <div>
          <h2 id="about-title" className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
            About
          </h2>
          <div className="mt-6 grid max-w-xl gap-5 text-lg leading-8 text-muted">
            <p>
              I&apos;m a full-stack developer who builds complete web products, from the first
              screen a user sees to the database behind it.
            </p>
            <p>
              On the frontend, I build fast, responsive interfaces with React, Next.js and
              Tailwind CSS. I focus on clear layouts, smooth interactions and pages that work
              just as well on a phone as on a laptop.
            </p>
            <p>
              On the backend, I build secure REST APIs with Python, Django and Django REST
              Framework. I design the data models, handle authentication and permissions, and
              deploy services that stay reliable as they grow.
            </p>
            <p>
              Working on both sides means I can take an idea from a rough plan to a live,
              working product, and when something breaks, I can trace it through the whole
              stack and fix it at the source.
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-xl font-bold">{group.title}</h3>
              <ul className="mt-3 grid gap-1.5 text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
