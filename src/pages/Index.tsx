import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { CTASection } from "@/components/CTASection";
import { ParallaxContainer } from "@/components/ParallaxContainer";

import juanSchoolImage from "@/assets/juan-school.jpg";
import beatrizJuanImage from "@/assets/beatriz-juan.jpg";
import beatrizInviteImage from "@/assets/beatriz-invite.jpg";

const Index = () => {
  return (
    <div className="relative">
      <HeroSection />

      <ParallaxContainer speed={-0.05}>
        <StorySection
          id="juan-story"
          title="Juan, un maestro con múltiples desafíos"
          description="Juan da clases en 4 escuelas diferentes, 3 materias distintas y múltiples grados. Desde escuelas públicas con recursos limitados hasta colegios privados de zonas ABC1. Cada contexto es único, cada estudiante tiene necesidades diferentes. Con Mehmiro, Juan puede crear evaluaciones personalizadas que se adaptan al contexto de cada grupo."
          imageSrc={juanSchoolImage}
          imageAlt="Juan entrando a la escuela"
        />
      </ParallaxContainer>

      <ParallaxContainer speed={-0.08}>
        <StorySection
          id="beatriz-story"
          title="Beatriz descubre una nueva forma de enseñar"
          description="En el pasillo del colegio privado, Beatriz le comparte a Juan un desafío en su aula. Juan le muestra Mehmiro. En minutos, Beatriz comprende el potencial: evaluaciones que realmente entienden a sus estudiantes, que se adaptan a sus fortalezas y trabajan en sus áreas de mejora."
          imageSrc={beatrizJuanImage}
          imageAlt="Juan y Beatriz conversando"
          reversed
        />
      </ParallaxContainer>

      <ParallaxContainer speed={-0.03}>
        <StorySection
          id="invitation-story"
          title="Tu turno de transformar la educación"
          description="Como Beatriz y Juan, tú también puedes revolucionar la forma en que evalúas. Mehmiro está diseñado para docentes que quieren lo mejor para sus estudiantes, sin importar las barreras culturales o contextuales. El cambio comienza aquí, comienza ahora."
          imageSrc={beatrizInviteImage}
          imageAlt="Beatriz invitando a usar Mehmiro"
        />
      </ParallaxContainer>

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
