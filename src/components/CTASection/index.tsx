import { Button } from "@/components/ui/button";
import frameImage from "@/assets/frame.png";

export const CTASection = () => {
  return (
    <section
      id="cta-section"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-section" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-hero" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              ¿Querés transformar cómo observás el aprendizaje?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Sumate a la innovación. La academia ya validó el marco teórico.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            {/* Mobile: Show only button, Desktop: Hide button */}
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-glow-primary text-lg px-12 py-7 sm:hidden"
              onClick={() =>
                document
                  .getElementById("lead-capture")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Agendar demostración
            </Button>

            {/* Mobile: Hide QR, Desktop: Show only QR */}
            <div className="hidden sm:flex flex-col items-center gap-3">
              <div className="w-48 h-48 bg-white rounded-2xl shadow-xl p-4 flex items-center justify-center">
                <img src={frameImage} alt="QR Code" />
              </div>
              <p className="text-sm text-muted-foreground">
                Escaneá para agendar tu demostración sin compromiso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
