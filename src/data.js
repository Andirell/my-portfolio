// All the text and links for the site live here, so updating the
// portfolio only means editing this file.

export const profile = {
  name: 'Andi Udom',
  shortName: 'Andi',
  role: 'Full-stack developer',
  location: 'Nigeria',
  intro:
    'I build Django REST APIs and the React and Next.js interfaces that use them. Most of my recent work is in fintech, e-commerce and hiring products.',
  availability: 'Open to full-stack roles, internships and freelance projects.',
  emails: ['andiudom274@gmail.com', 'andikanudom123@gmail.com'],
  phone: '+234 803 790 8384',
  githubUrl: 'https://github.com/Andirell',
  linkedinUrl: 'https://www.linkedin.com/in/andi-udom-13015a359',
  // Leave this empty until there is a real resume link. The button hides itself.
  resumeUrl: '',
}

// Shown in the hero panel. Every request here hits one of my deployed APIs.
export const apiSamples = [
  {
    label: 'JobZ API',
    method: 'GET',
    url: 'https://jobz-api-a22m.onrender.com/api/jobs/',
    openUrl: 'https://jobz-api-a22m.onrender.com/api/jobs/',
    openText: 'Open this endpoint',
    response: [
      '{',
      '  "count": 62,',
      '  "total_pages": 6,',
      '  "page": 1,',
      '  "results": [',
      '    { "id": 1, "slug": "software-..." },',
      '    ...',
      '  ]',
      '}',
    ],
  },
  {
    label: 'Banking API',
    method: 'POST',
    url: 'https://banking-api-project.onrender.com/transactions/send/',
    openUrl: 'https://banking-api-project.onrender.com/api/docs/',
    openText: 'Open the API docs',
    response: [
      '# Needs a JWT access token',
      '# Debits the sender and credits the receiver',
      '# inside one database transaction,',
      '# so a failed transfer never moves half the money.',
    ],
  },
  {
    label: 'Book API',
    method: 'GET',
    url: 'https://book-api-u50f.onrender.com/books/endpoint/?genre=fiction',
    openUrl: 'https://book-api-u50f.onrender.com/',
    openText: 'Open the API docs',
    response: [
      '# Lists books, filtered by genre',
      '# Only the author who added a book',
      '# can update or delete it.',
    ],
  },
]

// preview.kind decides what the little window next to each project shows:
//   "endpoints" - a list of real API routes
//   "list"      - a few real lines from the live site
export const projects = [
  {
    title: 'JobZ',
    summary:
      'A job board for Nigerian employers and job seekers. People browse openings by field, filter by location, work mode, salary and experience, and apply with their CV. Employers post jobs and track applicants.',
    kind: 'Full-stack app',
    frontend:
      'Next.js App Router with reusable components, slug-based job pages and responsive Tailwind CSS.',
    backend:
      'Django REST Framework API on Render with paginated, filterable job listings and a Django admin for managing posts.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Django', 'Django REST Framework'],
    liveUrl: 'https://my-job-board-delta.vercel.app',
    apiUrl: 'https://jobz-api-a22m.onrender.com/api/jobs/',
    codeUrl: 'https://github.com/Andirell/capstone-project',
    preview: {
      kind: 'list',
      address: 'my-job-board-delta.vercel.app',
      heading: '62 open jobs, 8 remote',
      lines: ['Lagos', 'Abuja', 'Port Harcourt', 'Remote'],
    },
  },
  {
    title: 'Digital Banking API',
    summary:
      'The backend for a digital bank: sign-up with KYC checks, wallets, deposits, withdrawals, transfers between users, loans with monthly repayments, and admin tools for approvals and fraud monitoring.',
    kind: 'Backend API',
    backend:
      'Django REST Framework with JWT sign-in, OTP password resets, PostgreSQL, atomic money transfers, loan processing and a flagged-transactions report for admins.',
    stack: ['Python', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Pandas'],
    liveUrl: 'https://banking-api-project.onrender.com/api/docs/',
    codeUrl: 'https://github.com/Andirell/Banking_Api_Project',
    preview: {
      kind: 'endpoints',
      address: 'banking-api-project.onrender.com/api/docs',
      endpoints: [
        ['POST', '/users/signup/'],
        ['POST', '/transactions/send/'],
        ['POST', '/transactions/withdraw/'],
        ['POST', '/loans/apply/'],
        ['POST', '/loans/emis/{emi_id}/pay/'],
        ['GET', '/analytics/flagged-transactions/'],
      ],
    },
  },
  {
    title: 'ShopNow',
    summary:
      'An electronics store with category pages, deals, product pages, a cart that survives a page refresh, and a demo checkout.',
    kind: 'Frontend app',
    frontend:
      'Next.js and React with cart state in React Context, saved to localStorage, dynamic product routes and Tailwind CSS.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'React Context', 'Radix UI'],
    liveUrl: 'https://shop-now-project-six.vercel.app',
    codeUrl: 'https://github.com/Andirell/ShopNow-Project',
    preview: {
      kind: 'list',
      address: 'shop-now-project-six.vercel.app',
      heading: 'Shop by category',
      lines: ['Computing & tablets', 'Audio', 'Cameras', 'Smart home', 'TVs & appliances'],
    },
  },
  {
    title: 'Book API',
    summary:
      'A REST API for managing books and authors. Users sign up with email, sign in with JWT, create an author profile and manage their own books.',
    kind: 'Backend API',
    backend:
      'Django REST Framework with a custom email user model, access and refresh tokens, author-only edit permissions, genre filtering and Swagger docs.',
    stack: ['Python', 'Django REST Framework', 'Simple JWT', 'django-filter', 'Swagger'],
    liveUrl: 'https://book-api-u50f.onrender.com/',
    codeUrl: 'https://github.com/Andirell/Book-API',
    preview: {
      kind: 'endpoints',
      address: 'book-api-u50f.onrender.com',
      endpoints: [
        ['GET', '/books/endpoint/'],
        ['POST', '/books/endpoint/'],
        ['PUT', '/books/endpoint/'],
        ['PATCH', '/books/endpoint/'],
        ['GET', '/api/schema/'],
      ],
    },
  },
]

export const skills = [
  {
    title: 'Backend',
    items: ['Python', 'Django', 'Django REST Framework', 'JWT and OTP auth', 'PostgreSQL', 'SQLite'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'HTML and CSS', 'Vite'],
  },
  {
    title: 'Shipping',
    items: ['Git and GitHub', 'Render', 'Vercel', 'Swagger / OpenAPI docs', 'Debugging'],
  },
]
