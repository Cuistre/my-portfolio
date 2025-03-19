import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../lib/auth";
import { db, articles } from "@/app/lib/db";
import { eq } from "drizzle-orm";

export default async function Write({
  searchParams,
}: {
  searchParams: { edit?: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  const editId = searchParams.edit ? parseInt(searchParams.edit) : null;
  let existingArticle = null;

  if (editId) {
    const result = await db
      .select()
      .from(articles)
      .where(eq(articles.id, editId))
      .limit(1);

    existingArticle = result[0] || null;
    if (!existingArticle) {
      redirect("/blog");
    }
  }

  async function saveArticle(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const imageName = formData.get("imageName") as string | null; // Juste le nom, pas d’URL
    const summary = formData.get("summary") as string | null;
    const authorId = parseInt(session.user.id);

    if (isNaN(authorId)) {
      throw new Error("authorId invalide : " + session.user.id);
    }

    if (editId) {
      await db
        .update(articles)
        .set({
          title,
          content,
          imageUrl: imageName,
          summary,
        })
        .where(eq(articles.id, editId));
    } else {
      await db.insert(articles).values({
        title,
        content,
        createdAt: new Date(),
        authorId,
        imageUrl: imageName, // Stocke juste le nom (ex. "article_react")
        summary,
      });
    }

    redirect("/blog");
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        {editId ? "Modifier un article" : "Écrire un nouvel article"}
      </h1>
      <form action={saveArticle} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Titre de l'article"
          defaultValue={existingArticle?.title || ""}
          required
          className="p-2 border rounded focus:outline-none"
        />
        <input
          type="text"
          name="imageName"
          placeholder="Nom de l’image (ex. article_react, sans .png)"
          defaultValue={existingArticle?.imageUrl || ""}
          className="p-2 border rounded focus:outline-none"
        />
        <textarea
          name="summary"
          placeholder="Résumé de l’article (quelques phrases)"
          defaultValue={existingArticle?.summary || ""}
          rows={3}
          className="p-2 border rounded focus:outline-none"
        />
        <textarea
          name="content"
          placeholder="Écrivez votre article en Markdown ici..."
          defaultValue={existingArticle?.content || ""}
          required
          rows={10}
          className="p-2 border rounded font-mono focus:outline-none"
        />
        <button
          type="submit"
          className="p-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
        >
          {editId ? "Mettre à jour" : "Publier"}
        </button>
      </form>
      <p className="mt-2 text-sm text-gray-200">
        Ajoutez une image dans public/articles/ (ex. article_react.png), puis
        entrez son nom ci-dessus.
      </p>
    </div>
  );
}
