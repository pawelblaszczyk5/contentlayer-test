module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	ignorePatterns: [
		".eslintrc.js",
		"prettier.config.js",
		"node_module",
		"tailwind.config.js",
		"next.config.js",
		"postcss.config.js",
		"next-env.d.ts",
	],
	plugins: [
		"@typescript-eslint",
		"canonical",
		"eslint-comments",
		"import",
		"promise",
		"regexp",
		"unicorn",
		"prefer-arrow-functions",
		"fp",
		"react",
		"react-hooks",
		"jsx-a11y",
		"tailwindcss",
	],
	extends: [
		"eslint:recommended",
		"next/core-web-vitals",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:@typescript-eslint/strict",
		"plugin:eslint-comments/recommended",
		"plugin:regexp/recommended",
		"plugin:promise/recommended",
		"plugin:unicorn/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/strict",
		"prettier",
	],
	rules: {
		// builtins
		"no-unused-vars": "off",
		"no-undef": "off",
		"no-mixed-spaces-and-tabs": "off",
		"arrow-body-style": ["error", "as-needed"],
		"no-promise-executor-return": "error",
		"no-template-curly-in-string": "error",
		"no-self-compare": "error",
		"require-atomic-updates": "error",
		curly: ["error", "multi", "consistent"],
		"default-case-last": "error",
		eqeqeq: "error",
		"logical-assignment-operators": ["error", "always", { enforceForIfStatements: true }],
		"no-alert": "warn",
		"no-console": "warn",
		"no-div-regex": "error",
		"no-else-return": ["error", { allowElseIf: false }],
		"no-eval": "error",
		"no-extend-native": "error",
		"no-floating-decimal": "error",
		"no-implicit-coercion": "error",
		"no-param-reassign": "error",
		"no-plusplus": "error",
		"no-regex-spaces": "error",
		"no-restricted-syntax": [
			"error",
			{
				selector: "TSEnumDeclaration",
				message: "Don't declare enums",
			},
		],
		"no-return-assign": "error",
		"no-sequences": "error",
		"no-undef-init": "error",
		"no-underscore-dangle": "error",
		"no-unneeded-ternary": "error",
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-var": "error",
		"no-warning-comments": [
			"warn",
			{
				location: "start",
				terms: ["TODO", "FIXME"],
			},
		],
		"object-shorthand": ["error", "always"],
		"one-var": ["error", "never"],
		"one-var-declaration-per-line": "error",
		"operator-assignment": ["error", "always"],
		"prefer-const": "error",
		"prefer-exponentiation-operator": "error",
		"prefer-object-has-own": "error",
		"prefer-object-spread": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-regex-literals": [
			"error",
			{
				disallowRedundantWrapping: true,
			},
		],
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"quote-props": [
			"error",
			"as-needed",
			{
				numbers: true,
			},
		],
		radix: "error",
		"require-unicode-regexp": "error",
		"require-yield": "error",
		"spaced-comment": ["error", "always"],
		"symbol-description": "error",
		yoda: ["error", "never"],
		// builtins stylistic
		"linebreak-style": ["error", "unix"],
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: ["const", "let", "var"], next: "*" },
			{
				blankLine: "any",
				prev: ["const", "let", "var"],
				next: ["const", "let", "var"],
			},
		],
		// arrow-functions
		"prefer-arrow-functions/prefer-arrow-functions": [
			"error",
			{
				classPropertiesAllowed: true,
				disallowPrototype: true,
				returnStyle: "unchanged",
				singleReturnOnly: false,
			},
		],
		// Typescript
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/require-await": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-misused-promises": "off",
		"@typescript-eslint/array-type": ["error", { default: "generic", readonly: "generic" }],
		"@typescript-eslint/consistent-generic-constructors": ["error", "constructor"],
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		"@typescript-eslint/consistent-type-exports": ["error", { fixMixedExportsWithInlineTypeSpecifier: true }],
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				prefer: "type-imports",
				disallowTypeAnnotations: false,
				fixStyle: "inline-type-imports",
			},
		],
		"@typescript-eslint/method-signature-style": ["error", "property"],
		"@typescript-eslint/no-redundant-type-constituents": "error",
		"@typescript-eslint/no-useless-empty-export": "error",
		"@typescript-eslint/promise-function-async": "error",
		"@typescript-eslint/default-param-last": "error",
		"@typescript-eslint/no-restricted-imports": [
			"error",
			{
				patterns: [
					{
						group: [".*"],
						message: "Don't use relative imports",
					},
				],
			},
		],
		"@typescript-eslint/no-unused-expressions": "error",
		"@typescript-eslint/no-use-before-define": [
			"error",
			{
				functions: true,
				classes: true,
				variables: true,
				allowNamedExports: false,
				enums: true,
				typedefs: true,
				ignoreTypeReferences: true,
			},
		],
		// eslint-comments
		"eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
		"eslint-comments/no-unused-disable": "error",
		"eslint-comments/require-description": "error",
		// fp
		"fp/no-arguments": "error",
		"fp/no-class": "error",
		"fp/no-delete": "error",
		"fp/no-loops": "error",
		"fp/no-mutating-assign": "error",
		"fp/no-this": "error",
		"fp/no-valueof-field": "error",
		// import
		"import/export": "error",
		"import/newline-after-import": "error",
		"import/no-mutable-exports": "error",
		"import/no-named-as-default": "error",
		"import/no-named-as-default-member": "error",
		"import/no-cycle": [
			"error",
			{
				allowUnsafeDynamicCyclicDependency: true,
			},
		],
		"import/no-deprecated": "warn",
		"import/no-duplicates": "error",
		"import/no-extraneous-dependencies": "error",
		"import/order": [
			"error",
			{
				alphabetize: {
					caseInsensitive: false,
					order: "asc",
				},
				groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
				"newlines-between": "never",
			},
		],
		"import/first": "error",
		"import/consistent-type-specifier-style": ["error", "prefer-inline"],
		// cannonical
		"canonical/filename-no-index": "error",
		// unicorn
		"unicorn/empty-brace-spaces": "off",
		"unicorn/filename-case": "off",
		"unicorn/no-array-for-each": "off",
		"unicorn/no-array-reduce": "off",
		"unicorn/no-await-expression-member": "off",
		"unicorn/no-null": "off",
		"unicorn/prefer-native-coercion-functions": "off",
		"unicorn/prevent-abbreviations": "off",
		"unicorn/no-unsafe-regex": "error",
		"unicorn/no-unused-properties": "error",
		"unicorn/numeric-separators-style": [
			"error",
			{
				onlyIfContainsSeparator: false,
				hexadecimal: {
					minimumDigits: 0,
					groupLength: 2,
				},
				binary: {
					minimumDigits: 0,
					groupLength: 4,
				},
				octal: {
					minimumDigits: 0,
					groupLength: 4,
				},
				number: {
					minimumDigits: 4,
					groupLength: 3,
				},
			},
		],
		"unicorn/require-post-message-target-origin": "error",
		// jsx-a11y
		"jsx-a11y/no-autofocus": "off",
		// tailwindcss
		"tailwindcss/enforces-negative-arbitrary-values": "error",
		"tailwindcss/enforces-shorthand": "error",
		"tailwindcss/migration-from-tailwind-2": "error",
		"tailwindcss/no-contradicting-classname": "error",
		"tailwindcss/no-custom-classname": "error",
		// react
		"react/self-closing-comp": "error",
	},
	settings: {
		"import/extensions": [".ts", ".tsx"],
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				extensions: [".ts", ".tsx"],
			},
		},
		react: {
			version: "detect",
		},
		tailwindcss: {
			callees: ["cn", "cva"],
			tags: ["tw"],
		},
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx", "*.js", "*.cjs"],
			parserOptions: {
				project: true,
				tsconfigRootDir: __dirname,
			},
		},
	],
};
