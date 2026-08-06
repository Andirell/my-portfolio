import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'

const themeStorageKey = 'portfolio-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedTheme = window.localStorage.getItem(themeStorageKey)

  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const profile = {
  name: 'Udom Andikan',
  initials: 'DevAndi',
  role: 'Full-Stack Developer',
  specialty: `I am a frontend and backend developer who builds clean, modern, and practical digital products. I specialize in frontend development with React, Next.js, Tailwind CSS, and strong UI/UX thinking, creating responsive websites, landing pages, dashboards, and portfolio systems.
On the backend, I build APIs, authentication systems, databases, admin panels, CMS platforms, OTP flows, and secure web application logic using tools like Django, Django REST Framework, JWT, and PostgreSQL/Neon.
My strength is combining design thinking with technical execution. I do not just build beautiful interfaces; I also understand the backend systems that make applications work properly. My focus is on creating digital products that are fast, functional, scalable, and businessready.`,
  location: 'Nigeria',
  email: ['andiudom274@gmail.com', 'andikanudom123@gmail.com'],
  phone: '+234 803 790 8384',
  availability: 'Available for full-stack projects, internships, and developer roles',
  resumeUrl: '#',
  githubUrl: 'https://github.com/Andirell',
  linkedinUrl: 'https://www.linkedin.com/in/andi-udom-13015a359',
  bio:
    'I am a frontend and backend developer who builds clean, modern, and business-ready digital products. I specialize in React, Next.js, Tailwind CSS, Django, APIs, authentication, databases, and full-stack web application development. My work includes fintech and banking-related solutions, responsive websites, dashboards, CMS platforms, portfolio systems, and business tools. I combine strong UI/UX thinking with backend logic to create digital products that are beautiful, functional, secure, scalable, and easy to use.',
}

const primaryEmail = Array.isArray(profile.email) ? profile.email[0] : profile.email

const techStack = {
  frontend: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'TypeScript-In-View'],
  backend: ['Python', 'Django', 'Django REST Framework', 'REST APIs', 'Authentication'],
  databaseAndTools: ['SQL', 'SQLite', 'Git', 'GitHub', 'Deployment Prep', 'Debugging'],
}

