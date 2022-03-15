import type { Page } from './types';

export const get = async () => {
	// https://vitejs.dev/guide/features.html#glob-import
	const pages_glob = import.meta.glob('./**/*.md');

	const file_path_reducer = (previousValue: [] | Page[], currentValue: string): Page[] => {
		const existing_folders = [...previousValue];
		const split_path = currentValue.split('/');

		const folder = split_path[1];
		const filename = split_path[2];

		// 1. If this is the home page do nothing
		if (folder === 'index.md') {
			return existing_folders;
		}

		// 2. If the folder dosen't yet exist in existing_folders
		// we should add it.
		const index_of_existing_folder = existing_folders.findIndex((d) => d.name === folder);

		if (index_of_existing_folder < 0) {
			const newFolder: Page = { name: folder, children: [] };

			existing_folders.push(newFolder);
		}

		// 3. If this is the default file, index.md we can return the list
		// of existing folders

		if (filename === 'index.md') {
			return existing_folders;
		}

		// 4. If the filename is not index.md, we should add this file to
		// the list of children for its corresponding folder
		if (filename !== 'index.md') {
			const new_index_of_existing_folder = existing_folders.findIndex((d) => d.name === folder);
			existing_folders[new_index_of_existing_folder].children.push(filename.replace('.md', ''));
		}

		return existing_folders;
	};

	const pages: Page[] = Object.keys(pages_glob)
		.map((path) => path)
		.filter((d) => d !== './index.md')
		.reduce(file_path_reducer, []);

	return {
		status: 200,
		body: { pages }
	};
};
