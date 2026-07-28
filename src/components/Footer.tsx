import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  BookOpen,
  Users,
  Zap,
  Shield,
  FileText,
  Globe,
  Heart,
  CheckCircle,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [state, handleSubmit] = useForm("xldyzdnz");
  const { t } = useTranslation();

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="relative">
        {/* Lead Capture Section */}
        <div id="lead-capture" className="border-b border-border/50">
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-2xl mx-auto text-center space-y-6 px-4">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  {t("footer.lead.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("footer.lead.description")}
                </p>
              </div>

              {state.succeeded ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <CheckCircle className="w-6 h-6" />
                    <p className="text-lg font-medium">
                      {t("footer.lead.successTitle")}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t("footer.lead.successDescription")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder={t("footer.lead.placeholder")}
                      disabled={state.submitting}
                      className="flex-1 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50"
                      required
                    />
                    <Button
                      type="submit"
                      disabled={state.submitting}
                      className="bg-gradient-hero hover:opacity-90 transition-opacity"
                    >
                      {state.submitting ? (
                        <div className="w-4 h-4 mr-2 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Mail className="w-4 h-4 mr-2" />
                      )}
                      {state.submitting
                        ? t("footer.lead.submitting")
                        : t("footer.lead.submit")}
                    </Button>
                  </div>

                  {/* Hidden fields for additional context */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nueva solicitud de contacto desde Mehmiro"
                  />
                  <input type="hidden" name="tipo" value="contact_request" />
                  <input type="hidden" name="fuente" value="footer" />

                  {/* Validation Errors */}
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-600 text-sm text-center"
                  />
                </form>
              )}

              <p className="text-xs text-muted-foreground/70">
                {t("footer.lead.notice")}
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 px-4 lg:px-0">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Mehmiro
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  {t("footer.company.description")}
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:info@mehmiro.com">info@mehmiro.com</a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{t("footer.contact.location")}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>{t("footer.contact.availability")}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>{t("footer.contact.institutions")}</span>
                </div>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground">
                {t("footer.sections.product")}
              </h4>
              <nav className="space-y-3">
                <Link
                  to="/features"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t("footer.links.features")}
                  </div>
                </Link>
                <Link
                  to="/learn"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t("footer.links.howItWorks")}
                  </div>
                </Link>
                <Link
                  to="/for-educators"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t("footer.links.forEducators")}
                  </div>
                </Link>
                <a
                  href="https://app.mehmiro.com/onboarding"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t("footer.links.demo")}
                  </div>
                </a>
              </nav>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground">
                {t("footer.sections.resources")}
              </h4>
              <nav className="space-y-3">
                <a
                  href="http://docs.mehmiro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t("footer.links.docs")}
                  </div>
                </a>
                <Link
                  to="/blog"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t("footer.links.blog")}
                  </div>
                </Link>
                <Link
                  to="/community"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t("footer.links.community")}
                  </div>
                </Link>
                <Link
                  to="/support"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t("footer.links.support")}
                  </div>
                </Link>
              </nav>
            </div>

            {/* Company & Legal */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground">
                {t("footer.sections.company")}
              </h4>
              <nav className="space-y-3">
                <Link
                  to="/about"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Heart className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t("footer.links.about")}
                  </div>
                </Link>
                {/* <Link
                  to="/team"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t("footer.links.team")}
                  </div>
                </Link> */}
                <Link
                  to="/privacy"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t("footer.links.privacy")}
                  </div>
                </Link>
                <Link
                  to="/terms"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t("footer.links.terms")}
                  </div>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 bg-muted/20">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-sm text-muted-foreground">
                {t("footer.bottom.copyright", { year: currentYear })}
              </div>

              {/* Social Links 
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground mr-2">
                  {t("footer.bottom.follow")}
                </span>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-background/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-background/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 group"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-background/50 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 group"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
