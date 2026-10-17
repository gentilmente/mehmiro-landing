import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { StackCard } from "@/components/StackCard";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing-page">
      <main>
      {/* Hero Section - Emotional Hook */}
      <HeroSection />

      {/* Problem Section - "Every teacher knows this feeling" */}
      <div className="section-stack">
      <StackCard tone="peach"><ProblemSection id="el-desafio" /></StackCard>

      {/* Solution Section - "Meet Mehmiro" */}
      <StackCard tone="sage"><SolutionSection id="mehmiro" /></StackCard>

      {/* Social Proof - "Join schools already using it" */}
      <StackCard tone="butter"><SocialProofSection id="comunidad" /></StackCard>
      </div>

      {/* FAQ - Address concerns directly */}
      <FAQSection id="preguntas-frecuentes" />

      {/* Final CTA */}
      <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
