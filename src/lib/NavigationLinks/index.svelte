<script lang="ts">
	import type { NavigationNode } from '$lib/types.d.ts';
    import NavigationLinks from './index.svelte';
	interface Props {
		children?: import('svelte').Snippet;
		navigationMap: Map<string, NavigationNode[]>;
		locations?: string[];
        key?: string;
	}

	let { children, navigationMap, locations = [], key = "" }: Props = $props();
</script>

<ul>
	{#if children}
		<li>
			<a href="/">Home</a>
		</li>
	{/if}
	{#each navigationMap?.get(key) ?? [] as child}
		<li>
			<a href={`${child.path}`}>{child.title}</a>

			{#if navigationMap?.get(child.key) && locations.includes(child.key)}
                <NavigationLinks {navigationMap} {locations} key={child.key} />
			{/if}
		</li>
	{/each}
</ul>
