# Challenge – React + Next.js + Tailwind CSS

A small Next.js app built with React and Tailwind CSS.  
This repo contains the implementation of **7 challenges** (`/challenge_1` … `/challenge_7`).

## Live Demo
👉 [Access the deployed project on Vercel](https://challenges-lfrf1d56j-hugo-bentivegnas-projects.vercel.app/)

## Tech Stack
- **Next.js 15.5.2** (App Router, Turbopack in dev/build)
- **React 19.1.0**
- **Tailwind CSS 4**
- **TypeScript 5**
- **ESLint 9**

## Prerequisites
- **Node.js 18.18+** (recommended 20+)
- **npm** (or pnpm/yarn if you prefer—commands below assume npm)

## Getting Started

```bash
# 1) Install dependencies
npm install

# 2) Run the dev server (Turbopack)
npm run dev
```

Open http://localhost:3000 in your browser.

### Available Routes
- `/challenge1`
- `/challenge2`
- `/challenge3`
- `/challenge4`
- `/challenge5`
- `/challenge6`
- `/challenge7`

(There’s also the root page if provided.)

## Scripts

```bash
# Development (Next.js with Turbopack)
npm run dev

# Lint
npm run lint

# Production build (Turbopack)
npm run build

# Start production server (after build)
npm start
```


## Notes
- This project uses **Turbopack** for both `dev` and `build` (faster HMR and builds).
- Tailwind CSS **v4** is enabled; utility classes are available out of the box.
- Type definitions for React/Node are included for a smooth TS experience.

## Troubleshooting
- If port `3000` is busy, set `PORT=3001` (or another port) before `npm run dev`.
- Ensure your Node version matches the prerequisite (Next 15 + React 19 require Node 18.18+).

---

Feel free to open an issue or PR if you spot anything to improve.
