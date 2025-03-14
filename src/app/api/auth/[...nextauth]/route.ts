import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { db, users } from "@/app/lib/db";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

// Configuration de NextAuth
export const authOptions = {
  // Exporté ici
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        try {
          const user = await db
            .select()
            .from(users)
            .where(eq(users.email, credentials.email))
            .limit(1);
          console.log("Utilisateur trouvé :", user);
          if (!user.length) {
            return null;
          }
          const isPasswordValid = await compare(
            credentials.password,
            user[0].password
          );
          if (!isPasswordValid) {
            return null;
          }
          const userData = {
            id: user[0].id.toString(),
            name: "Admin",
            email: user[0].email,
          };
          console.log("Données renvoyées par authorize :", userData);
          return userData;
        } catch (error) {
          console.error("Erreur dans authorize :", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
