import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/use-mobile";

interface ScrollStorySectionProps {
  id: string;
  title: string;
  description: string;
  step: number;
  children?: ReactNode;
  completionImageSrc?: string;
  completionVideoSrc?: string;
  backgroundImageSrc?: string;
}

export const ScrollStorySection = ({
  id,
  title,
  description,
  step,
  children,
  completionImageSrc,
  completionVideoSrc,
  backgroundImageSrc,
}: ScrollStorySectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasPhone = Boolean(children);
  const isMobile = useIsMobile();
  const textZIndex = step;
  const phoneZIndex = step + 10;
  const backgroundStyle = backgroundImageSrc
    ? {
        backgroundImage: `url(${backgroundImageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : undefined;

  const lines = description
    .split(". ")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const isQuestion = (line: string) =>
    line.startsWith("¿") && line.endsWith("?");

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

    const setupPanels = (isMobileView: boolean) => {
      const pinTimelines: gsap.core.Timeline[] = [];
      const revealTimelines: gsap.core.Timeline[] = [];

      panels.forEach((panel) => {
        const panelType = panel.dataset.panel ?? "text";
        const slide = panel.querySelector<HTMLElement>("[data-slide]");

        if (!slide) {
          return;
        }

        const img = slide.querySelector<HTMLImageElement>(
          `#phone-screen-img-${step}`,
        );
        const video = slide.querySelector<HTMLVideoElement>(
          `#phone-screen-video-${step}`,
        );
        const tooltips = Array.from(
          slide.querySelectorAll<HTMLElement>("[data-tooltip]"),
        );
        const originalImgSrc = img?.dataset.originalSrc;
        if (video) {
          video.controls = true;
          if (completionVideoSrc) {
            gsap.set(video, { autoAlpha: 0, pointerEvents: "none" });
          }
        }
        if (img) {
          gsap.set(img, { pointerEvents: "none" });
        }
        if (tooltips.length > 0) {
          gsap.set(tooltips, { pointerEvents: "none" });
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
            y: panelType === "phone" ? 0 : 20,
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
              start: "top 85%",
              end: isMobileView ? "bottom 80%" : "bottom top",
              scrub: isMobileView ? 0.2 : 1,
            },
            defaults: {
              ease: "power2.out",
            },
          });

          if (immediateElements.length > 0) {
            revealTl.to(immediateElements, {
              opacity: 1,
              y: 0,
              duration: isMobileView ? 0.3 : 0.6,
            });
          }

          if (revealElements.length > 0) {
            revealTl.to(
              revealElements,
              {
                opacity: 1,
                y: 0,
                stagger: isMobileView ? 0.2 : 0.6,
                duration: isMobileView ? 0.4 : 1.2,
              },
              immediateElements.length > 0 ? "-=0.2" : 0,
            );
          }

          revealTimelines.push(revealTl);
        }

        let completionApplied = false;
        const applyCompletion = (showCompletion: boolean) => {
          if (!completionImageSrc && !completionVideoSrc) {
            return;
          }

          if (showCompletion && !completionApplied) {
            completionApplied = true;
            if (completionImageSrc && img) {
              img.src = completionImageSrc;
            }
            gsap.set(tooltips, { autoAlpha: 0 });
          } else if (!showCompletion && completionApplied) {
            completionApplied = false;
            if (img) {
              if (originalImgSrc) {
                img.src = originalImgSrc;
              }
              gsap.set(img, { autoAlpha: 1, display: "block" });
            }
            gsap.set(tooltips, { autoAlpha: 1 });
          }
        };

        const isPhonePanel = panelType === "phone";
        if (isPhonePanel) {
          if (!isMobileView) {
            const desktopPhoneTl = gsap.timeline({
              scrollTrigger: {
                trigger: panel,
                start: "top top",
                end: "+=100%",
                scrub: true,
                pin: true,
                pinSpacing: false,
                anticipatePin: 1,
              },
              defaults: {
                ease: "power2.out",
              },
            });

            if (immediateElements.length > 0) {
              desktopPhoneTl.to(immediateElements, {
                opacity: 1,
                duration: 0.2,
              });
            }

            if (revealElements.length > 0) {
              desktopPhoneTl.to(
                revealElements,
                {
                  opacity: 1,
                  y: 0,
                  stagger: 0.35,
                  duration: 0.7,
                },
                immediateElements.length > 0 ? "+=0.15" : 0.15,
              );
            }

            if (completionVideoSrc && video) {
              desktopPhoneTl.to(tooltips, { autoAlpha: 0, duration: 0.2 }, ">");
              if (img) {
                desktopPhoneTl.to(img, { autoAlpha: 0, duration: 0.3 }, "<");
              }
              desktopPhoneTl.to(
                video,
                { autoAlpha: 1, pointerEvents: "auto", duration: 0.3 },
                "<",
              );
            }

            revealTimelines.push(desktopPhoneTl);
            return;
          }

          const shouldPin = isMobileView;
          const pinEnd = isMobileView ? "+=80%" : "bottom top";
          const pinTl = gsap.timeline({
            scrollTrigger: {
              trigger: panel,
              start: "top top",
              end: pinEnd,
              scrub: isMobileView ? 0.6 : 1,
              pin: shouldPin,
              pinSpacing: shouldPin ? false : true,
              anticipatePin: 1,
              onLeaveBack: () => {
                applyCompletion(false);
                if (tooltips.length > 0) {
                  gsap.set(tooltips, { autoAlpha: 1 });
                }
              },
            },
            defaults: {
              ease: "power2.out",
            },
          });

          if (immediateElements.length > 0 && isMobileView) {
            const phoneIntroTl = gsap.timeline({
              scrollTrigger: {
                trigger: panel,
                start: "top 85%",
                end: "top center",
                scrub: true,
              },
              defaults: {
                ease: "power2.out",
              },
            });

            phoneIntroTl.to(immediateElements, {
              opacity: 1,
              duration: 1,
            });

            revealTimelines.push(phoneIntroTl);
          }

          if (revealElements.length > 0 && isMobileView) {
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

          if (completionVideoSrc && video) {
            pinTl.to(tooltips, { autoAlpha: 0, duration: 0.2 }, ">");
            if (img) {
              pinTl.to(img, { autoAlpha: 0, duration: 0.3 }, "<");
            }
            pinTl.to(
              video,
              { autoAlpha: 1, pointerEvents: "auto", duration: 0.3 },
              "<",
            );
          }

          pinTl.to({}, { duration: 1.2 });
          pinTimelines.push(pinTl);
        }
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
    };

    const mm = gsap.matchMedia();
    mm.add("(max-width: 767px)", () => setupPanels(true));
    mm.add("(min-width: 768px)", () => setupPanels(false));

    return () => {
      mm.revert();
    };
  }, [lines, hasPhone, completionImageSrc, completionVideoSrc, step]);

  return (
    <section
      id={id}
      data-step={step}
      data-step-progress
      className="relative w-full"
      ref={sectionRef}
    >
      <div
        className={`relative w-full ${isMobile ? "h-[110vh]" : "h-screen"}`}
        data-panel="text"
      >
        <div
          className="relative h-screen w-full bg-background flex items-center justify-center overflow-hidden"
          style={{
            zIndex: textZIndex,
            ...(backgroundStyle ?? {}),
          }}
          data-slide
        >
          {backgroundImageSrc && (
            <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none"></div>
          )}
          <div className="relative z-10 w-full min-h-screen px-6 md:px-12 lg:px-24 pt-20 pb-20 flex flex-col items-center justify-end text-center md:items-start md:text-left">
            <div className="space-y-6 max-w-2xl p-6 md:p-12 bg-black/30 rounded-xl backdrop-blur-sm">
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
              <div className="space-y-4">
                {lines.map((line, index) => (
                  <p
                    key={index}
                    className={`leading-relaxed ${
                      isQuestion(line)
                        ? "text-2xl md:text-3xl font-semibold"
                        : "text-lg text-muted-foreground"
                    }`}
                    data-reveal
                  >
                    {line}
                    {index < lines.length - 1 && !isQuestion(line) ? "." : ""}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {hasPhone ? (
        <>
          <div
            className="relative w-full h-screen md:h-screen"
            data-panel="phone"
          >
            <div
              className="h-screen w-full bg-background flex items-center justify-center overflow-hidden md:overflow-visible"
              style={{ zIndex: phoneZIndex }}
              data-slide
            >
              <div className="w-full min-h-screen px-6 md:px-12 lg:px-24 py-16 flex flex-col items-center justify-center text-center">
                <div
                  className="relative flex w-full items-center justify-center min-h-[240px] md:min-h-[520px]"
                  data-phone-anchor
                >
                  <div className="relative z-10" data-reveal-immediate>
                    {children}
                  </div>
                  {/* Step 1 tooltips */}
                  {step === 1 && (
                    <>
                      <div
                        className="absolute max-w-32 right-0 md:max-w-80 md:right-56 md:bottom-[250px] z-20"
                        data-reveal
                        data-tooltip
                      >
                        <div className="relative rounded-lg border border-blue-400 bg-white/95 px-4 py-2 text-sm md:text-base font-medium text-gray-800 shadow-lg backdrop-blur">
                          Haz una introducción sobre ti, tu escuela y tus
                          estudiantes, cuanto mas detalles mejor. Mira el
                          ejemplo
                          <div className="absolute -left-2 top-2/3 -translate-y-1/2 w-0 h-0 border-r-[10px] border-r-blue-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                        </div>
                      </div>
                      <div
                        className="absolute max-w-40 left-0 bottom-0 md:max-w-80 md:left-72 md:bottom-6 z-20"
                        data-reveal
                        data-tooltip
                      >
                        <div className="relative rounded-lg border border-green-400 bg-white/95 px-4 py-2 text-sm md:text-base font-medium text-gray-800 shadow-lg backdrop-blur">
                          Ahora envía tu introducción para que el sistema pueda
                          generar tu perfil y el de tu clase con tus
                          estudiantes. Sigue deslizando para ver que rápido es
                          el proceso.
                          <div className="absolute -right-2 top-1/2 md:top-1/3 -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-green-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                        </div>
                      </div>
                    </>
                  )}
                  {/* Step 2 tooltips */}
                  {step === 2 && (
                    <>
                      <div
                        className="absolute md:max-w-96 md:inset-x bottom-0 z-20"
                        data-reveal
                        data-tooltip
                      >
                        <div className="relative rounded-lg border border-blue-400 bg-white/95 px-4 py-2 text-sm md:text-base font-medium text-gray-800 shadow-lg backdrop-blur">
                          En el perfil del estudiante están las variables de
                          evaluación que Mehmiro entendió son las que importan
                          en tu materia. Puedes editarlas si lo deseas.
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-b-[10px] border-b-blue-400 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent"></div>
                        </div>
                      </div>

                      <div
                        className="absolute top-0 max-w-64 right-20 md:max-w-60 md:right-52 md:top-5 z-20"
                        data-reveal
                        data-tooltip
                      >
                        <div className="relative rounded-lg border border-green-400 bg-white/95 px-4 py-2 text-sm md:text-base font-medium text-gray-800 shadow-lg backdrop-blur">
                          Este es el asistente para convertir tu observación en
                          datos numéricos.
                          <div className="absolute -right-3 md:-left-2 top-1/2 md:top-1/3 -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-green-400 md:border-l-0 md:border-r-[10px] md:border-r-green-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                        </div>
                      </div>

                      <div
                        className="absolute top-28 max-w-52 right-28 md:max-w-72 md:top-44 md:right-40 z-20"
                        data-reveal
                        data-tooltip
                      >
                        <div className="relative rounded-lg border border-purple-400 bg-white/95 px-4 py-2 text-sm md:text-base font-medium text-gray-800 shadow-lg backdrop-blur">
                          En cualquier momento puedes aplicar el análisis de IA
                          y te dará un informe de su estado general con ayudas
                          para mejorar las zonas flojas de su aprendizaje.
                          <div className="absolute -right-3 md:-left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-purple-400 md:border-l-0 md:border-r-[10px] md:border-r-purple-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="h-[80vh] w-full md:hidden" aria-hidden="true" />
          <div
            className="hidden md:block h-[100vh] w-full"
            aria-hidden="true"
          />
        </>
      ) : null}
    </section>
  );
};
