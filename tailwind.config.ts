import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero-background': '#000000', // Custom color for background if needed
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, #6d28d9, #d946ef)',
      },
      gridTemplateColumns: {
        "gallery": "repeat( auto-fit, minmax(250px, 1fr) )",
      },
    },
  },
  plugins: [],
};
export default config;
