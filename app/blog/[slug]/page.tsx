import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { getBlogPost, getBlogPosts, getSiteConfig } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

// Corps des articles — FUTURE: champ rich text Payload CMS
const articleContenu: Record<string, string[]> = {
  "combien-coute-construction-maison-nord": [
    "La construction d'une maison individuelle dans le Nord représente un investissement significatif. En 2025, le coût moyen se situe entre 1 200 € et 1 800 € par m² hors terrain et hors raccordements, selon les matériaux choisis et la complexité du projet.",
    "**Le prix du terrain** est souvent la première variable. Dans le secteur d'Orchies et de Mouchin, comptez entre 50 000 € et 120 000 € pour une parcelle constructible de 400 à 600 m².",
    "**Le gros œuvre** (fondations, murs, dalle, toiture) représente environ 40 à 50% du budget total. C'est là qu'intervient OBC Maçonnerie avec son savoir-faire et son réseau de partenaires pour optimiser les coûts sans sacrifier la qualité.",
    "**Les finitions et corps de métier** (électricité, plomberie, chauffage, isolation, menuiserie, carrelage, peinture) représentent les 50 à 60% restants.",
    "Pour un projet de 100 m² habitable à Orchies ou Douai, un budget total entre 180 000 € et 280 000 € (hors terrain) est réaliste selon le niveau de finition souhaité.",
    "Le meilleur conseil : contactez Benoît Colin pour une évaluation gratuite de votre projet. Il vous donnera une estimation précise adaptée à votre terrain et vos envies.",
  ],
  "etapes-renovation-maison-ancienne": [
    "Rénover une maison ancienne dans le Nord demande une méthodologie rigoureuse. Voici les grandes étapes pour mener votre projet à bien.",
    "**1. Le diagnostic** : Avant tout, il faut évaluer l'état du bâtiment. Charpente, toiture, murs porteurs, fondations, réseaux électriques et plomberie — tout doit être passé en revue. Un maçon expérimenté comme Benoît Colin peut repérer les problèmes invisibles à l'œil nu.",
    "**2. La démolition et le curage** : On enlève ce qui est vétuste ou inadapté — cloisons obsolètes, chapes abîmées, enduits défaillants — pour repartir sur de bonnes bases.",
    "**3. Le gros œuvre** : Reprises de fondations si nécessaire, traitement des murs humides, création d'ouvertures, modification de la structure. C'est le cœur du métier d'OBC Maçonnerie.",
    "**4. Les corps de métier** : Électricité, plomberie, chauffage, isolation. Grâce à son réseau de partenaires, Benoît coordonne chaque intervention dans le bon ordre.",
    "**5. Les finitions** : Menuiseries, carrelage, peinture, revêtements de sol. La touche finale qui donne tout son caractère à votre maison rénovée.",
    "Chaque rénovation est unique. Contactez OBC Maçonnerie pour une évaluation gratuite de votre projet.",
  ],
  "assainissement-non-collectif-obligations": [
    "En France, environ 5 millions de logements sont équipés d'un assainissement non collectif (ANC). Si votre maison n'est pas raccordée au réseau public, vous êtes soumis à des obligations précises.",
    "**Le contrôle SPANC** : Le Service Public d'Assainissement Non Collectif peut contrôler votre installation. En cas de non-conformité, vous avez en principe 4 ans pour mettre aux normes, ou moins si vous vendez le bien.",
    "**La vente immobilière** : Depuis 2011, un diagnostic d'assainissement est obligatoire lors de toute vente. S'il révèle une non-conformité, l'acheteur doit réaliser les travaux dans l'année suivant l'acte de vente.",
    "**Les principales normes** : Votre installation doit traiter correctement les eaux usées avant rejet dans le sol. Les normes imposent une fosse toutes eaux (ou une micro-station) et un dispositif d'épandage adapté à la surface disponible.",
    "**OBC Maçonnerie vous accompagne** dans la mise aux normes ou la création de votre système d'assainissement non collectif. Nous intervenons sur Orchies, Douai, Valenciennes et toute la zone.",
  ],
  "ossature-bois-avantages": [
    "La construction en ossature bois connaît un vrai succès dans le Nord. Et pour cause : ce mode constructif présente de nombreux avantages techniques et économiques.",
    "**Performance thermique** : Le bois est un excellent isolant naturel. Une construction ossature bois bien conçue atteint facilement les exigences RE2020.",
    "**Rapidité de chantier** : Les éléments préfabriqués permettent de monter les murs en quelques jours. Le clos-couvert est obtenu très rapidement.",
    "**Légèreté** : L'ossature bois pèse 5 à 8 fois moins qu'une construction maçonnée, ce qui allège les fondations — un avantage sur les terrains argileux fréquents dans le Nord.",
    "**Polyvalence architecturale** : L'ossature bois permet des formes architecturales variées, des larges baies vitrées et une grande liberté de conception.",
    "**La combinaison idéale** : OBC Maçonnerie maîtrise la construction ossature bois et la maçonnerie traditionnelle. Benoît vous conseille sur la solution la plus adaptée à votre terrain et vos envies.",
  ],
  "travaux-renovation-sans-permis-construction": [
    "Avant de démarrer des travaux de rénovation, il est important de savoir si vous avez besoin d'une autorisation administrative.",
    "**Aucune démarche requise** : Les travaux purement intérieurs (peinture, revêtements, redistribution de cloisons non porteuses, remplacement de fenêtres à l'identique) ne nécessitent généralement aucune démarche.",
    "**Déclaration préalable** : Pour les extensions jusqu'à 40 m² (en zone urbaine PLU), les changements de façade, les travaux modifiant l'aspect extérieur.",
    "**Permis de construire** : Obligatoire pour les extensions de plus de 40 m², la création d'une surface de plancher supérieure à 20 m² en dehors des zones PLU, ou les changements de destination.",
    "**Cas des zones protégées** : Si votre maison est en zone ABF (Architecte des Bâtiments de France), les règles sont plus strictes. Renseignez-vous en mairie.",
    "En cas de doute, OBC Maçonnerie vous accompagne dans vos démarches administratives. Benoît connaît bien les règles locales dans le secteur d'Orchies, Douai et Valenciennes.",
  ],
  "fondations-maison-quels-types": [
    "Les fondations sont la base de toute construction. Mal dimensionnées ou inadaptées au sol, elles peuvent entraîner des désordres graves. Voici les principaux types.",
    "**Les semelles filantes** : Le type le plus courant pour les maisons individuelles. Elles répartissent les charges des murs porteurs sur une bande de terrain. Adaptées aux sols stables et homogènes.",
    "**Le radier** : Une dalle béton armé qui couvre toute la surface de la maison. Recommandé sur les terrains argileux, instables ou avec présence d'eau. Fréquent dans certains secteurs du Nord.",
    "**Les pieux** : Utilisés quand le sol de surface est insuffisant pour porter la maison. Des pieux sont enfoncés jusqu'à une couche de sol plus résistante.",
    "**L'étude de sol** : Avant toute construction, une étude géotechnique (étude de sol) est vivement recommandée — et même obligatoire dans certains cas (zones argileuses). Elle permet de choisir le bon type de fondations.",
    "OBC Maçonnerie réalise vos fondations avec rigueur, après analyse du terrain. Benoît vous conseille sur la solution la plus adaptée à votre projet dans le Nord.",
  ],
};

