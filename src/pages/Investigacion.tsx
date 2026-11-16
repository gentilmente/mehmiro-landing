import { Microscope } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AudiencePage, type AudienceSection } from "@/components/AudiencePage";
import { ResearchVisual } from "@/components/AudienceVisuals";

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

const Investigacion = () => {
  const { t } = useTranslation();
  const content = t("audiences.investigacion", { returnObjects: true }) as AudienceContent;

  return (
    <AudiencePage
      icon={Microscope}
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
        href: "/evidencia",
      }}
      tone={3}
      visual={<ResearchVisual />}
      closingDescription={content.closingDescription}
    />
  );
};

export default Investigacion;
