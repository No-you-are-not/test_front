# Secure Document Link Generator - Frontend

A React + TypeScript frontend for generating and viewing secure, one-time-use document links. Built with Vite, React Router, and Tailwind CSS for a clean, responsive user experience.

## Live Demo

- **Frontend App**: https://test-front-rust.vercel.app
- **Backend API**: https://testback-production-3143.up.railway.app

## Overview

I built this frontend to provide an intuitive interface for the secure document link system. My main design goals were:

- **Simplicity**: Clean, minimal UI that makes the core functionality obvious
- **Responsiveness**: Works seamlessly on desktop and mobile devices
- **User feedback**: Clear visual feedback for all actions (loading states, errors, success)
- **Type safety**: Full TypeScript coverage for reliability
- **Component architecture**: Reusable, well-structured components

I designed the overall component structure and user flow myself, then used Claude Code to help implement some of the React components and routing setup more quickly.

## Tech Stack

- **React** 19 - Modern UI library
- **TypeScript** - Type safety and better DX
- **Vite** - Fast build tool and dev server
- **React Router** 7 - Client-side routing
- **Tailwind CSS** 3.4 - Utility-first styling
- **Bun** - Package manager and runtime

## Features

✅ **Document List**: Display of sample documents
✅ **Link Generation**: One-click secure link creation
✅ **Copy to Clipboard**: Easy sharing with built-in copy button
✅ **Document Viewer**: Dedicated page for link redemption
✅ **Error Handling**: Graceful handling of expired/invalid links
✅ **Loading States**: Visual feedback during API calls
✅ **Responsive Design**: Mobile-friendly interface

## Prerequisites

- **Bun** >= 1.0.0 (recommended) or **Node.js** >= 18.x
- A deployed backend API (see backend README)

## Quick Start

### 1. Install Dependencies

```bash
bun install
# or
npm install
```

### 2. Configure Environment

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Update the API URL:
```env
VITE_API_URL=https://your-backend.railway.app
```

### 3. Run Development Server

```bash
bun run dev
# or
npm run dev
```

The app will be available at `http://localhost:5173`

### 4. Build for Production

```bash
bun run build
# or
npm run build
```

The production-ready files will be in the `dist/` directory.

## Project Structure

I organized the code by feature and responsibility:

```
src/
├── App.tsx                  # Root component with routing setup
├── main.tsx                 # App entry point
├── index.css                # Global styles & Tailwind imports
├── pages/                   # Page-level components
│   ├── HomePage.tsx         # Main page with document list
│   └── ViewDocumentPage.tsx # Link redemption page
├── components/              # Reusable UI components
│   ├── DocumentList.tsx     # Container for documents
│   ├── DocumentItem.tsx     # Individual document card
│   └── CopyButton.tsx       # Copy-to-clipboard button
├── services/                # API integration layer
│   └── api.ts               # Backend API calls
└── types/                   # TypeScript type definitions
    └── index.ts             # Shared types
```

### Architecture Decisions

1. **Component Composition**: I broke down the UI into small, focused components for reusability
2. **API Service Layer**: Separated API logic from components for cleaner code and easier testing
3. **Type Definitions**: Centralized types for consistency across the app
4. **Route-Based Pages**: Used React Router for clean separation between list and view functionality

## Pages & Features

### Home Page (`/`)

The main interface shows two sample documents:
- 2024-Q3-Statement.pdf
- 2023-Tax-Form-1099.pdf

Each document card includes:
- Document name display
- "Generate Secure Link" button
- Generated link display (after clicking button)
- Copy to clipboard functionality

**User Flow:**
1. Click "Generate Secure Link" for any document
2. The app calls `POST /api/generate-link`
3. The secure link appears below the button
4. Click the copy button to copy the link
5. The link can be shared with others

### Document View Page (`/docs/view/:token`)

Dedicated page for viewing documents via secure link.

**Behavior:**
- Automatically calls `GET /api/docs/view/:token` on mount
- **Success (200)**: Shows "You are now securely viewing: [document-name]"
- **Error (404)**: Shows "Invalid or expired link" message
- **Already used**: Since links are one-time use, second access shows error

## API Integration

The frontend communicates with the backend via these endpoints:

```typescript
// Generate a secure link
POST /api/generate-link
Body: { documentName: string }
Response: { link: string }

// Redeem a link (one-time use)
GET /api/docs/view/:token
Response: { documentName: string }
Error: { message: string }
```

I wrapped these in a service layer (`services/api.ts`) for clean separation of concerns.

## Styling Approach

I used Tailwind CSS for styling because:
- **Rapid development**: Utility classes speed up UI building
- **Consistency**: Tailwind's design system keeps spacing/colors consistent
- **Responsive**: Built-in responsive modifiers for mobile-first design
- **Small bundle**: PurgeCSS removes unused styles in production

The design is intentionally minimal to focus on functionality while maintaining a professional appearance.

## Deployment

### Vercel (What I Used)

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variable:
   - `VITE_API_URL`: Your backend URL
4. Deploy

Vercel automatically detects Vite and configures the build process.

### Netlify

1. Build: `bun run build`
2. Deploy the `dist/` folder
3. Set `VITE_API_URL` in the environment variables dashboard

### Cloudflare Pages

1. Connect your GitHub repo
2. Build command: `bun run build`
3. Output directory: `dist`
4. Add `VITE_API_URL` environment variable

## Environment Variables

Only one environment variable is needed:

- `VITE_API_URL`: The full URL of your deployed backend (e.g., `https://your-app.railway.app`)

**Note**: Vite requires environment variables to be prefixed with `VITE_` to expose them to the client.

## Development Notes

### Running with Bun vs npm

Bun is faster for installing dependencies and running dev scripts, but npm works just as well:

```bash
# With Bun (faster)
bun install && bun run dev

# With npm
npm install && npm run dev
```

### Hot Module Replacement

Vite provides instant HMR during development. Changes to components reflect immediately without full page reloads.

## What I'm Proud Of

- **User Experience**: The flow is intuitive and requires minimal explanation
- **Component Design**: Each component has a single responsibility and is easy to understand
- **Error Handling**: Graceful degradation when things go wrong (expired links, network errors)
- **Type Safety**: No `any` types, everything is properly typed
- **Responsive Design**: Works well on all screen sizes without additional effort

## Design Decisions & Trade-offs

1. **Hardcoded Documents**: The requirements specified showing a hardcoded list. In a real app, this would come from the backend.

2. **No State Management Library**: For this scope, React's built-in state (`useState`) is sufficient. I didn't add Redux/Zustand to avoid over-engineering.

3. **Inline Error Handling**: Error messages are shown inline rather than using a global toast system, keeping the implementation simple.

4. **No Authentication**: Per requirements, this is an open app. In production, I'd add user authentication.

## Future Enhancements (Not Implemented)

If I were to extend this:
- Global state management (Redux Toolkit or Zustand) if the app grows
- Toast notifications for better UX feedback
- Document upload functionality
- Link expiration countdown timer
- Analytics tracking for link generation/usage
- Unit tests with Vitest
- E2E tests with Playwright

## Browser Support

Modern browsers supporting ES2020+:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Troubleshooting

### CORS Errors

If you see CORS errors, ensure:
1. Backend has CORS enabled
2. `VITE_API_URL` matches your deployed backend URL exactly

### Environment Variables Not Working

Remember to:
1. Prefix variables with `VITE_`
2. Restart the dev server after changing `.env`
3. Check that `.env` is not gitignored locally

## License

MIT

---

Built by Polina for a take-home technical assessment. UI/UX design and architecture by me, with implementation assistance from Claude Code.
