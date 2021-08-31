<script>
  /**
   * Creates a centered 'tube of content' with options for elements to break the column
   * srpead out to the left and right.
   *
   * Available classes for child elements are:
   *
   * - `full-bleed`
   * - `full-bleed--2`
   * - `full-bleed--3`
   * - `full-bleed--4`
   * - `full-bleed--left`
   * - `full-bleed--left--2`
   * - `full-bleed--left--3`
   * - `full-bleed--left--4`
   * - `full-bleed--right`
   * - `full-bleed--right--2`
   * - `full-bleed--right--3`
   * - `full-bleed--right--4`
   *
   * @component
   */

  /**
   * Max width of the main content column.
   */
  export let fullBleedMeasure = "";
  /**
   * Padding left and right.
   */
  export let fullBleedSideSpace = "";
  /**
   * Vertical space between content items.
   */
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

    width: 100%;

    /* If the min() function is not available ie firefox < 75, chrome < 79
       set everything into a single column, centered layout as a fall back */
    max-width: 60ch;
    max-width: var(--full-bleed-measure);
    padding-right: 1rem;
    padding-right: var(--full-bleed-side-space);
    padding-left: 1rem;
    padding-left: var(--full-bleed-side-space);
    margin-right: auto;
    margin-left: auto;
  }

  /* If the min function is available, then implement the grid layout  */
  @supports (width: min(60ch, 100%)) {
    .full-bleed-container {
      display: grid;
      max-width: none;
      gap: var(--full-bleed-stack-space, 1rem) 0;
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
  }

  :global(.full-bleed-container > *) {
    grid-column: 5 / 6;
    margin-top: 0;
    margin-bottom: 0;
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

<div class="full-bleed-container" {style}>
  <slot />
</div>
