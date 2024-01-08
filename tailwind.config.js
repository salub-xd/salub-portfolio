/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        "animation-bounce": "bounce 3s infinite ease-in-out"
      },
      keyframes: {
        "bounce": {
          "0%, 100%": {
            "transform": "translateY(-3%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)"
          },
          "50%": {
            "transform": "translateY(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)"
          },
        }
      }
    },
    fontFamily: {
      'Ubuntu': ['ubuntu', 'Roboto'],
      'Roboto': ['Roboto'],
      'Alumni': ['Alumni Sans Collegiate One', 'ubunto', 'mono'],
      'Pixelify': ['Pixelify Sans'],
    },
  },
  plugins: [],
}

