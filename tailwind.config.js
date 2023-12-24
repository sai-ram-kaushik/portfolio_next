/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: "Sora",
        arizonia: "Arizonia",
        bungee: "Bungee Outline"
      },

      colors: {
        primary: {
          black: "#000",
          neutral: "#404040",
          white: "#fff",
        },
        zinc: {
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          500: "#71717a",
          800: "#27272a",
        },
        error: {
          500: "#ef4444",
        },
      },
    },
  },
  plugins: [],
};
