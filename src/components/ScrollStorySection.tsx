import { ReactNode } from "react";

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
}: ScrollStorySectionProps) => {
  return (
    <section
      id={id}
      data-step={step}
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="w-1/2 px-6 md:px-12 flex items-center">
        <div className="space-y-6 text-left max-w-xl">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-primary">Paso {step}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};