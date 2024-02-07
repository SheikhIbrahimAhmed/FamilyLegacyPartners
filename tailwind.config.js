/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        "685b44": "#685b44",
        "custom-color": "#77746e", // Add the custom color
      },
      backgroundColor: {
        "9d8b6a": "#9d8b6a",
      },
      borderColor: {
        "custom-color": "#685b44",
      },
    },
  },
  plugins: [],
};
