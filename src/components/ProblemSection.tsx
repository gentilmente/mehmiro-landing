import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Eye,
  Clock,
  AlertCircle,
  CheckCircle,
  Heart,
  Brain,
  TrendingUp,
  Users,
  School,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProblemSectionProps {
  id?: string;
}

export const ProblemSection = ({
  id = "problem-section",
}: ProblemSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
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
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const problems = [
    {
      icon: Eye,
      title: "Observaciones dispersas",
      description:
        "Las observaciones valiosas quedan en notas aisladas, conversaciones de pasillo o recuerdos difusos.",
    },
    {
      icon: Clock,
      title: "Intervenciones tardías",
      description:
        "Cuando un estudiante se queda atrás, muchas veces no lo notás a tiempo para ayudar.",
    },
    {
      icon: AlertCircle,
      title: "Puntos ciegos",
      description:
        "Sin un registro sistemático, se pierden patrones importantes en el progreso de cada estudiante.",
    },
    {
      icon: Brain,
      title: "Carga mental",
      description:
        "Intentás recordar todo mientras dás clase, pero la memoria tiene límites.",
    },
  ];

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div
            ref={addToRefs}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Heart className="w-4 h-4" />
            <span>Para docentes</span>
          </div>

          <h2
            ref={addToRefs}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Cada docente conoce esta sensación
            </span>
          </h2>

          <p
            ref={addToRefs}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
          >
            Mirás a tu clase y sabés que algo no está funcionando para algunos
            estudiantes, pero cuando lo detectás, ya es tarde para actuar a
            tiempo.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional close */}
        <div ref={addToRefs} className="mt-16 text-center">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            <span className="font-medium text-foreground">
              No estás solo en esto.
            </span>{" "}
            Mehmiro existe para que nunca más pierdas una observación
            importante.
          </p>
        </div>
      </div>
    </section>
  );
};
