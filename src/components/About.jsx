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
              I work on both ends of a web app. On the backend I design the models, write the
              REST API, and handle sign-in, permissions and anything that touches money. On the
              frontend I build responsive React and Next.js screens that use those APIs.
            </p>
            <p>
              I care about the parts users never see but always feel: transfers that cannot
              half-complete, endpoints that only show you your own data, and pages that still
              work on a cheap phone.
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
