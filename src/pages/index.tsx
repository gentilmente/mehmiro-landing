import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section - Emotional Hook */}
      <HeroSection />

      {/* Problem Section - "Every teacher knows this feeling" */}
      <ProblemSection id="el-desafio" />

      {/* Solution Section - "Meet Mehmiro" */}
      <SolutionSection id="mehmiro" />

      {/* Social Proof - "Join schools already using it" */}
      <SocialProofSection id="comunidad" />

      {/* FAQ - Address concerns directly */}
      <FAQSection id="preguntas-frecuentes" />

      {/* Final CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
