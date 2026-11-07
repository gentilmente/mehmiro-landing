import { FileCheck2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AudiencePage, type AudienceSection } from "@/components/AudiencePage";
import { EvidenceVisual } from "@/components/AudienceVisuals";

interface AudienceContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  note?: string;
  sections: AudienceSection[];
}

const Evidencia = () => {
  const { t } = useTranslation();
  const content = t("audiences.evidencia", { returnObjects: true }) as AudienceContent;

  return (
    <AudiencePage
      icon={FileCheck2}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      sections={content.sections}
      note={content.note}
      primary={{
        label: content.primaryCta,
        href: "mailto:info@mehmiro.com?subject=Colaboraci%C3%B3n%20acad%C3%A9mica",
      }}
      secondary={{
        label: content.secondaryCta,
        href: "/investigacion",
      }}
      visual={<EvidenceVisual />}
    />
  );
};

export default Evidencia;
