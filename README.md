# Andi Udom - Portfolio

My personal portfolio site. It lists my deployed projects with links to the live sites, API docs and source code.

Built with React, Vite and Tailwind CSS.

## Projects on the site

| Project | What it is | Live |
| --- | --- | --- |
| [JobZ](https://github.com/Andirell/capstone-project) | Job board, Next.js + Django REST API | [site](https://my-job-board-delta.vercel.app) / [API](https://jobz-api-a22m.onrender.com/api/jobs/) |
| [Digital Banking API](https://github.com/Andirell/Banking_Api_Project) | Fintech backend, Django REST Framework | [docs](https://banking-api-project.onrender.com/api/docs/) |
| [ShopNow](https://github.com/Andirell/ShopNow-Project) | Electronics store, Next.js | [site](https://shop-now-project-six.vercel.app) |
| [Book API](https://github.com/Andirell/Book-API) | Books and authors REST API | [docs](https://book-api-u50f.onrender.com/) |

## Run it locally

```bash
npm install
npm run dev
```

## Editing content

All text, links and projects are in `src/data.js`. To add a project, copy one of the objects in the `projects` list and change the values. To show a Resume button in the header, put a link in `profile.resumeUrl`.

## Deploying

It's a static site. Build with `npm run build` and publish the `dist` folder.
