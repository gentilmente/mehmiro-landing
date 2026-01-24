import { ReactNode } from "react";
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
  const isPassed = currentStep > step;
  const progressInSection =
    currentStep === step ? scrollProgress : isPassed ? 1 : 0;
  const TITLE_REVEAL_END = 0.12;
  const TITLE_PIN_END = 0.22;
  const TEXT_PHASE_END = 0.52;
  const PHONE_PHASE_END = 0.66;
  const TOOLTIP_PHASE_END = 0.9;
  const TOOLTIP_COUNT = 4;
  const clampedProgress = Math.max(0, Math.min(progressInSection, 1));
  const sectionRevealProgress = isPassed
    ? 1
    : Math.min(clampedProgress / TITLE_REVEAL_END, 1);
  const titleRevealProgress = Math.min(clampedProgress / TITLE_REVEAL_END, 1);
  const titlePinProgress = Math.max(
    0,
    Math.min(
      (clampedProgress - TITLE_REVEAL_END) / (TITLE_PIN_END - TITLE_REVEAL_END),
      1,
    ),
  );
  const textPhaseStart = TITLE_PIN_END;
  const textPhaseSpan = Math.max(0.0001, TEXT_PHASE_END - textPhaseStart);
  const phonePhaseStart = TEXT_PHASE_END;
  const phonePhaseProgress = Math.max(
    0,
    Math.min(
      (clampedProgress - phonePhaseStart) / (PHONE_PHASE_END - phonePhaseStart),
      1,
    ),
  );
  const tooltipPhaseStart = PHONE_PHASE_END;
  const tooltipPhaseProgress = Math.max(
    0,
    Math.min(
      (clampedProgress - tooltipPhaseStart) /
        (TOOLTIP_PHASE_END - tooltipPhaseStart),
      1,
    ),
  );
  const titleExpanded = isMobile ? true : isPassed || titlePinProgress >= 1;
  const titleOpacity = isPassed ? 1 : titleRevealProgress;
  const titleTranslateY = isPassed ? 0 : (1 - titlePinProgress) * 16;
  const sectionTranslateY = (1 - sectionRevealProgress) * 100;
  const SECTION_SPACER_VH = isMobile ? 240 : 260;

  // Split description into lines (by sentences)
  const lines = description
    .split(". ")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return (
    <section id={id} data-step={step} className="relative w-full">
      <div
        className="sticky top-0 h-screen bg-background flex flex-col transition-[opacity,transform] duration-500 ease-out"
        style={{
          zIndex: step,
          opacity: sectionRevealProgress,
          transform: `translateY(${sectionTranslateY}%)`,
        }}
      >
        <div className="w-full h-full px-6 md:px-12 lg:pl-32 py-16 md:py-20 flex flex-col">
          <div className="space-y-6 text-left max-w-xl">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-primary">
                Paso {step}
              </span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold leading-tight transition-all duration-700 ease-in-out ${
                titleExpanded ? "w-full" : "w-1/2"
              }`}
              style={{
                opacity: titleOpacity,
                transform: `translateY(${titleTranslateY}px)`,
              }}
            >
              {title}
            </h2>
            <div className="space-y-3">
              {lines.map((line, index) => {
                const lineCount = Math.max(lines.length, 1);
                const lineSpan = textPhaseSpan / lineCount;
                const lineStart = textPhaseStart + index * lineSpan;
                const lineProgress = isPassed
                  ? 1
                  : Math.max(
                      0,
                      Math.min((clampedProgress - lineStart) / lineSpan, 1),
                    );
                return (
                  <p
                    key={index}
                    className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 ease-in-out ${
                      lineProgress > 0 ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transform: `translateY(${(1 - lineProgress) * 12}px)`,
                    }}
                  >
                    {line}
                    {index < lines.length - 1 ? "." : ""}
                  </p>
                );
              })}
            </div>
          </div>
          {children ? (
            <div className="mt-10">
              <div className="relative flex w-full items-center justify-center min-h-[320px] md:min-h-[520px]">
                <div
                  className="relative z-10 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: isPassed ? 1 : phonePhaseProgress,
                    transform: `translateY(${(1 - phonePhaseProgress) * 16}px)`,
                  }}
                >
                  {children}
                </div>
                {[
                  "left-1/2 top-24 -translate-x-[calc(50%+120px)] md:left-1/2 md:top-32 md:-translate-x-[calc(50%+250px)]",
                  "right-1/2 top-16 translate-x-[calc(50%+120px)] md:right-1/2 md:top-24 md:translate-x-[calc(50%+250px)]",
                  "left-1/2 bottom-24 -translate-x-[calc(50%+120px)] md:left-1/2 md:bottom-32 md:-translate-x-[calc(50%+250px)]",
                  "right-1/2 bottom-4 translate-x-[calc(50%+120px)] md:right-1/2 md:bottom-10 md:translate-x-[calc(50%+250px)]",
                ].map((positionClasses, index) => {
                  const tooltipStep = TOOLTIP_COUNT > 0 ? 1 / TOOLTIP_COUNT : 1;
                  const tooltipStart = index * tooltipStep;
                  const tooltipProgress = isPassed
                    ? 1
                    : Math.max(
                        0,
                        Math.min(
                          (tooltipPhaseProgress - tooltipStart) / tooltipStep,
                          1,
                        ),
                      );
                  return (
                    <div
                      key={positionClasses}
                      className={`pointer-events-none absolute ${positionClasses} z-20 rounded-full border border-primary/20 bg-background/90 px-3 py-1 text-[11px] md:text-sm font-medium text-muted-foreground shadow-lg backdrop-blur transition-all duration-500 ease-in-out opacity-100`}
                    >
                      Tooltip {index + 1}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div
        data-step-progress
        data-step={step}
        className="w-full"
        style={{ height: `${SECTION_SPACER_VH}vh` }}
      />
    </section>
  );
};
