<script>
  import Stack from "./index.svelte";

  export let className = "";
  export let stackSpace = "";
</script>

<style>
  .test-content {
    background-color: lightblue;
  }
</style>

<Stack {className} {stackSpace}>
  <h1 class="test-content">Heading</h1>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam earum illo
    voluptatum eos dolorem deleniti. Est, exercitationem repudiandae. Eum
    quibusdam error, a placeat recusandae et odit. Molestiae tempora quibusdam
    porro.
  </p>
  <a class="test-content" href="http://www.nature.com">This is a link</a>
</Stack>
