import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { useTranslation } from "react-i18next";
import { Footer } from "@/components/Footer";

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
      : "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary";

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
}: AudiencePageProps) => {
  const { t } = useTranslation();

  return (
  <div className="min-h-screen bg-background">
    <header className="px-6 pt-32 pb-12">
      <div className="mx-auto max-w-4xl">
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

        <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ActionLink href={primary.href} label={primary.label} variant="primary" />
          {secondary && (
            <ActionLink href={secondary.href} label={secondary.label} variant="secondary" />
          )}
        </div>

        {note && (
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {note}
          </p>
        )}
      </div>
    </header>

    <main className="px-6 pb-20">
      <div className="mx-auto max-w-4xl space-y-5">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-3xl border border-border/60 bg-card p-6 md:p-8"
          >
            <h2 className="mb-3 font-serif text-2xl leading-tight text-foreground md:text-3xl">
              {section.title}
            </h2>
            <p className="leading-relaxed text-muted-foreground">{section.body}</p>
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </main>

    <Footer />
  </div>
  );
};
