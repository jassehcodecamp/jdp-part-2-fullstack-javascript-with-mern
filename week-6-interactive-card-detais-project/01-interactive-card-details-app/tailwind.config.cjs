/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-300": "hsl(270, 3%, 87%)",
        "primary-400": "hsl(279, 6%, 55%)",
        "primary-500": "hsl(278, 68%, 20%)",
        "primary-600": "hsl(278, 68%, 17%)",
        "primary-700": "hsl(278, 68%, 15%)",
        primary: "hsl(278, 68%, 11%)",
      },
      spacing: {
        13.5: "3.375rem",
        68: "17rem",
        92: "23rem",
        88: "22rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        110: "27.5rem",
        112: "28rem",
        116: "29rem",
        118: "29.5rem",
        120: "30rem",
        // 120: "30rem",
      },
    },
  },
  plugins: [],
}
