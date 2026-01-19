import globals from "globals"
import js from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import reactRefresh from "eslint-plugin-react-refresh"
import parser from "@typescript-eslint/parser"
import eslintConfigPrettier from "eslint-config-prettier"

export default [
	// Ignores globaux
	{
		ignores: [
			"**/build/",
			"**/node_modules/",
			"**/dist/",
			"**/.react-router/",
			"**/coverage-ts/",
		],
	},

	// Config principale
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],

		plugins: {
			react: pluginReact,
			"react-refresh": reactRefresh,
		},

		settings: {
			react: {
				version: "detect",
			},
			"import/resolver": {
				node: {
					extensions: [".js", ".jsx", ".ts", ".tsx"],
				},
			},
		},

		languageOptions: {
			...pluginReact.configs.flat.recommended.languageOptions,
			parser,
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				jsxPragma: null,
			},
		},

		rules: {
			// React rules
			"react/jsx-uses-vars": "error",
			"react/no-array-index-key": "warn",
			"react/react-in-jsx-scope": "off",
			"react/jsx-uses-react": "off",
			"react/function-component-definition": [
				"warn",
				{
					namedComponents: "arrow-function",
				},
			],

			// React Refresh
			"react-refresh/only-export-components": "warn",

			// Import rules
			"no-restricted-imports": [
				"error",
				{
					patterns: [
						{
							group: ["../*"],
							message: "Please use the @/ alias instead of relative paths.",
						},
					],
				},
			],

			// Code style
			"no-nested-ternary": "off",
			"max-len": [
				"error",
				{
					code: 110,
					ignoreUrls: true,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
					ignoreRegExpLiterals: true,
				},
			],
			quotes: ["error", "double", { avoidEscape: true }],
			indent: ["error", "tab", { SwitchCase: 1 }],
			semi: ["error", "never"],
			"linebreak-style": ["error", "unix"],
		},
	},

	// Extends
	js.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	pluginReact.configs.flat["jsx-runtime"],

	// Prettier doit être en dernier
	eslintConfigPrettier,
]
