# Repository Guidelines

## Project Structure & Module Organization
This project is a **Next.js** application focused on medical and orthopedic solutions (**Shashwat Enterprise - Precision Orthopedic Solutions**).
- **`src/app/`**: Contains the Next.js App Router pages and global layouts.
- **`src/components/`**: Houses reusable UI components like `Header.tsx`, `Hero.tsx`, and specialized medical visualizers like `AnatomicalModel.tsx` and `BodyExplorerSection.tsx`.
- **`src/constants.ts`**: Centralizes shared data and configuration used throughout the application.
- **`public/images/`**: Contains visual assets used across the site.

## Build, Test, and Development Commands
**Requirement**: Node.js **>= 20.9.0** is required for Next.js.
Use the following commands for local development:
- **`npm run dev`**: Start the development server (runs `next dev`).
- **`npm run build`**: Create an optimized production build (runs `next build`).
- **`npm run start`**: Start the production server after building.
- **`npm run lint`**: Run Next.js ESLint checks.
- **`npm run clean`**: Remove build artifacts (`.next` and `dist` folders).

## Coding Style & Naming Conventions
- **TypeScript**: The project uses TypeScript. Note that `"strict": false` is currently set in `tsconfig.json`.
- **Styling**: **Tailwind CSS** is used for styling, integrated via PostCSS (`postcss.config.mjs`).
- **Animations**: **Framer Motion** (`motion`) is the primary library for UI animations.
- **Icons**: **Lucide React** is used for the icon set.
- **Components**: Functional React components with descriptive names (PascalCase).

## Commit & Pull Request Guidelines
Commit messages should be descriptive and written in sentence case (e.g., `"Fix Header visibility and implement Products dropdown menu"`). The repository does not currently enforce strict prefix-based conventions (like Conventional Commits), but emphasizes clear, high-level summaries of changes.
