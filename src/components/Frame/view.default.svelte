<script>
  import Frame from "./index.svelte";

  export let className = "";
  export let frameRatioHeight;
  export let frameRatioWidth;
</script>

<Frame {className} {frameRatioHeight} {frameRatioWidth}>
  <img src="img/image.jpg" alt="test image" />
</Frame>
