/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1a2a44',
        secondary: '#4ade80',
        navy: '#1a2a44',
        accent: '#4ade80',
        dark: '#111827',
        darker: '#050A19',
        light: '#F0F9FF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
