export async function load({ params }) {
	const keys = params.page.split("/").filter(d => d.length > 0);
	try {
		let page;

		if (keys.length === 1) {
			page = await import(`../../content/${keys[0]}/index.svx`);
		} else {
			page = await import(`../../content/${keys[0]}/${keys[1]}.svx`);
		}

		return {
			content: page.default,
			metadata: page.metadata
		}
	} catch (e) {
		console.log("This is an error");
		return {
			status: 404,
			error: new Error(`Could not find ${params.page}`)
		}
	}
}
