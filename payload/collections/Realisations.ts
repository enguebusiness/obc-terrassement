// payload/collections/Realisations.ts
// Schéma Payload CMS pour les réalisations / portfolio.
// COMMENTÉ — activé lors de la migration vers Payload.

/*
import type { CollectionConfig } from 'payload'

export const Realisations: CollectionConfig = {
  slug: 'realisations',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'ville', 'service', 'publishedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre du chantier',
    },
    {
      name: 'ville',
      type: 'text',
      required: true,
      label: 'Ville',
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      label: 'Service associé',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description courte',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo principale',
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Galerie photos',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Mettre en avant (page accueil)',
      defaultValue: false,
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Date du chantier',
    },
  ],
}
*/

export type PayloadRealisation = {
  id: string;
  title: string;
  ville: string;
  service: string;
  description: string;
  image: string;
  featured: boolean;
  publishedAt: string;
};
