import { useEffect, useState } from "react";

export const useScrollPhoneContent = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-step]");
      const footer = document.querySelector("footer");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if we're in the footer area
      if (footer) {
        const footerTop = (footer as HTMLElement).offsetTop;
        if (scrollPosition + windowHeight > footerTop + 100) {
          setCurrentStep(0);
          return;
        }
      }

      // Check if we're before the first story section
      if (sections.length > 0) {
        const firstSection = sections[0] as HTMLElement;
        const scrollMidpoint = scrollPosition + windowHeight / 2;
        if (scrollMidpoint < firstSection.offsetTop) {
          setCurrentStep(0);
          return;
        }
      }

      // Check which story section we're in
      const scrollMidpoint = scrollPosition + windowHeight / 2;
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