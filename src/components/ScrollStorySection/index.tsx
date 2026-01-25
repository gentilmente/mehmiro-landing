import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollStorySectionProps {
  id: string;
  title: string;
  description: string;
  step: number;
  children?: ReactNode;
}

export const ScrollStorySection = ({
  id,
  title,
  description,
  step,
  children,
}: ScrollStorySectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasPhone = Boolean(children);

  const lines = description
    .split(". ")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });

    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const panels = Array.from(
      section.querySelectorAll<HTMLElement>("[data-panel]"),
    );
    const pinTimelines: gsap.core.Timeline[] = [];
    const revealTimelines: gsap.core.Timeline[] = [];

    panels.forEach((panel) => {
      const panelType = panel.dataset.panel ?? "text";
      const slide = panel.querySelector<HTMLElement>("[data-slide]");

      if (!slide) {
        return;
      }

      const revealElements = Array.from(
        panel.querySelectorAll<HTMLElement>("[data-reveal]"),
      );
      const immediateElements = Array.from(
        panel.querySelectorAll<HTMLElement>("[data-reveal-immediate]"),
      );

      if (immediateElements.length > 0) {
        gsap.set(immediateElements, {
          opacity: 0,
          y: 20,
          willChange: "opacity, transform",
        });
      }

      if (revealElements.length > 0) {
        gsap.set(revealElements, {
          opacity: 0,
          y: 30,
          willChange: "opacity, transform",
        });
      }

      if (panelType === "text") {
        const revealTl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            end: "bottom top",
            scrub: 1,
          },
          defaults: {
            ease: "power2.out",
          },
        });

        if (immediateElements.length > 0) {
          revealTl.to(immediateElements, {
            opacity: 1,
            y: 0,
            duration: 0.6,
          });
        }

        if (revealElements.length > 0) {
          revealTl.to(
            revealElements,
            {
              opacity: 1,
              y: 0,
              stagger: 0.6,
              duration: 1.2,
            },
            immediateElements.length > 0 ? "-=0.2" : 0,
          );
        }

        revealTimelines.push(revealTl);
      }

      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
        defaults: {
          ease: "power2.out",
        },
      });

      if (panelType !== "text") {
        if (immediateElements.length > 0) {
          pinTl.to(immediateElements, {
            opacity: 1,
            y: 0,
            duration: 0.6,
          });
        }

        if (revealElements.length > 0) {
          pinTl.to(
            revealElements,
            {
              opacity: 1,
              y: 0,
              stagger: 0.3,
              duration: 1,
            },
            immediateElements.length > 0 ? "-=0.2" : 0,
          );
        }
      }

      pinTl.to({}, { duration: 1.5 });
      pinTimelines.push(pinTl);
    });

    return () => {
      pinTimelines.forEach((timeline) => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      });
      revealTimelines.forEach((timeline) => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      });
    };
  }, [lines, hasPhone]);

  return (
    <section
      id={id}
      data-step={step}
      data-step-progress
      className="relative w-full"
      ref={sectionRef}
    >
      <div className="relative w-full h-[250vh]" data-panel="text">
        <div
          className="h-screen w-full bg-background flex items-center justify-center overflow-hidden"
          style={{ zIndex: step }}
          data-slide
        >
          <div className="w-full min-h-screen px-6 md:px-12 lg:px-24 pt-24 pb-12 flex flex-col items-center justify-start text-center md:items-start md:text-left">
            <div className="space-y-6 max-w-2xl">
              <div
                className="inline-flex items-center justify-center bg-primary/10 px-4 py-2 rounded-full"
                data-reveal-immediate
              >
                <span className="text-sm font-medium text-primary">
                  Paso {step}
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                data-reveal-immediate
              >
                {title}
              </h2>
              <div className="space-y-3">
                {lines.map((line, index) => (
                  <p
                    key={index}
                    className="text-lg text-muted-foreground leading-relaxed"
                    data-reveal
                  >
                    {line}
                    {index < lines.length - 1 ? "." : ""}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {hasPhone ? (
        <div className="relative w-full h-[250vh]" data-panel="phone">
          <div
            className="h-screen w-full bg-background flex items-center justify-center overflow-hidden"
            style={{ zIndex: step + 1 }}
            data-slide
          >
            <div className="w-full min-h-screen px-6 md:px-12 lg:px-24 py-16 flex flex-col items-center justify-center text-center">
              <div className="relative flex w-full items-center justify-center min-h-[320px] md:min-h-[520px]">
                <div className="relative z-10" data-reveal-immediate>
                  {children}
                </div>
                <div
                  className="absolute left-1/2 top-16 -translate-x-[calc(50%+180px)] md:top-24 md:-translate-x-[calc(50%+350px)]"
                  data-reveal
                >
                  <div className="rounded-full border border-primary/20 bg-background/90 px-3 py-1 text-[11px] md:text-sm font-medium text-muted-foreground shadow-lg backdrop-blur">
                    Tooltip 1
                  </div>
                </div>
                <div
                  className="absolute right-1/2 top-10 translate-x-[calc(50%+180px)] md:top-20 md:translate-x-[calc(50%+350px)]"
                  data-reveal
                >
                  <div className="rounded-full border border-primary/20 bg-background/90 px-3 py-1 text-[11px] md:text-sm font-medium text-muted-foreground shadow-lg backdrop-blur">
                    Tooltip 2
                  </div>
                </div>
                <div
                  className="absolute left-1/2 bottom-20 -translate-x-[calc(50%+180px)] md:bottom-28 md:-translate-x-[calc(50%+350px)]"
                  data-reveal
                >
                  <div className="rounded-full border border-primary/20 bg-background/90 px-3 py-1 text-[11px] md:text-sm font-medium text-muted-foreground shadow-lg backdrop-blur">
                    Tooltip 3
                  </div>
                </div>
                <div
                  className="absolute right-1/2 bottom-10 translate-x-[calc(50%+180px)] md:bottom-16 md:translate-x-[calc(50%+350px)]"
                  data-reveal
                >
                  <div className="rounded-full border border-primary/20 bg-background/90 px-3 py-1 text-[11px] md:text-sm font-medium text-muted-foreground shadow-lg backdrop-blur">
                    Tooltip 4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};
