import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Eye,
  Clock,
  ArrowRight,
  MessageCircle,
  CheckCircle,
  Quote,
} from "lucide-react";

/* Example landing layout — narrative-first, 1:1-focused
   Swap this into App.tsx (replace Index import) to preview live.
   Not replacing the real page yet — for discussion only. */

const IndexExample = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-background text-foreground">
      {/* ─── HERO: one emotion, one promise ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6"
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Heart className="w-4 h-4" />
            <span>Para docentes que aman enseñar</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Más tiempo
              <br />
              para cada alumno
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Mehmiro te devuelve los minutos que perdés en notas dispersas.
            Para que ese "¿cómo venís?" no llegue tarde.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8 text-base">
              Comenzar gratis
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-base">
              Ver cómo funciona
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center p-1.5">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* ─── STORY: 3 beats, one teacher ─── */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Beat 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                En el aula
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Notás que algo no cierra
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Juan se quedó callado en la última semana. Vos lo viste, lo
                sentiste… pero entre corregir, planificar y la reunión de
                padres, se te pasó.
              </p>
            </div>
            <div className="relative rounded-3xl bg-card border border-border p-8 flex items-center justify-center min-h-[240px]">
              <Eye className="w-16 h-16 text-primary/40 absolute top-6 right-6" />
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  La observación existe… en tu cabeza
                </p>
              </div>
            </div>
          </div>

          {/* Beat 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <div className="md:order-2 space-y-4">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                Al final del día
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                La memoria falla
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Intentás recordarlo todo, pero 30 alumnos multiplican los
                detalles. Cuando finalmente te sentás a pensar, ya es
                jueves y Juan lleva dos semanas desconectado.
              </p>
            </div>
            <div className="md:order-1 relative rounded-3xl bg-card border border-border p-8 flex items-center justify-center min-h-[240px]">
              <Clock className="w-16 h-16 text-primary/40 absolute top-6 right-6" />
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  El momento pasó. La oportunidad también.
                </p>
              </div>
            </div>
          </div>

          {/* Beat 3 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                Con Mehmiro
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Actuás antes de que sea tarde
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Registrás en 30 segundos. Mehmiro conecta los puntos. El
                martes ya sabés que Juan necesita ese minuto extra — y se lo
                das.
              </p>
            </div>
            <div className="relative rounded-3xl bg-primary/5 border border-primary/20 p-8 flex items-center justify-center min-h-[240px]">
              <MessageCircle className="w-16 h-16 text-primary/40 absolute top-6 right-6" />
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-primary font-medium">
                  El "¿cómo venís?" llega a tiempo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW: 3 steps, each tied to 1:1 ─── */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              Tres pasos. Un resultado.
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              No es magia. Es tu mirada, organizada para que actúes a
              tiempo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Observá en el momento",
                body: "Anotá lo que ves, con tus palabras. Voz o texto, 30 segundos.",
                icon: Eye,
              },
              {
                num: "02",
                title: "Vé los patrones",
                body: "Mehmiro conecta tus notas. Detecta quién necesita atención antes de que lo olvides.",
                icon: ArrowRight,
              },
              {
                num: "03",
                title: "Sentate con él",
                body: "Con claridad, con datos suaves, con intención. Ese es el 1:1 que cambia todo.",
                icon: MessageCircle,
              },
            ].map((step) => (
              <div
                key={step.num}
                className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <span className="absolute top-4 right-4 text-5xl font-bold text-primary/10">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROOF: one voice ─── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Quote className="w-10 h-10 text-primary/40 mx-auto" />
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed">
            "Antes perdía los hilos. Ahora sé exactamente con quién sentarme
            el lunes. Mis estudiantes lo notan."
          </blockquote>
          <div className="pt-4">
            <p className="font-semibold">María González</p>
            <p className="text-sm text-muted-foreground">
              Maestra de 4° grado · Escuela San José
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA: simple ─── */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6 p-10 rounded-3xl bg-card border border-border">
          <h2 className="text-3xl md:text-4xl font-bold">
            Probá con tu clase
          </h2>
          <p className="text-muted-foreground text-lg">
            7 días gratis. Sin tarjeta. Empezá a registrar una observación
            hoy.
          </p>
          <Button size="lg" className="rounded-full px-10 text-base mt-2">
            Comenzar gratis
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <p className="text-xs text-muted-foreground pt-2">
            También disponible para instituciones · Buenos Aires, Argentina
          </p>
        </div>
      </section>

      {/* ─── FOOTER: minimal ─── */}
      <footer className="py-10 px-6 border-t border-border text-center text-sm text-muted-foreground">
        <p>© 2026 Mehmiro. Acompañando la evaluación formativa.</p>
      </footer>
    </div>
  );
};

export default IndexExample;
