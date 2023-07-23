/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx,}",
    "./src/layout/**/*.{js,jsx,ts,tsx,}",
    "./src/components/**/*.{js,jsx,ts,tsx,}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: "Merriweather, serif",
      },
    },
  },
  plugins: [],
};
