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
  Heart
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-border/50">
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Mantente actualizado
                </h3>
                <p className="text-muted-foreground">
                  Recibe las últimas noticias sobre IA educativa y nuevas funcionalidades de Mehmiro
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50"
                />
                <Button className="bg-gradient-hero hover:opacity-90 transition-opacity">
                  <Mail className="w-4 h-4 mr-2" />
                  Suscribirse
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Mehmiro
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  El agente de IA pedagógico que revoluciona las evaluaciones formativas,
                  adaptándose al contexto único de cada aula y estudiante.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:egentilemontes@gmail.com">egentilemontes@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Buenos Aires, Argentina</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>Disponible en todo Latinoamérica</span>
                </div>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground">Producto</h4>
              <nav className="space-y-3">
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Características
                  </div>
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Cómo funciona
                  </div>
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Para educadores
                  </div>
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Demo gratuita
                  </div>
                </a>
              </nav>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground">Recursos</h4>
              <nav className="space-y-3">
                <a
                  href="http://mehmiro.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Documentación
                  </div>
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Blog
                  </div>
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Comunidad
                  </div>
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Soporte
                  </div>
                </a>
              </nav>
            </div>

            {/* Company & Legal */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground">Empresa</h4>
              <nav className="space-y-3">
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <div className="flex items-center gap-2">
                    <Heart className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Nosotros
                  </div>
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Equipo
                  </div>
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Privacidad
                  </div>
                </a>
                <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Términos
                  </div>
                </a>
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
                © {currentYear} Mehmiro. Transformando la educación con inteligencia artificial.
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground mr-2">Síguenos:</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};