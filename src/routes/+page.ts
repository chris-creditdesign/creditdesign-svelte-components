import type { PageLoad } from './$types.d.ts'
import { error } from '@sveltejs/kit'

export const load: PageLoad = async () => {
	try {
		const post = await import('../content/index.svx')

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `Could not find index.svx`)
	}
}