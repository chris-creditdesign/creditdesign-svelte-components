<script>
  import FullBleed from "./index.svelte";

  export let fullBleedMeasure = "";
  export let fullBleedSideSpace = "";
  export let fullBleedStackSpace = "";
</script>

<style>
  img {
    max-width: 100%;
  }
</style>

<FullBleed
  fullBleedMeasure="{fullBleedMeasure}"
  fullBleedSideSpace="{fullBleedSideSpace}"
  fullBleedStackSpace="{fullBleedStackSpace}"
>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae
    explicabo quam reprehenderit. Atque autem, aspernatur facilis dolorum, nisi,
    eum ipsa illum mollitia sed at laudantium quas voluptatem incidunt qui?
  </p>
  <img class="full-bleed--4" src="img/image.jpg" alt="test image" />
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae
    explicabo quam reprehenderit. Atque autem, aspernatur facilis dolorum, nisi,
    eum ipsa illum mollitia sed at laudantium quas voluptatem incidunt qui?
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae
    explicabo quam reprehenderit. Atque autem, aspernatur facilis dolorum, nisi,
    eum ipsa illum mollitia sed at laudantium quas voluptatem incidunt qui?
  </p>
</FullBleed>
