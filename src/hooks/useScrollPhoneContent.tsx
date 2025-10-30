import { useEffect, useState } from "react";

export const useScrollPhoneContent = () => {
  const [scrollData, setScrollData] = useState({ step: 0, progress: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-step]");
      const ctaSection = document.getElementById("cta-section");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const phoneHeight = 334; // Approximate phone mockup height in pixels
      const scrollMidpoint = scrollPosition + windowHeight / 2 + phoneHeight;

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

      // Check which story section we're in and calculate progress
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const step = parseInt((section as HTMLElement).dataset.step || "0");

        if (scrollMidpoint >= sectionTop && scrollMidpoint < sectionTop + sectionHeight) {
          const progress = (scrollMidpoint - sectionTop) / sectionHeight;
          setScrollData({ step, progress });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollData;
};