import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Inclut tous les fichiers dans src
  ],
  theme: {
    extend: {},
  },
  plugins: [typography], // Ajoute le plugin typography
};

export default config;
