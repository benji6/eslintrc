module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "rules": {
    "array-bracket-spacing": [2, "never"],
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": 2,
    "camelcase": [2, {"properties": "always"}],
    "comma-dangle": [2, "always-multiline"],
    "comma-spacing": [2, {"before": false, "after": true}],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "constructor-super": 2,
    "curly": [2, "multi-line"],
    "dot-location": [2, "property"],
    "dot-notation": 2,
    "eol-last": 2,
    "eqeqeq": [2, "allow-null"],
    "func-style": [2, "expression"],
    "generator-star-spacing": [2, {"before": true, "after": true}],
    "global-require": 2,
    "handle-callback-err": 2,
    "indent": [2, 2, {"SwitchCase": 1}],
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
    "linebreak-style": [2, "unix"],
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-caller": 2,
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "no-console": 2,
    "no-const-assign": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-div-regex": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-duplicate-imports": 2,
    "no-empty-character-class": 2,
    "no-empty": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": [0],
    "no-extra-semi": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implicit-coercion": 2,
    "no-implied-eval": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-mixed-requires": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": [2, {"max": 1}],
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-obj-calls": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-path-concat": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-restricted-modules": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef-init": 2,
    "no-undef": 2,
    "no-unexpected-multiline": 2,
    "no-unneeded-ternary": 2,
    "no-unreachable": 2,
    "no-unused-vars": [2, {
      "args": "after-used",
      "vars": "all"
    }],
    "no-use-before-define": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-var": 2,
    "no-void": 2,
    "no-with": 2,
    "object-curly-spacing": [2, "never"],
    "keyword-spacing": [2, {"before": true, "after": true}],
    "object-shorthand": 2,
    "one-var": [2, "never"],
    "operator-linebreak":  ["error", "after", {
      "overrides": {
        "?": "before",
        ":": "before"
      }
    }],
    "padded-blocks": [2, "never"],
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    "prefer-spread": 2,
    "quote-props": [2, "as-needed"],
    "quotes": [2, "single"],
    "require-yield": 2,
    "semi": [2, "never"],
    "semi-spacing": 2,
    "sort-keys": [2, "asc", {"caseSensitive": false}],
    "sort-vars": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": 2,
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": [2, "always"],
    "use-isnan": 2,
    "valid-typeof": 2,
    "vars-on-top": 2,
    "wrap-iife": 2,
    "yoda": 2
  }
}
