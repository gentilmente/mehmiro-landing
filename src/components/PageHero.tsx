import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface PageHeroProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
}

export const PageHero = ({
  icon: Icon,
  title,
  description,
  children,
}: PageHeroProps) => (
  <section className="page-hero">
    <div className="page-hero-inner">
      <div className="page-hero-icon">
        <Icon className="h-10 w-10" aria-hidden="true" />
      </div>
      <h1 className="page-hero-title">{title}</h1>
      <p className="page-hero-lede">{description}</p>
      {children ? <div className="page-hero-actions">{children}</div> : null}
    </div>
  </section>
);
