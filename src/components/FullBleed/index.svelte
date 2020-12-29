<script>
  export let fullBleedMeasure = "";
  export let fullBleedSideSpace = "";
  export let fullBleedStackSpace = "";

  let fullBleedMeasureComponent = fullBleedMeasure.length
    ? `--full-bleed-measure--component: ${fullBleedMeasure};`
    : "";
  let fullBleedSideSpaceComponent = fullBleedSideSpace.length
    ? `--full-bleed-side-space--component: ${fullBleedSideSpace};`
    : "";
  let fullBleedStackSpaceComponent = fullBleedStackSpace.length
    ? `--full-bleed-stack-space--component: ${fullBleedStackSpace};`
    : "";

  let style = `${fullBleedMeasureComponent} ${fullBleedSideSpaceComponent} ${fullBleedStackSpaceComponent}`;
</script>

<style>
  :global(:root) {
    --full-bleed-measure--global: var(--measure);
    --full-bleed-side-space--global: var(--s-1);
    --full-bleed-stack-space--global: var(--s-1);
  }

  .full-bleed-container {
    --full-bleed-measure--component: initial;
    --full-bleed-side-space--component: initial;
    --full-bleed-stack-space--component: initial;
    --full-bleed-measure: var(
      --full-bleed-measure--component,
      var(--full-bleed-measure--global, 60ch)
    );
    --full-bleed-side-space: var(
      --full-bleed-side-space--component,
      var(--full-bleed-side-space--global, 1rem)
    );
    --full-bleed-stack-space: var(
      --full-bleed-stack-space--component,
      var(--full-bleed-stack-space--global)
    );

    display: grid;
    padding-right: 1rem;
    padding-right: var(--full-bleed-side-space);
    padding-left: 1rem;
    padding-left: var(--full-bleed-side-space);
    grid-template-columns:
      1fr
      1fr
      1fr
      1fr
      min(var(--full-bleed-measure), 100%)
      1fr
      1fr
      1fr
      1fr;
  }

  :global(.full-bleed-container > *) {
    grid-column: 5 / 6;
    margin: 0;
  }

  :global(.full-bleed-container > * + *) {
    margin-top: 1rem;
    margin-top: var(--full-bleed-stack-space);
  }

  :global(.full-bleed) {
    grid-column: 1 / 10;
  }

  :global(.full-bleed--2) {
    grid-column: 2 / 9;
  }

  :global(.full-bleed--3) {
    grid-column: 3 / 8;
  }

  :global(.full-bleed--4) {
    grid-column: 4 / 7;
  }

  :global(.full-bleed--left) {
    grid-column: 1 / 6;
  }

  :global(.full-bleed--left-2) {
    grid-column: 2 / 6;
  }

  :global(.full-bleed--left-3) {
    grid-column: 3 / 6;
  }

  :global(.full-bleed--left-4) {
    grid-column: 4 / 6;
  }

  :global(.full-bleed--right) {
    grid-column: 5 / 10;
  }

  :global(.full-bleed--right-2) {
    grid-column: 5 / 9;
  }

  :global(.full-bleed--right-3) {
    grid-column: 5 / 8;
  }

  :global(.full-bleed--right-4) {
    grid-column: 5 / 7;
  }
</style>

<div>
  <div class="full-bleed-container" style="{style}">
    <slot />
  </div>
</div>
