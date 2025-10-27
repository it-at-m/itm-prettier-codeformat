const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  vueIndentScriptAndStyle: false,
  endOfLine: "lf",
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: true,
  plugins: [ "@ianvs/prettier-plugin-sort-imports" ],
  importOrder: [
    "<BUILTIN_MODULES>",
    "",
    "<TYPES>",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "<TYPES>^[.]",
    "",
    "^@(/.*)$",
    "^[.]"
  ],
  importOrderTypeScriptVersion: "5.2.2",
  importOrderParserPlugins: ["typescript"]
};

export default config;