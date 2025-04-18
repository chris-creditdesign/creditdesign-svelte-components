<script lang="ts">
	import { page } from '$app/state';
	import '$lib/scss/index.scss';
	import '$lib/scss/brand/index.scss';
	import '../css/prism-a11y-dark.css';

	let { data, children } = $props();

	const navigationChildren = $derived.by(() => {
		const locations = page.route.id?.slice(1).split('/');

		const currentPage = locations?.at(-1) || "";

		let currentParent = "";

		if (locations && locations.length > 1) {
			currentParent = locations.at(-2) ||  "";
		}

		let children = data.navigationMap.get(currentPage);

		if (children && children.length) {
			return children;
		} else {
			return data.navigationMap.get(currentParent);
		}
	});
</script>

<svelte:head>
	<title>Creditdesign svelte components</title>
</svelte:head>

<div class="l-sidebar u-column">
	<div class="u-box">
		<nav>
			<ul class="l-stack">
				<li>
					<a href="/">Home</a>
				</li>
				{#if navigationChildren}
					{#each navigationChildren as entry}
						<li class="list-item list-item--parent">
							<a href={`${entry.path}`}>{entry.title}</a>

							<!-- {#if data.params.page?.split('/')[1] === entry.key}
							<ul>
								{#each entry.children as child}
									<li class="list-item list-item--child">
										<a href={`/components/${entry.key}/${child.key}`}>{child.title}</a>
									</li>
								{/each}
							</ul>
						{/if} -->
						</li>
					{/each}
				{/if}
			</ul>
		</nav>
	</div>

	<div class="l-stack u-box">
		{@render children?.()}
	</div>
</div>
