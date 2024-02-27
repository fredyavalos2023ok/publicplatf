module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true,
    "node": true
  },
  // "rules": {
  //   "no-unused-vars": ["error", { "varsIgnorePattern": "^on$|^config$" }]
  // },
  // "rules": {
  //   "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false}]
  // },

  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react", "jest"
  ],
  "rules": {
    "no-unused-vars": ["warn", { "varsIgnorePattern": "^on$|^config$" }],
    // "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false}],
    "indent": [
      "error",
        2
      ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "warn",
      "single"
    ],
    "semi": [
      "warn",
      "never"
    ],
    "eqeqeq": "warn",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error", "always"
    ],
    "arrow-spacing": [
      "error", { "before": true, "after": true }
    ],
    "no-console": "warn",
    "react/prop-types": 0
  }
}
