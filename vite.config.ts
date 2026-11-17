import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import {
  renderStaticShell,
  type StaticPageKind,
} from "./scripts/static-shell";

interface EnglishPage {
  dir: string;
  url: string;
  esUrl: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

const ENGLISH_PAGES: EnglishPage[] = [
  {
    dir: "en",
    url: "https://mehmiro.com/en",
    esUrl: "https://mehmiro.com/",
    title: "Mehmiro | Classroom observation with teacher review",
    description:
      "Mehmiro helps teachers and educational institutions turn classroom observation into reviewed evidence, with WhatsApp, AI and an institutional view of progress.",
    ogTitle: "Observe better to support students on time.",
    ogDescription:
      "AI-assisted classroom observation, teacher review and an institutional view of progress.",
  },
  {
    dir: "en/para-docentes",
    url: "https://mehmiro.com/en/para-docentes",
    esUrl: "https://mehmiro.com/para-docentes",
    title: "Mehmiro for teachers | From AI chats to a coordinated year",
    description:
      "Mehmiro supports the teaching cycle: plan the year, prepare each class, record how it went and coordinate the next move.",
    ogTitle: "From AI chats to a coordinated year.",
    ogDescription:
      "Annual planning, class preparation, post-class records and next moves.",
  },
  {
    dir: "en/para-escuelas",
    url: "https://mehmiro.com/en/para-escuelas",
    esUrl: "https://mehmiro.com/para-escuelas",
    title: "Mehmiro for educational institutions | Institutional view of progress",
    description:
      "Student profile with accepted evidence, coverage and cross-subject context. Teacher adoption, roles, permissions and traceability.",
    ogTitle: "From scattered signals to a shared view.",
    ogDescription:
      "A pilot with clear goals connecting observation, evidence and institutional decisions.",
  },
  {
    dir: "en/para-familias",
    url: "https://mehmiro.com/en/para-familias",
    esUrl: "https://mehmiro.com/para-familias",
    title: "Mehmiro for families | Support with context",
    description:
      "Your institution keeps you updated; Mehmiro gives you clues to support and spark a desire to learn.",
    ogTitle: "More context to support.",
    ogDescription:
      "News and clues to support.",
  },
  {
    dir: "en/investigacion",
    url: "https://mehmiro.com/en/investigacion",
    esUrl: "https://mehmiro.com/investigacion",
    title: "Research and partnerships | Mehmiro",
    description:
      "Assisted observation with teacher review, measurement pilots and access to anonymized data for universities, centers and teacher networks.",
    ogTitle: "An explicit framework to learn with evidence.",
    ogDescription:
      "Pilot co-design, shared metrics and ethics by design.",
  },
  {
    dir: "en/evidencia",
    url: "https://mehmiro.com/en/evidencia",
    esUrl: "https://mehmiro.com/evidencia",
    title: "Evidence and method | Mehmiro",
    description:
      "What Mehmiro can claim today, what it measures in a pilot and what it cannot yet support about learning impact.",
    ogTitle: "What we know, measure and do not claim.",
    ogDescription:
      "An honest framework to evaluate AI-assisted observation with teacher review.",
  },
  {
    dir: "en/learn",
    url: "https://mehmiro.com/en/learn",
    esUrl: "https://mehmiro.com/learn",
    title: "Learn to use Mehmiro | Tutorials",
    description:
      "Step-by-step guides to set up your class, record observations and review evidence in Mehmiro.",
    ogTitle: "Learn to use Mehmiro.",
    ogDescription: "Tutorials for teachers and teams.",
  },
  {
    dir: "en/features",
    url: "https://mehmiro.com/en/features",
    esUrl: "https://mehmiro.com/features",
    title: "Features | Mehmiro",
    description:
      "Classroom observation, teacher review, student profile and data governance in one platform.",
    ogTitle: "Mehmiro features.",
    ogDescription: "Observation, evidence and teacher review.",
  },
  {
    dir: "en/for-educators",
    url: "https://mehmiro.com/en/for-educators",
    esUrl: "https://mehmiro.com/for-educators",
    title: "For educators | Mehmiro",
    description:
      "Guides, tutorials and resources for teachers using Mehmiro in their daily practice.",
    ogTitle: "Resources for educators.",
    ogDescription: "Guides and tutorials for teachers.",
  },
  {
    dir: "en/blog",
    url: "https://mehmiro.com/en/blog",
    esUrl: "https://mehmiro.com/blog",
    title: "Blog | Mehmiro",
    description: "Articles and reflections on observation, evidence and teaching practice.",
    ogTitle: "Mehmiro blog.",
    ogDescription: "Observation, evidence and teaching practice.",
  },
  {
    dir: "en/community",
    url: "https://mehmiro.com/en/community",
    esUrl: "https://mehmiro.com/community",
    title: "Community | Mehmiro",
    description: "Connect with teachers and schools transforming their pedagogical observation.",
    ogTitle: "Mehmiro community.",
    ogDescription: "Teachers and schools learning together.",
  },
  {
    dir: "en/support",
    url: "https://mehmiro.com/en/support",
    esUrl: "https://mehmiro.com/support",
    title: "Support | Mehmiro",
    description: "Technical help, guides and answers for using Mehmiro.",
    ogTitle: "Mehmiro support.",
    ogDescription: "Help and guides.",
  },
  {
    dir: "en/about",
    url: "https://mehmiro.com/en/about",
    esUrl: "https://mehmiro.com/about",
    title: "About | Mehmiro",
    description:
      "Mehmiro's mission: support teacher observation with technology that organizes, makes visible and does not replace professional judgment.",
    ogTitle: "About Mehmiro.",
    ogDescription: "Technology that supports, not replaces.",
  },
  {
    dir: "en/company",
    url: "https://mehmiro.com/en/company",
    esUrl: "https://mehmiro.com/company",
    title: "Company, team and product | Mehmiro",
    description:
      "Who is behind Mehmiro, what the live app looks like and where we are.",
    ogTitle: "Company, team and product.",
    ogDescription:
      "Founder, live product, LAIA, IRCAI and contact information.",
  },
  {
    dir: "en/privacy",
    url: "https://mehmiro.com/en/privacy",
    esUrl: "https://mehmiro.com/privacy",
    title: "Privacy | Mehmiro",
    description: "How we handle student and institution data.",
    ogTitle: "Privacy at Mehmiro.",
    ogDescription: "Data, consent and rights.",
  },
  {
    dir: "en/terms",
    url: "https://mehmiro.com/en/terms",
    esUrl: "https://mehmiro.com/terms",
    title: "Terms | Mehmiro",
    description: "Terms of use for the Mehmiro platform.",
    ogTitle: "Mehmiro terms.",
    ogDescription: "Terms of use.",
  },
];

const readCourses = (localeFile: string) => {
  const locale = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, localeFile), "utf8"),
  ) as {
    pages: {
      learn: {
        courses: Array<{ id: string; title: string; description: string }>;
      };
    };
  };
  return locale.pages.learn.courses;
};

