import type { Metadata } from "next";
import ServicePageLayout from "@/components/marketing/ServicePageLayout";
import { getSiteConfig } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  return {
    title: "Création d'Accès, Voiries & Entrées | OBC Maçonnerie Nord",
    description:
      "Création d'accès, voiries privées, entrées de propriété et chemins dans le Nord (59). OBC Maçonnerie à Orchies. Devis gratuit.",
    keywords: ["création accès maison Nord", "voirie privée Nord 59", "entrée propriété Nord", "chemin béton Nord"],
    alternates: { canonical: `${config.url}/creation-acces` },
  };
}

const items = [
  { icon: "🚗", title: "Entrées de propriété", desc: "Création d'une entrée soignée en béton, béton imprimé, pavés ou gravier stabilisé — adaptée à votre maison." },
  { icon: "🛤️", title: "Voiries privées", desc: "Aménagement de voiries sur propriété privée, chemin d'accès à un bâtiment agricole ou industriel." },
  { icon: "🌾", title: "Chemins ruraux", desc: "Création ou réfection de chemins en gravier compacté, grave non traitée ou béton désactivé." },
  { icon: "🏗️", title: "Travaux de terrassement", desc: "Terrassement, nivellement et compactage du terrain avant réalisation de votre accès." },
  { icon: "🔳", title: "Béton imprimé", desc: "Effet pavés, dalles ou pierre naturelle — le béton imprimé apporte une touche décorative durable." },
  { icon: "💧", title: "Drainage & évacuation", desc: "Mise en place de caniveaux, avaloirs et systèmes de drainage pour éviter les accumulations d'eau." },
];

export default async function CreationAccesPage() {
  const config = await getSiteConfig();
  const { phone, phoneRaw } = config;
  return (
    <ServicePageLayout
      label="Voiries & accès"
      title="Création d'accès dans le Nord"
      subtitle="Voiries, entrées de propriété, chemins — OBC Maçonnerie crée vos accès sur mesure avec les matériaux adaptés à vos besoins."
      phone={phone}
      phoneRaw={phoneRaw}
      items={items}
      itemsSectionTitle="Nos réalisations d'accès"
      seoTitle="Voirie & accès dans le Nord (59)"
      seoText={
        <>
          <p>
            OBC Maçonnerie réalise vos <strong className="text-text">travaux de voirie et création d&apos;accès dans le Nord</strong>. Entrées de propriété en béton imprimé, chemins ruraux en gravier compacté ou voiries privées — Benoît Colin s&apos;adapte à votre terrain et vos envies.
          </p>
          <p>
            Chaque projet commence par une étude du terrain pour choisir les matériaux et la technique les mieux adaptés : béton, pavés, gravier, béton désactivé. L&apos;objectif : un accès durable, esthétique et parfaitement drainé.
          </p>
        </>
      }
      contactTitle="Votre projet d'accès"
    />
  );
}
