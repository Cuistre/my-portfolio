import { db, articles } from "@/app/lib/db";
import ArticleCard from "../components/ArticleCard";
import { desc, like, not } from "drizzle-orm";
import FadeInBlur from "../components/FadeInBlur";

export default async function Blog({
  searchParams,
}: {
  searchParams: { lang?: string };
}) {
  const lang = searchParams.lang === "en" ? "en" : "fr"; // Par défaut en français
  console.log("lang", lang);
  const allArticles = await db
    .select()
    .from(articles)
    .where(
      lang === "en"
        ? like(articles.title, "% EN")
        : not(like(articles.title, "% EN"))
    )
    .orderBy(desc(articles.createdAt));

  return (
    <div className="max-w-5xl mx-auto p-4">
      <FadeInBlur delay={0}>
        <h1 className="text-3xl font-bold mb-8">Blog ({lang.toUpperCase()})</h1>
      </FadeInBlur>
      {allArticles.length === 0 ? (
        <p className="text-gray-200">
          {lang === "en"
            ? "No articles available in English."
            : "Aucun article pour l’instant."}
        </p>
      ) : (
        <div className="space-y-6">
          {allArticles.map((article, index) => (
            <FadeInBlur key={article.id} delay={0.8 + index * 0.2}>
              <ArticleCard article={article} />
            </FadeInBlur>
          ))}
        </div>
      )}
    </div>
  );
}
