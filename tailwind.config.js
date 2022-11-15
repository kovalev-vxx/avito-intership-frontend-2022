/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        dark: "#020409",
        light: "#F6F8FA",
        lightElement: "#FFFFFF",
        darkElement: "#0D1117",
        darkH1Text: "#c9d1d9",
        darkMutedText: "#8b949e",
        lightH1Text: "#242a2f",
        lightMutedText: "#57606a",
        darkBorder: "#30363d",
        lightBorder: "#d0d7de",
        cyan: "#06b6d4",
        cyan600: "#0891b2"
      }
    },
  },
  plugins: [],
}
