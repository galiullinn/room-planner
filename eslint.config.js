import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "@stylistic": stylistic,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/jsx-quotes": ["error", "prefer-double"],

      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "no-else-return": "error",
      "no-alert": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": ["error", { destructuring: "all" }],

      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          "groups": [
            ["^react", "^next"],
            ["^@?\\w"],
            ["^@($|/)"],
            ["^(@components|@lib|@utils)(/.*|$)"],
            ["^src/"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["\\.css$", "\\.scss$", "\\.(png|jpe?g|gif|svg|webp)$"]
          ]
        }
      ],
    },
  },
]);
