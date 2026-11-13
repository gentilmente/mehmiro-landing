import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { useTranslation } from "react-i18next";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export interface AudienceSection {
  title: string;
  body: string;
  bullets?: string[];
}

interface AudiencePageProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  sections: AudienceSection[];
  note?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  visual?: ReactNode;
}

const isInternalRoute = (href: string) => href.startsWith("/");

const ActionLink = ({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary";
}) => {
  const className =
    variant === "primary"
      ? "start-button"
      : "inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-[3px_3px_0_hsl(var(--border)/.55)] transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary";

  if (isInternalRoute(href)) {
    return (
      <Link to={href} className={className}>
        {label}
        {variant === "primary" && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {label}
      {variant === "primary" && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </a>
  );
};

export const AudiencePage = ({
  icon: Icon,
  eyebrow,
  title,
  description,
  sections,
  note,
  primary,
  secondary,
  visual,
}: AudiencePageProps) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <header className="audience-hero">
        <div className="audience-hero-inner">
          <div className="audience-copy">
            <div className="audience-intro">
              <Link
                to="/"
                className="mb-8 flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {t("audiences.back")}
              </Link>

              <div className="section-eyebrow">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {eyebrow}
              </div>

              <h1>{title}</h1>
            </div>

            <div className="audience-body">
              <p className="audience-description">{description}</p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ActionLink href={primary.href} label={primary.label} variant="primary" />
                {secondary && (
                  <ActionLink href={secondary.href} label={secondary.label} variant="secondary" />
                )}
              </div>

              {note && <p className="audience-note">{note}</p>}
            </div>
          </div>

          {visual && (
            <Reveal className="audience-visual" delay={80}>
              {visual}
            </Reveal>
          )}
        </div>
      </header>

      <main className="audience-main">
        <div className="audience-sections">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 60}>
              <section className="audience-section-card">
                <span className="audience-section-index">0{index + 1}</span>
                <div className="audience-section-copy">
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="audience-bullets">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>
                          <span aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </main>

      <Reveal className="audience-closing-wrap">
        <section className="audience-closing">
          <div>
            <span className="audience-closing-eyebrow">{t("audiences.nextStep")}</span>
            <h2>{t("audiences.nextStepDescription")}</h2>
          </div>
          <ActionLink href={primary.href} label={primary.label} variant="primary" />
        </section>
      </Reveal>

      <Footer />
    </div>
  );
};
