/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(240, 100%, 5%)",
        "primary-orange": "hsl(35, 77%, 62%)",
        "primary-red": "hsl(5, 85%, 63%)",
        "secondary-100": "hsl(36, 100%, 99%)",
        "secondary-300": "hsl(233, 8%, 50%)",
        "secondary-500": "hsl(233, 8%, 79%)",
        "secondary-600": "hsl(233, 8%, 60%)",
        "secondary-800": "hsl(236, 13%, 42%)",
      },
    },
  },
  plugins: [],
}
