# 6-Month Experience Review — Website

A single-page site converted from the "6-Month Experience Review" PowerPoint.
Pure static HTML/CSS/JS — no build step, no dependencies to install.

## Structure

```
.
├── index.html      # the entire site (markup, styles, and script inline)
├── netlify.toml    # tells Netlify to publish the root folder as-is
└── README.md
```

## Run it locally

Just open `index.html` in a browser — no server required. Or, for a local
dev server with live reload:

```bash
npx serve .
```

## Deploy: GitHub → Netlify

1. **Push this folder to a new GitHub repo.**
   ```bash
   cd probation-review-site
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. **Connect the repo to Netlify.**
   - Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
   - Choose **GitHub**, authorize if needed, and select this repo.
   - Build settings: leave the build command **empty** and set the publish
     directory to `.` (root) — `netlify.toml` already sets this for you, so
     Netlify should pick it up automatically.
   - Click **Deploy site**.

3. **Done.** Netlify gives you a live URL (e.g. `random-name-123.netlify.app`)
   within a minute. Every future push to `main` auto-deploys.

4. **Optional — custom domain / subdomain:** Site settings → Domain
   management → Add a domain, or just rename the auto-generated subdomain
   under Site settings → Site details → Change site name.

## Editing content

All content, styling, and navigation logic live in `index.html`:
- Colors and fonts are CSS variables at the top of the `<style>` block (`:root`).
- Each numbered section (`#s1`–`#s9`) corresponds to one project from the deck.
- The sidebar nav auto-highlights the active section via the script at the
  bottom of the file — no extra config needed if you add/remove sections,
  just keep the `id` and the corresponding `data-target` in sync.
