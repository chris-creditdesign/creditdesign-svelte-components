<script>
  export let fullBleedStackSpace = "";
  export let fullBleedSideSpace = "";
  export let fullBleedMeasure = "";

  let fullBleedStackSpaceComponent = fullBleedStackSpace
    ? `--full-bleed-stack-space--component: ${fullBleedStackSpace};`
    : "";

  let fullBleedMeasureComponent = fullBleedMeasure
    ? `--full-bleed-measure--component: ${fullBleedMeasure};`
    : "";
  let fullBleedSideSpaceComponent = fullBleedSideSpace
    ? `--full-bleed-side-space--component: ${fullBleedSideSpace};`
    : "";
  let style = `${fullBleedStackSpaceComponent} ${fullBleedMeasureComponent} ${fullBleedSideSpaceComponent}`;
</script>

<style>
  :global(:root) {
    --full-bleed-stack-space--global: var(--s-1);
    --full-bleed-measure--global: var(--measure);
    --full-bleed-side-space--global: var(--s-1);
  }

  .full-bleed-container {
    --full-bleed-stack-space--component: initial;
    --full-bleed-measure--component: initial;
    --full-bleed-side-space--component: initial;
    --full-bleed-stack-space: var(
      --full-bleed-stack-space--component,
      var(--full-bleed-stack-space--global)
    );
    --full-bleed-measure: var(
      --full-bleed-measure--component,
      var(--full-bleed-measure--global, 60ch)
    );
    --full-bleed-side-space: var(
      --full-bleed-side-space--component,
      var(--full-bleed-side-space--global, 1rem)
    );

    display: grid;
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
    padding-right: 1rem;
    padding-right: var(--full-bleed-side-space);
    padding-left: 1rem;
    padding-left: var(--full-bleed-side-space);
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
    grid-column: 1 / -1;
  }

  :global(.full-bleed--2) {
    grid-column: 2 / -2;
  }

  :global(.full-bleed--3) {
    grid-column: 3 / -3;
  }

  :global(.full-bleed--4) {
    grid-column: 4 / -4;
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
    grid-column: 5 / -1;
  }

  :global(.full-bleed--right-2) {
    grid-column: 5 / -2;
  }

  :global(.full-bleed--right-3) {
    grid-column: 5 / -3;
  }

  :global(.full-bleed--right-4) {
    grid-column: 5 / -4;
  }
</style>

<div>
  <div class="full-bleed-container" {style}>
    <slot />
  </div>
</div>
