import { type NextAuthOptions, type User, type Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { db, users } from "@/app/lib/db";
import { eq } from "drizzle-orm";
import { type JWT } from "next-auth/jwt";

// Interfaces personnalisées alignées avec next-auth.d.ts
interface CustomUser extends User {
  id: string;
}

interface CustomSession extends Session {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

interface CustomJWT extends JWT {
  id?: string;
}

// Configuration de NextAuth
export const authOptions: NextAuthOptions = {
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
          const userData: CustomUser = {
            id: user[0].id.toString(),
            name: "Admin",
            email: user[0].email,
          };
          console.log("Données renvoyées par authorize :", userData);
          return userData;
        } catch (error) {
          console.error("Erreur dans authorize :", error);
          throw error;
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "default-secret-for-local-dev",
  callbacks: {
    async jwt({ token, user }: { token: CustomJWT; user?: CustomUser }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: CustomSession;
      token: CustomJWT;
    }): Promise<CustomSession> {
      // user est maintenant garanti présent grâce à next-auth.d.ts
      session.user = {
        id: token.id!, // On sait que token.id existe après authorize
        name: session.user?.name || null,
        email: session.user?.email || null,
        image: session.user?.image || null,
      };
      return session;
    },
  },
};
