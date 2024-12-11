/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        yellow: "#F4D04E",
        'gray-950': '#111111',
        'gray-500': '#6B6B6B'
      },
      boxShadow: {
        thick: "10px 10px 0px black",
      },
    }
  },
  plugins: [],
}

