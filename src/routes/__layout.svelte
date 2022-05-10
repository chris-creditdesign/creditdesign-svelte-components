<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const prerender = true;

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/pages.json');
		const { pages } = await res.json();
		return {
			props: { pages }
		};
	};
</script>

<script lang="ts">
	import type { Page } from '../types';

	import Sidebar from '$lib/Sidebar/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import Box from '$lib/Box/index.svelte';
	import ToggleSection from '$lib/ToggleSection/index.svelte';
	import { pascalCase } from '$lib/utils';

	import '$lib/index.css';
	import '../app.css';
	import '../css/prism-a11y-dark.css';

	export let pages: Page[];
</script>

<style>
	a {
		text-decoration: none;
	}

	h3 {
		margin-block: 0;
	}
</style>

<svelte:head><title>Creditdesign svelte components</title></svelte:head>

<Sidebar
	className="layout-sidebar-wrapper"
	sidebarSpace="var(--s1)"
	sidebarContentMinWidth="75%"
	sidebarWidth="20ch"
>
	<svelte:fragment slot="sidebar">
		<Box className="layout-sidebar" boxSpace="var(--s1)">
			<Stack>
				<nav>
					<Stack list={true} stackSpace="var(--s1)">
						<li>
							<a href="/">Home</a>
						</li>
						{#each pages as page}
							<li class="list-item list-item--parent">
								<ToggleSection buttonMessage={`View more ${pascalCase(page.name)} examples`}>
									<svelte:fragment slot="title">
										<h3><a href={`/${page.name}`}>{pascalCase(page.name)}</a></h3>
									</svelte:fragment>
									<svelte:fragment slot="content">
										<Stack list={true} stackSpace="0">
											{#each page.children as child}
												<li class="list-item list-item--child">
													<a href={`/${page.name}/${child}`}>{child}</a>
												</li>
											{/each}
										</Stack>
									</svelte:fragment>
								</ToggleSection>
							</li>
						{/each}
					</Stack>
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
