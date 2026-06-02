import { useTranslation } from "react-i18next";
import {
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  FileText,
  Video,
  Clock,
  ArrowRight,
  CheckCircle,
  BookOpen,
} from "lucide-react";
import { Footer } from "@/components/Footer";

const Support = () => {
  const { t } = useTranslation();

  const faqCategories = t("pages.support.faqCategories", { returnObjects: true }) as Array<{
    category: string;
    questions: Array<{ q: string; a: string }>;
  }>;

  const contactOptions = t("pages.support.contactOptions", { returnObjects: true }) as Array<{
    icon: typeof MessageCircle;
    title: string;
    description: string;
    availability: string;
    action: string;
  }>;

  const resources = t("pages.support.resources", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    icon: typeof Clock;
    type: string;
  }>;

  const resourceIcons = [Clock, BookOpen, Video, HelpCircle];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("pages.support.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("pages.support.heroDescription")}
          </p>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => {
              const IconComponent = [MessageCircle, Mail, Phone][index];
              return (
                <div
                  key={index}
                  className="p-6 border rounded-xl bg-card hover:shadow-lg transition-all text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {option.availability}
                  </p>
                  <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    {option.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">
            {t("pages.support.resourcesTitle")}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("pages.support.resourcesDescription")}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const IconComponent = resourceIcons[index];
              return (
                <div
                  key={index}
                  className="p-6 border rounded-xl bg-card hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                  <span className="inline-block mt-3 text-xs text-primary font-medium">
                    {resource.type}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("pages.support.faqTitle")}
          </h2>

          <div className="space-y-8">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-lg font-bold mb-4 text-primary">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((item, qIndex) => (
                    <details
                      key={qIndex}
                      className="group border rounded-xl bg-card overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                        <span className="font-medium pr-4">{item.q}</span>
                        <span className="transform group-open:rotate-180 transition-transform">
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </span>
                      </summary>
                      <div className="px-4 pb-4 text-muted-foreground">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            {t("pages.support.stillNeedHelp.title")}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t("pages.support.stillNeedHelp.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors">
              {t("pages.support.stillNeedHelp.button")}
            </button>
            <button className="px-6 py-3 border border-white/30 rounded-lg font-medium hover:bg-white/10 transition-colors">
              {t("pages.support.stillNeedHelp.secondaryButton")}
            </button>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {(t("pages.support.responseTimes", { returnObjects: true }) as Array<{
              value: string;
              label: string;
            }>).map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
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

export default Support;
