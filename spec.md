# Silambam Class - Enrollment Admin View

## Current State
The site has a ContactSection with an enrollment form that saves name, email, phone, and message to the backend. The backend stores submissions and exposes `getAllSubmissions()`. There is no admin page yet to view these submissions. Routing is handled inline in App.tsx (no router library), and there is Internet Identity auth available.

## Requested Changes (Diff)

### Add
- An AdminPage component at route `/admin` that:
  - Shows a login button (using Internet Identity via `useInternetIdentity`) if the user is not authenticated
  - Shows a table of all enrollment submissions (name, email, phone, message) once logged in
  - Has a logout button when logged in
- Simple hash-based or pathname routing in App.tsx to show AdminPage when URL is `/admin`

### Modify
- App.tsx to conditionally render AdminPage when `window.location.pathname === '/admin'` (or similar simple routing)

### Remove
- Nothing

## Implementation Plan
1. Create `src/frontend/src/pages/AdminPage.tsx` -- login gate with Internet Identity, then table of submissions from `useGetAllSubmissions`
2. Update `App.tsx` to render `AdminPage` when path is `/admin`
