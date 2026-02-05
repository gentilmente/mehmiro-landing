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

  const faqs: FAQItem[] = [
    {
      question: "¿Mehmiro controla o evalúa a los docentes?",
      answer:
        "No. Mehmiro es una herramienta de acompañamiento pedagógico que respeta tu autonomía profesional. No, tu criterio lo potencia. La IA analiza tus observaciones para ayudarte a ver patrones, no para juzgar tu trabajo.",
      icon: <Shield className="w-5 h-5 text-primary" />,
    },
    {
      question: "¿Cuánto tiempo toma implementar Mehmiro?",
      answer:
        "Podés empezar a ver resultados en las primeras 24 horas. La plataforma se integra naturalmente a tu flujo de trabajo actual sin sumar carga administrativa significativa.",
      icon: <Clock className="w-5 h-5 text-primary" />,
    },
    {
      question: "¿Reemplaza el criterio profesional del docente?",
      answer:
        "Todo lo contrario. Mehmiro está diseñado para potenciar tu mirada pedagógica. Vos seguís siendo el centro de la evaluación. La tecnología es una herramienta que amplifica tu capacidad de observación, no la reemplaza.",
      icon: <Brain className="w-5 h-5 text-primary" />,
    },
    {
      question: "¿Qué pasa con los datos de los estudiantes?",
      answer:
        "La privacidad y seguridad de los datos son nuestra prioridad. Cumplimos con todas las normativas de protección de datos en Argentina. Los datos son propiedad de la institución y se almacenan de forma segura.",
      icon: <Shield className="w-5 h-5 text-primary" />,
    },
    {
      question: "¿Para qué tipo de instituciones es Mehmiro?",
      answer:
        "Mehmiro está diseñado para escuelas de todos los niveles educativos, desde primaria hasta secundaria y formación docente. Se adapta a diferentes contextos y necesidades pedagógicas.",
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
    },
    {
      question: "¿Necesito capacitación para usarlo?",
      answer:
        "No. Mehmiro está diseñado para ser intuitivo y fácil de usar. Podés comenzar a registrar observaciones desde el primer día sin necesidad de capacitación previa.",
      icon: <HelpCircle className="w-5 h-5 text-primary" />,
    },
  ];

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
            <span>Preguntas frecuentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Respuestas a tus dudas
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Abordamos las principales preocupaciones de los docentes e
            instituciones.
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
