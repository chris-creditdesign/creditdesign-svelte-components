<script lang="ts">
	import Frame from '$lib/Frame/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropNumber from '$lib/PropNumber/index.svelte';
</script>

<style>
	.place-holder {
		font-weight: bold;
		text-transform: uppercase;
		background-color: #ececec;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>

# Frame

Element with a defined width / height ratio into which any content can be placed.

Content will be stretched to fill the Frame area.

Content which overflows the Frame will be clipped off.

## Usage

```svelte
<script>
	import { Frame } from 'creditdesign-svelte-components';
</script>

<Frame frameRatioHeight={0} frameRatioWidth={0} className="test">
	<img src="/img/image.jpg" alt="Test." />
</Frame>
```

## Props

| Property name      | Default value |
| ------------------ | ------------- |
| `frameRatioHeight` | `0`           |
| `frameRatioWidth`  | `0`           |
| `className`        | `""`          |

## Default

<SqueezeContainer headline="Default">
	<Frame>
		<img src="/img/image.jpg" alt="Test." />
	</Frame>
</SqueezeContainer>
