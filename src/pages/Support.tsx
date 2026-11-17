import { useTranslation } from "react-i18next";
import { ArrowRight, BookOpen, HelpCircle, Mail } from "lucide-react";
import { Footer } from "@/components/Footer";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { COMPANY } from "@/config/company";

const Support = () => {
  const { t } = useTranslation();

  const faqCategories = t("pages.support.faqCategories", {
    returnObjects: true,
  }) as Array<{
    category: string;
    questions: Array<{ q: string; a: string }>;
  }>;

  const resources = t("pages.support.resourceLinks", {
    returnObjects: true,
  }) as Array<{
    title: string;
    description: string;
    url: string;
    type: string;
  }>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="w-10 h-10 text-primary" aria-hidden="true" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("pages.support.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("pages.support.heroDescription")}
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-bold">
            {t("pages.support.contactTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            {t("pages.support.contactDescription")}
          </p>
          <a
            href={`mailto:${COMPANY.supportEmail}`}
            className="start-button mt-6"
          >
            {t("pages.support.emailCta")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            {t("pages.support.responseNote")}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-center mb-4">
            {t("pages.support.resourcesTitle")}
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t("pages.support.resourcesDescription")}
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.url}
                to={resource.url}
                className="group rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
              >
                <BookOpen
                  className="mb-4 h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                <h3 className="font-semibold group-hover:text-primary">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {resource.description}
                </p>
                <span className="mt-4 inline-block text-xs font-medium text-primary">
                  {resource.type}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            {t("pages.support.faqTitle")}
          </h2>

          <div className="space-y-8">
            {faqCategories.map((category) => (
              <div key={category.category}>
                <h3 className="text-lg font-bold mb-4 text-primary">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((item) => (
                    <details
                      key={item.q}
                      className="group border rounded-xl bg-card overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                        <span className="font-medium pr-4">{item.q}</span>
                        <span className="transform group-open:rotate-180 transition-transform">
                          <ArrowRight
                            className="w-4 h-4 text-muted-foreground"
                            aria-hidden="true"
                          />
                        </span>
                      </summary>
                      <div className="px-4 pb-4 text-muted-foreground">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            {t("pages.support.stillNeedHelp.title")}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t("pages.support.stillNeedHelp.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${COMPANY.supportEmail}`}
              className="px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              {t("pages.support.stillNeedHelp.button")}
            </a>
            <Link
              to="/learn"
              className="px-6 py-3 border border-white/30 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              {t("pages.support.stillNeedHelp.secondaryButton")}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
