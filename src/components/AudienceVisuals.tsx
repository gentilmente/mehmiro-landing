import { useTranslation } from "react-i18next";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  FileCheck2,
  FolderKanban,
  Lightbulb,
  MessageCircle,
  Mic,
  Microscope,
  Sparkles,
  Users,
} from "lucide-react";
import teacherVoiceNote from "@/assets/teacher-voice-note.webp";
import studentProfile from "@/assets/student-profile.png";

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
      <img src={studentProfile} alt={t("audienceVisual.schoolAlt")} />
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
  const clues = t("audienceVisual.familyClues", { returnObjects: true }) as string[];

  return (
    <div className="audience-visual-card family-preview">
      <div className="family-preview-top">
        <span>{t("audienceVisual.familyPreviewLabel")}</span>
        <span>{t("audienceVisual.familyPreviewTime")}</span>
      </div>

      <div className="family-news">
        <span className="family-news-icon">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <strong>{t("audienceVisual.familyNewsTitle")}</strong>
          <p>{t("audienceVisual.familyNewsText")}</p>
        </div>
      </div>

      <div className="family-clues">
        <div className="family-clues-header">
          <Lightbulb className="h-4 w-4" aria-hidden="true" />
          <strong>{t("audienceVisual.familyCluesTitle")}</strong>
        </div>
        <ul>
          {clues.map((clue) => (
            <li key={clue}>
              <span aria-hidden="true" />
              {clue}
            </li>
          ))}
        </ul>
      </div>

      <div className="family-chat">
        <div className="family-chat-header">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          <strong>{t("audienceVisual.familyChatTitle")}</strong>
        </div>
        <div className="family-chat-bubble family-chat-bubble--assistant">
          {t("audienceVisual.familyChatHint")}
        </div>
        <div className="family-chat-bubble family-chat-bubble--user">
          {t("audienceVisual.familyChatUser")}
        </div>
        <div className="family-chat-bubble family-chat-bubble--assistant">
          {t("audienceVisual.familyChatReply")}
        </div>
      </div>
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

export const InstitutionTrackingMap = () => {
  const { t } = useTranslation();
  const subjects = t("audienceVisual.schoolMap.subjects", { returnObjects: true }) as Array<{
    name: string;
    status: string;
    tone: "ok" | "warn";
  }>;
  const topics = t("audienceVisual.schoolMap.topicList", { returnObjects: true }) as string[];
  const days = t("audienceVisual.schoolMap.days", { returnObjects: true }) as string[];
  const events = t("audienceVisual.schoolMap.eventList", { returnObjects: true }) as string[];

  return (
    <div className="school-map">
      <div className="school-map-head">
        <span>
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          {t("audienceVisual.schoolMap.title")}
        </span>
        <span className="school-map-week">{t("audienceVisual.schoolMap.week")}</span>
      </div>

      <div className="school-map-subjects">
        {subjects.map((subject) => (
          <div key={subject.name} className="school-map-subject">
            <span>{subject.name}</span>
            <span className={`school-map-status school-map-status--${subject.tone}`}>
              {subject.tone === "ok" ? (
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              {subject.status}
            </span>
          </div>
        ))}
      </div>

      <div className="school-map-coherence">
        <div className="school-map-label-row">
          <span>{t("audienceVisual.schoolMap.coherence")}</span>
          <strong>{t("audienceVisual.schoolMap.coherenceStatus")}</strong>
        </div>
        <div className="school-map-bar" aria-hidden="true">
          <span />
        </div>
      </div>

      <div className="school-map-calendar">
        <div className="school-map-label-row">
          <span>{t("audienceVisual.schoolMap.calendar")}</span>
          <strong>{t("audienceVisual.schoolMap.calendarEvent")}</strong>
        </div>
        <div className="school-map-days" aria-hidden="true">
          {days.map((day, index) => (
            <span key={`${day}-${index}`} className={index === 2 ? "is-marked" : ""}>
              {day}
            </span>
          ))}
        </div>
      </div>

      <div className="school-map-topics">
        <span className="school-map-label-row">{t("audienceVisual.schoolMap.topics")}</span>
        <div className="school-map-chips">
          {topics.map((topic) => (
            <span key={topic}>{topic}</span>
          ))}
        </div>
      </div>

      <div className="school-map-footer">
        <div className="school-map-project">
          <FolderKanban className="h-4 w-4" aria-hidden="true" />
          <div>
            <span>{t("audienceVisual.schoolMap.projects")}</span>
            <strong>{t("audienceVisual.schoolMap.projectName")}</strong>
          </div>
        </div>
        <div className="school-map-events">
          <span>{t("audienceVisual.schoolMap.events")}</span>
          <div className="school-map-chips">
            {events.map((event) => (
              <span key={event}>{event}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
