import { StartButton } from "@/components/StartButton";
import { useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Shield, Brain, Clock, CheckCircle, HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface FAQSectionProps { id?: string; }
interface FAQItem { question: string; answer: string; }
const icons = [Clock, Brain, Shield, CheckCircle, HelpCircle, Shield];

export const FAQSection = ({ id = "faq" }: FAQSectionProps) => {
  const { t, i18n } = useTranslation();
  const faqs = t("faq.items", { returnObjects: true }) as FAQItem[];
  const [active, setActive] = useState(0);
  const [animated, setAnimated] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ start: 0, step: 1 });

  useLayoutEffect(() => {
    const track = trackRef.current;
    const deck = deckRef.current;
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!track || !deck) return;
    const cards = Array.from(deck.querySelectorAll<HTMLElement>(".faq-card"));
    const titles = cards.map(card => card.querySelector<HTMLElement>(".faq-card-heading")!);
    const answers = cards.map(card => card.querySelector<HTMLElement>(".faq-answer-copy")!);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let enabled = false;
    let current = -1;
    let frame = 0;

    const render = () => {
      frame = 0;
      if (!enabled) return;
      const { start, step } = positionRef.current;
      const progress = Math.min(cards.length - 1, Math.max(0, (window.scrollY - start) / step));
      const next = Math.round(progress);
      if (next !== current) { current = next; setActive(next); }
      cards.forEach((card, index) => {
        let distance = index - progress;
        if (distance < -0.75) distance += cards.length;
        const leaving = distance < 0;
        const y = leaving ? distance * 100 : -distance * 8;
        const scale = leaving ? 1 + distance * 0.08 : 1 - distance * 0.025;
        const rotation = leaving ? -distance * 6 : distance * 0.65;
        card.style.transform = `translateY(${y}px) scale(${scale}) rotate(${rotation}deg)`;
        card.style.opacity = `${leaving ? Math.max(0, 1 + distance / 0.75) : 1}`;
        card.style.zIndex = `${leaving ? cards.length + 1 : cards.length - Math.floor(distance)}`;
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(render); };
    const measure = () => {
      // Measure the complete deck, including controls, before choosing its position.
      track.dataset.animated = "true";
      const headerBottom = (header?.offsetHeight ?? 84) + 12;
      // Measure intrinsic text, including every answer, so expanded cards never clip.
      const height = Math.max(...cards.map((card, index) => {
        const style = getComputedStyle(card);
        return titles[index].offsetHeight + answers[index].scrollHeight + parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + 2;
      }));
      deck.style.setProperty("--faq-stage-height", `${height + 44}px`);
      const requiredHeight = deck.offsetHeight;
      const availableHeight = window.innerHeight - headerBottom - 16;
      const top = headerBottom + Math.max(0, (availableHeight - requiredHeight) / 2);
      deck.style.setProperty("--faq-top", `${top}px`);
      enabled = !reducedMotion.matches && requiredHeight <= availableHeight;
      track.dataset.animated = `${enabled}`;
      setAnimated(enabled);
      const step = Math.min(280, Math.max(180, window.innerHeight * 0.3));
      positionRef.current = { start: track.getBoundingClientRect().top + window.scrollY - top, step };
      track.style.height = enabled ? `${requiredHeight + step * (cards.length - 1)}px` : "auto";
      if (enabled) render();
      else cards.forEach(card => { card.style.transform = ""; card.style.opacity = ""; card.style.zIndex = ""; });
    };
    const observer = new ResizeObserver(measure);
    titles.forEach(title => observer.observe(title));
    answers.forEach(answer => observer.observe(answer));
    if (header) observer.observe(header);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    reducedMotion.addEventListener("change", measure);
    measure();
    return () => {
      observer.disconnect(); cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
      reducedMotion.removeEventListener("change", measure);
    };
  }, [i18n.resolvedLanguage, faqs.length]);

  const select = (index: number) => {
    const { start, step } = positionRef.current;
    window.scrollTo({ top: start + step * index, behavior: "instant" });
  };

  return (
    <section id={id} className="faq-section relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="section-eyebrow"><HelpCircle size={16} aria-hidden="true" />{t("faq.badge")}</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">{t("faq.title")}</h2>
          <p className="faq-description text-muted-foreground">{t("faq.description")}</p>
        </div>
        <div ref={trackRef} className="faq-deck-track max-w-3xl mx-auto">
          <div ref={deckRef} className="faq-deck">
            <div className="faq-deck-stage">
              {faqs.map((faq, index) => {
                const Icon = icons[index] ?? HelpCircle;
                const open = !animated || active === index;
                return (
                  <article key={index} className="faq-card" data-active={active === index} aria-labelledby={`${id}-question-${index}`}>
                    <div className="faq-card-heading">
                      <Icon size={20} aria-hidden="true" />
                      <h3 id={`${id}-question-${index}`}>{faq.question}</h3>
                      <span className="faq-card-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="faq-answer" data-open={open} aria-hidden={!open}>
                      <div className="faq-answer-inner"><p className="faq-answer-copy">{faq.answer}</p></div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="faq-deck-controls">
              <p className="faq-scroll-hint">{t("faq.scrollHint")}</p>
              <nav className="faq-deck-navigation" aria-label={t("faq.badge")}>
                <button type="button" onClick={() => select(Math.max(0, active - 1))} disabled={active === 0} aria-label={t("faq.previous")}><ArrowLeft size={18} /></button>
                <div className="faq-deck-dots">
                  {faqs.map((faq, index) => <button type="button" key={index} onClick={() => select(index)} aria-label={faq.question} aria-pressed={active === index}><span /></button>)}
                </div>
                <button type="button" onClick={() => select(Math.min(faqs.length - 1, active + 1))} disabled={active === faqs.length - 1} aria-label={t("faq.next")}><ArrowRight size={18} /></button>
              </nav>
              <span className="sr-only" aria-live="polite">{t("faq.position", { current: active + 1, total: faqs.length })}</span>
            </div>
          </div>
        </div>
        <div className="section-action"><StartButton /></div>
      </div>
    </section>
  );
};
