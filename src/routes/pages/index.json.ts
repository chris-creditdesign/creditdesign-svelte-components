export const get = async () => {
	// https://vitejs.dev/guide/features.html#glob-import
	const pages_glob = import.meta.glob('./*.md');

	const pages: string[] = Object.keys(pages_glob).map((path) =>
		path.split('/').pop().split('.').shift()
	);

	return {
		status: 200,
		body: { pages }
	};
};

/*
export const get = async () => {
	// https://vitejs.dev/guide/features.html#glob-import
	let markdown_pages_glob = import.meta.glob('./*.md');

	let markdwon_pages_entries = Object.entries(markdown_pages_glob);

	let projects = await Promise.all(
		markdwon_pages_entries.map(async ([path, page]) => {
			const { metadata } = await page();

			// convert from "./milestones-in-diabetes.md"
			// to "milestones-in-diabetes"
			const slug = path.split('/').pop().split('.').shift();

			return { ...metadata, slug };
		})
	);

	projects.sort((a, b) => {
		let dateA = parseInt(a.subHead);
		let dateB = parseInt(b.subHead);

		return dateB - dateA;
	});

	return {
		status: 200,
		body: { projects }
	};
};
*/
