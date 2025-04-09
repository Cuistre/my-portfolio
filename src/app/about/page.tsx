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
            {/* Perfect circle */}
            <FadeInBlur delay={0}>
              <Image
                src="/images/ppinsta.jpg" // Your path
                alt="Photo of me"
                fill // Replaces width/height
                className="object-cover"
              />
            </FadeInBlur>
          </div>
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
          <FadeInBlur delay={0.8}>
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
          </FadeInBlur>
          <FadeInBlur delay={1.6}>
            <p className="text-gray-200">
              My name is Gaultier, a developer passionate about code, data,
              mathematics, and creative solutions. I specialize in javascript
              with Next.js, 2D/3D development and data analysis or
              visualization. When I am not coding, I am either working on
              personal creative projects or collaborating with others to bring
              innovative ideas to life.
            </p>
          </FadeInBlur>
        </div>
      </section>

      {/* Section 2 : 2x4 Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Item 1 */}
        <FadeInBlur delay={1}>
          <div className="flex items-start">
            <div className="w-16 h-16 mr-4 flex-shrink-0">
              <svg
                className="w-full h-full text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Code icon */}
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm-1 13.59L6.41 11 5 12.41 10 17.41 19 8.41 17.59 7 11 13.59z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Web Development
              </h2>
              <p className="text-gray-300">
                Building performant and responsive websites with Next.js and
                Tailwind CSS.
              </p>
            </div>
          </div>
        </FadeInBlur>
        {/* Item 2 */}
        <FadeInBlur delay={1.4}>
          <div className="flex items-start">
            <div className="w-16 h-16 mr-4 flex-shrink-0">
              <svg
                className="w-full h-full text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Data analysis icon */}
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Data Analysis
              </h2>
              <p className="text-gray-300">
                Extracting insights and creating visualizations from complex
                datasets.
              </p>
            </div>
          </div>
        </FadeInBlur>
        {/* Item 3 */}
        <FadeInBlur delay={1.8}>
          <div className="flex items-start">
            <div className="w-16 h-16 mr-4 flex-shrink-0">
              <svg
                className="w-full h-full text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* 3D development icon */}
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zM7 8.5l5 3 5-3v5l-5 3-5-3v-5z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                2D/3D Development
              </h2>
              <p className="text-gray-300">
                Creating interactive 2D and 3D visual experiences and
                animations.
              </p>
            </div>
          </div>
        </FadeInBlur>
        {/* Item 4 */}
        <FadeInBlur delay={2.2}>
          <div className="flex items-start">
            <div className="w-16 h-16 mr-4 flex-shrink-0">
              <svg
                className="w-full h-full text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Collaboration icon */}
                <path d="M16 11a4 4 0 100-8 4 4 0 000 8zm-8 0a4 4 0 100-8 4 4 0 000 8zm8 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-8 0c-2.67 0-8 1.34-8 4v2h8v-2c0-2.66-2.33-4-8-4z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Collaboration
              </h2>
              <p className="text-gray-300">
                Teamwork to transform ideas into reality through combined
                expertise.
              </p>
            </div>
          </div>
        </FadeInBlur>
      </section>
    </div>
  );
}
