import { StartButton } from "@/components/StartButton";
import {
  Sparkles,
  Eye,
  Brain,
  TrendingUp,
  Shield,
  Heart,
  Target,
  Zap,
} from "lucide-react";
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
  const featureIcons = [Eye, Brain, Target, TrendingUp, Shield, Heart];
  const features = featureItems.map((item, index) => ({
    ...item,
    icon: featureIcons[index],
  }));

  const stats = t("solution.stats", {
    returnObjects: true,
  }) as { value: string; label: string }[];

  return (
    <section
      id={id}
      className="education-section relative"
    >

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>{t("solution.badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {t("solution.title")}
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {t("solution.description")}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border/50"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="education-item-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="education-item group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
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

        {/* Value proposition */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium">
              {t("solution.valueProposition")}
            </span>
          </div>
        </div>
        <div className="section-action"><StartButton /></div>
      </div>
    </section>
  );
};
