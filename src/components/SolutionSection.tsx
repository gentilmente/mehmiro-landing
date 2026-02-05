import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  Eye,
  Brain,
  TrendingUp,
  Shield,
  Heart,
  Users,
  Target,
  Zap,
} from "lucide-react";

interface SolutionSectionProps {
  id?: string;
}

export const SolutionSection = ({
  id = "solution-section",
}: SolutionSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    // Animate content
    gsap.fromTo(
      content,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Animate features
    featuresRef.current.forEach((feature, index) => {
      gsap.fromTo(
        feature,
        { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: feature,
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
    if (el && !featuresRef.current.includes(el)) {
      featuresRef.current.push(el);
    }
  };

  const features = [
    {
      icon: Eye,
      title: "Tu criterio es la base",
      description:
        "Mehmiro no evalúa: interpreta. Amplifica tu mirada pedagógica sin reemplazarla.",
    },
    {
      icon: Brain,
      title: "IA como herramienta",
      description:
        "Un agente inteligente que organiza y analiza tus observaciones para mostrar patrones invisibles.",
    },
    {
      icon: Target,
      title: "Detección temprana",
      description:
        "Identificá estudiantes que necesitan atención antes de que sea tarde.",
    },
    {
      icon: TrendingUp,
      title: "Metacognición docente",
      description:
        "Reflexioná sobre tu propia práctica con informes generados desde tus registros.",
    },
    {
      icon: Shield,
      title: "Profesionalizar la observación",
      description:
        "Transformá intuiciones valiosas en evidencia sistemática y accionable.",
    },
    {
      icon: Heart,
      title: "Sin sumar carga",
      description:
        "Se integra naturalmente a tu flujo de trabajo. Menos papeleo, más enseñanza.",
    },
  ];

  const stats = [
    { value: "24h", label: "Tiempo para las primeras percepciones" },
    { value: "100%", label: "Respeto a tu autonomía" },
    { value: "∞", label: "Capacidad de observación" },
  ];

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={contentRef} className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>La solución</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Conoce a Mehmiro
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            La mirada que acompaña la enseñanza. Tecnología como escucha para
            docentes, no como control.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="text-center p-6 rounded-2xl bg-card border border-border/50"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Value proposition */}
        <div ref={addToRefs} className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium">
              No evalúa: interpreta. Tu criterio es la base.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
