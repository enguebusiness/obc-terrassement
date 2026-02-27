import type { Metadata } from "next";
import LocalSEOPage from "@/components/marketing/LocalSEOPage";

export const metadata: Metadata = {
  title: "Maçon Mouchin | Construction & Rénovation | OBC Maçonnerie",
  description:
    "OBC Maçonnerie est basée à Mouchin (59310). Benoît Colin, maçon expert local. Construction, rénovation, assainissement, gros œuvre. Devis gratuit.",
  keywords: ["maçon Mouchin", "entreprise maçonnerie Mouchin", "construction Mouchin", "rénovation Mouchin"],
  alternates: { canonical: "https://obc-terrassement.fr/macon-mouchin" },
};

export default function MaconMouchinPage() {
  return (
    <LocalSEOPage
      ville="Mouchin"
      departement="Nord (59310)"
      servicesPrincipaux={["Construction de maison", "Rénovation", "Assainissement"]}
      description="OBC Maçonnerie, basée à Mouchin — votre entreprise de maçonnerie locale. Benoît Colin vous accompagne pour tous vos travaux."
      texteIntro="Basée à Mouchin (59310), OBC Maçonnerie est votre entreprise de maçonnerie de proximité. Benoît Colin connaît parfaitement le secteur et intervient sur tous vos chantiers locaux."
      texteLocal={`OBC Maçonnerie a ses racines à Mouchin (221 Route de Saint-Amand, 59310). C'est ici que Benoît Colin a fondé son entreprise, avec une ambition claire : offrir un service de maçonnerie expert, disponible et honnête aux particuliers et professionnels du secteur.\n\nMouchin et ses environs sont au cœur de notre zone d'intervention. Nous connaissons les terrains, les réglementations locales et les contraintes spécifiques à la commune. Cette proximité est un vrai avantage pour vos projets de construction, rénovation ou assainissement.\n\nEn tant qu'entreprise locale mouchinoise, OBC Maçonnerie est fier de contribuer au développement et à la rénovation du bâti de la commune et des villages environnants. Contactez Benoît pour un devis gratuit.`}
    />
  );
}
