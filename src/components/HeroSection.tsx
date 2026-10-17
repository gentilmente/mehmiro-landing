import { Heart, Eye, Brain, Check, ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { StartButton } from "@/components/StartButton";
import teachingTeam from "@/assets/teaching-team.jpg";
import ircaiBanner from "@/assets/TOP 100 Promising Project Banner.png";

export const HeroSection = () => {
  const { t } = useTranslation();
  const valueProps = t("hero.valueProps", { returnObjects: true }) as string[];

  return (
    <section className="education-hero">
      <div className="hero-layout">
        <div className="hero-copy">
          <div className="section-eyebrow"><Heart size={16} aria-hidden="true" />{t("hero.badge")}</div>
          <h1>{t("hero.headlinePrimary")}<br /><span>{t("hero.headlineSecondary")}</span></h1>
          <p className="hero-description">{t("hero.subheadline")}</p>
          <div className="hero-actions">
            <StartButton />
            <a href="#mehmiro" className="text-link">{t("hero.scrollIndicator")}<ArrowDown size={16} aria-hidden="true" /></a>
          </div>
          <ul className="hero-values">
            {valueProps.map((text) => <li key={text}><Check size={16} aria-hidden="true" />{text}</li>)}
          </ul>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-wrap"><img className="hero-photo" src={teachingTeam} alt={t("hero.imageAlt")} fetchPriority="high" /></div>
          <div className="hero-note"><div className="hero-note-icon"><Eye size={24} aria-hidden="true" /></div><div><strong>{valueProps[0]}</strong><span>{valueProps[1]}</span></div><Brain className="hero-note-brain" size={22} aria-hidden="true" /></div>
          <span className="hero-doodle" aria-hidden="true">✳</span>
        </div>
      </div>
      <div className="hero-recognition">
        <span>{t("hero.recognitionLabel")}</span>
        <a href="https://ircai.org/top100/entry/mehmiro/" target="_blank" rel="noreferrer" aria-label={t("hero.recognitionAria")}>
          <img src={ircaiBanner} alt={t("hero.recognitionAlt")} loading="lazy" />
        </a>
      </div>
    </section>
  );
};
