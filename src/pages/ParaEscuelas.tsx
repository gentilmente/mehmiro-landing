import { Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AudiencePage, type AudienceSection } from "@/components/AudiencePage";
import { InstitutionTrackingMap, SchoolVisual } from "@/components/AudienceVisuals";

interface AudienceContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  note?: string;
  closingDescription: string;
  sections: AudienceSection[];
}

const ParaEscuelas = () => {
  const { t } = useTranslation();
  const content = t("audiences.escuelas", { returnObjects: true }) as AudienceContent;
  const sections = content.sections.map((section, index) =>
    index === 0 ? { ...section, visual: <InstitutionTrackingMap /> } : section,
  );

  return (
    <AudiencePage
      icon={Building2}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      sections={sections}
      note={content.note}
      primary={{
        label: content.primaryCta,
        href: "#lead-capture",
      }}
      secondary={{
        label: content.secondaryCta,
        href: "/learn/institutions",
      }}
      tone={1}
      visual={<SchoolVisual />}
      closingDescription={content.closingDescription}
    />
  );
};

export default ParaEscuelas;
