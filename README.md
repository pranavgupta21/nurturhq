# Nurtur AI

Static landing site built with Vite and React.

Production domain: [nurturhq.com](https://nurturhq.com)

## Development

Do not develop directly on `main`. Treat `main` as the release branch.

Every task should work from its own clone of the NurturHQ repo under
`~/Projects/nurtur/`. Do not reuse the shared `~/Projects/nurtur/nurturhq`
checkout for task work when another task may need to run at the same time.

Create a task-specific clone, then start the change from latest `main` inside
that clone:

```sh
cd ~/Projects/nurtur
git clone git@github.com:pranavgupta21/nurturhq.git nurturhq-<task-name>
cd nurturhq-<task-name>
git switch main
git pull --ff-only origin main
git switch -c <branch-name>
```

Develop on the branch. Do not make production-facing website changes directly
on `main` unless explicitly instructed.

Install dependencies and start the local Vite server with:

```bash
npm install
npm run dev
```

Whenever you start the local dev server, report the exact command that was
used and the local URL that Vite prints.

Before opening a PR, run the relevant checks:

```sh
npm run typecheck
npm run build
```

## Testing

This site is deployed as a static Vite build. For normal code changes, verify:

- `npm run typecheck` passes.
- `npm run build` passes.
- Any changed page renders correctly in the local dev server.
- Navigation links, call-to-action links, and static assets still resolve.

For manual testing, start the task-specific clone's dev server:

```sh
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

Open a PR for review. Merge the PR to `main` only after the change is tested
locally and ready for production.

## GitHub Pages

The site deploys from `.github/workflows/deploy-pages.yml` after pushes to `main`.
In GitHub, set **Settings > Pages > Build and deployment > Source** to **GitHub Actions**.
Set the custom domain to `nurturhq.com`.

## Cleanup

After the PR is merged or the task is abandoned, stop any local dev server that
was started from the task-specific clone.

Clean up the task-specific clone only after confirming all useful work has been
pushed:

```sh
cd ~/Projects/nurtur
rm -rf nurturhq-<task-name>
```
