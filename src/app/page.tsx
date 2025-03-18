import Image from "next/image";
import FadeInBlur from "./components/FadeInBlur";

export default async function Home() {
  return (
    <div className="min-h-screen">
      <div className="pt-16">
        <FadeInBlur delay={0}>
          <h1 className="text-4xl font-bold text-center mb-12">
            Bienvenue sur mon blog
          </h1>
        </FadeInBlur>
        <div className="max-w-5xl my-24 mx-auto px-4 flex flex-col md:flex-row gap-8">
          <FadeInBlur delay={0.6}>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/images/ppinsta.jpg"
                alt="Photo de Gaultier"
                width={200}
                height={150}
                className="rounded-lg object-cover"
              />
            </div>
          </FadeInBlur>
          <FadeInBlur delay={1.2}>
            <div className="md:w-1/2 flex items-center">
              <p className="text-xl leading-relaxed text-justify">
                Salut ! Je suis Gaultier, développeur passionné et créateur de
                contenu. Sur ce blog, je partage mes aventures dans le code, mes
                projets, et quelques réflexions sur la tech. Prenez un café,
                installez-vous, et explorez mes articles !
              </p>
            </div>
          </FadeInBlur>
        </div>
      </div>
    </div>
  );
}
