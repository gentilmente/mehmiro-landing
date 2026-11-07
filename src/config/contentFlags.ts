/**
 * Flags de contenido público.
 *
 * `showSocialProof` oculta métricas y testimonios que todavía no tienen
 * respaldo verificable. El copy queda en i18n para poder reactivarlo sin
 * reescribirlo cuando los datos estén disponibles.
 */
export const CONTENT_FLAGS = {
  showSocialProof: false,
} as const;