export async function generateStaticParams() {
  // FUTURE: utilise getBlogPosts() pour générer les slugs depuis Payload CMS
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const [post, config] = await Promise.all([getBlogPost(slug), getSiteConfig()]);
  if (!post) return { title: "Article introuvable" };
  return {
    title: post.titre,
    description: post.extrait,
    alternates: { canonical: `${config.url}/blog/${slug}` },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const contenu = articleContenu[slug] ?? [];

  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      <section className="bg-navy py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-6 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour au blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-orange/20 text-orange text-xs font-semibold px-2.5 py-1 rounded-full">
                {post.cat}
              </span>
              <span className="text-white/40 text-xs">{post.date}</span>
              <span className="text-white/40 text-xs">· {post.readTime} de lecture</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              {post.titre}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="bg-bg-white border border-border rounded-2xl p-6 md:p-10">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-xs">OBC</span>
                </div>
                <div>
                  <p className="text-navy font-semibold text-sm">Benoît Colin</p>
                  <p className="text-text-muted text-xs">OBC Maçonnerie — Mouchin (59)</p>
                </div>
              </div>

              <div className="space-y-5 text-text leading-relaxed">
                {contenu.map((para, i) => (
                  <p key={i} className="text-base text-text-light">
                    {para.split(/(\*\*[^*]+\*\*)/).map((part, j) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return (
                          <strong key={j} className="text-navy font-semibold">
                            {part.slice(2, -2)}
                          </strong>
                        );
                      }
                      return part;
                    })}
                  </p>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <div className="bg-stone-bg rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex-1">
                    <p className="text-navy font-bold mb-1">Vous avez un projet ?</p>
                    <p className="text-text-light text-sm">
                      Benoît se déplace gratuitement pour évaluer votre chantier et vous donner un devis précis.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="shrink-0 bg-orange hover:bg-orange-hover text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Devis gratuit
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
