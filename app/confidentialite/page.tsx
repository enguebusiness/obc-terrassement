import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | OBC Maçonnerie",
  description:
    "Politique de confidentialité et protection des données personnelles du site OBC Maçonnerie, conformément au RGPD.",
  alternates: { canonical: "https://obc-maconnerie.fr/confidentialite" },
  robots: { index: false, follow: false },
};

export default function Confidentialite() {
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

        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-10">Politique de Confidentialité</h1>

        <div className="space-y-8 text-text-light text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">1. Responsable du traitement</h2>
            <div className="bg-bg-white border border-border rounded-xl p-5 space-y-1">
              <p><strong className="text-text">Benoît COLIN — OBC Maçonnerie</strong></p>
              <p>SIREN : 531 827 871</p>
              <p>221 Route de Saint-Amand, 59310 Mouchin</p>
              <p>Tél : <a href="tel:0674453089" className="text-orange hover:underline">06 74 45 30 89</a></p>
              <p>Email : <a href="mailto:contact@obc-maconnerie.fr" className="text-orange hover:underline">contact@obc-maconnerie.fr</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">2. Données collectées</h2>
            <p>Nous collectons uniquement les données que vous nous transmettez via le formulaire de contact :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside ml-2">
              <li>Nom et prénom</li>
              <li>Numéro de téléphone</li>
              <li>Adresse email (optionnelle)</li>
              <li>Type de projet et description</li>
              <li>Budget approximatif (optionnel)</li>
              <li>Commune / zone d&apos;intervention</li>
            </ul>
            <p className="mt-3">
              <strong className="text-text">Aucune donnée bancaire</strong> n&apos;est collectée sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">3. Finalités du traitement</h2>
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul className="mt-3 space-y-1 list-disc list-inside ml-2">
              <li>Répondre à votre demande de devis et vous recontacter</li>
              <li>Préparer et établir un devis adapté à votre projet</li>
              <li>Gérer la relation commerciale si vous confiez votre chantier à OBC Maçonnerie</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">4. Base légale</h2>
            <ul className="space-y-1 list-disc list-inside ml-2">
              <li><strong className="text-text">Consentement :</strong> Pour les données transmises via le formulaire de contact.</li>
              <li><strong className="text-text">Exécution du contrat :</strong> Pour les données nécessaires à la réalisation du chantier.</li>
              <li><strong className="text-text">Obligation légale :</strong> Pour la conservation des documents comptables (10 ans).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">5. Partage des données</h2>
            <p>
              Vos données ne sont jamais vendues à des tiers. Elles peuvent être transmises uniquement aux prestataires techniques nécessaires au fonctionnement du site :
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside ml-2">
              <li><strong className="text-text">Vercel :</strong> Hébergement du site web</li>
              <li><strong className="text-text">Resend :</strong> Envoi des emails de notification</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">6. Durée de conservation</h2>
            <ul className="space-y-1 list-disc list-inside ml-2">
              <li><strong className="text-text">Prospects :</strong> 3 ans après le dernier contact</li>
              <li><strong className="text-text">Clients :</strong> 5 ans après la fin de la relation contractuelle</li>
              <li><strong className="text-text">Documents comptables :</strong> 10 ans (obligation légale)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">7. Vos droits (RGPD)</h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et de portabilité de vos données. Pour exercer ces droits, contactez-nous :
            </p>
            <p className="mt-3">
              <a href="mailto:contact@obc-maconnerie.fr" className="text-orange font-semibold hover:underline">
                contact@obc-maconnerie.fr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">8. Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de traçage tiers n&apos;est utilisé.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy mb-3">9. Sécurité</h2>
            <p>
              Toutes les communications entre votre navigateur et notre site sont chiffrées via le protocole HTTPS. Vos données sont traitées avec le plus grand soin et ne sont accessibles qu&apos;aux personnes habilitées.
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
