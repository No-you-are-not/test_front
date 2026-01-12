# Secure Document Link Generator - Frontend

A React + TypeScript frontend for generating and viewing secure, one-time-use document links. Built with Vite, React Router, and Tailwind CSS.

## Live Demo

- **Frontend**: https://test-front-rust.vercel.app
- **Backend**: https://testback-production-3143.up.railway.app

## Tech Stack

- **React** 19
- **TypeScript**
- **Vite**
- **React Router** 7
- **Tailwind CSS** 3.4
- **Bun**

## Quick Start

### Installation

```bash
bun install
```

### Configuration

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Set the API URL:
```env
VITE_API_URL=https://testback-production-3143.up.railway.app
```

### Run

**Development:**
```bash
bun run dev
```

App runs at `http://localhost:5173`

**Production:**
```bash
bun run build
bun run preview
```

## Features

- Generate secure links for documents
- Copy to clipboard functionality
- Document viewing page (`/docs/view/:token`)
- One-time use enforcement
- Error handling for invalid/expired links

## Pages

### Home (`/`)

Shows two sample documents:
- 2024-Q3-Statement.pdf
- 2023-Tax-Form-1099.pdf

Click "Generate Secure Link" to create a link, then copy and share it.

### View Document (`/docs/view/:token`)

Displays the document name when a valid token is provided. Shows error message if the link is invalid or already used.

## Deployment

Deployed on Vercel. Set environment variable:
- `VITE_API_URL` - Backend URL

## Notes

- Used Claude Code to help implement React components and routing
- Mobile-friendly responsive design
- All TypeScript, no `any` types

## License

MIT
