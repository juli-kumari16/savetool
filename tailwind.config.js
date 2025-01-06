/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'], // Add Playfair Display with fallback
        calistoga: ['"Calistoga"', 'cursive'],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        customGray: "#f5f5fa", // Add your custom color here
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
    },
  },
  plugins: [],
}

