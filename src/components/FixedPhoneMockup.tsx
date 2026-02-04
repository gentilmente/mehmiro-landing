import { ReactNode } from "react";

interface FixedPhoneMockupProps {
  children?: ReactNode;
  isCenteredMobile?: boolean;
  variant?: "fixed" | "inline";
  withId?: boolean;
  imageSrc?: string;
  step?: number;
  completionVideoSrc?: string;
}

export const FixedPhoneMockup = ({
  isCenteredMobile = false,
  variant = "fixed",
  withId = variant === "fixed",
  imageSrc,
  step,
  completionVideoSrc,
}: FixedPhoneMockupProps) => {
  const isInline = variant === "inline";
  const containerClasses = isInline
    ? "relative z-10 w-full flex justify-center items-center"
    : `fixed z-40 pointer-events-none w-full sm:w-1/2 flex pr-6 sm:pr-12 transition-all duration-700 ease-in-out ${
        isCenteredMobile
          ? "top-1/2 -translate-y-1/2 justify-center items-center"
          : "bottom-8 right-0 sm:top-1/2 sm:-translate-y-1/2 justify-end items-end sm:justify-center sm:items-center"
      }`;

  return (
    <div className={containerClasses}>
      <div
        id={withId ? "phone-mockup" : undefined}
        className="relative w-[286px] sm:w-[338px] md:w-auto md:h-[90vh] md:max-h-[90vh]"
      >
        <div className="relative aspect-[9/19.5] w-full md:h-full md:w-auto bg-card rounded-[2rem] shadow-2xl border-8 border-muted overflow-hidden">
          {/* Screen content */}
          <div className="relative w-full h-full overflow-hidden bg-white">
            {imageSrc ? (
              <img
                id={`phone-screen-img${step ? `-${step}` : ""}`}
                src={imageSrc}
                alt="Phone screen content"
                data-original-src={imageSrc}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-100 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Screencast placeholder
              </div>
            )}
            {completionVideoSrc ? (
              <video
                id={`phone-screen-video${step ? `-${step}` : ""}`}
                src={completionVideoSrc}
                className="absolute inset-0 h-full w-full object-cover opacity-0 pointer-events-none"
                controls
                playsInline
                preload="metadata"
                poster={imageSrc}
              />
            ) : null}
          </div>

          {/* Screen notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-card rounded-b-3xl z-50" />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gray-200/50 blur-3xl -z-10 scale-90" />
      </div>
    </div>
  );
};
