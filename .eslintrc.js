module.exports = {
  extends: [
    'ryansobol/browser',
    'ryansobol/jquery',
    'ryansobol/es6'
  ],
  rules: {
    "semi": ["error", "never"],
    "no-unreachable": "error",
    "no-unexpected-multiline": "error",
    "strict": "off",
    "no-console": "off",
    "no-implicit-globals": "off",
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "no-unused-vars": "off",
    "no-else-return": "off",
    "no-multiple-empty-lines": "error",
    "lines-around-comment": "off",
    "func-style": "off",
    "dot-notation": "off",
    "arrow-parens": "off",
    "object-shorthand": "off",
    "prefer-arrow-callback": "off",
    "newline-after-var": "off",
    "camelcase": "off",
    "no-use-before-define": "off",
    "prefer-template": "off",
    "brace-style": ["error", "1tbs"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "prefer-const": "off",
    "max-statements": "off",
    "new-cap": "off",
    "max-len": "off",
    "id-length": "off",
    "consistent-this": "off"
  },
  "globals": {
    "chai": true,
    "angular": true
  },
  "env": {
    "node": true,
    "mocha": true,
  }
};
