import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Icônes de réseaux sociaux

export default function Footer() {
  return (
    <footer className="py-6 px-6 mt-8">
      <div className="max-w-5xl mx-auto">
        {/* Bordure en haut */}
        <div
          className="h-0.5 bg-white opacity-75 mb-4"
          style={{ marginLeft: "6rem", marginRight: "6rem" }}
        ></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-200">
          {/* Gauche : Copyright */}
          <p>© {new Date().getFullYear()} Gaultier. Tous droits réservés.</p>

          {/* Droite : Réseaux sociaux */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/ton-profil" // Remplace par ton GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/ton-profil" // Remplace par ton LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
          </div>
        </div>
        {/* Mention tech */}
        <p className="text-center text-sm text-gray-400 mt-4">
          Construit avec Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
