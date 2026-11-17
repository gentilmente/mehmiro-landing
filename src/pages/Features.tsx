import { useTranslation } from "react-i18next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { COMPANY } from "@/config/company";

const Features = () => {
  const { t } = useTranslation();

  const items = t("pages.features.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    details: string[];
  }>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("pages.features.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("pages.features.description")}
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/60 bg-card p-6"
              >
                <CheckCircle2
                  className="mb-4 h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t("pages.features.ctaTitle")}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {t("pages.features.ctaDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={COMPANY.app.login}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-primary transition-colors hover:bg-white/90"
            >
              {t("pages.features.ctaButton")}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/about#equipo"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-medium transition-colors hover:bg-white/10"
            >
              {t("pages.features.ctaSecondary")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
