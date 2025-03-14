import Link from "next/link";
import Image from "next/image";
import { articles } from "@/app/lib/db";

type Article = typeof articles.$inferSelect;

export default function ArticleCard({ article }: { article: Article }) {
  const imageSrc = article.imageUrl
    ? `/articles/${article.imageUrl}.png`
    : null;

  return (
    <Link href={`/blog/${article.id}`} className="block">
      <div className="flex bg-indigo-800 rounded-lg shadow-lg overflow-hidden hover:bg-indigo-700 transition-colors h-48">
        {" "}
        {/* Hauteur fixe */}
        <div className="w-1/3 flex-shrink-0">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={article.title}
              width={200}
              height={150}
              className="object-cover w-full h-full" // Rogne l’image pour remplir
            />
          ) : (
            <div className="w-full h-full bg-gray-600 flex items-center justify-center text-gray-300">
              Pas d’image
            </div>
          )}
        </div>
        <div className="p-4 flex-1 flex flex-col">
          {" "}
          {/* Flex pour gérer le contenu */}
          <h2 className="text-xl font-bold mb-1 line-clamp-1">
            {article.title}
          </h2>
          <p className="text-sm italic text-gray-300 mb-2">
            Publié le {new Date(article.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-200 line-clamp-3">
            {article.summary || "Pas de résumé disponible."}
          </p>
        </div>
      </div>
    </Link>
  );
}
