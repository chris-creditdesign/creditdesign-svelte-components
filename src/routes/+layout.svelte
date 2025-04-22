<script lang="ts">
	import { page } from '$app/state';
	import '$lib/scss/index.scss';
	import '$lib/scss/brand/index.scss';
	import '../css/prism-a11y-dark.css';
	import NavigationLinks from '$lib/NavigationLinks/index.svelte';

	let { data, children } = $props();

	let locations = $derived(page.route.id?.slice(1).split('/'));
</script>

<svelte:head>
	<title>Creditdesign svelte components</title>
</svelte:head>

<div class="l-sidebar u-column">
	<nav>
		<NavigationLinks navigationMap={data.navigationMap} locations={locations}>
			<a href="/">Home</a>
		</NavigationLinks>
	</nav>

	<div class="l-stack u-box">
		{@render children?.()}
	</div>
</div>
