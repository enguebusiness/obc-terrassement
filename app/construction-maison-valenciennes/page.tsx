import type { Metadata } from "next";
import LocalSEOPage from "@/components/marketing/LocalSEOPage";

export const metadata: Metadata = {
  title: "Maçon Valenciennes | Construction & Rénovation | OBC Maçonnerie",
  description:
    "OBC Maçonnerie intervient à Valenciennes pour vos travaux de construction de maison, rénovation et gros œuvre. Benoît Colin, maçon expert. Devis gratuit.",
  keywords: ["construction maison Valenciennes", "maçon Valenciennes", "rénovation Valenciennes", "gros oeuvre Valenciennes"],
  alternates: { canonical: "https://obc-terrassement.fr/construction-maison-valenciennes" },
};

export default function ConstructionMaisonValenciennesPage() {
  return (
    <LocalSEOPage
      ville="Valenciennes"
      departement="Nord (59)"
      servicesPrincipaux={["Construction de maison", "Rénovation"]}
      description="Construction de maison et rénovation à Valenciennes — OBC Maçonnerie intervient dans toute la commune et le Valenciennois."
      texteIntro="Vous recherchez un maçon de confiance à Valenciennes ? OBC Maçonnerie intervient dans tout le Valenciennois pour vos projets de construction neuve et de rénovation."
      texteLocal={`OBC Maçonnerie étend son intervention jusqu'à Valenciennes et son agglomération. Benoît Colin et son équipe réalisent des chantiers de construction de maison individuelle, de rénovation complète et de gros œuvre dans tout le secteur valenciennois.\n\nNotre savoir-faire en construction neuve et rénovation s'adapte aux projets du Valenciennois : constructions traditionnelles, maisons en ossature bois, rénovation de maisons de ville anciennes. Chaque projet est traité avec la même rigueur.\n\nContactez OBC Maçonnerie pour un devis gratuit à Valenciennes et dans les communes environnantes. Benoît se déplace pour évaluer votre projet.`}
      distanceMouchin="À environ 25 km"
    />
  );
}
