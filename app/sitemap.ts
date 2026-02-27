import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Accueil
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // Pages services principales
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/construction-maison`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/renovation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/assainissement`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/creation-acces`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/demolition`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Pages secondaires
    { url: `${BASE_URL}/realisations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/partenaires`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Articles de blog
    { url: `${BASE_URL}/blog/combien-coute-construction-maison-nord`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/blog/etapes-renovation-maison-ancienne`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/blog/assainissement-non-collectif-obligations`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/blog/ossature-bois-avantages`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/blog/travaux-renovation-sans-permis-construction`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/blog/fondations-maison-quels-types`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },

    // Pages SEO locales
    { url: `${BASE_URL}/construction-maison-orchies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/construction-maison-douai`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/construction-maison-valenciennes`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/renovation-maison-orchies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/renovation-maison-douai`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/macon-mouchin`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/macon-flines-lez-raches`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/macon-saint-amand-les-eaux`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Legal
    { url: `${BASE_URL}/cgv`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
