/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#f3f3f3",
        accentColor: "#c92627",
        accentBackground: "#f3eeea",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [],
  important: true,
};
