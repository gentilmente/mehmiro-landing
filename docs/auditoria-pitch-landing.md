# Auditoría: pitch nuevo vs. landing actual

**Fecha:** 7 de noviembre de 2026  
**Alcance:** `main` local (commit `81c5480`), https://mehmiro.com y https://docs.mehmiro.com.  
**Método:** lectura del código y del copy, render con Chrome/Playwright en desktop (1440 px) y mobile (390 px), revisión de metadatos estáticos, documentación pública y fuentes externas (IRCAI).  
**Estado:** auditoría + implementación P0/P1 (metadatos, OG image, sitemap, CTA de embajadores, métricas ocultas, encuadre de sugerencias, integraciones, flujo de producto y páginas por público). Pendiente: reconstrucción de documentación y resultados públicos de pilotos.

---

## 1. Resumen ejecutivo

1. **La landing actual no es la landing del pitch nuevo.** La página vende un asistente de evaluación/observación para docentes; el pitch vende una infraestructura de coordinación para que el equipo pedagógico actúe antes.
2. **El 100% del hero, el problema y la solución habla a docentes.** Los directivos aparecen solo como “instituciones”; las familias y los estudiantes casi no aparecen; los pedagogos, investigadores y alianzas solo existen en la documentación.
3. **Los metadatos estaban desalineados e incompletos.** Título y description anclados en “Evaluaciones Formativas”; faltaban `og:image`, `og:url`, `og:site_name`, `twitter:*`, `canonical`, sitemap y datos estructurados. **Ya se corrigieron**; falta una estrategia `/en` con metadatos estáticos por idioma.
4. **La prueba social no era verificable.** “500+ docentes”, “10+ instituciones”, “10K+ observaciones”, “98% satisfacción” y los testimonios con nombre y escuela no tenían fuente, fecha ni medición. **Se ocultaron con `showSocialProof = false`**, sin borrar el copy.
5. **Había una contradicción de fondo:** el pitch dice que el software por sí solo no mejora el aprendizaje; la landing decía “la academia ya validó el marco teórico” y “resultados en 24 horas”. **Se reemplazaron** por copy de producto y una promesa operativa.
6. **La documentación existe, pero hoy es un pasivo.** La página de investigación describe un ensayo controlado aleatorizado de 1.200 estudiantes, con efecto grande y financiamiento, sin DOI, registro ni afiliación verificable; el sitemap usa `mehmiro-docs.example.com`. Para investigadores y alianzas, eso es más peligroso que no tener documentación.
7. **La arquitectura no permite que cada público se reconozca.** El menú solo tiene “Inicio” y “Aprendé”; el menú móvil tiene dos links; no hay páginas para directivos, familias o investigación. El CTA ya cambió a embajadores, pero falta el selector de rol y las páginas por público.
8. **Son cuatro públicos, no tres.** “Padres-estudiantes” y “pedagogos-investigadores-alianzas” son duplas con necesidades distintas. Recomiendo cuatro tracks y ocho roles, con un relato compartido y un selector de rol.
9. **La identidad visual ya se alineó al logo azul-púrpura de la app.** Se reemplazaron los asteriscos naranjas por el logo real y una paleta azul-púrpura; la foto del hero ahora muestra a una docente grabando una nota de voz en el aula.
10. **Prioridad:** primero credibilidad y metadatos; después narrativa y secciones por público; al final páginas dedicadas, prerender y reescritura de la documentación.

---

## 2. Veredicto

La distancia entre el pitch y la landing **no es de tono: es de categoría, comprador, unidad de valor y prueba**.

| Dimensión | Pitch nuevo | Landing actual |
|---|---|---|
| Categoría | Coordinación pedagógica temprana | Evaluación/observación formativa con IA |
| Comprador | Escuela/dirección (decisión institucional) | Docente individual (autoservicio) |
| Usuario principal | Docente que registra; equipo de apoyo que actúa | Docente que observa y reflexiona |
| Unidad de valor | Caso priorizado y apoyo oportuno | Observación organizada y patrón detectado |
| Prueba | Adopción, satisfacción directiva, capacidad de intervención | Features, stats no verificables, “academia validó” |
| Promesa | “Las señales existen; falta coordinarlas” | “Tu mirada importa; Mehmiro la amplifica” |
| Emoción | Alivio por no llegar tarde | Orgullo profesional por ser visto |

La landing actual es coherente consigo misma, pero no con el pitch. El docente sigue siendo el héroe, cuando en el pitch el héroe es **el sistema que conecta al docente con el equipo de apoyo**.

---

## 3. Alineación pitch ↔ landing, punto por punto

Estados: **Alineado**, **Parcial**, **Ausente**, **Contradicho**.

| # | Elemento del pitch | Dónde está en la landing | Estado | Comentario |
|---|---|---|---|---|
| 1 | El docente percibe las primeras señales: deja de participar, se queda atrás, falta, se aísla | Hero: “Organizá observaciones, detectá patrones y actuá a tiempo”; Problema: “Intervenciones tardías” | **Parcial** | Habla de observar, pero no nombra las señales concretas. El pitch es más específico y reconocible. |
| 2 | Las señales quedan en cuadernos, formularios dispersos, planillas, comentarios de pasillo | Problema: “Observaciones dispersas… notas aisladas, conversaciones de pasillo” | **Parcial** | Toma una parte. Falta la idea de sistema fragmentado y sin coordinación. |
| 3 | El equipo pedagógico no logra una visión de conjunto | No aparece | **Ausente** | Es el corazón del pitch y no aparece en la página; debe formularse sin desconocer la coordinación artesanal que ya existe. |
| 4 | El apoyo llega tarde, solo ante dificultades graves; muchos estudiantes esperan | Problema: “Intervenciones tardías” | **Parcial** | Está formulado como culpa/ceguera del docente, no como falla de coordinación. |
| 5 | El cuello de botella: hay información, falta capacidad de convertirla en acción coordinada | Cierre del problema: “para que nunca más pierdas una observación importante” | **Contradicho** | La landing reduce el problema a memoria individual; el pitch lo define como falta de sistema, no de compromiso. |
| 6 | Por qué ahora: voz, análisis contextual y registros digitales maduros | No aparece | **Ausente** | Falta el argumento de timing, clave para directivos e inversores. |
| 7 | Mehmiro es el nexo, el sistema neuronal que conecta los puntos | “Conoce a Mehmiro” + features genéricas | **Parcial** | El producto sí conecta clase, observación, evidencia y perfil institucional; falta mostrarlo como flujo, no como metáfora. |
| 8 | Nota de voz breve después de clase, por WhatsApp o canal interno | No está en la home; aparece en Learn/Support como “notas de voz a texto” | **Parcial / oculto** | Los docs de la app confirman WhatsApp con texto o audio y transcripción efímera; el mecanismo no está en la home. |
| 9 | Mehmiro estructura, vincula con el historial, detecta patrones y prioriza casos | “Analiza tus observaciones para mostrar patrones invisibles” | **Parcial** | Hay historial por estudiante y “Prioridades de hoy” en el roster; no hay una cola de casos del equipo de apoyo. |
| 10 | Sugerencias prácticas: feedback formativo, práctica espaciada, recuperación activa | No aparece | **Visión, no feature** | Los docs hablan de sugerencias de evaluación/evidencia y contexto; esas técnicas no están documentadas como funcionalidad. No prometerlas. |
| 11 | No afirmamos que el software solo mejore el aprendizaje; la coordinación habilita mejores interacciones | “La academia ya validó el marco teórico”; “resultados en 24 horas” | **Contradicho** | La landing sobrepromete justo lo que el pitch evita. |
| 12 | Objetivos operativos: adopción docente, satisfacción de la dirección, capacidad del equipo de apoyo | Stats de 500+/98% sin marco operativo | **Parcial / no verificable** | Los números aparecen como prueba, no como objetivos de implementación. |
| 13 | Autoconciencia, metacognición y autonomía del estudiante | Solo “Metacognición docente” | **Visión, no feature** | Es una aspiración del pitch, no una funcionalidad documentada; no prometer autoevaluación ni portal del estudiante. |
| 14 | Transformar datos fragmentados en condiciones para una enseñanza mejor y más personalizada | Cierre genérico | **Parcial** | Falta el “para qué” sistémico: condiciones, no solo orden. |

