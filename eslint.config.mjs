import antfu from "@antfu/eslint-config";

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

// TODO: add tailwindcss plugin

export default withNuxt(antfu({
  type: "app",
  vue: true,
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  ignores: [".pnpm-store/**", "**/migrations/*", "content/**/*.md"],
}, {
  rules: {
    "vue/max-attributes-per-line": ["error", {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],
    "ts/no-redeclare": "off",
    "ts/consistent-type-definitions": ["error", "type"],
    "no-console": ["warn"],
    "antfu/no-top-level-await": ["off"],
    "node/prefer-global/process": ["off"],
    "node/no-process-env": ["error"],
    "perfectionist/sort-imports": "error",
    // Disable global filename-case, use directory-specific rules below
    "unicorn/filename-case": "off",
  },
},
// Components: PascalCase
{
  files: ["**/components/**/*.vue", "**/components/**/*.ts"],
  rules: {
    "unicorn/filename-case": ["error", {
      cases: { pascalCase: true },
    }],
  },
},
// Composables: camelCase (useXxx.ts)
{
  files: ["**/composables/**/*.ts"],
  rules: {
    "unicorn/filename-case": ["error", {
      cases: { camelCase: true },
    }],
  },
},
// Pages, layouts, middleware, plugins, server: kebab-case
{
  files: [
    "**/pages/**/*.vue",
    "**/layouts/**/*.vue",
    "**/middleware/**/*.ts",
    "**/plugins/**/*.ts",
    "**/server/**/*.ts",
  ],
  rules: {
    "unicorn/filename-case": ["error", {
      cases: { kebabCase: true },
    }],
  },
},
// Other files: allow both PascalCase and kebab-case
{
  files: ["**/*.vue", "**/*.ts", "**/*.mjs"],
  ignores: [
    "**/components/**",
    "**/composables/**",
    "**/pages/**",
    "**/layouts/**",
    "**/middleware/**",
    "**/plugins/**",
    "**/server/**",
  ],
  rules: {
    "unicorn/filename-case": ["error", {
      cases: {
        pascalCase: true,
        kebabCase: true,
      },
      ignore: [
        "^\\.",
        "\\.config\\.",
        "\\.json$",
        "README.md",
        "CLAUDE.md",
      ],
    }],
  },
}));
