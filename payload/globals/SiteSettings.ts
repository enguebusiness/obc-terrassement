// payload/globals/SiteSettings.ts
// Schéma Payload CMS pour les paramètres globaux du site.
// COMMENTÉ — activé lors de la migration vers Payload.
//
// Permet à Benoît (ou à un admin) de modifier les infos
// de contact, le texte du hero, etc. sans toucher au code.

/*
import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Paramètres',
  },
  fields: [
    // ── Informations de contact ───────────────────────────────
    {
      name: 'contact',
      type: 'group',
      label: 'Contact',
      fields: [
        { name: 'phone', type: 'text', label: 'Téléphone' },
        { name: 'email', type: 'email', label: 'Email' },
        { name: 'address', type: 'text', label: 'Adresse complète' },
      ],
    },
    // ── Hero page d'accueil ───────────────────────────────────
    {
      name: 'hero',
      type: 'group',
      label: 'Section Hero (page d\'accueil)',
      fields: [
        { name: 'title', type: 'text', label: 'Titre H1' },
        { name: 'subtitle', type: 'textarea', label: 'Sous-titre' },
        { name: 'badge', type: 'text', label: 'Badge/accroche' },
        { name: 'cta', type: 'text', label: 'CTA principal' },
        { name: 'ctaSecondary', type: 'text', label: 'CTA secondaire' },
      ],
    },
    // ── Zone d'intervention ────────────────────────────────────
    {
      name: 'zones',
      type: 'array',
      label: 'Villes d\'intervention',
      fields: [
        { name: 'city', type: 'text', label: 'Ville' },
      ],
    },
    {
      name: 'zoneDescription',
      type: 'text',
      label: 'Description zone (ex: 20 à 30 km autour de Mouchin)',
    },
    // ── SEO global ────────────────────────────────────────────
    {
      name: 'seo',
      type: 'group',
      label: 'SEO global',
      fields: [
        { name: 'title', type: 'text', label: 'Titre SEO par défaut' },
        { name: 'description', type: 'textarea', label: 'Description SEO par défaut' },
      ],
    },
    // ── Message partenaires ───────────────────────────────────
    {
      name: 'partnersMessage',
      type: 'textarea',
      label: 'Message section partenaires',
    },
  ],
}
*/

export type PayloadSiteSettings = {
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  hero: {
    title: string;
    subtitle: string;
    badge: string;
    cta: string;
    ctaSecondary: string;
  };
  zones: { city: string }[];
  zoneDescription: string;
  seo: {
    title: string;
    description: string;
  };
  partnersMessage: string;
};
