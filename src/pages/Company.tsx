import { useTranslation } from "react-i18next";
import { ArrowUpRight, Building2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FounderSection } from "@/components/FounderSection";
import { PageHero } from "@/components/PageHero";
import { COMPANY } from "@/config/company";

const Company = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <PageHero
        icon={Building2}
        title={t("pages.company.title")}
        description={t("pages.company.heroDescription")}
      >
        <a
          href={COMPANY.app.login}
          target="_blank"
          rel="noreferrer"
          className="start-button"
        >
          {t("pages.company.appCta")}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </PageHero>

      <ProductShowcase id="producto" />
      <FounderSection id="equipo" />

      <Footer />
    </div>
  );
};

export default Company;
