import { useEffect } from "react";
import { isEnglishPath, stripEnglishPrefix } from "@/lib/locale";
import esAR from "@/i18n/locales/es-AR.json";
import en from "@/i18n/locales/en.json";

interface Metadata {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

const HOME: Record<"es" | "en", Metadata> = {
  es: {
    title: "Mehmiro | Observación y coordinación pedagógica con IA",
    description:
      "Mehmiro ayuda a docentes y equipos directivos a convertir la observación de clase en evidencia revisada, con WhatsApp, IA y visión institucional del progreso.",
    ogTitle: "Observar mejor para acompañar a tiempo.",
    ogDescription:
      "Observación de clase con IA, revisión docente y una visión institucional del progreso.",
  },
  en: {
    title: "Mehmiro | Classroom observation with teacher review",
    description:
      "Mehmiro helps teachers and school leaders turn classroom observation into reviewed evidence, with WhatsApp, AI and an institutional view of progress.",
    ogTitle: "Observe better to support students on time.",
    ogDescription:
      "AI-assisted classroom observation, teacher review and an institutional view of progress.",
  },
};

const courseMeta = (locale: typeof esAR | typeof en): Record<string, Metadata> =>
  Object.fromEntries(
    locale.pages.learn.courses.map((course) => [
      course.id,
      {
        title: `${course.title} | Mehmiro`,
        description: course.description,
        ogTitle: course.title,
        ogDescription: course.description,
      },
    ]),
  );

const COURSE_META: Record<"es" | "en", Record<string, Metadata>> = {
  es: courseMeta(esAR),
  en: courseMeta(en),
};

const ROUTE_META: Record<string, Record<"es" | "en", Metadata>> = {
  "/": HOME,
  "/para-docentes": {
    es: {
      title: "Mehmiro para docentes | Observación con evidencia",
      description:
        "Respondé por WhatsApp con texto o audio después de clase. Mehmiro analiza la clase y te ayuda a revisar estudiantes y evidencias en la app.",
      ogTitle: "Tu observación, con evidencia y sin más carga.",
      ogDescription:
        "WhatsApp para observar, revisión docente en la app y un historial por estudiante.",
    },
    en: {
      title: "Mehmiro for teachers | Observation with evidence",
      description:
        "Reply on WhatsApp with text or audio after class. Mehmiro analyzes the lesson and helps you review students and evidence in the app.",
      ogTitle: "Your observation, with evidence and less workload.",
      ogDescription:
        "WhatsApp for observation, teacher review in the app and student history.",
    },
  },
  "/para-escuelas": {
    es: {
      title: "Mehmiro para escuelas | Visión institucional del progreso",
      description:
        "Perfil estudiantil con evidencia aceptada, cobertura y contexto entre materias. Adopción docente, roles, permisos y trazabilidad.",
      ogTitle: "De señales sueltas a una visión de conjunto.",
      ogDescription:
        "Un piloto con objetivos claros para conectar observación, evidencia y decisión institucional.",
    },
    en: {
      title: "Mehmiro for schools | Institutional view of progress",
      description:
        "Student profile with accepted evidence, coverage and cross-subject context. Teacher adoption, roles, permissions and traceability.",
      ogTitle: "From scattered signals to a shared view.",
      ogDescription:
        "A pilot with clear goals connecting observation, evidence and institutional decisions.",
    },
  },
  "/para-familias": {
    es: {
      title: "Mehmiro para familias | Transparencia y derechos",
      description:
        "Qué registra Mehmiro, quién accede y qué derechos tienen las familias. Transparencia, consentimiento y acceso por roles.",
      ogTitle: "Más contexto para acompañar, menos etiquetas.",
      ogDescription:
        "Qué se registra, quién accede y cómo se revisa la evidencia. Sin portal de familias todavía.",
    },
    en: {
      title: "Mehmiro for families | Transparency and rights",
      description:
        "What Mehmiro records, who has access and what rights families have. Transparency, consent and role-based access.",
      ogTitle: "More context to support, fewer labels.",
      ogDescription:
        "What is recorded, who has access and how evidence is reviewed. No family portal yet.",
    },
  },
  "/investigacion": {
    es: {
      title: "Investigación y alianzas | Mehmiro",
      description:
        "Marco pedagógico, teoría de cambio, ética y pilotos para evaluar la observación asistida con revisión docente.",
      ogTitle: "Un marco explícito para aprender con evidencia.",
      ogDescription:
        "Colaboración en pilotos, medición y gobernanza de datos. Sin claims que no podamos sostener.",
    },
    en: {
      title: "Research and partnerships | Mehmiro",
      description:
        "Pedagogical framework, theory of change, ethics and pilots to evaluate AI-assisted observation with teacher review.",
      ogTitle: "An explicit framework to learn with evidence.",
      ogDescription:
        "Collaboration on pilots, measurement and data governance. No claims we cannot support.",
    },
  },
  "/evidencia": {
    es: {
      title: "Evidencia y método | Mehmiro",
      description:
        "Lo que Mehmiro puede afirmar hoy, lo que mide en un piloto y lo que todavía no puede sostener sobre impacto de aprendizaje.",
      ogTitle: "Lo que sabemos, medimos y no afirmamos.",
      ogDescription:
        "Un marco honesto para evaluar observación asistida con revisión docente.",
    },
    en: {
      title: "Evidence and method | Mehmiro",
      description:
        "What Mehmiro can claim today, what it measures in a pilot and what it cannot yet support about learning impact.",
      ogTitle: "What we know, measure and do not claim.",
      ogDescription:
        "An honest framework to evaluate AI-assisted observation with teacher review.",
    },
  },
  "/learn": {
    es: {
      title: "Academia Mehmiro | Tutoriales",
      description:
        "Guías paso a paso para configurar tu clase, registrar observaciones y revisar evidencia en Mehmiro.",
      ogTitle: "Academia Mehmiro.",
      ogDescription: "Tutoriales para docentes y equipos.",
    },
    en: {
      title: "Mehmiro Academy | Tutorials",
      description:
        "Step-by-step guides to set up your class, record observations and review evidence in Mehmiro.",
      ogTitle: "Mehmiro Academy.",
      ogDescription: "Tutorials for teachers and teams.",
    },
  },
  "/features": {
    es: {
      title: "Características | Mehmiro",
      description:
        "Observación de clase, revisión docente, perfil estudiantil y gobernanza de datos en una sola plataforma.",
      ogTitle: "Características de Mehmiro.",
      ogDescription: "Observación, evidencia y revisión docente.",
    },
    en: {
      title: "Features | Mehmiro",
      description:
        "Classroom observation, teacher review, student profile and data governance in one platform.",
      ogTitle: "Mehmiro features.",
      ogDescription: "Observation, evidence and teacher review.",
    },
  },
  "/for-educators": {
    es: {
      title: "Recursos para educadores | Mehmiro",
      description:
        "Guías, tutoriales y recursos para docentes que usan Mehmiro en su práctica cotidiana.",
      ogTitle: "Recursos para educadores.",
      ogDescription: "Guías y tutoriales para docentes.",
    },
    en: {
      title: "For educators | Mehmiro",
      description:
        "Guides, tutorials and resources for teachers using Mehmiro in their daily practice.",
      ogTitle: "Resources for educators.",
      ogDescription: "Guides and tutorials for teachers.",
    },
  },
  "/about": {
    es: {
      title: "Nosotros | Mehmiro",
      description:
        "La misión de Mehmiro: acompañar la observación docente con tecnología que ordena, hace visible y no reemplaza el criterio profesional.",
      ogTitle: "Sobre Mehmiro.",
      ogDescription: "Tecnología que acompaña, no reemplaza.",
    },
    en: {
      title: "About | Mehmiro",
      description:
        "Mehmiro's mission: support teacher observation with technology that organizes, makes visible and does not replace professional judgment.",
      ogTitle: "About Mehmiro.",
      ogDescription: "Technology that supports, not replaces.",
    },
  },
  "/blog": {
    es: {
      title: "Blog | Mehmiro",
      description: "Artículos y reflexiones sobre observación, evidencia y práctica docente.",
      ogTitle: "Blog de Mehmiro.",
      ogDescription: "Observación, evidencia y práctica docente.",
    },
    en: {
      title: "Blog | Mehmiro",
      description: "Articles and reflections on observation, evidence and teaching practice.",
      ogTitle: "Mehmiro blog.",
      ogDescription: "Observation, evidence and teaching practice.",
    },
  },
  "/community": {
    es: {
      title: "Comunidad | Mehmiro",
      description: "Conectá con docentes y escuelas que están transformando su observación pedagógica.",
      ogTitle: "Comunidad Mehmiro.",
      ogDescription: "Docentes y escuelas que aprenden juntos.",
    },
    en: {
      title: "Community | Mehmiro",
      description: "Connect with teachers and schools transforming their pedagogical observation.",
      ogTitle: "Mehmiro community.",
      ogDescription: "Teachers and schools learning together.",
    },
  },
  "/support": {
    es: {
      title: "Soporte | Mehmiro",
      description: "Ayuda técnica, guías y respuestas para usar Mehmiro.",
      ogTitle: "Soporte Mehmiro.",
      ogDescription: "Ayuda y guías.",
    },
    en: {
      title: "Support | Mehmiro",
      description: "Technical help, guides and answers for using Mehmiro.",
      ogTitle: "Mehmiro support.",
      ogDescription: "Help and guides.",
    },
  },
  "/privacy": {
    es: {
      title: "Privacidad | Mehmiro",
      description: "Cómo tratamos los datos de estudiantes e instituciones.",
      ogTitle: "Privacidad en Mehmiro.",
      ogDescription: "Datos, consentimiento y derechos.",
    },
    en: {
      title: "Privacy | Mehmiro",
      description: "How we handle student and institution data.",
      ogTitle: "Privacy at Mehmiro.",
      ogDescription: "Data, consent and rights.",
    },
  },
  "/terms": {
    es: {
      title: "Términos | Mehmiro",
      description: "Términos de uso de la plataforma Mehmiro.",
      ogTitle: "Términos de Mehmiro.",
      ogDescription: "Condiciones de uso.",
    },
    en: {
      title: "Terms | Mehmiro",
      description: "Terms of use for the Mehmiro platform.",
      ogTitle: "Mehmiro terms.",
      ogDescription: "Terms of use.",
    },
  },
};

const setMeta = (attribute: "name" | "property", key: string, content: string) => {
  const element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (element) element.setAttribute("content", content);
};

/**
 * Keeps document metadata in sync with the active route and language.
 * Static HTML remains the source for crawlers; this fixes in-app navigation.
 */
export const useDocumentMetadata = (pathname: string) => {
  useEffect(() => {
    const english = isEnglishPath(pathname);
    const language = english ? "en" : "es";
    const normalizedPath = pathname.replace(/\/+$/, "") || "/";
    const basePath = stripEnglishPrefix(normalizedPath);
    const metaKey = basePath.startsWith("/learn/") ? "/learn" : basePath;
    const courseId = basePath.match(/^\/learn\/([^/]+)$/)?.[1];
    const course = courseId
      ? COURSE_META[language][decodeURIComponent(courseId)]
      : undefined;
    const meta = course ?? ROUTE_META[metaKey]?.[language] ?? HOME[language];
    const url = `https://mehmiro.com${normalizedPath === "/" ? "/" : normalizedPath}`;

    document.title = meta.title;
    document.documentElement.lang = english ? "en" : "es-AR";

    setMeta("name", "description", meta.description);
    setMeta("property", "og:title", meta.ogTitle);
    setMeta("property", "og:description", meta.ogDescription);
    setMeta("property", "og:locale", english ? "en_US" : "es_AR");
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", meta.ogTitle);
    setMeta("name", "twitter:description", meta.ogDescription);

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = url;
  }, [pathname]);
};
