import { HeroSection } from "@/components/HeroSection";
import { AudienceSelector } from "@/components/AudienceSelector";
import { AmbassadorSection } from "@/components/AmbassadorSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { StackCard } from "@/components/StackCard";
import { CONTENT_FLAGS } from "@/config/contentFlags";

const Index = () => {
  return (
    <div className="landing-page">
      <main>
      {/* Hero Section - Emotional Hook */}
      <HeroSection />

      {/* Audience selector */}
      <AudienceSelector />

      {/* Problem Section - "Every teacher knows this feeling" */}
      <div className="section-stack">
      <StackCard tone="peach"><ProblemSection id="el-desafio" /></StackCard>

      {/* Solution Section - "Meet Mehmiro" */}
      <StackCard tone="sage"><SolutionSection id="mehmiro" /></StackCard>

      {/* Community: social proof stays in i18n but hidden until metrics are verified. */}
      <StackCard tone="butter">
        {CONTENT_FLAGS.showSocialProof ? (
          <SocialProofSection id="comunidad" />
        ) : (
          <AmbassadorSection id="embajadores" />
        )}
      </StackCard>
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
