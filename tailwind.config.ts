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
      sm: "0px 1px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)",
      "sm-secondary":
        "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
      "button-focus": "0px 0px 0px 4px rgba(68, 76, 231, 0.12)",
    },
  },
  plugins: [],
};
export default config;
