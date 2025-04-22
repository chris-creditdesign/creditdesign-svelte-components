import type { LayoutLoad } from './$types.d.ts'
import { createNavigationMap } from "$lib/utils/create-navigation-map.ts";

export const load: LayoutLoad = async ({ params, url }) => {
	/* Example glob:
		{
			'./css/layout/stack/+page.svx':
				{ 
					metadata: 
						{
							order: 0,
							title: 'stack'
						}
				}
		}
	*/
	const globs: Record<string, { metadata: { order: number, title: string } }> = import.meta.glob('./**/*.svx', { eager: true });
	
	const pages = Object.keys(globs)
		.filter(path => path !== "./+page.svx")
		.map((path) => {
			// Example path: './css/layout/stack/+page.svx' 
			// remove the leading ./ and the trailing +page.svx
			// to return '/css/layout/stack/'
			const formattedPath = path.replace("+page.svx", "").slice(1);

			// Each location in the path is split into an array
			// Example: '/css/layout/stack/' => ['css', 'layout', 'stack']
			const locations = formattedPath.slice(1,-1).split("/");

			// The last location is the key, and the second to last is the parent
			// if present, otherwise it is an empty string.
			const key = locations.at(-1) || "";
			let parent = "";

			if (locations.length > 1) {
				parent = locations.at(-2) || "";
			}

			return { path: formattedPath, key, parent, ...globs[path].metadata }
		});

	/* Create a Map of children for each parent:
		Example: navigationMap.get("css") =>
		[
			{
				"path": "/css/layout/",
				"key": "layout",
				"parent": "css",
				"order": 0,
				"title": "This is the layout page"
			},
			{
				"path": "/css/utilities/",
				"key": "utilities",
				"parent": "css",
				"order": 1,
				"title": "This is the utilities page"
			}
		]
	*/
	const navigationMap = createNavigationMap(pages);

	return { navigationMap, url: url.pathname, params }
}
