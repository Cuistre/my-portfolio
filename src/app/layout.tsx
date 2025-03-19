import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SessionWrapper from "./components/SessionWrapper";
import { getServerSession } from "next-auth"; // Import correct pour la session
import { authOptions } from "./lib/auth";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Mon application Next.js avec un header stylé",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions); // Récupère la session

  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-gradient-to-r from-indigo-900 to-indigo-950 text-white`}
      >
        <SessionWrapper session={session}>
          <Header className="fixed top-0 left-0 right-0 z-50" />
          <main className="pt-20">{children}</main>
          <Footer></Footer>
        </SessionWrapper>
      </body>
    </html>
  );
}
