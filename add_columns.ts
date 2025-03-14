import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { articles } from "@/app/lib/db";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

async function migrate() {
  await db.run(sql`ALTER TABLE articles ADD COLUMN image_url TEXT`);
  await db.run(sql`ALTER TABLE articles ADD COLUMN summary TEXT`);
  console.log("Colonnes ajoutées !");
}

migrate();
