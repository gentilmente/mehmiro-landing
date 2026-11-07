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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = icons[index] ?? Users;
            return (
              <Link
                key={item.title}
                to={item.href}
                className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
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
