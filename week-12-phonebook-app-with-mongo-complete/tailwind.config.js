/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.hbs"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
