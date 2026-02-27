import type { Metadata } from "next";
import LocalSEOPage from "@/components/marketing/LocalSEOPage";

export const metadata: Metadata = {
  title: "Rénovation Maison Orchies | Maçon | OBC Maçonnerie",
  description:
    "Rénovation de maison et appartement à Orchies. OBC Maçonnerie, maçon expert en rénovation dans le Nord (59). Devis gratuit.",
  keywords: ["rénovation maison Orchies", "maçon rénovation Orchies", "rénovation appartement Orchies"],
  alternates: { canonical: "https://obc-terrassement.fr/renovation-maison-orchies" },
};

export default function RenovationMaisonOrchiesPage() {
  return (
    <LocalSEOPage
      ville="Orchies"
      departement="Nord (59)"
      servicesPrincipaux={["Rénovation"]}
      description="Rénovation de maison à Orchies — OBC Maçonnerie, maçon expert en rénovation dans le secteur d'Orchies."
      texteIntro="Vous avez un projet de rénovation à Orchies ? OBC Maçonnerie est votre spécialiste local pour tous vos travaux de rénovation de maison ou d'appartement."
      texteLocal={`La rénovation est au cœur du métier d'OBC Maçonnerie. À Orchies comme dans toute la région, Benoît Colin transforme les logements existants en s'adaptant à chaque projet : restructuration intérieure, rénovation de façade, création d'ouvertures, extension.\n\nBenoît a une approche unique : il réfléchit avec vous à l'optimisation de vos espaces. Modifier une cage d'escalier, abattre une cloison pour ouvrir un séjour, créer une suite parentale — chaque idée est examinée et mise en œuvre avec soin.\n\nContactez OBC Maçonnerie pour un devis de rénovation gratuit à Orchies. Nous intervenons rapidement et dans les délais convenus.`}
      distanceMouchin="À environ 10 km"
    />
  );
}
