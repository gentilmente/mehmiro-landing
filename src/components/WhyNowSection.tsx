import { useTranslation } from "react-i18next";
import { Brain, Database, Mic } from "lucide-react";
import { StartButton } from "@/components/StartButton";

interface WhyNowSectionProps {
  id?: string;
}

export const WhyNowSection = ({ id = "por-que-ahora" }: WhyNowSectionProps) => {
  const { t } = useTranslation();
  const items = t("whyNow.items", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];
  const icons = [Mic, Brain, Database];

  return (
    <section id={id} className="education-section relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="section-eyebrow">
            <Mic size={16} aria-hidden="true" />
            {t("whyNow.badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            {t("whyNow.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {t("whyNow.description")}
          </p>
        </div>

        <div className="why-now-grid education-item-grid grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const Icon = icons[index] ?? Mic;
            return (
              <div
                key={item.title}
                className="education-item group relative p-6 rounded-2xl bg-card border border-border/50"
              >
                <div className="education-item-content relative z-10">
                  <div className="education-item-icon bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {t("whyNow.note")}
        </p>
        <div className="section-action">
          <StartButton />
        </div>
      </div>
    </section>
  );
};
