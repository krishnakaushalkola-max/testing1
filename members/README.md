# Adding your portfolio

1. Create a folder here named after you, e.g. `members/rahul/`, with an `index.html` inside (plus your CSS, JS and images). Use **relative** paths like `style.css` and `images/me.png`, not `/style.css`.
2. Add yourself to `site/team.json`, with `"path": "rahul/"` (the folder name plus `/`).
3. Commit on a branch, open a pull request and merge it. GitHub Actions publishes it at `https://krishnakaushalkola-max.github.io/testing1/rahul/` within about a minute.

If your portfolio is a React/Vite app that needs building, ask Kushal to add a build step for it to `.github/workflows/pages.yml`.
