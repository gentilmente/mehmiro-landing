import { useTranslation } from "react-i18next";
import {
  GraduationCap,
  Heart,
  Lightbulb,
  Target,
  Users,
  Shield,
} from "lucide-react";
import { Footer } from "@/components/Footer";

const About = () => {
  const { t } = useTranslation();

  const values = t("pages.about.values", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const story = t("pages.about.story.paragraphs", {
    returnObjects: true,
  }) as string[];
  const stats = t("pages.about.stats", { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {t("pages.about.title")}
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            {t("pages.about.description")}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">
                {t("pages.about.mission.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("pages.about.mission.description")}
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">
                {t("pages.about.vision.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("pages.about.vision.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {values[0]?.title
              ? t("pages.about.valuesSection.title", {
                  defaultValue: "Nuestros Valores",
                })
              : t("pages.about.valuesSection.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl bg-card hover:shadow-lg transition-shadow"
              >
                {index === 0 && (
                  <GraduationCap className="w-10 h-10 mb-4 text-primary" />
                )}
                {index === 1 && (
                  <Heart className="w-10 h-10 mb-4 text-primary" />
                )}
                {index === 2 && (
                  <Shield className="w-10 h-10 mb-4 text-primary" />
                )}
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("pages.about.story.title")}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Big quote symbol */}
              <span className="absolute -top-4 -left-2 text-8xl font-serif text-primary/20 leading-none">
                "
              </span>

              <blockquote className="relative z-10 pt-8">
                <div className="space-y-6 text-xl md:text-2xl text-foreground leading-relaxed font-light italic font-serif">
                  {story.map((paragraph, index) => (
                    <p key={index} className={index > 0 ? "mt-6" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <footer className="mt-10 pt-6 border-t border-primary/20">
                  <cite className="not-italic flex justify-end items-start">
                    <div className="text-right">
                      <div className="font-semibold text-foreground">
                        {t("pages.about.story.author") || "Mehmiro team"}
                      </div>
                    </div>
                  </cite>
                </footer>
              </blockquote>

              {/* Closing quote symbol */}
              <span className="absolute -bottom-16 -right-2 text-8xl font-serif text-primary/20 leading-none">
                "
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
