import { useLayoutEffect, useRef, type ReactNode } from "react";

export const StackCard = ({ children, tone }: { children: ReactNode; tone: string }) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const anchor = anchorRef.current;
    const card = cardRef.current;
    const content = contentRef.current;
    const spacer = spacerRef.current;
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!anchor || !card || !content || !spacer) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let start = 0;
    let overflow = 0;
    let frame = 0;

    const render = () => {
      frame = 0;
      const progress = reducedMotion.matches ? 0 : Math.min(overflow, Math.max(0, window.scrollY - start));
      content.style.transform = `translateY(${-progress}px)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    const measure = () => {
      const top = (header?.offsetHeight ?? 84) + 12;
      card.style.setProperty("--stack-top", `${top}px`);
      card.style.setProperty("--stack-height", `${Math.max(1, window.innerHeight - top - 16)}px`);
      overflow = reducedMotion.matches ? 0 : Math.max(0, content.offsetHeight - card.clientHeight);
      spacer.style.height = `${overflow}px`;
      // Cache geometry on layout changes, never query the DOM during scrolling.
      start = anchor.getBoundingClientRect().top + window.scrollY - top;
      render();
    };
    const onFocus = (event: FocusEvent) => {
      if (reducedMotion.matches || !(event.target instanceof HTMLElement)) return;
      const target = event.target.getBoundingClientRect();
      const viewport = card.getBoundingClientRect();
      if (target.bottom > viewport.bottom) window.scrollBy(0, target.bottom - viewport.bottom + 16);
      else if (target.top < viewport.top) window.scrollBy(0, target.top - viewport.top - 16);
    };

    const observer = new ResizeObserver(measure);
    observer.observe(content);
    if (header) observer.observe(header);
    if (anchor.parentElement) observer.observe(anchor.parentElement);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    reducedMotion.addEventListener("change", measure);
    content.addEventListener("focusin", onFocus);
    measure();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
      reducedMotion.removeEventListener("change", measure);
      content.removeEventListener("focusin", onFocus);
    };
  }, []);

  return (
    <>
      <div ref={anchorRef} aria-hidden="true" />
      <div ref={cardRef} className={`stack-card stack-card--${tone}`}>
        <div ref={contentRef} className="stack-card-content">{children}</div>
      </div>
      <div ref={spacerRef} className="stack-card-spacer" aria-hidden="true" />
    </>
  );
};
