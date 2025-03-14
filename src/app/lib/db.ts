import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

const sqlite = new Database("sqlite.db");
export const db = drizzle(sqlite);

// Table utilisateurs
export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
});

// Table articles
export const articles = sqliteTable("articles", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(new Date()),
  authorId: integer("author_id")
    .notNull()
    .references(() => users.id),
  imageUrl: text("image_url"), // Nouvelle colonne pour l’URL de la photo
  summary: text("summary"), // Nouvelle colonne pour le résumé
});
