import { expect, test } from 'vitest'
import { findNavigationEntries } from "./find-navigation-entries.ts";

const parent1 = {
	key: "box",
	order: 0,
	path: "../content/box/index.svx",
	title: "Box",
}

const parent2 = {
	key: "stack",
	order: 0,
	path: "../content/stack/index.svx",
	title: "Stack",
}

const child1 = {
	key: "default",
	order: 0,
	parent: "box",
	path: "../content/box/default.svx",
	title: "Default",
}

const child2 = {
	key: "css-class",
	order: 1,
	parent: "box",
	path: "../content/box/css-class.svx",
	title: "CSS Class",
}

const grandChild1 = {
	key: "sub-class",
	order: 0,
	parent: "default",
	path: "../content/box/sub-class.svx",
	title: "Sub Class",
}

test('Adds children to node', () => {
	const output = findNavigationEntries([parent1, child1, child2]);

	const expectedOutput = [
		{
			key: "box",
			order: 0,
			path: "../content/box/index.svx",
			title: "Box",
			children: [
				{
					key: "default",
					order: 0,
					parent: "box",
					path: "../content/box/default.svx",
					title: "Default",
					children: []
				},
				{
					key: "css-class",
					order: 1,
					parent: "box",
					path: "../content/box/css-class.svx",
					title: "CSS Class",
					children: []
				}
			]
		}
	];

	expect(output).toStrictEqual(expectedOutput)
});

test('Adds grandchild to child', () => {
	const output = findNavigationEntries([parent1, child1, child2, grandChild1]);

	const expectedOutput = [
		{
			key: "box",
			order: 0,
			path: "../content/box/index.svx",
			title: "Box",
			children: [
				{
					key: "default",
					order: 0,
					parent: "box",
					path: "../content/box/default.svx",
					title: "Default",
					children: [{
						key: "sub-class",
						order: 0,
						parent: "default",
						path: "../content/box/sub-class.svx",
						title: "Sub Class",
						children: []
					}]
				},
				{
					key: "css-class",
					order: 1,
					parent: "box",
					path: "../content/box/css-class.svx",
					title: "CSS Class",
					children: []
				}
			]
		}
	];

	expect(output).toStrictEqual(expectedOutput)
})

test('Adds two parents', () => {
	const output = findNavigationEntries([parent1, parent2, child1, child2]);

	const expectedOutput = [
		{
			key: "box",
			order: 0,
			path: "../content/box/index.svx",
			title: "Box",
			children: [
				{
					key: "default",
					order: 0,
					parent: "box",
					path: "../content/box/default.svx",
					title: "Default",
					children: []
				},
				{
					key: "css-class",
					order: 1,
					parent: "box",
					path: "../content/box/css-class.svx",
					title: "CSS Class",
					children: []
				}
			]
		},
		{
			key: "stack",
			order: 0,
			path: "../content/stack/index.svx",
			title: "Stack",
			children: []
		}
	];

	expect(output).toStrictEqual(expectedOutput)
});