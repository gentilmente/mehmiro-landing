import { HeroSection } from "@/components/HeroSection";
import { ScrollStorySection } from "@/components/ScrollStorySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { useScrollPhoneContent } from "@/hooks/useScrollPhoneContent";
import { FixedPhoneMockup } from "@/components/FixedPhoneMockup";
import onboardingImage from "@/assets/onboarding.png";
import onboardingCompleteVideo from "@/assets/onboarding-complete.mp4";
import juanSchool from "@/assets/juan-school.jpg";
import beatrizJuan from "@/assets/beatriz-juan.jpg";
import studentProfile from "@/assets/student-profile.png";

const Index = () => {
  useScrollPhoneContent();

  return (
    <div className="relative">
      <HeroSection />

      {/* Story sections with scroll triggers */}
      <ScrollStorySection
        id="juan-intro"
        step={1}
        title="Juan, un maestro con múltiples desafíos"
        description="Juan da clases en 2 escuelas diferentes, misma materia pero otro grado. Una escuela con recursos limitados de zona rural y en un colegio privados del centro de la ciudad."
        backgroundImageSrc={juanSchool}
        completionVideoSrc={onboardingCompleteVideo}
      >
        <FixedPhoneMockup
          variant="inline"
          withId={false}
          imageSrc={onboardingImage}
          step={1}
          completionVideoSrc={onboardingCompleteVideo}
        />
      </ScrollStorySection>

      <ScrollStorySection
        id="juan-context"
        step={2}
        title="Beatriz y Juan se encuentran en el pasillo del colegio"
        description="Juan le muestra a Beatriz cómo Mehmiro le quita la carga de tareas tediosas, para que ambos puedan enfocarse en lo que realmente importa: enseñar. ¿Qué puede hacer por mí?"
        backgroundImageSrc={beatrizJuan}
      >
        <FixedPhoneMockup
          variant="inline"
          withId={false}
          imageSrc={studentProfile}
          step={2}
        />
      </ScrollStorySection>

      <ScrollStorySection
        id="mehmiro-response"
        step={3}
        title="Evaluaciones personalizadas al instante"
        description="En segundos, Mehmiro genera evaluaciones adaptadas: desde escuelas con recursos limitados hasta colegios ABC1. Cada evaluación respeta el contexto y potencia el aprendizaje."
      >
        <FixedPhoneMockup variant="inline" withId={false} />
      </ScrollStorySection>

      <ScrollStorySection
        id="beatriz-shares"
        step={4}
        title="Beatriz descubre el potencial"
        description="En el pasillo del colegio, Juan le muestra Mehmiro a Beatriz. Ella comprende de inmediato: evaluaciones que realmente entienden a sus estudiantes, sin barreras culturales ni contextuales."
      >
        <FixedPhoneMockup variant="inline" withId={false} />
      </ScrollStorySection>

      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
