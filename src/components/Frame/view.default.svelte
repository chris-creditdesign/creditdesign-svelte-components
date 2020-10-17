<script>
  import Frame from "./index.svelte";

  export let frameRatioHeight;
  export let frameRatioWidth;
</script>

<Frame {frameRatioHeight} {frameRatioWidth}>
  <img src="img/image.jpg" alt="test image" />
</Frame>
