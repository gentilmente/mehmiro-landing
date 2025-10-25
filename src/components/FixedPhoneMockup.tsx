import { ReactNode } from "react";

interface FixedPhoneMockupProps {
  children: ReactNode;
}

export const FixedPhoneMockup = ({ children }: FixedPhoneMockupProps) => {
  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 z-40 pointer-events-none w-1/2 flex items-center justify-center pr-12 transition-all duration-700 ease-in-out">
      <div className="relative w-[282px] md:w-[334px]">
        <div className="relative aspect-[9/19.5] bg-card rounded-[3rem] shadow-2xl border-8 border-muted overflow-hidden">
          {/* Screen content */}
          <div className="w-full h-full overflow-hidden bg-background">
            {children}
          </div>
          
          {/* Screen notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-card rounded-b-3xl z-50" />
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 scale-90" />
      </div>
    </div>
  );
};