/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  plugins: [
    require('@ianvs/prettier-plugin-sort-imports'),

    // Tailwind plugin MUST be last in the list
    // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
    require('prettier-plugin-tailwindcss'),
  ],

  singleQuote: true,

  // tailwind classname sorting
  tailwindFunctions: ['classNames'],

  // import sorting options
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^~/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.2.2',
};
