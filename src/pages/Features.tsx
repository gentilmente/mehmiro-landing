import { useTranslation } from "react-i18next";
import {
  ClipboardList,
  Brain,
  TrendingUp,
  FileText,
  Shield,
  Smartphone,
  BarChart3,
  MessageSquare,
  Clock,
  Users,
  Target,
  Zap,
} from "lucide-react";
import { Footer } from "@/components/Footer";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: ClipboardList,
      title: "Registro de Observaciones",
      description:
        "Capturá tus observaciones pedagógicas de forma rápida e intuitiva. Sin importar si estás en el aula, el patio o una reunión.",
      details: [
        "Notas de voz a texto",
        "Plantillas personalizables",
        "Categorización automática",
        "Fotos y videos adjuntos",
      ],
    },
    {
      icon: Brain,
      title: "IA que Interpreta, No Evalúa",
      description:
        "Nuestro agente inteligente organiza y analiza tus observaciones para revelar patrones que de otro modo pasarían desapercibidos.",
      details: [
        "Análisis de patrones de comportamiento",
        "Identificación de zonas de mejora",
        "Sugerencias de intervención",
        "Historial completo por estudiante",
      ],
    },
    {
      icon: TrendingUp,
      title: "Detección Temprana",
      description:
        "Identificá estudiantes que necesitan atención antes de que sea tarde. El sistema te avisa cuando detecta señales de alerta.",
      details: [
        "Alertas automáticas",
        "Seguimiento de progreso",
        "Indicadores de riesgo",
        "Línea de tiempo del desarrollo",
      ],
    },
    {
      icon: FileText,
      title: "Reportes Accionables",
      description:
        "Generá informes detallados para padres, equipos de orientación y dirección. Todo listo en segundos.",
      details: [
        "Reportes para familias",
        "Informes para equipos de trabajo",
        "Exportación a PDF",
        "Gráficos de evolución",
      ],
    },
    {
      icon: Smartphone,
      title: "Acceso Móvil",
      description:
        "Usá Mehmiro desde cualquier dispositivo. La plataforma está optimizada para funcionar perfectamente en tu celular.",
      details: [
        "App web progresiva",
        "Sin instalación requerida",
        "Funciona sin internet",
        "Sincronización en la nube",
      ],
    },
    {
      icon: Shield,
      title: "Privacidad y Seguridad",
      description:
        "Los datos de tus estudiantes están protegidos. Cumplimos con todas las normativas argentinas de protección de datos.",
      details: [
        "Encriptación de extremo a extremo",
        "Cumplimiento RGPD/LGPD",
        "Datos propiedad de la institución",
        "Respaldo automático",
      ],
    },
    {
      icon: BarChart3,
      title: "Metacognición Docente",
      description:
        "Reflexioná sobre tu propia práctica con análisis generados desde tus registros. Mejorá como educator day a day.",
      details: [
        "Análisis de patrones de enseñanza",
        "Insights sobre intervenciones",
        "Comparativa temporal",
        "Recomendaciones personalizadas",
      ],
    },
    {
      icon: Users,
      title: "Colaboración en Equipo",
      description:
        "Coordiná observaciones con otros docentes y-orientadores. Trabajá en equipo para acompañar mejor a cada estudiante.",
      details: [
        "Compartición de observaciones",
        "Notas compartidas",
        "Equipos por institución",
        "Permisos granulares",
      ],
    },
    {
      icon: Clock,
      title: "Sin Sumar Carga",
      description:
        "Mehmiro se integra naturalmente a tu flujo de trabajo. Menos papeleo, más tiempo para enseñar.",
      details: [
        "Registro en segundos",
        "Plantillas rápidas",
        "Integración con otras herramientas",
        "Diseño minimalista",
      ],
    },
    {
      icon: Target,
      title: "Enfoque por Estudiante",
      description:
        "Cada estudiante es único. Mantené una visión completa del desarrollo de cada uno con su perfil detallado.",
      details: [
        "Perfil completo por alumno",
        "Historial de observaciones",
        "Plan de acción individual",
        "Seguimiento de metas",
      ],
    },
    {
      icon: MessageSquare,
      title: "Feedback Instantáneo",
      description:
        "Recibí análisis detallados de cada observación registrada. Entendé mejor qué está pasando con cada estudiante.",
      details: [
        "Análisis automático",
        "Sugerencias de acción",
        "Recursos relacionados",
        "Próximos pasos recomendados",
      ],
    },
    {
      icon: Zap,
      title: "Configuración Flexible",
      description:
        "Adaptá Mehmiro a tu realidad. Las variables de evaluación son completamente personalizables.",
      details: [
        "Criterios personalizables",
        "Categorías propias",
        "Niveles de evaluación",
        "Plantillas por materia",
      ],
    },
  ];

  const comparison = [
    {
      method: "Notas en papel",
      time: "15-20 min",
      organization: "Baja",
      detection: "Tardía",
      collaboration: "Difícil",
    },
    {
      method: "Hojas de cálculo",
      time: "10-15 min",
      organization: "Media",
      detection: "Manual",
      collaboration: "Parcial",
    },
    {
      method: "Mehmiro",
      time: "2-3 min",
      organization: "Alta",
      detection: "Temprana",
      collaboration: "Fácil",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("pages.features.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("pages.features.description")}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border rounded-xl bg-card hover:shadow-lg transition-all duration-300 p-6 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            ¿Por qué Mehmiro?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comparamos nuestro enfoque con los métodos tradicionales de
            observación docente
          </p>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border rounded-xl bg-card">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Método</th>
                  <th className="text-center p-4 font-semibold">
                    Tiempo por observación
                  </th>
                  <th className="text-center p-4 font-semibold">
                    Organización
                  </th>
                  <th className="text-center p-4 font-semibold">Detección</th>
                  <th className="text-center p-4 font-semibold">
                    Colaboración
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={index}
                    className={index === 2 ? "bg-primary/5" : "border-b"}
                  >
                    <td className="p-4 font-medium">{row.method}</td>
                    <td className="p-4 text-center">{row.time}</td>
                    <td className="p-4 text-center">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          row.organization === "Alta"
                            ? "bg-green-100 text-green-700"
                            : row.organization === "Media"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {row.organization}
                      </span>
                    </td>
                    <td className="p-4 text-center">{row.detection}</td>
                    <td className="p-4 text-center">{row.collaboration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">
                Feature principal
              </span>
              <h2 className="text-3xl font-bold mt-2 mb-4">
                Detección Temprana con IA
              </h2>
              <p className="text-muted-foreground mb-6">
                El sistema analiza automáticamente tus observaciones para
                identificar patrones y detectar estudiantes que pueden necesitar
                más atención. No es magia: es tecnología diseñada para potenciar
                tu intuición.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </span>
                  Alertas personalizadas por estudiante
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </span>
                  Historial de intervenciones y resultados
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </span>
                  Sugerencias basadas en evidencia
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </span>
                  Configurable según tus necesidades
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
              <div className="bg-card border rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">
                    Alerta de detección
                  </span>
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                    Nueva
                  </span>
                </div>
                <p className="text-sm mb-4">
                  <strong>Martín</strong> ha mostrado una disminución en su
                  participación durante las últimas 3 observaciones. Se
                  recomienda:
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Conversación individual para entender su situación</li>
                  <li>• Revisar su grupo de pares</li>
                  <li>• Coordinar con el tutor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para probarlo?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experimentá todas estas funciones con nuestra versión gratuita. Sin
            tarjeta de crédito.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium bg-white text-primary hover:bg-white/90 rounded-lg transition-colors"
          >
            Comenzar gratis
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;

