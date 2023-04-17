/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#15c4b8",

          secondary: "#c912b7",

          accent: "#1a2da5",

          neutral: "#31223A",

          "base-100": "#EDF2F7",

          info: "#40AEDD",

          success: "#74E2CC",

          warning: "#F3BF59",

          error: "#F6684C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
