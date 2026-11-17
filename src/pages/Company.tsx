import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FounderSection } from "@/components/FounderSection";
import { COMPANY } from "@/config/company";

const Company = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            {t("pages.company.title")}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t("pages.company.heroDescription")}
          </p>
          <a
            href={COMPANY.app.login}
            target="_blank"
            rel="noreferrer"
            className="start-button mt-8"
          >
            {t("pages.company.appCta")}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <ProductShowcase id="producto" />
      <FounderSection id="equipo" />

      <Footer />
    </div>
  );
};

export default Company;
