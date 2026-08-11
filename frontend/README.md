# Portfolio Frontend

A modern React + Vite frontend for a portfolio website using Tailwind CSS.

## Features

- React 19 application bootstrapped with Vite
- Tailwind CSS styling via `@tailwindcss/vite`
- Clean component structure under `src/components`
- Routed pages with `react-router-dom`
- ESLint configured for code quality

## Project Structure

- `src/main.jsx` — application entry point
- `src/App.jsx` — root app component
- `src/styles/index.css` — global CSS imports and Tailwind base styles
- `src/components/pages` — page-level components (Home, About, Contact, Project)
- `src/components/common` — reusable components like `Navbar` and `Footer`
- `vite.config.js` — Vite configuration with React and Tailwind plugins

## Scripts

- `npm run dev` — start development server
- `npm run build` — build production assets
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint on project files

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```

## Notes

- The project uses `type: module` for ES module support.
- Make sure Node.js is installed before running scripts.
