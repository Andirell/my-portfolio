import { profile } from '../data'

function Contact() {
  const mainEmail = profile.emails[0]
  const otherEmails = profile.emails.slice(1)
  const year = new Date().getFullYear()

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ink text-paper">
      <div className="mx-auto w-full max-w-6xl px-4 pt-20 pb-10 sm:px-6 lg:pt-28">
        <h2 id="contact-title" className="max-w-3xl font-display text-5xl font-bold tracking-tight sm:text-6xl">
          Have a role or a project in mind?
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-8 opacity-75">
          Email is the fastest way to reach me.
        </p>

        <a
          className="mt-10 inline-block font-display text-[clamp(1.6rem,5.5vw,3.5rem)] font-bold tracking-tight break-all underline decoration-2 underline-offset-[10px] hover:decoration-4"
          href={`mailto:${mainEmail}`}
        >
          {mainEmail}
        </a>

        <div className="mt-12 grid gap-6 text-base sm:grid-cols-3">
          <div>
            <p className="opacity-60">Phone</p>
            <a className="font-semibold hover:underline" href={`tel:${profile.phone.replaceAll(' ', '')}`}>
              {profile.phone}
            </a>
          </div>
          {otherEmails.length > 0 && (
            <div>
              <p className="opacity-60">Other email</p>
              {otherEmails.map((email) => (
                <a key={email} className="block font-semibold break-all hover:underline" href={`mailto:${email}`}>
                  {email}
                </a>
              ))}
            </div>
          )}
          <div>
            <p className="opacity-60">Elsewhere</p>
            <div className="flex gap-5 font-semibold">
              <a className="hover:underline" href={profile.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="hover:underline" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <p className="mt-20 border-t border-paper/15 pt-6 text-sm opacity-60">
          © {year} {profile.name}
        </p>
      </div>
    </section>
  )
}

export default Contact
