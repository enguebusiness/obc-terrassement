# Payload CMS — Préparation

Ce dossier contient les schémas Payload CMS commentés, prêts à être activés
quand le projet bascule de contenu statique vers un CMS administrable.

## Architecture cible

```
payload/
├── collections/
│   ├── Articles.ts       → Articles de blog
│   ├── Realisations.ts   → Galerie chantiers
│   ├── Services.ts       → Services proposés
│   ├── Testimonials.ts   → Avis clients
│   └── FAQ.ts            → Questions fréquentes
└── globals/
    └── SiteSettings.ts   → Paramètres globaux du site
```

## Migration (3 étapes)

### Étape 1 — Installer Payload CMS
```bash
npm install payload @payloadcms/db-postgres @payloadcms/richtext-lexical
```

### Étape 2 — Activer les collections
Décommenter le code dans chaque fichier `collections/*.ts` et `globals/*.ts`,
puis créer `payload.config.ts` à la racine :

```ts
import { buildConfig } from 'payload'
import { Services } from './payload/collections/Services'
import { Realisations } from './payload/collections/Realisations'
import { Articles } from './payload/collections/Articles'
import { Testimonials } from './payload/collections/Testimonials'
import { FAQ } from './payload/collections/FAQ'
import { SiteSettings } from './payload/globals/SiteSettings'

export default buildConfig({
  collections: [Services, Realisations, Articles, Testimonials, FAQ],
  globals: [SiteSettings],
  // ...db, admin, etc.
})
```

### Étape 3 — Mettre à jour lib/content.ts
Remplacer les `return siteConfig.xxx` par les appels Payload commentés.
**Les composants n'ont pas à changer.**

## Données actuelles

Toutes les données sont dans `lib/site-config.ts`.
Les composants les consomment via `lib/content.ts`.
