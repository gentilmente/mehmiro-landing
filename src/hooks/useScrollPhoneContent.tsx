import { useEffect, useState } from "react";

export const useScrollPhoneContent = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-step]");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const step = parseInt((section as HTMLElement).dataset.step || "0");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
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