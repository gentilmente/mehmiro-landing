import { useTranslation } from "react-i18next";
import { ArrowUpRight, BookOpen, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { COMPANY } from "@/config/company";

const ForEducators = () => {
  const { t } = useTranslation();

  const sections = t("pages.forEducators.sections", {
    returnObjects: true,
  }) as Array<{
    title: string;
    description: string;
    url: string;
    label: string;
  }>;

  const steps = t("pages.forEducators.steps", {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <BookOpen className="w-10 h-10 text-primary" aria-hidden="true" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("pages.forEducators.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("pages.forEducators.heroDescription")}
          </p>
        </div>
      </section>

      <section className="py-14 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2">
            {sections.map((section) => (
              <Link
                key={section.url}
                to={section.url}
                className="group rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
              >
                <CheckCircle2
                  className="mb-4 h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                <h2 className="text-xl font-semibold group-hover:text-primary">
                  {section.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {section.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            {t("pages.forEducators.howTitle")}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-border/60 bg-card p-6"
              >
                <span className="text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t("pages.forEducators.ctaTitle")}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {t("pages.forEducators.ctaDescription")}
          </p>
          <a
            href={COMPANY.app.login}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-primary transition-colors hover:bg-white/90"
          >
            {t("pages.forEducators.ctaButton")}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForEducators;
