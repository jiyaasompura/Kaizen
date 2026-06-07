/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        primary: "#8B5CF6",
        secondary: "#06B6D4",
        accent: "#EC4899",
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        serif: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
