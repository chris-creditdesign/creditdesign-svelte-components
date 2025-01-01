import type { NavigationNode, ProcessedNavigationNode } from '../types.js';

export function findNavigationEntries(nodes: NavigationNode[], key = ""): ProcessedNavigationNode[] {
	const pages: ProcessedNavigationNode[] = [];

	for (let node of nodes) {
		if (!key && !node.parent || node.parent === key) {
			pages.push({ ...node, children: [] });
		}
	}

	const pagesSorted = pages.sort(function (a, b) {
		return (a.order || 0) - (b.order || 0);
	})

	const pagesWithChildern = pagesSorted.map(function (entry) {
		if (entry.key) {
			entry.children = findNavigationEntries(nodes, entry.key);
		}
		return entry;
	});

	return pagesWithChildern;
}
