import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronDown,
  Shield,
  Brain,
  Clock,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface FAQSectionProps {
  id?: string;
}

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ReactNode;
}

export const FAQSection = ({ id = "faq" }: FAQSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslation();

  const faqItems = t("faq.items", {
    returnObjects: true,
  }) as { question: string; answer: string }[];
  const faqIcons = [
    <Clock className="w-5 h-5 text-primary" />,
    <Brain className="w-5 h-5 text-primary" />,
    <Shield className="w-5 h-5 text-primary" />,
    <CheckCircle className="w-5 h-5 text-primary" />,
    <HelpCircle className="w-5 h-5 text-primary" />,
    <Shield className="w-5 h-5 text-primary" />,
  ];
  const faqs: FAQItem[] = faqItems.map((item, index) => ({
    ...item,
    icon: faqIcons[index],
  }));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const header = headerRef.current;
    if (!section || !header) return;

    gsap.fromTo(
      header,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>{t("faq.badge")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {t("faq.title")}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground px-4">
            {t("faq.description")}
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl border transition-all duration-300 overflow-hidden",
                openIndex === index
                  ? "bg-card border-primary/30 shadow-lg"
                  : "bg-card/50 border-border/50 hover:border-primary/20",
              )}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  {faq.icon && <div className="flex-shrink-0">{faq.icon}</div>}
                  <span className="font-medium text-lg">{faq.question}</span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
                    openIndex === index && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "transition-all duration-300 ease-in-out",
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0",
                )}
              >
                <div className="pl-12 sm:pl-[3.5rem] pr-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
