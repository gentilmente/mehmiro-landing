import { StartButton } from "@/components/StartButton";
import { Eye, Clock, AlertCircle, Heart, Brain } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ProblemSectionProps {
  id?: string;
}

export const ProblemSection = ({
  id = "problem-section",
}: ProblemSectionProps) => {
  const { t } = useTranslation();

  const problemItems = t("problem.items", {
    returnObjects: true,
  }) as { title: string; description: string }[];
  const icons = [Eye, Clock, AlertCircle, Brain];
  const problems = problemItems.map((item, index) => ({
    ...item,
    icon: icons[index],
  }));

  return (
    <section
      id={id}
      className="education-section relative"
    >

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Heart className="w-4 h-4" />
            <span>{t("problem.badge")}</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {t("problem.title")}
            </span>
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
          >
            {t("problem.description")}
          </p>
        </div>

        {/* Problem Cards */}
        <div className="education-item-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="education-item group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="education-item-content relative z-10">
                <div className="education-item-icon bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional close */}
        <div className="mt-8 text-center">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            <span className="font-medium text-foreground">
              {t("problem.closing.lead")}
            </span>{" "}
            {t("problem.closing.rest")}
          </p>
        </div>
        <div className="section-action"><StartButton /></div>
      </div>
    </section>
  );
};
