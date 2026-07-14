# Haruki-Zone

Anime-inspired developer portfolio built with React, Vite, TypeScript and Tailwind CSS.

Personal developer portfolio with a dashboard-style layout for profile info, skills, projects, current status, contact links and music.

## Languages

- [English](#english)
- [Español](#español)

## English

### Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Lucide React

### Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Project Structure

```text
src/App.tsx
components/nav.tsx
components/footer.tsx
components/dashboard/
public/
```

- `src/App.tsx`: main page layout.
- `components/nav.tsx`: top navigation bar.
- `components/footer.tsx`: page footer.
- `components/dashboard/hero-card.tsx`: main profile card.
- `components/dashboard/profile-panels.tsx`: About, Skills, Contact, Current Status and Now Playing panels.
- `components/dashboard/projects-panel.tsx`: projects panel.
- `components/dashboard/data.ts`: editable project and skills data.
- `public/`: images, gifs and icons used by the site.

### Editing Content

To edit projects or skills:

```text
components/dashboard/data.ts
```

To edit profile text, contact links, status or music:

```text
components/dashboard/profile-panels.tsx
```

To edit the main profile card:

```text
components/dashboard/hero-card.tsx
```

To add or replace images, place them in `public/` and reference them with:

```ts
assetUrl("file-name.ext")
```

### GitHub Pages Deployment

This project is configured for:

```text
https://haruharuk1.github.io/my-portfolio/
```

The important setting is in `vite.config.ts`:

```ts
base: "/my-portfolio/"
```

If you rename the repository, update this `base` value.

Manual deploy using the `gh-pages` branch:

```bash
npm run build
git worktree add --orphan gh-pages-dist
```

Copy the build output:

```powershell
Copy-Item -Recurse -Force dist\* gh-pages-dist\
```

Publish:

```bash
cd gh-pages-dist
git add .
git commit -m "Deploy GitHub Pages"
git branch -M gh-pages
git push -f origin gh-pages
cd ..
git worktree remove gh-pages-dist
```

Then configure GitHub Pages:

```text
Settings > Pages
Source: Deploy from a branch
Branch: gh-pages
Folder: /root
```

## Español

### Tecnologías

- React
- Vite
- TypeScript
- Tailwind CSS
- Lucide React

### Cómo ejecutar el proyecto

Instala las dependencias:

```bash
npm install
```

Inicia el servidor local:

```bash
npm run dev
```

Genera la versión de producción:

```bash
npm run build
```

Previsualiza el build:

```bash
npm run preview
```

### Estructura principal

```text
src/App.tsx
components/nav.tsx
components/footer.tsx
components/dashboard/
public/
```

- `src/App.tsx`: organiza el layout general de la página.
- `components/nav.tsx`: barra superior de navegación.
- `components/footer.tsx`: footer inferior.
- `components/dashboard/hero-card.tsx`: tarjeta principal.
- `components/dashboard/profile-panels.tsx`: paneles About, Skills, Contact, Current Status y Now Playing.
- `components/dashboard/projects-panel.tsx`: panel de proyectos.
- `components/dashboard/data.ts`: datos editables de proyectos y habilidades.
- `public/`: imágenes, gifs e íconos usados por la página.

### Cómo modificar contenido

Para cambiar proyectos o habilidades:

```text
components/dashboard/data.ts
```

Para cambiar textos del perfil, links de contacto, estado o música:

```text
components/dashboard/profile-panels.tsx
```

Para cambiar la tarjeta principal:

```text
components/dashboard/hero-card.tsx
```

Para agregar o reemplazar imágenes, colócalas en `public/` y úsalas con:

```ts
assetUrl("archivo.ext")
```

### Deploy en GitHub Pages

El proyecto está preparado para publicarse en:

```text
https://haruharuk1.github.io/haruki-zone/
```

La configuración importante está en `vite.config.ts`:

```ts
base: "/haruki-zone/"
```

Si el repositorio cambia de nombre, también debes cambiar ese `base`.

Deploy manual usando la rama `gh-pages`:

```bash
npm run build
git worktree add --orphan gh-pages-dist
```

Copia el build:

```powershell
Copy-Item -Recurse -Force dist\* gh-pages-dist\
```

Publica:

```bash
cd gh-pages-dist
git add .
git commit -m "Deploy GitHub Pages"
git branch -M gh-pages
git push -f origin gh-pages
cd ..
git worktree remove gh-pages-dist
```

Luego configura GitHub Pages:

```text
Settings > Pages
Source: Deploy from a branch
Branch: gh-pages
Folder: /root
```

## Notes / Notas

- Do not edit `dist/` manually. It is generated with `npm run build`.
- No edites `dist/` a mano. Se genera con `npm run build`.
- `dist/`, `node_modules/` and generated files are ignored by Git.
- `dist/`, `node_modules/` y archivos generados están ignorados por Git.
- If you add new images, place them in `public/` and use GitHub Pages-compatible paths through `assetUrl(...)`.
- Si agregas imágenes nuevas, colócalas en `public/` y usa rutas compatibles con GitHub Pages mediante `assetUrl(...)`.
