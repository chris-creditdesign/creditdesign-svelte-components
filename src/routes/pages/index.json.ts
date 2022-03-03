export const get = () => {
	// https://vitejs.dev/guide/features.html#glob-import
	const pages_glob = import.meta.glob('./*.svelte');

	const pages: string[] = Object.keys(pages_glob).map((path) =>
		path.split('/').pop().split('.').shift()
	);

	return {
		status: 200,
		body: { pages }
	};
};
