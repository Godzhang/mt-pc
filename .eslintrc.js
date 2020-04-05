module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  // add your custom rules here
  rules: {
    "nuxt/no-cjs-in-config": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-indent": "off",
    semi: "off",
    "comma-dangle": "off",
    quotes: "off",
    "vue/html-self-closing": "off",
    "space-before-function-paren": "off",
    "vue/order-in-components": "off",
    "eol-last": "off",
  },
};
