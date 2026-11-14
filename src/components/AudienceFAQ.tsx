import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export interface AudienceFAQItem {
  question: string;
  answer: string;
}

interface AudienceFAQProps {
  title: string;
  items: AudienceFAQItem[];
}

export const AudienceFAQ = ({ title, items }: AudienceFAQProps) => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items.length) return null;

  return (
    <section id="preguntas-frecuentes" className="audience-faq" aria-labelledby="audience-faq-title">
      <div className="audience-faq-heading">
        <div className="section-eyebrow">
          <HelpCircle className="h-4 w-4" aria-hidden="true" />
          {t("faq.badge")}
        </div>
        <h2 id="audience-faq-title">{title}</h2>
      </div>

      <div className="audience-faq-list">
        {items.map((item, index) => {
          const open = openIndex === index;
          const panelId = `audience-faq-panel-${index}`;

          return (
            <article key={item.question} className={`audience-faq-card ${open ? "is-open" : ""}`}>
              <button
                type="button"
                className="audience-faq-trigger"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className="audience-faq-number">0{index + 1}</span>
                <span>{item.question}</span>
                <ChevronDown className="audience-faq-chevron" aria-hidden="true" />
              </button>
              <div id={panelId} className="audience-faq-panel">
                <div className="audience-faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
