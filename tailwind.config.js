/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      danawt: "danawt",
    },
    extend: {
      boxShadow: {
        "mobile-menu": "0 0px 10px 0px rgba(0, 0, 0, .14);",
        "country-card": "0 2px 20px hsla(0,0%,65%,.342);",
      },
      keyframes: {
        cloud: {
          "100%": { left: "100%" },
        },
        cloud2: {
          "100%": { right: "0" },
        },
      },
      animation: {
        cloud: "cloud 50s linear infinite",
        cloud2: "cloud2 50s linear infinite",
      },
    },
  },
  plugins: [],
};
