import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [...compat.extends("next/core-web-vitals"), {
  rules: {
    "no-unused-vars": "error",
    "import/order": ["error", {
      groups: [
        "builtin",
        "external",
        "internal",
        ["parent", "sibling", "index"],
        "object",
      ],
      pathGroups: [{
        pattern: "@/components/**",
        group: "external",
        position: "after",
      }, {
        pattern: "@/components",
        group: "external",
        position: "after",
      }, {
        pattern: "./components",
        group: "external",
        position: "after",
      }],
      "newlines-between": "always",
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
    }],
  },
}];

export default config;
