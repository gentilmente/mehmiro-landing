import { useTranslation } from "react-i18next";
import { ArrowRight, Users } from "lucide-react";
import { AmbassadorSection } from "@/components/AmbassadorSection";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const Community = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <PageHero
        icon={Users}
        title={t("pages.community.title")}
        description={t("pages.community.heroDescription")}
      />

      <section className="py-14 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="brand-section-title text-2xl md:text-3xl mb-4">
            {t("pages.community.currentTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t("pages.community.currentDescription")}
          </p>
          <a href="#lead-capture" className="start-button">
            {t("pages.community.currentCta")}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <AmbassadorSection id="comunidad-embajadores" />

      <Footer />
    </div>
  );
};

export default Community;
