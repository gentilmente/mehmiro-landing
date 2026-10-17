import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const StartButton = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <a href="https://app.mehmiro.com/onboarding" className={cn("start-button", className)}>
      {t("cta.button")}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
};
