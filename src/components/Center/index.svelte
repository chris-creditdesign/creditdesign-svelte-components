<script>
  export let centerMeasure = "";
  export let centerSpace = "";

  let centerMeasureComponent = centerMeasure.length
    ? `--center-measure--component: ${centerMeasure};`
    : "";
  let centerSpaceComponent = centerSpace.length
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
    --center-measure: var(
      --center-measure--component,
      var(--center-measure--global, 60ch)
    );
    --center-space: var(
      --center-space--component,
      var(--center-space--global, 1rem)
    );

    box-sizing: content-box;
    max-width: 60ch;
    max-width: var(--center-measure);
    padding-right: 1rem;
    padding-right: var(--center-space);
    padding-left: 1rem;
    padding-left: var(--center-space);
    margin-right: auto;
    margin-left: auto;
  }
</style>

<div class="center" style="{style}">
  <slot />
</div>
