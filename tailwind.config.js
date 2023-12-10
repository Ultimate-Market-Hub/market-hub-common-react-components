module.exports = {
  content: ['./src/**/*.tsx', './preview/**/*.tsx', 'index.html'],
  safelist: ['print:hidden', 'print:block'],
  theme: {
    extend: {},
  },
  presets: [require("../tailwind-preset/index")],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require('@tailwindcss/container-queries')
  ],
};
