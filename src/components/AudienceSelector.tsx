import type { CSSProperties } from "react";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Microscope,
  Users,
} from "lucide-react";

interface AudienceItem {
  title: string;
  description: string;
  href: string;
}

const icons = [GraduationCap, Building2, Users, Microscope];

export const AudienceSelector = () => {
  const { t } = useTranslation();
  const items = t("audienceSelector.items", { returnObjects: true }) as AudienceItem[];

  return (
    <section id="para-quien" className="px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <div className="section-eyebrow justify-center">
            <Users className="h-4 w-4" aria-hidden="true" />
            {t("audienceSelector.badge")}
          </div>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            {t("audienceSelector.title")}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t("audienceSelector.description")}
          </p>
        </div>

        <div className="audience-selector-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = icons[index] ?? Users;
            return (
              <Link
                key={item.title}
                to={item.href}
                className={`audience-card audience-tone-${index} group relative flex h-full flex-col overflow-hidden rounded-2xl border p-4 transition-all hover:-translate-y-0.5`}
                style={{ "--card-index": index } as CSSProperties}
              >
                <span className="audience-card-index" aria-hidden="true">
                  0{index + 1}
                </span>
                <div className="audience-card-head">
                  <div className="audience-card-icon flex h-9 w-9 items-center justify-center rounded-lg">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {t("audienceSelector.more")}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
