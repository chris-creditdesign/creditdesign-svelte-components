<script>
  export let centerSpace = "";
  export let centerMeasure = "";

  let centerMeasureComponent = centerMeasure
    ? `--center-measure--component: ${centerMeasure};`
    : "";
  let centerSpaceComponent = centerSpace
    ? `--center-space--component: ${centerSpace};`
    : "";
  let style = `${centerMeasureComponent} ${centerSpaceComponent}`;
</script>

<style>
  :global(:root) {
    --center-measure--global: var(--measure);
    --center-space--global: var(--s-1);
  }

  .center {
    --center-measure--component: initial;
    --center-space--component: initial;

    box-sizing: content-box;
    max-width: 60ch;
    max-width: var(
      --center-measure--component,
      var(--center-measure--global, 60ch)
    );
    padding-right: 1rem;
    padding-right: var(
      --center-space--component,
      var(--center-space--global, 1rem)
    );
    padding-left: var(
      --center-space--component,
      var(--center-space--global, 1rem)
    );
    margin-right: auto;
    margin-left: auto;
  }
</style>

<div class="center" {style}>
  <slot />
</div>
