const { resolve } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.njs",
    "./src/**/*.jsx",
    "./src/**/*.nts",
    "./src/**/*.tsx",
    resolve(__dirname, "../../node_modules/@repo/ui/src/**/*.tsx"),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'xp-bar': "url('/static/xp-bar.jpg')",
        'bg': "url('/static/bg.jpg')",
      }
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'crete-round': ['Crete Round', 'sans-serif'],
      'quadrat': ['Friz Quadrata', 'Arial'],
      'figtree': ['Figtree', 'sans-serif'],
    }
  },
  plugins: [],
}
