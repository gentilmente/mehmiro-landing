import { useEffect, useRef, useState } from "react";

interface StorySectionProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

export const StorySection = ({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
}: StorySectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center ${
            reversed ? "md:flex-row-reverse" : ""
          }`}
        >
          <div
            className={`space-y-6 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            } ${reversed ? "md:order-2" : ""}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          <div
            className={`${
              isVisible ? "animate-scale-in" : "opacity-0"
            } ${reversed ? "md:order-1" : ""}`}
          >
            <div className="relative">
              {/* Phone mockup frame */}
              <div className="relative mx-auto w-full max-w-sm">
                <div className="relative aspect-[9/19.5] bg-card rounded-[3rem] shadow-2xl border-8 border-muted overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                  />
                  {/* Screen notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-background rounded-b-3xl" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 scale-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
