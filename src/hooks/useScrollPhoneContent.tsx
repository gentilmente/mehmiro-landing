import { useEffect, useState } from "react";

export const useScrollPhoneContent = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-step]");
      const ctaSection = document.getElementById("cta-section");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollMidpoint = scrollPosition + windowHeight / 2;

      // Check if we're in the CTA section
      if (ctaSection) {
        const ctaTop = (ctaSection as HTMLElement).offsetTop;
        if (scrollMidpoint >= ctaTop) {
          setCurrentStep(0);
          return;
        }
      }

      // Check if we're before the first story section
      if (sections.length > 0) {
        const firstSection = sections[0] as HTMLElement;
        if (scrollMidpoint < firstSection.offsetTop) {
          setCurrentStep(0);
          return;
        }
      }

      // Check which story section we're in
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const step = parseInt((section as HTMLElement).dataset.step || "0");

        if (scrollMidpoint >= sectionTop && scrollMidpoint < sectionTop + sectionHeight) {
          setCurrentStep(step);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return currentStep;
};