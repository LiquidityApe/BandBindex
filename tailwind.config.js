/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#25092c",
        secondary: "#07F307",
        lovelypink: "#fe8daa",
        complimentsec: "#e3ae96",
        binance_black: "#111518ff",
        binance_ash: "#111518ff",
        binance_yellow: "#fcd535ff",
        binance_white: "#eaecefff",
        binance_green: "#14cb85ff",
        binance_brightash: "#6b7f96ff",
        bluish: "#449bc0",
        lightyellow: "#fff47a",
        midorange: "#f69d3c",
        background: "#F1E5C4",
        myYellow: "#e9ec6b",
        myGreen: "#293d04",
        myBrown: "#623412",
        Gold: "#f5900c",
      },
    },
  },
  plugins: [],
};
