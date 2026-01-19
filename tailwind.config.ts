import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      primary: {
        "100": "#FFE8F0",
        DEFAULT: "#EE2B69",
      },
      secondary: "#FBE843",
      black: {
        "100": "#333333",
        "200": "#141413",
        "300": "#7D8087",
        DEFAULT: "#000000",
      },
      white: {
        "100": "#F7F7F7",
        DEFAULT: "#FFFFFF",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    boxShadow: {
      100: "2px 2px 0px 0px rgb(0, 0, 0)",
      200: "2px 2px 0px 2px rgb(0, 0, 0)",
      300: "2px 2px 0px 2px rgb(238, 43, 105)",
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
