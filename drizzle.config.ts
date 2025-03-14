import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/app/lib/db.ts", // Changement ici : src/app au lieu de app
  out: "./drizzle", // Dossier de migrations reste à la racine
  dialect: "sqlite",
  dbCredentials: {
    url: "./sqlite.db", // SQLite à la racine (ou ajuste si besoin)
  },
});
