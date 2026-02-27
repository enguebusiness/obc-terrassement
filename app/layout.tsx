import type { Metadata } from "next";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://obc-maconnerie.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "OBC Maçonnerie | Constructeur & Maçon à Orchies (Nord 59)",
    template: "%s | OBC Maçonnerie",
  },
  description:
    "Benoît Colin, maçon expert à Mouchin. Construction de maison, rénovation, assainissement et gros œuvre dans un rayon de 30km autour d'Orchies. Devis gratuit.",
  keywords: [
    "construction maison Nord",
    "maçon construction maison Orchies",
    "rénovation maison Nord 59",
    "entreprise maçonnerie Mouchin",
    "fondation ossature bois Nord",
    "assainissement maison Nord",
    "création accès maison Nord",
    "démolition maison Nord 59",
    "maçon rénovation Douai",
    "maçon rénovation Valenciennes",
    "gros œuvre Nord",
    "entrepreneur maçon Nord 59",
    "OBC Maçonnerie",
    "Benoît Colin maçon",
    "maçon Mouchin",
    "construction maison Orchies",
  ],
  authors: [{ name: "OBC Maçonnerie - Benoît Colin" }],
  creator: "OBC Maçonnerie",
  publisher: "OBC Maçonnerie",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [
      { url: "/apple-touch-icon.svg", type: "image/svg+xml", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "OBC Maçonnerie",
    title: "OBC Maçonnerie | Constructeur & Maçon dans le Nord (59)",
    description:
      "Construction de maison, rénovation, assainissement et gros œuvre autour d'Orchies, Douai, Valenciennes. Benoît Colin vous accompagne de A à Z.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OBC Maçonnerie - Construction et rénovation dans le Nord",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OBC Maçonnerie | Maçon constructeur dans le Nord (59)",
    description:
      "Construction de maison, rénovation, assainissement. Orchies, Douai, Valenciennes.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#business`,
    name: "OBC Maçonnerie",
    description:
      "Construction de maison, rénovation, assainissement et gros œuvre dans le Nord",
    telephone: "06 74 45 30 89",
    email: "contact@obc-maconnerie.fr",
    url: BASE_URL,
    logo: `${BASE_URL}/icon-512.svg`,
    image: `${BASE_URL}/og-image.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "221 Route de Saint-Amand",
      addressLocality: "Mouchin",
      postalCode: "59310",
      addressRegion: "Hauts-de-France",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.4817,
      longitude: 3.3342,
    },
    areaServed: [
      { "@type": "City", name: "Orchies" },
      { "@type": "City", name: "Mouchin" },
      { "@type": "City", name: "Douai" },
      { "@type": "City", name: "Valenciennes" },
      { "@type": "City", name: "Flines-lès-Raches" },
      { "@type": "City", name: "Saint-Amand-les-Eaux" },
      { "@type": "City", name: "Château-l'Abbaye" },
      { "@type": "City", name: "Mérignies" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de maçonnerie",
      itemListElement: [
        { "@type": "Offer", "name": "Construction de maison" },
        { "@type": "Offer", "name": "Rénovation" },
        { "@type": "Offer", "name": "Assainissement" },
        { "@type": "Offer", "name": "Création d'accès" },
        { "@type": "Offer", "name": "Démolition" },
      ],
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "06 74 45 30 89",
      contactType: "customer service",
      availableLanguage: "French",
    },
    founder: {
      "@type": "Person",
      name: "Benoît Colin",
      jobTitle: "Maçon - Gérant OBC Maçonnerie",
    },
    sameAs: [],
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "OBC Maçonnerie",
    url: BASE_URL,
    description:
      "Site officiel d'OBC Maçonnerie, entreprise de construction et rénovation dans le Nord (59).",
    publisher: {
      "@id": `${BASE_URL}/#business`,
    },
    inLanguage: "fr-FR",
  };

  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#1B2A4A" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLdBusiness, jsonLdWebSite]),
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
