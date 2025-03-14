import { db } from "./db";
import { users } from "./db";
import { hash } from "bcrypt";
async function seed() {
    const hashedPassword = await hash("Currynumber30!", 10); // Remplace par ton mot de passe
    await db
        .insert(users)
        .values({
        email: "gaultier.hym@gmail.com", // Remplace par ton email
        password: hashedPassword,
    })
        .onConflictDoNothing(); // Évite les doublons
    console.log("Utilisateur créé !");
}
seed();
