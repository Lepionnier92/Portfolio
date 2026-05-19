# Portfolio - Jules Bellavoir

Portfolio personnel de Jules Bellavoir, développeur Full-Stack.

## Technologies utilisées

- **Next.js 16** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animations
- **React Three Fiber** - Scène 3D

## Installation

```bash
pnpm install
```

## Développement

```bash
pnpm dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Build

```bash
pnpm build
```

## Déploiement

Ce projet peut être déployé sur **GitHub Pages** en utilisant GitHub Actions. Le workflow build et exporte le site statique dans `out/` puis publie le contenu sur la branche `gh-pages`.

Pour tester l'export localement :

```bash
npm run build
npm run export
# le dossier exporté est `out/`
```

Le workflow se déclenche automatiquement à chaque push sur la branche `main`.

## Licence

© 2025 Jules Bellavoir. Tous droits réservés.
