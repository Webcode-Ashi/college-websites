/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand blue (college identity)
        primary: "#1f2a44",     // deep academic blue
        secondary: "#2c3e66",   // lighter blue

        // Nude / soft warm tone
        nude: "#f3e7d3",        // soft beige-nude
        sand: "#f7f5f2",        // light nude background

        // Neutral clean UI
        white: "#ffffff",
        light: "#f8fafc",

        // Accent (optional warm highlight)
        accent: "#c9a06c",      // goldish nude highlight (very subtle)
      },
    },
  },
  plugins: [],
};