**Conclusión:** de 14 elementos, 2 están ausentes, 8 son parciales, 2 contradicen el pitch y 2 son visión/roadmap. La landing no necesita un ajuste de palabras: necesita una nueva columna vertebral narrativa, separando lo que el producto ya hace de lo que el pitch aspira a lograr.

### 3.1 Verdad de producto según los docs de la app

Leí el repo `mehmiro2` actualizado: `README.md`, `docs/README.md`, `docs/product/*`, `docs/current-state-description/security-and-multitenancy.md` y los planes de WhatsApp/leadership. Esto es lo que la landing puede afirmar hoy:

| Tema | Verdad de producto | Implicación para la landing |
|---|---|---|
| Categoría | Plataforma de evaluación/observación con espacio de clase, rúbricas, lecciones y perfil estudiantil | No vender solo “coordinación”; la observación y la evaluación son el núcleo real |
| Rol de la IA | Identifica estudiantes mencionados, extrae evidencia y **sugiere** valores; el docente revisa, edita, acepta o rechaza | Decir “identifica señales y ofrece opciones/sugerencias”; nunca “decide” ni “no evalúa” |
| Observación | Narrativa libre en la app; WhatsApp acepta texto o audio, transcribe de forma efímera y devuelve un análisis de clase | Se puede prometer “respondé por WhatsApp con texto o audio”; no prometer análisis por estudiante dentro de WhatsApp |
| WhatsApp | Canal de intake con contrato de producto definido; el estado de rollout depende de la institución/entorno | Decir “WhatsApp para observaciones, según configuración de la institución”; no “WhatsApp universal” |
| Google | Login con Google, Google Calendar y Gmail/Google Workspace para recordatorios | Decir “Google (login, Calendar y Gmail/Workspace)”; no “Google Workspace” como integración total |
| Directivos | Dashboard institucional, grupos académicos, perfil estudiantil compuesto, visibilidad de adopción y RLS | Sí se puede hablar de visión de conjunto y gobernanza; no de “casos priorizados para el equipo de apoyo” como feature |
| Familias/estudiantes | No hay portal de familias ni autoevaluación estudiantil en los docs actuales; hay flujos de contacto familiar definidos por la institución y variantes futuras | No prometer portal ni autoevaluación; hablar de transparencia, consentimiento y marco de datos |
| Onboarding institucional | Mehmiro prepara el espacio; la institución solo necesita nombre y email del responsable | Buen argumento para directivos: “onboarding asistido, sin formularios técnicos” |
| Privacidad | RLS, multitenencia, datos por institución, sin logs sensibles; prueba anónima de 7 días | Se puede hablar de acceso por roles y aislamiento; revisar legales antes de absolutos |
| “Prioridades” | Hay “Prioridades de hoy” en el roster (reglas, no IA) y un perfil institucional con evidencia | La priorización existe, pero no como cola de casos del equipo de apoyo; matizar |
| Sugerencias didácticas | Los docs hablan de sugerencias de evaluación/evidencia y contexto; no de feedback formativo, práctica espaciada o recuperación activa como features | No prometer esas técnicas como funcionalidad; a lo sumo como marco pedagógico/roadmap |
| Metacognición/autonomía | Es una hipótesis/aspiración del pitch, no una feature documentada | Presentar como objetivo de aprendizaje, no como funcionalidad |

**Conclusión de la verdad de producto:** el pitch es una narrativa ambiciosa y parcialmente aspiracional. La landing debe vender lo que el producto hace hoy (observación asistida, revisión docente, WhatsApp, visión institucional) y presentar la coordinación/autonomía como dirección, no como feature terminada.

### Cambios ya aplicados en esta iteración

- **CTA de embajadores:** el botón principal pasó de “Comenzar gratis” a “Probala y sumá recompensas”; el header y las secciones usan “Probala” para no sobrecargar.
- **Programa de embajadores:** se reemplazó la sección de prueba social no verificada por un bloque “Tu prueba puede abrir una puerta”, con pasos y recompensa.
- **Métricas ocultas, no borradas:** `CONTENT_FLAGS.showSocialProof = false` en [`src/config/contentFlags.ts`](../src/config/contentFlags.ts). El copy de 500+/98%/testimonios sigue en i18n y se puede reactivar.
- **Encuadre:** se reemplazó “no evalúa: interpreta” por “identifica señales y ofrece opciones/sugerencias” en hero, solución y FAQ.
- **Integraciones:** WhatsApp para observaciones y Google (login, Calendar y Gmail/Workspace), con matiz de configuración institucional.
- **Flujo de producto:** se reemplazaron las stats vagas (24h/100%/∞) por tres pasos reales: WhatsApp → análisis de clase → revisión en la app.
- **FAQ:** se corrigió la respuesta rota, se agregó integraciones y el flujo de observación.
- **Metadatos:** título, description, canonical, OG/Twitter, JSON-LD, OG image 1200×630 y sitemap.
- **Idioma:** rutas `/en` con metadatos propios, toggle que navega entre `/` y `/en`, y HTML estático para todas las rutas de marketing y los cursos en ambos idiomas.
- **Páginas por público:** `/para-docentes`, `/para-escuelas`, `/para-familias` e `/investigacion`, con contenido bilingüe, metadatos por ruta y CTA propio.
- **Evidencia y método:** `/evidencia` y `/en/evidencia`, con “lo que sabemos / lo que medimos / lo que no afirmamos / cómo evaluamos / qué falta”.
- **Home:** selector de cuatro públicos (`#para-quien`), sección “Por qué ahora”, nav con “Cómo funciona”/“Escuelas”, menú móvil completo y footer con las cuatro audiencias.
- **Navegación con hash:** `ScrollToTop` ahora respeta `#ancla`; los CTA secundarios a `/#embajadores`, `/#mehmiro` y `/#preguntas-frecuentes` funcionan.
- **Identidad visual:** logo real de la app, paleta azul-púrpura, sin asteriscos naranjas; hero con docente grabando una nota de voz en el aula; favicon y OG image actualizados.
- **Documentación interna:** [`AGENTS.md`](../AGENTS.md) actualizado con la verdad de producto, la paleta y las reglas de contenido.

---

## 4. Públicos: son cuatro (y ocho roles)

El brief dice “tres públicos” pero lista cuatro. La confusión importa porque cada uno tiene un trabajo, un miedo y un CTA distintos.

