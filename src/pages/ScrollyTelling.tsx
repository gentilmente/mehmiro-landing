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
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Index = () => {
  useScrollPhoneContent();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      {/* Story sections with scroll triggers */}
      <ScrollStorySection
        id="juan-intro"
        step={1}
        title={t("story.steps.0.title")}
        description={t("story.steps.0.description")}
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
        title={t("story.steps.1.title")}
        description={t("story.steps.1.description")}
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
        title={t("story.steps.2.title")}
        description={t("story.steps.2.description")}
        backgroundImageSrc={beatrizInvite}
      ></ScrollStorySection>

      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
