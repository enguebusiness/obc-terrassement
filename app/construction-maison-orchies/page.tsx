import type { Metadata } from "next";
import LocalSEOPage from "@/components/marketing/LocalSEOPage";

export const metadata: Metadata = {
  title: "Maçon Orchies | Construction & Rénovation | OBC Maçonnerie",
  description:
    "OBC Maçonnerie intervient à Orchies pour vos travaux de construction de maison, rénovation et gros œuvre. Benoît Colin, maçon expert. Devis gratuit.",
  keywords: ["construction maison Orchies", "maçon Orchies", "rénovation Orchies", "gros oeuvre Orchies"],
  alternates: { canonical: "https://obc-terrassement.fr/construction-maison-orchies" },
};

export default function ConstructionMaisonOrchiesPage() {
  return (
    <LocalSEOPage
      ville="Orchies"
      departement="Nord (59)"
      servicesPrincipaux={["Construction de maison", "Rénovation"]}
      description="Construction de maison et rénovation à Orchies — OBC Maçonnerie intervient dans toute la commune."
      texteIntro="Vous habitez à Orchies ou ses alentours et vous avez un projet de construction ou de rénovation ? OBC Maçonnerie intervient dans toute la commune avec expertise et disponibilité."
      texteLocal={`OBC Maçonnerie, basée à Mouchin (59310), est votre entreprise de maçonnerie de proximité à Orchies. Benoît Colin intervient sur tous vos chantiers : construction de maison individuelle, rénovation complète ou partielle, assainissement, création d'accès et démolition.\n\nOrchies est au cœur de notre zone d'intervention. Nous y réalisons régulièrement des chantiers de construction neuve et de rénovation. Notre connaissance du tissu local, des entreprises et des contraintes de terrain de la commune est un vrai atout pour votre projet.\n\nSi vous cherchez un maçon à Orchies, disponible, à l'écoute et capable de vous accompagner de A à Z, contactez Benoît Colin au 06 74 45 30 89 pour un devis gratuit.`}
      distanceMouchin="À environ 10 km"
    />
  );
}
