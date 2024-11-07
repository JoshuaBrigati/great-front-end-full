import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    boxShadow: {
      sm: "0px 1px 3px 0px rgba(0, 0, 0, 0.15), 0px 1px 2px -1px rgba(0, 0, 0, 0.15)",
    },
  },
  plugins: [],
};
export default config;
