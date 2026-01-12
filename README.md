# Secure Document Link Generator - Frontend

React + TypeScript frontend for generating and viewing secure, one-time-use document links.

## Features

- 📄 Generate secure links for documents
- 🔒 One-time use enforcement
- 📋 Copy to clipboard functionality
- 🎨 Clean, minimal UI with Tailwind CSS
- ⚡ Fast development with Vite
- 🔗 Document viewing page with token validation

## Tech Stack

- **React** 19 - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Bun** - Package manager and runtime

## Prerequisites

- Bun >= 1.0.0 (preferred) or Node.js >= 18.x
- A deployed backend API

## Installation

```bash
# Install dependencies
bun install

# Or with npm
npm install
```

## Configuration

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Update the environment variable:

```env
VITE_API_URL=https://your-backend.up.railway.app
```

## Running Locally

```bash
# Development mode
bun run dev

# Or with npm
npm run dev
```

The app will be available at http://localhost:5173/

## Building for Production

```bash
# Build
bun run build

# Preview production build locally
bun run preview
```

## Project Structure

```
src/
├── App.tsx                  # Root component with routing
├── main.tsx                 # Application entry point
├── pages/                   # Page components
│   ├── HomePage.tsx         # Main page with document list
│   └── ViewDocumentPage.tsx # Document viewing page
├── components/              # Reusable components
│   ├── CopyButton.tsx       # Copy to clipboard button
│   ├── DocumentItem.tsx     # Single document card
│   └── DocumentList.tsx     # List of documents
├── services/                # API integration
│   └── api.ts               # Backend API calls
├── types/                   # TypeScript types
│   └── index.ts             # Type definitions
└── index.css                # Global styles
```

## Features

### Main Page
- Displays two documents:
  - 2024-Q3-Statement.pdf
  - 2023-Tax-Form-1099.pdf
- "Generate Secure Link" button for each
- Copy to clipboard functionality

### Document Viewing Page
- Route: `/docs/view/:token`
- Validates token with backend
- Shows document name on success
- One-time use enforcement

## API Endpoints

- **POST** `/api/generate-link` - Generate secure link
- **GET** `/api/docs/view/:token` - Redeem link

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Set environment variable: `VITE_API_URL`
4. Deploy

### Netlify

1. Build: `bun run build`
2. Deploy `dist/` folder
3. Set environment variable in dashboard

## Deployed URLs

- **Frontend**: [To be added]
- **Backend**: [To be added]

## License

MIT
