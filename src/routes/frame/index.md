<script lang="ts">
	import Frame from '$lib/Frame/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropNumber from '$lib/PropNumber/index.svelte';
</script>

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

<SqueezeContainer>
	<Frame>
		<img src="/img/image.jpg" alt="Test." />
	</Frame>
</SqueezeContainer>
