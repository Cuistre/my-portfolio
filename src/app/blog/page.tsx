import { db, articles } from "@/app/lib/db";
import ArticleCard from "../components/ArticleCard";
import { desc } from "drizzle-orm";
import FadeInBlur from "../components/FadeInBlur";

export default async function Blog() {
  const allArticles = await db
    .select()
    .from(articles)
    .orderBy(desc(articles.createdAt));

  return (
    <div className="max-w-5xl mx-auto p-4">
      <FadeInBlur delay={0}>
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
      </FadeInBlur>
      {allArticles.length === 0 ? (
        <p className="text-gray-200">Aucun article pour l’instant.</p>
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
