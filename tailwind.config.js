/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "0 10px",
    },
    extend: {
      colors: {
        darkSlate: "#363841",
        orange: "#e38035",
      },
      fontFamily: {
        outfit: "Outfit",
        poiret: "Poiret One",
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0)", "transform-origin": "bottom left" },
          "100%": { transform: "scale(1)", "transform-origin": "bottom left" },
        },
      },
      animation: {
        scaleUp: "scaleUp 0.3s linear",
      },
    },
  },
  plugins: [],
};
