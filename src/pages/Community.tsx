import { useTranslation } from "react-i18next";
import { ArrowRight, Users } from "lucide-react";
import { AmbassadorSection } from "@/components/AmbassadorSection";
import { Footer } from "@/components/Footer";

const Community = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Users className="w-10 h-10 text-primary" aria-hidden="true" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("pages.community.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("pages.community.heroDescription")}
          </p>
        </div>
      </section>

      <section className="py-14 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
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
