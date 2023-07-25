/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../*"],
  theme: {
    extend: {},
    colors: {
      "site-primary-color": "--primary-color"
    },
  },
  plugins: [require("daisyui"),
           'tailwindcss',
    ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
}