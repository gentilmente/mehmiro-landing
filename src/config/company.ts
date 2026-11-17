/**
 * Datos públicos y verificables de Mehmiro.
 *
 * Se usan en la web, en el footer y en el HTML estático que se genera en build.
 * No agregar aquí cargos, métricas ni entidades legales que no estén respaldadas
 * por una fuente pública.
 */
export const COMPANY = {
  name: "Mehmiro",
  location: "Buenos Aires, Argentina",
  contactEmail: "info@mehmiro.com",
  supportEmail: "support@mehmiro.com",
  founder: {
    name: "Ezequiel Gentile Montes",
    initials: "EG",
    role: "Fundador y desarrollador principal de producto",
    linkedin: "https://ar.linkedin.com/in/gentilmente",
    github: "https://github.com/gentilmente",
  },
  partner: {
    name: "LAIA",
    fullName: "Laboratorio Abierto de Inteligencia Artificial",
    url: "https://www.laia.ar/",
    linkedin: "https://www.linkedin.com/company/laia-ar",
  },
  app: {
    login: "https://app.mehmiro.com/login",
    onboarding: "https://app.mehmiro.com/onboarding",
  },
  recognition: {
    shortLabel: "IRCAI Global Top 100 2025",
    label: "IRCAI Global Top 100 Promising Project 2025",
    url: "https://ircai.org/top100/entry/mehmiro/",
  },
} as const;
