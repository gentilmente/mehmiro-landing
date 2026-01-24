import { ReactNode, useEffect, useRef, useState } from "react";
import { useIsMobile } from "../../hooks/use-mobile";

interface ScrollStorySectionProps {
  id: string;
  title: string;
  description: string;
  step: number;
  currentStep: number;
  scrollProgress: number;
  children?: ReactNode;
}

export const ScrollStorySection = ({
  id,
  title,
  description,
  step,
  currentStep,
  scrollProgress,
  children,
}: ScrollStorySectionProps) => {
  const isMobile = useIsMobile();
  const isActive = currentStep >= step;
  const isPassed = currentStep > step;
  const progressInSection =
    currentStep === step ? scrollProgress : isPassed ? 1 : 0;
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);

  const titleVisible = isMobile ? true : true;
  const titleExpanded = isMobile ? true : isPassed;

  // Split description into lines (by sentences)
  const lines = description
    .split(". ")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  useEffect(() => {
    if (!isMobile) {
      return undefined;
    }

    const handleScroll = () => {
      const rect = textRef.current?.getBoundingClientRect();
      if (!rect) {
        return;
      }
      setIsPhoneVisible(rect.top <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isMobile]);

  return (
    <section
      id={id}
      data-step={step}
      className={`min-h-screen py-20 relative ${isMobile ? "flex flex-col justify-start" : "flex items-center"}`}
    >
      <div
        className={`w-full px-6 md:px-12 lg:pl-32 ${isMobile ? "" : "flex items-center"}`}
      >
        <div
          ref={textRef}
          className={`space-y-6 text-left max-w-xl ${isMobile ? "" : ""}`}
        >
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-primary">
              Paso {step}
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold leading-tight ${
              isMobile
                ? "opacity-100 translate-y-0 w-full"
                : `transition-all duration-700 ease-in-out ${
                    titleVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  } ${titleExpanded ? "w-full" : "w-1/4"} sm:w-1/2 sm:opacity-100 sm:translate-y-0`
            }`}
          >
            {title}
          </h2>
          <div className="space-y-3">
            {lines.map((line, index) => {
              const lineProgress = progressInSection - index * 0.1;
              const isVisible = isMobile
                ? true
                : lineProgress > 0.3 && !isPassed;
              const shouldExpand = isMobile ? true : isPassed;
              return (
                <p
                  key={index}
                  className={`text-lg text-muted-foreground leading-relaxed ${
                    isMobile
                      ? "opacity-100 translate-y-0 w-full"
                      : `sm:transition-none sm:opacity-100 sm:translate-y-0 transition-all duration-700 ease-in-out ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        } sm:w-1/2 ${shouldExpand ? "w-full" : "w-1/2"}`
                  }`}
                  style={{
                    transitionDelay:
                      !isMobile && isVisible ? `${index * 400}ms` : "0ms",
                  }}
                >
                  {line}
                  {index < lines.length - 1 ? "." : ""}
                </p>
              );
            })}
          </div>
          {isMobile && children ? (
            <div
              className={`mt-10 transition-opacity duration-700 ease-in-out ${
                isPhoneVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