const SPANISH_COURSE_PAGES: EnglishPage[] = readCourses(
  "src/i18n/locales/es-AR.json",
).map((course) => ({
  dir: `learn/${course.id}`,
  url: `https://mehmiro.com/learn/${course.id}`,
  esUrl: `https://mehmiro.com/learn/${course.id}`,
  title: `${course.title} | Mehmiro`,
  description: course.description,
  ogTitle: course.title,
  ogDescription: course.description,
}));

const ENGLISH_COURSE_PAGES: EnglishPage[] = readCourses(
  "src/i18n/locales/en.json",
).map((course) => ({
  dir: `en/learn/${course.id}`,
  url: `https://mehmiro.com/en/learn/${course.id}`,
  esUrl: `https://mehmiro.com/learn/${course.id}`,
  title: `${course.title} | Mehmiro`,
  description: course.description,
  ogTitle: course.title,
  ogDescription: course.description,
}));

const SPANISH_MARKETING_PAGES: EnglishPage[] = [
  {
    dir: "para-docentes",
    url: "https://mehmiro.com/para-docentes",
    esUrl: "https://mehmiro.com/para-docentes",
    title: "Mehmiro para docentes | De chats con IA a un año coordinado",
    description:
      "Mehmiro acompaña el ciclo docente: planificar el año, preparar cada clase, registrar cómo salió y coordinar el próximo movimiento.",
    ogTitle: "De chats con IA a un año coordinado.",
    ogDescription:
      "Planificación anual, preparación de clases, registro post-clase y próximos movimientos.",
  },
  {
    dir: "para-escuelas",
    url: "https://mehmiro.com/para-escuelas",
    esUrl: "https://mehmiro.com/para-escuelas",
    title: "Mehmiro para instituciones educativas | Visión institucional del progreso",
    description:
      "Perfil estudiantil con evidencia aceptada, cobertura y contexto entre materias. Adopción docente, roles, permisos y trazabilidad.",
    ogTitle: "De señales sueltas a una visión de conjunto.",
    ogDescription:
      "Un piloto con objetivos claros para conectar observación, evidencia y decisión institucional.",
  },
  {
    dir: "para-familias",
    url: "https://mehmiro.com/para-familias",
    esUrl: "https://mehmiro.com/para-familias",
    title: "Mehmiro para familias | Acompañar con contexto",
    description:
      "Tu institución te mantiene al tanto de las novedades; Mehmiro te da pistas para acompañar y despertar las ganas de aprender.",
    ogTitle: "Más contexto para acompañar.",
    ogDescription:
      "Novedades y pistas para acompañar.",
  },
  {
    dir: "investigacion",
    url: "https://mehmiro.com/investigacion",
    esUrl: "https://mehmiro.com/investigacion",
    title: "Investigación y alianzas | Mehmiro",
    description:
      "Observación asistida con revisión docente, pilotos de medición y acceso a datos anonimizados para universidades, centros y redes docentes.",
    ogTitle: "Un marco explícito para aprender con evidencia.",
    ogDescription:
      "Co-diseño de pilotos, métricas compartidas y ética desde el diseño.",
  },
  {
    dir: "evidencia",
    url: "https://mehmiro.com/evidencia",
    esUrl: "https://mehmiro.com/evidencia",
    title: "Evidencia y método | Mehmiro",
    description:
      "Lo que Mehmiro puede afirmar hoy, lo que mide en un piloto y lo que todavía no puede sostener sobre impacto de aprendizaje.",
    ogTitle: "Lo que sabemos, medimos y no afirmamos.",
    ogDescription:
      "Un marco honesto para evaluar observación asistida con revisión docente.",
  },
  {
    dir: "learn",
    url: "https://mehmiro.com/learn",
    esUrl: "https://mehmiro.com/learn",
    title: "Aprendé a usar Mehmiro | Tutoriales",
    description:
      "Guías paso a paso para configurar tu clase, registrar observaciones y revisar evidencia en Mehmiro.",
    ogTitle: "Aprendé a usar Mehmiro.",
    ogDescription: "Tutoriales para docentes y equipos.",
  },
  {
    dir: "features",
    url: "https://mehmiro.com/features",
    esUrl: "https://mehmiro.com/features",
    title: "Características | Mehmiro",
    description:
      "Observación de clase, revisión docente, perfil estudiantil y gobernanza de datos en una sola plataforma.",
    ogTitle: "Características de Mehmiro.",
    ogDescription: "Observación, evidencia y revisión docente.",
  },
  {
    dir: "for-educators",
    url: "https://mehmiro.com/for-educators",
    esUrl: "https://mehmiro.com/for-educators",
    title: "Recursos para educadores | Mehmiro",
    description:
      "Guías, tutoriales y recursos para docentes que usan Mehmiro en su práctica cotidiana.",
    ogTitle: "Recursos para educadores.",
    ogDescription: "Guías y tutoriales para docentes.",
  },
  {
    dir: "about",
    url: "https://mehmiro.com/about",
    esUrl: "https://mehmiro.com/about",
    title: "Nosotros | Mehmiro",
    description:
      "La misión de Mehmiro: acompañar la observación docente con tecnología que ordena, hace visible y no reemplaza el criterio profesional.",
    ogTitle: "Sobre Mehmiro.",
    ogDescription: "Tecnología que acompaña, no reemplaza.",
  },
  {
    dir: "company",
    url: "https://mehmiro.com/company",
    esUrl: "https://mehmiro.com/company",
    title: "Empresa, equipo y producto | Mehmiro",
    description:
      "Quién está detrás de Mehmiro, cómo se ve la app en producción y dónde estamos.",
    ogTitle: "Empresa, equipo y producto.",
    ogDescription:
      "Fundador, producto en producción, LAIA, IRCAI y datos de contacto.",
  },
  {
    dir: "blog",
    url: "https://mehmiro.com/blog",
    esUrl: "https://mehmiro.com/blog",
    title: "Blog | Mehmiro",
    description: "Artículos y reflexiones sobre observación, evidencia y práctica docente.",
    ogTitle: "Blog de Mehmiro.",
    ogDescription: "Observación, evidencia y práctica docente.",
  },
  {
    dir: "community",
    url: "https://mehmiro.com/community",
    esUrl: "https://mehmiro.com/community",
    title: "Comunidad | Mehmiro",
    description: "Conectá con docentes y escuelas que están transformando su observación pedagógica.",
    ogTitle: "Comunidad Mehmiro.",
    ogDescription: "Docentes y escuelas que aprenden juntos.",
  },
  {
    dir: "support",
    url: "https://mehmiro.com/support",
    esUrl: "https://mehmiro.com/support",
    title: "Soporte | Mehmiro",
    description: "Ayuda técnica, guías y respuestas para usar Mehmiro.",
    ogTitle: "Soporte Mehmiro.",
    ogDescription: "Ayuda y guías.",
  },
  {
    dir: "privacy",
    url: "https://mehmiro.com/privacy",
    esUrl: "https://mehmiro.com/privacy",
    title: "Privacidad | Mehmiro",
    description: "Cómo tratamos los datos de estudiantes e instituciones.",
    ogTitle: "Privacidad en Mehmiro.",
    ogDescription: "Datos, consentimiento y derechos.",
  },
  {
    dir: "terms",
    url: "https://mehmiro.com/terms",
    esUrl: "https://mehmiro.com/terms",
    title: "Términos | Mehmiro",
    description: "Términos de uso de la plataforma Mehmiro.",
    ogTitle: "Términos de Mehmiro.",
    ogDescription: "Condiciones de uso.",
  },
];

