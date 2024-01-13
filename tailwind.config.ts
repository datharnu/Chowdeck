import type { Config } from "tailwindcss";

const config: Config = {
  daisyui: {
    themes: ["light"],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { min: "320px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "2560px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {
      backgroundImage: {
        bgImg: "url(/Vector.svg)",
        mapBg: "url(/city-map.webp)",
      },
      colors: {
        primary: "#0C513F",
        yellow: "#FFC501",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
