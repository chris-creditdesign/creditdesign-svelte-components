import type { Load } from '@sveltejs/kit';
import { findNavigationEntries } from "$lib/utils/find-navigation-entries.ts";

type MetaData = {
	key: string;
	order: number;
	parent?: string;
	title: string;
};

export const load: Load = async () => {
	const paths: Record<string, { metadata: MetaData }> = import.meta.glob('../content/**/*.svx', { eager: true });

	const pages = Object.keys(paths)
		.filter(path => path !== "../content/index.svx")
		.map((path) => (
			{ path, ...paths[path].metadata }
		));

	const navigationEntries = findNavigationEntries(pages);

	return { navigationEntries }
}