/*
  Add only projects you have actually built.

  Example:
  {
    title: 'Your Real Project Name',
    type: 'Full-stack web app',
    description: 'What the app does and who it helps.',
    backend: 'Django backend with auth, models, views, and API routes.',
    frontend: 'React and Tailwind interface with responsive screens.',
    stack: ['Django', 'React', 'Tailwind CSS'],
    liveUrl: 'https://your-live-project.com',
    codeUrl: 'https://github.com/yourusername/project',
    previewMode: 'link', // use 'embed' only if the deployed site allows iframe embeds
    previewImage: '', // optional screenshot path or URL
  }
*/
const projects = [
  {
  title: 'Digital Banking API',
  type: 'Backend API',
  description:
    'A fintech banking backend API built for a digital banking system. It provides secure user authentication and KYC verification, wallet management, deposits and withdrawals, peer-to-peer transfers, transaction history, loan applications, and administrative tools for loan approval, user management, and fraud monitoring.',
  backend:
    'Django and Django REST Framework backend with JWT authentication, OTP verification, PostgreSQL database support, wallet and transaction management, loan processing, fraud analytics, admin operations, and REST API routes.',
  stack: [
    'Python','Django','Django REST Framework','PostgreSQL','JWT','Django OTP','Pandas','Stripe','Razorpay',
  ],
  liveUrl: 'https://banking-api-project.onrender.com/api/docs/#/', 
  codeUrl: 'https://github.com/Andirell/Banking_Api_Project',
  previewMode: 'link',
  previewImage: '/Users/user/Desktop/Screenshot 2026-06-08 at 3.27.10 AM.png',
},
{
  title: 'ShopNow E-Commerce Store',
  type: 'Frontend Web App',

  description:
    'A modern e-commerce shopping application designed for browsing and purchasing technology products, smart devices, electronics, and home appliances. It features categorized product collections, deals and offers, dynamic product pages, a persistent shopping cart, order summaries, and a demo checkout experience.',

  frontend:
    'Built with the Next.js App Router and React, using reusable UI components, React Context for shopping cart state management, localStorage for cart persistence, dynamic product routes, and responsive Tailwind CSS styling.',

  stack: [
    'JavaScript',
    'Next.js',
    'React',
    'Tailwind CSS',
    'React Context API',
    'LocalStorage',
    'Lucide React',
    'Radix UI',
    'Vercel',
  ],

  liveUrl: 'https://shop-now-project-six.vercel.app',

  codeUrl: 'https://github.com/Andirell/ShopNow-Project',

  previewMode: 'link',

  previewImage: '',
},
{
  title: 'JobZ Job Board Platform',
  type: 'Frontend Web App',

  description:
    'A modern job board web application designed to help job seekers browse career opportunities and apply for available roles. It features categorized job listings, job filtering, dynamic job detail pages, company and salary information, job requirements, and an application form for submitting candidate details and resume links.',

  frontend:
    'Built with the Next.js App Router and React using reusable components, client-side state management for job category filtering, locally structured job data, dynamic slug-based job routes, responsive Tailwind CSS styling, and FormSubmit integration for processing job applications.',

  stack: [
    'JavaScript',
    'Next.js',
    'React',
    'Tailwind CSS',
    'React Hooks',
    'Radix UI',
    'Lucide React',
    'FormSubmit',
    'Vercel',
  ],

  liveUrl: 'https://my-job-board-delta.vercel.app',

  codeUrl: 'https://github.com/Andirell/capstone-project',

  previewMode: 'link',

  previewImage: '',
},
{
  title: 'Book Management REST API',
  type: 'Backend API',

  description:
    'A RESTful book management API designed for managing books and authors through secure authenticated endpoints. Users can create accounts, sign in using JWT authentication, create author profiles, retrieve and filter books by genre, add new books, update book details, and delete books.',

  backend:
    'Built with Django and Django REST Framework using a custom email-based user model, JWT access and refresh token authentication, author-based permissions, Django ORM models, serializer-based data validation, CRUD API views, genre query filtering, CORS support, and Swagger/OpenAPI documentation.',

  stack: [
    'Python',
    'Django',
    'Django REST Framework',
    'SQLite',
    'JWT',
    'Simple JWT',
    'Django ORM',
    'django-filter',
    'django-cors-headers',
    'drf-spectacular',
    'Swagger',
    'Gunicorn',
  ],

  liveUrl: '',

  codeUrl: 'https://github.com/Andirell/Book-API',

  previewMode: 'link',

  previewImage: '',
},
]

const services = [
  'Django backends',
  'REST APIs',
  'React frontends',
  'Tailwind interfaces',
  'Authentication flows',
  'Full-stack debugging',
]

const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Project Work',
    period: 'Current',
    detail:
      'Building Django-backed web apps with React and Tailwind CSS interfaces, focusing on practical features, clean structure, and responsive layouts.',
  },
]

