export default {
  // i18next-parser configuration
  // https://github.com/i18next/i18next-parser//options
  //
  // Save the _old files
  createOldCatalogs: true,
  // Default namespace used in your i18next config
  defaultNamespace: 'translation',
  // Indentation of the catalog files
  indentation: 2,
  // Keep keys from the catalog that are no longer in code
  keepRemoved: true,
  // Supports $LOCALE and $NAMESPACE injection
  // Supports JSON (.json) and YAML (.yml) file formats
  // Where to write the locale files relative to process.cwd()
  lexers: {
    tsx: [
      {
        lexer: 'JsxLexer',
        functions: ['translation'],
      },
    ],
    ts: [
      {
        lexer: 'JsxLexer',
        functions: ['translation'],
      },
    ],
  },
  locales: ['default'],
  verbose: false,
  output: 'dist/translations.json',
  sort: true,
  failOnWarnings: false,
  failOnUpdate: false,
};
