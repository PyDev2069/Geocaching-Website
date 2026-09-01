# Geocaching App

A minimal full-stack app with session-based authentication.

- `frontend/` — React + Vite (no styling, plain HTML elements)
- `backend/` — Express + a small JSON-file user store + bcrypt + express-session
  (deliberately avoids any package that needs native/C++ compilation, so `npm install`
  works out of the box on Windows/Mac/Linux with no extra build tools)

## Setup

### 1. Backend
```
cd backend
npm install
cp .env.example .env   # then edit SESSION_SECRET to a random string
npm run dev
```
Runs on http://localhost:4000. This creates `users.json` (user records) and a
`sessions/` folder (one file per active login session) inside `backend/` the first
time it runs.

### 2. Frontend
```
cd frontend
npm install
npm run dev
```
Runs on http://localhost:5173

Open http://localhost:5173 in your browser. Sign up, then you'll be logged in
automatically (session cookie is set). Visit /dashboard to see a protected page.

## How auth works

- Passwords are hashed with bcrypt (12 salt rounds) before being stored — plaintext
  passwords are never saved. Stored in `backend/users.json`.
- On login, the password is compared against the stored hash with bcrypt.compare.
- A signed session cookie (`geocaching.sid`, httpOnly, sameSite=lax) is set on
  login/register. The session ID maps to a file in `backend/sessions/`, which stores
  the logged-in user's id server-side.
- `GET /api/auth/me` reads the session and returns the current user — the frontend
  calls this on page load to restore login state, and `ProtectedRoute` redirects to
  /signin if it's not authenticated.
- Logout destroys the server-side session and clears the cookie.
- `requireAuth` middleware protects any backend route that needs a logged-in user
  (see `/api/protected/ping` for an example, and `/api/auth/me`).

## Note on data storage

This uses a flat `users.json` file instead of a real database to keep setup
dependency-free for a learning project. It's fine for local development and small
demos, but isn't safe for concurrent writes at scale — if you outgrow it, swap
`backend/db.js` for a real database (e.g. Postgres via `pg`, or SQLite via
`better-sqlite3` if you have build tools installed) without touching `routes/auth.js`
much, since it only calls `findUserByEmail`, `findUserById`, and `createUser`.
