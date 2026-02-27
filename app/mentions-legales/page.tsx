import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Mentions Légales | OBC Maçonnerie",
  description:
    "Mentions légales du site OBC Maçonnerie — Benoît Colin, maçon à Mouchin (59310). SIREN 531 827 871.",
  alternates: { canonical: "https://obc-maconnerie.fr/mentions-legales" },
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <main id="main-content" className="min-h-screen bg-bg">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-text-light hover:text-navy text-sm transition-colors group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour à l&apos;accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-10">Mentions Légales</h1>

        <div className="space-y-10 text-text-light text-sm leading-relaxed">
          <p className="italic text-text-muted">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie numérique (LCEN), voici les informations légales du site <strong className="text-text">obc-maconnerie.fr</strong>.
          </p>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">1. Édition du site</h2>
            <div className="bg-bg-white border border-border rounded-xl p-6 space-y-2">
              <p>Le présent site est édité par :</p>
              <p><strong className="text-text">Benoît COLIN</strong><br />Exerçant sous l&apos;enseigne commerciale <strong className="text-text">OBC Maçonnerie</strong></p>
              <ul className="space-y-1 mt-3">
                <li><strong className="text-text">Statut :</strong> Entreprise individuelle</li>
                <li><strong className="text-text">SIREN :</strong> 531 827 871</li>
                <li><strong className="text-text">Siège social :</strong> 221 Route de Saint-Amand, 59310 Mouchin, France</li>
                <li><strong className="text-text">Téléphone :</strong> <a href="tel:0674453089" className="text-orange hover:underline">06 74 45 30 89</a></li>
                <li><strong className="text-text">Email :</strong> <a href="mailto:contact@obc-maconnerie.fr" className="text-orange hover:underline">contact@obc-maconnerie.fr</a></li>
              </ul>
              <p className="mt-3"><strong className="text-text">Directeur de la publication :</strong> Benoît COLIN</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">2. Conception & réalisation</h2>
            <div className="bg-bg-white border border-border rounded-xl p-6">
              <p>Ce site a été conçu et réalisé par <strong className="text-text">HookLab</strong> — Enguerrand Ozano, agence web spécialisée dans les sites pour artisans du bâtiment dans le Nord.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">3. Hébergement</h2>
            <div className="bg-bg-white border border-border rounded-xl p-6">
              <p>Le site est hébergé par <strong className="text-text">Vercel Inc.</strong></p>
              <p className="mt-2">440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, visuels, structure) est la propriété d&apos;OBC Maçonnerie. Toute reproduction est interdite sans autorisation préalable écrite de Benoît COLIN.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">5. Données personnelles</h2>
            <p>
              Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes de devis. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression.{" "}
              <Link href="/confidentialite" className="text-orange hover:underline">
                Voir notre politique de confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-4">6. Droit applicable</h2>
            <p>
              Tout litige en relation avec l&apos;utilisation du site est soumis au droit français. Juridiction compétente : Tribunal de Valenciennes.
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
