<script>
  import Center from "./index.svelte";
  import Stack from "../Stack/index.svelte";

  export let className = "";
  export let centerSpace = "";
  export let centerMeasure = "";
</script>

<style>
  .test-content {
    margin: 0;
    background-color: lightblue;
  }

  img {
    max-width: 100%;
  }
</style>

<Stack>
  <Center {className} {centerSpace} centerMeasure="var(--measure-small)">
    <p class="test-content">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
      doloribus quod, quisquam fuga dolor, eveniet at mollitia quia consectetur
      tempore, quas distinctio molestiae error fugit! Sint soluta accusantium
      labore.
    </p>
  </Center>
  <Center {className} {centerSpace} centerMeasure="var(--measure-big)">
    <img src="img/image.jpg" alt="" />
  </Center>
  <Center {className} {centerSpace} centerMeasure="var(--measure-small)">
    <p class="test-content">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
      doloribus quod, quisquam fuga dolor, eveniet at mollitia quia consectetur
      tempore, quas distinctio molestiae error fugit! Sint soluta accusantium
      labore.
    </p>
  </Center>
  <Center {className} {centerSpace} {centerMeasure}>
    <p class="test-content">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
      doloribus quod, quisquam fuga dolor, eveniet at mollitia quia consectetur
      tempore, quas distinctio molestiae error fugit! Sint soluta accusantium
      labore.
    </p>
  </Center>
  <Center {className} {centerSpace} centerMeasure="var(--measure-small)">
    <p class="test-content">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
      doloribus quod, quisquam fuga dolor, eveniet at mollitia quia consectetur
      tempore, quas distinctio molestiae error fugit! Sint soluta accusantium
      labore.
    </p>
  </Center>
</Stack>
