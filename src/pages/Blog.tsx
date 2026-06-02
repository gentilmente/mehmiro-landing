import { useTranslation } from "react-i18next";
import {
  BookOpen,
  Calendar,
  TrendingUp,
  Users,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { Footer } from "@/components/Footer";

const Blog = () => {
  const { t } = useTranslation();

  const blogPosts = t("pages.blog.posts", { returnObjects: true }) as Array<{
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    icon: typeof BookOpen;
  }>;

  const categories = t("pages.blog.categories", {
    returnObjects: true,
  }) as Array<{
    name: string;
    count: number;
  }>;

  const postIcons = [
    BookOpen,
    TrendingUp,
    Users,
    Lightbulb,
    BookOpen,
    Calendar,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {t("pages.blog.title")}
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            {t("pages.blog.heroDescription")}
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="bg-primary/5 border rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full mb-4">
                  {t("pages.blog.featured.badge")}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {t("pages.blog.featured.title")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("pages.blog.featured.description")}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  {t("pages.blog.featured.link")}{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const IconComponent = postIcons[index];
              return (
                <article
                  key={index}
                  className="border rounded-xl bg-card hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime} {t("pages.blog.readTime")}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                      <IconComponent className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">
            {t("pages.blog.newsletter.title")}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t("pages.blog.newsletter.description")}
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t("pages.blog.newsletter.placeholder")}
              className="flex-1 px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {t("pages.blog.newsletter.button")}
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-3">
            {t("pages.blog.newsletter.footer")}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
