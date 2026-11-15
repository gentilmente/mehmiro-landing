import { Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AudiencePage, type AudienceSection } from "@/components/AudiencePage";
import { FamilyVisual } from "@/components/AudienceVisuals";

interface AudienceContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  note?: string;
  closingDescription: string;
  closingCta: string;
  sections: AudienceSection[];
}

const ParaFamilias = () => {
  const { t, i18n } = useTranslation();
  const content = t("audiences.familias", { returnObjects: true }) as AudienceContent;
  const shareText = t("audiences.familias.shareText");
  const shareUrl = i18n.resolvedLanguage?.startsWith("en")
    ? "https://mehmiro.com/en/para-familias"
    : "https://mehmiro.com/para-familias";
  const shareHref = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;

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
        href: shareHref,
      }}
      tone={2}
      visual={<FamilyVisual />}
      closingDescription={content.closingDescription}
      closingPrimaryLabel={content.closingCta}
      closingStacked
      stackSections
    />
  );
};

export default ParaFamilias;
