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
import beatrizInvite from "@/assets/beatriz-invite.jpg";
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
        title="Juan, un maestro como vos"
        description="Juan da la misma materia pero en distintos grados en 2 escuelas. Mismos contenidos, diferentes contextos. Un compañero le presentó Mehmiro y decidió probarlo."
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
        description="Juan le muestra cómo Mehmiro analiza lo que él observa de cada estudiante mientras trabajan. Esto permite a Mehmiro ofrecer apoyo y andamiaje para cada dificultad que atravieza cada estudiante. Beatriz quiere saber mas y Juan entra al perfil de un estudiante."
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
        id="beatriz-shares"
        step={3}
        title="Beatriz descubre el potencial"
        description="Beatriz se da cuenta de que Mehmiro no solo ayuda a Juan, sino que también puede transformar su propia forma de enseñar y conectar con sus estudiantes."
        backgroundImageSrc={beatrizInvite}
      >
      </ScrollStorySection>

      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
