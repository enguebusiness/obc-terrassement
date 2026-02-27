import type { Metadata } from "next";
import LocalSEOPage from "@/components/marketing/LocalSEOPage";

export const metadata: Metadata = {
  title: "Maçon Flines-lès-Raches | Construction & Rénovation | OBC Maçonnerie",
  description:
    "OBC Maçonnerie intervient à Flines-lès-Raches pour vos travaux de construction, rénovation et gros œuvre. Benoît Colin, maçon expert. Devis gratuit.",
  keywords: ["maçon Flines-lès-Raches", "construction Flines Raches", "rénovation Flines Raches", "maçon Flines Nord"],
  alternates: { canonical: "https://obc-maconnerie.fr/macon-flines-lez-raches" },
};

export default function MaconFlinesPage() {
  return (
    <LocalSEOPage
      ville="Flines-lès-Raches"
      departement="Nord (59148)"
      servicesPrincipaux={["Construction de maison", "Rénovation"]}
      description="Maçon à Flines-lès-Raches — OBC Maçonnerie intervient dans la commune pour vos travaux de construction et rénovation."
      texteIntro="Vous avez un projet de maçonnerie à Flines-lès-Raches ? OBC Maçonnerie, basée à quelques kilomètres à Mouchin, intervient rapidement dans la commune."
      texteLocal={`Flines-lès-Raches est l'une des communes que OBC Maçonnerie dessert régulièrement. Benoît Colin y réalise des chantiers de construction neuve, de rénovation de maison et d'assainissement.\n\nVotre maçon de proximité est à Mouchin, soit à quelques minutes de Flines-lès-Raches. Cette proximité garantit une réactivité optimale pour vos urgences et une meilleure coordination du chantier.\n\nContactez OBC Maçonnerie pour un devis gratuit à Flines-lès-Raches. Benoît se déplace pour évaluer votre projet et vous proposer la meilleure solution.`}
      distanceMouchin="À environ 5 km"
    />
  );
}
