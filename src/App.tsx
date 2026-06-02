import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages";
import Learn, { LearnCourse } from "./pages/Learn";
import Features from "./pages/Features";
import ForEducators from "./pages/ForEducators";
import Blog from "./pages/Blog";
import Community from "./pages/Community";
import Support from "./pages/Support";
import About from "./pages/About";
// import Team from "./pages/Team";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const queryClient = new QueryClient();

const LanguageFlag = ({ language }: { language: string }) => {
  const isEnglish = language.startsWith("en");

  if (isEnglish) {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 16"
        className="h-3 w-4 rounded-sm border border-border/60"
      >
        <rect width="24" height="16" fill="#ffffff" />
        <rect y="0" width="24" height="2" fill="#B22234" />
        <rect y="4" width="24" height="2" fill="#B22234" />
        <rect y="8" width="24" height="2" fill="#B22234" />
        <rect y="12" width="24" height="2" fill="#B22234" />
        <rect x="0" y="0" width="10" height="7" fill="#3C3B6E" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 16"
      className="h-3 w-4 rounded-sm border border-border/60"
    >
      <rect width="24" height="16" fill="#ffffff" />
      <rect y="0" width="24" height="5.33" fill="#74ACDF" />
      <rect y="10.67" width="24" height="5.33" fill="#74ACDF" />
    </svg>
  );
};

const Navigation = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const isEnglish = i18n.resolvedLanguage?.startsWith("en");
  const nextLanguage = isEnglish ? "es-AR" : "en";
  const nextLanguageLabel = isEnglish
    ? t("language.spanish")
    : t("language.english");
  const nextLanguageShort = isEnglish
    ? t("language.toggleShort.es")
    : t("language.toggleShort.en");

  const handleLanguageToggle = () => {
    void i18n.changeLanguage(nextLanguage);
  };

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && !mobileMenuOpen && (
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="fixed top-0 right-0 z-50 p-3 sm:p-4"
          aria-label={t("nav.openMenu")}
        >
          <Menu className="w-6 h-6 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Mobile menu overlay */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-6 animate-in fade-in duration-200">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2"
            aria-label={t("nav.closeMenu")}
          >
            <X className="w-6 h-6" />
          </button>

          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-medium text-foreground hover:text-primary transition-colors"
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/learn"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-medium text-foreground hover:text-primary transition-colors"
          >
            {t("nav.howItWorks")}
          </Link>
          <button
            onClick={handleLanguageToggle}
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            aria-label={t("nav.languageToggle", {
              language: nextLanguageLabel,
            })}
          >
            <LanguageFlag language={nextLanguage} />
            {nextLanguageShort}
          </button>
        </div>
      )}

      {/* Desktop navbar */}
      {!isMobile && (
        <nav className="fixed top-4 right-4 z-50">
          <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 shadow-lg">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
            >
              {t("nav.home")}
            </Link>
            <div className="w-px h-4 bg-border" />
            <Link
              to="/learn"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
            >
              {t("nav.howItWorks")}
            </Link>
            <div className="w-px h-4 bg-border" />
            <button
              onClick={handleLanguageToggle}
              className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted inline-flex items-center gap-2"
              aria-label={t("nav.languageToggle", {
                language: nextLanguageLabel,
              })}
            >
              <LanguageFlag language={nextLanguage} />
              {nextLanguageShort}
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:courseId" element={<LearnCourse />} />
        <Route path="/features" element={<Features />} />
        <Route path="/for-educators" element={<ForEducators />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/team" element={<Team />} /> */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
