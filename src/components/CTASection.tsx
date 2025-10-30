import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";

export const CTASection = () => {
  return (
    <section
      id='cta-section'
      className='min-h-screen flex items-center justify-center relative overflow-hidden py-20'
    >
      {/* Background effects */}
      <div className='absolute inset-0 bg-gradient-section' />
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-hero' />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-4xl mx-auto text-center space-y-12'>
          <div className='space-y-6 animate-fade-in-up'>
            <h2 className='text-5xl md:text-6xl font-bold'>
              ¿Listo para transformar{" "}
              <span className='bg-gradient-hero bg-clip-text text-transparent'>
                tu forma de evaluar?
              </span>
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Únete a cientos de docentes que ya están revolucionando la
              educación con Mehmiro
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center pt-8'>
            <Button
              size='lg'
              className='bg-primary hover:bg-primary/90 shadow-glow-primary text-lg px-12 py-7'
              onClick={() => window.open("https://app.mehmiro.com", "_blank")}
            >
              Comenzar gratis
            </Button>

            <div className='text-muted-foreground'>o</div>

            <div className='flex flex-col items-center gap-3'>
              <div className='w-40 h-40 bg-white rounded-2xl shadow-xl p-4 flex items-center justify-center'>
                <QrCode className='w-full h-full text-background' />
              </div>
              <p className='text-sm text-muted-foreground'>
                Escanea para probar en móvil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
