import type { Metadata } from "next";
import ServicePageLayout from "@/components/marketing/ServicePageLayout";
import { getSiteConfig } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  return {
    title: "Assainissement Maison Nord 59 | OBC Maçonnerie",
    description:
      "Création et mise aux normes de systèmes d'assainissement dans le Nord (59). OBC Maçonnerie intervient à Orchies, Douai, Valenciennes et alentours. Devis gratuit.",
    keywords: ["assainissement maison Nord", "assainissement individuel Nord 59", "fosse septique Nord", "mise aux normes assainissement"],
    alternates: { canonical: `${config.url}/assainissement` },
  };
}

const items = [
  { icon: "🔍", title: "Diagnostic", desc: "Analyse de votre installation existante et vérification de sa conformité aux normes en vigueur." },
  { icon: "🏗️", title: "Création de fosse", desc: "Installation d'une fosse toutes eaux ou d'une micro-station d'épuration adaptée à votre terrain." },
  { icon: "🌱", title: "Épandage", desc: "Création ou réhabilitation du dispositif d'épandage pour un traitement optimal des eaux usées." },
  { icon: "🔧", title: "Réhabilitation", desc: "Remise en état d'une installation vieillissante ou non conforme pour éviter les sanctions." },
  { icon: "📋", title: "Mise aux normes", desc: "Mise en conformité suite à un contrôle SPANC ou en cas de vente immobilière." },
  { icon: "💧", title: "Raccordement réseau", desc: "Connexion au réseau d'assainissement collectif lorsque celui-ci est disponible." },
];

export default async function AssainissementPage() {
  const config = await getSiteConfig();
  const { phone, phoneRaw } = config;
  return (
    <ServicePageLayout
      label="Assainissement"
      title="Assainissement dans le Nord"
      subtitle="Mise aux normes, création ou réhabilitation de votre système d'assainissement — OBC Maçonnerie intervient dans les règles de l'art."
      phone={phone}
      phoneRaw={phoneRaw}
      items={items}
      itemsSectionTitle="Nos prestations assainissement"
      seoTitle="Assainissement dans le Nord (59)"
      seoText={
        <>
          <p>
            OBC Maçonnerie réalise vos travaux d&apos;<strong className="text-text">assainissement non collectif dans le Nord</strong> — fosse toutes eaux, micro-station, épandage, réhabilitation. Benoît Colin vous accompagne de l&apos;étude de votre terrain jusqu&apos;à la réception des travaux.
          </p>
          <p>
            Que vous ayez besoin d&apos;une <strong className="text-text">mise aux normes suite à un contrôle SPANC</strong>, d&apos;une nouvelle installation pour une construction neuve ou d&apos;une réhabilitation de l&apos;existant, OBC Maçonnerie intervient à Orchies, Douai, Valenciennes, Mouchin et dans toutes les communes avoisinantes.
          </p>
        </>
      }
      contactTitle="Votre projet d'assainissement"
    />
  );
}
