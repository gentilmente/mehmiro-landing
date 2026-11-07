import { useTranslation } from "react-i18next";
import { Gift, Megaphone, Users } from "lucide-react";
import { StartButton } from "@/components/StartButton";

interface AmbassadorSectionProps {
  id?: string;
}

export const AmbassadorSection = ({ id = "embajadores" }: AmbassadorSectionProps) => {
  const { t } = useTranslation();
  const steps = t("ambassador.steps", {
    returnObjects: true,
  }) as { title: string; description: string }[];
  const icons = [Users, Megaphone, Gift];

  return (
    <section id={id} className="education-section relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="section-eyebrow">
            <Gift size={16} aria-hidden="true" />
            {t("ambassador.badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            {t("ambassador.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {t("ambassador.description")}
          </p>
        </div>

        <div className="education-item-grid grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = icons[index] ?? Gift;
            return (
              <div
                key={step.title}
                className="education-item group relative p-6 rounded-2xl bg-card border border-border/50"
              >
                <div className="education-item-content relative z-10">
                  <div className="education-item-icon bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {t("ambassador.rewardNote")}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a href="#lead-capture" className="start-button">
              {t("ambassador.cta")}
            </a>
            <StartButton />
          </div>
        </div>
      </div>
    </section>
  );
};
