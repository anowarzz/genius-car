/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      brightRed: '#FF3811'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
