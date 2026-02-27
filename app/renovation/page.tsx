import type { Metadata } from "next";
import ServicePageLayout from "@/components/marketing/ServicePageLayout";
import { getSiteConfig } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  return {
    title: "Rénovation Maison & Appartement Nord 59 | OBC Maçonnerie",
    description:
      "Rénovation complète ou partielle de maison et appartement dans le Nord. Benoît Colin vous conseille et adapte chaque projet. Devis gratuit.",
    keywords: ["rénovation maison Nord 59", "rénovation appartement Nord", "maçon rénovation Douai", "maçon rénovation Valenciennes"],
    alternates: { canonical: `${config.url}/renovation` },
  };
}

const items = [
  { icon: "🏚️", title: "Rénovation complète", desc: "Restructuration totale d'une maison ancienne, de la démolition des cloisons existantes à la pose des revêtements." },
  { icon: "🧱", title: "Maçonnerie intérieure", desc: "Création ou suppression de cloisons, doublages, cages d'escalier, adaptation de plans d'architecte." },
  { icon: "🏗️", title: "Extension", desc: "Agrandissement de votre maison par extension latérale ou surélévation, en parfaite continuité avec l'existant." },
  { icon: "🪟", title: "Ouvertures", desc: "Création de baies vitrées, portes, fenêtres — avec reprise de linteaux et traitement des murs porteurs." },
  { icon: "🏢", title: "Rénovation de façade", desc: "Ravalement, rejointoiement, isolation par l'extérieur (ITE) pour améliorer le confort et l'esthétique." },
  { icon: "🏠", title: "Rénovation appartement", desc: "Transformation d'appartements : redistribution des pièces, mise aux normes, travaux de second œuvre." },
];

export default async function RenovationPage() {
  const config = await getSiteConfig();
  const { phone, phoneRaw } = config;
  return (
    <ServicePageLayout
      label="Rénovation"
      title="Rénovation maison & appartement dans le Nord"
      subtitle="Chaque rénovation est unique. Benoît Colin s'adapte à votre projet, votre budget et vos envies pour transformer votre logement."
      phone={phone}
      phoneRaw={phoneRaw}
      items={items}
      itemsSectionTitle="Nos spécialités en rénovation"
      seoTitle="Maçon rénovation dans le Nord (59)"
      seoText={
        <>
          <p>
            OBC Maçonnerie intervient pour tous vos travaux de <strong className="text-text">rénovation dans le Nord</strong>. Que vous soyez à Orchies, Douai, Valenciennes ou dans les communes environnantes, Benoît Colin se déplace pour évaluer votre projet.
          </p>
          <p>
            Sa passion : adapter les espaces. Modifier une cage d&apos;escalier, abattre une cloison, adapter un plan pour coller à votre mode de vie — Benoît réfléchit avec vous et vous éclaire dans vos décisions.
          </p>
          <p>
            Grâce à son réseau de partenaires, il coordonne aussi les corps de métier complémentaires (électricité, plomberie, carrelage, peinture) pour une rénovation complète avec un seul interlocuteur.
          </p>
        </>
      }
      contactTitle="Votre projet de rénovation"
    />
  );
}
