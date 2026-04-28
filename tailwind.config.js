
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af7a',
        'nude': '#f8f4ee',
        'beige': '#f5f0e8',
        'deep': '#3f2a1e',
      }
    },
  },
  plugins: [],
}