import { Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AudiencePage, type AudienceSection } from "@/components/AudiencePage";

interface AudienceContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  note?: string;
  sections: AudienceSection[];
}

const ParaFamilias = () => {
  const { t } = useTranslation();
  const content = t("audiences.familias", { returnObjects: true }) as AudienceContent;

  return (
    <AudiencePage
      icon={Users}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      sections={content.sections}
      note={content.note}
      primary={{
        label: content.primaryCta,
        href: "/privacy",
      }}
      secondary={{
        label: content.secondaryCta,
        href: "/#preguntas-frecuentes",
      }}
    />
  );
};

export default ParaFamilias;
