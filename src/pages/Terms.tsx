import { useTranslation } from "react-i18next";
import { FileText, Shield, Globe } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const Terms = () => {
  const { t } = useTranslation();

  const sections = t("pages.terms.sections", { returnObjects: true }) as Array<{
    title: string;
    content: string;
  }>;

  const highlights = t("pages.terms.highlights", {
    returnObjects: true,
  }) as Array<{
    title: string;
    description: string;
  }>;

  const iconComponents = [Shield, Globe, FileText];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <PageHero
        icon={FileText}
        title={t("pages.terms.title")}
        description={t("pages.terms.description")}
      />

      {/* Quick Summary */}
      <section className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {highlights.map((item, index) => {
              const IconComponent = iconComponents[index];
              return (
                <div key={index}>
                  <IconComponent className="w-8 h-8 mx-auto mb-2 opacity-90" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="border rounded-xl bg-card p-6 md:p-8">
                <h2 className="brand-section-title text-lg mb-4">{section.title}</h2>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed text-sm md:text-base">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Last Update */}
      <section className="py-8 px-6 bg-muted/30">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>{t("pages.terms.lastUpdate")}</p>
          <p className="mt-2">
            <a href="/privacy" className="text-primary hover:underline">
              {t("pages.terms.privacyLink")}
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
