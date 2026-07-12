import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        azure: {
          50: "#eff8ff",
          100: "#dff1ff",
          500: "#0078d4",
          600: "#0067b8",
          700: "#005a9e",
        },
        ink: {
          900: "#172033",
          700: "#344054",
          500: "#667085",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 32, 51, 0.08)",
      },
    },
  },
};

export default config;
