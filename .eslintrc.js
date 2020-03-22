module.exports = {
  root: true,
  plugins: [
    "prettier",
    "@typescript-eslint"
  ],
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-floating-promises": "error"
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: false,
    },
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  overrides: [],
};
