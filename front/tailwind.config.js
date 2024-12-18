/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        voltaire: ["Voltaire", "sans-serif"],
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        centered: "0 0 20px rgba(79, 79, 79, 0.8)", // Sin desplazamiento, centrada
        hoverCentered: "0 0 40px rgba(30, 78, 255, 0.8)",
      },
    },
  },
  plugins: [],
};
