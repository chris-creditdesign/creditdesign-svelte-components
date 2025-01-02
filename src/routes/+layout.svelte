<script lang="ts">
	import '$lib/scss/index.scss';
	import '$lib/scss/brand/index.scss';
	import '../css/prism-a11y-dark.css';

	let { data, children } = $props();
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
				{#each data.navigationEntries as entry}
					<li class="list-item list-item--parent">
						<a href={`/components/${entry.key}`}>{entry.title}</a>

						{#if data.params.page?.split('/')[1] === entry.key}
							<ul>
								{#each entry.children as child}
									<li class="list-item list-item--child">
										<a href={`/components/${entry.key}/${child.key}`}>{child.title}</a>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<div class="l-stack u-box">
		{@render children?.()}
	</div>
</div>
