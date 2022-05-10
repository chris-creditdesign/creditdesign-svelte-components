<script lang="ts">
	import type { Space, Measure } from '$lib/types';
	import FullBleed from '$lib/FullBleed/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';
	import { space_options, measure_options } from '../../preview-content/options';

	let fullBleedMeasure: Measure = 'var(--measure)';
	let fullBleedSideSpace: Space = 'var(--s-1)';
	let fullBleedStackSpace: Space = 'var(--s-1)';
</script>

<style>
	img {
		max-width: 100%;
	}
</style>

# FullBleed

## Props

<PropSelect options={measure_options} name={'fullBleedMeasure'} bind:value={fullBleedMeasure} />
<PropSelect options={space_options} name={'fullBleedSideSpace'} bind:value={fullBleedSideSpace} />
<PropSelect
options={space_options}
name={'fullBleedStackSpace'}
bind:value={fullBleedStackSpace}
/>

## Example

<SqueezeContainer>
	<FullBleed {fullBleedMeasure} {fullBleedSideSpace} {fullBleedStackSpace}>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae explicabo quam
			reprehenderit. Atque autem, aspernatur facilis dolorum, nisi, eum ipsa illum mollitia sed at
			laudantium quas voluptatem incidunt qui?
		</p>
		<img class="full-bleed--4" src="/img/image.jpg" alt="Test." />
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae explicabo quam
			reprehenderit. Atque autem, aspernatur facilis dolorum, nisi, eum ipsa illum mollitia sed at
			laudantium quas voluptatem incidunt qui?
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae explicabo quam
			reprehenderit. Atque autem, aspernatur facilis dolorum, nisi, eum ipsa illum mollitia sed at
			laudantium quas voluptatem incidunt qui?
		</p>
	</FullBleed>
</SqueezeContainer>
