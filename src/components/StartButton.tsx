import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface StartButtonProps {
  className?: string;
  variant?: "short" | "full";
  href?: string;
  label?: string;
}

export const StartButton = ({
  className = "",
  variant = "short",
  href = "https://app.mehmiro.com/onboarding",
  label,
}: StartButtonProps) => {
  const { t } = useTranslation();
  const buttonLabel = label ?? t(variant === "full" ? "cta.button" : "cta.buttonShort");

  return (
    <a
      href={href}
      className={cn("start-button", className)}
      aria-label={label ?? (variant === "short" ? t("cta.button") : undefined)}
    >
      {buttonLabel}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
};
