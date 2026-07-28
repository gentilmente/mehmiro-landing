import { useMemo, useState, type ElementType } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import {
  BookOpen,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Lightbulb,
  Brain,
  Calendar,
  FileText,
  BarChart3,
  Eye,
  Settings,
  MessageSquare,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { FixedPhoneMockup } from "@/components/FixedPhoneMockup";

const courseIcons: Record<string, ElementType> = {
  "getting-started": BookOpen,
  institutions: Users,
  roster: FileText,
  schedule: Calendar,
  lessons: Lightbulb,
  "yearly-plan": Target,
  rubrics: BarChart3,
  observation: Eye,
  "student-profiles": MessageSquare,
};

const Learn = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const categories = t("pages.learn.categories", {
    returnObjects: true,
  }) as Array<{ name: string; count: number }>;
  const courses = t("pages.learn.courses", { returnObjects: true }) as Array<{
    id: string;
    title: string;
    description: string;
    level: string;
    duration: string;
    category: string;
  }>;
  const stats = t("pages.learn.quickStats", { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;
  const levels = useMemo(
    () => Array.from(new Set(courses.map((course) => course.level))),
    [courses]
  );
  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;

    return matchesCategory && matchesLevel;
  });

  const getLevelColor = (level: string) => {
    if (level === "Principiante" || level === "Beginner")
      return "bg-green-100 text-green-700";
    if (level === "Intermedio" || level === "Intermediate")
      return "bg-yellow-100 text-yellow-700";
    if (level === "Avanzado" || level === "Advanced")
      return "bg-red-100 text-red-700";
    return "bg-blue-100 text-blue-700";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Brain className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("pages.learn.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t("pages.learn.description")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 border rounded-full text-sm font-medium transition-colors ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card hover:bg-muted"
              }`}
            >
              {t("pages.learn.filters.all")}
            </button>
            {categories.map((cat, index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  setSelectedCategory((current) =>
                    current === cat.name ? "all" : cat.name
                  )
                }
                className={`px-4 py-2 border rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat.name
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card hover:bg-muted"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              {t("pages.learn.filters.level")}
            </span>
            <button
              type="button"
              onClick={() => setSelectedLevel("all")}
              className={`px-3 py-1.5 border rounded-full text-sm font-medium transition-colors ${
                selectedLevel === "all"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card hover:bg-muted"
              }`}
            >
              {t("pages.learn.filters.all")}
            </button>
            {levels.map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setSelectedLevel(level)}
                className={`px-3 py-1.5 border rounded-full text-sm font-medium transition-colors ${
                  selectedLevel === level
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card hover:bg-muted"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("pages.learn.coursesTitle")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => {
              const IconComponent =
                courseIcons[course.id] || courseIcons["getting-started"];
              return (
                <Link
                  key={index}
                  to={`/learn/${course.id}`}
                  className="border rounded-xl bg-card hover:shadow-lg transition-all p-6 group cursor-pointer block"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${getLevelColor(course.level)}`}
                    >
                      {course.level}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {course.duration}
                    </span>
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    {t("pages.learn.startCourse")}{" "}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t("pages.learn.cta.title")}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t("pages.learn.cta.description")}
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium bg-white text-primary hover:bg-white/90 rounded-lg transition-colors"
          >
            {t("pages.learn.cta.button")}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const LearnCourse = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { t } = useTranslation();

  const courses = t("pages.learn.courses", { returnObjects: true }) as Array<{
    id: string;
    title: string;
    description: string;
    level: string;
    duration: string;
    category: string;
  }>;
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            {t("pages.learn.courseNotFound")}
          </h1>
          <Link to="/learn" className="text-primary hover:underline">
            {t("pages.learn.backToLearn")}
          </Link>
        </div>
      </div>
    );
  }

const steps = t(`pages.learn.courseContent.${courseId}.steps`, {
    returnObjects: true,
    defaultValue: [],
  }) as Array<{
    title: string;
    description: string;
    tip?: string;
    embedUrl?: string;
    mergedSteps?: Array<{
      title: string;
      description: string;
    }>;
  }>;

  const renderSteps = () => {
    const rendered: JSX.Element[] = [];
    let stepCounter = 0;
    
    steps.forEach((step, dataIndex) => {
      stepCounter++;
      const stepNumber = stepCounter;
      
      if (step.mergedSteps && step.mergedSteps.length > 0) {
        stepCounter += step.mergedSteps.length - 1;
      }
      
      rendered.push(
        <div key={dataIndex} className="border rounded-xl bg-card overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Phone mockup */}
            <div className="lg:order-first relative p-6 bg-muted/30 min-h-[400px] flex items-center justify-center">
              <FixedPhoneMockup
                variant="inline"
                withId={false}
                embedUrl={step.embedUrl}
              />
            </div>
            {/* Step content */}
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              {step.mergedSteps && step.mergedSteps.length > 0 ? (
                // Merged steps - show all content in one card
                <>
                  {step.mergedSteps.map((merged, mergedIndex) => {
                    const currentStepNum = stepNumber + mergedIndex;
                    return (
                      <div key={mergedIndex} className={mergedIndex > 0 ? 'mt-6 pt-6 border-t' : ''}>
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold">{currentStepNum}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">{merged.title}</h3>
                            <p className="text-muted-foreground mb-4">{merged.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {step.tip && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                      <div className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-yellow-800">{step.tip}</p>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                // Regular single step
                <>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{stepNumber}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      {step.tip && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <div className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-yellow-800">{step.tip}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      );
    });
    
    return rendered;
  };

  const objectives = t(`pages.learn.courseContent.${courseId}.objectives`, {
    returnObjects: true,
    defaultValue: [],
  }) as string[];

  const IconComponent = courseIcons[course.id] || courseIcons["getting-started"];

  const getLevelColor = (level: string) => {
    if (level === "Principiante" || level === "Beginner")
      return "bg-green-100 text-green-700";
    if (level === "Intermedio" || level === "Intermediate")
      return "bg-yellow-100 text-yellow-700";
    if (level === "Avanzado" || level === "Advanced")
      return "bg-red-100 text-red-700";
    return "bg-blue-100 text-blue-700";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero */}
      <section className="py-16 px-6 border-b">
        <div className="container mx-auto">
          <Link
            to="/learn"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("pages.learn.backToLearn")}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-primary" />
            </div>
            <div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${getLevelColor(course.level)}`}
              >
                {course.level}
              </span>
              <span className="ml-3 text-sm text-muted-foreground flex items-center inline-flex">
                <Clock className="w-3 h-3 mr-1" />
                {course.duration}
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {course.description}
          </p>
        </div>
      </section>

      {/* Objectives */}
      {objectives.length > 0 && (
        <section className="py-12 px-6 bg-muted/30">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">
              {t("pages.learn.courseObjectives")}
            </h2>
            <ul className="space-y-3">
              {objectives.map((obj, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

{/* Steps */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-8">
            {t("pages.learn.courseSteps.title")}
          </h2>
          <div className="space-y-12">
            {renderSteps()}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            {t("pages.learn.nextSteps.title")}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t("pages.learn.nextSteps.description")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/learn"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {t("pages.learn.nextSteps.browseCourses")}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border rounded-lg font-medium hover:bg-card transition-colors"
            >
              {t("pages.learn.nextSteps.tryMehmiro")}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { LearnCourse };
export default Learn;
