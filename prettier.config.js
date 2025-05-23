/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	plugins: [
		'prettier-plugin-svelte',
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss' // Must be last
	],
	importOrder: [
		'<THIRD_PARTY_MODULES>',
		'^@internal/(.*)$',
		'^[./].*(?<!\\.(c|le|sc)ss)$',
		'^[.]/[-a-zA-Z0-9_]+[.](module)[.](css|scss|less)$'
	],
	importOrderSeparation: false,
	importOrderSortSpecifiers: true,
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte'
			}
		}
	]
};

export default config;
