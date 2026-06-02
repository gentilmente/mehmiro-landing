import { useTranslation } from "react-i18next";
import {
  Users,
  Brain,
  Palette,
  Code,
  GraduationCap,
  Heart,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import { Footer } from "@/components/Footer";

const Team = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: "Juan García",
      role: "Fundador y CEO",
      background:
        "Ex docente de matemáticas con 10 años de experiencia en educación. Lideró proyectos de tecnología educativa en Argentina.",
      icon: GraduationCap,
      image: null,
      social: { linkedin: "#", twitter: "#", email: "#" },
    },
    {
      name: "María López",
      role: "Co-fundadora y CPO",
      background:
        "Doctora en Ciencias de la Educación (UBA). Investigadora especializada en evaluación formativa y tecnología educativa.",
      icon: Brain,
      image: null,
      social: { linkedin: "#", twitter: "#", email: "#" },
    },
    {
      name: "Carlos Rodríguez",
      role: "CTO",
      background:
        "Ingeniero en sistemas con 15 años en desarrollo de software. Experto en IA y procesamiento de lenguaje natural.",
      icon: Code,
      image: null,
      social: { linkedin: "#", twitter: "#", email: "#" },
    },
    {
      name: "Ana Martínez",
      role: "Directora de Diseño",
      background:
        "Diseñadora UX/UI especializada en productos educativos. Previously en Mercado Libre y Globant.",
      icon: Palette,
      image: null,
      social: { linkedin: "#", twitter: "#", email: "#" },
    },
    {
      name: "Roberto Sánchez",
      role: "Asesor Pedagógico",
      background:
        "Coordinador pedagógico con 20 años de experiencia. Autor de libros sobre evaluación formativa en América Latina.",
      icon: GraduationCap,
      image: null,
      social: { linkedin: "#", email: "#" },
    },
    {
      name: "Laura Fernández",
      role: "Jefa de Producto",
      background:
        "Product manager con experiencia en EdTech. passionada por mejorar la experiencia educativa a través de la tecnología.",
      icon: Users,
      image: null,
      social: { linkedin: "#", twitter: "#", email: "#" },
    },
  ];

  const advisors = [
    {
      name: "Dr. Pablo Turner",
      role: "Asesor Académico",
      background:
        "Profesor titular de Pedagogía en la UBA. Miembro de la Academia Nacional de Educación.",
    },
    {
      name: "Dra. Silvia González",
      role: "Asesora en IA Ética",
      background:
        "Investigadora en ética de la IA en educación. Autora de 'Inteligencia Artificial en el Aula'.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Pasión por la Educación",
      description:
        "Cada miembro del equipo tiene un vínculo personal con la educación. Muitos somos docentes o tenemos familiares en el sector.",
    },
    {
      icon: Brain,
      title: "Enfoque en el Usuario",
      description:
        "Pasamos horas observando aulas y hablando con docentes. Nuestras decisiones se basan en necesidades reales, no en suposiciones.",
    },
    {
      icon: GraduationCap,
      title: "Excelencia Académica",
      description:
        "Trabajamos con investigadores y académicos para asegurar que nuestro enfoque está fundamentado en evidencia.",
    },
    {
      icon: Users,
      title: "Diversidad e Inclusión",
      description:
        "Creemos que equipos diversos construyen mejores productos. Buscamos perspectivas diferentes.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Users className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("pages.team.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("pages.team.description")}
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="border rounded-xl bg-card hover:shadow-lg transition-all p-6 text-center group"
              >
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <member.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.background}
                </p>
                <div className="flex justify-center gap-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="p-2 hover:bg-muted rounded-full transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="p-2 hover:bg-muted rounded-full transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={member.social.email}
                      className="p-2 hover:bg-muted rounded-full transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Asesores</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Contamos con la guía de expertos reconocidos en educación y
            tecnología
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {advisors.map((advisor, index) => (
              <div key={index} className="p-6 border rounded-xl bg-card">
                <h3 className="text-lg font-bold mb-1">{advisor.name}</h3>
                <p className="text-primary text-sm mb-3">{advisor.role}</p>
                <p className="text-sm text-muted-foreground">
                  {advisor.background}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl bg-card text-center hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Querés formar parte del equipo?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Siempre estamos buscando personas talentosas apasionadas por la
            educación y la tecnología. Mirá nuestras posiciones abiertas.
          </p>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Ver posiciones disponibles
          </button>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Nuestra Cultura</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Trabajo remoto</h3>
              <p className="text-sm text-muted-foreground">
                Somos un equipo distribuido. Trabajamos desde donde rindes
                mejor.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Aprendizaje continuo</h3>
              <p className="text-sm text-muted-foreground">
                Dedicamos tiempo a estudiar y mejorar. El crecimiento es parte
                del trabajo.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Equilibrio vida-trabajo</h3>
              <p className="text-sm text-muted-foreground">
                Creemos en descansar y disfrutar. La energía que ponés en el
                trabajo importa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
