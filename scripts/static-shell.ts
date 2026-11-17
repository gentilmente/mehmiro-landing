import { COMPANY } from "../src/config/company";

export interface StaticPage {
  dir: string;
  url: string;
  esUrl: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

export type StaticPageKind = "home" | "about" | "generic";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const localized = (english: boolean, es: string, en: string) =>
  english ? en : es;

const localizedPath = (english: boolean, path: string) => {
  if (!english) return path;
  if (path === "/") return "/en";
  return `/en${path}`;
};

const renderFounderBlock = (english: boolean) => `
  <section class="static-section">
    <h2>${localized(english, "Equipo fundador", "Founding team")}</h2>
    <div class="static-founder">
      <div class="static-initials" aria-hidden="true">${escapeHtml(COMPANY.founder.initials)}</div>
      <div>
        <h3>${escapeHtml(COMPANY.founder.name)}</h3>
        <p class="static-role">${localized(
          english,
          "Fundador y desarrollador principal de producto",
          "Founder and lead product developer",
        )}</p>
        <p>${localized(
          english,
          "Fundó Mehmiro y lidera su desarrollo de producto. Trabaja en la intersección entre inteligencia artificial y educación; hoy Mehmiro se desarrolla en colaboración con LAIA, el Laboratorio Abierto de Inteligencia Artificial.",
          "He founded Mehmiro and leads product development. He works at the intersection of artificial intelligence and education; today Mehmiro is developed in collaboration with LAIA, the Open Laboratory of Artificial Intelligence.",
        )}</p>
        <p class="static-links">
          <a href="${COMPANY.founder.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="${COMPANY.founder.github}" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </div>
    </div>
  </section>
`;

const renderCompanyFacts = (english: boolean) => `
  <section class="static-section">
    <h2>${localized(english, "Datos de la empresa", "Company facts")}</h2>
    <div class="static-facts">
      <p><strong>${localized(english, "Dónde estamos", "Where we are")}:</strong> ${localized(
        english,
        "Buenos Aires, Argentina",
        "Buenos Aires, Argentina",
      )}</p>
      <p><strong>${localized(english, "Estado del producto", "Product status")}:</strong> ${localized(
        english,
        "App en producción, con acceso institucional para datos de estudiantes.",
        "Live app, with institutional access for student data.",
      )}</p>
      <p><strong>${localized(english, "Colaboración", "Collaboration")}:</strong>
        <a href="${COMPANY.partner.url}" target="_blank" rel="noreferrer">${escapeHtml(
          COMPANY.partner.name,
        )} — ${escapeHtml(COMPANY.partner.fullName)}</a>
      </p>
      <p><strong>${localized(english, "Reconocimiento", "Recognition")}:</strong>
        <a href="${COMPANY.recognition.url}" target="_blank" rel="noreferrer">${escapeHtml(
          COMPANY.recognition.label,
        )}</a>
      </p>
      <p><strong>${localized(english, "Contacto", "Contact")}:</strong>
        <a href="mailto:${COMPANY.contactEmail}">${COMPANY.contactEmail}</a>
      </p>
    </div>
  </section>
`;

const renderProductBlock = (english: boolean) => `
  <section class="static-section">
    <h2>${localized(english, "Así se ve la app", "Inside the app")}</h2>
    <p>${localized(
      english,
      "Mehmiro está online. Estas capturas y el video son de la app en producción; los datos que aparecen son de demostración.",
      "Mehmiro is online. These screenshots and the video are from the live app; the data shown is for demonstration.",
    )}</p>
    <div class="static-shots">
      <figure>
        <img src="/product-onboarding.webp" alt="${localized(
          english,
          "Pantalla de bienvenida de Mehmiro",
          "Mehmiro welcome screen",
        )}" loading="lazy" decoding="async" />
        <figcaption>${localized(english, "Onboarding docente", "Teacher onboarding")}</figcaption>
      </figure>
      <figure>
        <img src="/product-student-profile.webp" alt="${localized(
          english,
          "Perfil estudiantil de Mehmiro",
          "Mehmiro student profile",
        )}" loading="lazy" decoding="async" />
        <figcaption>${localized(english, "Perfil estudiantil", "Student profile")}</figcaption>
      </figure>
    </div>
    <p class="static-links">
      <a href="${COMPANY.app.login}" target="_blank" rel="noreferrer">${localized(
        english,
        "Abrir la app",
        "Open the app",
      )}</a>
      <a href="/product-demo.mp4" target="_blank" rel="noreferrer">${localized(
        english,
        "Ver video de la app",
        "Watch the app video",
      )}</a>
    </p>
    <p class="static-note">${localized(
      english,
      "La app abre en una pantalla de acceso. Elegí «Explorar sin cuenta» para recorrerla sin registro; los datos de estudiantes requieren una cuenta institucional.",
      "The app opens on a sign-in screen. Choose “Explore without an account” to look around; student data requires an institutional account.",
    )}</p>
  </section>
`;

const renderHomeContent = (english: boolean) => `
  ${renderProductBlock(english)}
  <section class="static-section">
    <h2>${localized(english, "Qué hace Mehmiro", "What Mehmiro does")}</h2>
    <p>${localized(
      english,
      "Convierte la observación de clase en sugerencias sobre a quién mirar, en qué área y qué hacer después. La IA identifica señales y ofrece opciones; el equipo docente revisa y decide.",
      "It turns classroom observation into suggestions about who to look at, in which area and what to do next. AI identifies signals and offers options; the teaching team reviews and decides.",
    )}</p>
    <ol class="static-steps">
      <li>${localized(
        english,
        "Prepará tu año y tus clases con tu contexto.",
        "Plan your year and your classes with your context.",
      )}</li>
      <li>${localized(
        english,
        "Registrá cómo salió la clase por WhatsApp, texto o audio.",
        "Record how the class went via WhatsApp, text or audio.",
      )}</li>
      <li>${localized(
        english,
        "Revisá la evidencia y las sugerencias por estudiante y área.",
        "Review evidence and suggestions by student and area.",
      )}</li>
      <li>${localized(
        english,
        "Coordiná el próximo paso con el equipo de apoyo.",
        "Coordinate the next step with the support team.",
      )}</li>
    </ol>
  </section>
  ${renderFounderBlock(english)}
  ${renderCompanyFacts(english)}
`;

const renderAboutContent = (english: boolean) => `
  <section class="static-section">
    <h2>${localized(english, "Nuestra misión", "Our mission")}</h2>
    <p>${localized(
      english,
      "Democratizar el acceso a herramientas de observación y acompañamiento pedagógico para escuelas de Argentina y Latinoamérica. Queremos que cada docente pueda detectar a tiempo cuándo un estudiante necesita más apoyo.",
      "Democratize access to pedagogical observation and support tools for schools in Argentina and Latin America. We want every teacher to notice early when a student needs more support.",
    )}</p>
    <h2>${localized(english, "Nuestra historia", "Our story")}</h2>
    <p>${localized(
      english,
      "Mehmiro nació después de años atravesando el sistema educativo desde múltiples roles: estudiante, docente, formador y equipos de diseño e implementación de políticas públicas educativas. Hoy es una app en producción, desarrollada en colaboración con LAIA.",
      "Mehmiro was born after years of moving through the education system in multiple roles: student, teacher, trainer and teams designing and implementing public education policy. Today it is a live app, developed in collaboration with LAIA.",
    )}</p>
  </section>
  ${renderFounderBlock(english)}
  ${renderCompanyFacts(english)}
`;

const renderGenericContent = (english: boolean, page: StaticPage) => `
  <section class="static-section">
    <h2>${localized(english, "Qué es Mehmiro", "What Mehmiro is")}</h2>
    <p>${localized(
      english,
      "Mehmiro es una aplicación en producción para observar, registrar y coordinar el acompañamiento pedagógico. La IA identifica señales y ofrece sugerencias; el equipo docente revisa y decide.",
      "Mehmiro is a live application for observing, recording and coordinating pedagogical support. AI identifies signals and offers suggestions; the teaching team reviews and decides.",
    )}</p>
    <p class="static-links">
      <a href="${localizedPath(english, "/")}">${localized(english, "Inicio", "Home")}</a>
      <a href="${localizedPath(english, "/about")}">${localized(english, "Equipo", "Team")}</a>
      <a href="${COMPANY.app.login}" target="_blank" rel="noreferrer">${localized(
        english,
        "Abrir la app",
        "Open the app",
      )}</a>
    </p>
    <p class="static-note">${localized(english, "Esta página forma parte de", "This page is part of")} Mehmiro · ${escapeHtml(
      page.title,
    )}</p>
  </section>
  ${renderFounderBlock(english)}
  ${renderCompanyFacts(english)}
`;

const renderFooter = (english: boolean) => `
  <footer class="static-footer">
    <p><strong>Mehmiro</strong> · ${localized(
      english,
      "Buenos Aires, Argentina",
      "Buenos Aires, Argentina",
    )} · <a href="mailto:${COMPANY.contactEmail}">${COMPANY.contactEmail}</a></p>
    <p class="static-links">
      <a href="${localizedPath(english, "/about")}">${localized(english, "Nosotros", "About")}</a>
      <a href="${localizedPath(english, "/para-docentes")}">${localized(
        english,
        "Para docentes",
        "For teachers",
      )}</a>
      <a href="${localizedPath(english, "/para-escuelas")}">${localized(
        english,
        "Instituciones",
        "Institutions",
      )}</a>
      <a href="${COMPANY.app.login}" target="_blank" rel="noreferrer">${localized(
        english,
        "Abrir la app",
        "Open the app",
      )}</a>
      <a href="${COMPANY.partner.url}" target="_blank" rel="noreferrer">LAIA</a>
      <a href="${COMPANY.recognition.url}" target="_blank" rel="noreferrer">IRCAI</a>
      <a href="${COMPANY.founder.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="${COMPANY.founder.github}" target="_blank" rel="noreferrer">GitHub</a>
    </p>
  </footer>
`;

const styles = `
  <style>
    .static-shell{font-family:"Source Sans 3",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#171a2b;background:#f7f5f0;line-height:1.6}
    .static-shell *{box-sizing:border-box}
    .static-shell a{color:#1e3fa8;text-decoration:underline;text-underline-offset:3px}
    .static-header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;padding:20px 24px;border-bottom:1px solid #ded9cf;background:#fffdf8}
    .static-brand{font-size:24px;font-weight:800;letter-spacing:-0.02em;text-decoration:none;color:#171a2b}
    .static-nav{display:flex;flex-wrap:wrap;gap:14px;font-size:14px}
    .static-nav a{text-decoration:none;color:#4b5061}
    .static-main{max-width:1040px;margin:0 auto;padding:40px 24px 56px}
    .static-kicker{margin:0 0 8px;color:#1e3fa8;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.08em}
    .static-main h1{font-family:Georgia,"Times New Roman",serif;font-size:clamp(34px,6vw,58px);line-height:1.08;margin:0 0 16px;letter-spacing:-0.02em}
    .static-lede{font-size:clamp(18px,2.4vw,22px);color:#4b5061;max-width:760px;margin:0 0 28px}
    .static-section{margin-top:36px;padding-top:28px;border-top:1px solid #ded9cf}
    .static-section h2{font-family:Georgia,"Times New Roman",serif;font-size:clamp(24px,3.2vw,34px);margin:0 0 12px}
    .static-section h3{margin:0 0 4px;font-size:20px}
    .static-section p{max-width:780px}
    .static-founder{display:flex;gap:20px;align-items:flex-start;padding:20px;border:1px solid #ded9cf;border-radius:16px;background:#fffdf8;margin-top:16px}
    .static-initials{flex:0 0 auto;width:72px;height:72px;border-radius:16px;background:#e6e9ff;color:#1e3fa8;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:800}
    .static-role{margin:0 0 10px;color:#1e3fa8;font-weight:600}
    .static-links{display:flex;flex-wrap:wrap;gap:14px;margin:12px 0 0;font-size:14px}
    .static-facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px 24px;margin-top:12px}
    .static-facts p{margin:0}
    .static-shots{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:16px}
    .static-shots figure{margin:0;border:1px solid #ded9cf;border-radius:16px;background:#fffdf8;padding:10px}
    .static-shots img{display:block;width:100%;height:360px;object-fit:contain;object-position:top;border-radius:10px;background:#fff}
    .static-shots figcaption{font-size:13px;color:#4b5061;padding:8px 2px 0}
    .static-steps{margin:12px 0 0;padding-left:20px}
    .static-steps li{margin:8px 0}
    .static-note{font-size:14px;color:#4b5061}
    .static-footer{border-top:1px solid #ded9cf;background:#fffdf8;padding:24px;font-size:14px;color:#4b5061}
    .static-footer p{max-width:1040px;margin:0 auto 8px}
    .static-footer .static-links{margin:0 auto;max-width:1040px}
    @media(max-width:640px){.static-founder{flex-direction:column}.static-nav{font-size:13px}.static-shots img{height:300px}}
  </style>
`;

export const renderStaticShell = (
  page: StaticPage,
  english: boolean,
  kind: StaticPageKind,
): string => {
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const h1 =
    kind === "home"
      ? localized(
          english,
          "Las señales están. El desafío es coordinarlas.",
          "The signals are there. The challenge is coordinating them.",
        )
      : title;
  const lede =
    kind === "home"
      ? localized(
          english,
          "Mehmiro convierte la observación de clase en sugerencias sobre a quién mirar, en qué área y qué hacer después.",
          "Mehmiro turns classroom observation into suggestions about who to look at, in which area and what to do next.",
        )
      : description;

  const content =
    kind === "home"
      ? renderHomeContent(english)
      : kind === "about"
        ? renderAboutContent(english)
        : renderGenericContent(english, page);

  return `${styles}
  <div class="static-shell">
    <header class="static-header">
      <a class="static-brand" href="${localizedPath(english, "/")}">Mehmiro</a>
      <nav class="static-nav" aria-label="${localized(english, "Navegación principal", "Main navigation")}">
        <a href="${localizedPath(english, "/")}">${localized(english, "Inicio", "Home")}</a>
        <a href="${localizedPath(english, "/para-docentes")}">${localized(english, "Docentes", "Teachers")}</a>
        <a href="${localizedPath(english, "/para-escuelas")}">${localized(english, "Instituciones", "Institutions")}</a>
        <a href="${localizedPath(english, "/investigacion")}">${localized(english, "Investigación", "Research")}</a>
        <a href="${localizedPath(english, "/about")}">${localized(english, "Nosotros", "About")}</a>
        <a href="${COMPANY.app.login}" target="_blank" rel="noreferrer">${localized(english, "Abrir la app", "Open the app")}</a>
      </nav>
    </header>
    <main class="static-main">
      <p class="static-kicker">${localized(english, "Aplicación en producción", "Live application")}</p>
      <h1>${h1}</h1>
      <p class="static-lede">${lede}</p>
      ${content}
    </main>
    ${renderFooter(english)}
  </div>`;
};
