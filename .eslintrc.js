module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "parser": "babel-eslint",
    "rules": {
        "strict": 0,
        // enable additional rules
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "never"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",

        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    },
    "env": {
        "browser": true,
        "node": true,
        "shelljs": true,
        "jest": true,
        "es6": true,
        "commonjs": true,
        "mongo": true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};