// import { type NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { compare } from "bcrypt";
// import { db, users } from "@/app/lib/db";
// import { eq } from "drizzle-orm";

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         console.log("Authorize called with credentials:", credentials);
//         if (!credentials?.email || !credentials?.password) {
//           console.log("Missing email or password");
//           return null;
//         }
//         try {
//           const user = await db
//             .select()
//             .from(users)
//             .where(eq(users.email, credentials.email))
//             .limit(1);
//           console.log("DB query result:", user);
//           if (!user.length) {
//             console.log("No user found for email:", credentials.email);
//             return null;
//           }
//           const isPasswordValid = await compare(
//             credentials.password,
//             user[0].password
//           );
//           console.log("Password valid:", isPasswordValid);
//           if (!isPasswordValid) {
//             return null;
//           }
//           const userData = {
//             id: user[0].id.toString(),
//             name: "Admin",
//             email: user[0].email,
//           };
//           console.log("Authorize success, returning:", userData);
//           return userData;
//         } catch (error) {
//           console.error("Authorize failed with error:", error);
//           throw error; // Relance pour voir dans les logs
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   secret: process.env.NEXTAUTH_SECRET || "default-secret-for-local-dev",
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user = {
//         id: token.id!,
//         name: session.user?.name || null,
//         email: session.user?.email || null,
//         image: session.user?.image || null,
//       };
//       return session;
//     },
//   },
// };

import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Authorize called with:", credentials);
        // Simuler un user sans DB
        if (
          credentials?.email === "gaultier.hym@gmail.com" &&
          credentials?.password === "test"
        ) {
          console.log("Simulated user authenticated");
          return { id: "1", name: "Admin", email: "gaultier.hym@gmail.com" };
        }
        console.log("Credentials invalid");
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "default-secret-for-local-dev",
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id!,
        name: session.user?.name || null,
        email: session.user?.email || null,
        image: session.user?.image || null,
      };
      return session;
    },
  },
};
