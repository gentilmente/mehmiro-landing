import { useTranslation } from "react-i18next";
import {
  Users,
  MessageCircle,
  Calendar,
  Heart,
  HandHeart,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { Footer } from "@/components/Footer";

const Community = () => {
  const { t } = useTranslation();

  const events = t("pages.community.eventList", {
    returnObjects: true,
  }) as Array<{
    id: number;
    title: string;
    description: string;
    date: string;
    type: string;
    location: string;
    participants: string;
  }>;

  const communityStats = t("pages.community.stats", {
    returnObjects: true,
  }) as Array<{
    value: string;
    label: string;
  }>;

  const testimonials = t("pages.community.testimonialsList", {
    returnObjects: true,
  }) as Array<{
    quote: string;
    author: string;
    role: string;
    school: string;
  }>;

  const forumTopics = t("pages.community.forum.topics", {
    returnObjects: true,
  }) as string[];

  const forumPreview = t("pages.community.forumPreview", {
    returnObjects: true,
  }) as Array<{
    quote: string;
    author: string;
    replies: number;
  }>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Users className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("pages.community.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("pages.community.heroDescription")}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {communityStats.map((stat, index) => (
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

      {/* Events Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {t("pages.community.events.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("pages.community.events.description")}
              </p>
            </div>
            <a
              href="#"
              className="hidden md:inline-flex items-center text-primary font-medium hover:underline"
            >
              {t("pages.community.events.viewAll")}{" "}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="border rounded-xl bg-card hover:shadow-lg transition-all p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {event.type}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {event.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {event.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t text-sm">
                  <span className="text-muted-foreground">
                    {event.location}
                  </span>
                  <span className="font-medium">
                    {event.participants}{" "}
                    {t("pages.community.events.participants")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forum Preview */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                {t("pages.community.forum.title")}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t("pages.community.forum.description")}
              </p>
              <ul className="space-y-3 mb-6">
                {forumTopics.map((topic, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {topic}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                {t("pages.community.forum.button")}
              </button>
            </div>
            <div className="bg-card border rounded-xl p-6">
              <div className="space-y-4">
                {forumPreview.map((post, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm mb-2">"{post.quote}"</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>
                        {post.replies} {t("pages.community.forum.replies")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("pages.community.testimonials.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 border rounded-xl bg-card">
                <Heart className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.school}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Ambassador */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
            <Trophy className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4">
            {t("pages.community.ambassador.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            {t("pages.community.ambassador.description")}
          </p>
          <div className="flex items-center justify-center gap-4">
            <HandHeart className="w-5 h-5 text-primary" />
            <span className="font-medium text-primary">
              {t("pages.community.ambassador.benefits")}
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
