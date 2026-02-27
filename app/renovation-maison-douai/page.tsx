import type { Metadata } from "next";
import LocalSEOPage from "@/components/marketing/LocalSEOPage";

export const metadata: Metadata = {
  title: "Rénovation Maison Douai | Maçon | OBC Maçonnerie",
  description:
    "Rénovation de maison et appartement à Douai. OBC Maçonnerie, maçon expert en rénovation dans le Nord (59). Devis gratuit.",
  keywords: ["rénovation maison Douai", "maçon rénovation Douai", "rénovation appartement Douai", "travaux rénovation Douai"],
  alternates: { canonical: "https://obc-terrassement.fr/renovation-maison-douai" },
};

export default function RenovationMaisonDouaiPage() {
  return (
    <LocalSEOPage
      ville="Douai"
      departement="Nord (59)"
      servicesPrincipaux={["Rénovation"]}
      description="Rénovation de maison à Douai — OBC Maçonnerie, spécialiste de la rénovation dans le Douaisis."
      texteIntro="Vous recherchez un maçon pour rénover votre maison ou appartement à Douai ? OBC Maçonnerie intervient dans tout le Douaisis avec expertise et rigueur."
      texteLocal={`Le Douaisis compte de nombreuses maisons de ville anciennes à rénover. OBC Maçonnerie est parfaitement adapté pour ce type de chantier : restructuration intérieure, mise aux normes, ravalement de façade, création de salles de bains modernes.\n\nBenoît Colin connaît les spécificités des maisons de la région douaisienne et sait travailler sur des bâtis anciens sans compromettre la solidité de la structure. Chaque chantier est une nouvelle aventure.\n\nGrâce à son réseau de partenaires (électricien, plombier, carreleur, peintre), Benoît coordonne l'intégralité de votre rénovation à Douai pour vous livrer un logement entièrement transformé.`}
      distanceMouchin="À environ 20 km"
    />
  );
}
