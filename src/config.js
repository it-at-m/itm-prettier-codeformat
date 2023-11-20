/**
 * This configuration only overrides specific settings where desired configuration options differ from Prettier standards.
 * @type {{singleAttributePerLine: boolean, trailingComma: string}}
 */
const muenchenPrettierCodeFormat = {
    $schema: "https://json.schemastore.org/prettierrc",
    trailingComma: "es5",
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
