import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | OBC Maçonnerie",
  description:
    "Conditions générales de vente d'OBC Maçonnerie — Benoît Colin, maçon à Mouchin (59310). Prestations de construction, rénovation et gros œuvre.",
  alternates: { canonical: "https://obc-maconnerie.fr/cgv" },
  robots: { index: false, follow: false },
};

export default function CGV() {
  return (
    <main id="main-content" className="min-h-screen bg-bg">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <Link href="/" className="inline-flex items-center gap-2 mb-8 text-text-light hover:text-navy text-sm transition-colors group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour à l&apos;accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-10">Conditions Générales de Vente</h1>

        <div className="space-y-8 text-text-light text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">Article 1 — Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les prestations de travaux de maçonnerie, construction, rénovation, assainissement, création d&apos;accès et démolition proposées par <strong className="text-text">OBC Maçonnerie</strong>, entreprise individuelle dirigée par Benoît COLIN, SIREN 531 827 871, dont le siège est situé au 221 Route de Saint-Amand, 59310 Mouchin.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">Article 2 — Devis et commandes</h2>
            <p>
              Toute prestation fait l&apos;objet d&apos;un devis préalable gratuit. Le devis est établi après visite du chantier. Il est valable 30 jours à compter de sa date d&apos;émission. La signature du devis par le client vaut acceptation des présentes CGV et commande ferme.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">Article 3 — Prix et paiement</h2>
            <p>
              Les prix sont indiqués hors taxes ou TTC selon le régime fiscal applicable. Un acompte de 30% peut être demandé à la commande, le solde étant payable à la réception des travaux. En cas de retard de paiement, des pénalités de retard seront appliquées conformément aux dispositions légales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">Article 4 — Délais d&apos;exécution</h2>
            <p>
              Les délais d&apos;exécution sont communiqués à titre indicatif dans le devis. OBC Maçonnerie s&apos;engage à respecter les délais convenus sauf cas de force majeure, conditions météorologiques défavorables ou retard imputable au client ou à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">Article 5 — Garanties</h2>
            <p>
              OBC Maçonnerie est couvert par les garanties légales applicables aux travaux de construction :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li><strong className="text-text">Garantie décennale</strong> : couvre les dommages compromettant la solidité de l&apos;ouvrage pendant 10 ans.</li>
              <li><strong className="text-text">Garantie biennale</strong> : couvre les éléments d&apos;équipement dissociables pendant 2 ans.</li>
              <li><strong className="text-text">Garantie de parfait achèvement</strong> : couvre les défauts signalés à la réception pendant 1 an.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">Article 6 — Responsabilité</h2>
            <p>
              OBC Maçonnerie est assuré en responsabilité civile professionnelle et décennale. La responsabilité d&apos;OBC Maçonnerie ne saurait être engagée pour des dommages résultant d&apos;une utilisation non conforme des ouvrages réalisés ou d&apos;une intervention de tiers après réception.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">Article 7 — Réception des travaux</h2>
            <p>
              La réception des travaux est prononcée contradictoirement entre OBC Maçonnerie et le client. Elle fait l&apos;objet d&apos;un procès-verbal. Les réserves éventuelles y sont consignées et levées dans les délais convenus.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">Article 8 — Données personnelles</h2>
            <p>
              Les données personnelles collectées sont traitées conformément à notre{" "}
              <Link href="/confidentialite" className="text-orange hover:underline">
                politique de confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">Article 9 — Droit applicable et litiges</h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité. À défaut, le tribunal compétent sera celui de Valenciennes.
            </p>
          </section>

          <p className="text-text-muted text-xs pt-4 border-t border-border">
            Dernière mise à jour : Février 2026
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
