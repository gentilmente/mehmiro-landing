import { ArrowUpRight, CheckCircle2, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { COMPANY } from "@/config/company";
import { LocalizedLink as Link } from "@/components/LocalizedLink";

interface ProductShowcaseProps {
  id?: string;
}

export const ProductShowcase = ({ id = "producto" }: ProductShowcaseProps) => {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className="product-showcase border-y border-border/50 bg-muted/30 px-6 py-16 sm:py-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <div className="section-eyebrow">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            {t("product.eyebrow")}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              {t("product.title")}
            </h2>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              {t("product.liveBadge")}
            </span>
          </div>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("product.description")}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <figure className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
            <div className="flex h-[430px] items-start justify-center overflow-hidden bg-background p-3">
              <img
                src="/product-onboarding.webp"
                alt={t("product.screens.onboarding.alt")}
                className="h-full w-full rounded-xl object-contain object-top"
                loading="lazy"
              />
            </div>
            <figcaption className="border-t border-border/50 p-5">
              <h3 className="text-lg font-semibold">
                {t("product.screens.onboarding.title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("product.screens.onboarding.description")}
              </p>
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
            <div className="flex h-[430px] items-start justify-center overflow-hidden bg-background p-3">
              <img
                src="/product-student-profile.webp"
                alt={t("product.screens.profile.alt")}
                className="h-full w-full rounded-xl object-contain object-top"
                loading="lazy"
              />
            </div>
            <figcaption className="border-t border-border/50 p-5">
              <h3 className="text-lg font-semibold">
                {t("product.screens.profile.title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("product.screens.profile.description")}
              </p>
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
            <div className="relative flex h-[430px] items-center justify-center overflow-hidden bg-black">
              <video
                className="h-full w-full object-contain"
                controls
                playsInline
                preload="metadata"
                poster="/product-onboarding.webp"
                aria-label={t("product.screens.video.title")}
              >
                <source src="/product-demo.mp4" type="video/mp4" />
              </video>
              <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
                <Play className="h-3 w-3" fill="currentColor" aria-hidden="true" />
                {t("product.screens.video.title")}
              </span>
            </div>
            <figcaption className="border-t border-border/50 p-5">
              <h3 className="text-lg font-semibold">
                {t("product.screens.video.title")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("product.screens.video.description")}
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <a
            href={COMPANY.app.login}
            className="start-button"
            target="_blank"
            rel="noreferrer"
          >
            {t("product.cta")}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link to="/#mehmiro" className="text-link">
            {t("product.ctaSecondary")}
          </Link>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {t("product.demoNote")}
        </p>
        <p className="mt-2 text-xs text-muted-foreground/80">
          {t("product.disclaimer")}
        </p>
      </div>
    </section>
  );
};
