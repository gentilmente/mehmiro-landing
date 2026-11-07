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
        href: "mailto:info@mehmiro.com?subject=Diagn%C3%B3stico%20para%20mi%20escuela",
      }}
      secondary={{
        label: content.secondaryCta,
        href: "/#mehmiro",
      }}
      visual={<SchoolVisual />}
    />
  );
};

export default ParaEscuelas;
