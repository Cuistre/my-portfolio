import NextAuth, {
  type NextAuthOptions,
  type User,
  type Session,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { db, users } from "@/app/lib/db";
import { eq } from "drizzle-orm";
import { type JWT } from "next-auth/jwt";

// Étendre les interfaces de NextAuth pour inclure l’id
interface CustomUser extends User {
  id: string;
}

interface CustomSession extends Session {
  user?: Session["user"] & { id?: string }; // user est optionnel et id aussi
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
          const userData: CustomUser = {
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
      if (token.id) {
        // Si session.user n’existe pas, on l’initialise avec un objet vide
        if (!session.user) {
          session.user = {};
        }
        // Assigner l’id au user
        session.user.id = token.id;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
