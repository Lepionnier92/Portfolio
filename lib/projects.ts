export type Project = {
  slug: string
  title: string
  description: string
  outcome: string
  tags: string[]
  year: string
  gradient: string
}

export const projects: Project[] = [
  {
    slug: "medaille-or-national-maf",
    title: "Médaille d'Or National MAF",
    description: "Meilleur Aprentis de France (MAF)",
    outcome: "",
    tags: ["Fabrication", "Diagnostic", "Panne", "Montage/Demontage"],
    year: "2026",
    gradient: "from-accent-pink to-accent-tertiary",
  },
  {
    slug: "hackaton-isep",
    title: "Hackaton ISEP",
    description: " le projet mené en partenariat avec l’entreprise Tenexa, autour du thème « compétences augmentées & IA au service du matching professionnel »",
    outcome:
      "Compétition d'innovation et d'idéation en équipe mixte. Conception d'une solution technologique visant à utiliser l'IA pour optimiser le matching professionnel et la valorisation des compétences terrain. Projet développé en collaboration avec des étudiants ingénieurs de l'ISEP dans le cadre des Cordées de la Réussite.",
    tags: ["React Native + Expo SDK 54", "TypeScript", "NativeWind(Tailwind CSS)", "Expo Router"],
    year: "2025",
    gradient: "from-accent-secondary to-accent-pink",
  },
  {
    slug: "chef-oeuvre-mspc",
    title: "Chef d'œuvre MSPC",
    description: "Réhabilitation d'une vieille porte de bus pour quelle puisse servir à de futurs travaux pratiques.",
    outcome:
      "Projet majeur mené sur deux ans dans le cadre de mon chef-d'œuvre en Bac Pro MSPC. L'objectif principal a été de récupérer une porte de bus hors service et d'en réaliser la rétro-conception complète afin de la transformer en un banc d'essai pédagogique 100 % opérationnel et sécurisé. Ce système réhabilité sert désormais de support d'apprentissage concret pour les travaux pratiques des futures classes.",
    tags: ["Chef d'œuvre", "MSPC", "Automate", "Porte de bus"],
    year: "2025-2027",
    gradient: "from-accent to-accent-secondary",
  },
]
