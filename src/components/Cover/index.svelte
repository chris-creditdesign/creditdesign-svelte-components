<script>
  export let coverHeight = "";
  export let coverSpace = "";

  let coverHeightComponent = coverHeight.length
    ? `--cover-height--component: ${coverHeight};`
    : "";
  let coverSpaceComponent = coverSpace.length
    ? `--cover-space--component: ${coverSpace};`
    : "";
  let style = `${coverHeightComponent} ${coverSpaceComponent}`;
</script>

<style>
  :global(:root) {
    --cover-height--global: 100vh;
    --cover-space--global: var(--s-1);
  }

  .cover {
    --cover-height--component: initial;
    --cover-space--component: initial;
    --cover-height: var(
      --cover-height--component,
      var(--cover-height--global, 100vh)
    );
    --cover-space: var(
      --cover-space--component,
      var(--cover-space--global, 1rem)
    );

    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-height: var(--cover-height);
    padding: 1rem;
    padding: var(--cover-space);
    overflow: hidden;
  }

  :global(.cover > *) {
    margin-top: var(--s-1, 1rem);
    margin-bottom: var(--s-1, 1rem);
  }

  :global(.cover > .cover__centered) {
    margin-top: auto;
    margin-bottom: auto;
  }

  :global(.cover > :first-child:not(.cover__centered)) {
    margin-top: 0;
  }

  :global(.cover > :last-child:not(.cover__centered)) {
    margin-bottom: 0;
  }
</style>

<div class="cover" style="{style}">
  <slot />
</div>
