/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class", // מוודא שהמצב הכהה מופעל לפי class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
