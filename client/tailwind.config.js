/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {},
      colors: {
        primary: {
          50: "#B0B3B8",
          100: "#525758",
          200: "#4E4F50",
          300: "#4D4E4F",
          400: "#3E4042",
          500: "#3A3B3C",
          600: "#242526",
          700: "#18191A",
        },
        hotel: {
          50: "#006CE4",
          100: "#1A4FA0",
          200: "#003B95",
        },
      },
      textColor: {},
      borderColor: {
        hotel: {
          50: "#FFB700",
        },
      },
    },
  },
  plugins: [],
};
