/**
 * This configuration only overrides specific settings where desired configuration options differ from Prettier standards. Additionally, it configures various Prettier plugins.
 * @type {{singleAttributePerLine: boolean, trailingComma: string}}
 */
const muenchenPrettierCodeFormat = {
    $schema: "https://json.schemastore.org/prettierrc",
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
    plugins: ["@ianvs/prettier-plugin-sort-imports"],
    importOrder: [
        "<BUILTIN_MODULES>", // Node-Modules
        "",
        "<TYPES>", // Standard types
        "",
        "<THIRD_PARTY_MODULES>", // Libraries
        "",
        "<TYPES>^[.]", // Own defined types
        "",
        "^@(/.*)$", // Relative imports with @
        "^[.]", // Relative imports with @ .
    ],
    importOrderTypeScriptVersion: "5.2.2",
    importOrderParserPlugins: ["typescript"],
}

export default muenchenPrettierCodeFormat;
