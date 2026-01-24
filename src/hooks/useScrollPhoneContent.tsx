import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const useScrollPhoneContent = () => {
  const [scrollData, setScrollData] = useState({ step: 0, progress: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-step-progress]");
      const ctaSection = document.getElementById("cta-section");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollMidpoint = scrollPosition + windowHeight / 2;
      // Check if we're in the CTA section
      if (ctaSection) {
        const ctaTop = (ctaSection as HTMLElement).offsetTop;
        if (scrollMidpoint >= ctaTop) {
          setScrollData({ step: 0, progress: 0 });
          return;
        }
      }

      // Check if we're before the first story section
      if (sections.length > 0) {
        const firstSection = sections[0] as HTMLElement;
        if (scrollMidpoint < firstSection.offsetTop) {
          setScrollData({ step: 0, progress: 0 });
          return;
        }
      }

      let matched = false;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const step = parseInt((section as HTMLElement).dataset.step || "0");

        if (
          scrollMidpoint >= sectionTop &&
          scrollMidpoint < sectionTop + sectionHeight
        ) {
          const progress = (scrollMidpoint - sectionTop) / sectionHeight;
          setScrollData({ step, progress });
          matched = true;
        }
      });

      if (!matched && sections.length > 0) {
        const lastSection = sections[sections.length - 1] as HTMLElement;
        const lastStep = parseInt(lastSection.dataset.step || "0");
        setScrollData({ step: lastStep, progress: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return scrollData;
};
