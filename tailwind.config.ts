import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ffe8e6",
          100: "#ffd1cf",
          200: "#ffaaa6",
          300: "#ff837e",
          400: "#ff5c55",
          500: "#fa1108",
          600: "#d40e07",
          700: "#a80b06",
          800: "#7c0804",
          900: "#4f0503",
        },
        neutral: {
          50: "#ffffff",
          100: "#f9fafb",
          200: "#f3f4f6",
          300: "#e5e7eb",
          400: "#d1d5db",
          500: "#9ca3af",
          600: "#6b7280",
          700: "#4b5563",
          800: "#374151",
          900: "#1f2937",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
