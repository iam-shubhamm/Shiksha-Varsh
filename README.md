# ShikshaVerse

> A curriculum-focused learning platform for students from primary school through selected college-level courses.

ShikshaVerse brings curriculum navigation, chapter notes, lecture discovery, bilingual learning support, quizzes, and printable study material into one responsive web application.

## Overview

ShikshaVerse is a full-stack React and TypeScript application built with **TanStack Start**. It organizes learning content by class, board, course, track, subject, and chapter. Static curriculum data is combined with server-generated chapter packs and Supabase-backed caching.

### Highlights

- **Curriculum-based navigation** across primary, upper-primary, secondary, senior-secondary, and selected college courses.
- **Chapter learning views** with lecture, notes/print, and quiz experiences.
- **English/Hindi learning support**, including lecture-language selection and Hindi text translation where supported.
- **Lecture discovery** through YouTube search and cached video results.
- **Chapter notes and quizzes**, including generated chapter packs and 15-question MCQ sets.
- **Quiz scoring** with local answer selection and retry behavior.
- **Print/PDF-style study material** using the browser print workflow.
- **Authentication** with sign-up, sign-in, sign-out, and password reset through Supabase Auth.
- **Help requests** submitted through a validated support form.
- **Responsive interface** with mobile navigation, loading states, retry states, and route-level error handling.

> **Important:** The in-app help/AI widget is currently a scripted local demo. It does not provide a live conversational AI assistant.

## Technology Stack

| Area | Technologies |
|---|---|
| UI | React 19, TypeScript |
| Full-stack framework | TanStack Start |
| Routing | TanStack Router |
| Server-state management | TanStack React Query |
| Styling | Tailwind CSS 4 |
| UI primitives | Radix UI |
| Backend and database | Supabase, PostgreSQL |
| Authentication | Supabase Auth |
| Validation | Zod |
| AI-generated content | Lovable AI gateway |
| Build tooling | Vite, Nitro |
| Testing | Vitest, Testing Library |
| Database tooling | Drizzle Kit/ORM and SQL migrations |

## Architecture

ShikshaVerse uses TanStack Start server functions rather than a separate Express or NestJS server.

```text
Browser
  |
  v
React + TanStack Router + TanStack Query
  |
  +------------------------------+
  |                              |
  v                              v
TanStack server functions     Supabase client
  |                              |
  +--------------+---------------+
                 |
       +---------+---------+
       |                   |
       v                   v
 Lovable AI gateway   Supabase / PostgreSQL
 chapter generation,  auth, help requests,
 translation and      chapter-pack cache,
 language checks      lesson-video cache
```

### Main application areas

| Path | Responsibility |
|---|---|
| `src/routes` | File-based pages, layouts, and the development video-cache route |
| `src/components` | Feature components and reusable UI primitives |
| `src/data` | Static curriculum and chapter data |
| `src/lib` | Server functions, video search, language utilities, and shared logic |
| `src/integrations/supabase` | Browser/server Supabase clients and auth middleware |
| `src/test` | Vitest tests and test setup |
| `drizzle` | SQL migrations and migration metadata |
| `supabase` | Supabase configuration |
| `public` | Static assets, favicon, and `robots.txt` |

### Main routes

| Route | Description |
|---|---|
| `/` | Course landing page, course groups, FAQ, and help form |
| `/auth` | Login, signup, and forgot-password flows |
| `/reset-password` | Password update after a recovery redirect |
| `/class1`, `/class2` | Class-specific learning routes |
| `/class3` | Class 3 board, subject, lecture, notes, and quiz routes |
| `/study/:grade` | Grade, board, subject, and chapter study routes |
| `/learn/:course` | Advanced course, track, semester, and subject routes |

The source uses file-based route modules; the parameterized paths above are shown in simplified form.

## Getting Started

### Prerequisites

