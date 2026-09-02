# Geocaching Bharat — frontend (no backend, no auth logic yet)

A stripped-down, black-and-white pass of the frontend. No colors, no auth
context, no protected routes — just page layouts assembled from
self-contained components, ready to have real design and real auth wired
in later.

## Run it

```
npm install
npm run dev
```

Open http://localhost:5173.

## Pages

Pages don't contain markup of their own — they only assemble components.

- `/` — `Hero` + `HowItWorks` + `Footer`
- `/signup` — `SignupForm`
- `/signin` — `LoginForm`
- `/dashboard` — `DashboardSummary` (static placeholder, not gated by login)

Submitting the login or signup form just navigates to `/dashboard` — there's
no account storage or validation right now, it's purely there to show the
placeholder success state.

## Components

Each component lives in its own folder with a same-named CSS file:

```
src/components/
  navbar/
    navbar.jsx
    navbar.css
  hero/
    hero.jsx
    hero.css
  how-it-works/
    how-it-works.jsx
    how-it-works.css
  footer/
    footer.jsx
    footer.css
  login-form/
    login-form.jsx
    login-form.css
  signup-form/
    signup-form.jsx
    signup-form.css
  dashboard-summary/
    dashboard-summary.jsx
    dashboard-summary.css
```

`src/index.css` only holds color variables and a standard reset (box
model, base font, resets for `h1`–`h4`, `p`, `a`, `button`) — no
component-specific styles live there.

## Colors

Black and white only, defined once in `index.css`:

```css
--color-bg: #ffffff;
--color-surface: #f5f5f5;
--color-border: #d9d9d9;
--color-text: #111111;
--color-muted: #5c5c5c;
```

## What's not here (on purpose)

- No `AuthContext` / `useAuth` — removed for now.
- No `ProtectedRoute` — `/dashboard` is a plain route.
- No branding mark or decorative graphics — just text and standard form
  elements.

## Next step: adding Supabase

When you're ready to wire up real auth:

1. Add an auth layer back (context, hook, or whatever pattern you like)
   backed by `@supabase/supabase-js`.
2. In `login-form.jsx` / `signup-form.jsx`, replace the `handleSubmit`
   body (currently just `navigate('/dashboard')`) with the real
   `supabase.auth.signInWithPassword` / `signUp` calls.
3. Re-add a route guard around `/dashboard` if you want it gated again.

Nothing else needs to change — `Navbar`, `Hero`, `HowItWorks`, and
`Footer` don't know or care about auth.
