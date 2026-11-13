import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SolutionSectionProps {
  id?: string;
}

export const SolutionSection = ({
  id = "solution-section",
}: SolutionSectionProps) => {
  const { t } = useTranslation();

  const steps = t("solution.steps", {
    returnObjects: true,
  }) as { title: string; description: string }[];

  return (
    <section id={id} className="education-section relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="section-eyebrow">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            {t("solution.badge")}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t("solution.title")}</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {t("solution.description")}
          </p>
        </div>

        <div className="solution-flow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="solution-step p-5 rounded-lg bg-card border border-border/50"
            >
              <div className="text-sm font-semibold text-primary mb-2">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          {t("solution.integrations")}
        </p>
      </div>
    </section>
  );
};
