import { Sparkles, Eye, TrendingUp, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SolutionSectionProps {
  id?: string;
}

export const SolutionSection = ({
  id = "solution-section",
}: SolutionSectionProps) => {
  const { t } = useTranslation();

  const featureItems = t("solution.features", {
    returnObjects: true,
  }) as { title: string; description: string }[];
  const featureIcons = [Eye, TrendingUp, Shield];
  const features = featureItems.map((item, index) => ({
    ...item,
    icon: featureIcons[index],
  }));

  const steps = t("solution.steps", {
    returnObjects: true,
  }) as { title: string; description: string }[];

  return (
    <section
      id={id}
      className="education-section relative"
    >

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="section-eyebrow">
            <Sparkles className="w-4 h-4" />
            <span>{t("solution.badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">
              {t("solution.title")}
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {t("solution.description")}
          </p>
        </div>

        {/* Product flow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="p-5 rounded-lg bg-card border border-border/50"
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

        {/* Features Grid */}
        <div className="education-item-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="education-item group relative p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="education-item-content relative z-10">
                <div className="education-item-icon bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Integrations */}
        <p className="mt-5 text-center text-sm text-muted-foreground">
          {t("solution.integrations")}
        </p>

      </div>
    </section>
  );
};
