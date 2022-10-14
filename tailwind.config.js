const defaultTheme= require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans' :['Prompt', 'sans-serif', defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
