/** @type {import("tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  content: ['./src/**/*.tsx', './preview/**/*.tsx', 'index.html'],
  safelist: ['print:hidden', 'print:block'],
  theme: {},
  presets: [require("@ultimate-market-hub/tailwind-preset")],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require('@tailwindcss/container-queries'),
  ],
};