| Track | Roles incluidos | Trabajo principal | Miedo / objeción | Promesa | CTA | Prueba que necesita |
|---|---|---|---|---|---|---|
| **1. Maestros-educadores** | Docente de aula, docente novel, coordinador de área | Registrar en 30 segundos y recibir una sugerencia útil para mañana | “¿Me va a evaluar?”, “¿Es más trabajo?”, “¿Reemplaza mi criterio?” | “Tu observación se convierte en acción, sin sumar carga.” | Probala y sumá recompensas / Quiero ser embajador | Tiempo real de registro, control del docente, privacidad, sugerencias concretas |
| **2. Directivos-dueños** | Director, dueño de colegio, secretario académico, jefe de estudios | Ver el conjunto, coordinar al equipo de apoyo y demostrar adopción | “¿Van a usar la herramienta?”, “¿Cuánto cuesta?”, “¿Qué riesgo legal tengo?”, “¿Cómo sé que funciona?” | “De señales dispersas a un equipo que actúa antes.” | Agendar diagnóstico / Diseñar un piloto | Casos, métricas de adopción, roles/permisos, implementación, gobernanza |
| **3. Padres-estudiantes** | Madre/padre/tutor, estudiante de secundaria | Entender qué se registra, quién lo ve y cómo se decide un apoyo; tener voz | “¿Es vigilancia?”, “¿Etiqueta a mi hijo?”, “¿Decide un algoritmo?”, “¿Quién usa sus datos?” | “Más contexto para acompañar, menos etiquetas.” | Cómo cuidamos los datos / Preguntas de familias | Transparencia, consentimiento, acceso por roles y derechos. **No hay portal de familias ni autoevaluación estudiantil en el producto actual: no prometerlos.** |
| **4. Pedagogos-investigadores-alianzas** | Pedagogo, investigador académico, universidad, fundación, ministerio, partner | Evaluar el marco, la evidencia, la ética y la posibilidad de co-diseñar un piloto | “¿Dónde está la evidencia?”, “¿Qué teoría?”, “¿Cómo miden?”, “¿Quién es dueño de los datos?”, “¿Hay conflicto de interés?” | “Un marco explícito y un piloto para aprender juntos.” | Proponer colaboración / Ver marco de investigación | Teoría de cambio, protocolo, ética, citas reales, gobernanza, transparencia |

### Cómo se relacionan

- **Usuario:** docentes (adopción).
- **Comprador:** directivos-dueños (decisión y presupuesto).
- **Beneficiarios y garantes de confianza:** familias y estudiantes (consentimiento, legitimidad).
- **Validadores y ecosistema:** pedagogos, investigadores y alianzas (evidencia, credibilidad, distribución).

**Confirmado:** cuatro tracks. La fusión a tres queda descartada. Los cuatro públicos no compiten entre sí: se secuencian. El docente es el usuario que genera la señal; el directivo es quien decide y sostiene la adopción; las familias y estudiantes son la razón y el consentimiento; los investigadores y alianzas son la validación y el ecosistema.

### Implicación para la landing

No se puede hablarle a los cuatro con el mismo hero y el mismo CTA. La solución no es cuatro homepages: es **un relato compartido + un selector de rol + cuatro paneles/páginas de profundidad**.

---

## 5. Metadatos: veredicto y corrección

### 5.1 Lo que hay hoy

