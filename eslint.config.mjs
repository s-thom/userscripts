import { defineConfig } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import userscripts from "eslint-plugin-userscripts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    rules: {
      "prettier/prettier": "warn",
    },
  },
  {
    files: ["*.user.js"],
    plugins: {
      userscripts: {
        rules: userscripts.rules,
      },
    },
    rules: {
      ...userscripts.configs.recommended.rules,
    },
    settings: {
      userscriptVersions: {
        violentmonkey: "*",
      },
    },
  },
  eslintPluginPrettier,
  {
    rules: {
      "prettier/prettier": "warn",
    },
  },
]);
