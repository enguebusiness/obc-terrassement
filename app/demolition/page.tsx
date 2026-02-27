import type { Metadata } from "next";
import ServicePageLayout from "@/components/marketing/ServicePageLayout";
import { getSiteConfig } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  return {
    title: "Démolition Maison Nord 59 | OBC Maçonnerie",
    description:
      "Démolition totale ou partielle de maison, murs porteurs, bâtiments dans le Nord (59). OBC Maçonnerie à Orchies. Toutes garanties de sécurité. Devis gratuit.",
    keywords: ["démolition maison Nord 59", "démolition bâtiment Nord", "démolition mur porteur Nord", "démolition partielle Nord"],
    alternates: { canonical: `${config.url}/demolition` },
  };
}

const items = [
  { icon: "🏚️", title: "Démolition totale", desc: "Destruction complète d'un bâtiment résidentiel ou annexe, avec évacuation des gravats et remise en état du terrain." },
  { icon: "🧱", title: "Démolition partielle", desc: "Démolition ciblée d'une partie du bâtiment pour permettre une extension ou une restructuration." },
  { icon: "🏗️", title: "Suppression murs porteurs", desc: "Ouverture de murs porteurs avec pose de poutres et reprises en sous-œuvre pour sécuriser la structure." },
  { icon: "⛏️", title: "Dépose de dalles", desc: "Retrait de chapes béton, dalles existantes, fondations obsolètes pour préparer un nouveau sol." },
  { icon: "🚛", title: "Évacuation des gravats", desc: "Transport et évacuation de tous les déchets de démolition vers les filières de recyclage agréées." },
  { icon: "🏠", title: "Curage intérieur", desc: "Enlèvement complet des éléments intérieurs (cloisons, planchers, revêtements) avant une rénovation lourde." },
];

export default async function DemolitionPage() {
  const config = await getSiteConfig();
  const { phone, phoneRaw } = config;
  return (
    <ServicePageLayout
      label="Démolition"
      title="Démolition dans le Nord"
      subtitle="Démolition totale ou partielle, avec tout le matériel et les garanties de sécurité. OBC Maçonnerie gère votre chantier du début à la fin."
      phone={phone}
      phoneRaw={phoneRaw}
      items={items}
      itemsSectionTitle="Nos prestations de démolition"
      seoTitle="Démolition dans le Nord (59)"
      seoText={
        <>
          <p>
            OBC Maçonnerie intervient pour toutes vos <strong className="text-text">opérations de démolition dans le Nord</strong>. Qu&apos;il s&apos;agisse de détruire un bâtiment entier, d&apos;ouvrir un mur porteur ou de curer l&apos;intérieur avant rénovation, Benoît Colin prend en charge votre chantier avec rigueur.
          </p>
          <p>
            Avant toute démolition, OBC Maçonnerie vérifie la présence éventuelle d&apos;amiante, de plomb ou d&apos;autres matériaux dangereux, et fait appel aux spécialistes agréés si nécessaire. <strong className="text-text">La sécurité du chantier et de ses riverains est une priorité absolue.</strong>
          </p>
        </>
      }
      contactTitle="Votre projet de démolition"
    />
  );
}
