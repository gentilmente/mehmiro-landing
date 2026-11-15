import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AudiencePage, type AudienceSection } from "@/components/AudiencePage";
import { TeacherVisual } from "@/components/AudienceVisuals";
import { TeacherDemoDialog, type TeacherDemoContent } from "@/components/TeacherDemoDialog";

interface AudienceContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  note?: string;
  closingDescription: string;
  demo: TeacherDemoContent;
  sections: AudienceSection[];
}

const ParaDocentes = () => {
  const { t } = useTranslation();
  const content = t("audiences.docentes", { returnObjects: true }) as AudienceContent;
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <AudiencePage
      icon={GraduationCap}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      sections={content.sections}
      note={content.note}
      primary={{
        label: content.primaryCta,
        onClick: () => setDemoOpen(true),
      }}
      secondary={{
        label: content.secondaryCta,
        href: "/#embajadores",
      }}
      tone={0}
      visual={<TeacherVisual />}
        closingDescription={content.closingDescription}
      />
      <TeacherDemoDialog
        open={demoOpen}
        onOpenChange={setDemoOpen}
        content={content.demo}
      />
    </>
  );
};

export default ParaDocentes;
