import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactForm from "@/components/marketing/ContactForm";

export const metadata: Metadata = {
  title: "OBC Maçonnerie | Constructeur & Maçon à Orchies (Nord 59)",
  description:
    "Benoît Colin, maçon expert à Mouchin. Construction de maison, rénovation, assainissement et gros œuvre dans un rayon de 30km autour d'Orchies. Devis gratuit.",
  alternates: {
    canonical: "https://obc-maconnerie.fr",
  },
};

const services = [
  {
    icon: "🏠",
    title: "Construction de maison",
    desc: "Fondations, ossature bois, gros œuvre — on bâtit votre projet de A à Z avec vous.",
    href: "/construction-maison",
  },
  {
    icon: "🔨",
    title: "Rénovation",
    desc: "Maison ou appartement, on s'adapte à votre projet et vos envies.",
    href: "/renovation",
  },
  {
    icon: "💧",
    title: "Assainissement",
    desc: "Mise aux normes et création de systèmes d'assainissement fiables.",
    href: "/assainissement",
  },
  {
    icon: "🚧",
    title: "Création d'accès",
    desc: "Voiries, entrées, chemins — on crée vos accès sur mesure.",
    href: "/creation-acces",
  },
  {
    icon: "🏗️",
    title: "Démolition",
    desc: "Démolition totale ou partielle, avec toutes les garanties de sécurité.",
    href: "/demolition",
  },
  {
    icon: "🤝",
    title: "Conseil & Accompagnement",
    desc: "Benoît vous éclaire dans vos choix : matériaux, plans, adaptations — on réfléchit ensemble.",
    href: "/contact",
  },
];

const pilliers = [
  {
    icon: "📍",
    title: "Proche de vous",
    desc: "Disponible, à l'écoute, Benoît intervient dans votre secteur local et prend le temps de comprendre votre projet.",
  },
  {
    icon: "💡",
    title: "Conseil expert",
    desc: "Il guide vos choix de matériaux et adapte les plans d'architecte pour un résultat qui vous ressemble.",
  },
  {
    icon: "🛡️",
    title: "Acteur de confiance",
    desc: "Transparent à chaque étape, Benoît rassure, explique et vous tient informé de l'avancement du chantier.",
  },
  {
    icon: "❤️",
    title: "Passionné du métier",
    desc: "\"On ne fait jamais deux fois la même maison.\" Benoît aime être au cœur de chaque projet, de A à Z.",
  },
];

const partenaires = [
  { label: "Électricité", icon: "⚡" },
  { label: "Plomberie", icon: "🔧" },
  { label: "Charpente", icon: "🪵" },
  { label: "Couverture", icon: "🏚️" },
  { label: "Isolation", icon: "🧱" },
  { label: "Menuiserie", icon: "🚪" },
  { label: "Carrelage", icon: "🔳" },
  { label: "Peinture", icon: "🎨" },
];

const villes = [
  "Orchies",
  "Mouchin",
  "Flines-lès-Raches",
  "Château-l'Abbaye",
  "Mérignies",
  "Douai",
  "Valenciennes",
  "Saint-Amand-les-Eaux",
];

const realisations = [
  {
    title: "Construction d'une maison individuelle",
    desc: "Fondations, gros œuvre et ossature — livraison clé en main à Orchies.",
    cat: "Construction neuve",
    color: "bg-navy",
  },
  {
    title: "Rénovation complète d'une maison de ville",
    desc: "Restructuration intérieure, cloisons, escalier réhabilité à Douai.",
    cat: "Rénovation",
    color: "bg-stone",
  },
  {
    title: "Création d'un accès et chemin d'entrée",
    desc: "Voirie et entrée béton imprimé, aménagement paysager à Mérignies.",
    cat: "Création d'accès",
    color: "bg-orange",
  },
];

const temoignages = [
  {
    nom: "Christophe & Marie L.",
    lieu: "Orchies",
    projet: "Construction maison",
    texte:
      "Benoît nous a accompagnés de A à Z dans la construction de notre maison. Il a su adapter le plan d'architecte à nos envies tout en respectant notre budget. Disponible, professionnel, et vraiment à l'écoute. On recommande les yeux fermés.",
    note: 5,
  },
  {
    nom: "Sophie D.",
    lieu: "Douai",
    projet: "Rénovation",
    texte:
      "On lui a confié la rénovation complète de notre maison de 1970. Benoît a pris le temps de tout nous expliquer, a proposé des solutions auxquelles on n'avait pas pensé, et le résultat est magnifique. Un vrai professionnel.",
    note: 5,
  },
  {
    nom: "Famille Moreau",
    lieu: "Saint-Amand-les-Eaux",
    projet: "Assainissement",
    texte:
      "Mise aux normes de notre système d'assainissement réalisée dans les délais et en toute transparence. Benoît nous a expliqué chaque étape. Très sérieux et propre dans son travail.",
    note: 5,
  },
];

