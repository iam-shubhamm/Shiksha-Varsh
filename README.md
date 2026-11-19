# ShikshaVerse

ShikshaVerse is a learning platform for school and college students. Browse courses from Class 1 through Class 12 and undergraduate study tracks, then explore lessons with video searches, notes, printable materials, and quizzes. The interface supports English and Hindi.

## Features

- Course selections for school, senior-secondary, and undergraduate study.
- Lesson-based learning with video, notes, printable resources, and quizzes.
- Separate course progress and cached learning content.
- Responsive interface with light and dark themes.
- English and Hindi language support.

> **Curriculum note:** Undergraduate tracks provide general core study material. They are not guaranteed to match a specific university's syllabus.

## Getting started

### Requirements

- Node.js
- npm

### Install and run

```sh
git clone https://github.com/iam-shubhamm/Shiksha-Varsh.git
cd Shiksha-Varsh
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |
| `npm test` | Run the test suite once. |
| `npm run test:watch` | Run tests in watch mode. |

## Tech stack

- React and TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS
- Supabase
- Vitest

## Project structure

- `src/routes/` — file-based application routes.
- `src/data/` — curriculum and course data.
- `src/lib/` — shared application utilities and learning logic.
- `public/` — static assets.

TanStack Start routes are file-based; see [`src/routes/README.md`](src/routes/README.md) for routing conventions.

## Contributing

Contributions and suggestions are welcome. For curriculum changes, please include the relevant board, course, and syllabus edition when applicable.
