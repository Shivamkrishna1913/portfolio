/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bg2: "url('/src/components/bg2.jpg')",
        bg1: "url('/src/components/bg1.jpg')",
        bg3: "url('/src/components/bg3.jpg')",
      },
      fontFamily: {
        roboto: ["roboto mono"],
      },
    },
  },
  plugins: [],
};
