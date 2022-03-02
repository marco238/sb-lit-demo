
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	previewTabs: {
		canvas: {},
		'storybook/panel': {},
		['iframe']: {
			title: 'External Content',
		},
	},
};
export const globalTypes = {
	theme: {
		name: 'Integrations',
		description: 'Diferents',
		defaultValue: 'Web Component',
		toolbar: {
			//icon: 'book',
			// Array of plain string values or MenuItem shape (see below)
			items: ['Web Component', 'Angular', 'React'],
			// Property that specifies if the name of the item will be displayed
			showName: true,
		},
	},
};

console.log(parameters);
console.log(globalTypes);