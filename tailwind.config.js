/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pure White Background Base
        base: "#ffffff", 

        // Primary Blue (Navy/Dark Blue for professional identity)
        primary: {
          DEFAULT: "#1E3A5F", // Main Dark Blue (Jo aapne Footer/Contact mein manga tha)
          light: "#2c4a75",
          dark: "#0f172a",
        },

        // Nude Tones (Beige/Sand shades for soft UI)
        nude: {
          DEFAULT: "#f3e7d3", // Authentic Nude
          light: "#fafaf9",   // Off-white/Cream (Backgrounds ke liye best)
          dark: "#e5d5bc",    // Thoda dark nude hover effects ke liye
        },

        // Secondary / Accent (Sand & Gold tones)
        secondary: "#d4af7a", // Muted Goldish Nude (Icons ke liye best)
        
        // Neutral Slate for Text
        slate: {
          heading: "#1e293b",
          body: "#64748b",
        }
      },
      // Optional: Custom Border Radius for that modern 'pill' look
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      }
    },
  },
  plugins: [],
};