// lib/content.ts
// Couche d'abstraction entre les données et les composants.
//
// AUJOURD'HUI : lit siteConfig (données statiques en JSON)
// DEMAIN      : remplacer chaque return par un appel Payload CMS
//               Les composants n'ont JAMAIS à changer.
//
// Exemple de migration future :
//   - return siteConfig.services
//   + return await payload.find({ collection: 'services' }).then(r => r.docs)

import { siteConfig } from "./site-config";
import type {
  Service,
  Realisation,
  Testimonial,
  FAQItem,
  BlogPost,
  Partner,
  NavItem,
} from "@/types/content";

// ── Navigation ────────────────────────────────────────────────
export async function getNavItems(): Promise<NavItem[]> {
  // FUTURE: return await payload.findGlobal({ slug: 'navigation' })
  return [...siteConfig.nav];
}

// ── Config globale ────────────────────────────────────────────
export async function getSiteConfig() {
  // FUTURE: return await payload.findGlobal({ slug: 'site-settings' })
  return siteConfig;
}

// ── Services ──────────────────────────────────────────────────
export async function getServices(): Promise<Service[]> {
  // FUTURE: return await payload.find({ collection: 'services', sort: 'order' }).then(r => r.docs)
  return [...siteConfig.services];
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  // FUTURE: return await payload.find({ collection: 'services', where: { slug: { equals: slug } } }).then(r => r.docs[0] ?? null)
  return siteConfig.services.find((s) => s.slug === slug) ?? null;
}

// ── Réalisations ──────────────────────────────────────────────
export async function getRealisations(): Promise<Realisation[]> {
  // FUTURE: return await payload.find({ collection: 'realisations', sort: '-publishedAt' }).then(r => r.docs)
  return [...siteConfig.realisations];
}

// ── Témoignages ───────────────────────────────────────────────
export async function getTestimonials(): Promise<Testimonial[]> {
  // FUTURE: return await payload.find({ collection: 'testimonials', where: { featured: { equals: true } } }).then(r => r.docs)
  return [...siteConfig.testimonials];
}

// ── FAQ ───────────────────────────────────────────────────────
export async function getFAQ(): Promise<FAQItem[]> {
  // FUTURE: return await payload.find({ collection: 'faq', sort: 'order' }).then(r => r.docs)
  return [...siteConfig.faq];
}

// ── Partenaires ───────────────────────────────────────────────
export async function getPartners(): Promise<Partner[]> {
  // FUTURE: return await payload.find({ collection: 'partners', sort: 'order' }).then(r => r.docs)
  return [...siteConfig.partners];
}

// ── Blog ──────────────────────────────────────────────────────
export async function getBlogPosts(): Promise<BlogPost[]> {
  // FUTURE: return await payload.find({ collection: 'articles', where: { status: { equals: 'published' } }, sort: '-publishedAt' }).then(r => r.docs)
  return [...siteConfig.blogPosts];
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // FUTURE: return await payload.find({ collection: 'articles', where: { slug: { equals: slug } } }).then(r => r.docs[0] ?? null)
  return siteConfig.blogPosts.find((p) => p.slug === slug) ?? null;
}

// ── Valeurs / Piliers ─────────────────────────────────────────
export async function getValues() {
  // FUTURE: return await payload.find({ collection: 'values', sort: 'order' }).then(r => r.docs)
  return [...siteConfig.values];
}