const faqs = [
  {
    q: "Dans quelle zone intervenez-vous ?",
    a: "OBC Maçonnerie intervient dans un rayon de 20 à 30 km autour de Mouchin (59310) : Orchies, Flines-lès-Raches, Château-l'Abbaye, Mérignies, Douai, Valenciennes, Saint-Amand-les-Eaux et les communes alentour.",
  },
  {
    q: "Faites-vous des devis gratuits ?",
    a: "Oui, absolument. Le devis est gratuit et sans engagement. Contactez Benoît par téléphone ou via le formulaire, il se déplace pour évaluer votre projet.",
  },
  {
    q: "Pouvez-vous adapter un plan d'architecte ?",
    a: "Oui, c'est même l'une de nos spécialités. Benoît collabore directement avec vous pour adapter les plans à vos envies, votre budget et les contraintes du terrain.",
  },
  {
    q: "Combien de temps dure une construction de maison ?",
    a: "Une construction neuve prend en moyenne 10 à 18 mois selon la complexité du projet, les conditions météo et les délais de livraison des matériaux. Benoît vous donne un calendrier dès la signature.",
  },
  {
    q: "Travaillez-vous avec d'autres artisans ?",
    a: "Oui. OBC Maçonnerie dispose d'un réseau de partenaires de confiance pour tous les corps de métier : électricité, plomberie, charpente, isolation, menuiserie, carrelage, peinture et couverture. Vous avez un seul interlocuteur pour coordonner l'ensemble.",
  },
];

