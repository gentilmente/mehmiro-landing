import { Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AudiencePage, type AudienceSection } from "@/components/AudiencePage";
import { SchoolVisual } from "@/components/AudienceVisuals";

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

  return (
    <AudiencePage
      icon={Building2}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      sections={content.sections}
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
