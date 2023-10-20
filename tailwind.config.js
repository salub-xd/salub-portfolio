/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animationfor2: 'bounce 2s infinite'
    },
    fontFamily: {
      'Ubuntu': ['ubuntu','Roboto'],
      'Roboto': ['Roboto'],
      'Alumni':['Alumni Sans Collegiate One','ubunto','mono'],
      'Pixelify': ['Pixelify Sans'],
    },
  },
  plugins: [],
}

