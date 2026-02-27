import type { Metadata } from "next";
import LocalSEOPage from "@/components/marketing/LocalSEOPage";

export const metadata: Metadata = {
  title: "Maçon Saint-Amand-les-Eaux | Construction & Rénovation | OBC Maçonnerie",
  description:
    "OBC Maçonnerie intervient à Saint-Amand-les-Eaux pour vos travaux de construction, rénovation, assainissement et gros œuvre. Devis gratuit.",
  keywords: ["maçon Saint-Amand-les-Eaux", "construction Saint-Amand", "rénovation Saint-Amand les Eaux", "maçon Saint-Amand Nord"],
  alternates: { canonical: "https://obc-maconnerie.fr/macon-saint-amand-les-eaux" },
};

export default function MaconSaintAmandPage() {
  return (
    <LocalSEOPage
      ville="Saint-Amand-les-Eaux"
      departement="Nord (59230)"
      servicesPrincipaux={["Construction de maison", "Rénovation", "Assainissement"]}
      description="Maçon à Saint-Amand-les-Eaux — OBC Maçonnerie intervient dans la commune pour tous vos travaux de maçonnerie."
      texteIntro="Vous recherchez un maçon de confiance à Saint-Amand-les-Eaux ? OBC Maçonnerie intervient dans toute la commune et ses alentours pour vos projets de construction et rénovation."
      texteLocal={`Saint-Amand-les-Eaux est une commune importante de notre zone d'intervention. OBC Maçonnerie y réalise régulièrement des chantiers de construction de maison individuelle, de rénovation et d'assainissement non collectif.\n\nLa commune de Saint-Amand-les-Eaux est connue pour son patrimoine architectural. Benoît Colin apprécie travailler sur les maisons de la région, souvent en pierre ou en brique, qui nécessitent une connaissance spécifique des matériaux traditionnels.\n\nPour un devis gratuit à Saint-Amand-les-Eaux, contactez OBC Maçonnerie au 06 74 45 30 89 ou via notre formulaire de contact.`}
      distanceMouchin="À environ 10 km"
    />
  );
}
