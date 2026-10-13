# Craft Project Planner

A work-in-progress project-planning UI concept for creating craft projects, tracking descriptions, and showing project status.

## Current implementation

- Static page assets: `index.html` and `style.css`
- Browser-side project loading and creation logic: `script.js`
- The JavaScript currently calls `http://localhost:5000/api/projects` for listing and creating projects.
- The repository also contains a Create React App scaffold under `src/`; the root static page and React scaffold are currently separate/inconsistent implementations.

## Important limitation

The backend API is not included in this repository, so the project list and create-project actions will not work in a clean clone unless a compatible API is running locally on port 5000. The app is not yet a self-contained, deployable full-stack project.

## Run the current React scaffold

Install Node.js, then run:

```bash
npm install
npm start
```

This starts the Create React App scaffold in `src/`; it does not provide the missing `/api/projects` backend for the root static page.

## Next steps

1. Choose one frontend implementation (React or the static page) and remove the unused duplicate.
2. Add the backend API and document its setup, data model, and API routes.
3. Replace the hard-coded localhost API URL with a configurable environment value.
4. Add input validation, loading/error states, and tests.
5. Add screenshots and a short demo GIF after the end-to-end flow works.

## Project status

**Prototype / in progress.** Do not describe this as a complete full-stack planner until the backend is included and the end-to-end workflow has been tested.
