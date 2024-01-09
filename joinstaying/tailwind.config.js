/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        vsm: "480px",
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
          500: "#1F1F1F",
          600: "#0A0A0A",
          700: "#000000",
        },
        hotel: {
          25: "#e4f4ff",
          50: "#006CE4",
          75: "#4c76b2",
          100: "#0071c2",
          200: "#1A4FA0",
          300: "#003B95",
          400: "#091FAB",
          500: "#1C08A1",
          600: "#003580",
        },
        secondary: {
          50: "#FFB700",
          100: "#E8930C",
          200: "#FF820D",
        },
        success: {
          50: "#008009",
        },
        error: {
          100: "#D4111E",
        },
      },
      textColor: {
        error: {
          100: "#D4111E",
        },
      },
      borderColor: {
        hotel: {
          50: "#FFB700",
        },
      },
    },
  },
  plugins: [],
};
