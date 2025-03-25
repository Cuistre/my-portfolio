import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
import path from "path";

const dbPath =
  process.env.NODE_ENV === "production"
    ? path.join(process.cwd(), "sqlite.db") // Chemin absolu en prod
    : "sqlite.db"; // Relatif en dev

console.log("Opening SQLite database at:", dbPath);
const sqlite = new Database(dbPath);
console.log(
  "SQLite connected, tables:",
  sqlite.prepare("SELECT name FROM sqlite_master WHERE type='table';").all()
);
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
  imageUrl: text("image_url"),
  summary: text("summary"),
});
