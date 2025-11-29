import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        western: {
          brown: "#3E2723",
          tan: "#C8B896",
          beige: "#E8DCC4",
          sand: "#D4C5A9",
          orange: "#D97706",
          amber: "#ab8036ff",
          darkBrown: "#1C0F0A",
        },
      },
      fontFamily: {
        display: ["var(--font-rye)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        slideUp: "slideUp 0.6s ease-out",
        parallax: "parallax 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        parallax: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "100% center" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
