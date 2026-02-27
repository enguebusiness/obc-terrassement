// payload/collections/FAQ.ts
// Schéma Payload CMS pour la FAQ.
// COMMENTÉ — activé lors de la migration vers Payload.

/*
import type { CollectionConfig } from 'payload'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'order'],
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      label: 'Question',
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
      label: 'Réponse',
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

export type PayloadFAQItem = {
  id: string;
  question: string;
  answer: string;
  order: number;
};
