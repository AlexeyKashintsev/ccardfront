module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // enable additional rules
    "indent": ["error", 2],
    "quotes": ["error", "single"],

    // override default options for rules from base configurations
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
  }],
    "no-cond-assign": ["error", "always"],
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
