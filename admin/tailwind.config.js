/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "2md": "900px",
      },
      colors: {
        primary: {
          p1: "#2A85FF",
          p2: "#83BF6E",
          p3: "#FF6A55",
          p4: "#8E59FF",
          s1: "#FFBC99",
          s2: "#CABDFF",
          s3: "#B1E5FC",
          s4: "#B5E4CA",
          s5: "#FFD88D",
        },
        secondary: {
          n: "#FFFFFF",
          n1: "#FCFCFC",
          n2: "#F4F4F4",
          n3: "#EFEFEF",
          n4: "#6F767E",
          n5: "#33383F",
          n6: "#272B30",
          n7: "#1A1D1F",
          n8: "#111315",
        },
        shades: {
          s1: "#9A9FA5",
          s2: "#6F767E",
          s3: "rgba(#6F767E, .4)",
          s4: "rgba(#111315, .5)",
        },
      },
    },
  },
  plugins: [],
};
