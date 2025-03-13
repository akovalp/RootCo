/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-smoke": "#acaa6d",
        "quarter-spanish-white": "#f8f6e5",
        bourbon: "#b37220",
        yuma: "#d0c39c",
        "harvest-gold": "#e0a96e",
        "cape-palliser": "#b07841",
        walnut: "#754d1e",
        "willow-grove": "#626d60",
        "battleship-gray": "#808a79",
        "grain-brown": "#e2ddb2",
      },
    },
  },
  plugins: [],
};