- Node.js and npm (or Bun, if you prefer the repository's Bun lockfile workflow).
- A Supabase project for database and authentication features.
- The required AI gateway configuration if you want AI-generated chapter content and translation to work.

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY>
```

Replace the placeholders with your actual repository URL and folder name.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a local `.env` file in the project root. The technical audit identified the following environment-variable names in the codebase/configuration:

| Variable | Purpose |
|---|---|
| `SUPABASE_URL` | Server-side Supabase project URL |
| `SUPABASE_PUBLISHABLE_KEY` | Server-side Supabase publishable/anonymous client key |
| `VITE_SUPABASE_URL` | Supabase URL exposed to the Vite client configuration |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Publishable key used by the browser client |
| `SUPABASE_SERVICE_ROLE_KEY` | Privileged server-only Supabase key; never expose it to browser code |
| `LOVABLE_DB_MIGRATION_URL` | Database connection used by Drizzle migration tooling |
| `LOVABLE_CRON_SECRET` | Cron-related secret referenced by the project |
| `LOVABLE_CRON_SECRET_PREVIOUS` | Previous cron secret referenced by the project |

Use the values from your own Supabase and deployment/provider dashboards. Do not commit `.env` or real credentials to Git.

Example template (replace values locally; do not use these placeholder values as credentials):

```dotenv
SUPABASE_URL=
SUPABASE_PUBLISHABLE_KEY=
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=

# Server-only. Never prefix this with VITE_.
SUPABASE_SERVICE_ROLE_KEY=

# Only needed for the corresponding migration/cron workflows.
LOVABLE_DB_MIGRATION_URL=
LOVABLE_CRON_SECRET=
LOVABLE_CRON_SECRET_PREVIOUS=
```

Only configure variables required by the code path and environment you are running. Keep service-role and other privileged secrets server-side.

### 4. Configure Supabase

1. Create or select a Supabase project.
2. Copy the project URL and publishable key into the matching environment variables.
3. Configure the authentication settings and password-recovery redirect URL for your local and deployed application URLs.
4. Review the SQL migrations in the repository's `drizzle` directory and apply them to the intended Supabase database using your database migration workflow.
5. Confirm that Row-Level Security (RLS) is enabled and that the policies match the application's expected access patterns.

The repository audit found three application tables:

- `help_requests` — submitted support requests.
- `chapter_packs` — cached chapter notes and quiz data.
- `lesson_videos` — cached YouTube video IDs.

The audit did **not** verify the state of a live Supabase project or whether its migrations have already been applied.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL printed by the development server in your terminal.

## Available Commands

The project documentation confirms these npm scripts:

| Command | Purpose |
|---|---|
| `npm run dev` | Start the Vite/TanStack development server |
| `npm run build` | Build the client, SSR, and Nitro output |
| `npm run preview` | Preview the built application |

To inspect all scripts actually defined in your checkout, run:

```bash
npm run
```

The project uses Vitest. If a test script is defined in your `package.json`, run it using the exact script name shown by `npm run`. You can also invoke the local Vitest executable with:

```bash
npx vitest run
```

## Testing and Build Verification

The technical audit recorded the following results for the audited project snapshot:

- **8 test files passed**
- **41 tests passed**
- **Production client build passed**
- **SSR build passed**
- **Nitro Cloudflare-module build passed**

The identified test areas include course routing, application routing, board selection, class website mappings, Class 3 content, curriculum structure, theme switching, and video-language matching.

These are results from the audit snapshot; run the tests and build again against your current checkout before relying on them.

## Deployment

The project is configured to generate a **Cloudflare-module Nitro** output. The build produces public assets and server output under `.output`.

Build locally:

```bash
npm run build
```

The repository configuration indicates Cloudflare as the intended deployment target. Complete the deployment using the Cloudflare workflow appropriate to the current project configuration, and set the required environment variables in the hosting dashboard.

**Deployment status is not confirmed by the source audit.** No live URL, deployment log, or CI/CD workflow was found in the audited workspace. Supabase live availability and migration status were also not verified.

## Current Implementation Notes

The following distinctions are important when evaluating the project:

- The core course routes, static curriculum navigation, chapter UI, quiz logic, print workflow, authentication flows, help form, and automated tests are implemented in the audited source.
- Chapter packs and translated text can be generated through TanStack server functions and the Lovable AI gateway.
- The help widget uses scripted local responses; a real AI chat assistant is not wired up.
- Lecture discovery currently parses YouTube search HTML. This is not a stable official API integration and may break if the external page changes.
- Supabase tables, authentication, migrations, and Cloudflare deployment are configured in the codebase but were not verified against live services.
- The development video-cache endpoint is intended for development and is disabled outside development mode.

## Security and Production Readiness

Before using the application with real users, review and address these items:

1. Add rate limiting, spam protection, and abuse monitoring to the public help-request form.
2. Keep `SUPABASE_SERVICE_ROLE_KEY` and all privileged credentials on the server only.
3. Validate and review AI-generated educational content for factual accuracy and safety.
4. Replace or harden YouTube HTML scraping; consider an official API or maintained video catalog.
5. Escape dynamic values in generated print HTML.
6. Configure Content Security Policy and other appropriate security headers.
7. Add centralized logging, monitoring, and alerting.
8. Add dependency vulnerability scanning and CI checks.
9. Verify Supabase RLS policies, authentication redirects, migrations, and production environment variables.
10. Add tests for auth flows, live RLS behavior, AI fallback/malformed output, video failures, support-form abuse, print output, and accessibility.

The audit reported **0 critical, 0 high, 6 medium, and 5 low** findings in its security review. This is an audit snapshot, not a guarantee that the application is secure.

## Known Technical Debt

- Some TanStack server functions use the deprecated `inputValidator` API.
- The audited production build reported an approximately 614 kB minified main index chunk warning.
- `drizzle/schema.ts` was blank in the audited snapshot; SQL migrations were the operative schema evidence.
- Automated accessibility coverage was not identified.
- No live deployment, CI/CD workflow, backup/recovery policy, or centralized monitoring configuration was evidenced in the audit.

## Contributing

Contributions are welcome.

1. Create a branch for your change.
2. Keep route, curriculum, and server-function changes consistent with the existing project structure.
3. Add or update tests for changed behavior.
4. Run the available test suite and production build.
5. Open a pull request with a clear description of the change.

## License

No license was confirmed in the supplied project documentation. Add a `LICENSE` file and update this section once the project owner has selected a license.

## Technical Documentation

The detailed architecture and source-code audit is maintained separately in **Complete Project Technical Documentation**. It covers the technology stack, routes, server functions, API/RPC inventory, database, authentication, security findings, testing, deployment configuration, and implementation gaps.

---

**ShikshaVerse** — Learn, practice, and grow.
