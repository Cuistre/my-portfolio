"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faTimes,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    const newLanguage = language === "fr" ? "en" : "fr";
    setLanguage(newLanguage);

    // Si sur /blog, recharger avec le nouveau lang
    if (pathname.startsWith("/blog")) {
      router.push(`/blog?lang=${newLanguage}`);
    }
  };

  return (
    <header className="py-4 px-6 shadow-lg relative">
      <nav className="max-w-5xl mx-auto flex items-center justify-between flex-wrap">
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
        <div
          className={`w-full md:w-auto md:flex md:space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          } md:block mt-4 md:mt-0`}
        >
          <Link
            href="/"
            className="block md:inline-block py-2 hover:text-indigo-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href={`/blog?lang=${language}`}
            className="block md:inline-block py-2 hover:text-indigo-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="block md:inline-block py-2 hover:text-indigo-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          {session?.user && (
            <Link
              href="/write"
              className="block md:inline-block py-2 hover:text-indigo-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Write
            </Link>
          )}
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <form onSubmit={handleSearch} className="flex items-center">
            <div className="flex rounded-full overflow-hidden border border-indigo-300">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="px-2 py-1 text-white placeholder-white bg-transparent w-24 md:w-auto focus:outline-none"
              />
              <button
                type="submit"
                className="bg-indigo-500 px-2 py-1 hover:bg-indigo-600 transition-colors"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 h-4" />
              </button>
            </div>
          </form>
          <button
            onClick={toggleLanguage}
            className="flex items-center hover:text-indigo-500 transition-colors"
          >
            <span className="text-sm">{language === "fr" ? "FR" : "EN"}</span>
          </button>
          {session?.user ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="hover:text-indigo-500 transition-colors"
            >
              <FontAwesomeIcon
                icon={faUser}
                className="w-4 h-4 md:w-5 md:h-5"
              />
            </button>
          ) : (
            <Link href="/login">
              <FontAwesomeIcon
                icon={faUser}
                className="w-4 h-4 md:w-5 md:h-5 hover:text-indigo-500 transition-colors"
              />
            </Link>
          )}
        </div>
      </nav>
      <div
        className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto h-0.5 bg-white opacity-75"
        style={{ left: "6rem", right: "6rem" }}
      ></div>
    </header>
  );
}
