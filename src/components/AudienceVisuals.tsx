import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Brain,
  Building2,
  Eye,
  FileCheck2,
  LockKeyhole,
  Mic,
  Microscope,
  ShieldCheck,
  Users,
} from "lucide-react";
import teacherVoiceNote from "@/assets/teacher-voice-note.webp";
import principalCongrats from "@/assets/principal-congrats.webp";

export const TeacherVisual = () => {
  const { t } = useTranslation();

  return (
    <div className="audience-photo-frame">
      <img src={teacherVoiceNote} alt={t("audienceVisual.voiceAlt")} />
      <div className="audience-floating-note">
        <span className="audience-floating-icon">
          <Mic className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <strong>{t("audienceVisual.voiceLabel")}</strong>
          <span>{t("audienceVisual.voiceDetail")}</span>
        </div>
      </div>
    </div>
  );
};

export const SchoolVisual = () => {
  const { t } = useTranslation();

  return (
    <div className="audience-photo-frame audience-photo-frame--school">
      <img src={principalCongrats} alt={t("audienceVisual.schoolAlt")} />
      <div className="audience-floating-note">
        <span className="audience-floating-icon">
          <Building2 className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <strong>{t("audienceVisual.schoolLabel")}</strong>
          <span>{t("audienceVisual.schoolDetail")}</span>
        </div>
      </div>
    </div>
  );
};

export const FamilyVisual = () => {
  const { t } = useTranslation();
  const rows = t("audienceVisual.familyRows", { returnObjects: true }) as string[];
  const icons = [Eye, LockKeyhole, Brain];

  return (
    <div className="audience-visual-card">
      <div className="audience-visual-header">
        <ShieldCheck className="h-5 w-5" aria-hidden="true" />
        {t("audienceVisual.familyLabel")}
      </div>
      <div className="audience-visual-rows">
        {rows.map((row, index) => {
          const Icon = icons[index] ?? ShieldCheck;
          return (
            <div key={row} className="audience-visual-row">
              <span className="audience-visual-icon">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <strong>{row}</strong>
            </div>
          );
        })}
      </div>
      <p className="audience-visual-footer">{t("audienceVisual.familyFooter")}</p>
    </div>
  );
};

export const ResearchVisual = () => {
  const { t } = useTranslation();
  const steps = t("audienceVisual.researchSteps", { returnObjects: true }) as string[];
  const icons = [Mic, FileCheck2, Users];

  return (
    <div className="audience-visual-card audience-visual-card--research">
      <div className="audience-visual-header">
        <Microscope className="h-5 w-5" aria-hidden="true" />
        {t("audienceVisual.researchLabel")}
      </div>
      <div className="audience-flow">
        {steps.map((step, index) => {
          const Icon = icons[index] ?? FileCheck2;
          return (
            <div key={step} className="audience-flow-step">
              <span className="audience-flow-number">0{index + 1}</span>
              <Icon className="h-5 w-5" aria-hidden="true" />
              <strong>{step}</strong>
              {index < steps.length - 1 && (
                <ArrowRight className="audience-flow-arrow" aria-hidden="true" />
              )}
            </div>
          );
        })}
      </div>
      <p className="audience-visual-footer">{t("audienceVisual.researchFooter")}</p>
    </div>
  );
};

export const EvidenceVisual = () => {
  const { t } = useTranslation();
  const rows = t("audienceVisual.evidenceRows", { returnObjects: true }) as string[];

  return (
    <div className="audience-visual-card audience-visual-card--evidence">
      <div className="audience-visual-header">
        <FileCheck2 className="h-5 w-5" aria-hidden="true" />
        {t("audienceVisual.evidenceLabel")}
      </div>
      <div className="audience-evidence-rows">
        {rows.map((row, index) => (
          <div key={row} className="audience-evidence-row">
            <span className={`audience-evidence-dot audience-evidence-dot--${index}`} />
            <strong>{row}</strong>
          </div>
        ))}
      </div>
      <p className="audience-visual-footer">{t("audienceVisual.evidenceFooter")}</p>
    </div>
  );
};
