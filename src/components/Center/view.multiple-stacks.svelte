<script>
  import Center from "./index.svelte";
  import Stack from "../Stack/index.svelte";

  export let className = "";
  export let centerSpace = "";
</script>

<style>
  .test-content {
    background-color: lightblue;
  }
</style>

<Stack stackSpace="var(--s3)">
  <Center {className} {centerSpace} centerMeasure="var(--measure-small)">
    <Stack stackSpace="var(--s-1)">
      <p class="test-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
        doloribus quod, quisquam fuga dolor, eveniet at mollitia quia
        consectetur tempore, quas distinctio molestiae error fugit! Sint soluta
        accusantium labore.
      </p>
      <p class="test-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
        doloribus quod, quisquam fuga dolor, eveniet at mollitia quia
        consectetur tempore, quas distinctio molestiae error fugit! Sint soluta
        accusantium labore.
      </p>
      <p class="test-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
        doloribus quod, quisquam fuga dolor, eveniet at mollitia quia
        consectetur tempore, quas distinctio molestiae error fugit! Sint soluta
        accusantium labore.
      </p>
    </Stack>
  </Center>
  <Center {className} {centerSpace} centerMeasure="var(--measure-small)">
    <Stack stackSpace="var(--s-1)">
      <p class="test-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
        doloribus quod, quisquam fuga dolor, eveniet at mollitia quia
        consectetur tempore, quas distinctio molestiae error fugit! Sint soluta
        accusantium labore.
      </p>
      <p class="test-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
        doloribus quod, quisquam fuga dolor, eveniet at mollitia quia
        consectetur tempore, quas distinctio molestiae error fugit! Sint soluta
        accusantium labore.
      </p>
      <p class="test-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste beatae
        doloribus quod, quisquam fuga dolor, eveniet at mollitia quia
        consectetur tempore, quas distinctio molestiae error fugit! Sint soluta
        accusantium labore.
      </p>
    </Stack>
  </Center>
</Stack>
