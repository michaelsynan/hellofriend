/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
    },
        colors: {
      'purp': {
        DEFAULT: '#5f30e2'
      }
    },
  },
  plugins: [],
}
}
