// payload/collections/Articles.ts
// Schéma Payload CMS pour les articles de blog.
// COMMENTÉ — activé lors de la migration vers Payload.

/*
import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'publishedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre de l\'article',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL (slug)',
      admin: {
        description: 'ex: combien-coute-construction-maison-nord',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Extrait (meta description)',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
      label: 'Contenu complet',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Construction', value: 'construction' },
        { label: 'Rénovation', value: 'renovation' },
        { label: 'Assainissement', value: 'assainissement' },
        { label: 'Conseils', value: 'conseils' },
      ],
      label: 'Catégorie',
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Date de publication',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Brouillon', value: 'draft' },
        { label: 'Publié', value: 'published' },
      ],
      defaultValue: 'draft',
      label: 'Statut',
    },
    {
      name: 'seoTitle',
      type: 'text',
      label: 'Titre SEO (optionnel — remplace title)',
    },
    {
      name: 'seoDescription',
      type: 'textarea',
      label: 'Description SEO (optionnel — remplace excerpt)',
    },
  ],
}
*/

export type PayloadArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: unknown; // Lexical rich text
  category: string;
  publishedAt: string;
  status: "draft" | "published";
  seoTitle?: string;
  seoDescription?: string;
};
