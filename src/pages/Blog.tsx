import { useTranslation } from "react-i18next";
import { ArrowUpRight, BookOpen, Calendar } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { COMPANY } from "@/config/company";

const Blog = () => {
  const { t } = useTranslation();

  const notes = t("pages.blog.notes", { returnObjects: true }) as Array<{
    title: string;
    date: string;
    description: string;
    url: string;
  }>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <PageHero
        icon={BookOpen}
        title={t("pages.blog.title")}
        description={t("pages.blog.heroDescription")}
      />

      <section className="py-10 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="brand-section-title text-2xl md:text-3xl">
            {t("pages.blog.notesTitle")}
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {t("pages.blog.notesDescription")}
          </p>

          <div className="mt-8 grid gap-4">
            {notes.map((note) => (
              <a
                key={note.url}
                href={note.url}
                target="_blank"
                rel="noreferrer"
                className="group flex gap-4 rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-lg font-semibold leading-snug group-hover:text-primary">
                      {note.title}
                    </span>
                    <ArrowUpRight
                      className="mt-1 h-4 w-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                    {note.description}
                  </span>
                  <span className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {note.date}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            {t("pages.blog.notesCta")}{" "}
            <a
              href={COMPANY.founder.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
