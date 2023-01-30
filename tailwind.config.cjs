/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: 'slide 3s ease-in-out infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-500px)' },
          '100%': { transform: 'translateX(500px)' },
        }
      }
    },
    fontFamily: {
      "poppins": ['Poppins', 'sans-serif'],
      "inter": ['Inter', 'sans-serif'],
      "japanese": ['Noto Sans JP', 'sans-serif'],
    }
  },
  plugins: []
};
