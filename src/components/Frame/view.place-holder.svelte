<script>
  import Frame from "./index.svelte";

  export let className = "";
  export let frameRatioHeight;
  export let frameRatioWidth;
</script>

<style>
  .place-holder {
    background-color: #ececec;
    text-transform: uppercase;
    font-weight: bold;
  }
</style>

<Frame {className} {frameRatioHeight} {frameRatioWidth}>
  <div class="place-holder">
    <p>image pending</p>
  </div>
</Frame>
