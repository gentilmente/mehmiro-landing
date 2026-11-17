import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SearchX } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <PageHero
        icon={SearchX}
        title={t("notFound.title")}
        description={t("notFound.message")}
      >
        <a href="/" className="start-button">
          {t("notFound.action")}
        </a>
      </PageHero>
    </div>
  );
};

export default NotFound;
