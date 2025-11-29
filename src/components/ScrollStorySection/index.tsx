import { ReactNode } from "react";

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
}: ScrollStorySectionProps) => {
  const isActive = currentStep >= step;
  const isPassed = currentStep > step;
  const progressInSection =
    currentStep === step ? scrollProgress : isPassed ? 1 : 0;

  // Split description into lines (by sentences)
  const lines = description
    .split(". ")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return (
    <section
      id={id}
      data-step={step}
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="w-full px-6 md:px-12 lg:pl-32 flex items-center">
        <div className="space-y-6 text-left max-w-xl">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-primary">
              Paso {step}
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold leading-tight transition-all duration-700 ease-in-out ${
              isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } ${isPassed ? "w-full" : "sm:w-1/2 w-full pr-32"}`}
          >
            {title}
          </h2>
          <div className="space-y-3">
            {lines.map((line, index) => {
              const lineProgress = progressInSection - index * 0.2;
              const isVisible = lineProgress > 0;
              const shouldExpand = lineProgress > 0.5;
              return (
                <p
                  key={index}
                  className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 ease-in-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  } ${shouldExpand ? "w-full" : "sm:w-1/2 w-full pr-32"}`}
                  style={{
                    transitionDelay: isVisible ? `${index * 400}ms` : "0ms",
                  }}
                >
                  {line}
                  {index < lines.length - 1 ? "." : ""}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
