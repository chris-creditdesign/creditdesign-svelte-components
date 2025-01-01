<script lang="ts">
	import type { ProcessedNavigationNode } from '$lib/types.js';

	import Sidebar from '$lib/Sidebar/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import Box from '$lib/Box/index.svelte';
	import ToggleSection from '$lib/ToggleSection/index.svelte';

	import '$lib/index.css';
	import '../app.css';
	import '../css/prism-a11y-dark.css';

	interface Props {
		data: { navigationEntries: ProcessedNavigationNode[] };
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
</script>

<svelte:head><title>Creditdesign svelte components</title></svelte:head>

<Sidebar
	className="layout-sidebar-wrapper"
	sidebarSpace="var(--s1)"
	sidebarContentMinWidth="75%"
	sidebarWidth="20ch"
>
	{#snippet sidebar()}
		<Box className="layout-sidebar" boxSpace="var(--s1)">
			<Stack>
				<nav>
					<Stack list={true} stackSpace="var(--s1)">
						<li>
							<a href="/">Home</a>
						</li>
						{#each data.navigationEntries as entry}
							<li class="list-item list-item--parent">
								<ToggleSection buttonMessage={`View more ${entry.title} examples`}>
									{#snippet title()}
										<h3><a href={`/components/${entry.key}`}>{entry.title}</a></h3>
									{/snippet}
									{#snippet content()}
										<ul>
											{#each entry.children as child}
												<li class="list-item list-item--child">
													<a href={`/components/${entry.key}/${child.key}`}>{child.title}</a>
												</li>
											{/each}
										</ul>
									{/snippet}
								</ToggleSection>
							</li>
						{/each}
					</Stack>
				</nav>
			</Stack>
		</Box>
	{/snippet}

	{#snippet mainContent()}
		<Box className="main-content" boxSpace="var(--s1)">
			<Stack>
				{@render children?.()}
			</Stack>
		</Box>
	{/snippet}
</Sidebar>

<style>
	a {
		text-decoration: none;
	}

	h3 {
		margin-block: 0;
	}
</style>
