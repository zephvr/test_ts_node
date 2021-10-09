module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:no-unsanitized/DOM",
    "xo",
    "xo-typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    camelcase: ["error", { properties: "always" }],
    complexity: ["error", 6],
    curly: ["error", "multi-or-nest", "consistent"],
    "multiline-comment-style": ["error", "separate-lines"],
    "no-await-in-loop": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/require-post-message-target-origin": "off",
    "import/order": [
      "error",
      {
        groups: [
          "type",
          "builtin",
          "external",
          "internal",
          "unknown",
          "parent",
          "sibling",
        ],
        "newlines-between": "never",
        alphabetize: { order: "asc" },
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  // Ignore config files
  ignorePatterns: ["*.cjs"],
};
