interface NavigationNode {
	order: number;
	title: string;
	path: string;
	key: string;
	parent: string;
}

/**
 * Takes an array of NavigationNode objects and organizes them into a  map structure.
 * Each key in the map corresponds to a parent node, and the value is an array of child nodes.
 */
export function createNavigationMap(nodes: NavigationNode[]): Map<string, NavigationNode[]> {
	const nodeMap = new Map<string, NavigationNode[]>();

	nodes.forEach((node) => {
		if (!nodeMap.has(node.parent)) {
			nodeMap.set(node.parent, []);
		}
		nodeMap.get(node.parent)?.push(node);
	});

	return nodeMap;
}
