// payload/collections/Services.ts
// Schéma Payload CMS pour les services OBC Maçonnerie.
// COMMENTÉ — activé lors de la migration vers Payload.
//
// Pour activer : décommenter et importer dans payload.config.ts

/*
import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'Identifiant URL (ex: construction-maison)' },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre du service',
    },
    {
      name: 'shortDescription',
      type: 'text',
      required: true,
      label: 'Description courte (carte home page)',
    },
    {
      name: 'longDescription',
      type: 'textarea',
      label: 'Description longue (page dédiée)',
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Emoji icône',
      admin: { description: 'ex: 🏠' },
    },
    {
      name: 'keywords',
      type: 'array',
      label: 'Mots-clés SEO',
      fields: [
        {
          name: 'keyword',
          type: 'text',
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      label: 'Ordre d\'affichage',
      defaultValue: 0,
    },
  ],
}
*/

// Type exporté pour l'autocomplétion — reste actif même sans Payload
export type PayloadService = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  keywords: { keyword: string }[];
  order: number;
};
