<script>
  import Frame from "./index.svelte";

  export let frameRatioHeight;
  export let frameRatioWidth;
</script>

<Frame {frameRatioHeight} {frameRatioWidth}>
  <video poster="video/video.jpg" playsinline="" autoplay="true" loop="true">
    <source src="video/video.webm" type="video/webm" />
    <source src="video/video.mp4" type="video/mp4" />
  </video>
</Frame>
