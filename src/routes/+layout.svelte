<script lang="ts">
	import { page } from '$app/state';
	import '$lib/scss/index.scss';
	import '$lib/scss/brand/index.scss';
	import '../css/prism-a11y-dark.css';

	let { data, children } = $props();

	let locations = $derived(page.route.id?.slice(1).split('/'));
</script>

<svelte:head>
	<title>Creditdesign svelte components</title>
</svelte:head>

<div class="l-sidebar u-column">
	<div class="u-box">
		<nav>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				{#each data.navigationMap?.get('') ?? [] as child}
					<li>
						<a href={`${child.path}`}>{child.title}</a>

						{#if data.navigationMap?.get(child.key) && locations?.includes(child.key)}
							<ul>
								{#each data.navigationMap?.get(child.key) ?? [] as grandchild}
									<li>
										<a href={`${grandchild.path}`}>{grandchild.title}</a>
										{#if data.navigationMap?.get(grandchild.key) && locations?.includes(grandchild.key)}
											<ul>
												{#each data.navigationMap?.get(grandchild.key) ?? [] as b}
													<li>
														<a href={`${b.path}`}>{b.title}</a>
													</li>
												{/each}
											</ul>
										{/if}
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
