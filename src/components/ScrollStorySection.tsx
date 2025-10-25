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
      <div className="container mx-auto px-6 max-w-2xl mr-auto">
        <div className="space-y-6 text-left pl-0 md:pl-[450px]">
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