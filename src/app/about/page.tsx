import Image from "next/image";
import FadeInBlur from "../components/FadeInBlur";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-4 mt-24">
      {/* Section 1 : Photo + Texte */}
      <section className="flex flex-col md:flex-row items-center mb-12">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
          <div className="relative w-40 h-40 rounded-full overflow-hidden">
            {" "}
            {/* Cercle parfait */}
            <FadeInBlur delay={0}>
              <Image
                src="/images/ppinsta.jpg" // Ton chemin
                alt="Photo de moi"
                fill // Remplace width/height
                className="object-cover"
              />
            </FadeInBlur>
          </div>
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
          <FadeInBlur delay={0.8}>
            <h1 className="text-3xl font-bold mb-4">À propos de moi</h1>
          </FadeInBlur>
          <FadeInBlur delay={1.6}>
            <p className="text-gray-200">
              Je m’appelle Gaultier, développeur passionné par le code, le
              design, et les solutions créatives. J’adore travailler avec
              Next.js, Tailwind, et explorer de nouvelles technologies pour
              construire des expériences web modernes et intuitives. Quand je ne
              code pas, je prends un café ou je réfléchis à mon prochain projet
              !
            </p>
          </FadeInBlur>
        </div>
      </section>

      {/* Section 2 : Grille 2x4 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Élément 1 */}
        <FadeInBlur delay={1}>
          <div className="flex items-start">
            <div className="w-16 h-16 mr-4 flex-shrink-0">
              <svg
                className="w-full h-full text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Icône exemple : Code */}
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm-1 13.59L6.41 11 5 12.41 10 17.41 19 8.41 17.59 7 11 13.59z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Développement Web
              </h2>
              <p className="text-gray-300">
                Création de sites performants et responsives avec Next.js et
                Tailwind CSS.
              </p>
            </div>
          </div>
        </FadeInBlur>
        {/* Élément 2 */}
        <FadeInBlur delay={1.4}>
          <div className="flex items-start">
            <div className="w-16 h-16 mr-4 flex-shrink-0">
              <svg
                className="w-full h-full text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Icône exemple : Design */}
                <path d="M12 3v18m9-9H3M7 7l5-5 5 5m0 10l-5 5-5-5" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Design Intuitif
              </h2>
              <p className="text-gray-300">
                Focus sur une UX simple et élégante pour chaque projet.
              </p>
            </div>
          </div>
        </FadeInBlur>
        {/* Élément 3 */}
        <FadeInBlur delay={1.8}>
          <div className="flex items-start">
            <div className="w-16 h-16 mr-4 flex-shrink-0">
              <svg
                className="w-full h-full text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Icône exemple : Apprentissage */}
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Apprentissage Continu
              </h2>
              <p className="text-gray-300">
                Toujours en train d’explorer de nouvelles technos et méthodes.
              </p>
            </div>
          </div>
        </FadeInBlur>
        {/* Élément 4 */}
        <FadeInBlur delay={2.2}>
          <div className="flex items-start">
            <div className="w-16 h-16 mr-4 flex-shrink-0">
              <svg
                className="w-full h-full text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Icône exemple : Collaboration */}
                <path d="M16 11a4 4 0 100-8 4 4 0 000 8zm-8 0a4 4 0 100-8 4 4 0 000 8zm8 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-8 0c-2.67 0-8 1.34-8 4v2h8v-2c0-2.66-2.33-4-8-4z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Collaboration
              </h2>
              <p className="text-gray-300">
                Travail d’équipe pour transformer les idées en réalité.
              </p>
            </div>
          </div>
        </FadeInBlur>
      </section>
    </div>
  );
}
