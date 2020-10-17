<script>
  import Frame from "./index.svelte";

  export let frameRatioHeight;
  export let frameRatioWidth;
</script>

<style>
  .place-holder {
    font-weight: bold;
    text-transform: uppercase;
    background-color: #ececec;
  }
</style>

<Frame {frameRatioHeight} {frameRatioWidth}>
  <div class="place-holder">
    <p>image pending</p>
  </div>
</Frame>
