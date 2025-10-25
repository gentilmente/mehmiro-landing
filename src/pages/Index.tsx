import { HeroSection } from "@/components/HeroSection";
import { ScrollStorySection } from "@/components/ScrollStorySection";
import { CTASection } from "@/components/CTASection";
import { FixedPhoneMockup } from "@/components/FixedPhoneMockup";
import { WelcomeScreen } from "@/components/PhoneScreens/WelcomeScreen";
import { TeacherProfileScreen } from "@/components/PhoneScreens/TeacherProfileScreen";
import { ContextInputScreen } from "@/components/PhoneScreens/ContextInputScreen";
import { AIResponseScreen } from "@/components/PhoneScreens/AIResponseScreen";
import { ShareScreen } from "@/components/PhoneScreens/ShareScreen";
import { useScrollPhoneContent } from "@/hooks/useScrollPhoneContent";

const Index = () => {
  const currentStep = useScrollPhoneContent();

  const renderPhoneContent = () => {
    switch (currentStep) {
      case 1:
        return <TeacherProfileScreen />;
      case 2:
        return <ContextInputScreen />;
      case 3:
        return <AIResponseScreen />;
      case 4:
        return <ShareScreen />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="relative">
      <HeroSection />

      {/* Fixed phone mockup - only show when story begins */}
      <div className={`transition-opacity duration-700 ease-in-out ${currentStep > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <FixedPhoneMockup>
          <div className="transition-all duration-700 ease-in-out">
            {renderPhoneContent()}
          </div>
        </FixedPhoneMockup>
      </div>

      {/* Story sections with scroll triggers */}
      <ScrollStorySection
        id="juan-intro"
        step={1}
        title="Juan, un maestro con múltiples desafíos"
        description="Juan da clases en 4 escuelas diferentes, 3 materias distintas y múltiples grados. Desde escuelas públicas con recursos limitados hasta colegios privados de zonas ABC1."
      />

      <ScrollStorySection
        id="juan-context"
        step={2}
        title="Mehmiro entiende su contexto"
        description="Con Mehmiro, Juan simplemente habla con el agente de IA. Le cuenta sobre su escuela, sus estudiantes, sus necesidades. El agente comprende el contexto único de cada grupo."
      />

      <ScrollStorySection
        id="mehmiro-response"
        step={3}
        title="Evaluaciones personalizadas al instante"
        description="En segundos, Mehmiro genera evaluaciones adaptadas: desde escuelas con recursos limitados hasta colegios ABC1. Cada evaluación respeta el contexto y potencia el aprendizaje."
      />

      <ScrollStorySection
        id="beatriz-shares"
        step={4}
        title="Beatriz descubre el potencial"
        description="En el pasillo del colegio, Juan le muestra Mehmiro a Beatriz. Ella comprende de inmediato: evaluaciones que realmente entienden a sus estudiantes, sin barreras culturales ni contextuales."
      />

      <CTASection />

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              © 2025 Mehmiro. Transformando la educación con inteligencia artificial.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
