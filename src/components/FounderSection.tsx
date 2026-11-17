import {
  ArrowUpRight,
  Award,
  Building2,
  Code2,
  ExternalLink,
  MapPin,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { COMPANY } from "@/config/company";
import { LocalizedLink as Link } from "@/components/LocalizedLink";

interface FounderSectionProps {
  id?: string;
}

export const FounderSection = ({ id = "equipo" }: FounderSectionProps) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="px-6 py-16 sm:py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="section-eyebrow">
          <Users className="h-4 w-4" aria-hidden="true" />
          {t("founder.eyebrow")}
        </div>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          {t("founder.title")}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("founder.description")}
        </p>

        <div className="mt-10 rounded-2xl border border-border/60 bg-card p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div
              className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary"
              aria-hidden="true"
            >
              {COMPANY.founder.initials}
            </div>
            <div className="min-w-0">
              <h3 className="text-2xl font-bold">{COMPANY.founder.name}</h3>
              <p className="mt-1 font-medium text-primary">
                {t("founder.role")}
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {t("founder.bio")}
              </p>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {t("founder.linksLabel")}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <a
                    href={COMPANY.founder.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    {t("founder.linkedin")}
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                  <a
                    href={COMPANY.founder.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Code2 className="h-4 w-4" aria-hidden="true" />
                    {t("founder.github")}
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <div className="flex items-center gap-2 text-primary">
              <Building2 className="h-4 w-4" aria-hidden="true" />
              <h3 className="text-sm font-semibold">
                {t("founder.partnerLabel")}
              </h3>
            </div>
            <a
              href={COMPANY.partner.url}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-start gap-1 font-medium leading-snug text-foreground hover:text-primary"
            >
              {t("founder.partner")}
              <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t("founder.partnerDescription")}
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <div className="flex items-center gap-2 text-primary">
              <Award className="h-4 w-4" aria-hidden="true" />
              <h3 className="text-sm font-semibold">
                {t("founder.recognitionLabel")}
              </h3>
            </div>
            <a
              href={COMPANY.recognition.url}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-start gap-1 font-medium leading-snug text-foreground hover:text-primary"
            >
              {COMPANY.recognition.shortLabel}
              <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {COMPANY.recognition.label}
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-5">
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <h3 className="text-sm font-semibold">
                {t("founder.locationLabel")}
              </h3>
            </div>
            <p className="mt-3 font-medium text-foreground">
              {t("founder.location")}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">
                {t("founder.statusLabel")}:
              </span>{" "}
              {t("founder.status")}
            </p>
          </div>
        </div>

        <Link
          to="/about"
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {t("founder.aboutLink")}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};
