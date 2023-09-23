/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "vsm": "480px",
        "2vsm": "550px",
        "2md": "900px",
      },
      colors: {
        primary: {
          50: "#B0B3B8",
          100: "#525758",
          200: "#4E4F50",
          300: "#4D4E4F",
          400: "#3E4042",
          500: "#3A3B3C",
          600: "#363738",
          700: "#242526",
        },
        hotel: {
          25: "#e4f4ff",
          50: "#006CE4",
          100: "#0071c2",
          200: "#1A4FA0",
          300: "#003B95",
          400: "#091FAB",
          500: "#1C08A1",
        },
        secondary: {
          50: "#FFB700",
          100: "#E8930C",
          200: "#FF820D",
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
