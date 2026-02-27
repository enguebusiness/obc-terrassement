// payload/collections/Testimonials.ts
// Schéma Payload CMS pour les témoignages clients.
// COMMENTÉ — activé lors de la migration vers Payload.

/*
import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'ville', 'service', 'rating', 'featured'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nom du client',
    },
    {
      name: 'ville',
      type: 'text',
      label: 'Ville',
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      label: 'Service concerné',
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
      label: 'Témoignage',
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
      label: 'Note (1 à 5)',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Afficher sur la page d\'accueil',
      defaultValue: true,
    },
  ],
}
*/

export type PayloadTestimonial = {
  id: string;
  name: string;
  ville: string;
  service: string;
  text: string;
  rating: number;
  featured: boolean;
};
