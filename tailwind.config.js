/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "-1px -1px 6px 3px #E9E9E9",
      },
    },
    screens: {
      mobile: "300px",
      phone: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
      "4xl": "1900px",
    },
  },
  plugins: [],
};
