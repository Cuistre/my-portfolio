import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import SessionWrapper from "./components/SessionWrapper";
// import { getServerSession } from "next-auth"; // Import correct pour la session
// import { authOptions } from "./lib/auth";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "My Blog",
  description: "Gaultier Hym - Technical Blog",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession(authOptions); // Récupère la session

  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-gradient-to-r from-indigo-900 to-indigo-950 text-white`}
      >
        <SessionWrapper>
          <Header />
          <main className="pt-20">{children}</main>
          <Footer></Footer>
        </SessionWrapper>
      </body>
    </html>
  );
}
