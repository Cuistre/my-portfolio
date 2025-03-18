import { db, articles } from "@/app/lib/db";
import { eq } from "drizzle-orm";
import ReactMarkdown from "react-markdown"; // Retiré Components, inutile ici
import { notFound, redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import Image from "next/image";
import DeleteConfirmPopup from "@/app/components/DeleteConfirmPopup";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import FadeInBlur from "@/app/components/FadeInBlur";

// Typage pour les props de code, compatible avec ReactMarkdown
interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const articleId = parseInt(params.id);
  const session = await getServerSession(authOptions);

  const article = await db
    .select()
    .from(articles)
    .where(eq(articles.id, articleId))
    .limit(1);

  if (!article.length) {
    notFound();
  }

  const { title, content, createdAt } = article[0];

  async function deleteArticle() {
    "use server";
    if (!session?.user) {
      throw new Error("Non autorisé");
    }
    await db.delete(articles).where(eq(articles.id, articleId));
    redirect("/blog");
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <FadeInBlur delay={0}>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
      </FadeInBlur>
      <FadeInBlur delay={0.8}>
        <p className="text-sm text-gray-500 mb-6">
          Publié le {new Date(createdAt).toLocaleDateString()}
        </p>
      </FadeInBlur>
      <FadeInBlur delay={1.6}>
        <div className="prose prose-lg prose-invert">
          <ReactMarkdown
            components={{
              img: ({ src, alt }) => (
                <Image
                  src={src || ""}
                  alt={alt || ""}
                  width={800}
                  height={400}
                  className="rounded-lg mx-auto"
                />
              ),
              code: ({ inline, className, children, ...props }: CodeProps) => {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-md"
                    {...props}
                  >
                    {String(children || "").replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </FadeInBlur>
      {session?.user && (
        <div className="mt-6 flex space-x-4">
          <Link
            href={`/write?edit=${articleId}`}
            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
          >
            Modifier
          </Link>
          <form action={deleteArticle}>
            <DeleteConfirmPopup onConfirm={deleteArticle} />
          </form>
        </div>
      )}
    </div>
  );
}
