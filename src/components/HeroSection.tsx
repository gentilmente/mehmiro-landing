import { Heart, Brain, Eye, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import ircaiBanner from "@/assets/TOP 100 Promising Project Banner.png";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const valueProps = t("hero.valueProps", {
    returnObjects: true,
  }) as string[];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    // Animate content on load
    gsap.fromTo(
      content,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
    );

    // Parallax effect for background
    gsap.to(".bg-parallax", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-parallax absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="bg-parallax absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="bg-parallax absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={contentRef}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Emotional hook */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Heart className="w-4 h-4" />
            <span>{t("hero.badge")}</span>
          </div>

          {/* Headline - Emotional hook */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {t("hero.headlinePrimary")}
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                {t("hero.headlineSecondary")}
              </span>
            </span>
          </h1>

          {/* Subheadline - Value proposition */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            {t("hero.subheadline")}
          </p>

          {/* Recognition banner */}
          <div className="pt-2">
            <p className="text-xs sm:text-sm text-muted-foreground mb-3">
              {t("hero.recognitionLabel")}
            </p>
            <a
              href="https://ircai.org/top100/entry/mehmiro/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center"
              aria-label={t("hero.recognitionAria")}
            >
              <img
                src={ircaiBanner}
                alt={t("hero.recognitionAlt")}
                className="w-full max-w-3xl rounded-lg border border-primary/10 shadow-sm"
                loading="lazy"
              />
            </a>
          </div>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 pt-4 px-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Eye className="w-4 h-4 text-primary" />
              <span>{valueProps[0]}</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Brain className="w-4 h-4 text-primary" />
              <span>{valueProps[1]}</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>{valueProps[2]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="pb-5 text-sm text-muted-foreground text-center">
          {t("hero.scrollIndicator")}
        </div>
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
