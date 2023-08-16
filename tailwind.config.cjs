/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "slate-300-60": "rgba(198, 208, 235, 0.6)", // slate-300 with 60% opacity
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
