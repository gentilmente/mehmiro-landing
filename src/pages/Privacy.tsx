import { useTranslation } from "react-i18next";
import { Shield, Lock, Eye, Database, Globe } from "lucide-react";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  const { t } = useTranslation();

  const sections = t("pages.privacy.sections", {
    returnObjects: true,
  }) as Array<{
    title: string;
    content: string;
  }>;

  const highlights = t("pages.privacy.highlights", {
    returnObjects: true,
  }) as Array<{
    title: string;
    description: string;
  }>;

  const iconComponents = [Shield, Lock, Eye, Database];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("pages.privacy.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("pages.privacy.description")}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {highlights.map((item, index) => {
              const IconComponent = iconComponents[index];
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="border rounded-xl bg-card p-6 md:p-8">
                <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* compliance Badge */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Globe className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">
            {t("pages.privacy.compliance.title")}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("pages.privacy.compliance.description")}
          </p>
        </div>
      </section>

      {/* Last Update */}
      <section className="py-8 px-6">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>{t("pages.privacy.lastUpdate")}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
