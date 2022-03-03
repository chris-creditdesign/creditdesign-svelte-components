<script context="module" lang="ts">
	export const prerender = true;
	export async function load({ fetch }) {
		const res = await fetch('/pages.json');
		const { pages } = await res.json();
		return {
			props: { pages }
		};
	}
</script>

<script lang="ts">
	import Sidebar from '$lib/Sidebar/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import Cluster from '$lib/Cluster/index.svelte';
	import Box from '$lib/Box/index.svelte';

	import '../app.css';
	import '../css/prism-a11y-dark.css';

	export let pages: string[];

	const pascal_case = (str: string): string => {
		let split_string = str.split('-');

		let formatted_string = split_string
			.map((s) => {
				let first_letter = s.charAt(0).toUpperCase();
				let remainder = s.slice(1);

				return `${first_letter}${remainder}`;
			})
			.reduce((previousValue, currentValue) => {
				return `${previousValue}${currentValue}`;
			}, '');

		return formatted_string;
	};
</script>

<style>
	:global(.layout-sidebar-wrapper) {
		min-height: 100vh;
	}

	:global(.sidebar) {
		background-color: aquamarine;
	}

	:global(.main-content) {
		background-color: bisque;
	}

	.list-item {
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: none;
		height: 50px;
		padding: var(--s0);
		background-color: pink;
	}
</style>

<svelte:head>
	<title>Creditdesign Svelet Components</title>
</svelte:head>

<Sidebar
	className="layout-sidebar-wrapper"
	sidebarSpace="var(--s1)"
	sidebarContentMinWidth="75%"
	sidebarWidth="20ch"
>
	<svelte:fragment slot="sidebar">
		<Box className="sidebar" boxSpace="var(--s1)">
			<Stack>
				<h2><a href="/">Home</a></h2>
				<nav>
					<Cluster list={true}>
						{#each pages as page}
							<li><a class="list-item" href={`/pages/${page}`}>{pascal_case(page)}</a></li>
						{/each}
					</Cluster>
				</nav>
			</Stack>
		</Box>
	</svelte:fragment>

	<svelte:fragment slot="main-content">
		<Box className="main-content" boxSpace="var(--s1)">
			<Stack>
				<slot />
			</Stack>
		</Box>
	</svelte:fragment>
</Sidebar>
