/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {}, fontFamily: {
      "poppins": ['Poppins', 'sans-serif'],
      "inter": ['Inter', 'sans-serif'],
      "japanese": ['Noto Sans JP', 'sans-serif'],
    }}, plugins: [require('@tailwindcss/forms')]
}