function StarRating({ note }: { note: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < note ? "text-orange" : "text-border"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      {/* ── SECTION 1 — HERO ── */}
      <section className="relative bg-navy overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-hero-text-1">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm">
              Disponible, à l&apos;écoute — Benoît vous accompagne de la première pierre à la remise des clés
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 animate-hero-text-2">
            Maçon &amp; Constructeur<br />
            <span className="text-orange">dans le Nord</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-hero-text-3">
            Construction de maison, rénovation, assainissement et gros œuvre —
            expertise autour d&apos;Orchies, Douai et Valenciennes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-hero-text-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white font-bold px-8 py-4 rounded-xl text-base transition-colors pulse-glow"
            >
              Demander un devis gratuit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/realisations"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors border border-white/20"
            >
              Voir nos réalisations
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto border-t border-white/10 pt-10">
            {[
              { val: "15+", label: "ans d'expérience" },
              { val: "200+", label: "chantiers réalisés" },
              { val: "30km", label: "de rayon d'action" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange">{s.val}</div>
                <div className="text-white/50 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — NOS SERVICES ── */}
      <section className="py-20 md:py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Ce que nous faisons</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Nos services de maçonnerie</h2>
              <p className="text-text-light mt-3 max-w-xl mx-auto">
                De la construction neuve à la rénovation, Benoît Colin et son équipe prennent en charge tous vos travaux de gros œuvre dans le Nord.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} direction="up" delay={i * 80}>
                <Link
                  href={s.href}
                  className="group block bg-bg-white border border-border rounded-2xl p-6 hover:border-orange hover:shadow-lg transition-all duration-300 card-hover"
                >
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-navy font-bold text-lg mb-2 group-hover:text-orange transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-orange text-sm font-semibold">
                    En savoir plus
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — POURQUOI CHOISIR OBC ── */}
      <section className="py-20 md:py-24 bg-stone-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Notre différence</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Pourquoi choisir OBC Maçonnerie ?</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilliers.map((p, i) => (
              <ScrollReveal key={p.title} direction="up" delay={i * 100}>
                <div className="bg-bg-white rounded-2xl p-6 border border-border text-center h-full">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="text-navy font-bold text-lg mb-3">{p.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — RÉSEAU PARTENAIRES ── */}
      <section className="py-20 md:py-24 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Un réseau solide</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
                Seul on va vite, ensemble on va plus loin.
              </h2>
              <p className="text-text-light mt-4 max-w-xl mx-auto">
                Grâce à notre réseau de partenaires de confiance, nous coordonnons l&apos;ensemble des corps de métier pour que votre maison prenne forme de A à Z.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partenaires.map((p, i) => (
              <ScrollReveal key={p.label} direction="up" delay={i * 60}>
                <div className="bg-bg-white border border-border rounded-xl p-4 text-center hover:border-orange hover:shadow-md transition-all">
                  <div className="text-2xl mb-2">{p.icon}</div>
                  <span className="text-navy font-semibold text-sm">{p.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={200}>
            <div className="mt-10 bg-navy rounded-2xl p-6 md:p-8 text-center">
              <p className="text-white text-base md:text-lg font-medium">
                Un seul interlocuteur pour coordonner l&apos;ensemble de votre projet — de la démolition à la remise des clés.
              </p>
              <Link
                href="/partenaires"
                className="inline-flex items-center gap-2 mt-4 text-orange-light hover:text-white font-semibold transition-colors"
              >
                Découvrir notre réseau
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 5 — ZONE D'INTERVENTION ── */}
      <section className="py-20 md:py-24 bg-stone-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <span className="text-orange text-sm font-semibold uppercase tracking-widest">Secteur d&apos;activité</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
              Nous intervenons dans toute la région
            </h2>
            <p className="text-text-light max-w-xl mx-auto mb-10">
              OBC Maçonnerie intervient dans un rayon de 20 à 30 km autour de Mouchin (Nord 59).
            </p>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {villes.map((v, i) => (
              <ScrollReveal key={v} direction="up" delay={i * 50}>
                <span className="inline-flex items-center gap-1.5 bg-bg-white border border-border text-navy font-medium text-sm px-4 py-2 rounded-full hover:border-orange hover:shadow-sm transition-all">
                  <span className="text-orange">📍</span>
                  {v}
                </span>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={100}>
            <p className="text-text-light text-sm italic">
              Et dans toutes les communes à 20-30 km autour de Mouchin — contactez-nous pour vérifier votre zone.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 bg-orange hover:bg-orange-hover text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              Demander un devis dans ma commune
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 6 — RÉALISATIONS ── */}
      <section className="py-20 md:py-24 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Nos chantiers</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Aperçu de nos réalisations</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realisations.map((r, i) => (
              <ScrollReveal key={r.title} direction="up" delay={i * 100}>
                <div className="bg-bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all group card-hover">
                  <div className={`${r.color} h-44 flex items-center justify-center`}>
                    <span className="text-white/20 text-8xl font-bold">{i + 1}</span>
                  </div>
                  <div className="p-5">
                    <span className="inline-block bg-bg-muted text-text-light text-xs font-semibold px-2 py-1 rounded-full mb-2">
                      {r.cat}
                    </span>
                    <h3 className="text-navy font-bold text-base mb-1 group-hover:text-orange transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-text-light text-sm">{r.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={150}>
            <div className="text-center mt-8">
              <Link
                href="/realisations"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
              >
                Voir toutes nos réalisations
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 7 — TÉMOIGNAGES ── */}
      <section className="py-20 md:py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Ce qu&apos;ils en disent</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Témoignages clients</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {temoignages.map((t, i) => (
              <ScrollReveal key={t.nom} direction="up" delay={i * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col">
                  <StarRating note={t.note} />
                  <p className="text-white/80 text-sm leading-relaxed mt-4 flex-1 italic">
                    &ldquo;{t.texte}&rdquo;
                  </p>
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <p className="text-white font-semibold text-sm">{t.nom}</p>
                    <p className="text-white/40 text-xs">{t.lieu} — {t.projet}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8 — FAQ ── */}
      <section className="py-20 md:py-24 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Questions fréquentes</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">FAQ</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} direction="up" delay={i * 60}>
                <details className="group bg-bg-white border border-border rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-navy hover:text-orange transition-colors list-none">
                    {f.q}
                    <svg
                      className="w-5 h-5 text-text-muted group-open:rotate-180 transition-transform shrink-0 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-text-light text-sm leading-relaxed border-t border-border-light pt-4">
                    {f.a}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9 — FORMULAIRE DE CONTACT ── */}
      <section className="py-20 md:py-24 bg-stone-bg" id="contact">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <span className="text-orange text-sm font-semibold uppercase tracking-widest">Devis gratuit</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">Parlez-nous de votre projet</h2>
              <p className="text-text-light mt-3">
                Réponse sous 24h — ou appelez directement Benoît au{" "}
                <a href="tel:0674453089" className="text-orange font-bold hover:underline">
                  06 74 45 30 89
                </a>
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
