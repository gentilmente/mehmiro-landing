import { useTranslation } from "react-i18next";
import {
  GraduationCap,
  BookOpen,
  Lightbulb,
  Video,
  Download,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target,
  Star,
} from "lucide-react";
import { Footer } from "@/components/Footer";

const ForEducators = () => {
  const { t } = useTranslation();

  const guides = t("pages.forEducators.guides", {
    returnObjects: true,
  }) as Array<{
    title: string;
    description: string;
    level: string;
    duration: string;
  }>;

  const tips = t("pages.forEducators.tips", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const quickStats = t("pages.forEducators.quickStats", {
    returnObjects: true,
  }) as Array<{
    value: string;
    label: string;
  }>;

  const videoItems = t("pages.forEducators.videoSection.items", {
    returnObjects: true,
  }) as string[];

  const downloads = t("pages.forEducators.downloads.items", {
    returnObjects: true,
  }) as Array<{
    title: string;
    description: string;
  }>;

  const guideIcons = [Clock, BookOpen, Target, Lightbulb, Users, GraduationCap];
  const downloadIcons = [BookOpen, Target, Users];

  const getLevelColor = (level: string) => {
    if (level === "Principiante" || level === "Beginner")
      return "bg-green-100 text-green-700";
    if (level === "Intermedio" || level === "Intermediate")
      return "bg-yellow-100 text-yellow-700";
    if (level === "Avanzado" || level === "Advanced")
      return "bg-red-100 text-red-700";
    return "bg-blue-100 text-blue-700";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <GraduationCap className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("pages.forEducators.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("pages.forEducators.heroDescription")}
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {quickStats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("pages.forEducators.guidesTitle")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => {
              const IconComponent = guideIcons[index];
              return (
                <div
                  key={index}
                  className="border rounded-xl bg-card hover:shadow-lg transition-all p-6 group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${getLevelColor(guide.level)}`}
                    >
                      {guide.level}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {guide.duration}
                    </span>
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {guide.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                {t("pages.forEducators.videoSection.title")}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t("pages.forEducators.videoSection.description")}
              </p>
              <ul className="space-y-3 mb-6">
                {videoItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                {t("pages.forEducators.videoSection.button")}{" "}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Video className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {t("pages.forEducators.videoSection.featured")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t("pages.forEducators.tipsTitle")}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("pages.forEducators.tipsDescription")}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="p-6 border rounded-xl bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Download className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4">
            {t("pages.forEducators.downloads.title")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("pages.forEducators.downloads.description")}
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {downloads.map((item, index) => {
              const IconComponent = downloadIcons[index];
              return (
                <div
                  key={index}
                  className="p-4 border rounded-lg bg-card hover:shadow transition-all cursor-pointer"
                >
                  <IconComponent className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t("pages.forEducators.cta.title")}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t("pages.forEducators.cta.description")}
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium bg-white text-primary hover:bg-white/90 rounded-lg transition-colors"
          >
            {t("pages.forEducators.cta.button")}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForEducators;
