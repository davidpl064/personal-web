# PersonalWeb

[![Netlify Status](https://api.netlify.com/api/v1/badges/e85625e2-1762-4f1d-bc58-f4519d4e41b6/deploy-status)](https://app.netlify.com/sites/dplamarca/deploys)

Personal web page to describe professional and personal projects, providing a comfortable environment with required tools to customize content design and complexity to desired level.

## Dependencies Tool: NPM

Selected tool to handle dependencies packages is `npm`, a Node.js package manager. Recommended installation of this tool is by using `nvm`, which is a specific tool to manage Node installations. T install `nvm` and `npm`, execute following commands:

```
# Install `nvm`
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

# Install `npm`
nvm install node

# Activate installed node version
nvm use node
```

## Project Management Tool: Astro

`Astro` provides a framework to accelerate web development, by means of:

- Built-in development web server
- Inject HTML
- Inject Javascript
- Define shared page structures: `Astro layouts`
- Define re-usable web components (`Astro components`)
- Support to Tailwind CSS
- Support of Typescript

Official [Astro docs](https://docs.astro.build).
All `Astro` commands are executed as `npm` commands and run from project's root directory:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

However, to be tool-agnostic, an upper interface was defined using `make` commands.