En [`index.html`](../index.html#L7-L28):

- `title`: “Mehmiro - Evaluaciones Formativas con IA Pedagógica” (51 caracteres).
- `description`: “Mehmiro es el asistente de IA pedagógico que transforma las evaluaciones formativas. Analiza las observaciones del docente según el contexto único de cada estudiante.” (166 caracteres).
- `og:title`: igual al título.
- `og:description`: “Transforma la forma en que evalúas con inteligencia artificial pedagógica” (distinto de la description).
- `og:type`: `website`.
- `lang="es-AR"`.
- `author`, `facebook-domain-verification`, preconnect y Google Fonts.

### 5.2 Qué está mal

| Problema | Evidencia | Severidad | Impacto |
|---|---|---|---|
| Título y description desalineados con el pitch | [`index.html`](../index.html#L7-L11) | **Alta** | Posiciona “evaluación formativa”, no coordinación/apoyo temprano; atrae al público equivocado. |
| `og:description` distinta de `description` | [`index.html`](../index.html#L21-L27) | Media | Mensajes inconsistentes en Google vs. redes. |
| Falta `og:image` | No hay ninguna | **Alta** | WhatsApp, LinkedIn y Facebook comparten un link sin imagen. Crítico para una marca que se distribuye por WhatsApp. |
| Faltan `og:url`, `og:site_name`, `og:locale` | No existen | Media | Peor control del preview y de la canonización. |
| Faltan `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` | No existen | Media | Preview pobre en X/Twitter. |
| Falta `canonical` | No existe | **Alta** | El SPA puede indexar variantes (`/`, `/?lang=en`, etc.) sin una URL preferida. |
| Falta `hreflang` / estrategia de idioma | El sitio detecta idioma en runtime | **Alta** | El contenido en inglés no es indexable ni compartible de forma estable. |
| No hay sitemap | `https://mehmiro.com/sitemap.xml` responde 404 | Media | Menos descubrimiento de rutas; `robots.txt` no lo declara. |
| No hay datos estructurados | No hay JSON-LD | Media | Se pierden señales de Organization/WebSite/FAQ. |
| El cambio de idioma no actualiza metadatos | Verificado: al pasar a EN, `<html lang="en">` cambia, pero `title`, `description` y `og:*` siguen en español | **Alta** | Un usuario inglés ve body en inglés y metadatos en español; un crawler ve solo español. |
| La detección automática de idioma decide por el navegador | [`src/i18n/index.ts`](../src/i18n/index.ts#L21-L31) | **Alta** | **Resuelto:** la ruta `/en` fuerza inglés y el build genera HTML estático para las rutas de marketing; `/` queda en español. |
| Falta `theme-color` y `link rel="icon"` explícito | No existen | Baja | Detalle de marca/PWA. |
| 404 suave en GitHub Pages | El workflow copia `index.html` a `404.html` | Media | Rutas inexistentes devuelven 200 con la app; conviene `noindex` en NotFound. |

**Estado (7 nov 2026):** los puntos de esta tabla ya se corrigieron en `index.html`, salvo el `noindex` de NotFound y la estrategia completa de rutas `/en`. La tabla queda como registro del diagnóstico.

### 5.3 Metadatos recomendados

**Estado:** implementados en [`index.html`](../index.html), con OG image en [`public/og-mehmiro.png`](../public/og-mehmiro.png), sitemap en [`public/sitemap.xml`](../public/sitemap.xml) y sincronización de título/description al cambiar idioma en [`useDocumentMetadata.ts`](../src/hooks/useDocumentMetadata.ts).

**Home (es-AR):**

```html
<title>Mehmiro | Observación y coordinación pedagógica con IA</title>
<meta
  name="description"
  content="Mehmiro ayuda a docentes y equipos directivos a convertir la observación de clase en evidencia revisada, con WhatsApp, IA y visión institucional del progreso."
/>
<link rel="canonical" href="https://mehmiro.com/" />

<meta property="og:type" content="website" />
<meta property="og:site_name" content="Mehmiro" />
<meta property="og:locale" content="es_AR" />
<meta property="og:url" content="https://mehmiro.com/" />
<meta property="og:title" content="Observar mejor para acompañar a tiempo." />
<meta
  property="og:description"
  content="Observación de clase con IA, revisión docente y una visión institucional del progreso."
/>
<meta property="og:image" content="https://mehmiro.com/og-mehmiro.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Mehmiro: observación de clase con IA y criterio docente" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Observar mejor para acompañar a tiempo." />
<meta
  name="twitter:description"
  content="Observación de clase con IA, revisión docente y una visión institucional del progreso."
/>
<meta name="twitter:image" content="https://mehmiro.com/og-mehmiro.png" />

<meta name="theme-color" content="#2a5546" />
```

**Títulos/descriptions por ruta propuesta:**

| Ruta | Título | Description |
|---|---|---|
| `/` | Mehmiro \| Observación y coordinación pedagógica con IA | Mehmiro ayuda a docentes y equipos directivos a convertir la observación de clase en evidencia revisada, con WhatsApp, IA y visión institucional del progreso. |
| `/para-docentes` | Mehmiro para docentes \| 30 segundos, cero formularios | Respondé por WhatsApp con texto o audio. Mehmiro analiza la clase y te ayuda a revisar estudiantes y evidencias en la app. |
| `/para-escuelas` | Mehmiro para escuelas \| Observación con revisión docente | Perfil estudiantil con evidencia aceptada, cobertura y contexto entre materias. Adopción, roles, permisos y trazabilidad. |
| `/para-familias` | Mehmiro para familias \| Más contexto, menos etiquetas | Qué registra Mehmiro, quién accede y qué derechos tienen las familias. Transparencia, consentimiento y acceso por roles. |
| `/investigacion` | Investigación y alianzas \| Mehmiro | Marco pedagógico, teoría de cambio, ética y pilotos para evaluar la observación asistida con revisión docente. |

### 5.4 Correcciones técnicas necesarias

1. **Un solo lugar para metadatos por ruta.** Con React 19 se pueden renderizar `<title>`, `<meta>` y `<link>` desde un componente de página; o usar `react-helmet-async`. El HTML estático debe quedar con los valores de la home.
2. **Idioma explícito, no automático.** Default `es-AR`; el toggle debe llevar a una URL estable (`/en` o `?lang=en`) y actualizar `title`, `description`, `og:*`, `canonical` y `hreflang`. Si el inglés es mercado (convocatorias internacionales), no alcanza con un toggle: hacen falta rutas `/en` con contenido y metadatos propios, `hreflang` recíproco y canonical por idioma.
3. **Prerender para redes.** Los crawlers de WhatsApp/LinkedIn no ejecutan JS. Si se agregan rutas por público, cada una necesita su HTML estático con metadatos propios. Opciones: prerender en build (`vite-plugin-ssr`, `react-snap` o similar) o mover las páginas de marketing a un framework con SSG.
4. **Sitemap + robots.** **Hecho:** `public/sitemap.xml` y `Sitemap:` en `robots.txt`.
5. **JSON-LD.** **Hecho:** `Organization` + `WebSite` en `index.html`; falta `FAQPage` cuando la FAQ sea estática.
6. **404.** En `NotFound`, agregar `noindex` y, si es posible, un `404.html` con estado real (GitHub Pages no permite status dinámico; al menos evitar indexación).
7. **OG image.** **Hecho:** [`public/og-mehmiro.png`](../public/og-mehmiro.png), 1200×630.

---

## 6. Auditoría de contenido, sección por sección

### 6.1 Hero

**Lo que funciona:** la tipografía serif, el foco en el docente y la promesa sistémica son memorables. La identidad visual ya usa el logo real de la app, una paleta azul-púrpura y una foto de docente grabando una nota de voz en el aula.

**Lo que falla:**

- El hero sigue siendo principalmente docente; el CTA institucional aparece en el selector de públicos, no como acción principal.
- La nav desktop solo suma “Escuelas”; familias e investigación viven en el selector y el footer.
- El reconocimiento IRCAI conserva su banner original con colores ajenos a la nueva paleta.

**Recomendación:** mantener la paleta azul-púrpura y la foto actual; sumar un CTA secundario “Para escuelas” en el hero y revisar si el banner IRCAI necesita una versión neutra.

### 6.2 Problema

**Lo que funciona:** “Cada docente conoce esta sensación” es una buena entrada emocional; las cuatro tarjetas son claras.

**Lo que falla:**

- El problema se presenta como límite del docente (“la memoria tiene límites”), no como falla del sistema.
- No aparece el equipo pedagógico, ni la visión de conjunto, ni el costo de llegar tarde.
- “No estás solo en esto” suena a apoyo emocional individual, no a coordinación institucional.
- La sección termina en un CTA de “Comenzar gratis” otra vez.

**Recomendación:** reencuadrar como “La información existe. El desafío es que llegue a tiempo.” Incluir el recorrido de la señal (cuaderno → formulario → planilla → pasillo) y el momento en que el equipo reconstruye el panorama demasiado tarde. Cerrar con el cuello de botella, aclarando que no es falta de compromiso sino de sistema.

### 6.3 Solución

**Lo que funciona:** la idea de “tecnología como escucha, no como control” es valiosa y debería conservarse.

**Lo que falla:**

- “Conoce a Mehmiro” es genérico; no explica el mecanismo.
- Las stats “24h”, “100%” e “∞” son vagas o absolutas. “∞ capacidad de observación” no significa nada y resta seriedad.
- Las features repiten “no evalúa: interpreta” sin mostrar el flujo.
- No hay nota de voz, WhatsApp/canal interno, historial, priorización ni equipo de apoyo.
- No hay sugerencias prácticas (feedback formativo, práctica espaciada, recuperación activa).
- “Metacognición docente” deja afuera la metacognición/autonomía del estudiante, que el pitch sí menciona.

**Recomendación:** convertirla en “Cómo funciona” con cuatro pasos y un visual de producto. Reemplazar las stats por métricas operativas verificables o por una promesa concreta (“30 segundos por clase”, “el equipo de apoyo ve el contexto”). Agregar un bloque de sugerencias para el aula.

### 6.4 Prueba social

**Lo que funciona:** el formato de testimonios y la banda de reconocimiento IRCAI dan confianza superficial.

**Lo que falla:**

- “500+ docentes”, “10+ instituciones”, “10K+ observaciones”, “98% satisfacción” no tienen fuente, fecha ni metodología. No encontré evidencia en el repo.
- Los testimonios tienen nombre completo y escuela; si son ficticios, es un riesgo reputacional y legal. Si son reales, falta consentimiento y contexto.
- “Marco teórico validado por la academia” es una afirmación vaga y fuerte. ¿Qué academia? ¿Qué marco? ¿Dónde se puede leer?
- No hay logos de escuelas, casos, ni métricas de piloto.
- Para directivos, la prueba relevante no es “docentes activos” sino adopción, satisfacción del equipo, tiempo hasta la intervención y casos priorizados. Para investigadores, es el protocolo y la evidencia, no un contador.

**Recomendación:** **ocultar, no borrar.** Las métricas y los testimonios quedaron detrás de `CONTENT_FLAGS.showSocialProof = false` ([`src/config/contentFlags.ts`](../src/config/contentFlags.ts)). El copy permanece en i18n para reactivarlo cuando los datos estén respaldados. Mientras tanto, el espacio de prueba social se reemplazó por el programa de embajadores, que sí es una propuesta real y accionable. Cuando estén los datos: publicar con fuente, fecha y N; testimonios solo reales, autorizados y con contexto.

### 6.5 FAQ

**Lo que funciona:** la interacción de cartas apiladas es original y la sección está bien jerarquizada.

**Lo que falla:**

- Las seis preguntas son de docentes/implementación; no hay preguntas de directivos, familias, estudiantes ni investigadores.
- La última respuesta tiene un error: “No. Mehmiro es una herramienta… No, tu criterio lo potencia.” ([`es-AR.json`](../src/i18n/locales/es-AR.json#L181)).
- “Podés empezar a ver resultados en las primeras 24 horas” es un overpromise.
- “No necesito capacitación” es poco realista para una implementación institucional.
- No hay preguntas sobre voz/WhatsApp, equipo de apoyo, datos de menores, decisiones automáticas, evidencia, integraciones o precios.
- En desktop, al final del deck el CTA de la sección queda parcialmente oculto detrás del header fijo (observado en el render).

**Recomendación:** FAQ segmentado por público (tabs o acordeón), con 8–10 preguntas críticas y respuestas honestas. Corregir la última respuesta. Revisar el timing del CTA al final del deck.

### 6.6 CTA final

**Lo que funciona:** el bloque verde y el QR tienen presencia; el QR es útil para docentes en mobile.

**Lo que falla:**

- “¿Querés transformar cómo observás el aprendizaje?” vuelve al docente individual.
- “La academia ya validó el marco teórico” contradice la humildad epistémica del pitch.
- “Comenzar gratis” no sirve para un directivo que quiere un piloto, una familia que quiere entender datos o un investigador que quiere colaborar.
- El QR se oculta en mobile ([`index.css`](../src/index.css#L317-L318)); el CTA principal queda solo.
- No hay promesa de qué pasa después (“demo”, “onboarding”, “diagnóstico”).

**Recomendación aplicada:** CTA principal “Probala y sumá recompensas”, con “Probala” como versión corta para header y secciones. El CTA final ahora es “Probala y convertite en embajador” y el programa tiene su propia sección. Para escuelas: “Agendar diagnóstico”; para familias: “Cómo cuidamos los datos”; para investigadores: “Proponer colaboración”.

### 6.7 Navegación, footer y mobile

- **Header:** “Inicio” y “Aprendé” ([`App.tsx`](../src/App.tsx#L136-L148)). “Aprendé” es ambiguo: parece aprendizaje del estudiante, pero lleva a tutoriales del producto. Renombrar “Cómo funciona” o “Tutoriales”.
- **Menú móvil:** solo Inicio/Aprendé/CTA/idioma ([`App.tsx`](../src/App.tsx#L94-L129)). No hay forma de llegar a “Para escuelas”, “Familias” o “Investigación”.
- **Footer:** buena estructura, pero “Para educadores” ([`es-AR.json`](../src/i18n/locales/es-AR.json#L218)) lleva a cursos, no a una página de directivos. Agregar “Para escuelas”, “Familias”, “Investigación”. Cambiar `http://docs.mehmiro.com` por `https://` ([`Footer.tsx`](../src/components/Footer.tsx#L200)).
- **Mobile:** el header queda cargado con logo + CTA + menú; la página mide ~9.269 px de alto; el CTA se repite y el QR desaparece. Conviene un CTA fijo discreto y un menú con las cuatro audiencias.
- **Accesibilidad:** en general los iconos son decorativos y hay labels; falta un skip link y revisar el foco del deck de FAQ. El alt del QR es la caption, no una descripción del destino; aceptable, pero mejor explicar “QR para abrir la demo”.

---

## 7. Credibilidad, documentación y consistencia

### 7.1 Claims públicos que necesitan respaldo

| Claim | Dónde aparece | Riesgo | Acción |
|---|---|---|---|
| “500+ docentes activos”, “10+ instituciones”, “10K+ observaciones”, “98% satisfacción” | Home, About, Community, Learn | Alto: no verificable; publicidad engañosa si es ficticio | **Oculto con `showSocialProof = false`**; reactivar solo con fuente/fecha/N |
| Testimonios con nombre y escuela | Home, Community | Alto: consentimiento/privacidad; si son ficticios, deceptive | **Ocultos con el flag**; usar quotes reales autorizados o anonimizados |
| “Marco teórico validado por la academia” / “La academia ya validó el marco teórico” | Home, CTA | Alto: overclaim vago | **Reemplazado** por copy de producto; nombrar marco/partner y citar fuentes si se recupera |
| “Resultados en las primeras 24 horas” | FAQ | Medio: overpromise | **Reemplazado** por “primeros registros en minutos; el impacto depende del uso y del contexto” |
| “Cumplimos con todas las normativas” / “encriptación de extremo a extremo” | FAQ, Features, Support | Alto: legal/factual | Especificar Ley 25.326, DPA, cifrado en tránsito/reposo; eliminar E2E si la IA procesa en servidor |
| “Funciona sin internet” | Features | Alto si es falso | Verificar; si no, quitar |
| “Integraciones con Google Classroom, Canvas, Moodle, Blackboard, Schoology” | Docs FAQ | Alto si es falso | Verificar; listar solo lo real |
| “Chat en vivo / teléfono” | Support | Medio si no está atendido | Ajustar a canales reales |
| “Publicado en Journal of Educational Technology” / RCT de 1.200 estudiantes | Docs research | **Crítico** para investigadores | Reemplazar por protocolo/marco; si existe, agregar DOI, registro, IRB y autores |
| “No evalúa: interpreta” | Hero/Solution | Medio: contradice rúbricas/evaluaciones del producto | **Regla de lenguaje:** no decir “evalúa” ni “no evalúa”. Decir “identifica señales”, “ofrece opciones/sugerencias personalizadas”; el docente decide |
| “100% respeto a tu autonomía”, “∞ capacidad” | Solution | Bajo/medio: absolutos/gimmick | Reemplazar por compromisos concretos o quitar |
| Integraciones | Hero/Solution/FAQ | Debía ser explícito | WhatsApp y Google Workspace activos; otros canales se evalúan en el piloto |

### 7.1.1 Regla de lenguaje sobre evaluación

El producto identifica señales y prepara una lectura “pre-masticada”, pero la IA no debe presentarse como evaluadora. Para evitar la mala reputación de la IA en educación y no mentir sobre lo que hace el producto:

- **No usar:** “evalúa”, “no evalúa”, “califica”, “diagnostica”.
- **Usar:** “identifica señales”, “organiza evidencia”, “ofrece opciones”, “sugerencias personalizadas”, “el docente revisa y decide”.
- **Explicar:** la IA no emite un veredicto ni toma decisiones sobre estudiantes; el equipo humano revisa.

Esto ya se aplicó en hero, solución y FAQ. Queda pendiente revisar todas las páginas secundarias y la documentación.

### 7.2 Documentación: qué encontré

> **docs.mehmiro.com está abandonada. No es fuente de verdad.** Puede declarar cualquier cosa; todo su contenido debe auditarse antes de citarse. Hoy sirve como inventario de lo que pudo haber sido, no como prueba de producto ni de investigación.

La documentación existe en https://docs.mehmiro.com y tiene tres secciones: Guía de Usuario, Investigación y Centro de Desarrollo. Es un activo a reconstruir, pero hoy no está alineada con el pitch:

- **Producto:** la home de docs describe “una plataforma de evaluación educativa” con “análisis con Google Generative AI”, evaluaciones, preguntas, acceso para estudiantes y seguimiento. El pitch describe un sistema de voz + coordinación + apoyo temprano. No son la misma categoría.
- **Investigación:** la introducción afirma “23% de mejora en participación”, “15% de reducción de brechas” y “87% de docentes con mayor confianza”. La metodología habla de “Published Studies” en journals 2024 y de un “RCT” de 1.200 estudiantes, 24 aulas, 16 semanas, con `d=0.89`, `p<0.001`, grant y autora. No encontré DOI, registro del ensayo, afiliación verificable ni enlace a publicación. El paper se lee como contenido de ejemplo, no como evidencia pública.
- **Sitemap:** usa `https://mehmiro-docs.example.com/...`, un dominio placeholder. Eso es una señal técnica de que el sitio no está listo para ser citado.
- **FAQ:** dice que si el navegador marca “not secure” “es normal” y que se puede continuar. Es un consejo de seguridad peligroso. También lista integraciones LMS y alertas SMS que no están verificadas en el producto.
- **Idioma:** la página de metodología está en inglés dentro de un sitio en español; hay mezcla de idiomas y de tono.
- **Actualización:** última actualización visible en noviembre de 2025; el producto/pitch actual parece posterior.

**Recomendación:** antes de empujar tráfico de investigadores/alianzas a docs, reescribir la sección de investigación como **marco de trabajo y protocolo**, no como resultados. Separar “lo que sabemos”, “lo que estamos midiendo” y “lo que todavía no sabemos”. Corregir el sitemap, la FAQ de seguridad y las integraciones. Agregar una página de gobernanza de datos.

### 7.3 IRCAI

- El reconocimiento IRCAI es real: la ficha existe en https://ircai.org/top100/entry/mehmiro/ y la lista es “Global Top 100 Promising Project 2025”. La landing lo presenta como “Reconocimiento IRCAI 2025”; conviene precisar “seleccionado entre los 100 proyectos prometedores” para no sugerir un premio ganado.
- La ficha de IRCAI describe a Mehmiro como una app para observar, registrar e interpretar el aprendizaje, no como un sistema de coordinación con voz/WhatsApp. Es otra señal de que el pitch va un paso adelante del producto/documentación; hay que decidir si se actualiza el pitch, el producto o ambos.
- **No usar nombres de organizaciones anteriores en la comunicación.** La narrativa pública debe apoyarse en Mehmiro y en el reconocimiento IRCAI, no en alianzas que ya no existen.

### 7.4 Documentación interna del repo

[`AGENTS.md`](../AGENTS.md) está desactualizado: dice “single-page”, “Inter”, “storytelling Juan y Beatriz”, “phone mockup” y “CTA Comenzar gratis + QR”. El código actual usa Lora/Source Sans 3, i18n, stack cards, múltiples rutas y una landing distinta. Esto no es un problema de marketing, pero hace que cualquier agente o colaborador parta de supuestos falsos. Actualizarlo es P1.

---

## 8. Arquitectura de contenido propuesta

### 8.1 Principio

**Un relato compartido, cuatro profundidades.** El problema es el mismo para todos: las señales existen, la coordinación falta. Lo que cambia es el trabajo de cada público.

### 8.2 Home propuesta

1. **Header:** “Cómo funciona” · “Para docentes” · “Para escuelas” · “Familias” · “Investigación” + “Ingresar” + CTA contextual.
2. **Hero:** “Las señales están. El desafío es coordinarlas.” Subtítulo con el mecanismo. Selector de rol (4 chips). CTA docente + CTA escuela.
3. **Problema:** “La información existe. El desafío es que llegue a tiempo.” Recorrido de la señal y costo de llegar tarde, sin culpar a quienes ya coordinan.
4. **Por qué ahora:** voz, análisis contextual, registros digitales. Breve, 3 columnas.
5. **Cómo funciona:** 4 pasos (voz → estructura → patrones/priorización → acción del equipo) con visual de producto.
6. **Para docentes:** 30 segundos, sugerencias de aula, control.
7. **Para escuelas:** visión de conjunto, equipo de apoyo, adopción, permisos, piloto.
8. **Para familias y estudiantes:** transparencia, consentimiento, revisión humana, autonomía.
9. **Para investigadores y alianzas:** marco, pilotos, ética, evidencia honesta.
10. **Confianza:** IRCAI, gobernanza, registro de claims.
11. **FAQ segmentado.**
12. **CTA final segmentado.**

Para no alargar la home, los bloques 6–9 pueden ser **tabs** con un panel visible y enlaces a páginas dedicadas. La home cuenta el relato; las páginas profundizan.

**Implementación actual:** “Por qué ahora” quedó como banda standalone después del stack de problema/solución/embajadores y antes de la FAQ, para evitar el clipping de las tarjetas sticky en mobile.

### 8.3 Páginas dedicadas

| Ruta | Público | Función | CTA |
|---|---|---|---|
| `/para-docentes` | Docentes | Workflow, sugerencias, privacidad, empezar | Probala y sumá recompensas |
| `/para-escuelas` | Directivos/dueños | Coordinación, adopción, implementación, caso de negocio | Agendar diagnóstico / Diseñar piloto |
| `/para-familias` | Familias y estudiantes | Transparencia, consentimiento, derechos, participación | Preguntas de familias / Cómo cuidamos los datos |
| `/investigacion` | Pedagogos/investigadores/alianzas | Marco, protocolo, ética, publicaciones, colaboración | Proponer colaboración |
| `/como-funciona` | Todos | Flujo de producto y rol del docente/equipo | Ver demo / Comenzar |
| `/evidencia` | Directivos/investigadores | Claims verificados, pilotos, resultados | Proponer colaboración |
| `/seguridad` | Directivos/familias | Gobernanza, datos de menores, subprocesadores | Contactar |

Ya están creadas las cuatro páginas de audiencia y la página de evidencia. Queda `/seguridad` para cuando existan textos legales verificados.

### 8.4 Matriz de CTAs

| Público | CTA primario | CTA secundario | Qué promete |
|---|---|---|---|
| Docentes | Probala y sumá recompensas | Quiero ser embajador | Probar con mi clase y recibir una recompensa si la escuela avanza |
| Directivos | Agendar diagnóstico | Descargar brief de piloto | Un piloto con objetivos y métricas |
| Familias | Cómo cuidamos los datos | Preguntas de familias | Transparencia y consentimiento |
| Investigadores | Proponer colaboración | Ver marco de investigación | Un protocolo para aprender juntos |

---

## 9. Copy propuesto

### 9.1 Hero

**Eyebrow:** Observación docente, evidencia y coordinación

**H1:**  
Las señales están.  
El desafío es coordinarlas.

**Subhead:**  
Mehmiro convierte la observación de clase en evidencia revisada y una visión institucional del progreso. Sin reemplazar tu criterio ni sumar carga administrativa.

**CTAs:**  
- Probala y sumá recompensas  
- Para escuelas: agendar diagnóstico

**Value props:**  
- La IA propone; el docente decide  
- WhatsApp para observar; Google para login, Calendar y Gmail  
- Perfil estudiantil con evidencia aceptada  
- Sin sumar carga administrativa

**Selector de rol:**  
Soy docente · Soy directivo · Soy familia · Investigo o colaboro

### 9.2 Problema

**Badge:** El problema

**H2:** La información existe. El desafío es que llegue a tiempo.

**Body:**  
Un alumno deja de participar, se queda atrás, falta o se aísla. El docente lo ve. Pero la señal queda en un cuaderno, un formulario, una planilla o un comentario de pasillo. Cuando el equipo pedagógico reconstruye el panorama, el apoyo suele llegar tarde.

**Tarjetas:**  
1. **Señales dispersas** — Cada docente registra a su manera; la información no se encuentra.  
2. **Contexto fragmentado** — El historial se reconstruye a mano y no siempre llega a tiempo al equipo.  
3. **Apoyo tardío** — Se actúa cuando la dificultad ya es grave; muchos estudiantes esperan.  
4. **Carga innecesaria** — Pedir reportes extra a docentes agota la adopción y no resuelve el problema.

**Cierre:**  
El cuello de botella no es la falta de datos. Es la falta de un sistema que los convierta en acción coordinada.

### 9.3 Por qué ahora

**H2:** Por qué ahora

- **La voz ya es una interfaz.** Grabar 30 segundos es más realista que completar otro formulario.  
- **La IA ya interpreta contexto.** Transcribe, estructura y relaciona señales con el historial.  
- **Los registros ya son digitales.** Las escuelas ya tienen datos; el desafío es conectarlos y actuar.

**Guardrail:** La tecnología no reemplaza el juicio pedagógico: lo hace visible y coordinable.

### 9.4 Cómo funciona

**H2:** Así funciona Mehmiro

1. **El docente responde por WhatsApp.** Al terminar la clase, envía un texto o una nota de voz desde el canal configurado por la institución.  
2. **Mehmiro analiza la clase.** Transcribe el audio de forma efímera, identifica a los estudiantes mencionados y extrae la evidencia relevante.  
3. **El docente revisa en la app.** Confirma, corrige o descarta estudiantes y sugerencias antes de que se guarde cualquier registro.  
4. **La evidencia queda disponible.** El historial y el perfil institucional permiten acompañar al estudiante con contexto, sin perder la autoría docente.

**Nota:** La IA propone; el docente valida. Nada se guarda sin confirmación humana.

### 9.5 Paneles por público

**Docentes — 30 segundos que no se pierden**  
Respondé por WhatsApp con texto o audio. Recibí un análisis de clase y sugerencias para revisar. Editá, aceptá o descartá. Vos decidís qué se guarda.  
**CTA:** Probar con mi clase

**Directivos — De señales sueltas a una visión de conjunto**  
Perfil estudiantil con evidencia aceptada, cobertura y contexto entre materias. Adopción, roles, permisos y trazabilidad.  
**CTA:** Diseñar un piloto en mi escuela

**Familias y estudiantes — Más contexto, menos etiquetas**  
Qué se registra, quién lo ve y para qué. La IA no decide: el equipo humano revisa. La escuela define qué comparte con cada familia. Derechos de acceso, rectificación y eliminación.  
**CTA:** Cómo cuidamos los datos

**Pedagogos, investigadores y alianzas — Aprender juntos**  
Marco pedagógico y teoría de cambio explícitos. Pilotos con medición de adopción, coordinación y experiencia. Ética, consentimiento y gobernanza de datos. Reconocimiento IRCAI 2025 y ecosistema de investigación.  
**CTA:** Proponer una colaboración

### 9.6 FAQ propuesta

1. **¿Mehmiro reemplaza mi criterio docente?**  
   No. La IA organiza y sugiere; vos revisás, ajustás y decidís. El equipo de apoyo recibe contexto, no un veredicto automático.

2. **¿Cómo registra el docente?**  
   Responde por WhatsApp con texto o audio después de clase, o registra la observación en la app. Mehmiro transcribe el audio de forma efímera y devuelve un análisis de clase; el docente revisa en la app.

3. **¿Qué ve la dirección?**  
   Un perfil estudiantil compuesto con evidencia aceptada, cobertura y contexto entre materias. No ve borradores, notas privadas ni sugerencias de IA sin revisar.

4. **¿Qué ven las familias?**  
   Hoy no hay un portal de familias: la escuela define qué información comparte. Mehmiro no expone datos a terceros y respeta los derechos de acceso, rectificación y eliminación.

5. **¿Cómo se mide el impacto?**  
   Empezamos por adopción docente, uso sostenido, satisfacción del equipo directivo y capacidad de revisión. El aprendizaje se evalúa con la escuela en el mediano plazo; no afirmamos que el software solo lo mejore.

6. **¿Qué evidencia tienen?**  
   Selección IRCAI 2025, pilotos con escuelas y un marco basado en investigación. Estamos diseñando evaluaciones con protocolo y ética; publicaremos resultados, no promesas.

7. **¿Cómo protegen los datos de menores?**  
   Los datos son de la institución; el acceso se controla por roles y membresías, con aislamiento por institución. Según la política de privacidad, no se usan para entrenar modelos fuera del servicio. Revisar los textos legales antes de publicar absolutos.

8. **¿Se integra con nuestro sistema?**  
   Sí: WhatsApp para observaciones (según configuración de la institución) y Google para login, Calendar y Gmail/Workspace. Si tu escuela usa otro canal, lo evaluamos durante el piloto para integrarlo.

9. **¿Cuánto cuesta?**  
   Plan docente gratuito y planes institucionales según tamaño y acompañamiento. [Link a precios, si existe.]

10. **¿Cuánto tarda la implementación?**  
    Onboarding guiado; primeros registros en minutos, piloto institucional en [X] semanas.

> Las respuestas 9 y 10 dependen de la verdad de producto/precios. No publicarlas hasta confirmarlas.

### 9.7 Navegación y footer

- Reemplazar “Aprendé” por “Cómo funciona” o “Tutoriales”.
- Agregar “Para escuelas”, “Familias”, “Investigación” y “Embajadores”.
- Footer: “Para docentes” (no “Para educadores”), “Para escuelas”, “Familias”, “Investigación”, “Embajadores”.
- Docs: `https://docs.mehmiro.com`.
- CTA de header: “Probala”; en páginas de escuela/familia/investigación, reemplazar por el CTA del público.

### 9.8 Programa de embajadores

**Nombre interno:** Programa de Embajadores Mehmiro.  
**Objetivo:** que el docente no solo pruebe, sino que abra la puerta de su escuela.

**Mecánica:**

1. **Probá con tu clase.** El docente usa Mehmiro con sus estudiantes.
2. **Compartí tu experiencia.** Muestra cómo lo usa y qué le ahorra.
3. **La escuela avanza.** Agenda una demo o empieza un piloto.
4. **Recibí una recompensa.** Se define con cada escuela antes de empezar.

**Copy para la sección:**

> **Programa de embajadores**  
> **Tu prueba puede abrir una puerta**  
> Probá Mehmiro con tu clase. Compartilo con tu escuela. Si tu institución agenda una demo o adopta Mehmiro, recibís una recompensa.  
> [Quiero ser embajador] [Probala]

**Reglas para que no se vuelva un incentivo vacío:**

- La recompensa se activa cuando la escuela **agenda una demo calificada o empieza un piloto**, no solo cuando el docente se registra.
- Definir monto/formato por país y por escuela; comunicarlo antes de empezar.
- Evitar que el docente presione a la escuela: el programa es una invitación, no una cuota.
- Medir: docentes que prueban, docentes que refieren, escuelas que agendan, escuelas que adoptan, recompensas entregadas.

**Ejemplos de recompensa (a definir):** formación paga, recursos para el aula, gift card, descuento en el plan personal, reconocimiento público, acceso anticipado a funciones. No prometer un monto hasta tener el modelo económico.

---

## 10. Plan de implementación

### P0 — Esta semana: credibilidad y metadatos

1. Crear un **registro de claims** (planilla o markdown) con cada afirmación pública, fuente, fecha, dueño y estado. Empezar por los claims de la sección 7.1.
2. **Hecho:** ocultar (no borrar) los números/testimonios no verificables de la home, About, Community y Learn con `CONTENT_FLAGS.showSocialProof = false`. El copy sigue en i18n.
3. **Hecho:** cambiar el CTA a “Probala y sumá recompensas” / “Probala” y agregar el programa de embajadores.
4. **Hecho:** corregir `index.html`: título, description, OG/Twitter, canonical, `og:url`, `site_name`, `locale`, `theme-color`.
5. **Hecho:** crear la imagen OG 1200×630 ([`public/og-mehmiro.png`](../public/og-mehmiro.png)); falta probarla en WhatsApp/LinkedIn.
6. **Hecho:** el toggle navega entre `/` y `/en`; `useDocumentMetadata` actualiza metadatos por ruta y el build genera HTML estático para `/en` y las páginas de audiencia.
7. **Hecho:** `public/sitemap.xml` + `Sitemap:` en `robots.txt`.
8. Corregir el error de la última FAQ y el enlace `http://docs` a `https://`. **Hecho:** la FAQ se reescribió y se agregó integraciones.
9. Agregar `noindex` en NotFound.

### P1 — 2/3 semanas: narrativa y públicos

1. **Hecho:** reescribir hero y problema con el relato sistémico; “Por qué ahora” y “Cómo funciona” ya están en la home.
2. **Hecho:** agregar selector de rol y los cuatro paneles en la home.
3. **Hecho:** crear `/para-docentes`, `/para-escuelas`, `/para-familias` e `/investigacion`, con contenido bilingüe y metadatos por ruta.
4. **Parcial:** matriz de CTAs implementada en las páginas; unificar el CTA de embajadores y evitar que se repita en cada sección.
5. **Parcial:** FAQ con 8 preguntas; falta segmentación por público (tabs/acordeón).
6. **Hecho:** actualizar nav/footer/mobile.
7. Cambiar la foto del hero por una imagen real de aula/docente-estudiante o un visual del flujo de voz.
8. **Hecho:** actualizar `AGENTS.md`.

### P2 — 1/2 meses: prueba, documentación y escala

1. **Hecho:** prerender de `/en`, las páginas de audiencia, las rutas de marketing y los cursos (`/learn/:id` y `/en/learn/:id`) para todos los IDs conocidos.
2. Rehacer la sección de investigación de docs: marco, teoría de cambio, protocolo, ética, citas reales; quitar el RCT no verificable.
3. Corregir sitemap, FAQ de seguridad e integraciones de docs.
4. Publicar una página de gobernanza de datos y derechos de estudiantes/familias.
5. Diseñar el piloto institucional con métricas: adopción, satisfacción, tiempo a primera intervención, casos priorizados, carga docente.
6. Medir y recién entonces publicar resultados; alinear testimonios y casos.

---

## 11. Decisiones confirmadas y pendientes

### Confirmadas

1. **Cuatro públicos.** Docentes, directivos-dueños, familias-estudiantes y pedagogos-investigadores-alianzas.
2. **Integraciones.** WhatsApp para observaciones (según configuración de la institución) y Google login/Calendar/Gmail; si una escuela usa otro canal, se evalúa y se integra. No prometer “imposible”.
3. **Métricas.** Ocultar, no borrar; reactivar cuando estén respaldadas. `CONTENT_FLAGS.showSocialProof = false`.
4. **Organizaciones anteriores.** Fuera de la comunicación pública. No mencionar alianzas que ya no existen; apoyarse en Mehmiro y en IRCAI.
5. **Inglés.** Implementado con rutas `/en`, toggle de idioma y HTML estático para todas las rutas de marketing.
6. **Evaluación.** No decir “evalúa” ni “no evalúa”. Decir “identifica señales”, “ofrece opciones”, “sugerencias personalizadas”; el docente revisa y decide.
7. **Recompensas.** Se activan por demo calificada o piloto, no por registro. Formato y monto a definir por escuela/país.
8. **Aprobación de claims.** Marketing, producto y legal deben firmar el registro antes de publicar.

### Pendientes

1. **Precios/planes.** Support menciona planes gratuitos y pagos, pero no hay página de precios. Definir antes de escribir CTAs institucionales.
2. **Datos reales.** Número de docentes/escuelas, satisfacción, observaciones y casos. Sin fuente/fecha/N, no reactivar métricas.
3. **Texto legal de recompensas.** Bases y condiciones del programa de embajadores, especialmente si hay menores o instituciones públicas.
4. **Documentación.** Reconstruir docs.mehmiro.com; no usarla como fuente de verdad hasta auditarla.
5. **Prerender / rutas por público.** Depende de la decisión de stack para marketing.
6. **Testimonios.** Solo reales, autorizados y con contexto; si no, mantener ocultos.

---

## 12. Anexo: fuentes y evidencia

- Landing local: [`index.html`](../index.html), [`src/App.tsx`](../src/App.tsx), [`src/components/HeroSection.tsx`](../src/components/HeroSection.tsx), [`src/components/ProblemSection.tsx`](../src/components/ProblemSection.tsx), [`src/components/SolutionSection.tsx`](../src/components/SolutionSection.tsx), [`src/components/AmbassadorSection.tsx`](../src/components/AmbassadorSection.tsx), [`src/components/SocialProofSection.tsx`](../src/components/SocialProofSection.tsx), [`src/components/FAQSection.tsx`](../src/components/FAQSection.tsx), [`src/components/CTASection/index.tsx`](../src/components/CTASection/index.tsx), [`src/config/contentFlags.ts`](../src/config/contentFlags.ts), [`src/i18n/locales/es-AR.json`](../src/i18n/locales/es-AR.json).
- Configuración de idioma: [`src/i18n/index.ts`](../src/i18n/index.ts#L21-L37).
- Documentación interna: [`AGENTS.md`](../AGENTS.md), [`README.md`](../README.md).
- Sitio en producción: https://mehmiro.com (verificado: mismo contenido que `main`).
- Documentación: https://docs.mehmiro.com, https://docs.mehmiro.com/investigacion/research-intro, https://docs.mehmiro.com/investigacion/methodology/formative-feedback-methodology, https://docs.mehmiro.com/investigacion/papers/realtime-assessment-impact, https://docs.mehmiro.com/guia/guides/frequently-asked-questions. **No usar como fuente de verdad: está abandonada.**
- IRCAI: https://ircai.org/top100/entry/mehmiro/.
- Artículo del fundador: https://es.linkedin.com/pulse/desarrollos-emocionantes-en-la-educaci%C3%B3n-con-ia-gentile-montes-r3xrf.
- Verificación técnica: `npm run build` OK; `npm run lint` OK (6 warnings de fast-refresh en componentes shadcn/ui); home verificada en desktop y mobile sin overflow; `sitemap.xml` en producción 404; `robots.txt` sin sitemap.

---

**Conclusión final:** el pitch es más ambicioso y más creíble que la landing. La landing actual no está mal escrita: está escrita para otro producto y otro comprador. La oportunidad es conservar la calidez y la voz docente, pero convertir la página en el relato de **un sistema que conecta señales, equipo y apoyo oportuno**, con pruebas honestas y un camino claro para cada uno de los cuatro públicos.
