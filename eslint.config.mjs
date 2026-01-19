import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...nextPlugin.configs["core-web-vitals"],
  {
    files: ["**/*.{ts,tsx}"]
  }
);
