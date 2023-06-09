module.exports = {
	printWidth: 120,
	useTabs: true,
	trailingComma: "all",
	arrowParens: "avoid",
	plugins: [require("prettier-plugin-tailwindcss")],
	tailwindFunctions: ["cn", "cva", "tw"],
};
