import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote, Users, School, Award, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SocialProofSectionProps {
  id?: string;
}

export const SocialProofSection = ({
  id = "social-proof",
}: SocialProofSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    // Animate items on scroll
    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const testimonials = t("socialProof.testimonials", {
    returnObjects: true,
  }) as {
    quote: string;
    author: string;
    role: string;
    school: string;
  }[];

  const statItems = t("socialProof.stats", {
    returnObjects: true,
  }) as { value: string; label: string }[];
  const statIcons = [Users, School, Award, CheckCircle];
  const stats = statItems.map((item, index) => ({
    ...item,
    icon: statIcons[index],
  }));

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div
            ref={addToRefs}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Users className="w-4 h-4" />
            <span>{t("socialProof.badge")}</span>
          </div>

          <h2
            ref={addToRefs}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {t("socialProof.title")}
            </span>
          </h2>

          <p
            ref={addToRefs}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
          >
            {t("socialProof.description")}
          </p>
        </div>

        {/* Stats */}
        <div
          ref={addToRefs}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border/50 pt-4">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} · {testimonial.school}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Validation badge */}
        <div ref={addToRefs} className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20">
            <Award className="w-5 h-5 text-secondary" />
            <span className="text-sm text-muted-foreground">
              {t("socialProof.validation")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
