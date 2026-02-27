import type { Metadata } from "next";
import LocalSEOPage from "@/components/marketing/LocalSEOPage";

export const metadata: Metadata = {
  title: "Maçon Douai | Construction & Rénovation | OBC Maçonnerie",
  description:
    "OBC Maçonnerie intervient à Douai pour vos travaux de construction de maison, rénovation et gros œuvre. Benoît Colin, maçon expert. Devis gratuit.",
  keywords: ["construction maison Douai", "maçon Douai", "rénovation Douai", "gros oeuvre Douai", "maçon rénovation Douai"],
  alternates: { canonical: "https://obc-maconnerie.fr/construction-maison-douai" },
};

export default function ConstructionMaisonDouaiPage() {
  return (
    <LocalSEOPage
      ville="Douai"
      departement="Nord (59)"
      servicesPrincipaux={["Construction de maison", "Rénovation"]}
      description="Construction de maison et rénovation à Douai — OBC Maçonnerie intervient dans toute la commune et ses alentours."
      texteIntro="Votre projet de construction ou de rénovation à Douai mérite un maçon de confiance. OBC Maçonnerie intervient dans toute l'agglomération douaisienne avec rigueur et professionnalisme."
      texteLocal={`OBC Maçonnerie intervient à Douai et dans toute son agglomération pour vos travaux de maçonnerie. Que vous souhaitiez construire une maison neuve, rénover un bien existant ou réaliser des travaux d'assainissement, Benoît Colin est à votre disposition.\n\nDouai est une ville que nous connaissons bien, avec ses spécificités : maisons de ville à rénover, terrains en zone urbaine, règles d'urbanisme particulières. Notre expérience locale vous garantit un projet réalisé dans les règles de l'art et dans les délais.\n\nN'hésitez pas à contacter OBC Maçonnerie pour un devis gratuit à Douai. Benoît se déplace pour évaluer votre projet.`}
      distanceMouchin="À environ 20 km"
    />
  );
}
