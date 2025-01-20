/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    sm: "300px",
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1400px",
    // // => @media (min-width: 1280px) { ... }

    "2xl": "1500px",
    // // => @media (min-width: 1536px) { ... }
    
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"], // Add Playfair Display with fallback
        calistoga: ['"Calistoga"', "cursive"],
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
};
