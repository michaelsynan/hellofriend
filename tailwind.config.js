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
    backgroundImage:
    {
      'blob': "url('@/assets/blob.svg')"
    },
        colors: {
      'purp': {
        light: '#7f59e8',
        DEFAULT: '#5f30e2',
        dark: '#4c26b5'
      }
    },
  },
  plugins: [

  ],
}
}