const stats = [
  { value: `${projects.length}`, label: 'Real projects listed' },
  { value: 'Django', label: 'Backend framework' },
  { value: 'React', label: 'Frontend library' },
]

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const isDark = theme === 'dark'

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(themeStorageKey, theme)
  }, [isDark, theme])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f7f2] text-[#17201b] antialiased transition-colors duration-300 dark:bg-[#0f1713] dark:text-[#f7f3e8]">
      <Header
        isDark={isDark}
        onToggleTheme={() => setTheme(isDark ? 'light' : 'dark')}
      />
      <main>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

function Header({ isDark, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#17201b]/10 bg-[#f5f7f2]/90 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#0f1713]/90">
      <nav
        className="mx-auto flex min-h-18 w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6"
        aria-label="Primary navigation"
      >
        <a href="#top" className="flex min-w-0 items-center gap-3 font-bold no-underline">
          <span className="grid h-10 min-w-10 shrink-0 place-items-center rounded-lg bg-[#17201b] px-3 text-xs font-black text-[#dcae34] transition-colors duration-300 sm:text-sm dark:bg-[#f7f3e8] dark:text-[#0f1713]">
            {profile.initials}
          </span>
          <span className="min-w-0 text-base leading-tight break-words sm:text-lg">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-[#5e675e] md:flex dark:text-[#aab4aa]">
          <a className="transition hover:text-[#0b6b65] dark:hover:text-[#dcae34]" href="#about">
            About
          </a>
          <a className="transition hover:text-[#0b6b65] dark:hover:text-[#dcae34]" href="#work">
            Work
          </a>
          <a className="transition hover:text-[#0b6b65] dark:hover:text-[#dcae34]" href="#skills">
            Stack
          </a>
          <a className="transition hover:text-[#0b6b65] dark:hover:text-[#dcae34]" href="#contact">
            Contact
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <a
            className="hidden min-h-11 shrink-0 items-center rounded-full border border-[#17201b]/15 bg-white/70 px-5 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-xl sm:inline-flex dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            href={profile.resumeUrl}
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      className="grid size-11 place-items-center rounded-full border border-[#17201b]/15 bg-white/70 text-[#17201b] transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b6b65] dark:border-white/15 dark:bg-white/10 dark:text-[#f7f3e8] dark:hover:bg-white/15 dark:focus-visible:outline-[#dcae34]"
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Light mode' : 'Dark mode'}
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

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[760px] items-start overflow-hidden border-b border-[#17201b]/10 bg-[linear-gradient(90deg,rgba(11,107,101,0.08)_1px,transparent_1px),linear-gradient(rgba(11,107,101,0.05)_1px,transparent_1px)] bg-[length:72px_72px] transition-colors duration-300 md:min-h-[calc(100svh-72px)] lg:items-center dark:border-white/10 dark:bg-[linear-gradient(90deg,rgba(220,174,52,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)]"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[9%] top-[18%] hidden w-72 rounded-lg border border-[#17201b]/15 bg-white/75 p-5 shadow-2xl lg:grid lg:gap-3 dark:border-white/15 dark:bg-[#17201b]/80">
          <span className="h-3 rounded-full bg-[#0b6b65]/20"></span>
          <span className="h-3 w-3/4 rounded-full bg-[#bd5636]/20 dark:bg-[#bd5636]/50"></span>
          <span className="h-3 w-1/2 rounded-full bg-[#dcae34]/30 dark:bg-[#dcae34]/60"></span>
        </div>
        <img
          src={heroImg}
          alt=""
          className="absolute bottom-10 right-[-90px] w-[360px] rotate-[-8deg] opacity-35 drop-shadow-2xl sm:right-8 sm:w-[440px] sm:opacity-60 lg:bottom-[8%] lg:w-[470px] lg:opacity-100"
        />
        <div className="absolute bottom-[16%] right-[34%] hidden h-32 w-72 grid-cols-4 items-end gap-3 rounded-lg border border-[#17201b]/15 bg-white/75 p-5 shadow-2xl lg:grid dark:border-white/15 dark:bg-[#17201b]/80">
          <span className="h-[38%] rounded-t-md bg-[#0b6b65]"></span>
          <span className="h-[68%] rounded-t-md bg-[#dcae34]"></span>
          <span className="h-[52%] rounded-t-md bg-[#bd5636]"></span>
          <span className="h-[86%] rounded-t-md bg-[#6d5aa8]"></span>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-24 lg:py-32">
        <p className="mb-4 text-sm font-black uppercase text-[#0b6b65] dark:text-[#dcae34]">
          {profile.role}
        </p>
        <h1
          id="hero-title"
          className="max-w-[340px] font-serif text-[clamp(3rem,12vw,7rem)] leading-[0.94] break-words text-[#17201b] sm:max-w-4xl dark:text-[#f7f3e8]"
        >
          {profile.name}
        </h1>
        <p className="mt-7 max-w-[340px] text-lg leading-8 text-[#5e675e] sm:max-w-2xl md:text-xl dark:text-[#c5cec4]">
          {profile.specialty}
        </p>

        <div className="mt-9 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row">
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0b6b65] px-7 font-bold text-white shadow-xl shadow-[#0b6b65]/20 transition hover:-translate-y-0.5 dark:bg-[#dcae34] dark:text-[#0f1713] dark:shadow-[#dcae34]/15"
            href="#work"
          >
            View Real Projects
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#17201b]/15 bg-white/70 px-7 font-bold transition hover:-translate-y-0.5 hover:shadow-xl dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            href={`mailto:${primaryEmail}`}
          >
            Contact Me
          </a>
        </div>

        <div className="mt-10 grid max-w-[340px] gap-3 text-sm font-semibold text-[#5e675e] sm:max-w-2xl sm:grid-cols-2 dark:text-[#c5cec4]">
          <p className="rounded-lg border border-[#17201b]/10 bg-white/65 p-4 dark:border-white/10 dark:bg-white/10">
            <span className="block text-[#17201b] dark:text-[#f7f3e8]">Location</span>
            {profile.location}
          </p>
          <p className="rounded-lg border border-[#17201b]/10 bg-white/65 p-4 dark:border-white/10 dark:bg-white/10">
            <span className="block text-[#17201b] dark:text-[#f7f3e8]">Status</span>
            {profile.availability}
          </p>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section
      className="grid border-b border-white/10 bg-[#17201b] text-center text-white md:grid-cols-3 dark:bg-[#070b09]"
      aria-label="Portfolio highlights"
    >
      {stats.map((item) => (
        <div
          className="grid min-h-32 content-center gap-2 border-b border-white/10 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
          key={item.label}
        >
          <strong className="font-serif text-5xl leading-none text-[#dcae34]">
            {item.value}
          </strong>
          <span className="text-white/70">{item.label}</span>
        </div>
      ))}
    </section>
  )
}

function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="mb-3 text-sm font-black uppercase text-[#0b6b65] dark:text-[#dcae34]">About</p>
          <h2 className="max-w-[340px] font-serif text-3xl leading-tight sm:max-w-none sm:text-4xl md:text-6xl dark:text-[#f7f3e8]">
            Backend logic, frontend polish, and the discipline to connect both.
          </h2>
        </div>

        <div className="grid min-w-0 gap-5">
          <p className="max-w-[340px] text-lg leading-8 text-[#5e675e] sm:max-w-none dark:text-[#c5cec4]">
            {profile.bio}
          </p>
          <div className="grid min-w-0 gap-3 md:grid-cols-3">
            <InfoTile label="Email" value={profile.email} />
            <InfoTile label="Phone" value={profile.phone} />
            <InfoTile label="Focus" value="Django + React" />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoTile({ label, value }) {
  const values = Array.isArray(value) ? value : [value]

  return (
    <div className="min-w-0 rounded-lg border border-[#17201b]/10 bg-white/70 p-5 transition-colors duration-300 dark:border-white/10 dark:bg-white/10">
      <p className="text-sm font-black uppercase text-[#0b6b65] dark:text-[#dcae34]">{label}</p>
      <div className="mt-2 grid min-w-0 gap-1">
        {values.map((item) => (
          <p className="min-w-0 font-bold text-[#17201b] [overflow-wrap:anywhere] dark:text-[#f7f3e8]" key={item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="mb-12 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
        <p className="text-sm font-black uppercase text-[#0b6b65] dark:text-[#dcae34]">Real Projects</p>
        <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-4xl md:text-6xl dark:text-[#f7f3e8]">
          Only work you have actually built belongs here.
        </h2>
      </div>

      {projects.length > 0 ? (
        <div className="grid gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} number={index + 1} />
          ))}
        </div>
      ) : (
        <EmptyProjects />
      )}
    </section>
  )
}

function EmptyProjects() {
  return (
    <div className="grid gap-6 rounded-lg border border-dashed border-[#17201b]/25 bg-white/65 p-6 shadow-xl shadow-[#17201b]/5 lg:grid-cols-[1fr_1.1fr] lg:p-8 dark:border-white/20 dark:bg-white/10 dark:shadow-black/30">
      <div>
        <p className="text-sm font-black uppercase text-[#0b6b65] dark:text-[#dcae34]">No fake work</p>
        <h3 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl dark:text-[#f7f3e8]">
          Add your deployed project links when you are ready.
        </h3>
        <p className="mt-5 max-w-2xl leading-8 text-[#5e675e] dark:text-[#c5cec4]">
          This section is intentionally empty until real project URLs, GitHub
          links, screenshots, or preview images are added to the `projects`
          array in `App.jsx`.
        </p>
      </div>

      <div className="rounded-lg bg-[#17201b] p-5 text-white">
        <p className="text-sm font-black uppercase text-[#dcae34]">
          Best project format
        </p>
        <div className="mt-5 grid gap-3 text-sm text-white/75">
          <p>
            <span className="font-bold text-white">Live link:</span> best for
            deployed projects users can open.
          </p>
          <p>
            <span className="font-bold text-white">Screenshot preview:</span>{' '}
            safest because some websites block iframe previews.
          </p>
          <p>
            <span className="font-bold text-white">Embed preview:</span> useful
            only when the deployed site allows iframe loading.
          </p>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, number }) {
  return (
    <article className="grid min-w-0 gap-5 rounded-lg border border-[#17201b]/10 bg-white/75 p-4 shadow-xl shadow-[#17201b]/5 transition-colors duration-300 lg:grid-cols-[1.05fr_0.95fr] dark:border-white/10 dark:bg-white/10 dark:shadow-black/30">
      <div className="grid min-w-0 content-center p-3 md:p-8">
        <p className="mb-5 flex items-center gap-3 text-sm font-black uppercase text-[#0b6b65] dark:text-[#dcae34]">
          <span className="grid size-10 place-items-center rounded-full border border-current">
            {String(number).padStart(2, '0')}
          </span>
          {project.type}
        </p>
        <h3 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl dark:text-[#f7f3e8]">
          {project.title}
        </h3>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#5e675e] dark:text-[#c5cec4]">
          {project.description}
        </p>

        <div className="mt-5 grid gap-3">
          {project.backend && <ProjectDetail label="Backend" value={project.backend} />}
          {project.frontend && <ProjectDetail label="Frontend" value={project.frontend} />}
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              className="max-w-full rounded-full border border-[#17201b]/10 bg-[#f5f7f2] px-3 py-2 text-sm font-bold [overflow-wrap:anywhere] dark:border-white/10 dark:bg-[#0f1713] dark:text-[#f7f3e8]"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              className="font-bold text-[#0b6b65] underline underline-offset-4 dark:text-[#dcae34]"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open project
            </a>
          )}
          {project.codeUrl && (
            <a
              className="font-bold text-[#0b6b65] underline underline-offset-4 dark:text-[#dcae34]"
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Source code
            </a>
          )}
        </div>
      </div>

      <ProjectPreview project={project} />
    </article>
  )
}

function ProjectDetail({ label, value }) {
  return (
    <p className="rounded-lg border border-[#17201b]/10 bg-[#f5f7f2] p-4 text-sm leading-6 text-[#5e675e] dark:border-white/10 dark:bg-[#0f1713] dark:text-[#c5cec4]">
      <span className="block font-black uppercase text-[#17201b] dark:text-[#f7f3e8]">{label}</span>
      {value}
    </p>
  )
}

function ProjectPreview({ project }) {
  if (project.previewImage) {
    return (
      <a
        className="group relative block min-h-80 overflow-hidden rounded-lg bg-[#17201b]"
        href={project.liveUrl || project.codeUrl}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="h-full min-h-80 w-full object-cover transition duration-500 group-hover:scale-105"
          src={project.previewImage}
          alt={`${project.title} preview`}
        />
        <span className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-sm font-black text-[#17201b]">
          Preview
        </span>
      </a>
    )
  }

  if (project.previewMode === 'embed' && project.liveUrl) {
    return (
      <div className="relative min-h-80 overflow-hidden rounded-lg border border-[#17201b]/10 bg-white">
        <iframe
          className="h-full min-h-80 w-full"
          src={project.liveUrl}
          title={`${project.title} live preview`}
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <a
      className="group grid min-h-80 content-between overflow-hidden rounded-lg bg-[#17201b] p-6 text-white"
      href={project.liveUrl || project.codeUrl}
      target="_blank"
      rel="noreferrer"
    >
      <div className="grid gap-3">
        <span className="h-3 w-4/5 rounded-full bg-white/35"></span>
        <span className="h-3 w-3/5 rounded-full bg-white/25"></span>
        <span className="h-3 w-2/5 rounded-full bg-white/20"></span>
      </div>
      <div>
        <p className="font-serif text-3xl leading-tight sm:text-4xl">{project.title}</p>
        <p className="mt-3 text-white/70 transition group-hover:text-white">
          Open the live project preview
        </p>
      </div>
    </a>
  )
}

function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="mb-12 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
        <p className="text-sm font-black uppercase text-[#0b6b65] dark:text-[#dcae34]">Stack</p>
        <h2 className="max-w-3xl font-serif text-3xl leading-tight sm:text-4xl md:text-6xl dark:text-[#f7f3e8]">
          Python and Django on the backend. React and Tailwind on the frontend.
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <SkillCard title="Frontend" skills={techStack.frontend} />
        <SkillCard title="Backend" skills={techStack.backend} />
        <SkillCard title="Database & Tools" skills={techStack.databaseAndTools} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2 rounded-lg border border-[#17201b]/10 bg-white/60 p-5 dark:border-white/10 dark:bg-white/10">
        {services.map((service) => (
          <span className="rounded-full bg-[#17201b] px-4 py-2 text-sm font-bold text-white dark:bg-[#dcae34] dark:text-[#0f1713]" key={service}>
            {service}
          </span>
        ))}
      </div>
    </section>
  )
}

function SkillCard({ title, skills }) {
  return (
    <article className="rounded-lg border border-[#17201b]/10 bg-white/75 p-6 dark:border-white/10 dark:bg-white/10">
      <h3 className="font-serif text-2xl dark:text-[#f7f3e8]">{title}</h3>
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            className="max-w-full rounded-full border border-[#17201b]/10 bg-[#f5f7f2] px-3 py-2 text-sm font-bold [overflow-wrap:anywhere] dark:border-white/10 dark:bg-[#0f1713] dark:text-[#f7f3e8]"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  )
}

function Experience() {
  return (
    <section className="border-y border-[#17201b]/10 bg-[#e7ece1]/70 dark:border-white/10 dark:bg-[#142019]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:py-28">
        <div>
          <p className="mb-3 text-sm font-black uppercase text-[#0b6b65] dark:text-[#dcae34]">
            Experience
          </p>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-6xl dark:text-[#f7f3e8]">
            Credibility without pretending.
          </h2>
        </div>

        <div className="grid gap-4">
          {experience.map((item) => (
            <article className="rounded-lg border border-[#17201b]/10 bg-white/70 p-6 dark:border-white/10 dark:bg-white/10" key={`${item.role}-${item.company}`}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-serif text-2xl dark:text-[#f7f3e8]">{item.role}</h3>
                  <p className="mt-1 font-bold text-[#0b6b65] dark:text-[#dcae34]">{item.company}</p>
                </div>
                <p className="rounded-full bg-[#17201b] px-3 py-2 text-sm font-bold text-white dark:bg-[#dcae34] dark:text-[#0f1713]">
                  {item.period}
                </p>
              </div>
              <p className="mt-5 leading-8 text-[#5e675e] dark:text-[#c5cec4]">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-[#17201b] px-4 py-24 text-white dark:bg-[#070b09]">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-black uppercase text-[#dcae34]">Contact</p>
        <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-6xl">
          Need a Django backend, React frontend, or both?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
          I can help build full-stack features, clean up existing interfaces, or
          turn a rough idea into a working web application.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-[#dcae34] px-7 text-center font-bold text-[#17201b] transition hover:-translate-y-0.5 [overflow-wrap:anywhere]"
            href={`mailto:${primaryEmail}`}
          >
            {primaryEmail}
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-7 font-bold text-white transition hover:-translate-y-0.5"
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-7 font-bold text-white transition hover:-translate-y-0.5"
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default App
