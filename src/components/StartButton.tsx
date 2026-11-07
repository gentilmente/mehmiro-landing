import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface StartButtonProps {
  className?: string;
  variant?: "short" | "full";
}

export const StartButton = ({
  className = "",
  variant = "short",
}: StartButtonProps) => {
  const { t } = useTranslation();
  const label = t(variant === "full" ? "cta.button" : "cta.buttonShort");

  return (
    <a
      href="https://app.mehmiro.com/onboarding"
      className={cn("start-button", className)}
      aria-label={variant === "short" ? t("cta.button") : undefined}
    >
      {label}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
};