const replaceMeta = (
  html: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*/>`,
    "g",
  );
  return html.replace(
    pattern,
    `<meta ${attribute}="${key}" content="${content}" />`,
  );
};

const writeStaticPage = (
  source: string,
  page: EnglishPage,
  english: boolean,
  outDir: string,
  kind: StaticPageKind = "generic",
) => {
  const spanishUrl = page.esUrl;
  const englishUrl = english
    ? page.url
    : `https://mehmiro.com/en${page.url.replace("https://mehmiro.com", "")}`;

  let html = source;
  if (english) {
    html = html.replace('<html lang="es-AR">', '<html lang="en">');
  }

  html = html
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${english ? englishUrl : spanishUrl}" />`,
    );

  html = replaceMeta(html, "name", "description", page.description);
  html = replaceMeta(html, "property", "og:title", page.ogTitle);
  html = replaceMeta(html, "property", "og:description", page.ogDescription);
  html = replaceMeta(html, "property", "og:locale", english ? "en_US" : "es_AR");
  html = replaceMeta(
    html,
    "property",
    "og:url",
    english ? englishUrl : spanishUrl,
  );
  html = replaceMeta(html, "name", "twitter:title", page.ogTitle);
  html = replaceMeta(html, "name", "twitter:description", page.ogDescription);
  html = html.replace(
    /\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>/g,
    "",
  );

  html = html.replace(
    "</head>",
    `    <link rel="alternate" hreflang="es-AR" href="${spanishUrl}" />\n    <link rel="alternate" hreflang="en" href="${englishUrl}" />\n    <link rel="alternate" hreflang="x-default" href="${spanishUrl}" />\n  </head>`,
  );

  const staticShell = renderStaticShell(page, english, kind);
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${staticShell}</div>`,
  );

  const targetDir = path.join(outDir, page.dir);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, "index.html"), html);
};

const generateStaticPages = (): Plugin => ({
  name: "generate-static-pages",
  apply: "build",
  closeBundle() {
    const outDir = path.resolve(__dirname, "dist");
    const sourcePath = path.join(outDir, "index.html");
    if (!fs.existsSync(sourcePath)) return;

    const emptySource = fs.readFileSync(sourcePath, "utf8");

    // El HTML de la home también necesita contenido real: sin JS, el sitio
    // era un <div id="root"> vacío para cualquier crawler.
    const homePage = {
      dir: "",
      url: "https://mehmiro.com/",
      esUrl: "https://mehmiro.com/",
      title: "Mehmiro | Observación y coordinación pedagógica con IA",
      description:
        "Mehmiro ayuda a docentes e instituciones educativas a convertir la observación de clase en evidencia revisada, con WhatsApp, IA y visión institucional del progreso.",
    };
    const homeHtml = emptySource.replace(
      '<div id="root"></div>',
      `<div id="root">${renderStaticShell(homePage, false, "home")}</div>`,
    );
    fs.writeFileSync(sourcePath, homeHtml);

    for (const page of ENGLISH_PAGES) {
      const kind: StaticPageKind =
        page.dir === "en"
          ? "home"
          : page.dir === "en/about"
            ? "about"
            : page.dir === "en/company"
              ? "company"
              : "generic";
      writeStaticPage(emptySource, page, true, outDir, kind);
    }
    for (const page of ENGLISH_COURSE_PAGES) {
      writeStaticPage(emptySource, page, true, outDir, "generic");
    }
    for (const page of SPANISH_MARKETING_PAGES) {
      writeStaticPage(
        emptySource,
        page,
        false,
        outDir,
        page.dir === "about"
          ? "about"
          : page.dir === "company"
            ? "company"
            : "generic",
      );
    }
    for (const page of SPANISH_COURSE_PAGES) {
      writeStaticPage(emptySource, page, false, outDir, "generic");
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/", // Custom domain (mehmiro.com) - root path
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    generateStaticPages(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
