import { GraduationCap } from "lucide-react";
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

const ParaDocentes = () => {
  const { t } = useTranslation();
  const content = t("audiences.docentes", { returnObjects: true }) as AudienceContent;

  return (
    <AudiencePage
      icon={GraduationCap}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      sections={content.sections}
      note={content.note}
      primary={{
        label: content.primaryCta,
        href: "https://app.mehmiro.com/onboarding",
      }}
      secondary={{
        label: content.secondaryCta,
        href: "/#embajadores",
      }}
    />
  );
};

export default ParaDocentes;
