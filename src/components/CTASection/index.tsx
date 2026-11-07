import frameImage from "@/assets/frame.png";
import { useTranslation } from "react-i18next";
import { StartButton } from "@/components/StartButton";

export const CTASection = () => {
  const { t } = useTranslation();
  return (
    <section id="cta-section" className="final-cta">
      <div className="final-cta-copy">
        <span className="cta-gradient-orb" aria-hidden="true" />
        <h2>{t("cta.title")}</h2>
        <p>{t("cta.description")}</p>
        <StartButton variant="full" />
      </div>
      <div className="final-qr">
        <img src={frameImage} alt={t("cta.qrCaption")} loading="lazy" />
        <p>{t("cta.qrCaption")}</p>
      </div>
    </section>
  );
};
