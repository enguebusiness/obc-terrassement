// lib/site-config.ts
// Source unique de vérité pour toutes les données du site OBC Maçonnerie.
// Toute modification de contenu (textes, services, FAQ...) se fait ICI.
// Les composants consomment ces données via lib/content.ts — jamais en dur.

export const siteConfig = {
  name: "OBC Maçonnerie",
  dirigeant: "Benoît Colin",
  phone: "06 74 45 30 89",
  phoneRaw: "0674453089",
  email: "contact@obc-maconnerie.fr",
  address: "221 Route de Saint-Amand, 59310 Mouchin",
  addressLine1: "221 Route de Saint-Amand",
  addressLocality: "Mouchin",
  addressPostalCode: "59310",
  addressRegion: "Hauts-de-France",
  addressCountry: "FR",
  siren: "531827871",
  url: "https://obc-maconnerie.fr",

  zones: [
    "Orchies",
    "Mouchin",
    "Flines-lès-Raches",
    "Château-l'Abbaye",
    "Mérignies",
    "Douai",
    "Valenciennes",
    "Saint-Amand-les-Eaux",
  ],
  zoneDescription: "20 à 30 km autour de Mouchin (Nord 59)",

  nav: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],

  footerServicesNav: [
    { label: "Construction de maison", href: "/construction-maison" },
    { label: "Rénovation", href: "/renovation" },
    { label: "Assainissement", href: "/assainissement" },
    { label: "Création d'accès", href: "/creation-acces" },
    { label: "Démolition", href: "/demolition" },
  ],

  footerMainNav: [
    { label: "Accueil", href: "/" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Partenaires", href: "/partenaires" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],

  footerLegalNav: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Confidentialité", href: "/confidentialite" },
    { label: "CGV", href: "/cgv" },
  ],

  seo: {
    title: "OBC Maçonnerie | Constructeur & Maçon à Orchies (Nord 59)",
    description:
      "Benoît Colin, maçon expert à Mouchin. Construction de maison, rénovation, assainissement et gros œuvre dans un rayon de 30km autour d'Orchies. Devis gratuit.",
  },

  hero: {
    title: "Maçon & Constructeur dans le Nord",
    subtitle:
      "Construction de maison, rénovation, assainissement et gros œuvre — expertise autour d'Orchies",
    cta: "Demander un devis gratuit",
    ctaSecondary: "Voir nos réalisations",
    badge:
      "Disponible, à l'écoute, Benoît vous accompagne de la première pierre à la remise des clés",
    stats: [
      { val: "15+", label: "ans d'expérience" },
      { val: "200+", label: "chantiers réalisés" },
      { val: "30km", label: "de rayon d'action" },
    ],
  },

  services: [
    {
      slug: "construction-maison",
      title: "Construction de maison",
      shortDescription:
        "Fondations, ossature bois, gros œuvre — on bâtit votre projet de A à Z avec vous.",
      longDescription:
        "De la conception des fondations à la pose du toit, Benoît vous accompagne à chaque étape de votre construction. Maison individuelle, ossature bois, béton banché — chaque projet est unique.",
      icon: "🏠",
      keywords: [
        "construction maison Nord",
        "maçon construction maison Orchies",
        "fondation ossature bois Nord",
      ],
    },
    {
      slug: "renovation",
      title: "Rénovation",
      shortDescription:
        "Maison ou appartement, on s'adapte à votre projet et vos envies.",
      longDescription:
        "Rénovation partielle ou complète, intérieure et extérieure. Benoît adapte chaque projet à votre budget et vos envies. Restructuration, création d'ouvertures, extension.",
      icon: "🔨",
      keywords: [
        "rénovation maison Nord 59",
        "maçon rénovation Douai",
        "maçon rénovation Valenciennes",
      ],
    },
    {
      slug: "assainissement",
      title: "Assainissement",
      shortDescription:
        "Mise aux normes et création de systèmes d'assainissement fiables.",
      longDescription:
        "Installation et mise aux normes de vos systèmes d'assainissement individuel et collectif. Fosse toutes eaux, micro-station, épandage — dans les règles de l'art.",
      icon: "💧",
      keywords: [
        "assainissement maison Nord",
        "assainissement individuel Nord 59",
      ],
    },
    {
      slug: "creation-acces",
      title: "Création d'accès",
      shortDescription: "Voiries, entrées, chemins — on crée vos accès sur mesure.",
      longDescription:
        "Création de voiries, entrées de propriété et chemins d'accès. Béton, béton imprimé, pavés, gravier stabilisé — travail soigné et durable.",
      icon: "🚧",
      keywords: [
        "création accès maison Nord",
        "voirie entrée propriété Nord 59",
      ],
    },
    {
      slug: "demolition",
      title: "Démolition",
      shortDescription:
        "Démolition totale ou partielle, avec toutes les garanties de sécurité.",
      longDescription:
        "Démolition de bâtiments, murs et ouvrages en toute sécurité. Évacuation des gravats incluse. Préparation du terrain pour votre future construction.",
      icon: "🏗️",
      keywords: [
        "démolition maison Nord 59",
        "démolition bâtiment Nord",
      ],
    },
    {
      slug: "conseil",
      title: "Conseil & Accompagnement",
      shortDescription:
        "Benoît vous éclaire dans vos choix : matériaux, plans, adaptations — on réfléchit ensemble.",
      longDescription:
        "Un seul interlocuteur pour tout votre projet. Benoît analyse votre plan, vous conseille sur les matériaux et coordonne les artisans partenaires.",
      icon: "🤝",
      keywords: [
        "entrepreneur maçon Nord 59",
        "gros œuvre Nord",
      ],
    },
  ],

  values: [
    {
      title: "Proche de vous",
      description:
        "Disponible, à l'écoute. Benoît se déplace sur votre chantier pour comprendre votre projet et vous proposer les meilleures solutions.",
      icon: "📍",
    },
    {
      title: "Conseil expert",
      description:
        "Il vous guide dans vos choix de matériaux, adapte les plans d'architecte, suggère des améliorations auxquelles vous n'avez pas pensé.",
      icon: "💡",
    },
    {
      title: "Acteur de confiance",
      description:
        "Transparent à chaque étape, il vous rassure et vous explique chaque décision. Pas de surprise, pas de mauvaise nouvelle.",
      icon: "🛡️",
    },
    {
      title: "Passionné du métier",
      description:
        "On ne fait jamais deux fois la même maison. Benoît réfléchit avec vous pour que le résultat vous ressemble.",
      icon: "❤️",
    },
  ],

  partners: [
    { label: "Électricité", icon: "⚡", desc: "Installation électrique aux normes NF C 15-100, tableau de distribution, prises, éclairage." },
    { label: "Plomberie", icon: "🔧", desc: "Plomberie sanitaire, chauffage central, installation de salles de bains et cuisines." },
    { label: "Charpente", icon: "🪵", desc: "Charpente traditionnelle ou industrielle, structure bois pour combles aménageables ou non." },
    { label: "Couverture", icon: "🏚️", desc: "Pose de toiture, tuiles, ardoises, zinc — étanchéité et finitions soignées." },
    { label: "Isolation", icon: "🧱", desc: "Isolation thermique et phonique par l'intérieur ou l'extérieur, combles, planchers." },
    { label: "Menuiserie", icon: "🚪", desc: "Fenêtres, portes, vérandas, volets — menuiserie bois, PVC ou aluminium." },
    { label: "Carrelage", icon: "🔳", desc: "Pose de carrelage, parquet, faïence — pour sols et murs, intérieur et extérieur." },
    { label: "Peinture", icon: "🎨", desc: "Peinture intérieure et extérieure, enduits décoratifs, ravalement de façade." },
  ],
  partnersTitle: "Seul on va vite, ensemble on va plus loin.",
  partnersMessage:
    "Grâce à notre réseau de partenaires de confiance, nous coordonnons l'ensemble des corps de métier pour que votre maison prenne forme de A à Z.",

  faq: [
    {
      question: "Dans quelle zone intervenez-vous ?",
      answer:
        "Nous intervenons dans un rayon de 20 à 30 km autour de Mouchin (59310) : Orchies, Flines-lès-Raches, Château-l'Abbaye, Mérignies, Douai, Valenciennes, Saint-Amand-les-Eaux et les communes alentour.",
    },
    {
      question: "Faites-vous des devis gratuits ?",
      answer:
        "Oui, le devis est gratuit et sans engagement. Benoît se déplace sur votre chantier pour évaluer votre projet et vous remettre une estimation détaillée.",
    },
    {
      question: "Pouvez-vous adapter un plan d'architecte ?",
      answer:
        "Absolument. C'est même l'une de nos spécialités. Benoît analyse votre plan et vous suggère des adaptations pour optimiser l'espace, le rendu final et votre budget.",
    },
    {
      question: "Combien de temps dure une construction de maison ?",
      answer:
        "En moyenne, comptez 10 à 18 mois pour une construction neuve selon la complexité du projet et les délais de livraison des matériaux. Benoît vous donnera un calendrier précis lors du devis.",
    },
    {
      question: "Travaillez-vous avec d'autres artisans ?",
      answer:
        "Oui. Nous coordonnons un réseau de partenaires de confiance (électriciens, plombiers, charpentiers, couvreurs, menuisiers, carreleurs, peintres) pour vous livrer une maison complète avec un seul interlocuteur.",
    },
  ],

  testimonials: [
    {
      name: "Christophe & Marie L.",
      ville: "Orchies",
      service: "construction-maison",
      text: "Benoît nous a accompagnés de A à Z dans la construction de notre maison. Il a su adapter le plan d'architecte à nos envies tout en respectant notre budget. Disponible, professionnel, et vraiment à l'écoute. On recommande les yeux fermés.",
      rating: 5,
    },
    {
      name: "Sophie D.",
      ville: "Douai",
      service: "renovation",
      text: "On lui a confié la rénovation complète de notre maison de 1970. Benoît a pris le temps de tout nous expliquer, a proposé des solutions auxquelles on n'avait pas pensé, et le résultat est magnifique. Un vrai professionnel.",
      rating: 5,
    },
    {
      name: "Famille Moreau",
      ville: "Saint-Amand-les-Eaux",
      service: "assainissement",
      text: "Mise aux normes de notre système d'assainissement réalisée dans les délais et en toute transparence. Benoît nous a expliqué chaque étape. Très sérieux et propre dans son travail.",
      rating: 5,
    },
  ],

  realisations: [
    {
      title: "Maison individuelle à Orchies",
      ville: "Orchies (59)",
      service: "construction-maison",
      categorie: "Construction neuve",
      description:
        "Construction d'une maison de 130 m² — fondations, gros œuvre, dalle béton et ossature.",
      color: "bg-navy",
      image: "/images/realisations/chantier-1.jpg",
    },
    {
      title: "Rénovation complète à Douai",
      ville: "Douai (59)",
      service: "renovation",
      categorie: "Rénovation",
      description:
        "Restructuration intérieure complète d'une maison de ville : abattage de cloisons, création d'un escalier neuf, doublages.",
      color: "bg-stone",
      image: "/images/realisations/chantier-2.jpg",
    },
    {
      title: "Mise aux normes à Saint-Amand",
      ville: "Saint-Amand-les-Eaux (59)",
      service: "assainissement",
      categorie: "Assainissement",
      description:
        "Remplacement d'une fosse septique vétuste par une micro-station d'épuration conforme aux normes.",
      color: "bg-navy-light",
      image: "/images/realisations/chantier-3.jpg",
    },
    {
      title: "Entrée en béton imprimé à Mérignies",
      ville: "Mérignies (59)",
      service: "creation-acces",
      categorie: "Création d'accès",
      description:
        "Création d'une entrée de propriété en béton imprimé effet pavés, avec caniveau de drainage.",
      color: "bg-orange",
      image: "/images/realisations/chantier-4.jpg",
    },
    {
      title: "Extension ossature bois à Flines",
      ville: "Flines-lès-Raches (59)",
      service: "construction-maison",
      categorie: "Construction neuve",
      description:
        "Agrandissement d'une maison existante par extension ossature bois, fondations et dalle.",
      color: "bg-navy",
      image: "/images/realisations/chantier-5.jpg",
    },
    {
      title: "Démolition & reconstruction à Valenciennes",
      ville: "Valenciennes (59)",
      service: "demolition",
      categorie: "Démolition",
      description:
        "Démolition d'un bâtiment annexe et curage d'une grange pour préparer une rénovation complète.",
      color: "bg-stone",
      image: "/images/realisations/chantier-6.jpg",
    },
  ],

  blogPosts: [
    {
      slug: "combien-coute-construction-maison-nord",
      titre: "Combien coûte la construction d'une maison dans le Nord en 2025 ?",
      extrait:
        "Budget, matériaux, terrain, main-d'œuvre — tout ce qu'il faut savoir pour estimer le coût de votre construction neuve dans le Nord.",
      cat: "Construction",
      date: "15 février 2025",
      readTime: "6 min",
    },
    {
      slug: "etapes-renovation-maison-ancienne",
      titre: "Les étapes clés d'une rénovation de maison ancienne",
      extrait:
        "Vous avez acheté une maison ancienne dans le Nord et vous voulez la rénover ? Voici les étapes indispensables pour réussir votre projet.",
      cat: "Rénovation",
      date: "8 janvier 2025",
      readTime: "5 min",
    },
    {
      slug: "assainissement-non-collectif-obligations",
      titre: "Assainissement non collectif : vos obligations légales",
      extrait:
        "Contrôle SPANC, mise aux normes, vente immobilière — tout ce que vous devez savoir sur l'assainissement non collectif.",
      cat: "Assainissement",
      date: "20 décembre 2024",
      readTime: "4 min",
    },
    {
      slug: "ossature-bois-avantages",
      titre: "Ossature bois : pourquoi choisir ce mode constructif ?",
      extrait:
        "Légèreté, performance thermique, rapidité de construction — l'ossature bois a de nombreux avantages. OBC Maçonnerie vous explique.",
      cat: "Construction",
      date: "5 novembre 2024",
      readTime: "5 min",
    },
    {
      slug: "travaux-renovation-sans-permis-construction",
      titre: "Quels travaux de rénovation ne nécessitent pas de permis ?",
      extrait:
        "Permis de construire, déclaration préalable, simple déclaration — on vous explique les règles selon la nature de vos travaux.",
      cat: "Rénovation",
      date: "18 octobre 2024",
      readTime: "4 min",
    },
    {
      slug: "fondations-maison-quels-types",
      titre: "Les différents types de fondations pour une maison",
      extrait:
        "Semelles filantes, radier, pieux — quelles fondations choisir selon votre terrain et votre projet de construction ?",
      cat: "Construction",
      date: "2 septembre 2024",
      readTime: "5 min",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
