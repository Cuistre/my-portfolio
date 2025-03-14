import { db, articles } from "../lib/db";
import ArticleCard from "../components/ArticleCard";
import { desc, like } from "drizzle-orm";

type Article = typeof articles.$inferSelect;

export default async function Search({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q?.trim();

  let allArticles: Article[] = [];
  if (query) {
    const titleMatches = await db
      .select()
      .from(articles)
      .where(like(articles.title, `%${query}%`))
      .orderBy(desc(articles.createdAt));

    const contentMatches = await db
      .select()
      .from(articles)
      .where(like(articles.content, `%${query}%`))
      .orderBy(desc(articles.createdAt));

    const titleIds = new Set(titleMatches.map((article) => article.id));
    allArticles = [
      ...titleMatches,
      ...contentMatches.filter((article) => !titleIds.has(article.id)),
    ];
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Résultats de recherche</h1>
      {query ? (
        <p className="text-gray-200 mb-4">
          Résultats pour : &quot;{query}&quot; ({allArticles.length} trouvé
          {allArticles.length !== 1 ? "s" : ""})
        </p>
      ) : (
        <p className="text-gray-200 mb-4">
          Veuillez entrer un terme de recherche.
        </p>
      )}
      {allArticles.length === 0 && query ? (
        <p className="text-gray-200">
          Aucun article ne correspond à votre recherche.
        </p>
      ) : (
        <div className="space-y-6">
          {allArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
