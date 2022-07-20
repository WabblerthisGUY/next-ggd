/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      shippori: ["Shippori Antique B1", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
      // work sans
      wsans: ["Work Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/**/**/*.{js,ts,jsx,tsx}",
  ],
};
