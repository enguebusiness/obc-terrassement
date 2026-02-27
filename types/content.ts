// types/content.ts
// Types partagés entre lib/content.ts et les composants.
// Ces types correspondent exactement aux schémas Payload CMS futurs
// définis dans /payload/collections/*.ts

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  keywords: string[];
};

export type Realisation = {
  title: string;
  ville: string;
  service: string;
  categorie: string;
  description: string;
  color: string;
  image: string;
};

export type Testimonial = {
  name: string;
  ville: string;
  service: string;
  text: string;
  rating: number;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Partner = {
  label: string;
  icon: string;
  desc: string;
};

export type BlogPost = {
  slug: string;
  titre: string;
  extrait: string;
  cat: string;
  date: string;
  readTime: string;
};

export type Value = {
  title: string;
  description: string;
  icon: string;
};
