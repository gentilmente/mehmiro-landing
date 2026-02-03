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
      const phoneAnchor = slide.querySelector<HTMLElement>("[data-phone-anchor]");
      const videoOverlay = slide.querySelector<HTMLElement>(
        "[data-video-overlay]",
      );
      const videoPlayButton = slide.querySelector<HTMLButtonElement>(
        "[data-video-play]",
      );
      const tooltips = Array.from(
        slide.querySelectorAll<HTMLElement>("[data-tooltip]"),
      );
      const originalImgSrc = img?.dataset.originalSrc;

      if (video && videoPlayButton && videoOverlay) {
        const handlePlay = () => {
          video.muted = true;
          video.play().catch(() => undefined);
          gsap.set(videoOverlay, { autoAlpha: 0 });
        };
        videoPlayButton.addEventListener("click", handlePlay);
        revealTimelines.push({
          kill: () => videoPlayButton.removeEventListener("click", handlePlay),
        } as gsap.core.Timeline);
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
            start: "top 85%",
            end: isMobile ? "bottom 80%" : "bottom top",
            scrub: isMobile ? 0.2 : 1,
          },
          defaults: {
            ease: "power2.out",
          },
        });

        if (immediateElements.length > 0) {
          revealTl.to(immediateElements, {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.3 : 0.6,
          });
        }

        if (revealElements.length > 0) {
          revealTl.to(
            revealElements,
            {
              opacity: 1,
              y: 0,
              stagger: isMobile ? 0.2 : 0.6,
              duration: isMobile ? 0.4 : 1.2,
            },
            immediateElements.length > 0 ? "-=0.2" : 0,
          );
        }

        revealTimelines.push(revealTl);
      }

      const isTextPanel = panelType === "text";
      const shouldPin = !isMobile || panelType === "phone";
      let completionApplied = false;
      const applyCompletion = (showCompletion: boolean) => {
        if (!completionImageSrc && !completionVideoSrc) {
          return;
        }

        if (showCompletion && !completionApplied) {
          completionApplied = true;
          if (completionVideoSrc && video) {
            video.currentTime = 0;
            gsap.set(video, { autoAlpha: 1 });
            if (img) {
              gsap.set(img, { autoAlpha: 0 });
            }
            if (videoOverlay) {
              gsap.set(videoOverlay, { autoAlpha: 1 });
            }
          } else if (completionImageSrc && img) {
            img.src = completionImageSrc;
          }
          gsap.set(tooltips, { autoAlpha: 0 });
        } else if (!showCompletion && completionApplied) {
          completionApplied = false;
          if (completionVideoSrc && video) {
            video.pause();
            video.currentTime = 0;
            gsap.set(video, { autoAlpha: 0 });
            if (videoOverlay) {
              gsap.set(videoOverlay, { autoAlpha: 0 });
            }
          }
          if (img) {
            if (originalImgSrc) {
              img.src = originalImgSrc;
            }
            gsap.set(img, { autoAlpha: 1 });
          }
          gsap.set(tooltips, { autoAlpha: 1 });
        }
      };

      const isPhonePanel = panelType === "phone";
      const pinStart =
        isMobile && isPhonePanel ? "top top" : "top top";
      const pinEnd =
        isMobile && isPhonePanel ? "+=80%" : "bottom top";
      const completionThreshold = isMobile ? 0.7 : 0.8;
      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: pinStart,
          end: pinEnd,
          scrub: isMobile ? 0.6 : 1,
          pin: shouldPin,
          pinSpacing: shouldPin && !(isMobile && isPhonePanel),
          anticipatePin: 1,
          onUpdate: (self) => {
            if (panelType !== "phone") {
              return;
            }
            if (!completionImageSrc && !completionVideoSrc) {
              return;
            }
            if (self.progress >= completionThreshold) {
              applyCompletion(true);
            } else {
              applyCompletion(false);
            }
          },
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

      if (panelType !== "text") {
        if (immediateElements.length > 0 && isMobile) {
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
            y: 0,
            duration: 1,
          });

          revealTimelines.push(phoneIntroTl);
        }

        if (immediateElements.length > 0 && !isMobile) {
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

        // completion is tied to scroll progress via onUpdate
      }

      pinTl.to({}, { duration: 1.2 });
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
  }, [lines, hasPhone, completionImageSrc, completionVideoSrc, step, isMobile]);

  return (
    <section
      id={id}
      data-step={step}
      data-step-progress
      className="relative w-full"
      ref={sectionRef}
    >
      <div
        className={`relative w-full ${isMobile ? "h-[110vh]" : "h-[250vh]"}`}
        data-panel="text"
      >
        <div
          className="h-screen w-full bg-background flex items-center justify-center overflow-hidden"
          style={{
            zIndex: step,
            ...(backgroundImageSrc && {
              backgroundImage: `url(${backgroundImageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }),
          }}
          data-slide
        >
          {backgroundImageSrc && (
            <div className="absolute inset-0 bg-black/30 z-0"></div>
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
          <div className="relative w-full h-screen" data-panel="phone">
            <div
              className="h-screen w-full bg-background flex items-center justify-center overflow-hidden"
              style={{ zIndex: step + 10 }}
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
                        className="absolute left-1/2 top-16 -translate-x-[calc(50%+120px)] md:top-24 md:-translate-x-[calc(50%+300px)] z-20"
                        data-reveal
                        data-tooltip
                      >
                        <div className="relative rounded-lg border border-blue-400 bg-white/95 px-4 py-2 text-sm md:text-base font-medium text-gray-800 shadow-lg backdrop-blur">
                          Haz una introducción sobre ti, tu escuela y tus
                          estudiantes, cuanto mas detalles mejor. Mira el
                          ejemplo
                          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-blue-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                        </div>
                      </div>
                      <div
                        className="absolute right-1/2 bottom-10 translate-x-[calc(50%+120px)] md:bottom-16 md:translate-x-[calc(50%+300px)] z-20"
                        data-reveal
                        data-tooltip
                      >
                        <div className="relative rounded-lg border border-green-400 bg-white/95 px-4 py-2 text-sm md:text-base font-medium text-gray-800 shadow-lg backdrop-blur">
                          Ahora envía tu presentación para que el sistema pueda
                          generar tu perfil y el de tu clase con tus
                          estudiantes. Sigue deslizando para ver que rápido es
                          el proceso.
                          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[10px] border-r-green-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                        </div>
                      </div>
                    </>
                  )}
                  {/* Step 2 tooltips */}
                  {step === 2 && (
                    <>
                      <div
                        className="absolute left-1/2 top-12 -translate-x-1/2 z-20"
                        data-reveal
                        data-tooltip
                      >
                        <div className="relative rounded-lg border border-blue-400 bg-white/95 px-4 py-2 text-sm md:text-base font-medium text-gray-800 shadow-lg backdrop-blur">
                          En el perfil del estudiante tienes las variables de
                          evaluación que cargamos al principio, mediante un
                          comentario que puedes grabar al verlo trabajar, quedan
                          registros frecuentes.
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-t-[10px] border-t-blue-400 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent"></div>
                        </div>
                      </div>
                      <div
                        className="absolute right-1/2 top-40 translate-x-[calc(50%+120px)] md:top-56 md:translate-x-[calc(50%+300px)] z-20"
                        data-reveal
                        data-tooltip
                      >
                        <div className="relative rounded-lg border border-green-400 bg-white/95 px-4 py-2 text-sm md:text-base font-medium text-gray-800 shadow-lg backdrop-blur">
                          Este es el asistente para convertir tu observación en
                          datos numéricos.
                          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[10px] border-r-green-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                        </div>
                      </div>
                      <div
                        className="absolute right-1/2 bottom-10 translate-x-[calc(50%+120px)] md:bottom-16 md:translate-x-[calc(50%+300px)] z-20"
                        data-reveal
                        data-tooltip
                      >
                        <div className="relative rounded-lg border border-purple-400 bg-white/95 px-4 py-2 text-sm md:text-base font-medium text-gray-800 shadow-lg backdrop-blur">
                          En cualquier momento puedes aplicar el análisis de IA
                          y te dará un informe de su estado general con ayudas
                          para mejorar las zonas flojas de su aprendizaje.
                          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-r-[10px] border-r-purple-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="h-[80vh] w-full md:hidden" aria-hidden="true" />
        </>
      ) : null}
    </section>
  );
};
